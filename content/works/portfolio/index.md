---
title: 'My Portfolio'
date: 2021-02-01
client: Public
services: 'Portfolio, Markdown Blog, Static HTML, CI/CD, SEO'
tech: 'Typescript, React, NextJS, Github, HTML5, CSS3'
website: 'https://github.com/jhonatanmacazana/jhonatanmacazana.github.io'
featuredImg: '/android-chrome-512x512.png'
---

This project is intended to show some of the projects that I have done in the past and learn new concepts of production deployments while doing it.

The actual core of the project is in the development part. It's made with React and NextJS for static HTML generation. For the styling of the React components, it uses `styled-components` . The structure is based on a simple modularity scheme learned from [Lucas Chen][1]. It's made with Typescript and uses path aliases to avoid the `../../..` present when import packages inside on deeper components. The content of every work is parsed from Markdown files in a `content` dir, which makes it really easy to add and update every single work on this page.

The resources used are totally free, except for the Domain Name. It uses Github Actions for building and deploying the code into the `gh-pages` branch of the repo. This serves the content to my current domain on `jmacazana.com` with the `CNAME` file placed in the repo. 

In order to make the content available for Google or other search engines, it has followed the basic rules for SEO, including favicons and the sitemap auto-generation. All of these features are done with a `postExport` script before deploying the page.

There are still some changes to be done in the near future, but every change will be posted out here. Thanks for reading!

[1]: https://github.com/lucaschen
