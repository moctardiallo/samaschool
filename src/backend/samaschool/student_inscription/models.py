from django.db import models


class Eleve(models.Model):
    nom = models.CharField(max_length=20)
    prenom = models.CharField(max_length=50)
    tel = models.CharField(max_length=20)
    quartier = models.CharField(max_length=50)
    ecole = models.CharField(max_length=50)
    classe = models.CharField(max_length=20)
    matiere = models.CharField(max_length=30)

    def __str__(self):
        return self.nom + " " + self.prenom + " " + self.tel
