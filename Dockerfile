FROM node:lts@sha256:2b61abb7d0e7373026b18c7fcfa1138b386ff66fa3c2dca293bf75ccdfab21fe

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
