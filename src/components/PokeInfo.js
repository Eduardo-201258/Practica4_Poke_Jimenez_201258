import React from 'react';


const PokeInfo = ({id,name, type, img}) => {
   return(
       <div>
           <div className="number"><small>#0{id}</small></div>
           <img src={img} alt={name}/>
           <div className="detail-wrapper">
               <h3>{name}</h3>
               <h4>{type}</h4>
           </div>
       </div>
   );
}

export default PokeInfo;