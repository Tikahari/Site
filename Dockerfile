FROM node:10 AS ui-build

WORKDIR /usr/src/app
COPY site/ ./site/
RUN cd site && npm install && npm run build

EXPOSE 3080

CMD ["npm", "start"]