namespace myapp.Controllers {

    export class HomeController {
        public books;
        public sites;
        public book;
        public site;
        public removeBook(id){
          this.bookService.remove(id).then(()=> {
            this.books= this.bookService.list();
          })
        }

        public removeSite(id){
          this.siteService.remove(id).then(()=> {
            this.sites= this.siteService.list();
          })
        }

        constructor(private bookService, private siteService, private $stateParams, private $state ){
          this.books = this.bookService.list();
          this.sites = this.siteService.list();
          let bookId = $stateParams['id'];
          this.book = bookService.get(bookId);
          let siteId = $stateParams['id'];
          this.site = siteService.get(siteId);
        }
    }


    export class AddBookController {
        public book;
        public sites;
        public id;
        public pickSite(id){
          id =this.id;
        }
        public saveBook(){

         this.bookService.save(this.book);
        }

        constructor(private bookService, private siteService){
          this.sites = this.siteService.list();

        }
    }

    export class EditBookController {
        public book;

        public saveBook(){
          this.bookService.save(this.book);
        }
        constructor(private bookService, private $stateParams, private $state){
          let bookId = $stateParams['id'];
          this.book = bookService.get(bookId);
        }
    }

    export class AddSiteController {
        public site

        public saveSite(){
         this.siteService.save(this.site);
        }

        constructor(private siteService){

        }
    }

    export class UserController {
      public user;

      public saveUser(){
        this.userService.save(this.user);
      }

      constructor(private userService, private $stateParams, private $state){
        let userId = $stateParams['id'];
      }
    }

    export class LogInController {
      public user;

      public saveUser(){
        this.userService.save(this.user);
      }

      constructor(private userService, private $stateParams, private $state){
        let userId = $stateParams['id'];
      }
    }


}
