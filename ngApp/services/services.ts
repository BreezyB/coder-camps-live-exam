namespace myapp.Services {
   export class CarService {
     private CarResource;

     public save(car){
       this.CarResource.save(car);
     }

     public get(id){
       return this.CarResource.get({id:id});
     }

     public list(){
       return this.CarResource.query();
     }

     public remove(id){
       return this.CarResource.remove({id:id});
     }
     
     constructor(private $resource){
       this.CarResource = $resource('/api/cars/:id');
     }


   }

   angular.module('myapp').service('carService', CarService);
    }
