class Renderer {
    // render(genresData) {
    //     $('.main').empty()
    //     const source = $('#homePage-template').html()
    //     const template = Handlebars.compile(source)
    //     const someHTML = template(genresData)
    //     $('.main').append(someHTML)
    // }

    render(podData) {
        $('.episodes').empty()
        $('.main').empty()
        $('.pods').empty()
        const source = $('#pod-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:podData})
        $('.pods').append(someHTML)

    }

    render2(episodeData){
        $('.pods').empty()
        $('.episodes').empty()
        const source = $('#episodes-template').html()
        const template = Handlebars.compile(source)
        const someHTML = template({data:episodeData})
        $('.episodes').append(someHTML)
    }

}
