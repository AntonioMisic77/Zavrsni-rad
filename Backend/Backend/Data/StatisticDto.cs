namespace Backend.Data
{
    public class StatisticDto
    {
        public string pdb { get; set; }
        public string method { get; set; }

        public int distance { get; set; }

        public int coordNumber { get; set; }

        public int RMSD { get; set; }

        public List<String> metals { get; set; }

        public List<String> lingads { get; set; }

        public List<String> chainTypes { get; set; }

    }
}
