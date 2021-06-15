const Employees = require("../lib/Employees");
const name = new Employees("Denvor",75,"denvor@gmail");


describe("Manager", () => {
    describe("functionality", () => {
      it("checking if getEmail() is working", () => {
        email = name.getEmail();

        expect(email === "denvor@gmail");
      });
      it("checking if getName() is working", () => {
        nameOfPerson = name.getName();

        expect(nameOfPerson === "Denvor");
      });

      it("checking if getId() is working", () => {
        Id = name.getId();

        expect(Id === 75);
      });
      it("checking if getRole() is working", () => {
        role = name.getRole();

        expect(role === 'Employee');
      });
    });
  
  });