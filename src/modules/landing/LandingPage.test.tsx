import { render, screen } from "@testing-library/react";

import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  it("renders the name on the heading", () => {
    render(<LandingPage works={[]} />);

    const heading = screen.getByRole("heading", {
      name: /Jhonatan/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
