FROM node:lts-alpine@sha256:ebdb58b0d966033381e8eda11dad66a70dc22df2e1e36b5050fbd547299addae

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
