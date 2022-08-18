FROM node:lts@sha256:bf1609ac718dda03940e2be4deae1704fb77cd6de2bed8bf91d4bbbc9e88b497

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
