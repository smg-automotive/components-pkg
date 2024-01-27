FROM node:lts-alpine@sha256:2f46fd49c767554c089a5eb219115313b72748d8f62f5eccb58ef52bc36db4ad

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
