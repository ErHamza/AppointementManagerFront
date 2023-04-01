import { Rdv } from "./rdv.model";

export class Consultaion{
    

        constructor(
            public consultation_id: number,
            public diagnostic: string,
            public rdv: Rdv
        ) {}

    
}