from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import Igreja
from api.serializers.area_restrita_serializers import IgrejaSerializer


class IgrejaListView(ListAPIView):
    queryset = Igreja.objects.all()
    serializer_class = IgrejaSerializer


class IgrejaDetailView(RetrieveAPIView):
    queryset = Igreja.objects.all()
    serializer_class = IgrejaSerializer


class IgrejaCreateView(CreateAPIView):
    queryset = Igreja.objects.all()
    serializer_class = IgrejaSerializer


class IgrejaUpdateView(UpdateAPIView):
    queryset = Igreja.objects.all()
    serializer_class = IgrejaSerializer


class IgrejaDeleteView(DestroyAPIView):
    queryset = Igreja.objects.all()
    serializer_class = IgrejaSerializer
