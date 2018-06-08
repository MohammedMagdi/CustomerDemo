using CustomerDemo.BOL.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerDemo.BOL.Requests
{
    public class RequestManager
    {
        public static ResponseBase Execute(RequestBase request)
        {

            if (request.ValidateRequest())
            {
                return request.ExecuteRequest();
            }
            else
            {
                return new ResponseBase() { IsSuccess = false, Message = "" };
            }
        }
    }
}
