# Use a imagem oficial do Python como base
FROM python:3.10

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala as dependências do sistema necessárias para o PostgreSQL
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copia o requirements.txt para o container e instala as dependências do Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código da aplicação para o container
COPY . .

# Define variáveis de ambiente para evitar a criação de arquivos .pyc e desativar o buffer
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Expõe a porta 8000 para acessar a aplicação Django
EXPOSE 8000

# Comando para iniciar a aplicação Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
