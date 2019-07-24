const episode = {
    name: `audio1`,
    audio: `https://www.listennotes.com/e/p/a3b3b30825b544dc92f8824d9640e3ae/`,
}

const renderData = function (data) {
    $(`#anEpisode`).empty()
    const source = $(`#audio-template`).html()
    const template = Handlebars.compile(source)
    let newHTML = template(data)
    $('#anEpisode').append(newHTML)
    // console.log(data[0])
}

renderData(episode)

console.log(episode)