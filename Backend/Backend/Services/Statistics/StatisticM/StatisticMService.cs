using Backend.Data;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Net.WebSockets;

namespace Backend.Services.Statistics.StatisticM
{
    public class StatisticMService : IStatisticMService
    {
        private MetalsDbContext _context;

        public StatisticMService(MetalsDbContext context) 
        {
            _context = context;
        }
        public List<StatisticM1Dto> StatisticM1(StatisticDto dto)
        {

            List<StatisticM1Dto> value = _context.atom.Include((a) => a.residue)
                                        .Where((a) => dto.lingads.Contains(a.residue.residuename))
                                        .GroupBy(a => a.residue.residuename)
                                        .Select(x => new StatisticM1Dto
                                        {
                                            ResidueName = x.Key,
                                            Count = x.Count(),
                                        })
                                        
                                        .ToList();
            
            return value;
        }

        public int StatisticM2(StatisticDto dto)
        {
            return _context.atom
                                .Where((a) => a.coordinationnumber == dto.coordNumber && a.atomelement == dto.metals.First())
                               .Select((a) => a.atomuid)
                               .Distinct()
                               .Count();
        }

        public StatisticDto StatisticM3(StatisticDto dto)
        {
            throw new NotImplementedException();
        }

        public StatisticDto StatisticM4(StatisticDto dto)
        {
            throw new NotImplementedException();
        }

        public List<StatisticM5Dto> StatisticM5(StatisticDto dto)
        {
           return _context.distance.Include((a) => a.atom1)
                              .Include((a) => a.atom2)
                               .Where(a => a.distance < dto.distance  && a.atom1.atomelement.Equals(dto.metals.First()))
                              .GroupBy(a => new { b = a.atom1.atomelement, c =  a.atom2.atomelement})
                              
                              .Select(x => new StatisticM5Dto
                              {
                                  atom1Name = x.Key.b,
                                  atom2Name = x.Key.c,
                                  count = x.Count()
                              }).ToList();
        }

        public StatisticDto StatisticM6(StatisticDto dto)
        {
            throw new NotImplementedException();
        }

        public List<StatisitcM7Dto> StatisticM7(StatisticDto dto)
        {
            List<string> atoms = new List<string>
            {
                "Cl","F","N","O","S"
            };

            List<StatisitcM7Dto> dtos = _context.distance.Include(a => a.atom1)
                             .Include(a => a.atom2)
                             .Where(a => atoms.Contains(a.atom2.atomelement) && a.atom1.atomelement.Equals(dto.metals.First()))
                             .GroupBy(a => new
                             {
                                 b = a.atom1.atomelement,
                                 c = a.atom2.atomelement
                             })
                             .Select(a => new StatisitcM7Dto
                             {
                                 atom1Name = a.Key.b,
                                 atom2Name = a.Key.c,
                                 count = a.Count(),
                                 avg = a.Average(x => x.distance),
                                 stdev = 0
                             }).ToList();

            foreach(var DTO in dtos)
            {
                var distances = _context.distance
                                .Where(a => a.atom1.atomelement.Equals(DTO.atom1Name) && a.atom2.atomelement.Equals(DTO.atom2Name))
                                .Select(a => a.distance)
                                .ToList();

                double sumOfSquares = distances.Sum(x => Math.Pow(x - DTO.avg, 2));
                double stdev = Math.Sqrt(sumOfSquares / (distances.Count - 1));
                DTO.stdev = stdev;
            }

            List<string> atomElements = dtos.Select(a => a.atom2Name).ToList();

            foreach (var atom in atoms) 
            { 
                if (!atomElements.Contains(atom))
                {
                    dtos.Add(new StatisitcM7Dto
                    {
                        atom1Name = dto.metals.First(),
                        atom2Name = atom,
                        count = 0,
                        avg = 0.0,
                        stdev = 0.0
                    });
                }
            }

            return dtos;
        }
    }
}
