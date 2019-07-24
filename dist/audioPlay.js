

const audio = function(){

const createAudioObj = function(episode){
    const audio = new Audio
    audio.src = episode.audio
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
}

module.exports = createAudio