# Generated by Django 5.0.7 on 2024-08-13 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_corpo_noticia_texto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticia',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]