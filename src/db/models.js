const { title } = require('process')
const Sequelize = require('sequelize')//adding sequelize

const db = new Sequelize({//defining database, user, pasword for connection with db
    dialect: 'mysql',
    database: 'socialmediadb',
    username: 'gagan',
    password: '1234',
})

//COMMON NAME CREATION
//easy for us to simply use these names everywhere in tables

const COL_ID_DEF = {//defining a default ID (structure)
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF = {//defining a default username (structure)
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}
const COL_TITLE_DEF = {//defining a default title (structure)
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

// TABLE DEFINATION STARTS HERE
//sequelize makes given name plural because table stores more that 1 information(eg: user->users)

const Users = db.define('user',{//table named user
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const Posts = db.define('post',{//table named post
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const Comments = db.define('comment',{//table named comment
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT({length: 'tiny'})
        //TEXT types: tiny, medium, long
    }
})

module.exports ={//exporting modules
    db,
    Users,
    Posts,
    Comments
}