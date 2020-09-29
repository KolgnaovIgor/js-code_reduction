//FIRST EXAMPLE
//long code
const num = 42
let result

if(num > 20){
    result = 'More than 20'
}else{
    result = 'Less than 20'
}

//short code
const result = num > 20 ? 'More than 20' : 'Less than 20'


//SECOND EXAMPLE
//long code
let variable
let variable2

if(variable !== null && variable !== undefined && variable !== ''){
    variable2 = variable
}else{
    variable2 = 'some value'
}

//short code
variable2 = variable || 'some value'


//THIRD EXAMPLE
//long code
let x
let y
let z = 42

//short code
let x, y, z = 42


//FOURTH EXAMPLE
//long code
let isSame = true
if (isSame === true){}
if (isSame !== true){}

//short code
if(isSame){}
if(!isSame){}


//FIFTH EXAMPLE
//long code
const names = ['Igor', 'Elena', 'Olga']
for(let i = 0; i < names.length; i++){
    //names[i]
}

//short code
for(let name of names){
    //name
}
//or
for(let index in names){
    //index
}
//or
names.forEach(function(el,index,array){
    console.log(`names[${index}] = ${el}`)
})
//or
function logArrayItems(el,index,array){
    console.log(`names[${index}] = ${el}`)
}
names.forEach(logArrayItems)


//SIXTH EXAMPLE
//long code
let port
if(process.env.PORT){
    port = process.env.PORT
}else{
    port = 4200
}

//short code
const port = process.env.PORT || 4200


//SEVENTH EXAMPLE
//long code
for(let i = 0; i < 1000000; i++){}

//short code
for(let i = 0; i < 10e6; i++){}


//EIGHTH EXAMPLE
//long code
const a = 1, b = 2
const myObj = {
    a: a, b: b
}

//short code
const myObj = {a,b}


//NINTH EXAMPLE
//long code
setTimeout(function () {
    console.log('After 2 seconds')
},2000)
//or
function tripple(num) {
    return num * 3
}

//short code
setTimeout(() => console.log('After 2 seconds'),2000)
//or
const tripple = num => num * 3


//TENTH EXAMPLE
//long code
function rgb(r,g,b){
    if (r === undefined){
        r = 0
    }
    if (g === undefined){
        g = 255
    }
    return `rgb(${r}, ${g}, ${b})`
}

//short code
const rgb = (r = 0, g = 255, b) => `rgb(${r}, ${g}, ${b})`


//ELEVENTH EXAMPLE
//long code
function createUrl(base,domain){
    return 'http://' + base + '.' + domain
}

//short code
function createUrl(base,domain){
    return `http://${base}.${domain}`
}


//TWELFTH EXAMPLE
//long code
const alert = window.alert
const confirm = window.confirm
const prompt = window.prompt

//short code
const {alert, confirm, prompt} = window


//THIRTEENTH EXAMPLE
//long code
const arr = [1,2,3]
const nums = [4,5,6].concat(arr)
const cloned = nums.concat()

//short code
const nums = [...arr,4,5,6]
const cloned = [...nums]


//FOURTEENTH EXAMPLE
//long code
console.log(Math.floor(9.7) === 9)

//short code
console.log(~~9.7 === 9)


//FIFTEENTH EXAMPLE
//long code
console.log(Math.pow(2,3))
console.log(Math.pow(2,4))
console.log(Math.pow(4,3))

//short code
console.log(2 ** 3)
console.log(2 ** 4)
console.log(4 ** 3)


//SIXTEENTH EXAMPLE
//long code
const int = parseInt('42')
const float = parseFloat('42.42')

//short code
const int = +'42'
const float = +'42.42'


//SEVENTEENTH EXAMPLE
//long code
if([1,2,3].indexOf(3) > -1){}
//or
if([1,2,3].indexOf(3) === -1){}

//short code
if(~[1,2,3].indexOf(3)){}
//or
if(!~[1,2,3].indexOf(3)){}
//or
if([1,2,3].includes(3)){}


//EIGHTEENTH EXAMPLE
//long code
const car = {
    modal: 'ford',
    year: 2019,
    color: 'red'
}

//short code
console.log(Object.entries(car))
console.log(Object.values(car))
console.log(Object.keys(car))