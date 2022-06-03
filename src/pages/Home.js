import React, {useState, useEffect} from 'react'
import './Custom.css'
import LoadingSpinner from "../components/LoadingSpinner";
function Home() {
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
      <div className="center">
          <h1 className='home-header'>Solutions Architect Concepts</h1>
          <h4 className='home-header-sub'>By: John Carlo Guevarra</h4>
      </div>
    )
   }

}

export default Home