---
title: Menghitung Peluang Dapat Kartu Paling Sial dan Paling Beruntung Saat Main UNO
description: Permainan kartu ini selain mudah untuk mengakrabkan orang, UNO juga mudah dihafal dan dimainkan. UNO sering dianggap permainan ‘anak kecil’ yang tidak lebih sulit dari permainan kartu bridge lain, tidak membutuhkan banyak hafalan dan aturan.
date: 2020-04-25
image: https://images.unsplash.com/photo-1703000970463-bd63dbe98e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 15
author:
  name: Rezky Yayang (@rezkyyayang)
  avatar:
    src: /profile.png
    alt: Rezky Yayang (@rezkyyayang)
---

Satu permainan kartu ini selain mudah untuk mengakrabkan orang pada acara-acara ‘makrab’, UNO juga mudah dihafal dan dimainkan. UNO sering dianggap permainan ‘anak kecil’ yang tidak lebih sulit dari permainan kartu lain seperti poker, bridge atau variasi permainan kartu remi lain. Tidak seperti poker, main UNO tidak membutuhkan banyak hafalan aturan.

Sebelum saya lebih jauh membahas tentang peluang-peluang yang kemungkinan akan didapatkan ketika main UNO, saya akan membahas aturan umum di permainan ini khususnya tentang komposisi satu deck kartu UNO. Satu deck kartu UNO terdiri dari 108 kartu dengan rincian 72 kartu 1-9 (2 pada setiap warna), 4 kartu 0 (1 pada setiap warna), 8 kartu +2 (2 pada setiap warna), 8 kartu reverse (2 pada setiap warna), 8 kartu skip (2 pada setiap warna), 4 kartu hitam netral, dan 4 kartu hitam netral +4.

Inti aturan dari permainan UNO ini adalah siapa paling cepat menghabiskan kartu ialah pemenangnya. Saya anggap pembaca telah mengetahui aturan bermain UNO (kalau belum cari di Google ya, banyak). Permainan dimulai dengan membagikan kartu ke setiap pemain, masing-masing pemain mendapatkan 7 kartu yang telah diacak (dikocok) sebelumnya. Ya, bagaimanapun acak menjadi asumsi penting ketika akan menjelaskan segala hal dengan peluang.

## Jumlah semua kemungkinan kombinasi kartu

Semua kemungkinan dari ketujuh kartu yang kita dapatkan dalam teori himpunan disebut sebagai himpunan semesta. Dalam teknik sampling di statistika, kita juga mengenal konsep all possible sample sebagai semesta kombinasi sampel yang mungkin terambil. Kita dapat menghitung jumlah semua kemungkinan kombinasi ketujuh kartu dengan rumus kombinasi sebagai berikut:

> n(S) = nCr = (108)C(7) = 27 883 218 170.

Fantastis! Oleh karena itu, saya tidak akan menyebutkan kombinasinya, hehe.

## Peluang mendapat kombinasi tidak terdapat kartu aksi (peluang paling sial)
Berdasarkan aturan awal, kartu aksi terdiri dari 0, +2, +4, hitam, skip, dan reverse yang totalnya berjumlah 36 kartu. Sebelum menghitung peluang mendapat kombinasi paling sial ini, kita hitung terlebih dahulu jumlah kombinasi yang mungkin tanpa kartu aksi. Jumlah semua kombinasi ketujuh kartu tanpa kartu aksi adalah kombinasi 7 dari jumlah kartu non-aksi, yaitu 72 kartu. Secara matematis dapat ditulis n(A) = 72C7 = 1 473 109 704 kombinasi.

Peluang mendapat kombinasi tidak terdapat kartu aksi dapat dihitung dengan menggunakan rumus peluang sebagai berikut

> P(A) = n(A)/n(S) = 1 473 109 704/27 883 218 170 = 0,5283 = 52,83%.

Hm lumayan juga ya peluangnya, melebihi setengahnya. Dari sini dapat pula kita mengetahui peluang mendapat kombinasi ada kartu aksi (entah satu atau dua) adalah sebagai berikut:

> P(A’) = 1 – P(A) = 1 – 0,5283 = 0,4717 = 47,17 %

Sekilas yang bisa diinterpretasikan dari perhitungan peluang ini adalah peluang mendapatkan minimal 1 kartu aksi dengan tidak mendapat kartu aksi sama sekali hampir sama (hanya terpaut sekitar 5%). Dengan menggunakan konsep frekuensi harapan (expected value), misalnya kita main UNO sebanyak 100 kali, maka harapan kita mendapat kartu aksi minimal satu adalah 47 kali, dan harapan tidak mendapat kartu aksi sama sekali adalah 53 kali. Ya, sekali lagi kita sebut ini sebagai “harapan”, toh harapan (ekspektasi) tidak selalu harus sesuai kenyataan kan?

## Peluang mendapat ketujuh kartu adalah kartu aksi (peluang paling beruntung)

Setelah menghitung peluang paling sial dalam main UNO, tentunya tidak afdal jika kita tidak menghitung pula peluang paling beruntung. Seseorang paling beruntung saya asumsikan mana kala kita mendapat kombinasi ketujuh kartu merupakan kartu aksi (entah nol, +2, +4, hitam, skip, atau reverse). Seperti yang kita sudah hitung sebelumnya, jumlah kartu aksi ada sebanyak 36 kartu dari 108 kartu yang ada. Maka jumlah kombinasi ketujuh kartu adalah kartu aksi ada sebanyak n(B) = 36C7 = 8 347 680 kombinasi kartu. Peluang mendapat kombinasi ketujuh kartu merupakan kartu aksi dapat dihitung sebagai berikut:

> P(B) = n(B)/n(S) = 8 347 680/27 883 218 170 = 0,00030 = 0,030%.

Hm, sedikit sekali ya, padahal saya mau mem-breakdown lagi. Dari peluang tersebut, harapan kita mendapat “satu” kali kombinasi semuanya adalah kartu aksi adalah dengan 3333 kali main. Mau membuktikan? Hehe, yang ada pegal.

## Peluang ketujuh kartu berwarna hitam (peluang otomatis menang versi 1)

Dalam permainan UNO, menurut saya seseorang dikatakan sangat beruntung apabila ketujuh kartu awalnya adalah hitam, karena bisa langsung menang dalam setidaknya dua kali putaran tanpa hambatan apa pun kecuali jika lawan mengeluarkan skip, reverse, dan +2 terhadap dirinya yang bisa saja membatalkan kemenangan.

Kondisi ketujuh kartu berwarna hitam adalah turunan dari kondisi ketujuh kartu adalah kartu aksi. Peluang ketujuh kartu berwarna hitam ditambah peluang ada minimal satu kartu aksi tidak berwarna hitam sama dengan peluang ketujuh kartu adalah kartu aksi. Secara matematis dapat dituliskan sebagai berikut:

> B1 = ketujuh kartu berwarna hitam

> B2 = ada minimal satu kartu aksi tidak berwarna hitam

> B = ketujuh kartu adalah kartu aksi

> P(B1) + P(B2) = P(B)

Jumlah kartu hitam dalam satu deck kartu UNO ada sebanyak 8 kartu terdiri dari 4 kartu hitam kopong dan 4 hitam +4. Seperti pada langkah sebelumnya, kita harus menghitung kombinasi ketujuh kartu adalah kartu hitam, yaitu ada sebanyak 8C7 = 8 kombinasi kartu. Maka, dari sini peluang dapat dihitung sebagai berikut:

> P(B) = n(B1)/n(S) = 8/27 883 218 170 = 2,86 x 10^(-10)

Dengan konsep frekuensi harapan, maka harapan kita untuk satu kali mendapat kombinasi semua kartu adalah hitam kita harus bermain sebanyak 3 496 503 497 kali. Oke, ini semakin ngawur, hanya orang-orang paling beruntunglah yang bisa mendapat kombinasi kartu ini.

## Peluang mendapat (minimal satu) kartu hitam

Jika peluang mendapat ketujuh kartu semuanya adalah kartu hitam tidak mudah didapatkan, tenang saja, kita masih mungkin menang jika mendapat kartu hitam berapa pun jumlahnya. Kartu hitam memang kehadirannya sering dianggap sakral lantaran mampu mengalahkan berbagai kartu warna (kecuali +2).

Kondisi mendapat minimal satu kartu hitam adalah komplemen dari kondisi mendapat kombinasi semua kartu adalah berwarna (tidak ada kartu hitam satu pun). Maka, ada baiknya untuk mempermudah perhitungan, kita mulai menghitung peluang mendapat kombinasi tidak ada kartu hitam sama sekali.

Seperti yang kita tahu, jumlah kartu berwarna ada 100 kartu terdiri dari 76 kartu 0-9, 8 reverse, 8 skip, dan 8 kartu +2. Maka, jumlah kombinasinya adalah: 100C7 = 1 600 756 080 kombinasi. Peluangnya adalah sebagai berikut:

> P(C) = n(C)/n(S) = 16 007 560 800/27 883 218 170 = 0,5741 = 57,41%

Maka peluang mendapat (minimal satu) kartu hitam adalah P(C’) = 1-P(C) = 1-0,5471 = 0,4259 = 42,59%. Besar bukan? Dalam 100 kali permainan, harapan kita mendapat minimal satu kartu hitam adalah 42 sampai 43 kali. Pada dasarnya peluang tersebut akan semakin akurat jika kita terus-terusan melakukan percobaan alias semakin sering bermain.

## Peluang mendapat ketujuh kartu memiliki angka/simbol yang sama (peluang otomatis menang versi 2)

Kombinasi ketujuh kartu memiliki angka yang sama bisa memenangkan permainan dengan cepat (aturan variatif UNO menyebutkan angka yang sama dapat dikeluarkan sekaligus). Dalam menghitung kombinasi ini diperlukan konsep gabungan (union) yaitu dengan menjumlahkan semua kombinasi yang mungkin.
Jika kita akan menghitung peluang ketujuh kartu memiliki angka yang sama maka kita harus menghitung kombinasi ketujuh kartu berangka 1, atau 2, 3, dan seterusnya. Secara matematis dapat dirumuskan:

> N(1) + N(2) + … + N(9) + N(reverse) + N(+2) +N(skip) = n(Q)

> n(Q) = 8C7 + 8C7 + … + 8C7 = 8C7 x 12 = 96 kombinasi

Maka peluangnya adalah:

> P(Q) = n(Q) / n(S) = 96 / 27 883 218 170 = 3,44 x 10^(-9)

Dengan konsep frekuensi harapan, maka harapan kita untuk satu kali mendapat kombinasi semua kartu adalah hitam kita harus bermain sebanyak 290 697 674 kali.

## Rumus Umum

Sebenarnya ada banyak kombinasi lain yang bisa dihitung, namun karena keterbatasan waktu—dan mungkin pembaca sudah mulai jenuh dengan hitung-hitungan yang tidak jelas arahnya ini, ada baiknya saya kasih rumus umum untuk menghitungnya saja.

**Pertama**: menghitung jumlah kombinasi kartu. Pada dasarnya peluang kombinasi kartu tertentu tergantung pada jumlah kombinasi kartunya. Kombinasi juga bergantung pada jumlah kartu. Rumus untuk jumlah menghitung kombinasi kartu adalah sebagai berikut:

> n(X) = nCr = n! / [(n-r)! x r!]

> n = jumlah kartu total yang akan dikombinasikan

> r = jumlah kartu dalam kombinasi

Contoh kita akan mengombinasikan kartu reverse—yang berjumlah 8 buah dalam 7 kartu, maka jumlah kombinasinya adalah 8C7 = 8 kombinasi.

**Kedua**: aturan perkalian. Dalam menghitung kombinasi, mungkin kita akan menginginkan kombinasi yang tidak berasal dari satu jenis kartu saja. Tentu kita dapat menghitungnya dengan mengalikan kedua kombinasi tersebut.

> n(Y) = nCr x mCs

> n, m = jumlah kartu total yang akan dikombinasikan pada kombinasi 1 dan 2

> r, s = jumlah kartu dalam kombinasi 1 dan 2

Misalnya dalam 7 kartu kita ingin mendapatkan kombinasi 3 merah dan 4 biru. Mula-mula kita harus mengetahui jumlah kartu merah (27 kartu) dan jumlah kartu biru (27 kartu). Maka n(Y)= 27C3 x 27C4 = 51333750 kombinasi.

**Ketiga**: menghitung peluang kombinasi tersebut, yaitu dengan membagi jumlah kombinasi yang akan kita hitung dengan jumlah kombinasi semesta. Rumusnya sebagai berikut:

> P(X) = n(X) / n(S) = nCr / 108C7 = nCr / 27 883 218 170

**Keempat**: menghitung peluang komplemen. Dalam kasus tertentu (seperti pada menghitung peluang mendapat minimal satu kartu hitam), kita akan lebih mudah dengan menggunakan konsep komplemen peluang. Rumusnya sebagai berikut:

> P(X’) = 1 – P(X)
> X’ = semua kejadian bukan X

**Kelima**: menghitung peluang gabungan. Dalam kasus tertentu (seperti pada menghitung peluang ketujuh kartu memiliki angka/simbol sama), kita diharuskan menggunakan konsep gabungan (union), dengan asumsi kejadian satu dengan lainnya saling lepas (disjoint event). Rumusnya sebagai berikut:

> P (A U B) = P(A) + P(B)

A dan B merupakan dua kejadian yang saling lepas, artinya dua kejadian ini tidak memiliki hubungan sama sekali misalnya angka 1 dan angka 2, warna biru dan warna merah, dan lain sebagainya.

## Peluang ambilan/minuman (jog)
Entah kenapa ini dinamakan jog, hehe. Begitu masyarakat Jawa di daerah saya menyebutnya. Jog—sering juga disebut minum—secara definitif adalah mengambil kartu pada deck jogan (sisa kartu setelah dibagikan pada k pemain), ketika kartu yang dipegang tidak ada atau terpaksa mengambil karena +2 atau +4. Dalam menghitung peluang ini, pada umumnya tidak diperlukan kombinasi karena biasanya hanya mengambil satu kartu saja (kecuali ambilan terpaksa). Sebenarnya sangat rumit dalam menghitungnya karena kartu dalam deck jogan tidak lagi lengkap namun kita tetap dapat menghitungnya dengan aproksimasi. Perhitungannya adalah:

> P(Z) = n(Z) / n(S)

dengan:

> n(Z) = jumlah kartu yang akan dihitung peluangnya, misal kartu hitam = 8 kartu (asumsi masih lengkap, bisa saja mengubah asumsi sesuai keadaan)

> n(S) = jumlah kartu deck = 108 – 7k ; dengan k= jumlah pemain (asumsi minuman pertama, bisa saja mengubah asumsi sesuai keadaan)

Sebenarnya dalam semua perhitungan peluang, konsepnya adalah harapan bukan kepastian. Jadi, misalnya apabila frekuensi harapannya 40 dari 100 kali main artinya kita tidak akan benar-benar mendapatkan 40 kali (bisa 39 atau 41) intinya mendekati. Secara umum, jumlah observasi yang berhasil akan mendekati frekuensi harapannya ketika percobaannya banyak. Maka ada baiknya, perbanyaklah main UNO dan jangan lupa ucapkan UNO saat kartu tinggal satu~