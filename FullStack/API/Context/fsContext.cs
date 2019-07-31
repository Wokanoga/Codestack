using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Context
{
	public class APIContext : DbContext 
        {
		public APIContext (DbContextOptions<APIContext> options) : base (options) { }

		public DbSet<User> Users { get; set; }
		public DbSet<Subscription> Subscription { get; set; }
		public DbSet<SubscriptionType> SubscriptionTypes { get; set; }
	}
}