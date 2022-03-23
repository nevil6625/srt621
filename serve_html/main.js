const port = 3000, http = require("http"), httpStatus = require("http-status-codes");

const ErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
      "Content-Type": "text/html"
    });
    res.write("<h1>File not found, soryyy!</h1>");
    res.end();
};


http
    .createServer((req, res) => {
      let url =req.url;

      if (url.indexOf(".html")!==-1){
          res.writeHead(httpStatus.OK, {
           "Content-Type":"text/html"
          });
          customReadFile(`./views${url}`,res);

      }   else if (url.indexOf(".html") !== -1) {
          res.writeHead(httpStatus.OK, {
           "Content-Type":"text/html"
          });
          customReadFile(`./public/js${url}`,res);

      }   else if (url.indexOf(".css") !== -1) {
          res.writeHead(httpStatus.OK, {
           "Content-Type":"text/css"
          });
          customReadFile(`./public/css${url}`,res);

      }   else if (url.indexOf(".jpeg") !== -1) {
          res.writeHead(httpStatus.OK, {
           "Content-Type":"image/jpeg"
          });
          
      }   else  {
          ErrorResponse(res);
      }
 })


.listen(3000);
console.log(`The server listen on port ${port}`);

fs= require("fs")
const customReadFile=(file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path,(error,data)=>{
            if (error) {
                console.log(error);
                ErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    }   else {
        ErrorResponse(res);
    }
};