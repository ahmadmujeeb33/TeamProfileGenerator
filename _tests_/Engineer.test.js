const Engineer = require("../lib/Engineer").Engineer;
const name = new Engineer("demar",85,"demar@gmail","demar456");

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
            github = name.getGihub();
            expect(github === "demar456");
      });

      it("checking if getRole() is working", () => {
        role = name.getRole();

        expect(role === 'Engineer');
      });
    });
  
  });
  