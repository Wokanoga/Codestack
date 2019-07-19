	
using System.Collections.Generic;
using DemoApi.Models.DTO;
using DemoApi.Services;
using Microsoft.AspNetCore.Mvc;
 
namespace DemoApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly UserService _userService;
		public UserController(UserService userService)
		{
			_userService = userService;
		}
 
		[HttpGet("{startId}/{endId}")]
		public ActionResult<IEnumerable<UserDto>> Users(int startId, int endId)
		{
			return Ok(_userService.GetUsers(startId, endId));
		}
	}
}