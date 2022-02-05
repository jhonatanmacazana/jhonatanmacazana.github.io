import { render, screen } from "@testing-library/react";
import { FaGithub } from "react-icons/fa";

import Footer from "./Footer";

describe("Footer", () => {
  it("must render 1 logo and 0 social links", () => {
    render(<Footer socials={[]} />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(1);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(1);
    expect(images[0]).toHaveAttribute("alt");
  });

  it("must render 1 logo and 1 social link", () => {
    render(<Footer socials={[{ alt: "Github", href: "#", icon: <FaGithub /> }]} />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });
});
