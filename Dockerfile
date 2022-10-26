FROM node:lts@sha256:676b6c3c77f7d4324d1f8dceff33e3c8b08d9089016ab59c0657852aa95f9eb7

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
