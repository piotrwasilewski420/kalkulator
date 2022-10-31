FROM node:14.14.0-alpine as build-app
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i
COPY ./ ./   
RUN npm run build

FROM nginx
COPY --from=build-app /app/build/ /usr/share/nginx/html/
COPY ./nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80

