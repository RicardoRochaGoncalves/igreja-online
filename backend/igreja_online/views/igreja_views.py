from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


from igreja_online.models import Igreja, Endereco

from igreja_online.serializers import IgrejaSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getIgrejas(request):
    igrejas = Igreja.objects.all()
    serializer = IgrejaSerializer(igrejas, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createIgreja(request):
    data = request.data
    endereco_id = data["endereco"]

    try:
        endereco = Endereco.objects.get(id=endereco_id)
    except:
        return Response(
            {"detail": "Endereço não encontrado"}, status=status.HTTP_400_BAD_REQUEST
        )

    igreja = Igreja.objects.create(
        nomeFantasia=data["nomeFantasia"],
        razaoSocial=data["razaoSocial"],
        CNPJ=data["CNPJ"],
        dataCadastro=data["dataCadastro"],
        telefone=data["telefone"],
        endereco=endereco,
    )
    serializer = IgrejaSerializer(igreja, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateIgreja(request, pk):
    igreja = Igreja.objects.get(id=pk)
    serializer = IgrejaSerializer(instance=igreja, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteIgreja(request, pk):
    igreja = Igreja.objects.get(id=pk)
    igreja.delete()
    return Response("Igreja deletada com sucesso!")

