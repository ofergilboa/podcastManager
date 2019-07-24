const express = require( 'express' )
const router = express.Router()
const request = require('request');
const path = require('path')
const apiKey = '956403ac7a794573ba7500fd93b0832b'
const unirest = require('unirest');
const gnrs = require('../model/genres')
const genres = gnrs.genres
const model = require('../model/Podcast')
const Podcast = model.Podcast


//**********************************************************
//    Search for episodes of a specific pod cast
//**********************************************************


router.get('/search/episode/:episodeid',async function(req,res){
    let episodeId = req.params.episodeid
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/podcasts/${episodeId}`)
    .header('X-ListenAPI-Key', `${apiKey}`)
    response.toJSON();
    res.send(response.body.episodes)
})

//**********************************************************
//    Search for podcast 
//**********************************************************

router.get('/search/podcast/:query',async function(req,res){
    let query = req.params.query
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=podcast&offset=1&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0'`)
    .header('X-ListenAPI-Key', `${apiKey}`);
    response.toJSON();
    res.send(response.body.results)
})

//**********************************************************
//    Get id of genre
//**********************************************************


let getGenreId = function(name){
    let genresOut = genres.find( g => g.name == name)
    let gID = genresOut.id
    return gID
}

//**********************************************************
//    Search for best podcasts by genre (provide name)
//**********************************************************

router.get('/search/genre/:name', async function(req,res){
    let name = req.params.name;
    let gID = getGenreId(name);
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${gID}&safe_mode=1`)
    .header('X-ListenAPI-Key', `${apiKey}`)
    response.toJSON();
    res.send(response.body.podcasts)
})

//**********************************************************
//    Search for best podcasts by genre (provide id)
//**********************************************************

router.get('/search/bestGenres/:id', async function(req,res){
    let id = req.params.id;
    let data = []
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${id}&safe_mode=1`)
    .header('X-ListenAPI-Key', `${apiKey}`)
    response.toJSON();
    res.send(response.body.podcasts)
})

//**********************************************************
//    Create db or save podcast info to db
//**********************************************************

router.post('/podcast',function(req,res){
    let data = req.body;
    let podcast = new Podcast ({
        title: data.data('title'),
        id: data.data('id'),
        picture: data.src
        })
    podcast.save()
    res.send(`podcast added successfuly to db.`)
})

//**********************************************************

module.exports = router