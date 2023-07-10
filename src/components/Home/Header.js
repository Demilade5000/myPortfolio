import React from 'react'
// import myBackground from '../image/portfolio background.avif'
// import myImage from"../images/demilade.png"
const Header = () => {
  return (
    <div>
      Header
        <div id='nameinfo'>
        <h5 style={{fontSize:'4px'}}>BAMKOLE OLUWADEMILADE</h5>
        
        {/* <br/> */}
        <h5 style={{fontSize:'3px'}}>Web Designer & Developer</h5>
        </div>

        <div id='pagelinks'>
        <ul>
            <li id='Home'><a href='Home'>Home</a></li>
            <li id='Projects'><a href='Projects'>Projects</a></li>
            <li id='Contact'><a href='Contact'>Contact</a></li>
        </ul>
        </div>
        {/* <img src={myImage} alt='' style={{width:'400px', height:'400px'}}></img> */}
    </div>
  )
}

export default Header
