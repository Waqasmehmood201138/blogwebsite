import React from 'react'

export default function Card(props) {
  return (
    
<>
            <div className='container my-3'>
                
                    <div className="card " >
                        <img src={props.urlToImage} style={{height: '150px'}} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href='/' className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            
        </>

  )
}
