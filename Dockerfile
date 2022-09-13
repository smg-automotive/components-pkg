FROM node:lts@sha256:d042e99692358a03928776f5d6fd4230ea71ff163e3f2ba66f02e27f7ed69e74

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
