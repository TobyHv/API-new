const app = require('./app');
const helmet = require('helmet')

app.use(helmet());

app.listen(app.get('port'), () =>{
    console.log("Servidor en el puerto", app.get("port"));
});