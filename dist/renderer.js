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
        const someHTML = template(podData)
        $('.pods').append(someHTML)
    }

}
