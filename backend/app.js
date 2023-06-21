const express = require('express');//minimalist framework for application web
const morgan = require('morgan');//middelware pour log les requêtes entrante
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');
const cors = require('cors')

const app = express();
const port = 3000;

app
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(cors())

sequelize.initDb();

app.get('/', (req,res) => {
    res.json('hello toi');
});

require('./src/routes/findAllBoats')(app);
require('./src/routes/findBoatByPk')(app);
require('./src/routes/createBoat')(app);
require('./src/routes/updateBoat')(app);
require('./src/routes/deleteBoat')(app);

require('./src/routes/login')(app);
require('./src/routes/signIn')(app);

app.use(({res}) => {
   const message = 'Ressource indisponible sur cette URL.';
   res.status(404).json({message}); 
})

app.listen(port, () => console.log(`go : http://localhost:${port}`));