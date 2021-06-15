const Manager = require("../lib/Manager").Manager;
const name = new Manager("Marcus",25,"marcus@gmail",45);

describe("Manager", () => {
    describe("functionality", () => {
      it("checking if getEmail() is working", () => {
        email = name.getEmail();

        expect(name === "marcus@gmail");
      });
      it("checking if getName() is working", () => {
        nameOfPerson = name.getName();

        expect(nameOfPerson === "Marcus");
      });

      it("checking if getId() is working", () => {
        Id = name.getId();

        expect(Id === 25);
      });

      it("checking if getRole() is working", () => {
        role = name.getRole();

        expect(role === 'Manager');
      });
    });
  
  });
  


