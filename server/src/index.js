import express from 'express';
import allRouters from './routes'
import morgan from 'morgan'
import cors from 'cors'

//INIT EXPRESS
const app = express();


//CONFIG
const port = (process.env.PORT || 3800);


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(allRouters);



//PORT
app.set('port', port);


//EXPRESS
app.listen(app.get('port'), (error) => {
  if (error) {
    console.log('Failed to start the port');
  } else {
    console.log('Server started on port ' + port);
  }
});

app.get('/api', function (req, res) {
  res.send('esta es la ruta de api')
});

