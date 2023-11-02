using Backend.Data;
using Backend.Services.Statistics.StatisticL;
using Backend.Services.Statistics.StatisticM;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticController : ControllerBase
    {
        private IStatisticMService _statisticMService;
        private IStatisticLService _statisticLService;
        public StatisticController(IStatisticMService mService, IStatisticLService lService)
        {
            _statisticMService = mService;
            _statisticLService = lService;
        }

        [HttpPost("m1")]
        public List<StatisticM1Dto> StatisticM1(StatisticDto dto)
        {

            return _statisticMService.StatisticM1(dto);
        }

        [HttpPost("m2")]
        public int StatisticM2(StatisticDto dto)
        {

            return _statisticMService.StatisticM2(dto);
        }

        [HttpPost("m3")]
        public int StatisticM3(StatisticDto dto)
        {

            return _statisticMService.StatisticM2(dto);
        }

        [HttpPost("m4")]
        public int StatisticM4(StatisticDto dto)
        {

            return _statisticMService.StatisticM2(dto);
        }

        [HttpPost("m5")]
        public List<StatisticM5Dto> StatisticM5(StatisticDto dto)
        {

            return _statisticMService.StatisticM5(dto);
        }

        [HttpPost("m6")]
        public int StatisticM6(StatisticDto dto)
        {

            return _statisticMService.StatisticM2(dto);
        }

        [HttpPost("m7")]
        public List<StatisitcM7Dto> StatisticM7(StatisticDto dto)
        {

            return _statisticMService.StatisticM7(dto);
        }

        [HttpPost("l1")]
        public int StatisticL1(StatisticDto dto)
        {

            return _statisticLService.StatisticL1(dto);
        }

    }
}
