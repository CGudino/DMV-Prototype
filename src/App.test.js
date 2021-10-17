import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("changeLocation", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Michael", "George"], ["Pierre Edouard", "Edmond", "Michael"], ["Anas", "Edmond", "Edmond"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.changeLocation()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("changeNumber", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Edmond", "Michael"], ["George", "Michael", "Anas"], ["Pierre Edouard", "Anas", "Michael"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.changeNumber()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Anas", "Michael"], ["Edmond", "Jean-Philippe", "Michael"], ["Edmond", "Michael", "Michael"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
