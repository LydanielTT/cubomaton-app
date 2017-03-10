const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
var MongoClient = require("mongodb").MongoClient;

const API = 'https://jsonplaceholder.typicode.com';

const MONGODB_URI = "mongodb://localhost:27017/tutoriel";
/* GET api listing. */ /*première partie pour que ça marche*/
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
})

.get('/mongodb', (req, res) => {
  MongoClient.connect(MONGODB_URI, function(error, db) {
     if (error) throw error;
    console.log("Connecté à la base de données 'tutoriel/personnages'");
    db.collection('personnages').find({}).toArray(function(err, result) {
       if (err) throw err;
       res.setHeader('Content-Type', 'application/json');
       res.status(200).send(JSON.stringify(result));
    });
    
  });

})

/*  "/api/stones"
 *    GET: finds all stones
 *    POST: creates a new stone
 */
.get('/stones', (req, res) => {
  MongoClient.connect(MONGODB_URI, function(error, db) {
     if (error) throw error;
    console.log("Connecté à la base de données 'tutoriel/stones'");
    db.collection('stones').find({}).toArray(function(err, result) {
       if (err) throw err;
       console.log(result);
       res.setHeader('Content-Type', 'application/json');
       res.status(200).send(JSON.stringify(result));
    });
    
  });

})

.post('/stones',(req, res) => {

var newStone = req.body;
  newStone.createDate = new Date();

//  if (!req.body.name) {
//    handleError(res, "Invalid user input", "Must provide a name.", 400);
//  }
  MongoClient.connect(MONGODB_URI, function(error, db) {
    if (error) throw error;
    console.log("Connecté à la base de données 'tutoriel/stones/:id' id: "+ req.params.id);
    db.collection('stones').insertOne(newStone, function(err, doc) {
         if (err) {
          handleError(res, err.message, "Failed to create new stone.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
  })
})

/*  "/api/stones/:id"
 *    GET: find stone by id
 *    PUT: update stone by id
 *    DELETE: delete stone by id
 */
.get('/stones/:id', (req, res) => {
  var parametre = parseInt(req.params.id);
  MongoClient.connect(MONGODB_URI, function(error, db) {
     if (error) throw error;
    console.log("Connecté à la base de données 'tutoriel/stones/:id' id: "+ req.params.id);
    db.collection('stones').findOne({id:parametre}, function(err, document) {
       if (err) throw err;
       console.log(document);
       res.setHeader('Content-Type', 'application/json');
       res.status(200).send(JSON.stringify(document));
    });
    
  });

})

.put('/stones/:id', (req, res) => {

})

.delete('/stones/:id', (req, res) => {

});
module.exports = router;
