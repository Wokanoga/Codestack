using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models 
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

		[ForeignKey ("SubscriptionTypeId")]
		public virtual SubscriptionType SubscriptionType { get; set; }

		[NotMapped]
		public string Username => User?.Username;

	}
}