FROM node:lts-alpine@sha256:f605fcd5254d0e398e04d93c7b11e2aec2a6e1aeb7da1f99bc40cd101dd8cde4

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
