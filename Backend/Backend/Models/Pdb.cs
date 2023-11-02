namespace Backend.Models
{
    public class Pdb
    {
        public int pdbuid { get; set; }

        public string pdbid { get; set; }

        public string title { get; set; }

        public int modelnumber { get; set; }

        public string method { get; set; }

        public string classification { get; set; }

        public double resolution { get; set; }

        public virtual List<Chain> chains { get; set; }

    }
}
