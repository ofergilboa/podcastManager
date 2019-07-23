const renderer = new Renderer()
const podManager = new PodManager()

// let loadPage = async function() {
//     await tempmanager.getDataFromDB()
//     renderer.render(tempmanager.cityData)
// }

const getPods = async function () {
    let query = $(".podInput").val()
    await podManager.getPodData(query)
    renderer.render(podManager.podData)
    console.log(podManager.podData)
    }

    $('.pods').on('click', '.img', function(){
        let podID = $(this).data('id')
        console.log(podID)
    })