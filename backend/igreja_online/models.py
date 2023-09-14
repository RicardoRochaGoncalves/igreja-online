from django.db import models


class Endereco(models.Model):
    logradouro = models.CharField(max_length=255)
    numero = models.CharField(max_length=20)
    complemento = models.CharField(max_length=255, blank=True, null=True)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=50)
    cep = models.CharField(max_length=10)
    pais = models.CharField(max_length=100, default='Brasil')
    def __str__(self):
        return f'{self.logradouro} {self.numero}'


class Igreja(models.Model):
    nomeFantasia = models.CharField(max_length=200)
    razaoSocial = models.CharField(max_length=200)
    CNPJ = models.CharField(max_length=200, null=True, blank=True)
    dataCadastro = models.DateTimeField(auto_now_add=True)
    telefone = models.CharField(max_length=200, null=True, blank=True)
    endereco = models.ForeignKey(
        Endereco, on_delete=models.SET_NULL, null=True)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.nomeFantasia


class Categoria(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.nome


class Profissao(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.nome

class EstadoCivil(models.Model):
    nome = models.CharField(max_length=200)
    def __str__(self):
        return self.nome


class Genero(models.Model):
    nome = models.CharField(max_length=200)
    def __str__(self):
        return self.nome


class Pessoa(models.Model):
    nome = models.CharField(max_length=200)
    dataNascimento =  models.DateTimeField()
    endereco = models.ForeignKey(Endereco, on_delete=models.SET_NULL, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    profissao = models.ForeignKey(Profissao, on_delete=models.SET_NULL, null=True)
    estadoCivil = models.ForeignKey(EstadoCivil, on_delete=models.SET_NULL, null=True)
    RG = models.CharField(max_length=50)
    CPF = models.CharField(max_length=50)
    telefone = models.CharField(max_length=50, null=True, blank=True)
    genero = models.ForeignKey(Genero, on_delete=models.SET_NULL, null=True)
    ativo = models.BooleanField(default=True)
    batizado = models.BooleanField(default=True)
    observacao = models.CharField(max_length=200, null=True, blank=True)
    foto = models.ImageField(null=True, blank=True)
    cep = models.CharField(max_length=10, null=True, blank=True)
    logradouro = models.CharField(max_length=255, null=True, blank=True)
    numero = models.CharField(max_length=20, null=True, blank=True)
    complemento = models.CharField(max_length=255, null=True, blank=True)
    bairro = models.CharField(max_length=100, null=True, blank=True)
    cidade = models.CharField(max_length=100, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.nome