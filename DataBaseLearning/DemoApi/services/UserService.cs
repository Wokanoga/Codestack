using System.Collections.Generic;
using System.Linq;
using DemoApi.Models;
using DemoApi.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace DemoApi.Services
{
	public class UserService
	{
		private readonly testContext _context;

		public UserService(testContext context)
		{
			_context = context;
		}

		public IEnumerable<UserDto> GetUsers(int startId, int endId)
		{
			return _context.UserDtos.FromSql($"EXEC usp_GetUsers {startId}, {endId}").ToList();
		}
	}
}