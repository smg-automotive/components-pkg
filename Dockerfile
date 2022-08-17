FROM node:lts@sha256:d35df7e7525b57e21d40c12e5e55e80d609516ac559c0356ee2dc6c922588584

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
