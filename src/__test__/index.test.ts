import IndexPage from "../pages"
import HousingCards from "../components/index/housing-card"

describe("Given I am on the index page", () => {
    test("Then the page should load", () => {
        IndexPage()
        expect(document.querySelector("#root")).toBeTruthy()
    })
    test("Then the housing section should be rendered", () => {
        HousingCards()
        expect(document.querySelector("section")).toBeTruthy()
    })
})
