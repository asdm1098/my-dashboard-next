'use client'

import { Provider } from "react-redux"
import { store } from "."

interface Props {
    children: React.ReactNode,
}

//*Aqui se puede lanzar cualquier inicialización

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={ store }>
        {children}
    </Provider>
  )
}
