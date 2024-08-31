from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import Agenda
from api.serializers.public_serializers import AgendaSerializer


class AgendaListView(ListAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer


class AgendaDetailView(RetrieveAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer


class AgendaCreateView(CreateAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer


class AgendaUpdateView(UpdateAPIView):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer


class AgendaDeleteView(DestroyAPIView):
    queryset = Agenda.objects.all()
    serializer_class = Agenda

