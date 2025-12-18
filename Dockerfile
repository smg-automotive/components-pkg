FROM node:lts-alpine@sha256:951203ef9d4e576c355194222fd19c2c7736f91228deb112675414ae3a7c9046

WORKDIR /app
ADD . /app
RUN npm ci --ignore-scripts=false

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
