# Single Page Application Specta Company
Merupakan sebuah simple website yang saya buat untuk mengerjakan technical assessment pada VhiWeb dengan posisi Frontend Developer. Website ini saya buat dengan framework React Js dan UI Library Material UI. Untuk sumber data menggunakan API Publik https://reqres.in. 

Deploy link : https://test-fe-vhiweb.netlify.app/

# Structure Folder
![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/e65f508c-3989-4681-9527-71fc65039ccf)

Dalam folder src terdapat beberapa folder lagi di dalamnya diantaranya
assets --> berisi file-file image yang akan digunakan sebagai aset UI
components --> folder yang berisikan atoms dan moleculs
    atoms --> folder yang berisikan komponen terkecil seperti FormInputOutlined,   ButtonDrawerTogle, Logo, dan juga Snackbar
    moleculs --> folder yang berisikan komponen gabungan dari beberapa atom seperti BoxDetailUser, formLogin, SidebarItem, dan juga TableListUser
config --> folder yang berisikan konfigurasi project seperti routes (URL page project), service (URL API), serta key storage untuk token dan user data.
constants --> folder berisikan data-data konstan seperti data sidebar, juga berisikan Route untuk public dan private. Dimana public dapat diakses langsung tanpa login sedangkan private hanya bisa diakses ketika login
containers --> folder berisikan organisms, templates, dan pages
    organisms --> folder berisikan komponen gabungan atom, molekul, dan organisme lainnya. Contohnya seperti organisms DetailUser, organisms Header, organisms ListUser, organisms MainLayout, organisms PageNotFound, dan juga organisms Sidebar.
    templates --> folder berisikan struktur halaman seperti templates list user, templates dashboard, templates detail user
    pages --> folder untuk menggunakan template.
reducers --> folder untuk mendefinisikan reducer (bagaimana state dalam store akan diubah berdasarkan data/aksi yang dikirimkan)
store --> folder untuk membuat dan mengatur store Redux
utils --> folder yang berisikan function yang akan digunakan lebih dari 1 kali, sehingga disebut sebagai utils
App.js --> file untuk mengatur routes dan route project

Codebase yang saya gunakan menerapkan Atomic Design. 

![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/fe60979e-a27d-4193-b251-f28771f7a5a7)

Atomic design merupakan cara mengorganisir dan membangun komponen-komponen dalam hirarki kompleksitas yang meningkat, berdasarkan atom, molekul, organisme, template, dan halaman. Berikut adalah gambaran contoh atomic design:
Atoms --> komponen terkecil
Moleculs --> komponen lebih kompleks yang terdiri dari penggabungan atom
Organisms --> komponen lebih besar yang menggabungkan atom, molekul, dan organisme lainnya
Templates ---> struktur halaman
Pages --> tempat untuk menggunakan template dan diisi dengan konten.

# Library yang digunakan
1. material-ui --> library untuk UI (button, icon, form, dsb)
2. axios --> library untuk fetch api/integrasi api
3. formik --> library untuk form validation
4. prop-types --> library untuk validasi prop yang diterima komponen
5. yup --> library untuk validasi skema data
6. redux-thunk --> middleware Redux yang memungkinkan untuk membuat action creator yang mengjasilkan thunk sebagai gantinya

# Instruction
1. Login Page
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/d80b0605-3dc4-4624-9637-37dc97eaa028)
   Inputkan email dan password:
   Email --> eve.holt@reqres.in
   Password --> cityslicka
  
   Pada page Login ini saya membuat 2 case login
   yang pertama jika login berhasil maka akan terdapat snackbar success login dan diarahkan menuju page dashboard (disini melakukan set token dan set user data pada local storage)
   yang kedua jika email dan password yang diinputkan tidak sesuai (gunakan email ex: fadilla@gmail.com), maka login akan gagal dan terdapat snackbar alert failes


3. Dashboard Page
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/b2a25272-7462-4dd6-b6ba-462415ee4dd3)
   Pada header tedapat username, jika username diklik akan show menu logout. Apabila klik logout maka user akan logout (clear storage) dan redirect menuju page login. Terdapat button Start Now jika diklik akan redirect pada page List Users (/users)

5. List Users
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/d60f9b9c-3e00-4f16-a0d6-a08ded62cc61)
   Menampilkan list users yang difetch dari api get list users. Terdapat filter user by full name dan ada juga button detail yang jika diklik akan redirect ke detail user (users/${id})

7. Detail User
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/a7fcd424-b618-41e7-bdc0-b98e28dd5b05)
   Menampilkan detail user berdasarkan id pada params. Terdapat action back to page list users dengan klik arrow back button

   untuk case 'User not found', terjadi jika user dengan id pada params tidak ditemukan.
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/03f7b2c0-0fc4-49ae-b893-92935e78745c)

9. Page Not Fpund
   ![image](https://github.com/Fadillaratna/test-fe-vhiweb/assets/87308406/8860158c-69c7-4b29-9b65-202584921963)
   Page ini akan show ketika user mengakses halaman yang tidak tersedia
