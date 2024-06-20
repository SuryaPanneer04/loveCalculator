docker ps -qa | while read a
do
  docker stop $a
  docker rm $a
done
docker  build -t app .
docker  run -p 8080:80 -dt app