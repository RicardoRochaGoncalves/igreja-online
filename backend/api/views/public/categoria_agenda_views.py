from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import CategoriaAgenda
from api.serializers.public_serializers import CategoriaAgendaSerializer


class CategoriaAgendaListView(ListAPIView):
    queryset = CategoriaAgenda.objects.all()
    serializer_class = CategoriaAgendaSerializer


class CategoriaAgendaDetailView(RetrieveAPIView):
    queryset = CategoriaAgenda.objects.all()
    serializer_class = CategoriaAgendaSerializer


class CategoriaAgendaCreateView(CreateAPIView):
    queryset = CategoriaAgenda.objects.all()
    serializer_class = CategoriaAgendaSerializer


class CategoriaAgendaUpdateView(UpdateAPIView):
    queryset = CategoriaAgenda.objects.all()
    serializer_class = CategoriaAgendaSerializer


class CategoriaAgendaDeleteView(DestroyAPIView):
    queryset = CategoriaAgenda.objects.all()
    serializer_class = CategoriaAgendaSerializer
    