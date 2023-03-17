$(() => {

    $('#navbar').load('../components/navbar.html', loginIfNeeded) //for loading navbar for loading footer
    // load "loginIfneeded" after loading of navbar --> callback function 
    $('#footer').load('../components/footer.html')                

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
                console.log($('#nav-username'))
                $('#nav-username').text(currentUser.username) // put founded username in placeholder id
            }                
        })
    } else{
        console.log('resuming session as ', currentUser.username)
        $('#nav-username').text(currentUser.username) // put generated username in placeholder id
    }
}