FROM node:lts@sha256:5968f50bda8ea8bdc65fd4208de287bbb25ca3ba81649494b1b6cf4b9203695e

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
