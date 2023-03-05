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
                        ---------OR---------

```shell
$ npm init
$ npm install node hbs express mysql2 sequelize       #install all in single step
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

## Project Structure

```shell
src
├───controllers      # functions to connect routes to db operations
├───db               # db connection and model definations
├───public           # html/js/css files for static part of site
└───routes           # express middlewares (route wise)
└───utils            # Username generator
```