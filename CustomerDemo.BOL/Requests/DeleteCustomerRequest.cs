using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CustomerDemo.BOL.Responses;
using CustomerDemo.BOL.DTO;
using CustomerDemo.DAL;

namespace CustomerDemo.BOL.Requests
{
    public class DeleteCustomerRequest : RequestBase
    {
        public int CustomerID { get; set; }
        public override bool ValidateRequest()
        {
            return true;
        }

        public override ResponseBase ExecuteRequest()
        {
            AddCustomerResponse responseObject = new AddCustomerResponse();
            try
            {
                using (CustomerDemoEntities ctx = new CustomerDemoEntities())
                {
                    var _customer = ctx.Customers.Where(c => c.ID == CustomerID).FirstOrDefault();
                    if (_customer != null)
                    {

                        if (_customer.PhoneNumbers.Count > 0)
                        {
                            var _phoneNumbers = ctx.PhoneNumbers.Where(p => p.CustomerID == CustomerID).ToList();
                            ctx.PhoneNumbers.RemoveRange(_phoneNumbers);
                        }

                        ctx.Customers.Remove(_customer);
                        ctx.SaveChanges();


                        responseObject.Message = "Customer deleted Successufully";
                        responseObject.IsSuccess = true;
                    }
                    else
                    {
                        responseObject.IsSuccess = false;
                        responseObject.Message = "Customer not exist";
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
        