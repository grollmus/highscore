FROM node:10.15.3-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./highscore/package*.json ./
USER node
RUN npm install
COPY --chown=node:node ./highscore/ ./
RUN npm run-script build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]