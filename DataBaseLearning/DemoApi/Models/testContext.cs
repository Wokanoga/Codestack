using System;
using DemoApi.Models.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DemoApi.Models
{
    public partial class testContext : DbContext
    {
        public testContext()
        {
        }

        public testContext(DbContextOptions<testContext> options)
            : base(options)
        {
        }

    #region DB Tables
        public virtual DbSet<Block> Block { get; set; }
        public virtual DbSet<Course> Course { get; set; }
        public virtual DbSet<Genders> Genders { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<Student> Student { get; set; }
        public virtual DbSet<Subscriptions> Subscriptions { get; set; }
        public virtual DbSet<SubscriptionType> SubscriptionType { get; set; }
        public virtual DbSet<Users> Users { get; set; }

    #endregion

    #region Stored Proc return models
        public virtual DbQuery<UserDto> UserDtos { get; set; }
    #endregion

        // Unable to generate entity type for table 'dbo.Credit'. Please see the warning messages.

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Query<UserDto>();
            modelBuilder.Entity<Block>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BlockedUserId).HasColumnName("blockedUserID");

                entity.Property(e => e.LastModified)
                    .HasColumnName("lastModified")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Block)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Block_Users");
            });

            modelBuilder.Entity<Course>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Teacher)
                    .IsRequired()
                    .HasMaxLength(256);
            });

            modelBuilder.Entity<Genders>(entity =>
            {
                entity.HasKey(e => e.GenderId);

                entity.Property(e => e.GenderId).HasColumnName("genderID");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(128);

                entity.Property(e => e.MiddelInitial).HasMaxLength(10);
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.Property(e => e.Email).HasMaxLength(256);

                entity.HasOne(d => d.Person)
                    .WithMany(p => p.Student)
                    .HasForeignKey(d => d.PersonId)
                    .HasConstraintName("FK__Student__PersonI__4BAC3F29");
            });

            modelBuilder.Entity<Subscriptions>(entity =>
            {
                entity.HasKey(e => e.SubscriptionId);

                entity.ToTable("subscriptions");

                entity.Property(e => e.SubscriptionId).HasColumnName("SubscriptionID");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasColumnName("isActive")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.SubscriptionDate)
                    .HasColumnName("subscriptionDate")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.SubscriptionTypeId).HasColumnName("subscriptionTypeID");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.HasOne(d => d.SubscriptionType)
                    .WithMany(p => p.Subscriptions)
                    .HasForeignKey(d => d.SubscriptionTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_subscriptions_subscriptionType");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Subscriptions)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_subscriptions_Users");
            });

            modelBuilder.Entity<SubscriptionType>(entity =>
            {
                entity.ToTable("subscriptionType");

                entity.Property(e => e.SubscriptionTypeId).HasColumnName("subscriptionTypeID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50);

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasColumnName("firstname")
                    .HasMaxLength(50);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("isDeleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasColumnName("lastname")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(100);
            });
        }
    }
}
