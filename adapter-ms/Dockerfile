FROM node:17-alpine as base
WORKDIR /usr/share/app
COPY package.json /usr/share/app
RUN npm install
COPY . /usr/share/app
EXPOSE 3000

FROM base as dev
CMD npm run dev

FROM base as start
CMD npm run start