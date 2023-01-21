const ArtListItem = ({data}) => {

    //console.log('the prop is passed through ', data)
    return ( 
        
        <li>
            <div className="frame">
                    <img src= {"https://www.artic.edu/iiif/2/" + data.image_id + "/full/843,/0/default.jpg"} alt='' />
                    <h3>{data.title}</h3>
                    <p>Artist: {data.artist_titles}</p>
                    <h4>Artistic Subjects:</h4>
                    <ul>
                        { data.term_titles.map( nestedData => {
                            return <li key={nestedData.id}>{nestedData}</li>
                            })}
                    </ul>
            </div>
        </li>
     );
}
 
export default ArtListItem;