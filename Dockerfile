FROM node:lts-alpine@sha256:0d2712ac2b2c1149391173de670406f6e3dbdb1b2ba44e8530647e623e0e1b17

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
