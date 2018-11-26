using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Car2Car.Controllers.Api
{
    public class DefaultCarApiController : ApiController
    {
        
        [Route("api/test"), HttpGet]
            public string Test()
            {
            return "Hello from the API! You said"; 
            }
        
    }

}
