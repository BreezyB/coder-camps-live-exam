
import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

// GET single product
router.get('/:id', (req, res) => {
  let bookId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('books').findOne(bookId).then((book)=> {
    res.json(book);
  });
});

// GET products
router.get('/', (req, res) => {

});

// Create/Update product
router.post('/', (req, res) => {
  let book = req.body;
  book._id = new mongodb.ObjectID(book._id); // convert _id to object
  database.db.collection('books').save(book).then((newBook) => {
    res.json(newBook);
  })
});


// Delete product
router.delete('/:id', (req, res) => {
  let bookId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('books').remove({_id:bookId}).then(()=> {
    res.sendStatus(200);
  });

});

export default router;
