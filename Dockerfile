FROM node:lts-alpine@sha256:682368d8253e0c3364b803956085c456a612d738bd635926d73fa24db3ce53d7

WORKDIR /app
ADD . /app
RUN npm ci --ignore-scripts=false

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
