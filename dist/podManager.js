class PodManager {
    constructor() {
        this.podData = []
    }

async getDataFromDB(){
    let data = await $.get('/search/podcast')
    this.cityData = data
}

async getPodData(podName){
    let data = await $.get(`/search/podcast/:${podName}`)
    this.podData.push(data)
    }
}