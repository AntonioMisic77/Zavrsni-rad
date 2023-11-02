using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Angle
    {
        public int atom1uid { get; set; }

        public int atom2uid { get; set;}

        public int metaluid { get; set;}

        public double deg { get; set; }
    }
}
