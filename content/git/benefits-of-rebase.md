+++
title = "Benefits of rebase"
description = "We can use magic of rebase to clean commit history"
date = 2020-08-26

[extra]
tag = "git"
+++

Its a good habit to commit often but sometimes we commit with messages like 'now
works', 'ohh come on please work' and 'Finalllyyyyyyyy!!!!'. Well this messages
are not good for commit history as this doesnt give context on what this commit
does.

So before you push to remote we can squash all this commits in one commit and
write a new commit message explaining commit. The magic spell for this is
interactive rebase

{% clicommand()  %}
$ git rebase -i SHA
{% end %}

Here SHA is parent of commit from which we want to make rebase. Suppose we want
to make rebase from HEAD~2 commit then we will pass HEAD~3 as SHA for above
rebase command

After this git will open our default editor (vim or nano) with message like
below

{% prism(lang='textfile')  %}

pick f7f3f6d Change my name a bit
pick 310154e Update README formatting and add blame
pick a5f4a0d Add cat-file

# Rebase 710f0f8..a5f4a0d onto 710f0f8
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
{% end %}

And bang!!! now you have clean commit, push to remote.
