FROM node:lts-alpine@sha256:a136ed7b0df71082cdb171f36d640ea3b392a5c70401c642326acee767b8c540

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
