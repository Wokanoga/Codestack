using System;
using System.Collections.Generic;

namespace DemoApi.Models
{
    public partial class Student
    {
        public int StudentId { get; set; }
        public int? PersonId { get; set; }
        public string Email { get; set; }

        public Person Person { get; set; }
    }
}
