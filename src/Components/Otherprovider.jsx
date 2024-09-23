import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Othercontexts=createContext()

const Otherprovider = ({children}) => {
 const [loader,setloader]= useState(false)
 const [user,setuser]= useState({})
 const [userdet,setuserdet]= useState({})
 const [auth,setauth]= useState(false)
 const [fee,setfee]= useState([])
 const [open, setopen] = useState(false)
 const navigate=useNavigate()
 
 const fetchdata = async () => {
  try {
    setloader(true)
    const res = await axios.post("https://mpbackend-2udh.onrender.com/users/checkauthen", {}, { withCredentials: true });

    if (res.data.message === "on") {
      setuser(res.data.data)
      setauth(true)
      navigate("/")
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  } finally {
    setloader(false)
  }
};
useEffect(()=>{
       fetchdata()
},[auth])
// console.log(user.fees)

  return (
    <Othercontexts.Provider value={{userdets:[userdet,setuserdet],opens:[open,setopen],fees:[fee,setfee],auths:[auth,setauth],loaders:[loader,setloader],users:[user,setuser]}}>
       {children}
    </Othercontexts.Provider>
  )
}

export default Otherprovider