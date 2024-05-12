using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShidduchNotebook.Data;

namespace ShidduchNotebook.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShidduchController : ControllerBase
    {
        private readonly string _connectionString;
        public ShidduchController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("phonerang")]
        public void Add(Candidate candidate)
        {
            var notebook = new ShidduchRepo(_connectionString);
            candidate.Status = Status.Pending;
            notebook.Add(candidate);
        }

        [HttpGet]
        [Route("researching")]
        public List<Candidate> GetPending()
        {
            var notebook = new ShidduchRepo(_connectionString);
            return notebook.GetPending();
        }

        [HttpGet]
        [Route("saidyes")]
        public List<Candidate> GetAccepted()
        {
            var notebook = new ShidduchRepo(_connectionString);
            return notebook.GetAccepted();
        }

        [HttpGet]
        [Route("saidno")]
        public List<Candidate> GetRejected()
        {
            var notebook = new ShidduchRepo(_connectionString);
            return notebook.GetRejected();
        }

        [HttpGet]
        [Route("turnthepage")]
        public Candidate GetById(int id)
        {
            var notebook = new ShidduchRepo(_connectionString);
            return notebook.GetById(id);
        }

        [HttpPost]
        [Route("decisionmakingtime")]
        public void Decide(int id, string decision)
        {
            var notebook = new ShidduchRepo(_connectionString);
            notebook.Decision(id, decision);
        }
    }
}
