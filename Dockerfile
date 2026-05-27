FROM node:lts-alpine@sha256:2bdb65ed1dab192432bc31c95f94155ca5ad7fc1392fb7eb7526ab682fa5bf14

WORKDIR /app
ADD . /app
RUN npm ci --ignore-scripts=false

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
