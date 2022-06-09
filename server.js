const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const streamers = {
    'zizaran':{
        'age': 33,
        'birthName':'Kjetil',
        'birthLocation': 'Norway' 
    },
    'mathil1':{
        'age': 33,
        'birthName':'Kostya Khudoshin',
        'birthLocation': 'Ukraine' 
    },
    'clown':{
        'age': 31,
        'birthName':'Quintin Crawford',
        'birthLocation': 'New Zealand' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:streamerName', (request,response)=>{
    const streamersName = request.params.streamerName.toLowerCase()
    if(streamers[streamersName]){
        response.json(streamers[streamersName])
    }else{
        response.json(streamers['clown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})