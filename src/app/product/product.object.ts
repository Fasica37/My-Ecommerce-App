export class Product{
        id: number;
  		name: string;
		price: number;
		imageUrl: string;
		description: string;

        constructor(){
            this.id = 0;
            this.name = '';
            this.price = 0;
            this.imageUrl = '';
            this.description = '';
     }  

     
}
export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'Toyota', imageUrl: 'https://media.istockphoto.com/photos/ferrari-laferrari-picture-id503407231?k=20&m=503407231&s=612x612&w=0&h=gnZt5KUOn0DbH8QXNi7cNYvisye8seBj-4Iqab0BlMI=', price: 1000000, description: 'With supporting text below as a natural lead-in to additional content.'},
    { id: 2, name: 'Ferrari', imageUrl: 'https://media.istockphoto.com/photos/ferrari-laferrari-picture-id503407231?k=20&m=503407231&s=612x612&w=0&h=gnZt5KUOn0DbH8QXNi7cNYvisye8seBj-4Iqab0BlMI=', price: 1500000, description: 'With supporting text below as a natural lead-in to additional content.'},
    { id: 3, name: 'Lumbergini', imageUrl: 'https://media.istockphoto.com/photos/ferrari-laferrari-picture-id503407231?k=20&m=503407231&s=612x612&w=0&h=gnZt5KUOn0DbH8QXNi7cNYvisye8seBj-4Iqab0BlMI=', price: 2000000, description: 'With supporting text below as a natural lead-in to additional content.'}
];