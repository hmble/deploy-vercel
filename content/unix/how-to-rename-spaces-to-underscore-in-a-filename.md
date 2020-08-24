+++
title = "How to batch change spaces to underscore in filename ?"
date = 2020-08-24
+++

Today we will learn about perl version of `rename` command.

We can use perl version of `rename` command to batch change whitespace to any character we like.

First lets see how we can install perl version of rename.

### Install `rename` in Ubuntu

{% clicommand()  %}
$ sudo apt install rename
{% end %}


### Install `rename` in Centos or Fedora 

{% clicommand()  %}
$ sudo yum install prename
{% end %}


### Install `rename` in Arch Linux 

{% clicommand()  %}
$ sudo pacman -s perl-rename 
{% end %}

Now that we have rename package lets see how we can batch rename files.

### Remove whitespace from a filename

{% clicommand()  %}
$ rename 'y/ /-/g' *.txt
{% end %}
