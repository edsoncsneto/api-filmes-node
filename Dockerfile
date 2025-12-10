# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto para o diretório de trabalho no container
COPY . .

# Instalar as dependências do Node.js
RUN npm install

# Expor a porta em que o servidor irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
