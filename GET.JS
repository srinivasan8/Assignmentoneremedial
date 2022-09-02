function showResult() {
fetch('https://reqres.in/api/users?page=2') // For the GET, we want to call the endpoint by making it extract several data in a JSON file from this website.
.then(res => {    /* IF statement checks server response: .catch() does not do this! */ 
if (res.ok) { console.log("The Request is successful") }
else { console.log("The request is unsuccessful") }
return res
})
.then(res => res.json()) // To make sure the JSON file from the website is gotten.
.then(data => console.log(data)) // shows the data that is gotten from the website 'https://reqres.in/api/users?page=2'
.catch(error => console.log(error)) // handles different types of error like for example if the link is inaccurate like https://r 
//instead of 'https://reqres.in/api/users?page=2'

}
