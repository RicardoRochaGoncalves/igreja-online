from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import CategoriaNoticia
from api.serializers.public_serializers import CategoriaNoticiaSerializer


class CategoriaNoticiaListView(ListAPIView):
    queryset = CategoriaNoticia.objects.all()
    serializer_class = CategoriaNoticiaSerializer


class CategoriaNoticiaDetailView(RetrieveAPIView):
    queryset = CategoriaNoticia.objects.all()
    serializer_class = CategoriaNoticiaSerializer


class CategoriaNoticiaCreateView(CreateAPIView):
    queryset = CategoriaNoticia.objects.all()
    serializer_class = CategoriaNoticiaSerializer


class CategoriaNoticiaUpdateView(UpdateAPIView):
    queryset = CategoriaNoticia.objects.all()
    serializer_class = CategoriaNoticiaSerializer


class CategoriaNoticiaDeleteView(DestroyAPIView):
    queryset = CategoriaNoticia.objects.all()
    serializer_class = CategoriaNoticiaSerializer
