const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const db = require('./models');

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Conectado ao banco");
    })
    .catch(err => {
        console.log("Falha ao conectar ao banco", err);
        process.exit();
    });




require('./routes/ticket.routes')(app);

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))