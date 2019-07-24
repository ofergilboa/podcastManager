class audioPlay{
    constructor() {

    this.audioObj = []
    }

    createAudioObj (src){
        this.audioObj = []
        const audio = new Audio
        audio.src = src
        audioObj.push(audio)
    }


    renderAudioBar (data) {
        $(`#anEpisode`).empty()
        const source = $(`#audio-template`).html()
        const template = Handlebars.compile(source)
        let newHTML = template(data)
        $('#anEpisode').append(newHTML)
        // console.log(data[0])
    }
}

const play = new audioPlay
play.renderAudioBar()
// module.exports = audioCreator
