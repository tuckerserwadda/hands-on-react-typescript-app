import { screen, render, fireEvent } from "@testing-library/react";
import CounterPage from "./counter";

it('render counter component', ()=>{
    render(<CounterPage/>)
    expect(screen.getByText('counter')).toBeInTheDocument();
})

it('should increment counter', ()=>{
    render(<CounterPage/>)
    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByTestId('increment')
    fireEvent.click(incrementBtn)
    expect(counter).toHaveTextContent("1")
})


it('should decrement counter', ()=>{
    render(<CounterPage/>)
    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByTestId('increment')
    const decrementBtn = screen.getByTestId('decrement')
    fireEvent.click(incrementBtn)
    fireEvent.click(decrementBtn)
    expect(counter).toHaveTextContent("0")
})