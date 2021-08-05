import IndexPage from "../pages"
import HousingSection from "../components/index/housing-section"

describe("Given I am on the index page", () => {
    test("Then the page should load", () => {
        IndexPage()
        expect(document.querySelector("#root")).toBeTruthy()
    })
    test("Then the housing section should be rendered", () => {
        HousingSection()
        expect(document.querySelector("section")).toBeTruthy()
    })
})
