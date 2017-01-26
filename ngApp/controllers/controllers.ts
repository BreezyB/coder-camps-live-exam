namespace myapp.Controllers {

    export class HomeController {
        public cars;

        public remove(id){
          this.carService.remove(id).then(()=> {
            this.cars= this.carService.list();
          })
        }

        constructor(private carService){
          this.cars = this.carService.list();
        }
    }


    export class AddCarController {
        public car

        public saveCar(){
         this.carService.save(this.car);
        }

        constructor(private carService){

        }
    }

    export class EditCarController {
        public car;

        public saveCar(){
          this.carService.save(this.car);
        }
        constructor(private carService, private $stateParams, private $state){
          let carId = $stateParams['id'];
          this.car = carService.get(carId);
        }
    }

}
