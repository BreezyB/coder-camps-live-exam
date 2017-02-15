
import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

// GET single product
router.get('/:id', (req, res) => {
  let siteId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('sites').findOne(siteId).then((site)=> {
    res.json(site);
  });
});

// GET products
router.get('/', (req, res) => {
  database.db.collection('sites').find().toArray().then((sites)=>{
    res.json(sites);
  })
});

// Create/Update product
router.post('/', (req, res) => {
  let site = req.body;
  site._id = new mongodb.ObjectID(site._id); // convert _id to object
  database.db.collection('sites').save(site).then((newSite) => {
    res.json(newSite);
  })
});


// Delete product
router.delete('/:id', (req, res) => {
  let siteId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('sites').remove({_id:siteId}).then(()=> {
    res.sendStatus(200);
  });

});

export default router;
