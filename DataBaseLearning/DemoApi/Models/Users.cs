using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class Users
    {
        public Users()
        {
            Block = new HashSet<Block>();
            Subscriptions = new HashSet<Subscriptions>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int? Gender { get; set; }
        public bool? IsDeleted { get; set; }

        public ICollection<Block> Block { get; set; }
        public ICollection<Subscriptions> Subscriptions { get; set; }
    }
}
