import React from 'react'
import renderer from 'react-test-renderer'
import {render} from '@testing-library/react'
import HousingSection from "../components/index/housing-section"

describe("Given I am on the index page", () => {
    test("Then the housing section should be rendered", () => {
        const component = renderer.create(
            <HousingSection />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    }) 
    test("Then the backend should be called", () => {
    })
    test("If the backend return an error, display it", () => {
    })
    test("If the backend return valid data, render housing cards", () => {
    })
    test("If I click on an accordion, display its content", () => {
    })
})