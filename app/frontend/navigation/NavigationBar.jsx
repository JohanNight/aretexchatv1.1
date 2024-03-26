import React from 'react'
import {Navbar,NavbarContent,NavbarItem} from "@nextui-org/react"
import MessageDropDown from './chats/MessageDropDown'


const NavigationBar = ({onMessageClick}) => {
  return (
    <div>
      <Navbar
      position='static'
      className='bg-blue-700'>
        <NavbarContent justify='end'>
            <NavbarItem className='flex items-center'>
                <MessageDropDown onMessageClick={onMessageClick}/>
            </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default NavigationBar
