FROM node:lts@sha256:ba63443653985f747c9958a122ad68a4b1437bbebbb47e41328c1cea9b60718e

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
