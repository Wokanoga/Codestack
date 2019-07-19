using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace codefirst.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(maxLength: 20, nullable: true),
                    Email = table.Column<string>(maxLength: 100, nullable: true),
                    Password = table.Column<string>(maxLength: 100, nullable: true),
                    IsDeleted = table.Column<bool>(maxLength: 100, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Subscripiton",
                columns: table => new
                {
                    SubscriptionId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    SubscriptionTypeId = table.Column<int>(nullable: false),
                    SubscriptionDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscripiton", x => x.SubscriptionId);
                    table.ForeignKey(
                        name: "FK_Subscripiton_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Subscripiton_UserId",
                table: "Subscripiton",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Subscripiton");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
