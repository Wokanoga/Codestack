using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers 
{
    [Route ("api/[controller]/[action]")]
    [ApiController]

    public class UserController : ControllerBase 
    {
        private readonly UserService _service;

            public UserController(UserService service)
            {
                _service = service;
            }
    }
}