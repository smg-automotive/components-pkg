FROM node:lts-alpine@sha256:adeb6d34aff46b81fb1dcf746961b6363180c53a91741c3c5c5db926c8df576c

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
