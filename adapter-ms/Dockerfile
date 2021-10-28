FROM node:17-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV HOST=http://0.0.0.0:3001/switch/create
CMD node src/index.js
EXPOSE 3000