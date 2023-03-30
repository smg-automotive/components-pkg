FROM node:lts-alpine@sha256:f1402c1609f978154461781b76e634e7010756f9b212f601fba89c42366bc3e2

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
