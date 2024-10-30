FROM node:lts-alpine@sha256:a508973271c02bf1587b4a0bee5b93da61b2b3776774fdbabc5d71dbfe973502

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
