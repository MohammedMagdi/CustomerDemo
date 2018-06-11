using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Customer.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            string origin = "*";

            EnableCorsAttribute cors = new EnableCorsAttribute(origin, "*", "GET,POST");
            // Web API configuration and services
            config.EnableCors(cors);
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
