#stage 1
FROM node AS node
WORKDIR /app
RUN npm install -g npm@9.4.2
COPY . .
RUN npm install --force
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/crudtuto-Front /usr/share/nginx/html