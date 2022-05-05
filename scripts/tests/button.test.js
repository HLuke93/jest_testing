const buttonClick = require("../button")

beforeEach(() => {
    test("expects p content to change", () = > {
        buttonClick();
        expect(document.getElementById("par").innterHTML),toEqual("You Clicked")
    })
})
