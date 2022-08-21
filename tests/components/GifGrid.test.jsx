import React from 'react'
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en <GifGrid/>', () => {

    const category = 'One Punch'

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category }/> )
        expect( screen.getByText( 'Cargando...' ))
        expect( screen.getByText( category ))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGif', () => {
        
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'abcc',
                title: 'Goku',
                url: 'https://localhost/dbz.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render( <GifGrid category={ category }/> )
        expect( screen.getAllByRole('img').length).toBe(2)

    });


});
