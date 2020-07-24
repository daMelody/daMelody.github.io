+++
title = "Setting up a blog with Zola"
date = 2020-07-14
[taxonomies]
categories = ["coding"]
tags = ["meta-blog"]
+++

I had been thinking about starting a blog since over the past few months I've consumed so much content from other blogs. It's hard to say when one knows "enough" to be able to create content of any kind that others might feel is useful to them -- and the only way to know... is to start. That's what I'm doing here.

When I started to code, I wanted to use plain HTML/CSS/JS. It would've been fine, I think. But then I realized that I didn't want to have to style my posts in HTML by myself. I think that's a really easy way for me to lose focus on the actual content. A few weeks ago, I was reading a Rust blog (as one does), when I saw that it was "powered by Zola". The content was displayed well, so I thought I should take a look.

Turns out, Zola is static-site generator powered by Rust (yay!). Posts are written in a flavor of Markdown, which allows me to focus more easily on my writing. The engine should power post-organization schemes based on categories and tags that are placed at the top of each post. However, at the time of writing, I haven't quite figured it out.

> Look for the following categories: coding, investing/trading, music, literature

## Zola Review

Initializing my Zola blog was as simple as <code>zola init blog_name</code> and following the very informative documentation which showed me how to install a pre-built theme called Hyde (which I have very very minimally altered). One feature that I enjoy is the templating language, Tera, that Zola uses to construct the site structure. This is the feature that enables organization by categories and tags.
