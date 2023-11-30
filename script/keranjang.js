import {produks} from './barang/produk.js';

export let keranjang= [];

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