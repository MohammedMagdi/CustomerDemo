using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomerDemo.BOL.Responses;
using CustomerDemo.BOL.DTO;
using CustomerDemo.DAL;
using CustomerDemo.BOL.Utilities;

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
            List<CustomerDTO> CustomerDTOs = new List<CustomerDTO>();
            GetCustomerResponse responseObject = new GetCustomerResponse();
            try
            {
                List<Customer> CUSTOMERs = new List<Customer>();

                using (CustomerDemoEntities ctx = new CustomerDemoEntities())
                {
                    if (!String.IsNullOrEmpty(SearchKey))
                    {
                        CUSTOMERs = ctx.Customers.Where(c => c.Name.Contains(SearchKey)
                            || c.Email.Contains(SearchKey)).ToList();
                            // || (c.ID = ctx.PhoneNumbers.Where(p => p.Number.ToString().Contains(SearchKey)).FirstOrDefault().ID).ToList();
                           
                        
                        CustomerDTOs = ConfigMapper.MapList<Customer, CustomerDTO>(CUSTOMERs);
                        if (CustomerDTOs.Count == 0)
                        {
                            responseObject.Message = "No Customer found";
                        }
                        responseObject.IsSuccess = true;
                        responseObject.customers = CustomerDTOs;
                    }
                    else
                    {
                        CUSTOMERs = ctx.Customers.ToList();

                        if (CUSTOMERs.Count > 0)
                        {
                            CustomerDTOs = ConfigMapper.MapList<Customer, CustomerDTO>(CUSTOMERs);

                            responseObject.IsSuccess = true;
                            responseObject.customers = CustomerDTOs;
                        }
                        else
                        {
                            responseObject.Message = "No Customer found";
                            responseObject.IsSuccess = true;
                        }
                        
                    }
                }
            }
            catch (Exception e)
            {
                responseObject.IsSuccess = false;
                responseObject.Message = e.Message;
            }

            return responseObject;
        }
    }
}
