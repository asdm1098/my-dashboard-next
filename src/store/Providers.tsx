'use client'

import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from 'react';
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
    children: React.ReactNode,
}

//*Aqui se puede lanzar cualquier inicialización

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch( setFavoritePokemons(favorites) )
  }, [])

  return (
    <Provider store={ store }>
        {children}
    </Provider>
  )
}
