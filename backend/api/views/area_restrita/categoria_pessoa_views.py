from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.area_restrita_models import CategoriaPessoa
from api.serializers.area_restrita_serializers import CategoriaPessoaSerializer


class CategoriaPessoaListView(ListAPIView):
    queryset = CategoriaPessoa.objects.all()
    serializer_class = CategoriaPessoaSerializer


class CategoriaPessoaDetailView(RetrieveAPIView):
    queryset = CategoriaPessoa.objects.all()
    serializer_class = CategoriaPessoaSerializer


class CategoriaPessoaCreateView(CreateAPIView):
    queryset = CategoriaPessoa.objects.all()
    serializer_class = CategoriaPessoaSerializer


class CategoriaPessoaUpdateView(UpdateAPIView):
    queryset = CategoriaPessoa.objects.all()
    serializer_class = CategoriaPessoaSerializer


class CategoriaPessoaDeleteView(DestroyAPIView):
    queryset = CategoriaPessoa.objects.all()
    serializer_class = CategoriaPessoaSerializer
