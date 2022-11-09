FROM node:lts-alpine@sha256:ae6cf743c4c290423e163d8a85db7a08b831aace7e2486e857147f78f0cc34d3

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
