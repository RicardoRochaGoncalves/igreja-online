from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


from igreja_online.models import Pessoa, Endereco, EstadoCivil, Genero, Profissao, Categoria

from igreja_online.serializers import PessoaSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getPessoas(request):
    pessoa = Pessoa.objects.all()
    serializer = PessoaSerializer(pessoa, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getPessoa(request, pk):
    pessoa = Pessoa.objects.get(id=pk)
    serializer = PessoaSerializer(pessoa, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createPessoa(request):
    data = request.data
    pessoa = Pessoa.objects.create(
        nome=data["nome"],
        dataNascimento=data["dataNascimento"],
        endereco=Endereco.objects.get(id=data["endereco"]),
        categoria=Categoria.objects.get(id=data["categoria"]),
        profissao=Profissao.objects.get(id=data["profissao"]),
        estadoCivil=EstadoCivil.objects.get(id=data["estadoCivil"]),
        RG=data["RG"],
        CPF=data["CPF"],
        telefone=data["telefone"],
        genero=Genero.objects.get(id=data["genero"]),
        ativo=data["ativo"],
        batizado=data["batizado"],
        observacao=data["observacao"],
        foto=data["foto"],
    )
    serializer = PessoaSerializer(pessoa, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updatePessoa(request, pk):
    pessoa = Pessoa.objects.get(id=pk)
    serializer = PessoaSerializer(instance=pessoa, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)
    return Response(serializer.data)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deletePessoa(request, pk):
    pessoa = Pessoa.objects.get(id=pk)
    pessoa.delete()
    return Response("Pessoa deletada com sucesso!")