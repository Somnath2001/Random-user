import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";


const MyCard = ({details}) => {

    return(
        <Card className="cardo">
            <CardBody className="text-center">
                <img 
                height="150"
                 width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                />
                <CardTitle className="text-primary">
          <h1>
            <span className="pr-2 text-right">{details.name?.title}</span>
            <span> {details.name?.first}</span>
            <span>{details.name?.last}</span>
            
          </h1>
        </CardTitle>
        <CardText>
          <FaMapMarkedAlt />
          {details.location?.city}
          <p><FaPhone />{details.phone}</p>
          <p>Date of Birth:{details.dob?.date}</p>
          <p>Email :{details.email}</p>
          
        </CardText>
            </CardBody>
        </Card>
    )



}
export default MyCard;