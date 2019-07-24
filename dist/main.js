const renderer = new Renderer()
const podManager = new PodManager()
const srtGenres = new SortedGenres()

let loadPage = function() {
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

$('.img-genre').on('click',function(){
    alert('yes')
})

$('.pods').on('click', '.img', function () {
    let podID = $(this).data('id')
    console.log(podID)
    renderer.render2(podManager.getEpisodesData(podID))
})

$('.home').on('click', function(){
    alert('clicking home')
    // renderer.renderHome(podManager.())
})

$('.favourites').on('click', function(){
    // renderer.renderFavourites(podManager.())
    alert('clicking favs')
})

$('.bttn').on('click', function(){
getPods()  
  // renderer.renderFavourites(podManager.())
})

Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

$('.podInput').keypress(function (e) {
    if (e.which == 13) {
getPods()
    }
});