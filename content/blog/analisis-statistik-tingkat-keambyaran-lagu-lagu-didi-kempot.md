---
title: Analisis Statistik Tingkat Keambyaran Lagu-lagu Didi Kempot
description:  Siapa sih yang nggak kenal Lord Didi Kempot? Penyanyi tembang campursari Jawa ini dikenal sepanjang masa lewat karya-karya lagunya yang sebagian besar menyayat hati. Sampai-sampai beliau pun mendapat julukan “The Godfather of Broken Hearth” oleh para sadboys dan sadgirls.
date: 2020-04-15
image: https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 15
author:
  name: Rezky Yayang (@rezkyyayang)
  avatar:
    src: /profile.png
    alt: Rezky Yayang (@rezkyyayang)
---

Siapa sih yang nggak kenal Lord Didi Kempot? Penyanyi tembang campursari Jawa ini dikenal sepanjang masa lewat karya-karya lagunya yang sebagian besar menyayat hati. Sampai-sampai beliau pun mendapat julukan “The Godfather of Broken Hearth” oleh sadboys dan sadgirls—nama lain Sobat Ambyar, sebutan bagi penggemar Didi Kempot. Didi Kempot adalah penyanyi, seniman, musisi, juga pencipta lagu yang tak lekang dimakan zaman.

Saya sendiri mengenal Didi Kempot sudah sejak dulu melalui lagunya yang melegenda Cucak Rowo dan Sekonyong-konyong Koder. Entah kenapa saya sangat senang ketika kecil dulu—sekitar tahun 2008—saat ada orang hajatan nyetel lagu Didi Kempot. Bukan karena saya ngefans, saya saja nggak tahu orangnya yang mana. Hanya saja lagu-lagunya enak, unik, dan mudah dihafal. Coba, mana lagi musisi yang mau mencipta lagu dengan lirik “sekonyong-konyong”, yang mana membacanya saja perlu mencucu.

Kuliah di jurusan Statistika membuat saya berkali-kali lebih penasaran tentang apa-apa saja fakta unik yang ada di dunia ini tak terkecuali fenomena ambyar. Didi Kempot telah menciptakan 700-an lebih lagu, oleh karena itu saya tidak akan mengambil data sensus—bisa-bisa bengkak tangan saya.

Saya mengambil sampel 15 lagu terpopuler menurut pencarian saya di Google yaitu:
1. Cidro
2. Layang Kangen
3. Banyu Langit
4. Suket Teki
5. Sewu Kutha
6. Pamer Bojo
7. Pantai Klayar
8. Tanjung Mas Ninggal Janji (untuk menyingkat penulisan dalam analisis ditulis Tanjung Mas)
9. Dalan Anyar
10. Ambyar
11. Kalung Emas
12. Perawan Kalimantan
13. Jambu Alas
14. Stasiun Balapan
15. Terminal Tirtonadi

Dengan menggunakan RStudio—sebuah IDE dari R (statistical programming) yang tentunya open source, set data yang telah saya buat sebelumnya dengan menggabungkan 15 lirik lagu sampel tersebut dianalisis dengan bantuan package dplyr, ggplot2, tidyr, tidytext, dan package lainnya. Berikut adalah hasil analisisnya yang kelima membuat Anda tercengang:

## Pertama: Pendeknya lagu membuat lagu lebih mudah dihafal

Analisis jumlah baris per lagu dapat mengidentifikasi panjangnya sebuah lagu. Diagram berikut menunjukkan banyak baris unik—baris yang sama dihitung 1 baris—pada setiap lagu Didi Kempot. Jambu Alas berada pada urutan pertama sebagai sampel lagu paling banyak barisnya yaitu 31 baris diikuti Perawan Kalimantan dan Terminal Tirtonadi. Sementara Dalan Anyar sebagai lagu sampel terpendek yaitu 11 baris. Berdasarkan 15 sampel lagu terpopuler tersebut, secara rata-rata jumlah baris unik per lagu yang diciptakan Didi Kempot adalah 18 baris. Berikut diagramnya:

<div style="text-align: center;">
  <img src="img/didikempot-01.png" alt="Jumlah Baris Unik Dalam Lagu-Lagu Didi Kempot" style="width: 80%; max-width: 600px;">
</div>

## Kedua: Sedikit kata membuat lagu sederhana dan mudah diingat

Selain jumlah baris unik, analisis jumlah kata per lagu juga dapat mengidentifikasi panjangnya sebuah lagu. Diagram berikut menunjukkan banyak kata pada setiap lagu Didi Kempot. Perawan Kalimantan berada pada urutan pertama sebagai sampel lagu dengan kata paling banyak yaitu 204 kata diikuti Jambu Alas dan Banyu Langit. Sementara Stasiun Balapan sebagai lagu sampel terpendek yaitu 69 kata. Berdasarkan 15 sampel lagu terpopuler tersebut, secara rata-rata jumlah kata per lagu yang diciptakan Didi Kempot adalah 132 kata. Maka, rata-rata jumlah kata per baris adalah 4,5 kata per baris sehingga dapat mudah dihafal dan diingat. Berikut diagramnya:

<div style="text-align: center;">
  <img src="img/didikempot-02.png" alt="Jumlah Kata per Lagu Dalam Lagu-Lagu Didi Kempot" style="width: 80%; max-width: 600px;">
</div>

## Ketiga: Kiasan dan pantun adalah pemanis lagu, makin banyak makin manis

Layaknya puisi, umumnya lagu tidak serta merta memberikan langsung maksud dan tujuan. Penambahan kata-kata kiasan, ungkapan, peribahasa, sampai pantun atau rima bersajak yang sama. Dalam ke-15 lagu sampel yang saya amati hampir di semua lagu memiliki kata-kata kiasan.

Contohnya pada sampel lagu Suket Teki terdapat lirik, paribasan awak urip kari balung lilo tak lakoni, yang bermaksud badan yang tinggal tulang saja, sengsara (usaha) tetap dilakukan—demi mendapatkan pujaan hati. Ada juga peribahasa, tak tandur pari jebul tukule suket teki, yang berarti kenyataan tidak sesuai harapan atau dapat berarti pula usaha baik tidak berbuah apa-apa.

Tak sedikit pula lagu-lagu Lord Didi Kempot yang nyaman didengar karena sajaknya yang sama a-a-a-a atau a-b-a-b layaknya pantun. Contohnya pada sampel lagu Dalan Anyar terdapat lirik pantun, Kembang tebu sing kabur kanginan, saksi bisu sing dadi kenangan. Juga pada lagu Jambu Alas, Jambu alas kulite ijo, sing digagas wes duwe bojo.

## Keempat: Dominasi nama-nama tempat menunjukkan Indonesia banget

Pantai Klayar, Perawan Kalimantan, Dalan Anyar, Tanjung Mas Ninggal Janji, Stasiun Balapan, Terminal Tirtonadi, 6 dari 15 lagu sampel atau 40% dari lagu-lagu populer Didi Kempot yang menceritakan nama tempat di Indonesia—khususnya Jawa Tengah, Yogyakarta, dan Jawa Timur. Hal ini membuktikan selain tentunya sebagai sumber inspirasi dalam pembuatan lagu, Didi Kempot ingin mengenalkan pada dunia tempat-tempat yang layak dijadikan objek wisata di Pulau Jawa.

Sebut saja Terminal Tirtonadi dan Stasiun Balapan yang letaknya bersebelahan di Surakarta. Tanjung Mas Ninggal Janji menceritakan janji yang ditinggalkan di pelabuhan Tanjung Mas Semarang sebelum sang kekasih pergi. Dalan Anyar menceritakan adegan pelabrakan di jalan baru, sebelah barat Terminal Kertonegoro Ngawi. Sementara Pantai Klayar berada di Pacitan, Jawa Timur.

## Kelima: Kata-kata ambyar menjadi ciri khas lagu

Mungkin satu pertanyaan dari kita semua adalah kata apa yang paling banyak digunakan Didi Kempot dalam lagu-lagunya. Benarkah semua lagu-lagunya dipenuhi kata-kata ambyar bernada patah hati sehingga beliau mendapat julukan “The Godfather of Broken Hearth”? Analisis berikut menghitung jumlah kata-kata unik dalam 15 sampel lagu beliau dengan menghilangkan stopword—sing, ra, iki, wis, ning, mung, karo, opo, sak, yen, dadi. Berikut diagram hasil analisisnya.

<div style="text-align: center;">
  <img src="img/didikempot-03.png" alt="Frekuensi Kemunculnya Kata Tertentu Dalam Lagu-Lagu Didi Kempot" style="width: 80%; max-width: 600px;">
</div>

Dua teratas ditempati aku dan kowe (kamu) dengan jumlah kata hampir sama 60:59, kemungkinan besar di setiap penyebutan aku, Lord Didi juga mengimbanginya dengan kowe. Penggunaan kata aku-kowe yang terlampau banyak ini juga menunjukkan bahwa lagu-lagu beliau bertemakan percintaan dua orang antara aku—yaitu Lord Didi sendiri dan ‘kowe’—bukan kamu yang lagi baca tulisan ini, ya. Hehehe.

Kata-kata lain yang tak kalah ambyar adalah ati (hati) dan atiku (hatiku) di posisi 6 dan 7 dengan total 34 kata. Kemudian kata ambyar itu sendiri 16 kata, janji, rasane, kangen, ngenteni (menunggu), kelingan (teringat), tresno (cinta), dan aduh di urutan terakhir. Pembuktian bahwa banyak kiasan pada lagu-lagu yang dibuat Lord Didi adalah banyaknya kata koyo—seperti—yang berjumlah 13 kata.

Yang jelas tingkat keambyaran lagu Lord Didi Kempot memiliki korelasi kuat dengan frekuensi seberapa sering Anda mendengarkan lagu-lagunya. Hal ini jelas tidak bisa diukur hanya dengan kajian statistik deskriptif semata. Anda punya saran analisis deskriptif lain?