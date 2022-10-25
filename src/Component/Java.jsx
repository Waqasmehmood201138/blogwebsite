import React from 'react'
import Card from '../Card';
import JavaSample from '../JavaSample';


export default function Java() {
  return (
    <>
      <div className='container my-3'>

        <div className='row'>



          {JavaSample.map((val, index) => {
            console.log(index);

            return (

              <div className='col-md-3 my-3'>

                <Card
                  key={index}
                  title={val.title ? val.title.slice(0, 20) : "Title Not Available"}
                  description={val.description ? val.description.slice(0, 75) : "Description Not Available"}
                  imageUrl={val.urlToImage}
                  newsUrl={val.url}
                />
              </div>);
          })}



        </div>

      </div>
    </>
  )
}
