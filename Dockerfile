FROM node:lts@sha256:b35e76ba744a975b9a5428b6c3cde1a1cf0be53b246e1e9a4874f87034222b5a

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
