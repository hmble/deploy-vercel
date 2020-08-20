+++
title =  "What is git rebase"
description = "Git rebase is usefule for editing commit history"
date = 2020-08-20
+++
**Git interactive rebase**  
  `git rebase -i <commit-hash>`

yaha par commit hash hame jo last commit edit karni hai uske parent ka hash rehta


  > Use this with caution as this changes history. Don't use in public branch 
  > It's better to use on local branch to change our commit history before pushing
  > to remote branch

Suppose for example agar hum `git rebase -i HEAD~3` use karte to hame
`HEAD~3..HEAD` k range ki commit aur all of its branch child (descendants)
change honge. i.e., If agar vo koi branch ho to. 

After this hamare editor me kuch aisa message open hoga

```
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



```
As given with message jab hum commands edit karte hai then file save hone k baad
rebase chalega. If rebase karte waqt koi conflict aata hai to hame vo solve
karna hota hai. Then `git rebase --continue` se rebase phirse continue hota hai.


Agar hame har rebase command k baare me jaan na hai to hum niche diye huye
source par jakr aur information padh sakte.


> TODO: I will write try to write a blog post about this. Joki in detail hogi.

[source](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)
