import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img className='img' src={url} alt={title} />
            <p className='name'  key={id} > { title } </p>
        </div>
    )
}
