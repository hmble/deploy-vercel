+++
title = "How to use rename unix utility"
description = "We can use rename to edit multiple filenames at once"
date = 2020-07-14
[taxonomies]
tags = ["cli"]
+++

Linux have a cool utility to rename filenames known as `rename`. Let's see how
we can rename bunch of files at once.


```bash
rename <expression> <replacement> file
```
In order to change extension of all our `.htm` files to `.html` we use rename as

```bash
rename .htm .html *.htm
```
## Note
For more information see man page
