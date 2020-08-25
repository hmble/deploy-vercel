+++
title =  "How can I have collpase markdown on Github."
description = "There is less known collapse feature of markdown. In this blog we are going to learn about collapse feature."
date = 2020-08-20
+++

[Reference](https://gist.github.com/pierrejoubert73/902cc94d79424356a8d20be2b382e1ab)

```
<details>
<summary> Click Me </summary>

## This is inside block.

</details>
```

<details>
<summary> Click Me </summary>

## This is inside block.

</details>


**Few points to note here.**
1. Ye work karne k liye `</summary>` k baad ek empty line chahiye.
2. If agar markdown me ek se jyada collapsed field hai to we should note k
   `</details>` k baad bhi ek empty line ho.
