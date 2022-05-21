const request = require('request');
const newsfeeds = (news ,callback) => {
    const newsFeedUrl = `https://newsapi.org/v2/everything?q=${news}&apiKey=71d09ea8a29046b9b7053ee1d27fa3fd`;
    request({url:newsFeedUrl , json:true} ,(error, response) => {
        if(error)   callback("Error : API not found" , undefined)   // if there is an error "connecion" or "API" //
        else if(response.body.message)   callback("Error :Invalid key" , undefined)    // if there is an error  //
        else if(response.body.totalResults === 0)   callback("please insert a valid value" , undefined)   // if wrong input inserted //
        else  {
            callback(undefined ,  response.body.articles)                                          
        }
    })
}


module.exports = newsfeeds;