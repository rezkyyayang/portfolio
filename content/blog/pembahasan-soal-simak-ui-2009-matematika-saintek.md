---
title: Pembahasan Soal SIMAK UI 2009 Matematika Saintek
description: SIMAK UI (Seleksi Masuk Universitas Indonesia) adalah jalur seleksi mandiri yang diselenggarakan langsung oleh Universitas Indonesia (UI) untuk penerimaan mahasiswa baru.
date: 2025-05-20
image: https://images.unsplash.com/photo-1655543274920-06de452d0d02?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 15
author:
  name: Rezky Yayang (@rezkyyayang)
  avatar:
    src: /profile.png
    alt: Rezky Yayang (@rezkyyayang)
---

## ✏️ Soal 1

Jika suku banyak
$ax^3 + 2x^2 + 5x + b$
dibagi $(x^2 - 1)$ menghasilkan sisa $6x + 5$, maka $a + 3b$ sama dengan ...
A. 15
B. 12
C. 10
D. 8
E. 5

### 🧠 Pembahasan

Diketahui bahwa sisa pembagian suatu polinomial $P(x)$ dengan $x^2 - 1 = (x-1)(x+1)$ adalah bentuk linear $6x + 5$.
Artinya:

```latex
$$
P(x) = (x^2 - 1) \cdot Q(x) + 6x + 5
$$
```

Untuk menemukan hubungan $a + 3b$, kita substitusikan $x = 1$ dan $x = -1$ ke dalam $P(x) = ax^3 + 2x^2 + 5x + b$:

1. Untuk $x = 1$:

$$
P(1) = a(1)^3 + 2(1)^2 + 5(1) + b = a + 2 + 5 + b = a + b + 7
$$

Karena sisa saat $x = 1$ adalah:

$$
6(1) + 5 = 11
\Rightarrow a + b + 7 = 11 \Rightarrow a + b = 4 \quad \text{(Persamaan 1)}
$$

2. Untuk $x = -1$:

$$
P(-1) = a(-1)^3 + 2(-1)^2 + 5(-1) + b = -a + 2 -5 + b = -a + b - 3
$$

Dan sisa saat $x = -1$:

$$
6(-1) + 5 = -6 + 5 = -1
\Rightarrow -a + b - 3 = -1 \Rightarrow -a + b = 2 \quad \text{(Persamaan 2)}
$$

Dari Persamaan (1):

$$
a + b = 4
$$

Dari Persamaan (2):

$$
-a + b = 2
$$

Jumlahkan kedua persamaan:

```markdown
$$
(a + b) + (-a + b) = 4 + 2 \Rightarrow 2b = 6 \Rightarrow b = 3
\Rightarrow a = 1 \quad \text{(dari a + b = 4)}
$$
```

Jadi:

$$
a + 3b = 1 + 3(3) = 10
$$

> **Jawaban: (C) 10**

---

## ✏️ Soal 2

Misalkan $x_1$ dan $x_2$ bilangan bulat yang merupakan akar-akar persamaan kuadrat:

$$
x^2 - (2k + 4)x + (3k + 4) = 0
$$

Jika $x_1, k, x_2$ merupakan tiga suku pertama dari suatu **deret geometri**, maka rumus suku ke-$n$ dari deret tersebut adalah ...
A. $1 - (-1)^n$
B. $1 + (-1)^n$
C. $(-1)^n$
D. $2(-1)^n$
E. $-1$

<details>
<summary>🧠 Lihat Pembahasan</summary>

Diketahui bahwa akar-akar persamaan kuadrat $x_1$ dan $x_2$, serta $k$, membentuk deret geometri:

$$
x_1, k, x_2
$$

Maka berlaku:

$$
k^2 = x_1 \cdot x_2
$$

Gunakan rumus jumlah dan hasil akar-akar dari persamaan kuadrat:

* Jumlah akar:

  $$
  x_1 + x_2 = 2k + 4
  $$

* Hasil kali akar:

  $$
  x_1 x_2 = 3k + 4
  $$

Substitusi ke persamaan deret geometri:

$$
k^2 = 3k + 4
\Rightarrow k^2 - 3k - 4 = 0
$$

Faktorkan:

$$
(k - 4)(k + 1) = 0 \Rightarrow k = 4 \text{ atau } k = -1
$$

Uji dua nilai ini:

---

**Coba $k = 4$:**

* Jumlah akar: $x_1 + x_2 = 2(4) + 4 = 12$
* Hasil kali akar: $x_1 x_2 = 3(4) + 4 = 16$

Maka $x_1$ dan $x_2$ adalah akar dari:

$$
x^2 - 12x + 16 = 0 \Rightarrow x = 2, 8
$$

Jadi, deretnya: $2, 4, 8$, rasio: $2$ → cocok.

---

**Coba $k = -1$:**

* Jumlah akar: $x_1 + x_2 = 2(-1) + 4 = 2$
* Hasil kali akar: $x_1 x_2 = 3(-1) + 4 = 1$

Maka $x_1$ dan $x_2$ adalah akar dari:

$$
x^2 - 2x + 1 = 0 \Rightarrow x = 1, 1
$$

Jadi, deretnya: $1, -1, 1$

Ini adalah deret geometri dengan rasio $-1$

Rumus umum suku ke-$n$ dari deret ini adalah:

$$
U_n = (-1)^n
$$

> **Jawaban: (C) $(-1)^n$**

</details>