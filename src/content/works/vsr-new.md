---
title: "Template generator"
date: 2021-02-01
client: Public
services: "CLI development, Starter code, GHActions"
tech: "Rust, Typescript, Github, VSCode"
website: "https://github.com/jhonatanmacazana/vsr-new"
featuredImg: "/assets/works/vsr-new/preview.jpg"

images:
  - alt: "types"
    src: "/assets/works/vsr-new/types.jpg"

  - alt: "creation"
    src: "/assets/works/vsr-new/creation.jpg"

  - alt: "creation-2"
    src: "/assets/works/vsr-new/creation-2.jpg"
---

This is a cli tool for creating a specific type of project with a name. `vsr-new` can fetch the desired structure from another repo and create a new directory structure with the starting files for the specified project. The binaries compiled from Rust are working on Windows64, MacOS, and Linux.

<br />

I built `vsr-new` with Rust for learning more of the language and have a new tool available. It uses recursion and async requests to the Github API. This tool was uploaded into the **Crates** package manager of Rust if any developer wants to try it out from this option. Also, every new release triggers a workflow for compiling the Rust source code into binaries with Github Actions for then post them into the new release.

<br />

Due to the tedious installation process with the binaries themselves, I developed an alternative tool that can run with `npx` uploaded into the **npm registry** which is also multiplatform. It was written with Typescript and has compatibility with Javascript codes.

<br />

This project was a good entry point to the Rust language and a good practice of CI/CD with Github Actions and a nice review of the OS requirements when working with binaries.
