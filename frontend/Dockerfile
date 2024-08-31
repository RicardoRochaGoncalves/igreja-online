# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia o restante do código da aplicação para o container
COPY . .

# Expõe a porta 3000 para acessar a aplicação React
EXPOSE 3000


# Comando para iniciar a aplicação React em modo de desenvolvimento
CMD ["npm", "start"]
