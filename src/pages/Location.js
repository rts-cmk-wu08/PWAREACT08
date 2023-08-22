import { useEffect, useState } from "react";

const Location = () => {
    const [myPos, setMyPos] = useState();
    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position)
                setMyPos(position)
            })
        }
    }, []);
    return ( <> 
     <h1>this is a location</h1> 
     <p>Latitude: {myPos?.coords.latitude}</p>
     <p>Longitude: {myPos?.coords.longitude}</p>
     <p>Altitude: {myPos?.coords.altitude}</p>
     <p>Speed: {myPos?.coords.speed}</p>
     <p>Accuracy: {myPos?.coords.accuracy}</p>
    </>
  
    );
}
 
export default Location;