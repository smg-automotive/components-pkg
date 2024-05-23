FROM node:lts-alpine@sha256:a7b980c958bfe4d84ee9263badd95a40c8bb50ad5afdb87902c187fefaef0e24

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
