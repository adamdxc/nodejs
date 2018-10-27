FROM node:10.12.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]