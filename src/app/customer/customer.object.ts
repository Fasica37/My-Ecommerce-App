export class Customer{
    id: number;
    name: string;
    imageUrl: string;
    gender: String;
    email: String;


    constructor(){
        this.id = 0;
        this.name = '';
        this.imageUrl = '';
        this.gender = '';
        this.email = '';
 }  

 
}
export const CUSTOMERS: Customer[ ] = [
{ id: 1, name: 'Fasica Zewdie', imageUrl: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg', gender: 'Male', email: 'fascia.zewdie7@gmail.com'},
{ id: 2, name: 'Estifanos Yalew', imageUrl: 'https://img.freepik.com/free-photo/portrait-excited-businessman-dressed-suit_171337-150.jpg?size=626&ext=jpg', gender: 'Male', email: 'estifanos.yalew7@gmail.com'},
{ id: 3, name: 'Endale Tegegnewerk', imageUrl: 'https://img.freepik.com/free-photo/studio-portrait-successful-young-businesswoman_1262-5844.jpg?size=626&ext=jpg', gender: 'Female', email: 'endale.tegegnewerk7@gmail.com'}
];