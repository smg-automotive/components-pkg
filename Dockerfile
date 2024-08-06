FROM node:lts-alpine@sha256:eb8101caae9ac02229bd64c024919fe3d4504ff7f329da79ca60a04db08cef52

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
