FROM node:buster

# Create app directory
COPY . app
WORKDIR app

RUN npm install > /dev/null

EXPOSE 3000
CMD ["npm","start"]