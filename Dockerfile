FROM node:lts-alpine@sha256:fac6f741d51194c175c517f66bc3125588313327ad7e0ecd673e161e4fa807f3

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
