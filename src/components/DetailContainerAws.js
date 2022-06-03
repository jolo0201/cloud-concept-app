import React from "react";
import {DataAws} from "../data/DataAws";
import FragContainer from "./FragContainer";

const DetailContainerCloud = () => {
    return (
        <>
            {DataAws.map((data, key) => {
            return (
                <div className='cloud-container' key={key}>
                    <FragContainer data={data} />
                </div>
            );
            })} 
        </>
    );
};


  export default DetailContainerCloud