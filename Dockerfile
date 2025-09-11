FROM node:22-alpine

#donde crear espacio de trabajo
WORKDIR /app

#copiar
COPY package*.json .

RUN npm install

#copiar al directorio de trabajo
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]