
var form = document.getElementById('form')

    var form = document.getElementById('form')
    window.addEventListener('submit',async function (e) {
        e.preventDefault()
        var name = document.getElementById('name').value
        var password = document.getElementById('password').value
         
        // const data = {
        //     name:name.value,
        //     password:password.value
        // }


      await fetch('https://jsonplaceholder.typicode.com/posts',
           { method: 'POST',
            body: JSON.stringify({
                 name:name,
                password:password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
        .then(function(response){ 
            return response.json()})
            .then(function(data)
            {console.log(data)
           
            name=document.getElementById("title")
            password=document.getElementById("bd")
            name.innerHTML = data.name
            password.innerHTML = data.password  
          }).catch(error => console.error('Error:', error)); 
       
    });

 const  getData= async ()=>{

let response= await fetch('https://dummyjson.com/users')

let a =  response.json()
console.log("🚀 ~ file: fetchApi.js:51 ~ getData ~ a:", a)




}

getData();
