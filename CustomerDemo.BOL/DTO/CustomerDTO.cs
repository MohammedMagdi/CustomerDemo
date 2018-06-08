using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDemo.BOL.DTO
{
    public class CustomerDTO
    {
        public int ID { get; set; }

        [Display(Name = "Customer Name")]
        [Required(ErrorMessage = "is Requried"), MinLength(10, ErrorMessage = "Must be at least 10 character")]
        public string Name { get; set; }

        [Display(Name = "BirthDate")]
        [Required(ErrorMessage = "is Requried"), DataType(DataType.DateTime, ErrorMessage = "not valid")]
        public DateTime BirthDate { get; set; }

        [Display(Name = "Gender")]
        [Required(ErrorMessage = "is Requried")]
        public bool Gender { get; set; }

        [Display(Name = "Email")]
        [EmailAddress(ErrorMessage = "not valid")]
        public string Email { get; set; }
        public string Address { get; set; }
        public string Notes { get; set; }
        
        public List<PhoneNumberDTO> PhoneNumbers { get; set; }
    }

    public class PhoneNumberDTO
    {
        public int ID { get; set; }

        [Display(Name = "Phone")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "not valid"), Range(00000000000, 99999999999, ErrorMessage = "not valid")]
        [Required(ErrorMessage = "is Requried")]
        public long Number { get; set; }
    }
}