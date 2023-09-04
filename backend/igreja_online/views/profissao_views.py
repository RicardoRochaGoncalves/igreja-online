from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from igreja_online.models import Profissao

from igreja_online.serializers import ProfissaoSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getProfissoes(request):
    profissoes = Profissao.objects.all()
    serializer = ProfissaoSerializer(profissoes, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getProfissao(request, pk):
    profissao = Profissao.objects.get(id=pk)
    serializer = ProfissaoSerializer(profissao, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createProfissao(request):
    data = request.data
    profissao = Profissao.objects.create(
        nome=data["nome"],
        descricao=data["descricao"],
    )
    serializer = ProfissaoSerializer(profissao, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateProfissao(request, pk):
    data = request.data
    profissao = Profissao.objects.get(id=pk)
    serializer = ProfissaoSerializer(profissao, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteProfissao(request, pk):
    profissao = Profissao.objects.get(id=pk)
    profissao.delete()
    return Response("Profissao deletada com sucesso!")