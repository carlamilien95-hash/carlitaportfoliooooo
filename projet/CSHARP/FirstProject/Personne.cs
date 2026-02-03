using System.ComponentModel;
namespace MyApp
{
class Personne
{
    public int age;
    public string nom;
    public float taille;
    public string prenom;
    public int poids;

public Personne (string nom, string prenom, int age, float taille, int poids)
        {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
            this.taille = taille;
            this.poids = poids;
        
        }
}
}