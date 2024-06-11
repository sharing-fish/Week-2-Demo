var express = require('express'),
    app = express();

app.use(express.static('public'));

const PORT = 3000;
module.exports = app.listen(PORT, () => {
    console.log('Server running on port %d', PORT);
})