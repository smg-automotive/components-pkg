FROM node:lts-alpine@sha256:751a2934c5d784d1d4b3feb189bf1dd62bf08918cf6bb3e9f06eead6df71a0f3

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
