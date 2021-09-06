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
})
