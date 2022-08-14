
export const getGifs = async(category) => {
    const api = 'LGi6NaUxeObdjB2fEcd9D4GrKD2LAF6r'
    const apiGiphy = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${category}&limit=10`
   
    const resp = await fetch(apiGiphy)
    const {data} = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs
}