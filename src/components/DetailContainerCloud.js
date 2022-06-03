import React from "react";
import  {DataCloud} from "../data/DataCloud";
import FragContainer from "./FragContainer";

const DetailContainerCloud = () => {
    return (
        <>
           {DataCloud.map((data, key) => {
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