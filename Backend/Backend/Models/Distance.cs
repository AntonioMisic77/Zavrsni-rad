using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Distance
    {
        public int atom1uid { get; set; }

        [ForeignKey(nameof(atom1uid))]
        public virtual Atom atom1 { get; set; }

        public int atom2uid { get; set; }

        [ForeignKey(nameof(atom2uid))]
        public virtual Atom atom2 { get; set; }

        public double distance { get; set; }
    }
}
