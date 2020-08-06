var http = require('http');
var express = require('express')
var path = require('path');
var nodemailer = require('nodemailer'); 
var smtpTransport = require("nodemailer-smtp-transport");
const fs = require('fs');
var app = express();

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

// nodemailer setup
let transporter = nodemailer.createTransport(smtpTransport({
     host: "az1-ss36.a2hosting.com",
     port: 2525,
     auth: {
         user: config.user_name,
         pass: config.password
     },
     rejectUnauthorized: false
}));

port = 8080

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public/html')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/img')));
app.use(express.static(path.join(__dirname, 'public/documents')));

app.get('/', function(req, res){
	console.log("send index.html")
	res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.get('/experience', function(req, res){
	console.log("send experience.html")
	res.sendFile(path.join(__dirname + '/public/html/experience.html'));
})

app.get('/blog', function(req, res){
	console.log("send blog.html")
	res.sendFile(path.join(__dirname + '/public/html/blog.html'));
})

app.get('/contact', function(req, res){
	console.log("send contact.html")
	res.sendFile(path.join(__dirname + '/public/html/contact.html'));
})

app.get('/email', function(req, res){
	console.log('sending form information')
	console.log('request parameters', req.query)
	var mailOptions = {
	  from: '_mainaccount@tikaharikhanal.com',
	  to: 'tikaharik@gmail.com',
	  subject: 'Site: ' + req.query.purpose + ' ' + req.query.firstname + ' ' + req.query.lastname,
	  text: 'Message: ' + req.query.message + 
'\n\nContact\nName: ' + 
req.query.firstname + ' ' + req.query.lastname + '\nEmail: ' + 
req.query.email + '\nPhone: ' + req.query.phone
	};
	transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
		console.log('message sent')
	});
	res.redirect('/contact');
})


app.listen(port, function() {
  console.log('App listening on port ' + port + '!');
});

