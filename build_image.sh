docker build -t nest-todoo --no-cache --build-arg MYSQL_HOST=172.18.0.1 --build-arg MYSQL_USER=xxxx --build-arg MYSQL_PASSWORD=xxx --build-arg MYSQL_DBNAME=todo4 . | tee -a log.txt