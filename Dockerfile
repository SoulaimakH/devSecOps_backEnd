FROM node:16

WORKDIR /app

COPY ./package.json /package.json
COPY ./tsconfig.json  /tsconfig.json


RUN yarn install

COPY . .
RUN npm install -g @nestjs/cli
RUN npm install -g cross-env

CMD [ "npm", "run", "start" ]
