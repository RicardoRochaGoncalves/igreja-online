from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import EventoAoVivo
from api.serializers.public_serializers import EventoAoVivoSerializer


class EventoAoVivoListView(ListAPIView):
    queryset = EventoAoVivo.objects.all()
    serializer_class = EventoAoVivoSerializer


class EventoAoVivoDetailView(RetrieveAPIView):
    queryset = EventoAoVivo.objects.all()
    serializer_class = EventoAoVivoSerializer


class EventoAoVivoCreateView(CreateAPIView):
    queryset = EventoAoVivo.objects.all()
    serializer_class = EventoAoVivoSerializer


class EventoAoVivoUpdateView(UpdateAPIView):
    queryset = EventoAoVivo.objects.all()
    serializer_class = EventoAoVivoSerializer


class EventoAoVivoDeleteView(DestroyAPIView):
    queryset = EventoAoVivo.objects.all()
    serializer_class = EventoAoVivoSerializer