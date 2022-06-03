import React from "react";
import {Row,Col} from 'react-bootstrap';

const FragContainer = ({ data }) => {
    if (!data) return <div />;
    return (  
           <div>
                <Row>
                    <Col sm={12}>
                        <Row>
                            <h4 className='concept-title'>
                                {data.title}
                            </h4>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='concept-info'>
                        <Row>
                            <p dangerouslySetInnerHTML={{__html:data.details}}></p>
                        </Row>
                        <Row>
                            <p className='reference-info'>
                                Reference: <a href={data.url} className='link-info'>{data.ref}</a>
                            </p>
                        </Row>
                    </Col>
                </Row>
           </div>
    
    );
  };

  export default FragContainer