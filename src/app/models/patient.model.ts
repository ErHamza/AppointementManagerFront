import { Specliaity } from "./speciality.model";
import { User } from "./user.model";

export class Patient extends User{

    constructor(
        user_id: number,
        username: string,
        password: string,
        email: string,
        phone_number: number,
         role: string,
         token:string,
         private _image_name :string
         
    ){
        super(
            user_id,
           username,
           password,
           email,
           phone_number,
            role,
            token
               );
    }

    public get image_name(){
        return this._image_name
    }
    public set image_name(image:string){
        this._image_name= image;
    }

}