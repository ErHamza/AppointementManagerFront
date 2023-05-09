
import { User } from "./user.model";

export class Patient extends User{

    constructor(
        user_id: number,
        fullname: string,
        password: string,
        email: string,
        phone_number: string,
         role: string,
         token:string,
         image_name :string
         
    ){
        super(
            user_id,
           fullname,
           password,
           email,
           phone_number,
            role,
            token,
            image_name
               );
    }

  

}