using Microsoft.EntityFrameworkCore;

namespace codefirst.models
{
    public class CodeFirstContext : DbContext
    {

        public CodeFirstContext (DbContextOptions<CodeFirstContext> options) : base (options) { }
        
        public DbSet<User> User { get; set; }

        public DbSet<Subscription> Subscripiton { get; set; }


    }
}