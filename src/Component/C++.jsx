import React from 'react'
import Card from '../Card'

import Sample from '../Sample'

console.log(Sample[0].title);

export default function Cplusplus() {

  

  return (
    <>

    
      <div className='container my-3'>

        <div className='row'>
          <div className='col-md-3'>
            <Card title={Sample[0].title} description={Sample[0].description}  imageUrl={Sample[0].urlToImage}/>
          </div>
        
          
        
          <div className='col-md-3'>
          <Card title={Sample[2].title} description={Sample[2].description}  imageUrl={Sample[2].urlToImage}/>
          </div>
       

        
          <div className='col-md-3'>
          <Card title={Sample[3].title} description={Sample[3].description}  imageUrl={Sample[3].urlToImage}/>
          </div>


        
          </div>


          <div className='row'>
          <div className='col-md-3'>
            <Card title={Sample[4].title} description={Sample[4].description}  imageUrl={Sample[4].urlToImage}/>
          </div>
        
          
        
          <div className='col-md-3'>
          <Card title={Sample[5].title} description={Sample[5].description}  imageUrl={Sample[5].urlToImage}/>
          </div>
       

        
          <div className='col-md-3'>
          <Card title={Sample[6].title} description={Sample[6].description}  imageUrl={Sample[6].urlToImage}/>
          </div>

          
        
          </div>


          <div className='row'>
          <div className='col-md-3'>
            <Card title={Sample[7].title} description={Sample[7].description}  imageUrl={Sample[7].urlToImage}/>
          </div>
        
          
        
          <div className='col-md-3'>
          <Card title={Sample[8].title} description={Sample[8].description}  imageUrl={Sample[8].urlToImage}/>
          </div>
       

        
          <div className='col-md-3'>
          <Card title={Sample[9].title} description={Sample[9].description}  imageUrl={Sample[9].urlToImage}/>
          </div>

          
        
          </div>
      </div>

    </>
  )
}
