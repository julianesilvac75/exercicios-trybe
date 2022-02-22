# imagem base - build
FROM node:14-alpine AS build 
# diretório de trabalho
WORKDIR /app
# copia os arquivos pra dentro do projeto
COPY package*.json ./
# roda o comando durante a criação pra instalar as dependencias
RUN npm install
# copia todos os arquivos pra dentro do projeto
COPY . .

#multi-stage build: dividir o script em mais de uma parte
# imagem base - produção
FROM nginx:1.16.0-alpine AS prod
# copia as informações do build e sua respectiva pasta para o diretorio do servidor
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
