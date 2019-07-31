using API.Entities;
using System.Linq;
using System.Collections.Generic;
using API.Context;

namespace API.Services
{
    public class UserService
    {
        public readonly APIContext _context;
		public UserService (APIContext context) 
                {
			_context = context;
		}
 
		public IEnumerable<User> GetUserList () 
                {
			return _context.Users.ToList ();
		}
 
		public User GetUserById (int userId) 
                {
			return _context.Users.FirstOrDefault (u => u.UserId == userId);
		}
 
		public User SaveUser (User user) 
                {
			if (user.UserId == 0) 
                        {
				_context.Users.Add (user);
			} else 
                        {
				_context.Users.Update (user);
			}
			_context.SaveChanges ();
			return user;
		}
 
		public void DeleteUser (int userId) 
                {
			var userToDelete = _context.Users.Find (userId);
			_context.Users.Remove (userToDelete);
			_context.SaveChanges ();
		}
 
		public void RemoveUser (int userId) 
                {
			var userToRemove = _context.Users.Find (userId);
			userToRemove.IsDeleted = true;
			_context.Users.Update (userToRemove);
			_context.SaveChanges ();
		}
    }
}