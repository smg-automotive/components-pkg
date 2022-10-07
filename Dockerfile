FROM node:lts@sha256:c026be0433a814347c67060b221d1f9b3964b5afb4604f1463b5390aa4d3973e

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
