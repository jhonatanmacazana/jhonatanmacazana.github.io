import { render, screen } from "@testing-library/react";

import Home from "#root/pages/index";

describe("Home", () => {
  it("renders the name on the heading", () => {
    render(<Home works={[]} />);

    const heading = screen.getByRole("heading", {
      name: /Jhonatan/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
