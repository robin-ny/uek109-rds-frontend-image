FROM node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . .
RUN npm install
EXPOSE 3000
ENV DB_HOST localhost
ENV DB_USER postgres
ENV DB_PASS postgres
ENV DB_PORT 5432
ENV DB_DATABASE uek109
CMD ["npm", "start"]