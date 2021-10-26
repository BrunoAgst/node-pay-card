FROM node:17-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV PORT=3002
ENV MONGODB=<URL_CONNECTION_MONGODB>
CMD node src/index.js
EXPOSE 3002