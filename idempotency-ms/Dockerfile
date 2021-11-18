FROM node:17-alpine as base
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3001

FROM base as dev
CMD npm run dev

FROM base as start
CMD npm run start