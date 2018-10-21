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
        let output = '<p>Users</p>';
        
            output += `
                Name: ${data.name}<br>
                Login: ${data.login}<br>
                Email: ${data.email}<br>
                Location: ${data.location}<br>
                Number of Gists: ${data.public_gists}<br>
            
            `;
        //outputting the information to the html 
        document.getElementById('output').innerHTML = output;
    })

    //For getting the profile photo
    fetch(y)
    .then((resp) => resp.json())
    .then((data) => {
        //let p = document.getElementById("photo").src
        //let photo = `${data.avatar_url}`;
        document.getElementById("photo").src = data.avatar_url;
        /*
        let photo = '<p>Photo</p>';
        
            photo += `
            <ul>
                <li>ID: ${data.avatar_url}</li>
            </ul>
            `;
        */
        //document.getElementById('photo').innerHTML = p;
    })

    //for the repos
    let r = "https://api.github.com/users/" + x + "/repos";
    fetch(r)
    .then((res) => res.json())
    .then((data) => {
        let repos = '<p>Repos</p>';
        //For loop to access all the repos
        data.forEach(function(user) {
            repos += `
                Name of Repo: ${user.name}<br>
                Description: ${user.description}<br>
            `; 
        });
        document.getElementById('repos').innerHTML = repos;
    })

}