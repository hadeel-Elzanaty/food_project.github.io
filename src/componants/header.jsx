import { Button } from "react-bootstrap";
import { AiOutlineCar } from "react-icons/ai"
import { RiShieldCheckLine } from "react-icons/ri"
import styles from "../styles/header/header.module.css"
import { Container } from "react-bootstrap";
//import backImg from "../assets/images/hero.png"
import backImg from "../assets/images/hero.png"

const Header = () => {
    return (<Container className={styles.mainDiv}>
        <div className="mt-4">
            <h5>Easy Way to make an order</h5>
            <h2>
                HUNGRY? <span>just wait <br/>food at </span>
                your door
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                nesciun sapiente omnis quis ipsam architecto.

            </p>
            <div className="d-lg-flex  mb-4  w-75">
                <Button className={styles.btn1}variant="danger">Order Now</Button>
                <Button  className={styles.btn2} variant="outline-danger">see all foods</Button>
            </div>
            <div className="d-flex mb-4  w-75">
                <h6><span>
                    < AiOutlineCar className={styles.icons} /></span>
                    No Shipping Fees</h6>
                <h6><span>
                    < RiShieldCheckLine className={styles.icons} /></span>
                    100% secure checkout</h6>
            </div>
        </div>
        <div  >
           
            <img height={400}  src={backImg} alt="loading.." />

        </div>


    </Container>);
}

export default Header;