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
    public class UpdateCustomerRequest : RequestBase
    {
        public CustomerDTO customer { get; set; }

        public override bool ValidateRequest()
        {
            return true;
        }

        public override ResponseBase ExecuteRequest()
        {
            CustomerDTO CustomerDTO = new CustomerDTO();
            AddCustomerResponse responseObject = new AddCustomerResponse();

            try
            {
                Customer CUSTOMER = new Customer();

                using (CustomerDemoEntities ctx = new CustomerDemoEntities())
                {
                    
                    var _customer = ctx.Customers.Where(c => c.ID == customer.ID).FirstOrDefault();
                    if (_customer != null)
                    {

                        if (customer.PhoneNumbers.Count > 0)
                        {
                            List<PhoneNumber> phoneNumbers = new List<PhoneNumber>();
                            for (int i = 0; i < customer.PhoneNumbers.Count; i++)
                            {
                                PhoneNumber phoneNumber = new PhoneNumber();
                                if (customer.PhoneNumbers[i].ID > 0)
                                {
                                    var _number = customer.PhoneNumbers[i].Number;

                                    phoneNumber = ctx.PhoneNumbers.Where(p => p.Number == _number
                                    && p.CustomerID == customer.ID).FirstOrDefault();

                                    if (phoneNumber != null)
                                    {
                                        phoneNumber.Number = customer.PhoneNumbers[i].Number;
                                    }
                                }
                                else
                                {
                                    phoneNumber.Number = customer.PhoneNumbers[i].Number;
                                    phoneNumber.CustomerID = customer.ID;
                                    ctx.PhoneNumbers.Add(phoneNumber);
                                }
                                ctx.SaveChanges();
                                phoneNumbers.Add(phoneNumber);
                            }
                            CUSTOMER.PhoneNumbers = phoneNumbers;
                        }
                        CUSTOMER.Name = customer.Name;
                        CUSTOMER.BirthDate = customer.BirthDate;
                        CUSTOMER.Gender = customer.Gender;
                        CUSTOMER.Email = customer.Email;
                        CUSTOMER.Address = customer.Address;
                        CUSTOMER.Notes = customer.Notes;

                        ctx.SaveChanges();

                        CustomerDTO = ConfigMapper.Map<Customer, CustomerDTO>(CUSTOMER);
                        responseObject.customer = CustomerDTO;
                        responseObject.Message = "Customer Updateed Successufully";
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