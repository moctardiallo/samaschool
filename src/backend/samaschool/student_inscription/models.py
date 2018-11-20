from django.db import models

from django.contrib.postgres.fields import ArrayField


class Eleve(models.Model):
    nom = models.CharField(max_length=20)
    prenom = models.CharField(max_length=50)
    tel = models.CharField(max_length=20)
    quartier = models.CharField(max_length=50)
    ecole = models.CharField(max_length=50)
    classe = models.CharField(max_length=20)
    matieres = ArrayField(models.CharField(
        max_length=30), size=10)

    def __str__(self):
        return self.nom + " " + self.prenom + " " + self.tel
