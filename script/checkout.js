import {produks} from './barang/produk.js';
function calculateTotal (){;
   let harga = cariProduk();
   let kuantitas = document.querySelector('#jumlah').value;
   let deliv = document.querySelectorAll('.radio') || 0;
   let ongkir = 0;
   
  for(let i = 0; i < deliv.length; i++){
    if(deliv[i].checked){
        ongkir = deliv[i].value;
    }
}
let subTotal = (harga * kuantitas) + Number(ongkir);
document.querySelector('.ttlHarga').innerHTML = `Rp${subTotal.toLocaleString('id-ID')}`;
}

function cariProduk(){
    let harga = 0;
    let namaProduk = document.querySelector('#nama-produk').innerText;
    let lokasiToko = '';
 
    produks.forEach((produk)=>{
        if(produk.nama.includes(namaProduk)){
            harga = produk.harga;
            lokasiToko = produk.lokasi;
         }
     });
     document.querySelector('.lokasi-toko').innerText = lokasiToko;

     return harga;
 }



window.onload = cariProduk();
window.onload = calculateTotal();

document.querySelector('#jumlah').addEventListener('click', ()=>{
   calculateTotal();
});
document.querySelector('#hrini').addEventListener('click', ()=>{
   calculateTotal();
});
document.querySelector('#bsk').addEventListener('click', ()=>{
   calculateTotal();
});
document.querySelector('#dathr').addEventListener('click', ()=>{
   calculateTotal();
});

//search produk menggunakan button
document.querySelector('.searchButton').addEventListener('click', () =>{
   let input = document.querySelector('.searchBar').value;
   let cari = input.toLowerCase();
   let produkHtml= ``;
   let adaProduk = false;
   let tempat = document.querySelector('.grid-layout') || document.querySelector('.grid-produk');
   let newElement = document.createElement('h1');
   newElement.textContent = 'Produk Tidak Ditemukan';
   produks.forEach(produk => {
       const {prdk, nama, harga, rating, lokasi, img} = produk;
       const {bintang, terjual} = rating;
       const kondisi = produk.nama.toLowerCase().includes(cari);
       if(kondisi){
           adaProduk = true;
           produkHtml += `
           <div class="pencarian" onclick="window.location.href='${prdk}';" data-nama-produk="${nama}">
           <div class="foto-produk1">
           <img src="../${img}" />
           </div>
           <div class="keterangan-produk">
           <div class="nama-produk">${nama}</div>
           <div class="harga-produk">Rp${harga.toLocaleString('id-ID')}</div>
           <div class="lokasi-toko">${lokasi}</div>
           <div class="rating">⭐${bintang} | ${terjual} terjual</div>
           </div>
       </div>
       `;
       }
   });
   if(adaProduk){
      tempat.classList.remove('grid-layout');
      tempat.classList.add('grid-produk');
      tempat.style.removeProperty('display');
      document.querySelector('.grid-produk').innerHTML = produkHtml;
    }else{
      tempat.innerHTML = '';
      tempat.style.removeProperty("gridTemplateColumns");
      tempat.style.removeProperty("columnGap");
      tempat.style.display = "flex";
      tempat.style.height = "70vh";
      tempat.style.alignItems = "center";
      tempat.style.justifyContent = "center";
      tempat.appendChild(newElement);
    }
});

//search produk menggunakan enter
document.querySelector('.searchBar').addEventListener('keydown', (event) =>{
   let tempat = document.querySelector('.grid-layout') || document.querySelector('.grid-produk');
   if(event.key === 'Enter'){
       let input = document.querySelector('.searchBar').value;
       let cari = input.toLowerCase();
       let produkHtml= ``;
       let adaProduk = false;

       let newElement = document.createElement('h1');
       newElement.textContent = 'Produk Tidak Ditemukan';
       produks.forEach(produk => {
           const {prdk, nama, harga, rating, lokasi, img} = produk;
           const {bintang, terjual} = rating;
           const kondisi = produk.nama.toLowerCase().includes(cari);
           if(kondisi){
               adaProduk = true;
               produkHtml += `
               <div class="pencarian" onclick="window.location.href='${prdk}';" data-nama-produk="${nama}">
                   <div class="foto-produk1">
                   <img src="../${img}" />
                   </div>
                   <div class="keterangan-produk">
                   <div class="nama-produk">${nama}</div>
                   <div class="harga-produk">Rp${harga.toLocaleString('id-ID')}</div>
                   <div class="lokasi-toko">${lokasi}</div>
                   <div class="rating">⭐${bintang} | ${terjual} terjual</div>
                   </div>
               </div>
               `;
           }
       });
       if(adaProduk){
         tempat.classList.remove('grid-layout');
         tempat.classList.add('grid-produk');
         tempat.style.removeProperty('display');
         document.querySelector('.grid-produk').innerHTML = produkHtml;
       }else{
         tempat.innerHTML = '';
         tempat.style.removeProperty("gridTemplateColumns");
         tempat.style.removeProperty("columnGap");
         tempat.style.display = "flex";
         tempat.style.height = "70vh";
         tempat.style.alignItems = "center";
         tempat.style.justifyContent = "center";
         tempat.appendChild(newElement);
       }
   }
});

//hyoerlink navbar
let prodNav = ``;
let tempat = document.querySelector('.grid-layout') || document.querySelector('.grid-produk');
document.querySelector('.navHp').addEventListener('click', ()=>{
     prodNav = `
    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/red magic.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk"> Nubia RedMagic 8 Pro Plus Optimus Prime 5G Snapdragon 8 Gen 2 120Hz 6000mAh 165W BNIB Garansi Resmi 1 Tahun</div>
            <div class="harga-produk">Rp14.200.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
      </div>

    <div class="pencarian">
            <div class="foto-produk1">
                <img src="../produk/hp-zteNubiaNeo5G.jpg">
            </div>
            <div class="keterangan-produk">
                <div class="nama-produk">ZTE Nubia Neo 5G</div>
                <div class="harga-produk">Rp2.790.000</div>
                <div class="lokasi-toko">Jakarta Pusat</div>
                <div class="rating">⭐0 | 0 terjual</div>
            </div>
        </div>
    `;
   tempat.classList.remove('grid-layout');
   tempat.style.margin = "15px";
   tempat.innerHTML = prodNav;
});

document.querySelector('.navKendr').addEventListener('click', ()=>{
    prodNav = `
   <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/motor listrik.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Motor Listrik EXOTIC Sprinter Prime Garansi Resmi</div>
            <div class="harga-produk">Rp9.500.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0| 0 terjual</div>
        </div>
    </div>
   `;
   tempat.classList.remove('grid-layout');
   tempat.style.margin = "15px";
   tempat.innerHTML = prodNav;
});

document.querySelector('.navKomp').addEventListener('click', ()=>{
    prodNav = `
    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/keyboard.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Keyboard Mekanikal</div>
            <div class="harga-produk">Rp500.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/MonitorLG.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">LG Curved Monitor 49" UltraWide Dual QHD 5K with USB Type-C™ 49WQ95C-W</div>
            <div class="harga-produk">Rp19.949.000</div>
            <div class="lokasi-toko">Bandung Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/motherboard-Asus.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Asus ROG STRIX Z790-F GAMING WIFI - Intel Motherboard LGA 1700 DDR5</div>
            <div class="harga-produk">Rp7.670.000</div>
            <div class="lokasi-toko">Makassar</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/Mouse-razer.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Razer Naga Pro Modular Wireless Gaming Mouse</div>
            <div class="harga-produk">Rp1.489.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/PSU-Innovation.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">PSU Innovation 400 Watt Bronze plus PowerSupply Terbaru Garansi 8Tahun</div>
            <div class="harga-produk">Rp235.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/speaker.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Simbadda Speaker CST 5000 N+ - HItam</div>
            <div class="harga-produk">Rp800.000</div>
            <div class="lokasi-toko">Jakarta Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/chip ryzen 5.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">AMD Ryzen 5 5600G 3.9GHz 6 CPU cores 12 threads 7 GPU cores BOX</div>
            <div class="harga-produk">Rp1.949.000</div>
            <div class="lokasi-toko">Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/casing komputer.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Gamemax Spark Mini Casing Komputer Mini / PC Case Mini</div>
            <div class="harga-produk">Rp610.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/headphone.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Redragon Gaming Headphone RGB AUX HYLAS - H260RGB - Putih</div>
            <div class="harga-produk">Rp216.000</div>
            <div class="lokasi-toko">Semarang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/fan processor.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">FAN PROCESSOR GAMING ALSEYE AM-90 / HEATSING PROCESSOR ALSEYE AM-90</div>
            <div class="harga-produk">Rp229.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/ram ddr4 8gb.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">CUBE GAMING DDR4 3200MHz PC25600 Dual Channel 32GB / RAM DDR4 32GB</div>
            <div class="harga-produk">Rp865.000</div>
            <div class="lokasi-toko">Yogyakarta</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/rtx.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">ASUS TUF GAMING RTX 3070 TI OC 8GB GDDR6X 256-BIT</div>
            <div class="harga-produk">Rp8.250.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
      </div>
   `;
   tempat.classList.remove('grid-layout');
   tempat.style.margin = "15px";
   tempat.innerHTML = prodNav;
});

document.querySelector('.navTv').addEventListener('click', ()=>{
    prodNav = `
   <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/tv.jpg" />
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">SONY Bravia LED X90L 4K HDR Google TV 85 Inch XR-85X90L - Unit Only</div>
            <div class="harga-produk">Rp44.999.000</div>
            <div class="lokasi-toko">Semarang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
        </div>
    <div class="pencarian">
        <div class="foto-produk1">
            <img src="../produk/tv led.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Changhong 32 Inch Newest Android 11 Smart TV Digital LED TV L32G7N</div>
            <div class="harga-produk">Rp1.735.000</div>
            <div class="lokasi-toko">Jakarta Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>
  
   `;
   tempat.classList.remove('grid-layout');
   tempat.style.margin = "15px";
   tempat.innerHTML = prodNav;
});

//interaksi tombol
let follow = document.querySelector('.folbut');
    follow.addEventListener('click', ()=>{
        if(follow.classList.contains('folbut')){
            follow.classList.add('folbutClick');
            follow.classList.remove('folbut');
            follow.innerText = 'followed';
        }else if(!follow.classList.contains('folbut')){
            follow.classList.add('folbut');
            follow.classList.remove('folbutClick');
            follow.innerText = 'follow';
        }
    });
let beli = document.querySelector('.tmbl-beli');
    beli.addEventListener('click',()=>{
        if(beli.classList.contains('tmbl-beli')){
            alert('Pesanan Anda Sedang Diproses');
            beli.classList.add('tmbl-beliClick');
            beli.classList.remove('tmbl-beli');
            beli.innerText = 'Di Beli';
        }else if(!follow.classList.contains('tmbl-beli')){
            alert('Pesanan Anda Dibatalkan');
            beli.classList.add('tmbl-beli');
            beli.classList.remove('tmbl-beliClick');
            beli.innerText = 'Beli';
        }
    });
let quantity = document.querySelector('.quantity');
    if(quantity.innerText < 1){
        quantity.style.display = 'none';
    }else{
        quantity.style.display = 'flex';
    }
    quantity = quantity.innerText;
let newQuan = document.querySelector('.quantity');
let keranjang = document.querySelector('.tmbl-keranjang');
keranjang.addEventListener('click',()=>{
    if(keranjang.classList.contains('tmbl-keranjang')){
        alert('Produk Telah Ditambahkan Ke Keranjang');
        keranjang.classList.add('tmbl-keranjangClick');
        keranjang.classList.remove('tmbl-keranjang');
        keranjang.innerText = 'Ditambahkan Ke Keranjang';
        quantity = Number(Number(quantity) + 1);
        if(quantity < 1){
            newQuan.style.display = 'none';
        }else if (quantity > 0){
            newQuan.style.display = 'flex';
        }
        newQuan.innerText = quantity; 
    }else if(!follow.classList.contains('tmbl-keranjang')){
        alert('Membatalkan Penambahan Produk Ke Keranjang...');
        keranjang.classList.add('tmbl-keranjang');
        keranjang.classList.remove('tmbl-keranjangClick');
        keranjang.innerHTML = `<img src="../icon/add-to-cart.png">
        Keranjang`;
        quantity = Number(Number(quantity) - 1);
        if(quantity < 1){
            newQuan.style.display = 'none';
        }else if (quantity > 0){
            newQuan.style.display = 'flex';
        }
        newQuan.innerText = quantity; 
    }
});
let deskripsi = document.querySelector('.deskripsi');
deskripsi.addEventListener('click', ()=>{
    if(deskripsi.classList.contains('deskripsi')){
        deskripsi.classList.add('tampilkan-semua');
        deskripsi.classList.remove('deskripsi');
    }else if(deskripsi.classList.contains('tampilkan-semua')){
        deskripsi.classList.add('deskripsi');
        deskripsi.classList.remove('tampilkan-semua');
    }
});