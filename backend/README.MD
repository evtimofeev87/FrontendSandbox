#MONGO DB

### show global packages
    npm list -g --depth 0

### Установка
brew tap mongodb/brew
brew update
brew install mongodb-community

### Запуск mongod
    mongod --dbpath ~/

### Остановка mongod
    sudo killall mongod

### Список процессов
    sudo lsof -iTCP -sTCP:LISTEN -n -P

### Убийство процесса
    sudo kill -9 <mongo_command_pid>

### Показать базы
    show dbs // List all databases.
    use db_name // Switches to db_name.
    show collections // List all tables in the current selected database.

asdfasdf  
asdfasdf  
asdfasdf

**Bold**

*Italic*

> Скажика, дядя, ведь не даром<br>
> Москва, спаленная пожаром<br>
> Французу отдана...

1. first
2. second
3. third

- first
- second
- third

![Stewie](stewie.jpeg)

---

[lenta.ru](https://lenta.ru).

|FirstName|LastName| Age |
|:---|:-------|----:|
|John| Doe    |  45 |
|Jane| Doe    |  35 |
