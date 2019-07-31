using API.Entities;
using System.Linq;
using System.Collections.Generic;
using API.Context;

namespace API.Services
{
    public class UserService
    {
        public readonly APIContext _context;

        public User AddUser( User user ){
            _context.Users.Add(user); //Student Id is zero
           _context.SaveChanges();
            return user; // studdent id has a value
        }
    }
}