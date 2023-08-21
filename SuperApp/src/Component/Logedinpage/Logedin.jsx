import React from 'react'
import './Logedin.css'
import boy from '../../asset/boy.png'
function Logedin() {
    return (
        <>
            <div className='main'>

                <div className='Left'>

                    <div className='top'>

                        <div className='top-left'>
                            <div className='top-left-top'>
                                <img src={boy} alt='boy' />

                            </div>
                            <div className='top-left-bottom'></div>

                        </div>


                        <div className='top-right'></div>


                    </div>


                    <div className='bottom'>bottom</div>


                </div>
                <div className='Right'>Right</div>
            </div>
        </>
    )
}

export default Logedin