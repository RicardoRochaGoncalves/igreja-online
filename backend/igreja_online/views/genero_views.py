from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


from igreja_online.models import Genero

from igreja_online.serializers import GeneroSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getGeneros(request):
    generos = Genero.objects.all()
    serializer = GeneroSerializer(generos, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createGenero(request):
    data = request.data
    genero = Genero.objects.create(
        nome=data["nome"],
    )
    serializer = GeneroSerializer(genero, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateGenero(request, pk):
    genero = Genero.objects.get(id=pk)
    serializer = GeneroSerializer(instance=genero, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)
    return Response(serializer.data)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteGenero(request, pk):
    genero = Genero.objects.get(id=pk)
    genero.delete()
    return Response("Gênero deletado com sucesso!")