using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Residue
    {
        public int residueuid { get; set; }

        public int pdbuid { get; set; }

        public int chainuid { get; set; }

        [ForeignKey(nameof(chainuid))]
        public virtual Chain chain { get; set; }

        public string residueid { get; set; }

        public string residuename { get; set; }

        public string residuenamelong { get; set; }

        public int residuetype { get; set; }

        public string residuetypename { get; set; }

        public virtual Atom atom { get; set; }

    }
}
