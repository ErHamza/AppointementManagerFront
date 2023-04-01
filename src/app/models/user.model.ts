export class User{
    public get role(): string {
        return this._role;
    }
    public set role(value: string) {
        this._role = value;
    }


    constructor(
        private _user_id: number,
        private _username: string,
        private _password: string,
        private _email: string,
        private _phone_number: number,
        private _role: string

    ){}

    
    public get user_id(): number {
        return this._user_id;
    }
    public set user_id(value: number) {
        this._user_id = value;
    }

    
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }

    
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    
    public get phone_number(): number {
        return this._phone_number;
    }
    public set phone_number(value: number) {
        this._phone_number = value;
    }
    
   


    
    



	



}