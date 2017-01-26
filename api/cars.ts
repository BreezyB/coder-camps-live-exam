
import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

// GET single product
router.get('/:id', (req, res) => {
  let carId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('cars').findOne(carId).then((car)=> {
    res.json(car);
  });
});

// GET products
router.get('/', (req, res) => {
  database.db.collection('cars').find().toArray().then((cars)=>{
    res.json(cars);
  })
});

// Create/Update product
router.post('/', (req, res) => {
  let car = req.body;
  car._id = new mongodb.ObjectID(car._id); // convert _id to object
  database.db.collection('cars').save(car).then((newCar) => {
    res.json(newCar);
  })
});


// Delete product
router.delete('/:id', (req, res) => {
  let carId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('cars').remove({_id:carId}).then(()=> {
    res.sendStatus(200);
  });

});

export default router;
