const express = require('express')
const app = express()

app.use(function (req, res, next) {
    let date = new Date()
    let h = date.getHours()
   
    if ((h >= 17)||(h <8)) {
        
    console.log('it is '+h+  '   Time out  ' );
    res.sendFile(__dirname + '/public/closed.html')
    }
    else {
        console.log('it is '+h+' In Time  ');
        next()
    };
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/ourservices', (req, res) => {
    res.sendFile(__dirname + '/public/ourservices.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})


app.listen(3000, (err) => {
    if (err) console.log("Server is not running")
    else console.log("server is running on port 3000")
})
