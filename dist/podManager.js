class PodManager {
    constructor() {
        this.podData = []
    }

async getDataFromDB(){
    let data = await $.get('/search/podcast')
    this.cityData = data
}

async getPodData(podName){
    let data = await $.get(`/search/podcast/${podName}`)
    data.forEach( d => this.podData.push(d))
    }

    async getEpisodesData(id){
        let data = await $.get(`/search/episode/${id}`)
        console.log(data)
    }




}

