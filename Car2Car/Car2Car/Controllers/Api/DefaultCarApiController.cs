using Car2Car.Models;
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
        
        [Route("visa/test"), HttpPost]

        public HttpResponseMessage Post()
        {
           var VisaAPIClient = new VisaAPIClient();
            string strDate = DateTime.UtcNow.ToString("yyyy-MM-ddThh:mm:ss");
           string pushFundsRequest =
               "{"
                       + "\"systemsTraceAuditNumber\":350420,"
                       + "\"retrievalReferenceNumber\":\"401010350420\","
                       + "\"localTransactionDateTime\":\"" + strDate + "\","
                       + "\"acquiringBin\":408999,\"acquirerCountryCode\":\"101\","
                       + "\"senderAccountNumber\":\"1234567890123456\","
                       + "\"senderCountryCode\":\"USA\","
                       + "\"transactionCurrencyCode\":\"USD\","
                       + "\"senderName\":\"John Smith\","
                       + "\"senderAddress\":\"44 Market St.\","
                       + "\"senderCity\":\"San Francisco\","
                       + "\"senderStateCode\":\"CA\","
                       + "\"recipientName\":\"Adam Smith\","
                       + "\"recipientPrimaryAccountNumber\":\"4957030420210454\","
                       + "\"amount\":\"112.00\","
                       + "\"businessApplicationId\":\"AA\","
                       + "\"transactionIdentifier\":234234322342343,"
                       + "\"merchantCategoryCode\":6012,"
                       + "\"sourceOfFundsCode\":\"03\","
                       + "\"cardAcceptor\":{"
                                           + "\"name\":\"John Smith\","
                                           + "\"terminalId\":\"13655392\","
                                           + "\"idCode\":\"VMT200911026070\","
                                           + "\"address\":{"
                                                           + "\"state\":\"CA\","
                                                           + "\"county\":\"081\","
                                                           + "\"country\":\"USA\","
                                                           + "\"zipCode\":\"94105\""
                                               + "}"
                                           + "},"
                       + "\"feeProgramIndicator\":\"123\""
                   + "}";

            string baseUri = "visadirect/";
            string resourcePath = "fundstransfer/v1/pushfundstransactions/";
            string status = VisaAPIClient.DoMutualAuthCall(baseUri + resourcePath, "POST", "Push Funds Transaction Test", pushFundsRequest);
           


            return Request.CreateResponse(HttpStatusCode.OK, status);

        }


    }

}
