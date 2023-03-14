
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import {setTheme}  from '../redux/themeSlice'

const Navbar = () => {
    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()
    console.log(theme)

  return (
      <nav className={`${theme === 'light' ? 'bg-white' : 'bg-stone-800'} flex justify-between items-center p-10`} >
          <h1 className='text-xl font-bold text-stone-800 bg-stone-100 py-2 px-4 rounded '>RickAndHevar</h1>
          <Button text={theme === 'dark' ? 'light' : 'dark'} handleClick={()=>dispatch(setTheme())}/>
      </nav>
  )
}

    export default Navbar; 