const renderer = new Renderer()
const podManager = new PodManager()
const srtGenres = new SortedGenres()
const createAudio = new audioPlay()

let loadPage = function () {
    renderer.renderGenres(srtGenres.genres)
}
loadPage()

const getPods = async function () {
    let query = $("#podcastInput").val()
    $("#podcastInput").val('')
    await podManager.getPodData(query)
    console.log(query)
    renderer.render(podManager.podData)
    // console.log(podManager.podData)
}


$('.pods').on('click','.img-genre', async function () {
    let genreId = $(this).data('id')
    let data = await $.get(`/search/bestGenres/${genreId}`)
    renderer.renderGenresResults(data)
})

$('.pods').on('click', '.img', function () {
    let podID = $(this).data('id')
    console.log(podID)
    // createAudio.createAudioObj(podID)
    renderer.render2(podManager.getEpisodesData(podID))
})

$('.pods').on('click', '.img-genre-result', function () {
    let id = $(this).data('id')
    podManager.getEpisodesData(id)
})



$('#home').on('click', function () {
    renderer.renderGenres(srtGenres.genres)
})

$('.favourites').on('click', function () {
    // renderer.renderFavourites(podManager.())
    alert('clicking favs')
})

$('.bttn').on('click', function () {
    getPods()
    // renderer.renderFavourites(podManager.())
})

$('.episode-title').on('click', function () {
    alert('hi!')
})

//********************************************8 */

$('.episodes').on('click', '#play', async function () {
    let id = $(this).data('id')
    let result = await $.get(`/episode/${id}`)
    renderer.renderPlayer(result)

    startplayer();
    var player;

    function startplayer() {
        player = document.getElementById('music_player');
        player.controls = false;
        alert('yes')
    }
    $('#play_button').on('click',function(){
        player.play()
    })
    
    $('#pause_button').on('click',function(){
        player.pause()
    })

    $('#stop_button').on('click',function(){
        player.pause()
        player.currentTime=0;
    })

    // function play_aud() {
    //     player.play();
    // }
    // function pause_aud() {
    //     player.pause();
    // }
    // function stop_aud() {
    //     player.pause();
    //     player.currentTime = 0;
    // }
    // function change_vol() {
    //     player.volume = document.getElementById("change_vol").value;
    // }

})


Handlebars.registerHelper('each_upto', function (ary, max, options) {
    if (!ary || ary.length == 0)
        return options.inverse(this);

    var result = [];
    for (var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

$('.podInput').keypress(function (e) {
    if (e.which == 13) {
        getPods()
    }
});

