---
title: "Github Injustice"
date: "2013-08-01T03:06:00+04:00"
path: "2013/08/01/github-injustice"
categories: ["git", "gitflow"]
description: "A historical note on Git branching models and the visibility of useful open-source forks."
---

<p>Is somebody noticed that sometimes some portion of injustice fired up when you surf around github?</p>

<p>Do you think that some <a href="https://github.com/petervanderdoes/gitflow">forks</a> of <a href="https://github.com/nvie/gitflow">popular repositories</a> deserves more attention and publicity? My example &lsquo;git-flow (AVH Edition)&rsquo; is much better software than original &lsquo;git-flow&rsquo; abandoned 2 years ago, with multiple bugfixes and features. And it`s almost impossible to google in a short time.</p>

<h2><strong>Here is full story&hellip;</strong></h2>

<p>Yesterday we tried to find the best model for Git Branching, we heard about &lsquo;git-flow&rsquo; but we tried <a href="https://www.google.com/search?q=git+branching+model">search</a> and first link which you get is [<a href="https://nvie.com/posts/a-successful-git-branching-model/">https://nvie.com/posts/a-successful-git-branching-model/</a>] which is direct idea that inspired git-flow.</p>

<p>So after 10 clicks we are on <a href="https://github.com/nvie/gitflow">gitflow GitHub</a> and trying to install it.</p>

<!-- more -->

<h2><strong>Problems:</strong></h2>

<ol>
<li><p>Default behavior in git-flow and in blog post is &lsquo;&ndash;no-ff&rsquo; which disables fast-forward merge and ensures that there will be commit about merge, which will help you to revert whole feature</p>

<p> <strong>Note:</strong> We found that this model not perfectly work for our team, every one here commits very often and when you try to finish feature our history looks like</p></li>
</ol>

<pre tabindex="0"><code>*   e7258a3 - fetcher.js implementation
|\
| * 0dc2743 - comoon!
| * cad3e15 - hope it help!
| * da2e414 - fixes fetcher.js
| * ae16e25 - added fetcher.js p.0
|/</code></pre>

<pre tabindex="0"><code>And we wanted it be just one commit in 'develop' branch.
</code></pre>

<ol>
<li>After some googling and looking into git-flow codebase we found <code>-S</code> parameter for <code>git flow feature finish -S fetcher.js</code> command, this command supposed to do <code>merge --squash</code> which perfectly fits our needs, but there is a bug <em>(or I think it`s a bug:) )</em> in <a href="https://github.com/nvie/gitflow">gitflow</a> which creates merge commit anyway. So history with <code>-S</code> looks like:</li>
</ol>

<pre tabindex="0"><code>*   e7258a3 - Merged feature fetcher.js to develop (merged branch anyway)
|\
* | 24bed22 - fetcher.js implementation (--squash and commit)
| * 0dc2743 - comoon!
| * cad3e15 - hope it help!
| * da2e414 - fixes fetcher.js
| * ae16e25 - added fetcher.js p.0
|/</code></pre>

<h2><strong>Solution:</strong></h2>

<p>So we decided to check whether there are some forks of gitflow with that fix fixed, and the most featured one is <a href="https://github.com/petervanderdoes/gitflow">gitflow (AVH Edition)</a> which as I think now should be default gitflow repository. Using this fork could help you had following clean history in git repo:</p>

<pre tabindex="0"><code>* e7258a3 - fetcher.js implementation (--squash and commit)
* da2e414 - previous feature</code></pre>

<p>Github is way to better than other opensource platforms in inspiring programmers to do opensource, it has social and competition aspects in it, but I think sometime it lacks some visibility of succesfull forks in shine of abandoned origins</p>
