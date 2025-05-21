---
title: Soal dan Pembahasan SIMAK UI 2009 Matematika Saintek (Kode 914)
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

<details>
<summary> 🗒️ Lihat Daftar Isi </summary>

| **No** | **Judul**                                                                 |
|--------|---------------------------------------------------------------------------|
| 1      | [Soal 1: Suku Banyak / Polinomial](#✏️-soal-1)                            |
| 2      | [Soal 2: Deret Geometri dan Akar Persamaan Kuadrat](#✏️-soal-2)           |
| 3      | [Soal 3: Akar Persamaan Kuadrat](#✏️-soal-3)                              |
| 4      | [Soal 4: Pertidaksamaan Akar Kuadrat](#✏️-soal-4)                         |
| 5      | [Soal 5: Operasi Vektor](#✏️-soal-5)                                      |
| 6      | [Soal 6: Sistem Persamaan Trigonometri](#✏️-soal-6)                       |
| 7      | [Soal 7: Barisan Geometri dan Persamaan Kuadrat](#✏️-soal-7)              |
| 8      | [Soal 8: Fungsi Trigonometri](#✏️-soal-8)                                 |

</details>

## ✏️ Soal 1

Jika suku banyak
$$
ax^3 + 2x^2 + 5x + b
$$
dibagi \\( (x^2 - 1) \\) menghasilkan sisa \\( 6x + 5 \\), maka \\( a + 3b \\) sama dengan ...

- [ ] A. 15  
- [ ] B. 12  
- [ ] C. 10  
- [ ] D. 8  
- [ ] E. 5  

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **C. 10**.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

Diketahui bahwa sisa pembagian suatu polinomial \\( P(x) \\) dengan \\( x^2 - 1 = (x-1)(x+1) \\) adalah bentuk linear \\( 6x + 5 \\).
Artinya:

$$
P(x) = (x^2 - 1) \cdot Q(x) + 6x + 5
$$

Untuk menemukan hubungan  \\( a + 3b \\), kita substitusikan \\( x = 1 \\) dan \\( x = -1 \\) ke dalam \\( P(x) = ax^3 + 2x^2 + 5x + b \\):

1. Untuk \\( x = 1 \\):

$$
P(1) = a(1)^3 + 2(1)^2 + 5(1) + b = a + 2 + 5 + b = a + b + 7
$$

Karena sisa saat \\( x = 1 \\) adalah:

$$
6(1) + 5 = 11
\Rightarrow a + b + 7 = 11 \Rightarrow a + b = 4 \quad \text{(Persamaan 1)}
$$

2. Untuk \\( x = -1 \\):

$$
P(-1) = a(-1)^3 + 2(-1)^2 + 5(-1) + b = -a + 2 -5 + b = -a + b - 3
$$

Dan sisa saat \\( x = -1 \\):

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

$$
(a + b) + (-a + b) = 4 + 2 \Rightarrow 2b = 6 \Rightarrow b = 3
\Rightarrow a = 1 \quad \text{(dari a + b = 4)}
$$

Jadi:

$$
a + 3b = 1 + 3(3) = 10
$$

> **Jawaban: (C) 10**

</details>
---

## ✏️ Soal 2

Misalkan \\( x_1 \\) dan \\( x_2 \\) bilangan bulat yang merupakan akar-akar persamaan kuadrat:

$$
x^2 - (2k + 4)x + (3k + 4) = 0
$$

Jika \\( x_1, k, x_2 \\) merupakan tiga suku pertama dari suatu **deret geometri**, maka rumus suku ke-\\( n \\) dari deret tersebut adalah ...

- [ ] A. \\( 1 - (-1)^n \\)
- [ ] B. \\( 1 + (-1)^n \\)
- [ ] C. \\( (-1)^n \\)
- [ ] D. \\( 2(-1)^n \\)
- [ ] E. \\( -1 \\)

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **C. 10**.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

Diketahui bahwa akar-akar persamaan kuadrat \\( x_1 \\) dan \\( x_2 \\), serta \\( k \\), membentuk deret geometri:

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

**Coba \\( k = 4 \\):**

* Jumlah akar: \\( x_1 + x_2 = 2(4) + 4 = 12 \\)
* Hasil kali akar: \\( x_1 x_2 = 3(4) + 4 = 16 \\)

Maka \\( x_1 \\) dan \\( x_2 \\) adalah akar dari:

$$
x^2 - 12x + 16 = 0 \Rightarrow x = 2, 8
$$

Jadi, deretnya: \\( 2, 4, 8 \\), rasio: \\( 2 \\) → cocok.

---

**Coba \\( k = -1 \\):**

* Jumlah akar: \\( x_1 + x_2 = 2(-1) + 4 = 2 \\)
* Hasil kali akar: \\( x_1 x_2 = 3(-1) + 4 = 1 \\)

Maka \\( x_1 \\) dan \\( x_2 \\) adalah akar dari:

$$
x^2 - 2x + 1 = 0 \Rightarrow x = 1, 1
$$

Jadi, deretnya: \\( 1, -1, 1 \\)

Ini adalah deret geometri dengan rasio \\( -1 \\)

Rumus umum suku ke-\\( n \\) dari deret ini adalah:

$$
U_n = (-1)^n
$$

> **Jawaban: (C) \\( (-1)^n \\)**

</details>
---

## ✏️ Soal 3
Diketahui persamaan kuadrat
$$
x^2 + px - p^2 + 7p - 6 = 0.
$$
Nilai \\( p \\) agar persamaan kuadrat tersebut mempunyai dua akar berlawanan tanda adalah ...

- [ ] A. \\( 1 \frac{1}{2} < p < 2 \\) atau \\( p > 3 \\) atau \\( p < 1 \\)
- [ ] B. \\( 1 < p < 1 \frac{1}{2} \\)
- [ ] C. \\( 1 \frac{1}{2} < p < 3 \\)
- [ ] D. \\( p < 1 \\) atau \\( p > 6 \\)
- [ ] E. \\( p < 1 \frac{1}{2} \\) atau \\( p > 2 \\)

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **D. \\( p < 1 \\) atau \\( p > 6 \\)**.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Syarat Akar Berlawanan Tanda
Untuk suatu persamaan kuadrat \\( ax^2 + bx + c = 0 \\), dua akarnya berlawanan tanda jika dan hanya jika hasil kali kedua akarnya negatif. Dalam persamaan kuadrat umum, hasil kali akar-akar diberikan oleh:
$$
\text{Hasil kali akar-akar} = \frac{c}{a}.
$$

Pada persamaan \\( x^2 + px - p^2 + 7p - 6 = 0 \\), kita memiliki:
- Koefisien \\( a = 1 \\),
- Koefisien \\( b = p \\),
- Konstanta \\( c = -p^2 + 7p - 6 \\).

Oleh karena itu, hasil kali akar-akarnya adalah:
$$
\text{Hasil kali akar-akar} = \frac{c}{a} = -p^2 + 7p - 6.
$$

Agar akar-akarnya berlawanan tanda, haruslah:
$$
-p^2 + 7p - 6 < 0.
$$

#### Langkah 2: Selesaikan Pertidaksamaan \\( -p^2 + 7p - 6 < 0 \\)
Kita selesaikan pertidaksamaan \\( -p^2 + 7p - 6 < 0 \\). Pertama, ubah bentuknya menjadi:
$$
p^2 - 7p + 6 > 0.
$$

##### Langkah 2.1: Faktorkan Persamaan Kuadrat
Faktorkan \\( p^2 - 7p + 6 = 0 \\):
$$
p^2 - 7p + 6 = (p - 1)(p - 6).
$$

Jadi, persamaan \\( p^2 - 7p + 6 = 0 \\) memiliki akar-akar:
$$
p = 1 \quad \text{dan} \quad p = 6.
$$

##### Langkah 2.2: Gambarkan Grafik atau Gunakan Uji Interval
Persamaan \\( p^2 - 7p + 6 > 0 \\) memiliki grafik parabola yang membuka ke atas (karena koefisien \\( p^2 \\) positif). Akar-akarnya adalah \\( p = 1 \\) dan \\( p = 6 \\). Untuk menentukan interval di mana \\( p^2 - 7p + 6 > 0 \\), uji nilai \\( p \\) di setiap interval yang dibentuk oleh akar-akar tersebut, yaitu:
- Interval \\( (-\infty, 1) \\),
- Interval \\( (1, 6) \\),
- Interval \\( (6, \infty) \\).

**Uji Interval:**
1. **Interval \\( (-\infty, 1) \\)**: Pilih \\( p = 0 \\),
   $$
   p^2 - 7p + 6 = 0^2 - 7(0) + 6 = 6 > 0.
   $$

2. **Interval \\( (1, 6) \\)**: Pilih \\( p = 3 \\),
   $$
   p^2 - 7p + 6 = 3^2 - 7(3) + 6 = 9 - 21 + 6 = -6 < 0.
   $$

3. **Interval \\( (6, \infty) \\)**: Pilih \\( p = 7 \\),
   $$
   p^2 - 7p + 6 = 7^2 - 7(7) + 6 = 49 - 49 + 6 = 6 > 0.
   $$

Dari uji interval, kita simpulkan bahwa \\( p^2 - 7p + 6 > 0 \\) untuk:
$$
p \in (-\infty, 1) \cup (6, \infty).
$$

#### Langkah 3: Kesimpulan
Agar persamaan kuadrat \\( x^2 + px - p^2 + 7p - 6 = 0 \\) memiliki dua akar berlawanan tanda, nilai \\( p \\) harus memenuhi:
$$
p < 1 \quad \text{atau} \quad p > 6.
$$

> **Jawaban: (D) \\( p < 1 \\) atau \\( p > 6 \\)**

</details>


---

## ✏️ Soal 4

Himpunan penyelesaian pertidaksamaan
$$
\sqrt{x^2 - 1} \leq \sqrt{3x^2 + x - 2}
$$
adalah ...

- [ ] A. \\( \{x \mid x \leq -1 \text{ atau } x \geq \frac{1}{2}\} \\)  
- [ ] B. \\( \{x \mid x \geq 1 \text{ atau } x \leq -1\} \\)    
- [ ] C. \\( \{x \mid x \leq -1\} \\)    
- [ ] D. \\( \{x \mid -1 \leq x \leq 1\} \\)   
- [ ] E. \\( \{x \mid \frac{1}{2} \leq x \leq 1\} \\)

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **A. \\( \{x \mid x \leq -1 \text{ atau } x \geq \frac{1}{2}\} \\)**.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Syarat Validitas Akar Kuadrat
Pertidaksamaan \\( \sqrt{x^2 - 1} \leq \sqrt{3x^2 + x - 2} \\) hanya valid jika kedua ruas akar kuadrat memiliki nilai yang tidak negatif. Oleh karena itu, kita harus memenuhi:
1. \\( x^2 - 1 \geq 0 \\),
2. \\( 3x^2 + x - 2 \geq 0 \\).

##### (1) Solusi untuk \\( x^2 - 1 \geq 0 \\):
$$
x^2 - 1 = (x - 1)(x + 1) \geq 0.
$$
Dari faktorisasi ini, kita dapatkan:
$$
x \leq -1 \quad \text{atau} \quad x \geq 1.
$$

##### (2) Solusi untuk \\( 3x^2 + x - 2 \geq 0 \\):
Faktorkan \\( 3x^2 + x - 2 = 0 \\):
$$
3x^2 + x - 2 = (3x - 2)(x + 1) \geq 0.
$$
Dari faktorisasi ini, kita dapatkan:
$$
x \leq -1 \quad \text{atau} \quad x \geq \frac{2}{3}.
$$

#### Langkah 2: Gabungan Syarat Validitas
Kedua syarat harus dipenuhi secara bersamaan:
- Dari \\( x^2 - 1 \geq 0\\), kita punya \\( x \leq -1 \\) atau \\( x \geq 1 \\).
- Dari \\( 3x^2 + x - 2 \geq 0 \\), kita punya \\( x \leq -1 \\) atau \\( x \geq \frac{2}{3} \\).

Gabungkan kedua interval:
$$
x \leq -1 \quad \text{atau} \quad x \geq 1.
$$

#### Langkah 3: Selesaikan Pertidaksamaan Utama
Sekarang, kita selesaikan pertidaksamaan utama:
$$
\sqrt{x^2 - 1} \leq \sqrt{3x^2 + x - 2}.
$$
Kuadratkan kedua ruas (amati bahwa kedua ruas non-negatif):
$$
x^2 - 1 \leq 3x^2 + x - 2.
$$
Sederhanakan:
$$
x^2 - 1 \leq 3x^2 + x - 2 \implies -2x^2 - x + 1 \leq 0 \implies 2x^2 + x - 1 \geq 0.
$$

##### Faktorkan \\( 2x^2 + x - 1 = 0 \\):
$$
2x^2 + x - 1 = (2x - 1)(x + 1) \geq 0.
$$
Dari faktorisasi ini, kita dapatkan:
$$
x \leq -1 \quad \text{atau} \quad x \geq \frac{1}{2}.
$$

#### Langkah 4: Gabungkan dengan Syarat Validitas
Dari langkah 2, syarat validitas adalah:
$$
x \leq -1 \quad \text{atau} \quad x \geq 1.
$$
Dari langkah 3, solusi pertidaksamaan adalah:
$$
x \leq -1 \quad \text{atau} \quad x \geq \frac{1}{2}.
$$

Gabungkan kedua hasil:
$$
x \leq -1 \quad \text{atau} \quad x \geq 1.
$$

> **Jawaban: (A) \\( \{x \mid x \leq -1 \text{ atau } x \geq \frac{1}{2}\} \\)**

</details>


## ✏️ Soal 5

Jika diketahui koordinat titik \\( A(3, 1, 2) \\), \\( B(4, 3, 0) \\), dan \\( C(1, 2, 5) \\), maka luas segitiga \\( ABC \\) sama dengan ...

- [ ] A. \\( \sqrt{14} \\)
- [ ] B. \\( \frac{3}{2}\sqrt{10} \\) 
- [ ] C. \\( 3\sqrt{10} \\)
- [ ] D. \\( 2\sqrt{26} \\)
- [ ] E. \\( \frac{1}{2}\sqrt{114} \\)

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **B. \\( \frac{3}{2}\sqrt{10} \\) **.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Vektor Sisi Segitiga
Titik \\(  A(3, 1, 2) \\), \\( B(4, 3, 0) \\), dan \\( C(1, 2, 5) \\). Vektor sisi segitiga adalah:
- Vektor \\( \overrightarrow{AB} = B - A = (4 - 3, 3 - 1, 0 - 2) = (1, 2, -2) \\),
- Vektor \\( \overrightarrow{AC} = C - A = (1 - 3, 2 - 1, 5 - 2) = (-2, 1, 3) \\).

#### Langkah 2: Perhitungan Luas Segitiga
Luas segitiga \\( ABC \\) diberikan oleh:
$$
\text{Luas} = \frac{1}{2} \|\overrightarrow{AB} \times \overrightarrow{AC}\|,
$$
di mana \\( \overrightarrow{AB} \times \overrightarrow{AC} \\) adalah perkalian silang vektor \\( \overrightarrow{AB} \\) dan \\( \overrightarrow{AC} \\).

##### Perkalian Silang \\( \overrightarrow{AB} \times \overrightarrow{AC} \\):
$$
\overrightarrow{AB} = (1, 2, -2), \quad \overrightarrow{AC} = (-2, 1, 3).
$$
Perkalian silang:
$$
\overrightarrow{AB} \times \overrightarrow{AC} = 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
1 & 2 & -2 \\
-2 & 1 & 3
\end{vmatrix}
= \mathbf{i} \begin{vmatrix} 2 & -2 \\ 1 & 3 \end{vmatrix}
- \mathbf{j} \begin{vmatrix} 1 & -2 \\ -2 & 3 \end{vmatrix}
+ \mathbf{k} \begin{vmatrix} 1 & 2 \\ -2 & 1 \end{vmatrix}.
$$

Hitung minor-masing:
1. \\( \begin{vmatrix} 2 & -2 \\ 1 & 3 \end{vmatrix} = (2)(3) - (-2)(1) = 6 + 2 = 8 \\),
2. \\( \begin{vmatrix} 1 & -2 \\ -2 & 3 \end{vmatrix} = (1)(3) - (-2)(-2) = 3 - 4 = -1 \\),
3. \\( \begin{vmatrix} 1 & 2 \\ -2 & 1 \end{vmatrix} = (1)(1) - (2)(-2) = 1 + 4 = 5 \\).

Sehingga:
$$
\overrightarrow{AB} \times \overrightarrow{AC} = 8\mathbf{i} - (-1)\mathbf{j} + 5\mathbf{k} = (8, 1, 5).
$$

##### Norma Vektor $\overrightarrow{AB} \times \overrightarrow{AC}$:
$$
\|\overrightarrow{AB} \times \overrightarrow{AC}\| = \sqrt{8^2 + 1^2 + 5^2} = \sqrt{64 + 1 + 25} = \sqrt{90} = 3\sqrt{10}.
$$

##### Luas Segitiga:
$$
\text{Luas} = \frac{1}{2} \|\overrightarrow{AB} \times \overrightarrow{AC}\| = \frac{1}{2} \cdot 3\sqrt{10} = \frac{3}{2}\sqrt{10}.
$$

> **Jawaban: (B) \\( \frac{3}{2}\sqrt{10} \\)**

</details>

## ✏️ Soal 6

Jika sudut \\(  A \\) dan \\(  B \\) memenuhi sistem persamaan
$$
\begin{aligned}
2\tan A + \tan B &= 4, \\
\tan A - 3\tan B &= -\frac{17}{2},
\end{aligned}
$$
maka \\( \tan(2A + B) \\) sama dengan ...

- [ ] A. \\( -\frac{13}{9} \\)
- [ ] B. \\( -\frac{11}{9} \\)
- [ ] C. \\( -1 \\)
- [ ] D. \\( -\frac{7}{9} \\)
- [ ] E. \\( -\frac{5}{9} \\)

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **A. \\( -\frac{13}{9} \\) **.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Selesaikan Sistem Persamaan
Diberikan sistem persamaan:
$$
\begin{aligned}
2\tan A + \tan B &= 4, \quad \text{(1)} \\
\tan A - 3\tan B &= -\frac{17}{2}. \quad \text{(2)}
\end{aligned}
$$

Misalkan \\( \tan A = x \\) dan \\( \tan B = y \\). Maka sistem menjadi:
$$
\begin{aligned}
2x + y &= 4, \quad \text{(1')} \\
x - 3y &= -\frac{17}{2}. \quad \text{(2')}
\end{aligned}
$$

##### Eliminasi \\( y \\):
Kalikan persamaan (1') dengan 3:
$$
6x + 3y = 12. \quad \text{(3)}
$$
Tambahkan persamaan (3) dengan persamaan (2'):
$$
(6x + 3y) + (x - 3y) = 12 + \left(-\frac{17}{2}\right).
$$
Sederhanakan:
$$
7x = 12 - \frac{17}{2} = \frac{24}{2} - \frac{17}{2} = \frac{7}{2}.
$$
Sehingga:
$$
x = \frac{\frac{7}{2}}{7} = \frac{1}{2}.
$$

##### Substitusikan \\( x = \frac{1}{2} \\) ke persamaan (1'):
$$
2x + y = 4 \implies 2\left(\frac{1}{2}\right) + y = 4.
$$
Sederhanakan:
$$
1 + y = 4 \implies y = 3.
$$

Jadi, kita peroleh:
$$
\tan A = x = \frac{1}{2}, \quad \tan B = y = 3.
$$

#### Langkah 2: Hitung \\( \tan(2A + B) \\)
Gunakan rumus tangen jumlah dua sudut:
$$
\tan(2A + B) = \frac{\tan 2A + \tan B}{1 - \tan 2A \cdot \tan B}.
$$

##### (1) Hitung \\( \tan 2A \\):
Rumus tangen ganda:
$$
\tan 2A = \frac{2\tan A}{1 - \tan^2 A}.
$$
Substitusikan \\( \tan A = \frac{1}{2} \\):
$$
\tan 2A = \frac{2\left(\frac{1}{2}\right)}{1 - \left(\frac{1}{2}\right)^2} = \frac{1}{1 - \frac{1}{4}} = \frac{1}{\frac{3}{4}} = \frac{4}{3}.
$$

##### (2) Substitusikan ke Rumus \\( \tan(2A + B) \\):
$$
\tan(2A + B) = \frac{\tan 2A + \tan B}{1 - \tan 2A \cdot \tan B}.
$$
Substitusikan \\( \tan 2A = \frac{4}{3} \\) dan \\( \tan B = 3 \\):
$$
\tan(2A + B) = \frac{\frac{4}{3} + 3}{1 - \left(\frac{4}{3}\right)(3)}.
$$
Sederhanakan pembilang:
$$
\frac{4}{3} + 3 = \frac{4}{3} + \frac{9}{3} = \frac{13}{3}.
$$
Sederhanakan penyebut:
$$
1 - \left(\frac{4}{3}\right)(3) = 1 - 4 = -3.
$$
Sehingga:
$$
\tan(2A + B) = \frac{\frac{13}{3}}{-3} = \frac{13}{3} \cdot \frac{-1}{3} = -\frac{13}{9}.
$$

> **Jawaban: (A) \\( -\frac{13}{9} \\)**

</details>


## ✏️ Soal 7

Suatu barisan geometri mempunyai 3 suku pertama \\( a, b, b^2 \\). Jika \\( a \\) dan \\( b \\) adalah akar-akar dari persamaan kuadrat \\( 2x^2 + kx + 6 = 0 \\), maka suku keempat dari barisan dan nilai \\( k \\) masing-masing adalah ...

- [ ] A. 27 dan -8  
- [ ] B. 27 dan 8  
- [ ] C. 24 dan -8  
- [ ] D. 24 dan -4  
- [ ] E. 24 dan 4

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **A. 27 dan -8  **.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Sifat Barisan Geometri
Barisan geometri diberikan dengan tiga suku pertama:
$$
a, b, b^2.
$$
Dalam barisan geometri, rasio antara dua suku berurutan tetap konstan. Misalkan rasio barisan adalah \\( r \\). Maka:
$$
b = ar \quad \text{dan} \quad b^2 = br.
$$
Dari \\( b^2 = br \\), kita dapatkan:
$$
r = b.
$$
Jadi, barisan geometri memiliki bentuk:
$$
a, ar, ar^2,
$$
dengan \\( r = b \\). Sehingga:
$$
a = a, \quad b = ab, \quad b^2 = ab^2.
$$

#### Langkah 2: Akar-Akar Persamaan Kuadrat
Persamaan kuadrat diberikan:
$$
2x^2 + kx + 6 = 0.
$$
Akar-akarnya adalah \\( a \\) dan \\( b \\). Menurut rumus jumlah dan hasil kali akar-akar persamaan kuadrat:
1. **Jumlah akar-akar**:
   $$
   a + b = -\frac{\text{koefisien } x}{\text{koefisien } x^2} = -\frac{k}{2}.
   $$
   Jadi:
   $$
   a + b = -\frac{k}{2}. \quad \text{(1)}
   $$

2. **Hasil kali akar-akar**:
   $$
   ab = \frac{\text{konstanta}}{\text{koefisien } x^2} = \frac{6}{2} = 3.
   $$
   Jadi:
   $$
   ab = 3. \quad \text{(2)}
   $$

#### Langkah 3: Hubungan Antara \\( a \\), \\( b \\), dan Rasio Barisan
Dari barisan geometri, kita ketahui:
$$
b = ar.
$$
Karena \\( r = b \\), maka:
$$
b = ab.
$$
Substitusikan \\( ab = 3 \\) (dari persamaan (2)):
$$
b = 3.
$$

#### Langkah 4: Nilai \\( a \\)
Dari \\( ab = 3 \\):
$$
a \cdot 3 = 3 \implies a = 1.
$$

#### Langkah 5: Nilai \\( k \\)
Dari persamaan (1):
$$
a + b = -\frac{k}{2}.
$$
Substitusikan \\( a = 1 \\) dan \\( b = 3 \\):
$$
1 + 3 = -\frac{k}{2} \implies 4 = -\frac{k}{2} \implies k = -8.
$$

#### Langkah 6: Suku Keempat Barisan
Suku keempat barisan geometri adalah:
$$
a, ar, ar^2, ar^3.
$$
Dengan \\( a = 1 \\) dan \\( r = b = 3 \\):
$$
\text{Suku keempat} = ar^3 = 1 \cdot 3^3 = 27.
$$

> **Jawaban: (A) 27 dan -8 **

</details>

## ✏️ Soal 8

Fungsi \\( f(x) = 3\sin x + 3\cos x \\) yang didefinisikan pada interval \\( (0, 2\pi) \\) mencapai nilai maksimum untuk titik \\( x = \\) ...

- [ ] A. \\( \frac{\pi}{6} \\) 
- [ ] B. \\( \frac{\pi}{4} \\)   
- [ ] C. \\( \frac{\pi}{3} \\)   
- [ ] D. \\( \frac{\pi}{2} \\)   
- [ ] E. \\( \frac{3\pi}{4} \\) 

<details>
<summary>✅ Cek Jawaban</summary>

Jawaban yang benar adalah **B. \\( \frac{\pi}{4} \\)  **.

</details>

<details>
<summary>🧠 Lihat Pembahasan</summary>

#### Langkah 1: Fungsi \\( f(x) = 3\sin x + 3\cos x \\)
Faktorkan koefisien 3:
$$
f(x) = 3(\sin x + \cos x).
$$
Untuk menyederhanakan \\( \sin x + \cos x \\), gunakan identitas trigonometri:
$$
\sin x + \cos x = \sqrt{2} \left( \frac{1}{\sqrt{2}} \sin x + \frac{1}{\sqrt{2}} \cos x \right).
$$
Perhatikan bahwa:
$$
\frac{1}{\sqrt{2}} = \cos \frac{\pi}{4} = \sin \frac{\pi}{4}.
$$
Sehingga:
$$
\sin x + \cos x = \sqrt{2} \left( \cos \frac{\pi}{4} \sin x + \sin \frac{\pi}{4} \cos x \right).
$$
Gunakan rumus sudut penjumlahan sinus:
$$
\sin x + \cos x = \sqrt{2} \sin \left( x + \frac{\pi}{4} \right).
$$
Jadi:
$$
f(x) = 3\sqrt{2} \sin \left( x + \frac{\pi}{4} \right).
$$

#### Langkah 2: Maksimum Fungsi
Fungsi \\( \sin \theta \\) mencapai maksimum saat \\( \sin \theta = 1 \\). Oleh karena itu:
$$
\sin \left( x + \frac{\pi}{4} \right) = 1.
$$
Ini terjadi jika:
$$
x + \frac{\pi}{4} = \frac{\pi}{2} + 2n\pi, \quad n \in \mathbb{Z}.
$$
Pada interval \\( (0, 2\pi) \\), pilih \\( n = 0 \\):
$$
x + \frac{\pi}{4} = \frac{\pi}{2} \implies x = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}.
$$

> **Jawaban: (B) \\( \frac{\pi}{4} \\) **