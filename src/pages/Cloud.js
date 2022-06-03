import React, {useEffect,useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import LoadingSpinner from "../components/LoadingSpinner";
import DetailContainerCloud from '../components/DetailContainerCloud';
import './Custom.css'

function Cloud() {
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
      <div >
        <br/>
        <Container>
          <Row>
              <Col sm={12}>
                  <Row>
                    <h2>
                      Cloud Infrastracture Fundamentals
                    </h2>
                  </Row>
              </Col>
          </Row>
          <DetailContainerCloud/>
        </Container>
      </div>
    );
  }
}

export default Cloud