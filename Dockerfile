FROM node:18.12.1 AS builder

WORKDIR ./

COPY package.json yarn.lock ./

COPY ./ ./

RUN yarn install

RUN npm run build

FROM nginx:alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
