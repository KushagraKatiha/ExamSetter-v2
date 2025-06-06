FROM node:lts-buster AS development
WORKDIR /app
COPY package.json . /app/
COPY package-lock.json . /app/
RUN npm install
CMD npm run dev