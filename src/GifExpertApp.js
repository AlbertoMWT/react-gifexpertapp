import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Overwatch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, "hunter X hunter"])
    //     setCategories(cats => [...cats, 'HunterXHunter'])
    // }
  
    return (
        <>
            <h2 className='title' >GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} /> 
                    ))
                }
            </ol>
        </>
    )
}

