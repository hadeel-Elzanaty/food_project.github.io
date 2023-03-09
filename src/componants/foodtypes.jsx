import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import category1 from "../assets/images/category-01.png"
import category2 from "../assets/images/category-02.png"
import category3 from "../assets/images/category-03.png"
import category4 from "../assets/images/category-04.png"
import styles from "../styles/foodtypes/foodtypes.module.css"
const FoodTypes = () => {
    return (
        <Container >
            <Row className={styles.categories}>


                <Link className={styles.category} to="#">
                    <div> <img src={category1} alt="" className="me-2" /> Fast Food </div>
                    
                     </Link >






                <Link className={styles.category} to="#">  
               <div>  <img src={category2} alt="" className="me-2" /> Pizza</div>
                 </Link>






                <Link className={styles.category} to="#"> <div>
                <img src={category3} alt="" className="me-2" /> Asian Food
                </div>
                </Link>






                <Link className={styles.category} to="#">  
                <div>  <img src={category4} alt="" className="me-2" /> Row Meat</div></Link>




            </Row>
        </Container>
    );
}

export default FoodTypes;