import React, { useState } from 'react';



function CardFrame ({word,translation}){
const[text,setText] = useState (word);
function handleClick (){
setText (oldState => {
    if (oldState === word) {
        return translation;
    } else {
    return word;
}

})
}

return(
    <div className="flash-card" onClick = {handleClick}>
        {text}
    </div>
);

}
export default CardFrame;