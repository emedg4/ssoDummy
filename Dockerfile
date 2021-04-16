# FROM node:14.16 AS builder
# WORKDIR /api
# COPY ./package.json .
# RUN npm install --only=prod
# RUN npm run build
# COPY . .

# FROM node:14.16-alpine
# COPY --from=builder . /app
# WORKDIR /dist
# CMD ["node", "main.js"]