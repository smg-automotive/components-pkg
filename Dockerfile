FROM node:lts-alpine@sha256:e0a779479fca9cf43cae2852291bee70e730ae3ad27fea1211060bd344b696b8

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
