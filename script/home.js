import {produks} from './barang/produk.js';

// generate produk
let produkHtml =``; 
produks.forEach((produk)=>{
   const {prdk, id, nama, harga, rating, lokasi, img} = produk;
   const {bintang, terjual} = rating;
   produkHtml += `
   <div class="product" onclick="window.location.href='${prdk}';" data-nama-produk="${nama}">
       <div class="foto-produk">
       <img src="${img}" />
       </div>
       <div class="keterangan-produk">
       <div class="nama-produk">${nama}</div>
       <div class="harga-produk">Rp${harga.toLocaleString('id-ID')}</div>
       <div class="lokasi-toko">${lokasi}</div>
       <div class="rating">⭐${bintang} | ${terjual} terjual</div>
       </div>
   </div>
   `;
});
document.querySelector('.prdk-bebas').innerHTML = produkHtml;

//search produk menggunakan button
document.querySelector('.searchButton').addEventListener('click', () =>{
    let input = document.querySelector('.searchBar').value;
    let cari = input.toLowerCase();
    let produkHtml= ``;
    let adaProduk = false;
    produks.forEach(produk => {
        const {prdk, nama, harga, rating, lokasi, img} = produk;
        const {bintang, terjual} = rating;
        const kondisi = produk.nama.toLowerCase().includes(cari);
        if(kondisi){
            adaProduk = true;
            produkHtml += `
            <div class="pencarian" onclick="window.location.href='${prdk}';" data-nama-produk="${nama}">
                <div class="foto-produk">
                <img src="${img}" />
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
        document.querySelector('.section').innerHTML = produkHtml;
    }else{
        document.querySelector('.section').innerHTML = `
        <h1 class="kosong">Produk Tidak Ditemukan</h1>
        `;
    }
    document.querySelector('.footer').style.display = 'none';
});

//search produk menggunakan enter
document.querySelector('.searchBar').addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        let input = document.querySelector('.searchBar').value;
        let cari = input.toLowerCase();
        let produkHtml= ``;
        let adaProduk = false;
        produks.forEach(produk => {
            const {prdk, nama, harga, rating, lokasi, img} = produk;
            const {bintang, terjual} = rating;
            const kondisi = produk.nama.toLowerCase().includes(cari);
            if(kondisi){
                adaProduk = true;
                produkHtml += `
                <div class="pencarian" onclick="window.location.href='${prdk}';" data-nama-produk="${nama}">
                    <div class="foto-produk">
                    <img src="${img}" />
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
            document.querySelector('.section').innerHTML = produkHtml;
        }else{
            document.querySelector('.section').innerHTML = `
            <h1 class="kosong">Produk Tidak Ditemukan</h1>
            `;
        }
        document.querySelector('.footer').style.display = 'none';
    }
});

function changeBanner() {
    const bannerImg = document.querySelector('.banner-img');
    const bnnrPaths = [
        "/banner/banner-1.png",
        "/banner/banner-2.png",
        "/banner/banner-3.png",
        "/banner/banner-4.png"
    ];
    let bnnrIndex = 0;
    function nextBnnr() {
        let gmbr = `<img src="${bnnrPaths[bnnrIndex]}"/>`;
        bannerImg.innerHTML = gmbr;
        bnnrIndex = (bnnrIndex + 1) % bnnrPaths.length;
        setTimeout(nextBnnr, 4000);
    }
    nextBnnr();
}

document.addEventListener('DOMContentLoaded', () => {
    changeBanner();
});

/*
let bannerSrc = [
    "/banner/banner-1.png",
    "/banner/banner-2.png",
    "/banner/banner-3.png",
    "/banner/banner-4.png"
];
let jeda = 3000;
setInterval(()=>{
    setTimeout(()=>{
        document.querySelector('.banner-img').innerHTML = `<img src="${bannerSrc[0]}"/>`;
    }, jeda);
    setTimeout(()=>{
        document.querySelector('.banner-img').innerHTML = `<img src="${bannerSrc[1]}"/>`;
    }, jeda*2);
    setTimeout(()=>{
        document.querySelector('.banner-img').innerHTML = `<img src="${bannerSrc[2]}"/>`;
    }, jeda*3);
    setTimeout(()=>{
        document.querySelector('.banner-img').innerHTML = `<img src="${bannerSrc[3]}"/>`;
    }, jeda*4);
}, jeda * 5)
*/
let prodNav = ``;
document.querySelector('.navHp').addEventListener('click', ()=>{
     prodNav = `
    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/red magic.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk"> Nubia RedMagic 8 Pro Plus Optimus Prime 5G Snapdragon 8 Gen 2 120Hz 6000mAh 165W BNIB Garansi Resmi 1 Tahun</div>
            <div class="harga-produk">Rp14.200.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
      </div>

    <div class="pencarian">
            <div class="foto-produk">
                <img src="produk/hp-zteNubiaNeo5G.jpg">
            </div>
            <div class="keterangan-produk">
                <div class="nama-produk">ZTE Nubia Neo 5G</div>
                <div class="harga-produk">Rp2.790.000</div>
                <div class="lokasi-toko">Jakarta Pusat</div>
                <div class="rating">⭐0 | 0 terjual</div>
            </div>
        </div>
    `;
   document.querySelector('.footer').style.display = 'none';
   document.querySelector('.section').innerHTML = prodNav;
});

document.querySelector('.navKendr').addEventListener('click', ()=>{
    prodNav = `
   <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/motor listrik.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Motor Listrik EXOTIC Sprinter Prime Garansi Resmi</div>
            <div class="harga-produk">Rp9.500.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0| 0 terjual</div>
        </div>
    </div>
   `;
   document.querySelector('.footer').style.display = 'none';
   document.querySelector('.section').innerHTML = prodNav;
});

document.querySelector('.navKomp').addEventListener('click', ()=>{
    prodNav = `
    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/keyboard.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Keyboard Mekanikal</div>
            <div class="harga-produk">Rp500.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/MonitorLG.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">LG Curved Monitor 49" UltraWide Dual QHD 5K with USB Type-C™ 49WQ95C-W</div>
            <div class="harga-produk">Rp19.949.000</div>
            <div class="lokasi-toko">Bandung Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/motherboard-Asus.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Asus ROG STRIX Z790-F GAMING WIFI - Intel Motherboard LGA 1700 DDR5</div>
            <div class="harga-produk">Rp7.670.000</div>
            <div class="lokasi-toko">Makassar</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/Mouse-razer.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Razer Naga Pro Modular Wireless Gaming Mouse</div>
            <div class="harga-produk">Rp1.489.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/PSU-Innovation.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">PSU Innovation 400 Watt Bronze plus PowerSupply Terbaru Garansi 8Tahun</div>
            <div class="harga-produk">Rp235.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/speaker.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Simbadda Speaker CST 5000 N+ - HItam</div>
            <div class="harga-produk">Rp800.000</div>
            <div class="lokasi-toko">Jakarta Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/chip ryzen 5.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">AMD Ryzen 5 5600G 3.9GHz 6 CPU cores 12 threads 7 GPU cores BOX</div>
            <div class="harga-produk">Rp1.949.000</div>
            <div class="lokasi-toko">Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/casing komputer.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Gamemax Spark Mini Casing Komputer Mini / PC Case Mini</div>
            <div class="harga-produk">Rp610.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/headphone.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Redragon Gaming Headphone RGB AUX HYLAS - H260RGB - Putih</div>
            <div class="harga-produk">Rp216.000</div>
            <div class="lokasi-toko">Semarang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/fan processor.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">FAN PROCESSOR GAMING ALSEYE AM-90 / HEATSING PROCESSOR ALSEYE AM-90</div>
            <div class="harga-produk">Rp229.000</div>
            <div class="lokasi-toko">Tangerang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/ram ddr4 8gb.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">CUBE GAMING DDR4 3200MHz PC25600 Dual Channel 32GB / RAM DDR4 32GB</div>
            <div class="harga-produk">Rp865.000</div>
            <div class="lokasi-toko">Yogyakarta</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>

    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/rtx.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">ASUS TUF GAMING RTX 3070 TI OC 8GB GDDR6X 256-BIT</div>
            <div class="harga-produk">Rp8.250.000</div>
            <div class="lokasi-toko">Kota Bandung</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
      </div>
   `;
   document.querySelector('.footer').style.display = 'none';
   document.querySelector('.section').innerHTML = prodNav;
});

document.querySelector('.navTv').addEventListener('click', ()=>{
    prodNav = `
   <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/tv.jpg" />
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">SONY Bravia LED X90L 4K HDR Google TV 85 Inch XR-85X90L - Unit Only</div>
            <div class="harga-produk">Rp44.999.000</div>
            <div class="lokasi-toko">Semarang</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
        </div>
    <div class="pencarian">
        <div class="foto-produk">
            <img src="produk/tv led.jpg">
        </div>
        <div class="keterangan-produk">
            <div class="nama-produk">Changhong 32 Inch Newest Android 11 Smart TV Digital LED TV L32G7N</div>
            <div class="harga-produk">Rp1.735.000</div>
            <div class="lokasi-toko">Jakarta Pusat</div>
            <div class="rating">⭐0 | 0 terjual</div>
        </div>
    </div>
  
   `;
   document.querySelector('.footer').style.display = 'none';
   document.querySelector('.section').innerHTML = prodNav;
});

let quantity = document.querySelector('.quantity');
    if(quantity.innerText < 1){
        quantity.style.display = 'none';
    }