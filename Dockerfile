FROM node:lts@sha256:d8d3181ca9840f6667ae8694c35511af806e31c45f9c4fa5f80328b0b2c1dc44

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
