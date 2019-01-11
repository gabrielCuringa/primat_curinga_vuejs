var Utils = require("../Utils.js");
export default class {
  constructor() {}

  getRestaurants(page, pagesize, name = "") {
    console.log("dans get restaurants");
    return new Promise((resolve, reject) => {
      let urlRestaurants =
        "http://localhost:8080/api/restaurants?page=" +
        page +
        "&pagesize=" +
        pagesize +
        "&name=" +
        name;

      fetch(urlRestaurants, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          let returnData = {
            msg: json.msg,
            data: json.data,
            count: json.count
          };
          resolve(returnData);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  addRestaurant(formData) {
    return new Promise((resolve, reject) => {
      let urlRestaurants = "http://localhost:8080/api/restaurants/";
      fetch(urlRestaurants, {
        method: "post",
        body: formData
      }).then(response => {
        response
          .json()
          .then(res => {
            //arrow function preserve le THIS
            console.log("Resto inséré");
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    });

    // on remet à zéro les champs
    this.nom = "";
    this.cuisine = "";
  }

  updateRestaurant(id, formData) {
    let url = "http://localhost:8080/api/restaurants/" + id;

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "put",
        body: formData
      }).then(response => {
        response
          .json()
          .then(res => {
            //arrow function preserve le THIS
            console.log("Resto modifié");
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    });
  }

  getRestaurantById(id) {
    console.log("dans get restaurant by id");
    return new Promise((resolve, reject) => {
      let urlRestaurants = "http://localhost:8080/api/restaurants/" + id;

      fetch(urlRestaurants, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          let returnData = {
            msg: json.msg,
            restaurant: json.restaurant
          };
          resolve(returnData);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  deleteRestaurant(id) {
    console.log("dans delete restaurant");
    return new Promise((resolve, reject) => {
      let urlRestaurants = "http://localhost:8080/api/restaurants/" + id;

      fetch(urlRestaurants, {
        method: "delete"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          let returnData = {
            msg: json.msg,
            count: json.count
          };
          console.log("dans then API");
          resolve(returnData);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getAddressFromLatLng(address) {
    console.log("dans get address from lat lng");
    address = address.split(" ").join("+");
    return new Promise((resolve, reject) => {
      let url =
        "http://nominatim.openstreetmap.org/search?q=" +
        address +
        "&format=json";
      fetch(url, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          resolve(json);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      let url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      fetch(url, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          var meals = json.meals;
          //on retire les entrées et desserts
          meals.length > -1 ? meals.splice(3, 1) : null;
          meals.length > -1 ? meals.splice(9, 1) : null;
          resolve(meals);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getMenuFromCategory(category) {
    return new Promise((resolve, reject) => {
      console.log("go " + category);
      //get entrees
      let url =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
      fetch(url, {
        method: "get"
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          var meals = [];

          //add random prices
          meals = json.meals;

          meals.forEach(meal => {
            meal["price"] = Utils.random(7, 16);
          });

          let mealsByCategory = {
            category: category,
            meals: meals
          };

          resolve(mealsByCategory);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getRandomImages() {
    return new Promise((resolve, reject) => {});
  }
}
