# 🍽️ Website Resep Makanan

Aplikasi web **Fullstack sederhana** untuk menampilkan dan mencari resep makanan.
Project ini dibuat untuk pembelajaran menggunakan **Node.js, Express, MongoDB, dan JavaScript**.

---

##  Fitur Utama

* Register user
* Login user
* Menampilkan daftar resep
* Pencarian resep
* Logout
* Data tersimpan di MongoDB

---

## 🛠️ Teknologi

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Tools**: VS Code, Live Server

---

## 📁 Struktur Folder

```
resep-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── app.js
│   ├── style.css
│
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

### 🔹 1. Jalankan Backend

```
cd backend
npm install
node server.js
```

Pastikan muncul:

```
MongoDB Connected
Server running on 5000
```

---

### 🔹 2. Jalankan Frontend

* Buka folder `frontend`
* Klik kanan `index.html`
* Pilih **Open with Live Server**

---

### 🔹 3. Database

* Pastikan MongoDB sudah aktif
* Gunakan MongoDB Compass untuk melihat data
---

##  Pengujian Sistem

| No | Fitur       | Input             | Output yang Diharapkan    | Hasil |
| -- | ----------- | ----------------- | ------------------------- | ----- |
| 1  | Register    | Nama, Email, Pass | User berhasil terdaftar   | ✅     |
| 2  | Login       | Email & Password  | Berhasil login            | ✅     |
| 3  | Tampil Data | -                 | Data resep tampil         | ✅     |
| 4  | Search      | "nasi"            | Menampilkan resep terkait | ✅     |
| 5  | Logout      | Klik tombol       | Kembali ke halaman login  | ✅     |

---

## NOTE

* Folder `node_modules` tidak diupload ke GitHub
* Backend berjalan di `http://localhost:5000`
* Untuk versi online hanya frontend yang aktif

---

## Developer

* Nama: (Dzaky Musyaffa)
* NIM:  (202310370311444)
* Project: Website Resep Makanan

---

## Penutup

Project ini dibuat sebagai latihan **Fullstack Web Development**
dan dapat dikembangkan lebih lanjut menjadi aplikasi yang lebih kompleks.

---
