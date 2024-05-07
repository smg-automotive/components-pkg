FROM node:lts-alpine@sha256:7a91aa397f2e2dfbfcdad2e2d72599f374e0b0172be1d86eeb73f1d33f36a4b2

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
