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

## Business Structure

### Users

1. **create users**
    this will create a new user with a random username

### Posts

1. **create post**
    this will create a new post, required fields are
    - username (the author of this post)
    - title
    - body

2. **show all posts**
    list all existing posts, we should have following filtering support

    - filter by username
    - filter by query contained in title (search by title)

3. **edit posts** `TBD`

4. **delete posts** `TBD`

### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**

## Application

**Search new user (GET request)**

`http://localhost:8383/api/users/"username"`
`OR`
`http://localhost:8383/api/users/"id"`

**Add new user (POST request)**

`http://localhost:8383/api/users`
