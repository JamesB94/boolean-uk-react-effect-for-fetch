import ArtListItem from './ArtListItem'

const ArtList = ({artInfo}) => {
    //console.log('prop passed on', artInfo)

    return ( 
        <div>
            <ul className="art-list"> 

                { artInfo.map((data) => {
                    return <ArtListItem key={data.id} data ={data} />  })}
                    
            </ul>

        </div>

     );
}
 
export default ArtList;