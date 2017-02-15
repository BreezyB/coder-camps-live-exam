namespace myapp.Services {
   export class BookService {
     private BookResource;

     public save(book){
       this.BookResource.save(book);
     }

     public get(id){
       return this.BookResource.get({id:id});
     }

     public list(){
       return this.BookResource.query();
     }

     public remove(id){
       return this.BookResource.remove({id:id});
     }

     constructor(private $resource){
       this.BookResource = $resource('/api/books/:id');
     }


   }

   angular.module('myapp').service('bookService', BookService);

   export class SiteService {
     private SiteResource;

     public save(site){
       this.SiteResource.save(site);
     }

     public get(id){
       return this.SiteResource.get({id:id});
     }

     public list(){
       return this.SiteResource.query();
     }

     public remove(id){
       return this.SiteResource.remove({id:id});
     }

     constructor(private $resource){
       this.SiteResource = $resource('/api/sites/:id');
     }


   }

   angular.module('myapp').service('siteService', SiteService);

   export class UserService {
     private UserResource;

     public save(user){
       this.UserResource.save(user);
     }

     constructor(private $resource){
       this.UserResource = $resource('/routes/usersRoutes/');
     }

 }
 angular.module('myapp').service('userService', UserService);
}
