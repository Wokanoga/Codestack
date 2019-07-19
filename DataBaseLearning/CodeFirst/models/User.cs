using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace codefirst.models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? UserId { get; set; }
        [MaxLength (20)]
        public string Username { get; set; }
        [MaxLength (100)]
        public string Email { get; set; }
        [MaxLength (100)]
        public string Password { get; set; }
        [MaxLength (100)]
        public bool? IsDeleted { get; set; }
    }
}