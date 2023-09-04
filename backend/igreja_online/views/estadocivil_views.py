from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from igreja_online.models import EstadoCivil


from igreja_online.serializers import EstadoCivilSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getEstadosCivis(request):
    estados_civis = EstadoCivil.objects.all()
    serializer = EstadoCivilSerializer(estados_civis, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getEstadoCivil(request, pk):
    estado_civil = EstadoCivil.objects.get(id=pk)
    serializer = EstadoCivilSerializer(estado_civil, many=False)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createEstadoCivil(request):
    data = request.data
    estado_civil = EstadoCivil.objects.create(
        nome=data["nome"],
    )
    serializer = EstadoCivilSerializer(estado_civil, many=False)
    return Response(serializer.data)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateEstadoCivil(request, pk):
    estado_civil = EstadoCivil.objects.get(id=pk)
    serializer = EstadoCivilSerializer(instance=estado_civil, data=request.data)

    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors, status=400)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def deleteEstadoCivil(request, pk):
    estado_civil = EstadoCivil.objects.get(id=pk)
    estado_civil.delete()
    return Response("Estado Civil deletado com sucesso")