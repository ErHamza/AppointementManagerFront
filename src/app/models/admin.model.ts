import { User } from "./user.model";

export class Admin extends User{

    constructor(
        user_id: number,
        username: string,
        password: string,
        email: string,
        phone_number: number,
         role: string
    ){
        super(
            user_id,
           username,
           password,
           email,
           phone_number,
            role 
               );
    }

}