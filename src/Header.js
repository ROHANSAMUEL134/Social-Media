import React, { useContext } from 'react'
import { FaMobileAlt, FaTabletAlt, FaLaptop } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({title}) => {
  const {width} = useWindowSize()
  return (
    <header className="Header">
        <h1>{title}</h1>
        {width < 768 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop /> }
    </header>
  )
}

export default Header