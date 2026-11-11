# Build and serve Angular SPA using Red Hat UBI nginx
FROM registry.access.redhat.com/ubi9/nodejs-22 AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM registry.access.redhat.com/ubi9/nginx-124
COPY --from=build /app/dist/frontend/browser/ /usr/share/nginx/html/
COPY deploy/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER 1001
