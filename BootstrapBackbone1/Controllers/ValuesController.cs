using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace BootstrapBackbone1.Controllers
{
    public class FeedItem
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class ValuesController : ApiController
    {
        // GET /api/values
        public IEnumerable<FeedItem> Get()
        {
            return new[]
            {
                new FeedItem { Description = "Hello World", Name = "Scott" },
                new FeedItem { Description = "Hello World. What's up", Name = "Scott" },
                new FeedItem { Description = "in a piece ofIpsum ", Name = "Scott" },
                new FeedItem { Description = "he  predefined chunks uses a dictionary of over 200 Latin words, c", Name = "Jim" },
                new FeedItem { Description = "s that it has publishing packages and web page editors now use Lorem I", Name = "Luiz" },
                new FeedItem { Description = " page when lo readable English. Many desktop", Name = "Scott" },
                new FeedItem { Description = "Hello World", Name = "Scott" },
                new FeedItem { Description = "Hello World. What's up", Name = "Scott" },
                new FeedItem { Description = "in a piece ofd chunks uses a dictionary of over 200 Latin words, c", Name = "Jim" },
                new FeedItem { Description = "s that it has readable English. Many desktop", Name = "Scott" },
                new FeedItem { Description = "Hello World", Name = "Scott" },
                new FeedItem { Description = "Hello World. What's up", Name = "Scott" },
                new FeedItem { Description = "in a piece ofd chunks uses a dictionary of over 200 Latin words, c", Name = "Jim" },
                new FeedItem { Description = "s that it has publishing packages and web page editors now use Lorem I", Name = "Luiz" },
                new FeedItem { Description = " page when lo readable English. Many desktop", Name = "Scott" },
                new FeedItem { Description = "Hello World", Name = "Scott" },
                new FeedItem { Description = "Hello World. What's up", Name = "Scott" },
                new FeedItem { Description = "in a piece of ", Name = "Scott" },
                new FeedItem { Description = "he Internet tdictionary of over 200 Latin words, c", Name = "Jim" },
                new FeedItem { Description = "s that it has now use Lorem I", Name = "Luiz" },
                new FeedItem { Description = " page when loreadable English. Many desktop", Name = "Scott" },
                
            };
        }

        // GET /api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST /api/values
        public void Post(string value)
        {
        }

        // PUT /api/values/5
        public void Put(int id, string value)
        {
        }

        // DELETE /api/values/5
        public void Delete(int id)
        {
        }
    }
}