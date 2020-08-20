+++
title =  "How to sign your work in git ?"
description = "It is important to sign your work in git for security"
date = 2020-08-20
+++
### How to sign your work in git ?

For sigining commits and tags we will use [`gnugpg`](https://www.gnupg.org/download/) 

> NOTE: This guide if for Gnupg version 2.1.17 or greater


1. First check if apne pas pahle koi gpg keys hai ya nahi.

  `$ gpg --list-secret-keys --keyid-format LONG`

2. Generate a new GPG key

  `$ gpg --full-generate-key`

3. Get gpg id here id is `3AA5C34371567BD2`
```
  $ gpg --list-secret-keys --keyid-format LONG
  /Users/hubot/.gnupg/secring.gpg
  ------------------------------------
  sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
  uid                          Hubot 
  ssb   4096R/42B317FD4BA89E7A 2016-03-10
```

4. copy gpg keyid to clipboard beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.

  `$gpg --armor --export 3AA5C34371567BD2 | xclip -sel clipboard`

 5. Add gpg key to your github account. [Reference](https://help.github.com/en/github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account)


[Source](https://help.github.com/en/github/authenticating-to-github/managing-commit-signature-verification) 
