from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import EstadoCivil
from api.serializers.area_restrita_serializers import EstadoCivilSerializer


class EstadoCivilListView(ListAPIView):
    queryset = EstadoCivil.objects.all()
    serializer_class = EstadoCivilSerializer


class EstadoCivilDetailView(RetrieveAPIView):
    queryset = EstadoCivil.objects.all()
    serializer_class = EstadoCivilSerializer


class EstadoCivilCreateView(CreateAPIView):
    queryset = EstadoCivil.objects.all()
    serializer_class = EstadoCivilSerializer


class EstadoCivilUpdateView(UpdateAPIView):
    queryset = EstadoCivil.objects.all()
    serializer_class = EstadoCivilSerializer


class EstadoCivilDeleteView(DestroyAPIView):
    queryset = EstadoCivil.objects.all()
    serializer_class = EstadoCivilSerializer
