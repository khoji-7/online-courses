import React from 'react'
import { awrapper } from '../../dummydata'

const AWrapper = () => {
  return (
    <>
        <section className='awrapper'>
            <div className='container grid'>
                {awrapper.map((val)=>(
                        <div className="box flex">

                        </div>

                    ))
                }
            </div>
        </section>
    </>
  )
}

export default AWrapper
