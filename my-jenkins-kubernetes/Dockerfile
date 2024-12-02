FROM node:12-alpine

WORKDIR /app

COPY ["package*.json", "index.js", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]