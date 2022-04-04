const port=3000;

express = require('express');
app = express();
routeee = require(__dirname+'/express.js');
app.use('/', routeee);
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});



