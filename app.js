const express = require('express');

const app = express();
app.use('/static', express.static('./public'));
app.set('port', (process.env.PORT || 3000));

app.listen(app.get("port"), function () {
    console.log("Server running on port: ", app.get("port"));
});