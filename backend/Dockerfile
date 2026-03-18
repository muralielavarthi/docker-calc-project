FROM node:18

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Change ownership
RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["node", "app.js"]