using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomerDemo.BOL.Responses;

namespace CustomerDemo.BOL.Requests
{
    public class GetCustomerRequest : RequestBase
    {
        public string SearchKey { get; set; }
        public override bool ValidateRequest()
        {
            return true;
        }
        public override ResponseBase ExecuteRequest()
        {
            throw new NotImplementedException();
        }
    }
}
