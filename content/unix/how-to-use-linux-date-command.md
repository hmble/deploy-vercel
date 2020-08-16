+++
title = "How to use linux date command ?"
date = 2020-08-16
[extra]
tag = "unix"
+++

I will start by saying this, "Linux is Awsome!!!"

Today, we will learn to use linux `date` command. Lets dive in

When used without options `date` command shows current locale time.

{% clicommand()  %}
$ date

Sun Aug 16 20:18:51 IST 2020
{% end %}

Lets explore various useful options of date command

## Get time describe by specific string. 

Date string option `-d` gives us more flexibiliy to operate on date by using
specific strings. We can specify human redable strings to `-d` option.

Here are some examples for human redable strings.

{% clicommand()  %}
$ date -d "now"

Sun Aug 16 20:31:15 IST 2020

$ date -d "last sunday"

Sun Aug  9 00:00:00 IST 2020

$ date -d 'tomorrow 4pm'

Mon Aug 17 17:00:00 IST 2020

$ date -d '+5 hours'

Mon Aug 17 01:52:38 IST 2020
{% end %}

{% note() %}
Do not use comma(,) after tomorrow, yesterday or now.
{% end %}

There are total 29 [date input formats](2) you can use to get desired date strings.

## Date formatting options

We can get custom formatted date strings with formatting options preceded by
`+` sign.

{% clicommand()  %}
$ date [OPTION]... [+FORMAT]
{% end %}

Here is an example

{% clicommand()  %}
$ date +%D%n%H:%M

08/16/20
21:14
{% end %}

There are many options to choose from mentioned in [full documentation][1]

For more information do check following resources.

## Resources
1. Man page
2. [Full documentation][3]


[1]: https://www.gnu.org/software/coreutils/manual/html_node/Time-conversion-specifiers.html#Time-conversion-specifiers
[2]: https://www.gnu.org/software/coreutils/manual/html_node/Date-input-formats.html#Date-input-formats
[3]: https://www.gnu.org/software/coreutils/date
