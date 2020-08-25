+++
title =  "What is git branch"
description = "Git branch is a useful to work different features at same time"
date = 2020-08-20
+++

# Git Branch

**Create a branch in git**
  shorter version
  `git checkout -b <new-branch>`

  another version
  `git branch <new-branch>`
  `git checkout <new-branch`

**Delete a local branch**
  `git branch -d <branch-name>`

**To discard changes and delete a branch**
  `git branch -D <branch-name>`

**To delete remote branch**
  `git push <remote> --delete <branch-name>`

  if we get an error of unable to match branch then do

  `git fetch -p`

**Change a git branch**
  `git checkout <branch-name>`

**Create a sub-branch from a branch**
  `git checkout -b <new-branch> <parent-branch>`

**Get parent of current branch**

```
git show-branch -a \
| grep '\*' \
| grep -v `git rev-parse --abbrev-ref HEAD` \
| head -n1 \
| sed 's/[^\[]*//' \
| awk 'match($0, /\[[a-zA-Z0-9\/-]+\]/) { print substr( $0, RSTART+1, RLENGTH-2 )}'
```

[Reference](https://stackoverflow.com/a/17843908/9892778)

**Show all branch**
  `git branch -a`
