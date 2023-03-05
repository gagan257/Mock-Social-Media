const { Model } = require("sequelize")

const ADJECTIVES = [
    'sleepy',
    'minor',
    'elastic',
    'complex',
    'elated',
    'parsimonious',
    'pink',
    'humdrum',
    'numberless',
    'average'
]

const ObJECTS = [
    'hammer',
    'flower',
    'slippers',
    'tomato',
    'desk',
    'thermostat',
    'laptop',
    'plate',
    'soap',
    'sponge'
]

function genRandomUsername(){
    const adj = ADJECTIVES[Math.floor(Math.random()*10)]
    const obj = ObJECTS[Math.floor(Math.random()*10)]
    return `${adj}-${obj}`
}

// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())

module.exports ={
    genRandomUsername
}