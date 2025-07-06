using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateList.Data
{
    public class CandidateRepo
    {
        private readonly string _connectionString;
        public CandidateRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.PotentialCandidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetPending()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialCandidates.Where(p => p.Status == Status.Pending).ToList();
        }

        public List<Candidate> GetAccepted()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialCandidates.Where(p => p.Status == Status.Accepted).ToList();
        }

        public List<Candidate> GetRejected()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialCandidates.Where(p => p.Status == Status.Rejected).ToList();
        }

        public Candidate GetById(int id)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialCandidates.FirstOrDefault(p => p.Id == id);
        }

        public void Decision(int id, string decision)
        {
            var context = new CandidateDataContext(_connectionString);
            var candidate = context.PotentialCandidates.FirstOrDefault(p => p.Id == id);

            if (decision == "Accepted")
            {
                candidate.Status = Status.Accepted;
            }
            else
            {
                candidate.Status = Status.Rejected;
            }

            context.SaveChanges();

        }
    }
}
