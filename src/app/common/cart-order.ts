import { Product } from "./product";

export class CartOrder {
    
    id!: number;
    nom!: string;
    prix!: number;
    imageUrl!: string;
    quantity!:number;
    
    constructor(product: Product){
        this.id= product.id
        this.nom= product.nom;
        this.prix= product.prix;
        this.imageUrl= product.imageUrl;
        this.quantity=1;
    }
}
