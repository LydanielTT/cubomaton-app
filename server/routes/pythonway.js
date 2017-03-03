const express = require('express');
const router = express.Router();
var spawn = require("child_process").spawn;


/* GET pythonway listing. */ /*première partie pour que ça marche*/
router.get('/', (req, res) => {
  res.send('pythonway works');
});

// Get all posts
router.get('/callpython', (req, res) => {
console.log("callpython:")
  
  var process = spawn('python',['motor_and_camera.py']);
//  var process = spawn('python',["path/to/script.py", arg1, arg2, ...]);
  
  var dataString ='';
  //Listen data
  process.stdout.on('data', function (data){
  // Do something with the data returned from python script
    dataString += data;
  });
  //Listen when python file is closing
  process.stdout.on('end', function(){
    console.log(dataString);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(dataString);
  });
});


module.exports = router;
