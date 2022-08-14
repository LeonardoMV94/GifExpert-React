
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {
    
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h5>{ category }</h5>
            {
                isLoading ? (<h6 >Cargando...</h6>) : null
            }
            
            <div className="card-grid">
                {   
                    images.map( (image) => (
                        <GifItem key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
}
