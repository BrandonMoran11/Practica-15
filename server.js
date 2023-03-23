var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req,res,next ){
    console.log('Request url:' + req.url);
    next();
});

app.get('/', function (req, res){
    res.render('index');
});
app.get('/student', function (req, res){
    res.render('student');
});
app.get('/person/:name', function(req, res){
    res.render('person', {NAME: req.params.name, Msg: req.query.msg, Times: req.query.times});
});
// app.post('/addStudent', function(req,res){
//     res.send(`addStudent: ${req.body.nombre}
//               Edad: ${req.body.edad}
//               NSS: ${req.body.nss}
//               Tipo de sangre: ${req.body.tipoSangre}`);
              
// });
app.post('/addStudent', function(req,res){
    res.render('displayData', {nombre: req.body.nombre,
                              edad: req.body.edad,
                              nss: req.body.nss,
                              tipoSangre: req.body.tipoSangre});
              
});
//el app post, utiliza el metodo post de htpp y el metodo render para mandar a llamar la informacion que este en el archivo "displayData", 
//en este caso solicita las keys nombre, edad, nss y tipoSangre con los valores que tengan en el body del archivo llamado.
app.listen(port);