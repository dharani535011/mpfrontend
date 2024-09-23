import React, { useContext } from 'react'
import { Othercontexts } from './Otherprovider'

const Loader = () => {
    const {loaders}=useContext(Othercontexts)
    const [loader,setloader]=loaders
  return (
    <div style={{display:loader?"flex":"none"}}>
        <div className='popup'></div>
    <div className="spinner loader"></div>

    </div>
  )
}

export default Loader