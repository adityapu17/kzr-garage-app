// --- DATABASE SPAREPART KZR LENGKAP & DETAIL ---
const PARTS_DATA = [
  // CVT & TRANSMISI
  { name: "V-Belt CVT KZR Original", code: "23100-KZR-601", cat: "CVT", price: "± Rp 135.000", sub: "K97 (PCX 150) / KWN", note: "Sabuk ori KZR bawaan tebal. Kalau pakai K97 lebih panjang ±1cm, top speed naik tapi tarikan awal sedikit melorot." },
  { name: "Roller Standard (Set 6pcs)", code: "22123-KZR-600", cat: "CVT", price: "± Rp 55.000", sub: "2DP (NMAX 13g) / 54P (Xeon 10g) / K44 (15g)", note: "Berat standar KZR: 18 gram. Buat harian stop-and-go dianjurkan racik silang 15g + 18g." },
  { name: "Kampas Ganda Set", code: "22535-KZR-600", cat: "CVT", price: "± Rp 140.000", sub: "K97 (PCX 150) / KWN (Vario Old 125)", note: "Substitusi plug & play pakai K97 (PCX 150) karena garis tapak kampasnya lebih panjang, meminimalisir gredek." },
  { name: "Mangkok Kampas Ganda", code: "22100-KWN-900", cat: "CVT", price: "± Rp 115.000", sub: "K97 / K44 (butuh sesuaikan)", note: "Bawaan pabrik licin. Sering dikartel / dibolongin mekanik buat buang debu kampas." },
  { name: "Piece Slide / Ramp Plate (3pcs)", code: "22011-KWN-900", cat: "CVT", price: "± Rp 15.000", sub: "K44 / K97", note: "Karet slider penahan rumah roller. Jika longgar bikin bunyi kletek-kletek dari area CVT." },
  { name: "Pulley Depan Rumah Roller (Face Comp)", code: "22110-KZR-600", cat: "CVT", price: "± Rp 75.000", sub: "KWN", note: "Sudut kemiringan standar 15°. Sering di-bubut kerok jalur roller + ubah sudut jadi 13.8°/14°." },
  { name: "Kipas Pulley Depan (Drive Face)", code: "22102-KZR-600", cat: "CVT", price: "± Rp 45.000", sub: "KWN", note: "Pastikan gerigi as kruk as dan kipas rapat pas dipasang sebelum dikencangkan mur 22mm." },
  { name: "Seal Kruk As Kiri (CVT)", code: "91202-KWN-901", cat: "CVT", price: "± Rp 20.000", sub: "N/A (Gunakan Nok/Ori)", note: "Ukuran 20.8 x 52 x 7.5. Kalau bocor oli bakal melumasi roller & v-belt (motor slip parah)." },
  { name: "Seal Secondary Sliding Sheave (2pcs)", code: "91211-KN7-671", cat: "CVT", price: "± Rp 18.000", sub: "K44 / Beat FI", note: "Seal o-ring di pulley belakang. Cegah gemuk/grease CVT muncrat ke mangkok ganda." },
  { name: "Per CVT Belakang", code: "22401-KZR-600", cat: "CVT", price: "± Rp 35.000", sub: "PCX Thailand / Vario 150 (K36)", note: "Kekerasan standar 1000 RPM. Pakai per PCX CBU Thailand jika ingin putaran tengah lebih padat." },
  { name: "Oli Gardan / Gear Oil 120ml", code: "08294-M99-Z8YN1", cat: "CVT", price: "± Rp 17.000", sub: "Motul Gear / Shell Spirax", note: "Kapasitas isi penggantian rutin: 120 ml (setelah dibongkar total: 140 ml)." },

  // MESIN & PENGAPIAN
  { name: "Busi NGK Nickel Standard", code: "CPR9EA-9", cat: "Mesin", price: "± Rp 25.000", sub: "Denso U27EPR9", note: "Celah gap busi standar: 0.80 - 0.90 mm." },
  { name: "Busi Iridium NGK Laser", code: "CPR9EAIX-9", cat: "Mesin", price: "± Rp 100.000", sub: "Denso Iridium IU27", note: "Api lebih fokus, pembakaran bersih, usia pakai hingga 30.000 KM." },
  { name: "Filter Udara Kertas Basah", code: "17210-KZR-600", cat: "Mesin", price: "± Rp 60.000", sub: "KZR-601", note: "Filter tipe viskos (beroli). Jangan pernah ditiup kompresor! Wajib ganti tiap 12.000–16.000 KM." },
  { name: "Oli Mesin SPX2 Matik 0.8L", code: "08234-M99-K1LN3", cat: "Mesin", price: "± Rp 65.000", sub: "Shell Advance AX7 / Enduro Matic", note: "Kapasitas berkala 0.8 Liter (10W-30 JASO MB). Jika belah mesin: 0.9 Liter." },
  { name: "Piston Kit Standard (52.4mm)", code: "13101-KZR-600", cat: "Mesin", price: "± Rp 160.000", sub: "Pen 13mm", note: "Kit termasuk Piston, Ring Piston, Pin, dan Klip. Ukuran pen piston 13 mm." },
  { name: "Blok Silinder (Cylinder Comp)", code: "12100-KZR-600", cat: "Mesin", price: "± Rp 280.000", sub: "K59 (Vario 150 - butuh bore up)", note: "Bahan linning standar KZR bisa di-korter ulang (oversize 25 s/d 100)." },
  { name: "Packing Head Cylinder (Tembaga/Seng)", code: "12251-KZR-601", cat: "Mesin", price: "± Rp 30.000", sub: "K59 (jika bore up)", note: "Disarankan ganti baru tiap kali bongkar head biar gak bocor kompresi/coolant." },
  { name: "Packing Blok Bawah (Kertas)", code: "12191-KZR-600", cat: "Mesin", price: "± Rp 12.000", sub: "KWN", note: "Bersihkan sisa packing lama sampai mulus sebelum pasang yang baru." },
  { name: "Seal Payung Klep / Valve Seal (2pcs)", code: "12209-KL8-742", cat: "Mesin", price: "± Rp 35.000", sub: "Supra X 125 / Grand", note: "Penyebab utama motor ngasap tipis putih pas mesin dingin." },
  { name: "Thermostat Radiator", code: "19300-KRM-840", cat: "Mesin", price: "± Rp 85.000", sub: "CB150R / Vario 110 Techno", note: "Membuka di suhu ~80°C. Kalau macet tertutup, mesin bakal overheat parah." },
  { name: "Cairan Radiator / Coolant 1L", code: "08C89-M55-01S", cat: "Mesin", price: "± Rp 25.000", sub: "Engine Ice / Seiken / Prestone", note: "Kapasitas total sistem pendingin Vario 125: ± 0.48 Liter (termasuk tabung reservoir)." },

  // SENSORS & INJEKSI (PGM-FI)
  { name: "Injektor Assembly (6 Hole)", code: "16450-KZR-601", cat: "Sensors & FI", price: "± Rp 175.000", sub: "K36 (Vario 150 8-Hole) / CB150R", note: "Debit ± 90cc/menit. Upgrade ke injektor Vario 150 (K36) jika mesin sudah bore up." },
  { name: "Sensor ECT (Engine Coolant Temp)", code: "37870-KZR-601", cat: "Sensors & FI", price: "± Rp 75.000", sub: "Supra X 125 FI / Vario 150", note: "Terletak di blok silinder kotoran/kerak coolant bisa bikin sensor ini ngaco (MIL Kedip 7)." },
  { name: "Fuel Pump Assu (Pompa Bensin)", code: "16700-KZR-601", cat: "Sensors & FI", price: "± Rp 380.000", sub: "K25 (Beat FI)", note: "Tekanan standar normal rotak bensin minimal 40 PSI (294 kPa)." },
  { name: "Filter Pampers Fuel Pump", code: "16707-K97-T01", cat: "Sensors & FI", price: "± Rp 25.000", sub: "K25 / Revo FI", note: "Filter kasa dalam tangki bensin. Ganti jika kotor/berwarna hitam agar rotak awet." },
  { name: "TPS Sensor Only (Throttle Position)", code: "16060-KWN-901", cat: "Sensors & FI", price: "± Rp 130.000", sub: "Keihin Throttle Body Set", note: "Gejala rusak: Gas berebet di RPM tengah/nahan saat ditarik. (MIL Kedip 8)." },

  // KAKI-KAKI & PENGEREMAN
  { name: "Kampas Rem Depan (Caliper Tokico)", code: "06455-KVB-T01", cat: "Kaki-kaki & Rem", price: "± Rp 55.000", sub: "Nissin Samura / Bendix MD25", note: "Tipe kampas disk brake depan 1 piston / 2 piston CBS." },
  { name: "Kampas Rem Belakang (Tromol)", code: "43125-KWN-901", cat: "Kaki-kaki & Rem", price: "± Rp 60.000", sub: "KVB / K44", note: "Jangan biarkan habis, bisa mengikis permukaan tromol velg belakang." },
  { name: "Master Rem Depan Assu", code: "45510-KZR-601", cat: "Kaki-kaki & Rem", price: "± Rp 210.000", sub: "KVB", note: "Gunakan minyak rem DOT 3 atau DOT 4." },
  { name: "Comsteer Set (Bantalan Kemudi)", code: "06535-GN5-505", cat: "Kaki-kaki & Rem", price: "± Rp 95.000", sub: "Bambu Aftermarket (Daytona)", note: "Gejala stang berat/nyangkut di tengah saat belok artinya komstir sudah aus/coak." },
  { name: "Seal Shock Depan (Set)", code: "51490-KRM-852", cat: "Kaki-kaki & Rem", price: "± Rp 35.000", sub: "Grand / Supra", note: "Kapasitas oli shock depan per batang: ± 62 ml." },

  // BODI, LIGHTING & KELISTRIKAN
  { name: "Aki Kering GTZ6V / YTZ6V (12V 5Ah)", code: "31500-KZR-601", cat: "Bodi & Lampu", price: "± Rp 240.000", sub: "GS Astra GTZ6V / Motobatt MTZ6S", note: "Wajib aki minimal 5Ah - 6Ah karena sistem starter ACG menyedot daya awal besar." },
  { name: "Kiprok / Regulator Rectifier", code: "31600-KZR-601", cat: "Bodi & Lampu", price: "± Rp 250.000", sub: "N/A", note: "Menyuplai pengisian aki & lampu. Tegangan pengisian normal saat mesin nyala: 13.5V - 14.5V." },
  { name: "Bohlam Lampu Depan (H4 35/35W)", code: "34901-KVR-601", cat: "Bodi & Lampu", price: "± Rp 30.000", sub: "Osram HS1 35W / LED AC-DC", note: "Vario 125 Old KZR pakai 2 bohlam depan kaki 1 / HS1." },
  { name: "Relay Starter / Solenoid Utama", code: "38501-KWN-901", cat: "Bodi & Lampu", price: "± Rp 45.000", sub: "Relay 4 Pin Honda", note: "Jika cetek-cetek saat tombol stater dipencet padahal aki normal, cek relay ini." }
];

const TORQUE_DATA = [
  { item: "Nut Pulley Depan (Kipas Drive Face)", torque: "108 Nm (11.0 kgf.m)", key: "Kunci Sock 22", cat: "CVT" },
  { item: "Nut Clutch Bell (Mangkok Belakang)", torque: "49 Nm (5.0 kgf.m)", key: "Kunci Sock 19", cat: "CVT" },
  { item: "Baut Cover Bak CVT", torque: "10 Nm (1.0 kgf.m)", key: "Kunci T 8", cat: "CVT" },
  { item: "Baut Tap Oli Gardan", torque: "13 Nm (1.3 kgf.m)", key: "Kunci Sock 12", cat: "CVT" },
  { item: "Baut Tap Oli Mesin Bawah", torque: "24 Nm (2.4 kgf.m)", key: "Kunci Sock 12", cat: "Mesin" },
  { item: "Baut Head Cylinder (4 Mur Main)", torque: "27 Nm (2.8 kgf.m)", key: "Kunci Sock 10 (Silang)", cat: "Mesin" },
  { item: "Baut Gear Timing Noken As", torque: "12 Nm (1.2 kgf.m)", key: "Kunci T 8", cat: "Mesin" },
  { item: "Busi Mesin", torque: "16 Nm (1.6 kgf.m)", key: "Kunci Busi 16", cat: "Mesin" },
  { item: "Baut Magnet / Flywheel Rotors", torque: "59 Nm (6.0 kgf.m)", key: "Kunci Sock 17", cat: "Mesin" },
  { item: "Mur As Roda Depan", torque: "59 Nm (6.0 kgf.m)", key: "Kunci Ring 19 & 14", cat: "Kaki-Kaki" },
  { item: "Mur As Roda Belakang", torque: "118 Nm (12.0 kgf.m)", key: "Kunci Sock 24", cat: "Kaki-Kaki" },
  { item: "Baut Caliper Rem Depan", torque: "30 Nm (3.1 kgf.m)", key: "Kunci Bintang L T45 / 12", cat: "Pengereman" }
];

const MIL_DATA = {
  7: { sensor: "ECT (Engine Coolant Temp)", detail: "Masalah pada sensor suhu air radiator. Mesin susah hidup saat dingin atau kipas radiator berputar tanpa henti." },
  8: { sensor: "TP (Throttle Position)", detail: "Sensor posisi skep gas di TB bermasalah. Tarikan motor terasa brebet atau nahan di RPM tertentu." },
  9: { sensor: "IAT (Intake Air Temp)", detail: "Sensor suhu udara masuk di intake manifold bermasalah." },
  11: { sensor: "VS (Vehicle Speed Sensor)", detail: "Sensor kecepatan di girboks terputus/rusak. Spedometer mati & fungsi ISS tidak aktif." },
  12: { sensor: "INJECTOR", detail: "Rangkaian injektor bermasalah/kabel terputus. Mesin bakal mogok total." },
  29: { sensor: "IACV (Idle Air Control Valve)", detail: "Katup pengatur stasioner otomatis bermasalah. Langsam naik-turun atau mudah mati." },
  54: { sensor: "BAS (Bank Angle Sensor)", detail: "Sensor kemiringan bermasalah. Sistem memutus pengapian karena mengira motor dalam posisi rebah/jatuh." }
};

const WIRING_DATA = [
  { color: "Hijau (G)", bg: "bg-emerald-600", func: "Massa / Ground Utama Chassis", detail: "Wajib terhubung sempurna ke rangka & blok mesin." },
  { color: "Merah (R)", bg: "bg-red-600", func: "Positif (+) Utama dari Aki (12V)", detail: "Arus langsung dari sekring utama 20A." },
  { color: "Hitam (Bl)", bg: "bg-slate-700", func: "Positif Output Kunci Kontak (12V ON)", detail: "Menyalakan sistem ECM, Klakson, Sein, dan Panel Meter." },
  { color: "Kuning/Hijau (Y/G)", bg: "bg-yellow-500 text-slate-950", func: "Jalur Switch Rem -> Relay Starter", detail: "Rem harus ditarik agar arus starter menyambung." },
  { color: "Biru/Kuning (Bu/Y)", bg: "bg-blue-600", func: "Pulser Sinyal Pengapian (CKP Sensor)", detail: "Mengirim sinyal posisi kruk as ke ECM." },
  { color: "Cokelat (Br)", bg: "bg-amber-800", func: "Jalur Lampu Senja / Plat Belakang", detail: "Aktif saat lampu utama diputar ke posisi senja." }
];

let activePartCat = 'ALL';

// --- SWITCH TAB NAVIGATION ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('text-orange-500', 'border-b-2', 'border-orange-500');
    btn.classList.add('text-slate-400');
  });

  document.getElementById(`sec-${tabId}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-${tabId}`);
  activeBtn.classList.add('text-orange-500', 'border-b-2', 'border-orange-500');
  activeBtn.classList.remove('text-slate-400');

  if (tabId === 'logbook') renderLogs();
}

// --- CATALOG SPAREPART LOGIC ---
function renderParts(data) {
  document.getElementById('partCount').innerText = `${data.length} item ditemukan`;
  const container = document.getElementById('partsList');
  
  if (data.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs">Part tidak ditemukan dalam database.</div>`;
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2 hover:border-slate-700 transition">
      <div class="flex justify-between items-start gap-2">
        <div>
          <h4 class="font-bold text-slate-100">${item.name}</h4>
          <span class="text-[10px] text-orange-400 font-mono font-medium">${item.price}</span>
        </div>
        <span class="font-mono bg-slate-950 text-slate-300 px-2 py-1 rounded text-[10px] border border-slate-800 shrink-0">${item.code}</span>
      </div>
      
      ${item.sub ? `
        <div class="bg-slate-950/60 px-2.5 py-1.5 rounded-lg border border-slate-800/80 text-[11px]">
          <span class="text-slate-400">Substitusi: </span>
          <span class="text-emerald-400 font-medium">${item.sub}</span>
        </div>
      ` : ''}

      <p class="text-[11px] text-slate-400 leading-relaxed pt-0.5">${item.note}</p>
    </div>
  `).join('');
}

function filterPartCat(cat) {
  activePartCat = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    if (btn.innerText === (cat === 'ALL' ? 'Semua' : cat)) {
      btn.className = "cat-pill bg-slate-800 text-slate-200 px-3 py-1 rounded-lg border border-slate-700 font-medium shrink-0";
    } else {
      btn.className = "cat-pill bg-slate-900 text-slate-400 px-3 py-1 rounded-lg border border-slate-800 shrink-0";
    }
  });
  searchParts();
}

function searchParts() {
  const q = document.getElementById('partSearch').value.toLowerCase();
  const filtered = PARTS_DATA.filter(i => {
    const matchesCat = activePartCat === 'ALL' || i.cat === activePartCat;
    const matchesQuery = i.name.toLowerCase().includes(q) || 
                         i.code.toLowerCase().includes(q) || 
                         (i.sub && i.sub.toLowerCase().includes(q)) ||
                         i.note.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });
  renderParts(filtered);
}

// --- TORQUE FINDER LOGIC ---
function renderTorque(data) {
  const container = document.getElementById('torqueList');
  container.innerHTML = data.map(item => `
    <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
      <div>
        <h4 class="font-bold text-slate-200">${item.item}</h4>
        <p class="text-[11px] text-slate-400 mt-0.5">${item.key} • <span class="text-orange-400">${item.cat}</span></p>
      </div>
      <div class="text-right shrink-0 ml-2">
        <span class="font-mono font-bold bg-slate-950 text-slate-200 px-2.5 py-1 rounded border border-slate-800">${item.torque}</span>
      </div>
    </div>
  `).join('');
}

function searchTorque() {
  const q = document.getElementById('torqueSearch').value.toLowerCase();
  const filtered = TORQUE_DATA.filter(i => i.item.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q) || i.key.toLowerCase().includes(q));
  renderTorque(filtered);
}

// --- LOGBOOK SERVIS LOGIC ---
function getLogs() {
  return JSON.parse(localStorage.getItem('kzr_logs') || '[]');
}

function saveLog(e) {
  e.preventDefault();
  const title = document.getElementById('logTitle').value;
  const km = document.getElementById('logKm').value;
  const cost = document.getElementById('logCost').value || '0';
  const note = document.getElementById('logNote').value;

  const logs = getLogs();
  logs.unshift({
    id: Date.now(),
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    title, km, cost, note
  });

  localStorage.setItem('kzr_logs', JSON.stringify(logs));
  e.target.reset();
  renderLogs();
}

function renderLogs() {
  const container = document.getElementById('logList');
  const logs = getLogs();
  
  if (logs.length === 0) {
    container.innerHTML = `<p class="text-xs text-slate-500 text-center py-4">Belum ada riwayat servis yang dicatat.</p>`;
    return;
  }

  container.innerHTML = logs.map(log => `
    <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
      <div class="flex justify-between items-start">
        <h4 class="font-bold text-orange-400">${log.title}</h4>
        <span class="text-[10px] text-slate-500 font-mono">${log.date}</span>
      </div>
      <div class="flex justify-between text-[11px] text-slate-300">
        <span>Odometer: <strong class="text-slate-100">${parseInt(log.km).toLocaleString()} KM</strong></span>
        <span>Biaya: <strong class="text-emerald-400">Rp ${parseInt(log.cost).toLocaleString()}</strong></span>
      </div>
      ${log.note ? `<p class="text-[11px] text-slate-400 bg-slate-950 p-2 rounded-lg mt-1 border border-slate-800/80">${log.note}</p>` : ''}
    </div>
  `).join('');
}

function clearLogs() {
  if (confirm('Hapus semua catatan riwayat servis?')) {
    localStorage.removeItem('kzr_logs');
    renderLogs();
  }
}

// --- CVT CALCULATOR LOGIC ---
function calculateCVT() {
  const r = [
    parseFloat(document.getElementById('r1').value) || 0,
    parseFloat(document.getElementById('r2').value) || 0,
    parseFloat(document.getElementById('r3').value) || 0,
    parseFloat(document.getElementById('r4').value) || 0,
    parseFloat(document.getElementById('r5').value) || 0,
    parseFloat(document.getElementById('r6').value) || 0
  ];
  const per = parseInt(document.getElementById('perCvt').value);
  const totalWeight = r.reduce((a, b) => a + b, 0);
  const avg = (totalWeight / 6).toFixed(1);

  document.getElementById('avgRollerBadge').innerText = `Rata-rata: ${avg}g (Total: ${totalWeight}g)`;
  
  let text = "";
  if (avg < 17.5) {
    text += `• <b>Roller ${avg}g (Enteng):</b> Putaran bawah jauh lebih responsif & enteng. Cocok untuk tanjakan / stop-and-go. Top speed butuh trek lurus lebih panjang.<br>`;
  } else if (avg > 18.5) {
    text += `• <b>Roller ${avg}g (Berat):</b> Akselerasi bawah terasa sedikit nahan, namun RPM mesin di kecepatan menengah-atas lebih tenang & hemat BBM.<br>`;
  } else {
    text += `• <b>Roller ${avg}g (Standar):</b> Racikan balans bawaan pabrik Honda KZR.<br>`;
  }

  if (per > 1000) {
    text += `• <b>Per CVT ${per} RPM:</b> Menahan mekar pulley lebih lama. Efektif mengurangi gejala gredek awal, namun mesin sedikit meraung di kecepatan rendah.`;
  } else {
    text += `• <b>Per CVT Standar (1000 RPM):</b> Perpindahan rasio halus dan menjaga keawetan usia v-belt.`;
  }

  document.getElementById('cvtText').innerHTML = text;
  document.getElementById('cvtResult').classList.remove('hidden');
}

// --- ENGINE CALCULATOR LOGIC ---
function calculateEngine() {
  const bore = parseFloat(document.getElementById('engBore').value);
  const stroke = parseFloat(document.getElementById('engStroke').value);
  const dome = parseFloat(document.getElementById('engDome').value);

  const vSwept = (Math.PI / 4) * Math.pow(bore, 2) * stroke / 1000;
  const cr = (vSwept + dome) / dome;

  document.getElementById('resCc').innerText = `${vSwept.toFixed(1)} cc`;
  document.getElementById('resComp').innerText = `${cr.toFixed(1)} : 1`;

  let fuelRec = "";
  if (cr < 10.0) {
    fuelRec = "<b>Rekomendasi BBM:</b> Minimal Pertalite (RON 90).";
  } else if (cr >= 10.0 && cr <= 11.2) {
    fuelRec = "<b>Rekomendasi BBM:</b> Pertamax (RON 92). Sangat ideal untuk kompresi harian KZR.";
  } else {
    fuelRec = "<b>Rekomendasi BBM:</b> Pertamax Turbo / V-Power (RON 98). Wajib oktan tinggi untuk mencegah knocking / ngelitik.";
  }

  document.getElementById('resFuelRec').innerHTML = fuelRec;
  document.getElementById('engineResult').classList.remove('hidden');
}

// --- MIL DECODER LOGIC ---
function decodeMIL() {
  const long = parseInt(document.getElementById('longBlink').value) || 0;
  const short = parseInt(document.getElementById('shortBlink').value) || 0;
  const totalCode = (long * 10) + short;
  const resultDiv = document.getElementById('milResult');
  const info = MIL_DATA[totalCode];

  if (info) {
    resultDiv.innerHTML = `
      <div class="border-l-2 border-red-500 pl-3 py-1">
        <h3 class="font-bold text-red-400 text-xs">Kode MIL ${totalCode}: ${info.sensor}</h3>
        <p class="text-slate-300 text-[11px] mt-1 leading-relaxed">${info.detail}</p>
      </div>
    `;
  } else if (totalCode === 0) {
    resultDiv.innerHTML = `<p class="text-slate-400">Masukkan kombinasi kedipan panjang/pendek.</p>`;
  } else {
    resultDiv.innerHTML = `<p class="text-yellow-400">Kode ${totalCode} tidak terdaftar pada ECM PGM-FI KZR.</p>`;
  }
  resultDiv.classList.remove('hidden');
}

// --- WIRING DIAGRAM LOGIC ---
function renderWiring() {
  const container = document.getElementById('wiringList');
  container.innerHTML = WIRING_DATA.map(item => `
    <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs flex items-start gap-3">
      <div class="w-3.5 h-3.5 rounded-full ${item.bg} shrink-0 border border-slate-700 mt-0.5"></div>
      <div class="space-y-0.5">
        <h4 class="font-bold text-slate-200">${item.color}</h4>
        <p class="text-orange-400 text-[11px] font-medium">${item.func}</p>
        <p class="text-slate-400 text-[10px] leading-relaxed">${item.detail}</p>
      </div>
    </div>
  `).join('');
}

// --- INITIAL RENDER ---
window.onload = () => {
  renderParts(PARTS_DATA);
  renderTorque(TORQUE_DATA);
  renderWiring();
};