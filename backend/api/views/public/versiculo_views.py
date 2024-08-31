from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import Versiculo
from api.serializers.public_serializers import VersiculoSerializer


class VersiculoListView(ListAPIView):
    queryset = Versiculo.objects.all()
    serializer_class = VersiculoSerializer


class VersiculoDetailView(RetrieveAPIView):
    queryset = Versiculo.objects.all()
    serializer_class = VersiculoSerializer


class VersiculoCreateView(CreateAPIView):
    queryset = Versiculo.objects.all()
    serializer_class = VersiculoSerializer


class VersiculoUpdateView(UpdateAPIView):
    queryset = Versiculo.objects.all()
    serializer_class = VersiculoSerializer


class VersiculoDeleteView(DestroyAPIView):
    queryset = Versiculo.objects.all()
    serializer_class = VersiculoSerializer