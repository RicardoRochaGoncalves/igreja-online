from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import Genero
from api.serializers.area_restrita_serializers import GeneroSerializer


class GeneroListView(ListAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class GeneroDetailView(RetrieveAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class GeneroCreateView(CreateAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class GeneroUpdateView(UpdateAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer


class GeneroDeleteView(DestroyAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
