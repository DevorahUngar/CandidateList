using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShidduchNotebook.Data
{
    public class ShidduchRepo
    {
        private readonly string _connectionString;
        public ShidduchRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Candidate candidate)
        {
            var context = new CandidateDataContext(_connectionString);
            context.PotentialSpouses.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetPending()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialSpouses.Where(p => p.Status == Status.Pending).ToList();
        }

        public List<Candidate> GetAccepted()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialSpouses.Where(p => p.Status == Status.Accepted).ToList();
        }

        public List<Candidate> GetRejected()
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialSpouses.Where(p => p.Status == Status.Rejected).ToList();
        }

        public Candidate GetById(int id)
        {
            var context = new CandidateDataContext(_connectionString);
            return context.PotentialSpouses.FirstOrDefault(p => p.Id == id);
        }

        public void Decision(int id, string decision)
        {
            var context = new CandidateDataContext(_connectionString);
            var candidate = context.PotentialSpouses.FirstOrDefault(p => p.Id == id);

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
