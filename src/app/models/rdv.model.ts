import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Rdv {
    constructor(
        public rdv_id: number,
        public date_rdv: Date,
        public isCanceld: boolean,
        public doctor: Doctor,
        public patient: Patient
    ) {}

    
}
