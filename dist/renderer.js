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
        $('.pods').empty()
        $('.episodes').empty()
        $('.main').empty()
        $('.favourites').empty()
        const source = $('#episodes-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:episodeData})
        $('.episodes').append(someHTML)
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
