import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row">
            {/* mx-auto aligns everything in center and my-2 padding top and bottom */}
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name}<strong className="text-blue">{title}</strong>
                </h1>
                

            </div>
            
        </div>
    )
}
