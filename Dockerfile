#STEP 1 BUILD VUE PROJECT
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


#STEP 2 CREATE NGINX SERVER
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

