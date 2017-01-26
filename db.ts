const connectionString:string = 'mongodb://webuser:Secret123@ds143588.mlab.com:43588/ewigg1';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        console.log("DB Conencted!");
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
