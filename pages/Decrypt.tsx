import React, { useState } from 'react'

const Decrypt: React.FC = (props) => {
    const [state, setState] = useState(false);

    if (props.stego) {
        //Update the state...
        setState(true);
    }

    return (
        <div className='h-auto w-full'>

        </div>
    )
}

export default Decrypt