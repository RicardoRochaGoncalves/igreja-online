# Generated by Django 5.0.7 on 2024-08-31 13:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_eventoaovivo_imagem'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoriaAgenda',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('descricao', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Agenda',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_evento', models.DateTimeField()),
                ('imagem', models.ImageField(blank=True, null=True, upload_to='')),
                ('data_cadastro', models.DateTimeField(auto_now_add=True)),
                ('ativo', models.BooleanField(default=True)),
                ('dirigente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='dirigente', to='api.pessoa')),
                ('pregador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='pregador', to='api.pessoa')),
                ('categoria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.categoriaagenda')),
            ],
        ),
    ]
