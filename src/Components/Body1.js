import React, { useState } from 'react'
import Image from '../Components/wallpaper.jpg'
import ReactPlayer from 'react-player'
const Body1 = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [cartoon, setcartoon] = useState([
        { cartoon: 'Tom and Jerry' },
        { cartoon: 'Motu Patlu' },
        {cartoon:'Doremon'} 
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % cartoon.length
        setIndex(newIndex)
    }
    
       

    return (
        <div>
            <div>
                <center>
                <img src={Image} alt="images" /> 
                <p><b><u>Sunset:</u></b></p>
                <p>Sunset is the disappearance of the Sun below the horizon of the Earth due to its rotation.
                     As viewed from everywhere on Earth, it is a phenomenon that happens approximately once every 24 hours except in areas close to the poles.
                During sunset, the light from the sun must pass through a greater area of the atmosphere,
                 which results in an even greater scattering of blue light. As red has the longest wavelength of visible light, a greater proportion of red light reaches the Earth. Thus, the sun and sky appear a red color during sunsets.
                </p>
                <p><b>likes: {likes}</b></p>
                {/* destructuring */}
                <button onClick={count}><b>Like</b></button>
                </center>
            </div><br/>
            <br/>
            <div style={{ paddingTop: '50px' }}>
                <center><label htmlFor="Name"><b>Name :</b> </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>Output : {text}</p>
                <button onClick={reset}><b>Reset</b></button></center>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=t0Q2otsqC4Inpm'} controls />
                <div>
                    <p><b><u>Classic Cartoon : Tom and Jerry</u></b> </p>
                    <div>
            <p>I like to watch <b> {cartoon[index].cartoon}</b></p>
            <button onClick={change}><b>Change me</b></button>
        </div>
    
                </div>
            </div>
        </div>
    )
}
export default Body1
 