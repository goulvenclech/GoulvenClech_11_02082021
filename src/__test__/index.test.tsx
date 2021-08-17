import React from 'react'
import renderer from 'react-test-renderer'
import {cleanup, fireEvent, render} from '@testing-library/react';
import HousingSection from "../components/index/housing-section"

describe("Given I am on the index page", () => {
    test("Then the housing section should be rendered", () => {
        const component = renderer.create(
            <HousingSection />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    }) 
    test("Second test", () => {
        const {queryByLabelText} = render(
            <HousingSection />
        )
        console.log(queryByLabelText(/cosy/i))
    })    
})
