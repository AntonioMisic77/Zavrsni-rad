using Backend.Data;

namespace Backend.Services.Statistics.StatisticM
{
    public interface IStatisticMService
    {
        public List<StatisticM1Dto> StatisticM1(StatisticDto dto);
        public int StatisticM2(StatisticDto dto);
        public StatisticDto StatisticM3(StatisticDto dto);
        public StatisticDto StatisticM4(StatisticDto dto);
        public List<StatisticM5Dto> StatisticM5(StatisticDto dto);
        public StatisticDto StatisticM6(StatisticDto dto);
        public List<StatisitcM7Dto> StatisticM7(StatisticDto dto);

    }
}
