import React from 'react'

import Card from './Component/Card';
import Sample from './Component/Sample';




export default function Cplusplus() {
  return (
    <>
      <div >


        <div className='container my-3'>

          <div className='row'>


            {Sample.map((value, index) => {

              return <div className='col-md-3' key={index}>

                <Card
                  urlToImage={value.urlToImage}
                  title={value.title}
                  description={value.description} />

              </div>
            })}

            


          </div>
        </div>
      </div>
    </>
  )
}
