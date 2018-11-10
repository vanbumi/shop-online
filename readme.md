# Readme

bit.ly/certificate-mediocademy

## Index

### 1. Materi 1

#### Install MongoDB

Install di Windows

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

#### Install MondoDB Compass

download disini https://www.mongodb.com/products/compass

#### Install express & ejs

    npm install --save express ejs

#### Membuat remote repository

    github.com

#### Coba jalankan server mongodDB

    mongod

#### Membuat Main file "app.js"

    // boiler plate code

#### Extention untuk Visual Studio Code

1. type es7 -> ES7 React/Redux/GraphQL/React-Native snippets.

2. type bracket col -> Bracket Pair Colorizer.

3. type prettier -> Prettier - Code formatter.

4. type live server -> Live Server.

5. node js -> Node.js Modules Intellisense.

6. format on save -> click Code > Preferences > Settings > look for "formatOnSave" set to "true".

#### Buka Mongodb Compass

Buat database baru: shoponline-tubagus
buat collection baru: pages

#### Membuat folder baru

    views, models, routes, public

#### Setup server

#### Setup index

    // Setup index
    app.get("/", function(req, res) {
      res.send("Welcome to index");
    });

#### Auto Start Server

Install linux & mac

    npm install -g nodemon

Install windows

    ???

#### Koneksi database dengan mongoose

Install mongoose:

    npm install --save mongoose

### 2. Materi 2

Install mongoose :

    npm install --save mongoose

Kemudian require it :

    var mongoose = require('mongoose');

Connect syntax :

    mongoose.connect('mongodb://localhost/shoponline');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
      console.log('Connected to MongoDB')
    });

Sekarang jalankan server :

      nodemon app.js

#### Membuat folder baru config

Update file database.js :

    module.exports = {
    	database: 'mongodb://localhost/shoponline'
    }

Kemudian require file config :

    var config = require('./config/database');

Update :

    mongoose.connect('mongodb://localhost/shoponline');

Menjadi :

    mongoose.connect(config.database);

### 3. Materi 3 Template Engine ejs

### 4. Materi 4 Route

Membuat folder routes

#### Membuat route pada Admin Area (backend)

### Pengenalan MongoDB

Strukture:

Database

Collection -> table

Document -> row

Terdiri dari pasangan : key-value

{
\_id: 123,
title: 'Belajar Mongo',
description: 'Mongo adalah database noSQL',
comment: [
{
user: 'user1',
message: 'Mongodb cool!'
like: 0
},
{
user: 'user2',
message: 'Mongodb mantap!'
like: 0
}
]
}

### 5. Middleware

    // setup middleware body parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // setup session middleware
    app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    })
    );

    // setup sesion middleware
    app.use(
    expressValidator({
        errorFormatter: function(param, msg, value) {
        var namespace = param.split("."),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += "[" + namespace.shift() + "]";
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
        }
    })
    );
