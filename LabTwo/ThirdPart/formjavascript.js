document.getElementById('searchBtn').addEventListener('click', getUsers);
/*
function getText(){
    console.log("hey i work");
    fetch('sample.txt')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById('output').innerHTML = data;
    })
}*/
//The search button function
function getUsers(){
    //getting the name of the user
    let x = document.getElementById("githubName").value;
    //getting the exact url needed to access user information
    let y = "https://api.github.com/users/" + x;
    //checking this function works
    console.log("i work");
    //getting the user information from the specific url
    fetch(y)
    .then((res) => res.json())
    .then((data) => {
        let output = '<b><p>User Profile</p></b>';
        
            output += `
                <b>Name:</b> ${data.name}<br>
                <b>Username:</b> ${data.login}<br>
                <b>Email:</b> ${data.email}<br>
                <b>Location:</b> ${data.location}<br>
                <b>Number of Gists:</b> ${data.public_gists}<br>
            
            `;
        //outputting the information to the html 
        document.getElementById('output').innerHTML = output;
    })

    //For getting the profile photo
    fetch(y)
    .then((resp) => resp.json())
    .then((data) => {
        document.getElementById("photo").src = data.avatar_url;
    })

    //for the repos
    let r = "https://api.github.com/users/" + x + "/repos";
    fetch(r)
    .then((res) => res.json())
    .then((data) => {
        let repos = '<b><p>User Repos</p></b>';
        //For loop to access all the repos
        data.forEach(function(user) {
            repos += `
                <b>Name of Repo:</b> ${user.name}<br>
                <b>Description:</b> ${user.description}<br>
                <br>
            `; 
        });
        document.getElementById('repos').innerHTML = repos;
    })

}