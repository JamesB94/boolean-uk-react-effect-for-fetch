import { useEffect, useState } from "react"
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artInfo, setArtInfo] = useState([])

  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks?page=6&limit=5')
      .then(response => response.json())
      .then(info => 
        setArtInfo(info.data) )
        // setArtInfo(data))
  }, []);

  // console.log("here is data", artInfo.data )


  

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artInfo ={artInfo} />
      </div>
    </section>
  )
}

export default ArtsSection
