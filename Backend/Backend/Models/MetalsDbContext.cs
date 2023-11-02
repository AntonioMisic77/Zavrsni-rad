using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class MetalsDbContext : DbContext
    {

        public MetalsDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Angle> angle { get; set; }

        public DbSet<Atom> atom { get; set; }

        public DbSet<Chain> chain { get; set; }

        public DbSet<Distance> distance { get; set; }

        public DbSet<Geometry> geometry { get; set; }

        public DbSet<Pdb>  pdb { get; set; }

        public DbSet<Residue> residue { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Angle>().HasKey(pk => new { pk.atom1uid, pk.atom2uid, pk.metaluid });
            modelBuilder.Entity<Atom>().HasKey(pk => pk.atomuid);
            modelBuilder.Entity<Chain>().HasKey(pk => pk.chainuid);
            modelBuilder.Entity<Distance>().HasKey(pk => new {pk.atom1uid,pk.atom2uid});
            modelBuilder.Entity<Geometry>().HasKey(pk => pk.metaluid);
            modelBuilder.Entity<Pdb>().HasKey(pk => pk.pdbuid);
            modelBuilder.Entity<Residue>().HasKey(pk => pk.residueuid);
        }

    }
}
