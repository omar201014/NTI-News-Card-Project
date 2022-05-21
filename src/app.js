// to reload server use command sudo npm install -g nodemon //
const express = require('express');    // Express framework //
const app = express();                // instance of express //
const port = process.env.PORT || 3000; // port number //
const path = require('path');      // path module //
const hbs = require('hbs');        // handlebars module //
const publicDirectoryPath = path.join(__dirname , '../public');           // path to public folder //
const viewsDirectoryPath = path.join(__dirname , '../templates/views');   // path to views folder //
const partialsDirectoryPath = path.join(__dirname , '../templates/partials');   // path to partials folder //
const newsfeedDir = path.join(__dirname , './tools/news');                  // path to news.js //
const newsfeeds = require(newsfeedDir);                                      // news.js //


app.use(express.static(publicDirectoryPath));   // to use static files form public folder //

app.set('view engine' , 'hbs');   // to set view engine //

app.set('views' , viewsDirectoryPath);    // to set views directory //

hbs.registerPartials(partialsDirectoryPath);

//use this address to check  "http://www.localhost:3000/news?type=masr"//

app.get('/news' , (req ,res) =>{    //home page //
   if(!req.query.type){
       return res.send({
           error : 'You must provide a news category'
       })
   }
    newsfeeds(req.query.type , (error , response) =>{
        if(error){
            return res.send({error})
        }
        // console.log(response);
        res.send({            
           articles : response
        });
    })    
})
app.get('/' , (req ,res) =>{
    res.render('index' , {
                
    });    
})


app.listen(port , () =>{
    console.log(`Server is running on port ${port} .......`);
})



