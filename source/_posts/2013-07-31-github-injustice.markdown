---
layout: post
title: "Github Injustice"
date: 2013-08-01 03:06
comments: true
categories: git gitflow
---

Is somebody noticed that sometimes some portion of injustice fired up when you surf around github? 

Do you think that some [forks](https://github.com/petervanderdoes/gitflow) of [popular repositories](https://github.com/nvie/gitflow) deserves more attention and publicity? My example 'git-flow (AVH Edition)' is much better software than original 'git-flow' abandoned 2 years ago, with multiple bugfixes and features. And it`s almost impossible to google in a short time. 

##**Here is full story...**

Yesterday we tried to find the best model for Git Branching, we heard about 'git-flow' but we tried [search](https://www.google.com/search?q=git+branching+model) and first link which you get is [http://nvie.com/posts/a-successful-git-branching-model/] which is direct idea that inspired git-flow.

So after 10 clicks we are on [gitflow GitHub](https://github.com/nvie/gitflow) and trying to install it. 

<!-- more -->

##**Problems:**

1. Default behavior in git-flow and in blog post is '--no-ff' which disables fast-forward merge and ensures that there will be commit about merge, which will help you to revert whole feature
	
	**Note:** We found that this model not perfectly work for our team, every one here commits very often and when you try to finish feature our history looks like

{% codeblock Trashed history %}
*   e7258a3 - fetcher.js implementation
|\
| * 0dc2743 - comoon!
| * cad3e15 - hope it help!
| * da2e414 - fixes fetcher.js
| * ae16e25 - added fetcher.js p.0
|/
{% endcodeblock %}
	
	And we wanted it be just one commit in 'develop' branch.

2. After some googling and looking into git-flow codebase we found ``-S`` parameter for ``git flow feature finish -S fetcher.js`` command, this command supposed to do ``merge --squash`` which perfectly fits our needs, but there is a bug _(or I think it`s a bug:) )_ in [gitflow](https://github.com/nvie/gitflow) which creates merge commit anyway. So history with ``-S`` looks like:

{% codeblock Trashed history %}
*   e7258a3 - Merged feature fetcher.js to develop (merged branch anyway)
|\
* | 24bed22 - fetcher.js implementation (--squash and commit)
| * 0dc2743 - comoon!
| * cad3e15 - hope it help!
| * da2e414 - fixes fetcher.js
| * ae16e25 - added fetcher.js p.0
|/
{% endcodeblock %}


##**Solution:**
So we decided to check whether there are some forks of gitflow with that fix fixed, and the most featured one is [gitflow (AVH Edition)](https://github.com/petervanderdoes/gitflow) which as I think now should be default gitflow repository. Using this fork could help you had following clean history in git repo:

{% codeblock Trashed history %}
* e7258a3 - fetcher.js implementation (--squash and commit)
* da2e414 - previous feature
{% endcodeblock %}

Github is way to better than other opensource platforms in inspiring programmers to do opensource, it has social and competition aspects in it, but I think sometime it lacks some visibility of succesfull forks in shine of abandoned origins

	

