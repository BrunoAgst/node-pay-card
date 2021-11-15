FROM node:17-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV HOST_CREATE=http://localhost:3001/switch/create
ENV HOST_CANCEL=http://localhost:3001/switch/cancel
CMD node src/index.js
EXPOSE 3000