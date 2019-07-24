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

    $('.pods').on('click', '.img', function(){
        let podID = $(this).data('id')
        console.log(podID)
        renderer.render2(podManager.getEpisodesData(podID))
    })

    Handlebars.registerHelper('each_upto', function(ary, max, options) {
        if(!ary || ary.length == 0)
            return options.inverse(this);
    
        var result = [ ];
        for(var i = 0; i < max && i < ary.length; ++i)
            result.push(options.fn(ary[i]));
        return result.join('');
    });