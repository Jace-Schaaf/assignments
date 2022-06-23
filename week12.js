class Dealer {
    contructor(name) {
        this.name = name;
        this.cars = [];
    }

    addCar(name, speed) {
        this.cars.push(new Car(name, speed));
    }
}

class Car {
  contructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

class DealerService {
    static url = "https://crudcrud.com/api/98945b5cb74e4aa9b8481425d03d5e62/dealers";

    static getAllDealers() {
        return $.get(this.url);
    }

    static getDealer(id) {
        return $.get(this.url + `/${id}`);
    }

    static createDealer(dealer) {
        return $.post(this.url, dealer);
    }

    static updateDealer(dealer) {
        return $.ajax({
           url: this.url + `/${dealer._id}`,
           dataType: 'json',
           data: JSON.stringify(dealer),
           contentType: 'application/json',
           type: 'PUT'
        });
    }

    static deleteDealer(id) {
        return $.ajax({
            url: this.url +`/${id}`,
            type: 'DELETE'
        });
    }
}

class DOMManager {
    static dealers;

    static getAllDealers() {
        DealerService.getAllDealers().then(dealers => this.render(dealers));
    }

    createDealer(name) {
        DealerService.createDealer(new Dealer(name))
        .then(() => {
            return DealerService.getAllDealers()
        })
        .then((dealers) => this.render(dealers));
    }

    static deleteDealer(id) {
      DealerService.deleteDealer(id)
      .then(() => {
        return DealerService.getAllDealers();
      })
      .then((dealers) => this.render(dealers));
    }

    static addCar(id) {
        for (let dealer of this.dealers) {
            if (dealer._id == id) {
                dealer.cars.push(new Car($(`#${dealer._id}-car-name`).val(), $(`#${dealer._id}-car-speed`).val()));
                DealerService.updateDealer(dealer)
                .then(() => {
                    return DealerService.getAllDealers();
                })
                .then((dealers) => this.render(dealers));
            }
        }
    }

    static deleteCar(dealerId, carId) {
      for (let dealer of this.dealers) {
        if (dealer._id == dealerId) {
            for (let car of dealer.cars) {
                if (car._id == carId) {
                    dealer.cars.splice(dealer.cars.indexOf(car), 1);
                    DealerService.updateDealer(dealer)
                    .then(() => {
                        return DealerService.getAllDealers();
                    })
                    .then((dealers) => this.render(dealers));
                }
            }
        }
      }
    }

    static render(dealers) {
        this.dealers = dealers;
        $('#app').empty();
        for (let dealer of dealers) {
            $('app').prepend(
                `<div id="${dealer._id}" class="card">
                <div class="card-header">
                <h2>${dealer.name}</h2>
                <button class="btn btn-danger" onclick="DOMManager.deleteDealer('${dealer._id}')">Delete </button>
                </div>
                <div class="card-body">
                   <div class="card">
                   <div class="row">
                   <div class="col-sm">
                      <input type="text" id="${dealer._id}-car-name" class="form-control" placeholder="Car Name">
                   </div>
                   <div class="col-sm">
                   <input type="text" id="${dealer._id}-car-speed" class="form-control" placeholder="Car Speed">
                   </div>
                   <button id="${dealer._id}-new-car" onclick="DOMManager.addCar('${dealer._id})" class="btn btn-primary form-control">Add</button>
                </div>
                </div>
                </div><br>`
                
            );
            for (let car of dealer.cars) {
                $(`#${dealer._id}`).find('.card-body').append(
                    `<p>
                    <span id="name-${car._id}"><strong>Name: </strong> ${car.name}</span>
                    <span id="speed-${car._id}"><strong>Speed: </strong> ${car.speed}</span>
                    <button class="btn btn-danger" onclick="DOMManager.deleteCar('${dealer._id}' , '(${car._id})')>Delete Car</button>
                    </p>`
                );
            }
        }
    }
}

$('#create-new-dealer').click(() => {
DOMManager.createDealer($('#new-dealer-name').val());
$('#new-dealer-name').val("");
});

DOMManager.getAllDealers();