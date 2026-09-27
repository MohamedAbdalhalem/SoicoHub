import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function useSwitchMode() {
  const [darkMode, setDarkMode] = useState<'darkMode' | 'lightMode'>('lightMode')
  
  const switchMode = function () {
    if (darkMode === "darkMode") {
      setDarkMode("lightMode")
      document.documentElement.classList.remove('dark')
      Cookies.set('mode','light',{secure : true , expires : 7})
    } else {
      setDarkMode("darkMode")
      document.documentElement.classList.add('dark')
       Cookies.set('mode','dark',{secure : true , expires : 7})
    }
  }

  useEffect(()=>{
    if(Cookies.get('mode') === 'dark'){
      setDarkMode("darkMode")
      document.documentElement.classList.add('dark')
    }
  },[])

  return {
    switchMode,
    darkMode
  }
}
