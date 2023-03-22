$(() => {

    $('#navbar').load('../components/navbar.html', loginIfNeeded) //for loading navbar for loading footer
    // load "loginIfneeded" after loading of navbar --> callback function 
    $('#footer').load('../components/footer.html')             
    $('#content').load('/components/all-posts.html', loadPosts)

})

function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    //if window.localStorage == true, then JSON.parse(window.localStorage.user) , else null
    
    if(!currentUser) { // currentUser not found or null
        $.post('api/users', {} , (user) => { // post req on localhost:8383/api/users
            if (user) {                       // generates a user and we catch in "user" obj
                console.log('registered current user as ', user.username)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                console.log($('#nav-username')) // extra
                $('#nav-username').text(currentUser.username) // put founded username in placeholder id
            }                
        })
    } else{
        console.log('resuming session as ', currentUser.username)
        $('#nav-username').text(currentUser.username) // put generated username in placeholder id
    }
}

function loadPosts(){

    $.get('/api/posts', (posts) => {

        for(let p of  posts){
            $('#post-container').append(
                $(`
                <div class="col-4">
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                            <p class="card-text">${p.body}</p>
                            <a href="#" class="card-link">Read</a>
                            <a href="#" class="card-link text-danger">Like</a>
                        </div>
                    </div>
                </div>
                `)
            )
        }
    })
}