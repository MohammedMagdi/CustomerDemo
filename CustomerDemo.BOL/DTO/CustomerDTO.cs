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
        [Required(ErrorMessage = "is Requried")]
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

        [RegularExpression("^[0-9]*$",ErrorMessage = "not valid"),Range(00000000000, 99999999999, ErrorMessage = "not valid")]
        [Display(Name = "Phone")]
        public long PhoneNumber { get; set; }
        public int PhoneNumberID { get; set; }
    }
}
