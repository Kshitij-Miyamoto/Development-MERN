const user = {
    user : "Kshitij" ,
    price : 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
    }
}
user.WelcomeMessage()
user.username = "Sam" //here we changed the context/meaning of the variable
