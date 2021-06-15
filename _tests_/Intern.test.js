const Intern = require("../lib/Intern").Intern;
const name = new Intern("Lemar",55,"lemar@gmail","uoft");

describe("Manager", () => {
    describe("functionality", () => {
      it("checking if getEmail() is working", () => {
        email = name.getEmail();

        expect(email === "lemar@gmail");
      });
      it("checking if getName() is working", () => {
        nameOfPerson = name.getName();

        expect(nameOfPerson === "Lemar");
      });

      it("checking if getId() is working", () => {
        Id = name.getId();

        expect(Id === 55);
      });

      it("checking if getSchool() is working", () => {
            school = name.getSchool();
            expect(school === 'uoft');
      });

      it("checking if getRole() is working", () => {
        role = name.getRole();

        expect(role === 'Intern');
      });
    });
  
  });
  