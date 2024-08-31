from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import Profissao
from api.serializers.area_restrita_serializers import ProfissaoSerializer


class ProfissaoListView(ListAPIView):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer


class ProfissaoDetailView(RetrieveAPIView):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer


class ProfissaoCreateView(CreateAPIView):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer


class ProfissaoUpdateView(UpdateAPIView):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer


class ProfissaoDeleteView(DestroyAPIView):
    queryset = Profissao.objects.all()
    serializer_class = ProfissaoSerializer
