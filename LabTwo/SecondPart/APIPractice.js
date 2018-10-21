/*const getApi = () => {
    const url = fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(response => response.json())
    var users = url.map(function(id){
        return id.address.city, id.address.zipcode
    })
    
    .then(json => console.log(json))
}

getApi()

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(function(data){
    let users = data;
    let zipcode = users.map(user => {
       return user.address.zipcode + " " + user.address.city;
    })
    console.log(zipcode);
})
.then((res) => res.user.address.zipcode.text())
.then((data) => console.log(data.startsWith("2")))
.then((data) => console.log(data.startsWith("5")))
/*
//Not working!!! FIX THIS
//use startswith function
.then(function(data){
    let zips = data;
    let specf = zips.map(user => {
        user.address.zipcode;
    });
    let n = specf.startsWith("2");
    let m = specf.startsWith("5");
    console.log(n + m);
    

    //var str = "Hello world, welcome to the universe.";
    //var n = str.startsWith("Hello");
    //document.getElementById("demo").innerHTML = n;
})
*/
/*
const specificPost = post => {
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({
            'Addresses': 'address/json'

        })
    }
    return fetch('https://jsonplaceholder.typicode.com/users', options)
    .then(res => res.json())
    .then(res => console.log(res))

}
getPosts(2)
*/
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
*/

//fetch('https://jsonplaceholder.typicode.com/users/2/?select=fields.zipcode,fields.city')
//.then(response => response.json())
//.then(function(){}
//.then(select=zipcode)



/*
const ul = document.getElementById('Users');
  const url = 'https://jsonplaceholder.typicode.com/users/2/';
  fetch(url)
  .then((resp) => resp.json())
    
  .then(json => console.log(json))
  */
  /*.then(function(data) {
    let users = data.results; // Get the results
    return users.map(function(use) { // Map through the results and for each run the code below
      let x = createNode('x'), //  Create the elements we need
          y = createNode('y'),
          a = createNode('a');
      y.src = use;  // Add the source of the image to be the src of the img element
      a.innerHTML = `${use.adresss.city} ${use.address.zipcode}`; // Make the HTML of our span to be the first and last name of our author
      append(x, y); // Append all our elements
      append(x, a);
      append(ul, x);
    })
  })
    
  .then(json => console.log(json))
*/
//?select=fields.productName,fields.price
//&content_type=<content_type_id>

/*
postData(`http://example.com/answer`, {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}
*/