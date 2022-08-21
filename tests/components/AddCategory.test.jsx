import { fireEvent, render, screen } from "@testing-library/react";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });

    expect( input.value).toBe("Saitama" );
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    // ???
    const onNewCategory = jest.fn() // jest.fn es una simulacion de funcion - un mock


    render( <AddCategory onNewCategory={ onNewCategory } /> );
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input( input, { target: { value: inputValue } }); // dispara evento para escribir en input
    fireEvent.submit( form ) // dispara evento para enviar formulario
    expect( input.value ).toBe('') // evalua si luego de enviar el submit de form el input esté vacio

    expect( onNewCategory ).toHaveBeenCalled()
    expect( onNewCategory ).toHaveBeenCalledTimes(1)
    expect( onNewCategory ).toHaveBeenLastCalledWith( inputValue )
  });

  test('No debe de llamar el onNewCategory si el input esta vacio', () => {
    
    const onNewCategory = jest.fn()
    render( <AddCategory onNewCategory={ onNewCategory } /> );
    const form = screen.getByRole("form");
    fireEvent.submit( form )

    expect( onNewCategory ).not.toHaveBeenCalled()
  })
  
});
