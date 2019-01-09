export default class {
  constructor() {}

  getRestaurants(page, pagesize) {
    console.log("dans get restaurants");
    return new Promise((resolve, reject) => {
      let urlRestaurants =
        "http://localhost:8080/api/restaurants?page=" +
        page +
        "&pagesize=" +
        pagesize;

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
}
