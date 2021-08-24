import React from 'react'
import renderer from 'react-test-renderer'
import HousingSection from "../components/index/housing-section"

describe("Given I am on the 404 Not Found index page", () => {
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
})
