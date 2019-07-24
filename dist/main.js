const renderer = new Renderer()
const podManager = new PodManager()

// let loadPage = async function() {
//     await tempmanager.getDataFromDB()
//     renderer.render(tempmanager.cityData)
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