from django.contrib import admin
from .models.area_restrita_models import Igreja, CategoriaPessoa, Profissao, EstadoCivil, Genero, Pessoa
from .models.public_models import CarrosselImagem, Versiculo, CategoriaNoticia, Noticia, Evento, EventoAoVivo, CategoriaAgenda, Agenda

admin.site.register(Igreja)
admin.site.register(CategoriaPessoa)
admin.site.register(Profissao)
admin.site.register(EstadoCivil)
admin.site.register(Genero)
admin.site.register(Pessoa)


@admin.register(CarrosselImagem)
class CarrosselImagemAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_cadastro', 'ativo')
    list_filter = ('ativo', 'data_cadastro')
    search_fields = ('titulo', 'descricao')


@admin.register(Versiculo)
class VersiculoAdmin(admin.ModelAdmin):
    list_display = ('livro', 'capitulo', 'versiculo', 'data_cadastro', 'ativo')
    list_filter = ('ativo', 'data_cadastro', 'livro')
    search_fields = ('citacao', 'mensagem')


@admin.register(Noticia)
class NoticiaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_postagem', 'categoria', 'ativo')
    list_filter = ('categoria', 'ativo', 'data_postagem')
    search_fields = ('titulo', 'corpo')


@admin.register(CategoriaNoticia)
class CategoriaNoticiaAdmin(admin.ModelAdmin):
    list_display = ('nome',)
    search_fields = ('nome',)


@admin.register(Evento)
class EventoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_evento', 'data_postagem', 'cidade', 'estado', 'ativo')
    list_filter = ('ativo', 'data_evento', 'data_postagem', 'cidade', 'estado')
    search_fields = ('titulo', 'descricao', 'cep', 'logradouro', 'bairro', 'cidade', 'estado')
    list_display_links = ('titulo',)


@admin.register(EventoAoVivo)
class EventoAoVivoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_evento', 'link_youtube', 'ativo', 'data_cadastro')
    list_filter = ('ativo', 'data_evento', 'data_cadastro')
    search_fields = ('titulo', 'descricao', 'link_youtube')
    list_display_links = ('titulo',)


@admin.register(CategoriaAgenda)
class CategoriaAgendaAdmin(admin.ModelAdmin):
    list_display = ('nome',)
    search_fields = ('nome',)
    list_display_links = ('nome',)
    list_filter = ('nome',)


@admin.register(Agenda)
class AgendaAdmin(admin.ModelAdmin):
    list_display = ('data_evento', 'categoria', 'dirigente', 'pregador','ativo', 'data_cadastro')
    list_filter = ('ativo', 'data_evento', 'data_cadastro')
    search_fields = ('data_evento', 'categoria', 'dirigente', 'pregador')
    list_display_links = ('data_evento',)
    