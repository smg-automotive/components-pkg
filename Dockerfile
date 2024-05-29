FROM node:lts-alpine@sha256:2288b63e7fdb570cba7c72401a8331f246e432ba18b9b2d646e6afab773a6a7f

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
