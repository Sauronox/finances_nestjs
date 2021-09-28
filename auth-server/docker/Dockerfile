FROM node:16.9.1-buster

WORKDIR /opt/app

COPY . .

RUN yarn
RUN yarn build
RUN npm rebuild bcrypt --build-from-source
