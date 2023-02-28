# Social Media Sample Project

## INSTALL ALL REQUIRED MODULES BEFORE STARTING

```shell
    $ npm init
    $ npm install node
    $ npm install hbs
    $ npm install express
    $ npm install mysql2
    $ npm install sequelize
```

## Database Setup

```shell
$ mysql -u root
```

```mysql
$ create database socialmediadb;

$ create user socialuser identified with mysql_native_password by 'socialpass';

$ grant all privileges on socialmediadb.* to socialuser;

$ flush privileges;
```

