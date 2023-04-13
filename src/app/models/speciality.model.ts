export class Specliaity{
    constructor(private _speciality_name:string , private _speciality_id :number){}
    public get speciality_name():string{
        return this._speciality_name
    }
}