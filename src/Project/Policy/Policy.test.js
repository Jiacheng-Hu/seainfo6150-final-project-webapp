import React from "react";
import Policy from "./Policy";


describe("Policy tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Policy/>);
      expect(container).toMatchSnapshot();
    });
  });