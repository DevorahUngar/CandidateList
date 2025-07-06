using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CandidateList.Data;

namespace CandidateList.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("add")]
        public void Add(Candidate candidate)
        {
            var notebook = new CandidateRepo(_connectionString);
            candidate.Status = Status.Pending;
            notebook.Add(candidate);
        }

        [HttpGet]
        [Route("pending")]
        public List<Candidate> GetPending()
        {
            var notebook = new CandidateRepo(_connectionString);
            return notebook.GetPending();
        }

        [HttpGet]
        [Route("accepted")]
        public List<Candidate> GetAccepted()
        {
            var notebook = new CandidateRepo(_connectionString);
            return notebook.GetAccepted();
        }

        [HttpGet]
        [Route("rejected")]
        public List<Candidate> GetRejected()
        {
            var notebook = new CandidateRepo(_connectionString);
            return notebook.GetRejected();
        }

        [HttpGet]
        [Route("get-by-id")]
        public Candidate GetById(int id)
        {
            var notebook = new CandidateRepo(_connectionString);
            return notebook.GetById(id);
        }

        [HttpPost]
        [Route("accept-or-reject")]
        public void Decide(int id, string decision)
        {
            var notebook = new CandidateRepo(_connectionString);
            notebook.Decision(id, decision);
        }
    }
}
