import { Specliaity } from "./speciality.model";
import { User } from "./user.model"

export class Doctor extends User{

    
    constructor(
        user_id: number,
        username: string,
        password: string,
        email: string,
        phone_number: number,
         role: string,
        private _speciality:Specliaity,
         token:string
    ){
        super(
            user_id,
           username,
           password,
           email,
           phone_number,
            role ,token
               );

           
    }
    
    public get speciality():Specliaity{
        return this._speciality
    }
    





}