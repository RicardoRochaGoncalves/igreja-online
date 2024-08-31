from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import Evento
from api.serializers.public_serializers import EventoSerializer


class EventoListView(ListAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer


class EventoDetailView(RetrieveAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer


class EventoCreateView(CreateAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer


class EventoUpdateView(UpdateAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer


class EventoDeleteView(DestroyAPIView):
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer

