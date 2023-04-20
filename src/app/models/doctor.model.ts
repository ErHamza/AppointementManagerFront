import { Speciality } from "./speciality.model";
import { User } from "./user.model"

export class Doctor extends User{
    [key: string]: any;

    
    constructor(
        user_id: number | null,
        username: string | null,
        password: string | null,
        email: string | null,
        phone_number: string,
         role: string,
        private _speciality:Speciality | null,
         
         image_name :string | null,
         token?:string | null
         
    ){
        super(
            user_id,
           username,
           password,
           email,
           phone_number,
            role ,
            
            image_name
            ,token,
               );

           
    }
    
    public get speciality():Speciality | null{
        return this._speciality
    }

    public set speciality(speciality : Speciality | null){
        this._speciality = speciality;
    }
    


}
