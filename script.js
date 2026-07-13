/* ===================================================
   MAPPING NAMA PRODUK -> ID ELEMEN STOK/TOMBOL
   =================================================== */
const stokElementId = {
    'Minimalist pink': 'minimalist-pink',
    'Classic black': 'classic-black',
    'minimalis white': 'minimalis-white',
    'minimalis red': 'minimalis-red',
    'Butter Bloom': 'butter-bloom',
    'Tumbler daily': 'tumbler-daily',
    'Urban Bottle': 'urban-bottle',
    'Flow Bottle': 'flow-bottle',
    'Breeze Bottle': 'breeze-bottle',
    'Motion Bottle': 'motion-bottle',
    'Luna Bottle': 'luna-bottle',
    'Pink Gradient Bottle': 'pink-gradient-bottle',
    'Grey Series': 'grey-series',
    'Glow Bottle': 'glow-bottle'
};

/* ===================================================
   TAMBAHAN: MAPPING BIAYA TAMBAHAN PER UKURAN
   =================================================== */
const tambahanUkuran = {
    '300ml': 0,
    '500ml': 15000,
    '700ml': 30000,
    '900ml': 45000
};

function labelUkuran(ukuran) {
    return ukuran.replace('ml', ' ml');
}

function updateTampilanStok(namaProduk) {
    const cards = document.querySelectorAll('#productGrid .product-card');
    let cardTarget = null;
    cards.forEach(card => {
        const judul = card.querySelector('h3').innerText.trim();
        if (judul === namaProduk) cardTarget = card;
    });
    if (!cardTarget) return;

    const stokSisa = parseInt(cardTarget.getAttribute('data-stok'));
    const key = stokElementId[namaProduk];
    const stokLabel = document.getElementById('stok-' + key);
    const tombolBeli = document.getElementById('btn-' + key);

    stokLabel.classList.remove('stok-aman', 'stok-menipis', 'stok-habis');

    if (stokSisa <= 0) {
        stokLabel.innerText = 'Stok Habis';
        stokLabel.classList.add('stok-habis');
        tombolBeli.innerText = 'Stok Habis';
        tombolBeli.disabled = true;
    } else if (stokSisa <= 20) {
        stokLabel.innerText = 'Stok: ' + stokSisa;
        stokLabel.classList.add('stok-menipis');
    } else {
        stokLabel.innerText = 'Stok: ' + stokSisa;
        stokLabel.classList.add('stok-aman');
    }
}

/* ===================================================
   SISTEM FILTER KATEGORI (SEDOTAN / BIASA)
   =================================================== */
function filterKategori(kategori, btnEl) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');

    const produkList = document.querySelectorAll('#productGrid .product-card');
    let jumlahTampil = 0;

    produkList.forEach(card => {
        const kategoriProduk = card.getAttribute('data-kategori');
        if (kategori === 'semua' || kategoriProduk === kategori) {
            card.classList.remove('hidden-item');
            jumlahTampil++;
        } else {
            card.classList.add('hidden-item');
        }
    });

    document.getElementById('noProductMsg').style.display = jumlahTampil === 0 ? 'block' : 'none';
}

/* ===================================================
   SISTEM KERANJANG & CHECKOUT
   (Mendukung UKURAN: 300ml / 500ml / 700ml / 900ml)
   =================================================== */

let keranjang = [];

function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}

function tambahKeKeranjang(namaProduk, hargaDasar, key) {
    const cards = document.querySelectorAll('#productGrid .product-card');
    let cardTarget = null;
    cards.forEach(card => {
        const judul = card.querySelector('h3').innerText.trim();
        if (judul === namaProduk) cardTarget = card;
    });

    const stokSisa = cardTarget ? parseInt(cardTarget.getAttribute('data-stok')) : 0;

    // ambil ukuran yang dipilih user pada produk ini
    const selectUkuran = document.getElementById('ukuran-' + key);
    const ukuran = selectUkuran ? selectUkuran.value : '500ml';
    const hargaFinal = hargaDasar + (tambahanUkuran[ukuran] || 0);

    // id unik: kombinasi nama produk + ukuran (agar ukuran berbeda jadi baris terpisah di keranjang)
    const itemId = namaProduk + '||' + ukuran;

    // total stok yang sudah diambil untuk produk ini (semua ukuran digabung, karena stok fisik sama)
    const totalDiKeranjang = keranjang
        .filter(item => item.nama === namaProduk)
        .reduce((total, item) => total + item.jumlah, 0);

    if (stokSisa <= totalDiKeranjang) {
        alert('Maaf, stok "' + namaProduk + '" tidak mencukupi.');
        return;
    }

    const itemAda = keranjang.find(item => item.id === itemId);
    if (itemAda) {
        itemAda.jumlah++;
    } else {
        keranjang.push({
            id: itemId,
            nama: namaProduk,
            ukuran: ukuran,
            harga: hargaFinal,
            jumlah: 1
        });
    }

    if (cardTarget) {
        cardTarget.setAttribute('data-stok', stokSisa - 1);
        updateTampilanStok(namaProduk);
    }

    renderKeranjang();
    bukaKeranjang();
}

function ubahJumlah(itemId, perubahan) {
    const item = keranjang.find(i => i.id === itemId);
    if (!item) return;

    const namaProduk = item.nama;
    const cards = document.querySelectorAll('#productGrid .product-card');
    let cardTarget = null;
    cards.forEach(card => {
        const judul = card.querySelector('h3').innerText.trim();
        if (judul === namaProduk) cardTarget = card;
    });

    if (perubahan > 0) {
        const stokSisa = cardTarget ? parseInt(cardTarget.getAttribute('data-stok')) : 0;
        if (stokSisa <= 0) {
            alert('Stok "' + namaProduk + '" sudah habis.');
            return;
        }
        if (cardTarget) {
            cardTarget.setAttribute('data-stok', stokSisa - 1);
            updateTampilanStok(namaProduk);
        }
    } else {
        if (cardTarget) {
            const stokSisa = parseInt(cardTarget.getAttribute('data-stok'));
            cardTarget.setAttribute('data-stok', stokSisa + 1);
            updateTampilanStok(namaProduk);
        }
    }

    item.jumlah += perubahan;
    if (item.jumlah <= 0) {
        keranjang = keranjang.filter(i => i.id !== itemId);
    }
    renderKeranjang();
}

function hapusItem(itemId) {
    const item = keranjang.find(i => i.id === itemId);
    if (item) {
        const cards = document.querySelectorAll('#productGrid .product-card');
        let cardTarget = null;
        cards.forEach(card => {
            const judul = card.querySelector('h3').innerText.trim();
            if (judul === item.nama) cardTarget = card;
        });
        if (cardTarget) {
            const stokSisa = parseInt(cardTarget.getAttribute('data-stok'));
            cardTarget.setAttribute('data-stok', stokSisa + item.jumlah);
            updateTampilanStok(item.nama);
        }
    }
    keranjang = keranjang.filter(i => i.id !== itemId);
    renderKeranjang();
}

function hitungTotalBarang() {
    return keranjang.reduce((total, item) => total + item.jumlah, 0);
}

function hitungTotalHarga() {
    return keranjang.reduce((total, item) => total + (item.harga * item.jumlah), 0);
}

function renderKeranjang() {
    document.getElementById('cart-count').innerText = hitungTotalBarang();

    const container = document.getElementById('cartItemsContainer');
    const btnCheckout = document.getElementById('btnCheckout');

    if (keranjang.length === 0) {
        container.innerHTML = '<p class="cart-empty">Keranjang Anda masih kosong.</p>';
        btnCheckout.disabled = true;
    } else {
        container.innerHTML = keranjang.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.nama}</p>
                    <p class="cart-item-size">Ukuran: ${labelUkuran(item.ukuran)}</p>
                    <p class="cart-item-price">${formatRupiah(item.harga)}</p>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="ubahJumlah('${item.id}', -1)">-</button>
                    <span class="qty-value">${item.jumlah}</span>
                    <button class="qty-btn" onclick="ubahJumlah('${item.id}', 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="hapusItem('${item.id}')">Hapus</button>
            </div>
        `).join('');
        btnCheckout.disabled = false;
    }

    document.getElementById('cartTotalPrice').innerText = formatRupiah(hitungTotalHarga());
}

function bukaKeranjang() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
}

function tutupKeranjang() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}

function bukaCheckout() {
    if (keranjang.length === 0) return;

    const modal = document.getElementById('checkoutModalContent');
    const ongkir = 15000;
    const subtotal = hitungTotalHarga();
    const totalAkhir = subtotal + ongkir;

    modal.innerHTML = `
        <h2>Checkout Pesanan</h2>

        <label for="namaPembeli">Nama Lengkap</label>
        <input type="text" id="namaPembeli" placeholder="Masukkan nama Anda">

        <label for="alamatPembeli">Alamat Pengiriman</label>
        <input type="text" id="alamatPembeli" placeholder="Masukkan alamat lengkap">

        <label for="noHpPembeli">No. HP / WhatsApp</label>
        <input type="text" id="noHpPembeli" placeholder="Contoh: 08123456789">

        <label for="metodeBayar">Metode Pembayaran</label>
        <select id="metodeBayar">
            <option value="Transfer Bank">Transfer Bank</option>
            <option value="COD">COD (Bayar di Tempat)</option>
            <option value="E-Wallet">E-Wallet (OVO/DANA/GoPay)</option>
        </select>

        <div class="checkout-summary">
            ${keranjang.map(item => `
                <div class="checkout-summary-row">
                    <span>${item.nama} (${labelUkuran(item.ukuran)}) x${item.jumlah}</span>
                    <span>${formatRupiah(item.harga * item.jumlah)}</span>
                </div>
            `).join('')}
            <div class="checkout-summary-row">
                <span>Ongkos Kirim</span>
                <span>${formatRupiah(ongkir)}</span>
            </div>
            <div class="checkout-summary-row checkout-summary-total">
                <span>Total Bayar</span>
                <span>${formatRupiah(totalAkhir)}</span>
            </div>
        </div>

        <div class="checkout-actions">
            <button class="btn-cancel-checkout" onclick="tutupCheckout()">Batal</button>
            <button class="btn-confirm-checkout" onclick="konfirmasiCheckout(${totalAkhir})">Buat Pesanan</button>
        </div>
    `;

    document.getElementById('checkoutOverlay').classList.add('open');
}

function tutupCheckout() {
    document.getElementById('checkoutOverlay').classList.remove('open');
}

function konfirmasiCheckout(totalAkhir) {
    const nama = document.getElementById('namaPembeli').value.trim();
    const alamat = document.getElementById('alamatPembeli').value.trim();
    const noHp = document.getElementById('noHpPembeli').value.trim();

    if (!nama || !alamat || !noHp) {
        alert('Mohon lengkapi nama, alamat, dan no. HP terlebih dahulu.');
        return;
    }

    const modal = document.getElementById('checkoutModalContent');
    modal.innerHTML = `
        <div class="success-box">
            <div class="icon">✅</div>
            <h2>Pesanan Berhasil Dibuat!</h2>
            <p>Terima kasih, <strong>${nama}</strong>. Pesanan Anda senilai <strong>${formatRupiah(totalAkhir)}</strong> akan segera diproses dan dikirim ke:</p>
            <p>${alamat}</p>
            <p>Kami akan menghubungi Anda di ${noHp} untuk konfirmasi.</p>
            <button class="btn-close-success" onclick="selesaiCheckout()">Tutup</button>
        </div>
    `;

    keranjang = [];
    renderKeranjang();
}

function selesaiCheckout() {
    tutupCheckout();
    tutupKeranjang();
}
