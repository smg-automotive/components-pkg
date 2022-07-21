FROM node:lts@sha256:2e1b4542d4a06e0e0442dc38af1f4828760aecc9db2b95e7df87f573640d98cd

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
