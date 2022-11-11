FROM node:lts-alpine@sha256:c1685b20cb00ab488dd7c4371973a6f62fc831b765a2b00ea2500466f2a8e74e

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
