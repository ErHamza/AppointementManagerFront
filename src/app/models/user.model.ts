export class User{
    public get role(): string | null {
        return this._role;
    }
    public set role(value: string | null) {
        this._role = value;
    }


    constructor(
        private _user_id: number | null ,
        private _username: string | null,
        private _password: string | null,
        private _email: string | null,
        private _phone_number: string | null,
        private _role: string | null,
        
        private _image_name :string | null,
        private _token? : string | null
        

    ){}


    
    public get user_id(): number | null {
        return this._user_id;
    }
    public get token():string | null | undefined{
        return this.token
    }


    public set token(value :string | null | undefined){
        this._token = value;
    }
    public set user_id(value: number | null) {
        this._user_id = value;
    }

    
    public get username(): string| null {
        return this._username;
    }
    public set username(value: string | null) {
        this._username = value;
    }

    
    public get password(): string | null{
        return this._password;
    }
    public set password(value: string | null) {
        this._password = value;
    }
    
    public get email(): string | null{
        return this._email;
    }
    public set email(value: string | null) {
        this._email = value;
    }
    
    public get phone_number(): string | null {
        return this._phone_number;
    }
    public set phone_number(value: string | null) {
        this._phone_number = value;
    }
   
    public get image_name () : string | null{
        return this._image_name
    }
    public set image_name(image:string | null){
        this._image_name= image;
    }


    
    



	



}