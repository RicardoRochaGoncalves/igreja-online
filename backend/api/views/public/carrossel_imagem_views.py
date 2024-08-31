from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import CarrosselImagem
from api.serializers.public_serializers import CarrosselImagemSerializer


class CarrosselImagemListView(ListAPIView):
    queryset = CarrosselImagem.objects.all()
    serializer_class = CarrosselImagemSerializer


class CarrosselImagemDetailView(RetrieveAPIView):
    queryset = CarrosselImagem.objects.all()
    serializer_class = CarrosselImagemSerializer


class CarrosselImagemCreateView(CreateAPIView):
    queryset = CarrosselImagem.objects.all()
    serializer_class = CarrosselImagemSerializer


class CarrosselImagemUpdateView(UpdateAPIView):
    queryset = CarrosselImagem.objects.all()
    serializer_class = CarrosselImagemSerializer


class CarrosselImagemDeleteView(DestroyAPIView):
    queryset = CarrosselImagem.objects.all()
    serializer_class = CarrosselImagemSerializer