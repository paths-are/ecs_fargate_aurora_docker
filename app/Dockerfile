FROM node:latest

WORKDIR /var/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
