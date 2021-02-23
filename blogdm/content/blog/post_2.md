+++
title = "Can you survive the death of your system?"
date = 2021-02-23
[taxonomies]
categories = ["sys-admin"]
tags = ["data-hoarding, operating-systems, configs"]
+++

Utilizing Linux as a desktop operating system is a double-edged sword.

While it provides freedom from the tyranny of Apple and Microsoft, it also opens up a significant attack vector: one's own ambition. Having distro-hopped from `Ubuntu` to `Pop!_OS` to `Manjaro (i3)` and back to `Pop!_OS` all within the span of a few months (what else would you do during quarantine?), I am quite familiar with the experience of breaking in a "new" computer and trying -- sometimes failing -- to set it up just as I had the last iteration. In fact, in the process of setting up the new system I would end up borking it and have to re-install from scratch.

Somewhere around the second hop and subsequent system-borks, I began to document the steps I took to configure my system. As someone who is ~fairly~ confident on the command line, this took the form of shell scripts -- `bash` in my case -- that automated the installation of various apps I wanted on my computer.

> This is most easily done on Linux, but Homebrew offers a decent solution for the MacOS users.
> *I don't know enough about Windows to recommend any particular strategy for automating app downloads.*

I believe that every person who develops habits and specific workflows while interacting with their system should have a similar method of installation and configuration. I can think of several reasons that make this effort worthwile. **This assumes that content & media is already being backed up.**

## Keep your desktop fresh and light

Sometimes I may want to try out a new language or application and after a few days, weeks, or months I decide that I don't want to pursue the interest any further. So I am left with *at least* one binary that I may or may not remember to remove from my system. After a year or two of this behavior, I can build up quite a large stash of configuration and binary files that I never use. Depending on my computer specs, this might take a significant amount of storage space that could affect my experience in the future. If re-configuring a machine is simply just running a script or two, I can restart from a fresh OS install without a fuss.

## Don't let malware slow you down

> While data security is important, this is mostly about OS user experience.

When malware is operating on a computer, one may notice that daily activities run slower. Without an automated system set-up process, it can be difficult to make the choice to abandon the current state of one's computer and restart from fresh install. When the content is backed up and the system configuration is automated, ensuring the optimal performance of your hardware is easy.

## Hakuna Matata

Borking your computer has never been less stressful! Bask in the freedom of knowing that you won't have to accidentally discover your customized user experience ever again.
