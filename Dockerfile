FROM node:lts-alpine@sha256:6cfd13114b39f5d9459f5bdff1ef1c3149c3871535ee33bd15a153b8c16e0d99

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
