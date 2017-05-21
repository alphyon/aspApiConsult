using System.Web.Http;
using RestSharp;
using Newtonsoft;
using System;
using Newtonsoft.Json;

namespace EvaluacionTec.Controllers
{
    public class StackController : ApiController
    {

        [HttpGet]
        [ActionName("answers")]
        public string GetAnswers(string id)
        {
            var client = new RestClient("https://api.stackexchange.com");
            var request = new RestRequest("2.2/questions/" + id +"/answers", Method.GET);
            request.AddParameter("site", "stackoverflow");
            request.AddParameter("filter", "withbody");
            IRestResponse response = client.Execute(request);
            var content = (response.Content);
            var json = JsonConvert.DeserializeObject(content);
            if (content == null)
            {
                return "Error";
            }
            return json.ToString();
        }

        [HttpGet]
        [ActionName("quest")]
        public string Get(string id)
        {
            
            var client = new RestClient("https://api.stackexchange.com");
            var request = new RestRequest("2.2/questions/" + id, Method.GET);
            request.AddParameter("site", "stackoverflow");
            request.AddParameter("filter", "withbody");
            IRestResponse response = client.Execute(request);
            var content = (response.Content);
            var json = JsonConvert.DeserializeObject(content);
            if (content == null)
            {
                return "Error";
            }
            return json.ToString();
        }

        [HttpGet]
        [ActionName("questions")]
        public string GetAll()
        {
            DateTime dateQuest = DateTime.Now;
            string dateString = dateQuest.ToString("yyyy-MM-dd");
            var client = new RestClient("https://api.stackexchange.com");
            var request = new RestRequest("2.2/questions", Method.GET);
            request.AddParameter("todate", dateString);
            request.AddParameter("site", "stackoverflow");

            IRestResponse response = client.Execute(request);
            var content = (response.Content);
            var json = JsonConvert.DeserializeObject(content);
            if (content == null)
            {
                return "Error";
            }
            return json.ToString();
        }




    }

   
       
}
