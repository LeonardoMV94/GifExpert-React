import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['The Office']);

    const onAddCategory = ( newCategory ) => { 
        if(categories.includes(newCategory)) return;
        setCategories( old => [...old, newCategory] )
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
