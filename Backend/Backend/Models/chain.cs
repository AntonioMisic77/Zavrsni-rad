using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Chain
    {
        public int chainuid { get; set; }

        public int pdbuid { get; set; }

        [ForeignKey(nameof(pdbuid))]
        public virtual Pdb pdb { get; set; }
        public string chainid { get; set; }

        public int chaintype { get; set; }

        public string chaintypename { get; set; }

        public int poc70 { get; set; }

        public virtual List<Residue> residues { get; set; }

    }
}
