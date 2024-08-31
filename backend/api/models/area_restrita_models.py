from django.db import models
from django.contrib.auth.models import User

class Igreja(models.Model):
    nome = models.CharField(max_length=100)
    razao_social = models.CharField(max_length=100, null=True, blank=True)
    cnpj = models.CharField(max_length=20, null=True, blank=True)
    telefone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class CategoriaPessoa(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    

class Profissao(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class EstadoCivil(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class Genero(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    data_nascimento = models.DateTimeField()
    cpf = models.CharField(max_length=20, null=True, blank=True)
    rg = models.CharField(max_length=20, null=True, blank=True)
    telefone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    categoria_pessoa = models.ForeignKey(CategoriaPessoa, on_delete=models.SET_NULL, null=True)
    profissao = models.ForeignKey(Profissao, on_delete=models.SET_NULL, null=True)
    estado_civil = models.ForeignKey(EstadoCivil, on_delete=models.SET_NULL, null=True)
    genero = models.ForeignKey(Genero, on_delete=models.SET_NULL, null=True)
    igreja = models.ForeignKey(Igreja, on_delete=models.SET_NULL, null=True)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)


    def __str__(self):
        return self.nome