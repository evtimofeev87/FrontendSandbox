#MONGO DB

###Запуск mongod
mongod --dbpath ~/

###Список процессов
sudo lsof -iTCP -sTCP:LISTEN -n -P

###Убийство процесса
sudo kill -9 <mongo_command_pid>

###Показать базы
show dbs

show dbs – List all databases.
use db_name – Switches to db_name.
show collections – List all tables in the current selected database.