import React, { useState } from 'react';

const Encrypt:React.FC = (props) => {
  const [state,setState] = useState(false);

  if(props.stego){
    setState(true);
  }

  if(state === true){
    return(
      <div className="h-auto w-full">
            
      </div>
    )
  }
  else{
    return (
      <div className='h-auto w-full'>

      </div>
    )
  }

}

export default Encrypt;