import { Button, Card } from "react-bootstrap";

import styles from "../../styles/product/product.module.css"
const Product = ({type,name,img,price}) => {
  
    return ( 
        <Card className={styles.card} >
            <div className="card-body text-center ">
                <img src={img}width={100} alt="" />
                <h6>{name}</h6>
                <article >
                    <p>${price}</p>
                    <Button className={styles.btn} variant="danger">Add to cart</Button>
                </article>
                
            </div>
        </Card>
     );
}
 
export default Product;