FROM node:20-alpine as build

WORKDIR /app

COPY . .
RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

