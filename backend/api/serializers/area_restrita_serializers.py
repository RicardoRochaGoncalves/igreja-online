from rest_framework import serializers

from api.models.area_restrita_models import Igreja, CategoriaPessoa, Profissao, EstadoCivil, Genero, Pessoa


class IgrejaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Igreja
        fields = '__all__'
    

class CategoriaPessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoriaPessoa
        fields = '__all__'


class ProfissaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profissao
        fields = '__all__'


class EstadoCivilSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstadoCivil
        fields = '__all__'


class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = '__all__'


class PessoaSerializer(serializers.ModelSerializer):
    display_name = serializers.SerializerMethodField()

    class Meta:
        model = Pessoa
        fields = '__all__'

    def get_display_name(self, obj):
        return f"{obj.nome} {obj.sobrenome}"