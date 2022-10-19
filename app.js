const express = require('express');
const app = express();

const https = require('https');
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.post('/', function(req, res){
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
        
    };

    const jsondata = JSON.stringify(data);
    const yourListId = ''; // here should be your list id from mailchimp
    const url = 'https://us10.api.mailchimp.com/3.0/lists/' + yourListId;


    const nameYouNeedToChoose = ''; //Just pick any names, it doesn't really matter
    const yourApiKey = ''; // Here should be your private API key that you received from the mailchimp website
    const options = {
        method: "POST",
        auth: nameYouNeedToChoose + ':' + yourApiKey
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(jsondata);
    request.end();

});


app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log('listen to port 3000');
})

