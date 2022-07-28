FROM node:lts@sha256:da6394f75d6b6f88c0e1ef6fde5805d7385a50159237830a69e9ff154631775e

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
