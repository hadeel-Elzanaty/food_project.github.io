import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai"
import styles from "../styles/header/header.module.css"
import { Container } from "react-bootstrap";


import backImg from "../assets/images/location.png"
const Header2 = () => {
    return (
    <Container className={styles.mainDiv}>
         <div className="mt-5" >
           
           <img height={400}  src={backImg} alt="loading.." />

       </div>
        <div className="mt-3">
         
            <h2>
            Why <span>  Tasty Treat? <br/>food at </span>
            </h2>
            <p className="fs-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                nesciun sapiente omnis quis ipsam architecto.
               
                nesciun sapiente omnis quis ipsam architecto.

            </p>
            <h5 className="fs-6 fw-bold">
          <  AiOutlineCheckCircle  className="text-danger"/> Fresh and tasty foods

            </h5>
           <p>Lorem ipsum dolor, sit amet consectetur adipi ullam?</p>
           
           <h5 className="fs-6 fw-bold">
          <  AiOutlineCheckCircle  className="text-danger"/> Quality support

            </h5>
           <p className="fs-9">Lorem ipsum dolor, sit adipisicing elit Harum.</p>
           
            <h5 className="fs-6 fw-bold">
          <  AiOutlineCheckCircle className="text-danger"/> Order from any location

            </h5>
           <p>Lorem ipsum dolor, sit amur adipisicing elit. Harum, ullam?</p>
           
        </div>
       


    </Container>);
}

export default Header2;