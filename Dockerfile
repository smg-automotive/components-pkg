FROM node:lts-alpine@sha256:ffc770cdc09c9e83cccd99d663bb6ed56cfaa1bab94baf1b12b626aebeca9c10

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
