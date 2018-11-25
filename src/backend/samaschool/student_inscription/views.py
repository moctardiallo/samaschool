from rest_framework import viewsets

from .models import Eleve
from .serializers import EleveSerializer


class EleveView(viewsets.ModelViewSet):
    queryset = Eleve.objects.all()
    serializer_class = EleveSerializer
