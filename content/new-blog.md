+++
title = "How to use unix util rename to rename filenames"
description = "We can use rename to edit multiple filenames at once"
date = 2020-07-14
[taxonomies]
tags = ["vim", "rust"]
+++

Linux have a cool utility to rename filenames known as `rename`. Let's see how
we can rename bunch of files at once.

`rename <expression> <replacement> file`

In order to change extension of all our `.htm` files to `.html` we use rename as

`rename .htm .html *.htm`


```javascript
const java = require('java');
```
