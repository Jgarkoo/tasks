const url = "https://api.first.org/data/v1/countries";

function send(url) {
    return new Promise((resolve, reject) =>{
        fetch(url)
        .then((response) =>{
            if(response.status === 200){
                resolve(response.json().then(resp => resp.data))
            }else{
                reject(`we have error. statuse code: ${resolve.status}`);
            }
        })
        .catch(err => console.log(err))
    })
}

send(url)
  .then(data => console.log(data))
  .catch(error => console.log(error))