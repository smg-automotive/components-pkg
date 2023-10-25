FROM node:lts-alpine@sha256:435dcad253bb5b7f347ebc69c8cc52de7c912eb7241098b920f2fc2d7843183d

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
