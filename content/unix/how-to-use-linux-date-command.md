+++
title = "How to use linux date command ?"
date = 2020-08-16
[extra]
tag = "unix"
rc = "unix/_index.md"
+++

I will start by saying this, "Linux is Awsome!!!"

Today, we will learn to use linux `date` command. As always I will suggest that
you make a habit to read man page first.

Just type `man date` and there you have your documentation.

We can use `date` command to variuos usecase as shown below.

1. ### Get datetime string for 4pm tomorrow

{% prism(lang='bash')  %}
$ date -d '4pm tomorrow'

Mon Aug 17 16:00:00 IST 2020
{% end %}

2. ### Get UTC timestring 

{% prism(lang='bash')  %}
$ date -d '4pm tomorrow' -Ihours

2020-08-17T16+05:30
{% end %}

