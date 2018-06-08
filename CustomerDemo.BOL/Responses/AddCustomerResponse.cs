using CustomerDemo.BOL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDemo.BOL.Responses
{
    public class AddCustomerResponse : ResponseBase
    {
        public CustomerDTO customer { get; set; }
    }
}
