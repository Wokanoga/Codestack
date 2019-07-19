using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class Subscriptions
    {
        public int SubscriptionId { get; set; }
        public int UserId { get; set; }
        public bool? IsActive { get; set; }
        public int SubscriptionTypeId { get; set; }
        public DateTime SubscriptionDate { get; set; }

        public SubscriptionType SubscriptionType { get; set; }
        public Users User { get; set; }
    }
}
