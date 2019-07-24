const renderer = new Renderer()
const podManager = new PodManager()

// let loadPage = async function() {
//     await podManager.getFavourites()
//     renderer.renderFavourites(podManager.favouritesData)
// }


const getPods = async function () {
    let query = $(".podInput").val()
    $(".podInput").val('')
    await podManager.getPodData(query)
    renderer.render(podManager.podData)
    // console.log(podManager.podData)
}

$('.bttn').on('click', function(){
    getPods()
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

Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});
