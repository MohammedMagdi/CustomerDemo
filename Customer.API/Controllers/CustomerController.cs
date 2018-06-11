using Customer.API.Models;
using CustomerDemo.BOL.Requests;
using CustomerDemo.BOL.Responses;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Customer.API.Controllers
{
    public class CustomerController : ApiController
    {
        
        [HttpPost]
        [Route("api/Customer/add")]
        public ResponseBase AddCustomer(AddCustomerRequest request)
        {
            if (ModelState.IsValid)
            {
                return RequestManager.Execute(request);
            }
            else
            {
                AddCustomerResponse responseObject = new AddCustomerResponse();
                responseObject.Message = "Validation Failed";
                responseObject.Errors = ModelState.Keys
                .SelectMany(key => ModelState[key].Errors.Select(x => new ValidationError(key, x.ErrorMessage)))
                .ToList();
                return responseObject;
            }
        }

        [HttpPost]
        [Route("api/Customer/update")]
        public ResponseBase Update(UpdateCustomerRequest request)
        {
            if (ModelState.IsValid)
            {
                return RequestManager.Execute(request);
            }
            else
            {
                AddCustomerResponse responseObject = new AddCustomerResponse();
                responseObject.Message = "Validation Failed";
                responseObject.Errors = ModelState.Keys
                .SelectMany(key => ModelState[key].Errors.Select(x => new ValidationError(key, x.ErrorMessage)))
                .ToList();
                return responseObject;
            }
        }

        [HttpPost]
        [Route("api/Customer/get")]
        public ResponseBase GetCustomer(GetCustomerRequest request)
        {
            return RequestManager.Execute(request);
        }

        [HttpPost]
        [Route("api/Customer/delete")]
        public ResponseBase DeleteCustomer(DeleteCustomerRequest request)
        {
            return RequestManager.Execute(request);
        }
    }
}