from django.db import models
from django.utils import timezone
from .area_restrita_models import Pessoa

class CarrosselImagem(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)
    imagem = models.ImageField(upload_to='carrossel_imagens/', null=True, blank=True)
    data_cadastro = models.DateTimeField(default=timezone.now)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo


class Versiculo(models.Model):
    texto = models.TextField()
    livro = models.CharField(max_length=100)
    capitulo = models.IntegerField()
    versiculo = models.IntegerField()
    mensagem = models.TextField(null=True, blank=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.livro} {self.capitulo}:{self.versiculo}"
    

class CategoriaNoticia(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.nome


class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    texto = models.TextField()
    data_postagem = models.DateTimeField(default=timezone.now)
    categoria = models.ForeignKey(CategoriaNoticia, on_delete=models.SET_NULL, null=True)
    material_externo = models.CharField(blank=True, null=True)
    imagem = models.ImageField(blank=True, null=True)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo
    


class Evento(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data_evento = models.DateTimeField()
    imagem = models.ImageField(blank=True, null=True)
    data_postagem = models.DateTimeField(default=timezone.now)
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
        return self.titulo
    

class EventoAoVivo(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    data_evento = models.DateTimeField()
    link_youtube = models.CharField()
    imagem = models.ImageField(blank=True, null=True)
    ativo = models.BooleanField(default=True)
    data_cadastro = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
    

class CategoriaAgenda(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.nome
    

class Agenda(models.Model):
    data_evento = models.DateTimeField()
    categoria = models.ForeignKey(CategoriaAgenda, on_delete=models.SET_NULL, null=True)
    dirigente = models.ForeignKey(Pessoa, on_delete=models.SET_NULL, null=True, related_name='dirigente')
    pregador = models.ForeignKey(Pessoa, on_delete=models.SET_NULL, null=True, related_name='pregador')
    data_cadastro = models.DateTimeField(auto_now_add=True)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.categoria.nome} - {self.data_evento.strftime("%d/%m/%Y")}'
