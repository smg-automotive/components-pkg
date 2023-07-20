FROM node:lts-alpine@sha256:93d91deea65c9a0475507e8bc8b1917d6278522322f00c00b3ab09cab6830060

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
