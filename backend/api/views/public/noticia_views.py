from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from api.models.public_models import Noticia
from api.serializers.public_serializers import NoticiaSerializer


class NoticiaListView(ListAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer


class NoticiaDetailView(RetrieveAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer


class NoticiaCreateView(CreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer


class NoticiaUpdateView(UpdateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer


class NoticiaDeleteView(DestroyAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer