+++
title = "This Post was Deployed on Github Workflows"
date = 2020-02-24
[taxonomies]
categories = ["dev-ops"]
tags = ["ci-cd", "github-workflows"]
+++

Setting up automated integration and deployment flows can save incredible amounts of time throughout the development process -- **if** you can manage to get the flow working with reasonable amounts of time and effort.

## Action Plan

I want to be able to automatically build and deploy the latest code that is in the `master` branch to my *github-pages* website whenever a `pull request` is merged into that branch.

## Starting Point

Thankfully, the [Zola](https://getzola.com) folks are on top of this and have [documentation](https://www.getzola.org/documentation/deployment/overview/) for this exact purpose.  I've chosen to use Github Pages as my hosting service, so I have the option of using Github Flows or Travis CI.  I'm going with Github flows to keep it entirely in-house and hopefully remove a potential integration pain point.

## Attempt 0 Review

With the guide in the [Zola Documentaion](https://www.getzola.org/documentation/deployment/github-pages/), I think it is fairly straightforward if one reads carefully. After copying over the `yaml` file provided, I realized I had to change the `BUILD_DIR` variable to correctly model my own repository structure.  I think this is what went wrong the first time I tried to use this automated deployment workflow.

## Attempt 1
