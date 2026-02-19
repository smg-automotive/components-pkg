FROM node:lts-alpine@sha256:4f696fbf39f383c1e486030ba6b289a5d9af541642fc78ab197e584a113b9c03

WORKDIR /app
ADD . /app
RUN npm ci --ignore-scripts=false

RUN npm run build:storybook

EXPOSE 8008
CMD ["npm", "start"]
