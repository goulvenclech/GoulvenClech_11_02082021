import React from 'react'
import renderer from 'react-test-renderer'
import HousingSection from "../components/index/housing-section"

describe("Given I am on the about page", () => {
    test("Then the housing section should be rendered", () => {
        const component = renderer.create(
            <HousingSection />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test("If I click on an accordion, displey its content", () => {
    })
})
