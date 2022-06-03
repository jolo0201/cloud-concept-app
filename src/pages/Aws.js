import React, {useEffect,useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import LoadingSpinner from "../components/LoadingSpinner";
import DetailContainerAws from '../components/DetailContainerAws';
import './Custom.css'

function Aws() {
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));
      // Toggle loading state
      setLoading((loading) => !loading);
    }; 
    loadData();
  }, [])
  if (loading) {
      return <div><LoadingSpinner /></div>
  }else{
    return (
      <div>
        <br/>
        <Container>
            <Row>
                <Col sm={12}>
                    <Row>
                      <h2>
                        AWS Global Infrastructure
                      </h2>
                    </Row>
                </Col>
            </Row>
            <br/>
            <DetailContainerAws/>  
        </Container>
      </div>
    );
  }
}

export default Aws