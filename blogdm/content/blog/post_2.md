+++
title = "Can you survive the death of your system?"
date = 2021-01-17
[taxonomies]
categories = ["sys-admin"]
tags = ["data-hoarding, operating-systems, configs"]
+++

Utilizing Linux as a desktop operating system is a double-edged sword.

While it provides freedom from the tyranny of Apple and Microsoft, it also opens up a significant attack vector: one's own ambition. Having distro-hopped from `Ubuntu` to `Pop!_OS` to `Manjaro (i3)` and back to `Pop!_OS` all within the span of a few months (what else would you do during quarantine?), I am quite familiar with the experience of breaking in a "new" computer and trying -- sometimes failing -- to set it up just as I had the last iteration. In fact, in the process of setting up the new system I would end up borking it and have to re-install from scratch.

Somewhere around the second hop and subsequent system-borks, I began to document the steps I took to configure my system. As someone who is ~fairly~ confident on the command line, this took the form of shell scripts -- `bash` in my case -- that automated the installation of various apps I wanted on my computer.

> This is most easily done on Linux, but Homebrew offers a decent solution for the MacOS users.
> *I don't know enough about Windows to recommend any particular strategy for automating app downloads.*

I believe that every person who develops habits and specific workflows while interacting with their system should have a similar method of installation and configuration. I can think of several reasons that make this effort worthwile.
