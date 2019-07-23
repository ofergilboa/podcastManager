class Renderer {
    // render(genresData) {
    //     $('.main').empty()
    //     const source = $('#homePage-template').html()
    //     const template = Handlebars.compile(source)
    //     const someHTML = template(genresData)
    //     $('.main').append(someHTML)
    // }

    render(podData) {
        $('.main').empty()
        const source = $('#pod-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:podData})
        $('.pods').append(someHTML)

    }

    render(episodeData){
        $('.pods').empty()
        const source = $('#episodes-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:episodeData})
        $('.episodes').append(someHTML)

    }

}
