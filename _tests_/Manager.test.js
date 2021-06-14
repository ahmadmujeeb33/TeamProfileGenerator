const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("functionality", () => {
      it("checking if getEmail() is working", () => {
        const name = new Manager("Marcus",25,"marcus@gmail",45);

        expect(name.getEmail().toEqual("marcus@gmail"));
      });
    });
  
  });
  


