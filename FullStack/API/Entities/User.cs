using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{

	public class User 
        {

		[Key]
		[DatabaseGenerated (DatabaseGeneratedOption.Identity)]
		public int UserId { get; set; }

		[MaxLength (20)]
		public string Username { get; set; }

		public string Email { get; set; }

		public string Password { get; set; }

		public bool IsDeleted { get; set; }
	}
}