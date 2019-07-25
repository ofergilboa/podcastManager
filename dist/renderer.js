class Renderer {
    renderMain(genresData) {
        $('.main').empty()
         $('.pods').empty()
         $('.episodes').empty()
         $('.favourites').empty()
        const source = $('#main-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:genresData})
        $('.main').append(someHTML)
    }

    render(podData) {
        $('.episodes').empty()
        $('.main').empty()
        $('.pods').empty()
        $('.favourites').empty()
        const source = $('#pod-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:podData})
        $('.pods').append(someHTML)

    }

    render2(episodeData){
        console.log(episodeData)
        $('.pods').empty()
        $('.episodes').empty()
        $('.main').empty()
        $('.favourites').empty()
        const source = $('#episodes-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:episodeData})
        $('.episodes').append(someHTML)
    }

    renderGenres(podData) {
        $('.episodes').empty()
        $('.main').empty()
        $('.pods').empty()
        $('.favourites').empty()
        const source = $('#genres-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:podData})
        $('.pods').append(someHTML)

    }

    renderGenresResults(data){
        $('.episodes').empty()
        $('.main').empty()
        $('.pods').empty()
        $('.favourites').empty()
        const source = $('#genres-results-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:data})
        $('.pods').append(someHTML)
    }

    renderPlayer(audio){
        $('.player').empty()
        const source = $('#player-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template(audio)
        $('.player').append(someHTML)
    }

 
        // renderFavourites(favouritesData){
        //     $('.pods').empty()
        //     $('.episodes').empty()
        //     $('.main').empty()
        //     const source = $('#favourites-template').html()
        //     const template = Handlebars.compile(source)
        //     const someHTML = template({data:favouritesData})
        //     $('.favourites').append(someHTML)
        // }
}

