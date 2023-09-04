from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


from igreja_online.models import Categoria

from igreja_online.serializers import CategoriaSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getCategorias(request):
    categorias = Categoria.objects.all()
    serializer = CategoriaSerializer(categorias, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getCategoria(request, pk):
    categoria = Categoria.objects.get(id=pk)
    serializer = CategoriaSerializer(categoria, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createCategoria(request):
    data = request.data
    categoria = Categoria.objects.create(
        nome=data["nome"],
        descricao=data["descricao"],
    )
    serializer = CategoriaSerializer(categoria, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateCategoria(request, pk):
    categoria = Categoria.objects.get(id=pk)
    serializer = CategoriaSerializer(instance=categoria, data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)

    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteCategoria(request, pk):
    categoria = Categoria.objects.get(id=pk)
    categoria.delete()
    return Response("Categoria deletada com sucesso!")