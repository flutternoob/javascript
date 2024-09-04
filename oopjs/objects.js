/* var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
}; */

/* class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'has logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'has logged out');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
} */

    function User(email, name){
        this.email = email;
        this.name = name;
        this.online = false;
    
        this.login = function(){
            console.log(this.email, 'has logged in');
        }
    }
    
    User.prototype.login = function(){
        this.login = true;
        console.log(this.email, 'has logged in');
    }
    
    User.prototype.logout = function(){
        this.login = false;
        console.log(this.email, 'has logged out');
    }
    
    function Admin(...args){
        console.log(args);
        User.apply(this, args);
    
        this.role = 'super admin';
    }
    
    Admin.prototype = Object.create(User.prototype);

    Admin.prototype.deleteUser = function(u){
        users = users.filter(user => {
            return user.email != u.email;
        });
    }
    
    var userOne = new User('ryu@ninjas.com', 'Ryu');
    var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
    
    var admin = new Admin('shaun@ninjas.com', 'Shaun');

    var users = [userOne, userTwo, admin];
    
    console.log(admin);