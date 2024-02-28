### Nama : Brian Mohamad Safiudin
### NIM : 2141720133
### Kelas : TI-3A
---

# Praktikum 1: Mendefinisikan Komponen

`Komponen React` adalah fungsi JavaScript biasa, tetapi nama mereka harus dimulai dengan huruf kapital atau tidak akan berfungsi!

## Soal 1
#### Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!

```tsx
import Profile from "../components/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Brian ilmuan yang luar biasa&nbsp;
        </p> 
        <div className="fixed top-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
    </main>
  );
}
```
![Screenshot P1](assets-report/praktikum1soal1.jpg)

- `import Gallery from './Gallery';` Penulisan impor seperti ini './Gallery.tsx' atau './Gallery' akan tetap berfungsi dengan React, meskipun yang pertama lebih mirip dengan bagaimana native ES Modules bekerja.

- Anda tidak dapat memiliki dua `default exports` dalam satu file. Anda dapat membuat file baru dengan default exports, atau Anda dapat menambahkan sebuah named exports untuk komponen lain dalam satu file. Sebuah file hanya dapat memiliki satu default exports, tapi dapat memiliki banyak named exports.

- Untuk mengurangi potensi kebingunan antara `default `dan `named exports`, beberapa tim memilih untuk berpegang pada satu gaya penulisan (default atau named), atau menghindari mencampurnya dalam satu file. Maka pilihlah kebiasaan terbaik untuk Anda!

---

# Praktikum 2: Mengimpor dan Mengekspor Komponen

## Soal 2
#### Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

```tsx
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Brian ilmuan yang luar biasa&nbsp;
        </p> 
        <Gallery />
      </div>
    </main>
  );
}
```
![Screenshot P2](assets-report/praktikum2soal2.jpg)

- `import { Gallery } from "@/components/gallery";` Ini adalah pernyataan import yang mengimpor komponen Gallery dari lokasi relatif "@/components/gallery". Lokasi @ mungkin merupakan konvensi untuk root direktori proyek.

- `JSX dan React` adalah dua hal yang berbeda. Mereka masing-masing digunakan secara bersama, namun anda dapat menggunakannya sendiri secara independen.JSX merupakan ekstensi sintaks, sedangkan React adalah library JavaScript.

- Umumnya, pesan error pada React akan memandu anda mencari sumber masalah yang ada di kode. `Jangan lupa membaca pesan error` jika anda stuck!

- `JSX mirip dengan HTML`, namun di balik layar, mereka berubah menjadi objek literal JavaScript. Anda tidak bisa mengembalikan dua objek dari sebuah fungsi tanpa membungkus mereka ke sebuah senarai. Inilah mengapa anda juga tidak bisa mengembalikan dua tag JSX tanpa membungkus mereka menjadi sebuah fragment.

- Untuk beberapa alasan, atribut `aria-*` dan `data-*` ditulis menggunakan tanda minus.

## Soal 3
#### Silakan perbaiki kode JSX berikut ini. Anda boleh menggunakan konverter atau perbaiki secara manual.

```tsx
import { Gallery } from "@/components/gallery";

export default function Bio() {
  return (
    <div className="intro">
      <h1>Selamat datang di website Brian!</h1>
      <p className="summary">
        Anda dapat membaca uneg-uneg saya di sini.
        <br/><br/>
        <b>Juga ada <i>foto</i> ilmuan!</b>
        <Gallery />
      </p>
    </div>
  );
}
```
![Screenshot P2](assets-report/praktikum2soal3.jpg)

- Error yang terjadi karena `kesalahan dalam struktur JSX` pada fungsi Bio().
- `Penempatan elemen <p> di luar dari elemen <div>` yang mengakibatkan struktur JSX tidak valid. Dalam JSX, setiap elemen harus dibungkus oleh satu elemen induk atau elemen pembungkus terluar.
- `Penutupan tag bold dan italic (<b> dan <i>) tidak sesuai urutan yang benar`, sehingga tidak valid secara sintaksis dalam HTML.
