import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ buttonData, closed }) {
  // Assuming each object in buttonData has only one key-value pair
  const buttonName = Object.values(buttonData)[0]; // Get the key (button name)
  const buttonIcon = Object.values(buttonData)[1]
const toRoute = Object.values(buttonData)[2]


  const baseNavLinkStyle = "flex p-4 w-full items-center space-x-4 block"
  const isActiveColor = baseNavLinkStyle + " bg-red-800 text-white"
  const inActiveColor = baseNavLinkStyle+" text-grey-500"

  return (
    <NavLink 
    to = {toRoute}
    className={({isActive, isPending})=>{
        return isActive ? isActiveColor : inActiveColor

    }}>
      {buttonIcon}
      {closed === true && (  <span >{buttonName}</span>)}
    
    </NavLink>
  );
}

export default NavItem;
