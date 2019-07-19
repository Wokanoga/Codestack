using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class Block
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int BlockedUserId { get; set; }
        public DateTime LastModified { get; set; }

        public Users User { get; set; }
    }
}
