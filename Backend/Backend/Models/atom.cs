using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Atom
    {
        public int atomuid { get; set; }

        public int pdbuid { get; set; }

        [ForeignKey(nameof(pdbuid))]
        public virtual Pdb pdb { get; set; }

        public int chainuid { get; set; }

        [ForeignKey(nameof(chainuid))]
        public virtual Chain chain { get; set; }
        public int residueuid { get; set; }

        [ForeignKey(nameof(residueuid))]
        public virtual Residue residue { get; set; }

        public int atomsn { get; set; }

        public string atomname { get; set; }

        public string atomelement { get; set; }

        public int ismetal { get; set; }

        public int coordinationnumber {get; set;}

        public double occupancy { get; set; }

        public int x { get; set; }

        public int y { get; set; }

        public int z { get; set; }

    }
}
