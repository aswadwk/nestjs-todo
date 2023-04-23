FROM node:20 
WORKDIR /aswadwk/src/app 

ARG MYSQL_HOST
ARG MYSQL_USER
ARG MYSQL_PASSWORD
ARG MYSQL_DBNAME
ENV MYSQL_HOST=$MYSQL_HOST MYSQL_USER=$MYSQL_USER MYSQL_PASSWORD=$MYSQL_PASSWORD MYSQL_DBNAME=$MYSQL_DBNAME

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3030
CMD ["node", "dist/main"]