const url = "https://api.first.org/data/v1/countries";

class Countries {
    constructor(url){
        if(typeof url !== 'string')  throw new TypeError("url is not string")
        this.url = url
      }
    
      send(region){
        if(typeof region !== 'string') throw new TypeError ("region is not string")
        return new Promise((resolve, reject) => {
          fetch(`${this.url}=${region}`)
            .then((response) => {
              if(response.status === 200){
                resolve(response.json().then(resp => resp.data))
              }else{
                reject(`We have error, status code: ${response.status}`)
              }
            })
            .catch(err => console.log(err))
        })
      }
}

const france = new Countries(url)


france.send("europe")
.then(data => console.log(data))
.catch(error => console.log(error))