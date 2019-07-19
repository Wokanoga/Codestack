using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace codefirst.models
{
    public class Subscription
    {
        public int SubscriptionId { get; set; }
        public int UserId { get; set; }
        public bool IsActive { get; set; }
        public int SubscriptionTypeId { get; set; }
        public DateTime SubscriptionDate { get; set; }

        [ForeignKey ("UserId")]

        public virtual User User { get; set; }

        [NotMapped]

        public string Username => User?.Username;
    }
}