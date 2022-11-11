var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res) {
  if(req.url=="/"){
     let data= fs.readFileSync('home.html','utf8');
     res.end(data);
  }

  else if(req.url=="/Tutorial"){
      let data= fs.readFileSync('tutorial.html','utf8');
      res.end(data);
  }

  else if(req.url=="/Course"){

      let data= fs.readFileSync('course.html','utf8');
      res.end(data);
  }

  else if(req.url=="/Contact"){
      let data= fs.readFileSync('contact.html','utf8');
      res.end(data);
  }
  
  else if(req.url=="/Login"){
	let data= fs.readFileSync('login.html','utf8');
	res.end(data);
  }

  else if(req.url=="/Registration"){
	let data= fs.readFileSync('registration.html','utf8');
	res.end(data);
 }

});
server.listen(7070);
console.log("Server Run Success");
