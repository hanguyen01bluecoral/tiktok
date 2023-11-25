import { useContext } from 'react'
import {themeContext} from './App'

function Paragrap() {
    // console.log('theme: ' , theme)

    const theme = useContext(themeContext)
    return (
        <p className={theme}>
            Context provider a awy to pass data throuhgt th componnet tree withy you having to
            pass props doen many a way
        </p>
    )
}

export default Paragrap