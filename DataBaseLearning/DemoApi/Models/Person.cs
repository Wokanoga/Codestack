using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class Person
    {
        public Person()
        {
            Student = new HashSet<Student>();
        }

        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string MiddelInitial { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

        public ICollection<Student> Student { get; set; }
    }
}
