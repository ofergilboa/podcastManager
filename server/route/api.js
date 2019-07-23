const express = require( 'express' )
const router = express.Router()
const request = require('request');
const path = require('path')
const apiKey = '956403ac7a794573ba7500fd93b0832b'

//**********************************************************

router.get('/search/:type',async function(req,res){
    let type = req.params.type
    const unirest = require('unirest');
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=star%20wars&sort_by_date=0&type=${type}&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1`)
    .header('X-ListenAPI-Key', `${apiKey}`)
    response.toJSON();
    res.send(response.body.results)
})

//**********************************************************

module.exports = router