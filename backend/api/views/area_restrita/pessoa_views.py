from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import Pessoa
from api.serializers.area_restrita_serializers import PessoaSerializer


class PessoaListView(ListAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer


class PessoaDetailView(RetrieveAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer


class PessoaCreateView(CreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer


class PessoaUpdateView(UpdateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer


class PessoaDeleteView(DestroyAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
