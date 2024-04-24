
function GetPosts(userid) {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" +userid)
    .then((response) =>{
     if(response.ok){
      return response.json()
     }  
    })
      .then((posts) => {document.getElementById("posts").innerHTML = "";
      for(post of posts){
          let content = `
          <div id="post" >
          <h3>${post.title}</h3>
      <h4> ${post.body}</h4>
      </div>
          `
          document.getElementById("posts").innerHTML += content
      }
  
    })
}

function GetUsers() {
    return new Promise ((resolve , reject)  => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
         if(response.ok){
          return response.json()
         } 
        })
          .then((users) => {
          
          document.getElementById("users").innerHTML = "";
          for( user of users){
              let content = `
              <div id="user"onclick="userclicked(${user.id}, this)" > 
          <h3>${user.name}</h3>
          <h3>${user.email}</h3>
              `
              document.getElementById("users").innerHTML += content
              resolve();
          }
      
        })
      
      
    })
    }

GetUsers() 
.then ( () => {
 
    GetPosts(1);
})


function userclicked(id,el){
    let selectedElement =document.getElementsByClassName("selected")
    for(Element of selectedElement){
        Element.classList.remove("selected")
    }
    GetPosts(id)
    el.classList.add("selected")
}