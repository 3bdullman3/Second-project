
function GetUsersFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            if (users.response >= 200 && users.status < 300) {
                document.getElementById("users").innerHTML = "";
                for (user of users) {
                    let content = `
                        <div id="user" onclick="userclicked(${user.id}, this)">
                            <h3>${user.name}</h3>
                            <h3>${user.email}</h3>
                        </div>
                    `;
                    document.getElementById("users").innerHTML += content;
                }
            
            }
        });
}

function GetPostFetch(userid) {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userid)
        .then(response => response.json())
        .then(posts => {
            if (users.status >= 200 && users.status <300 ) {
                document.getElementById("posts").innerHTML = "";
                for (post of posts) {
                    let content = `
                        <div id="post">
                            <h3>${post.title}</h3>
                            <h4>${post.body}</h4>
                        </div>
                    `;
                    document.getElementById("posts").innerHTML += content;
                }
            } 
        });
}

return GetPostFetch(1)
return GetUsersFetch() 
function userclicked(id,el){
    let selectedElement =document.getElementsByClassName("selected")
    for(Element of selectedElement){
        Element.classList.remove("selected")
    }
    GetPosts(id)
    el.classList.add("selected")
}

