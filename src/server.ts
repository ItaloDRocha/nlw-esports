import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([{"id": 1, "name": "ronaldino"},
    {"id": 2, "name": "gaucho"},
    {"id": 3, "name": "pereira"},
    {"id": 2, "name": "omegalul"},])
})

app.listen(3333)