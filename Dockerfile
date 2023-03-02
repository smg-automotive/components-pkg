FROM node:lts-alpine@sha256:f8a51c36b0be7434bbf867d4a08decf0100e656203d893b9b0f8b1fe9e40daea

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
