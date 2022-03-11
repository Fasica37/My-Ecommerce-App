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
export const PRODUCTS: Product[ ] = [];