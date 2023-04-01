export class LoginForm{
    constructor(private _username : string , private _password: string){}

    public get username(){
        return this._username
    }

    public get password(){
        return this._password
    }

}