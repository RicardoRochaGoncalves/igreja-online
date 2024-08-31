from rest_framework import serializers

from api.models.public_models import (
    CarrosselImagem,
    Versiculo,
    CategoriaNoticia,
    Noticia,
    Evento,
    EventoAoVivo,
    Versiculo,
    CategoriaAgenda,
    Agenda,
)


class CarrosselImagemSerializer(serializers.ModelSerializer):
    imagem = serializers.CharField(required=False, allow_blank=True)
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = CarrosselImagem
        fields = "__all__"

    def update(self, instance, validated_data):
        imagem = validated_data.pop("imagem", None)
        if imagem:
            instance.imagem = imagem
        return super().update(instance, validated_data)

    def get_display_name(self, obj):
        return obj.titulo


class VersiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Versiculo
        fields = "__all__"


class CategoriaNoticiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaNoticia
        fields = "__all__"


class NoticiaSerializer(serializers.ModelSerializer):
    imagem = serializers.CharField(required=False, allow_blank=True)
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = Noticia
        fields = "__all__"

    def update(self, instance, validated_data):
        imagem = validated_data.pop("imagem", None)
        if imagem:
            instance.imagem = (
                imagem  # Aqui você atualiza o caminho da imagem diretamente
            )
        return super().update(instance, validated_data)

    def get_display_name(self, obj):
        return obj.titulo


class EventoSerializer(serializers.ModelSerializer):
    display_name = serializers.SerializerMethodField()
    imagem = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Evento
        fields = "__all__"

    def get_display_name(self, obj):
        return obj.titulo

    def update(self, instance, validated_data):
        imagem = validated_data.pop("imagem", None)
        if imagem:
            instance.imagem = (
                imagem  # Aqui você atualiza o caminho da imagem diretamente
            )
        return super().update(instance, validated_data)


class EventoAoVivoSerializer(serializers.ModelSerializer):
    display_name = serializers.SerializerMethodField()
    imagem = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = EventoAoVivo
        fields = "__all__"

    def update(self, instance, validated_data):
        imagem = validated_data.pop("imagem", None)
        if imagem:
            instance.imagem = (
                imagem  # Aqui você atualiza o caminho da imagem diretamente
            )
        return super().update(instance, validated_data)

    def get_display_name(self, obj):
        return obj.titulo


class VersiculoSerializer(serializers.ModelSerializer):
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = Versiculo
        fields = "__all__"

    def get_display_name(self, obj):
        return f"{obj.livro} {obj.capitulo}:{obj.versiculo}"


class CategoriaAgendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaAgenda
        fields = "__all__"


class AgendaSerializer(serializers.ModelSerializer):
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = Agenda
        fields = "__all__"

    def get_display_name(self, obj):
        return f'{obj.categoria.nome} - {obj.data_evento.strftime("%d/%m/%Y")}'
    

