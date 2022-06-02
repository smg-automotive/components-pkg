FROM node:lts@sha256:9b8eb61072127e898d8d2682f28508937fc21a853c6cb5587fa14d8b05ab4455

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
