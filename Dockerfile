
#Node Version
FROM node:16

#Choose app directory.
WORKDIR /premscraper/pl-scraper.js

#Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm test

#Bundle app source
COPY . .
EXPOSE 8080
CMD ["pl-scraper.js", "server.js"]


