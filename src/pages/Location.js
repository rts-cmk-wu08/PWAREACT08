import { useEffect, useState } from "react";

const Location = () => {
    const [myPos, setMyPos] = useState();
    const [dynPos, setDynPos] = useState();
    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                setMyPos(position)
            })
        }
    }, []);

    const handleDynamicPosition = (position) =>{
        setDynPos(position)
    }
    const handleDynamicPositionError = (err) =>{
      console.log(err)
    }

    navigator.geolocation.watchPosition(handleDynamicPosition,handleDynamicPositionError, {timeout:5000})
    return ( <> 
     <h1>this is static location</h1> 
     <p>Latitude: {myPos?.coords.latitude}</p>
     <p>Longitude: {myPos?.coords.longitude}</p>
     <p>Altitude: {myPos?.coords.altitude}</p>
     <p>Speed: {myPos?.coords.speed}</p>
     <p>Accuracy: {myPos?.coords.accuracy}</p>

     <h1>this is dynamic position</h1>
    
       <>
       <p>Latitude: {dynPos?.coords.latitude}</p>
     <p>Longitude: {dynPos?.coords.longitude}</p>
     <p>Altitude: {dynPos?.coords.altitude}</p>
     <p>Speed: {dynPos?.coords.speed}</p>
     <p>Accuracy: {dynPos?.coords.accuracy}</p>
       </>

  
    </>
  
    );
}
 
export default Location;