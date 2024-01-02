
FROM node:18-alpine


WORKDIR /app


COPY package*.json ./


RUN npm install --production


COPY . .

RUN npm prune --production

EXPOSE 3000

CMD ["npm", "start"]
