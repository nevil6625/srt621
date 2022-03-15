const port = 8989,
   http = require("http"),
   httpStatus = require("http-status-codes");
   app = http.createServer((request, response) => {
    console.log("Incoming request is being received");
    response.writeHead(httpStatus.OK, {
      "Content-Type" : "text/html",
    });
    
    let date_now = new Date();

    // current date
    let date = ( date_now.getDate());
  
    // current hour
    let hours = date_now.getHours();
    
    // current minute
    let minutes = date_now.getMinutes();
    
    // current second
    let seconds = date_now.getSeconds();
    
    
    // prints date & time in DD HH:MM:SS format
    x= "Today's date is: " + date + " " + "Current time is: " + hours + ":" + minutes + ":" + seconds;
    

    let responseMessage = x;
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server listens to port: ${port}`);
