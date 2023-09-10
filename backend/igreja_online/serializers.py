from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Endereco, Igreja, Categoria, Profissao, EstadoCivil, Genero, Pessoa


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']



class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)



class EnderecoSerializer(serializers.ModelSerializer):
    nome = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Endereco
        fields = '__all__'

    def get_nome(self, obj):
        return obj.logradouro

class IgrejaSerializer(serializers.ModelSerializer):
    nome = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Igreja
        fields = '__all__'

    def get_nome(self, obj):
        return obj.nomeFantasia

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
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
   class Meta:
        model = Pessoa
        fields = '__all__'



