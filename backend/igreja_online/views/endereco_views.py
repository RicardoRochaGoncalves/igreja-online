from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from igreja_online.models import Endereco

from igreja_online.serializers import EnderecoSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getEnderecos(request):
    enderecos = Endereco.objects.all()
    serializer = EnderecoSerializer(enderecos, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createEndereco(request):
    data = request.data
    endereco = Endereco.objects.create(
        logradouro=data["logradouro"],
        numero=data["numero"],
        complemento=data["complemento"],
        bairro=data["bairro"],
        cidade=data["cidade"],
        estado=data["estado"],
        cep=data["cep"],
        pais=data["pais"],
    )
    serializer = EnderecoSerializer(endereco, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateEndereco(request, pk):
    endereco = Endereco.objects.get(id=pk)
    serializer = EnderecoSerializer(instance=endereco, data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)

    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteEndereco(request, pk):
    endereco = Endereco.objects.get(id=pk)
    endereco.delete()
    return Response("Endereço deletado com sucesso!")