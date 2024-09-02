class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}shubham`
    }

    set password(value){
        this._password = value
    }
}

const shubham = new User("s@shubham.ai", "abc")
console.log(shubham.password);
