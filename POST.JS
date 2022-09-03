function showResult() {
fetch('https://reqres.in/api/users', { // For the POST, we want to call the endpoint by making it request to post new JSON file component or even change.
method: "POST", //Here we specify what Method we are going to do which is "POST".
headers: {
'Content-type': 'application/json'
},
body: JSON.stringify(
{ page: "5"} //Here we request to create a new random JSON file where we will fixate Page into being 5 and the rest being random.
)
})
.then(res => {
if (res.ok) { console.log("The request of POST is successful") } //This will tell that the resuklt of posting data request is fullfilled and successful
else { console.log("The request of POST is unsuccessful") } //This will tell that the resuklt of posting data request is unsuccessful
return res
})
.then(res => res.json())// To make sure the JSON file from the website is gotten.
.then(data => console.log(data)) // shows the data that is changed from the website 'https://reqres.in/api/users'
.catch(error => console.log(error)) // handles different types of error like for example if the link is inaccurate like https://r 
//instead of 'https://reqres.in/api/users'
}
