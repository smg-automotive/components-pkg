FROM node:lts@sha256:0c672d547405fe64808ea28b49c5772b1026f81b3b716ff44c10c96abf177d6a

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
