'use client'

import {Notification } from '@/app/components/Notification'
import { createContext, useState } from 'react'


const defaultState = {
    open: false,
    status: null,
    msj: null
}

export const NotificationContext = createContext(
    
)

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(null)

    const showNotification = (state) => {
        if(state) setNotification(state)
        else setNotification(defaultState)

        setTimeout(() => {
            setNotification(defaultState)
        }, 3000)
    }   
        
    
  return (
    <NotificationContext.Provider value={{ notification, showNotification }}>
      {children}
      {notification.open && (
        <>
            <Notification statu={notification.status} message={notification.msj} />
        </>
      )}
    </NotificationContext.Provider>
  ) 

}

export default NotificationContext