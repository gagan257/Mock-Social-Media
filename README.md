# Social Media Sample Project

## INSTALL ALL REQUIRED MODULES BEFORE STARTING

```shell
    $ npm init
    $ install npm node
    $ install npm hbs
    $ install npm express
    $ install npm sql2
    $ install npm sequelize
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

