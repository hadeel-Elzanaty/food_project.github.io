import styles from "../styles/header/header.module.css"
import { Container } from "react-bootstrap";
import backImg from "../assets/images/network.png"
import ahmed from "../assets/images/ava-1.jpg"

const Header3 = () => {
    return (
    <Container className={styles.mainDiv}>
        <div className="mt-3">
            <h5 className="text-danger">Testimonial</h5>
            <h2 className="fs-4 text-dark">
              What our   <span className="text-danger" >customer</span> are saying 
              
            </h2>
            <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                nesciun sapiente omnis quis ipsam architecto.
                nesciun sapiente omnis quis ipsam architecto.

            </p>
            <h6 className="fw-bold " >
           
           <img className="rounded me-2" height={40}  src={ahmed} alt="loading.." />
            Ahmed Belal

       </h6>
        </div>
        <div  >
           
            <img height={400}  src={backImg} alt="loading.." />

        </div>


    </Container>);
}

export default Header3;