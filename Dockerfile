FROM node:lts-alpine@sha256:619ce27eb37c7c0476bd518085bf1ba892e2148fc1ab5dbaff2f20c56e50444d

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
