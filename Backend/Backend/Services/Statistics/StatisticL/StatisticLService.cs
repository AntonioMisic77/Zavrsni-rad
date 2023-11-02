using Backend.Data;
using Backend.Models;

namespace Backend.Services.Statistics.StatisticL
{
    public class StatisticLService : IStatisticLService
    {
        private MetalsDbContext _context;
        public StatisticLService(MetalsDbContext context) 
        { 
          _context = context;
        }  
        public int StatisticL1(StatisticDto dto)
        {
            throw new NotImplementedException();
        }
    }
}
