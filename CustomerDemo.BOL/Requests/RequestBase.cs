using CustomerDemo.BOL.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDemo.BOL.Requests
{
    public abstract class RequestBase
    {
        public abstract ResponseBase ExecuteRequest();
        public abstract bool ValidateRequest();
    }
}
