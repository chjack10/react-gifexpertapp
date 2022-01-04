export const getGifs = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=GNbntVPLQ9iiopcBvNvDBzdDa8TB4SOj`;
    const resp = await fetch(url);
    const {data} = await  resp.json();

    const gifs = data.map( ({id, title, images}) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url,
        }
    })

    return gifs;
}