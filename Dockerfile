FROM node:lts-alpine@sha256:931d7d57f8c1fd0e2179dbff7cc7da4c9dd100998bc2b32afc85142d8efbc213

WORKDIR /app
ADD . /app
RUN npm ci --ignore-scripts=false

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
