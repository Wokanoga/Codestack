using API.Services;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers 
{
    [Route ("api/[controller]/[action]")]
    [ApiController]

    public class UserController : ControllerBase 
        {
		private readonly UserService _service;
 
		public UserController (UserService service) 
        {
			_service = service;
		}
 
		[HttpGet]
		public ActionResult<IEnumerable<User>> List () 
        {
			return Ok (_service.GetUserList ());
		}
 
		[HttpGet ("{id}")]
		public ActionResult<User> GetById (int id) 
        {
			return Ok (_service.GetUserById (id));
		}
 
		
		[HttpPost]
		public ActionResult<User> SaveUser ([FromBody] User user) 
        {
			return Ok (_service.SaveUser (user));
		}
 
		
		[HttpDelete ("{id}")]
		public void DeleteUser (int id) { _service.DeleteUser (id); }
 
		
		[HttpPost ("{id}")]
		public void RemoveUser (int id) { _service.RemoveUser (id); }


		/* [HttpPost]
		public ActionResult<User> SaveUser([FromBody]User user)
		{
			if (user.UserId > 0){
				return BadRequest("User ID cannot be greater than zero.");
			}
			return Ok(_service.AddUser(user));
		} */

	}
}