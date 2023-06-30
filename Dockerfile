FROM node:lts-alpine@sha256:d5b2a7869a4016b1847986ea52098fa404421e44281bb7615a9e3615e07f37fb

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
