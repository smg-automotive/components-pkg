FROM node:lts@sha256:ebc73648091fc45d7f250089c27280551057e41bcbe060b3c0443e5529c60dd6

WORKDIR /app
ADD . /app
RUN npm ci

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
