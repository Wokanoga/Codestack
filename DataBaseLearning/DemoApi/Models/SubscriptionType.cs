using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class SubscriptionType
    {
        public SubscriptionType()
        {
            Subscriptions = new HashSet<Subscriptions>();
        }

        public int SubscriptionTypeId { get; set; }
        public string Description { get; set; }

        public ICollection<Subscriptions> Subscriptions { get; set; }
    }
}
