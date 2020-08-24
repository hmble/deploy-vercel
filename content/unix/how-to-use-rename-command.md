+++
title = "How to use rename unix utility"
description = "We can use rename to edit multiple filenames at once"
date = 2020-07-14

[extra]
tag = "unix"
+++

Linux have a cool utility to rename filenames known as `rename`. Let's see how
we can rename bunch of files at once.


{% clicommand() %}
$ rename <expression> <replacement> file
{% end %}
In order to change extension of all our `.htm` files to `.html` we use rename as

{% prism(lang='bash')  %}
$ rename .htm .html *.htm
{% end %}



