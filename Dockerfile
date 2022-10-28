FROM node:lts@sha256:cef9966b19672effeafcf1a67b8add742c3e46ca7dd5532efff60820526c2e95

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
