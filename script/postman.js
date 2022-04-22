
//PostmanJS
var Postman = {};

var uri = "https://jsonplaceholder.typicode.com/";
//GET - read
Postman.GET = function (uri)
{
    fetch(uri)
    .then(response => response.json())
    .then(data => console.log(data));

};

//POST - Create NEW record
Postman.POST = function(uri,payload)
{
    fetch(uri,{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log(data));
};


//PUT - If the record exists then update else create a new record
Postman.PUT = function(uri,payload)
{
    fetch(uri,{
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

//PATCH - update/modify
Postman.PATCH = function(uri,payload)
{
    fetch(uri,{
        method: 'PATCH',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log(data));
};

//DELETE - delete
Postman.DELETE = function(uri)
{
    fetch(uri,
    {
        method:"DELETE"
    })
    .then(response => response.json())
    .then(data => console.log(data));

}
