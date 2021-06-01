import React,{useState} from 'react';
import { Toast, 
  ToastBody,
   ToastHeader,
   Row,
   Col,
   Button
  } from 'reactstrap';

const Toasti = ( {details} ) => {

  
  return (
    

    <Row >
      <Col xs={6} className="my-1">
        <Toast className="toasto">
          <ToastHeader>
            <strong className="mr-auto">Info</strong>
          </ToastHeader>
          <ToastBody><h3>Gender:{details.gender}</h3></ToastBody>
        </Toast>
      </Col>
      <Col xs={6} className="my-1">
        <Toast className="toasto">
          <ToastHeader>
            <strong className="mr-auto">Info</strong>
          </ToastHeader>
          
          <ToastBody><h4>User: {details.login?.username}</h4></ToastBody>
        </Toast>
      </Col>
      <Col xs={6}>
  
      </Col>
    </Row>

  
  );

      
      
      
      

  };

export default Toasti;
