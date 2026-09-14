// --- HELPER UNTUK GAMBAR ILUSTRASI SVG (RINGAN & TANPA DEPENDENSI EXTERNAL) ---
function getSvgImage(type) {
  const svgs = {
    cvt: `<svg class="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>`,
    bearing: `<svg class="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke-width="2"/><circle cx="12" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="18" r="1" fill="currentColor"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="12" r="1" fill="currentColor"/></svg>`,
    boshing: `<svg class="w-10 h-10 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="6" y="4" width="12" height="16" rx="2" stroke-width="2"/><line x1="10" y1="4" x2="10" y2="20" stroke-width="1.5"/></svg>`,
    oil: `<svg class="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 3H9L8 4z"/></svg>`,
    engine: `<svg class="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>`,
    bodi: `<svg class="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    kaki: `<svg class="w-10 h-10 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke-width="1.5"/></svg>`
  };
  return svgs[type] || svgs.cvt;
}

// --- DATABASE SPAREPART KZR (LENGKAP + BEARING/BOSHING + OLI LENGKAP) ---
const PARTS_DATA = [
  // BEARING & BOSHING (KHUSUS & UNIVERSAL)
  { name: "Bearing Bak CVT (Laher Cover CVT)", code: "91005-KVB-N50 / 6002-RS", cat: "Bearing & Boshing", type: "bearing", sub: "SKF 6002-2RS / NTN / KOYO", note: "Ukuran standar 6002-RS (Universal). Menggunakan penutup karet. Mencegah as pulley oblak saat berputar." },
  { name: "Bearing Bambu Pulley Belakang (Needle)", code: "91109-KZR-601", cat: "Bearing & Boshing", type: "bearing", sub: "91109-KVY-901", note: "Kode Khusus Honda KZR. Letaknya di dalam driven face belakang. Wajib diberi grease CVT berkala." },
  { name: "Bearing Radial Pulley Belakang", code: "91002-GA7-701 / 6902U", cat: "Bearing & Boshing", type: "bearing", sub: "6902 RS (SKF/NTN)", note: "Terletak di dalam pulley sliding ganda berdampingan dengan bearing bambu." },
  { name: "Bearing Kruk As Kiri (Besar)", code: "91002-KZR-603 / 6207", cat: "Bearing & Boshing", type: "bearing", sub: "SKF Enduro 6207 / FAG", note: "Ukuran universal 6207. Jika aus, mesin bunyi dengung kasar dari arah magnet/CVT." },
  { name: "Bearing Kruk As Kanan", code: "91001-KZR-600 / 6206ZE", cat: "Bearing & Boshing", type: "bearing", sub: "SKF 6206", note: "Ukuran universal 6206 dengan pelindung besi (ZE)." },
  { name: "Bos Rumah Roller (Collar Drive Face)", code: "22105-KZR-600", cat: "Bearing & Boshing", type: "boshing", sub: "Khusus KZR / K97 (PCX 150)", note: "Kode Khusus KZR! Panjang & diameter presisi untuk jalur sliding rumah roller. Jangan tertukar dengan Beat." },
  { name: "Bos Engine Hanger (Bushing Mesin/Rangka)", code: "50352-KZR-600", cat: "Bearing & Boshing", type: "boshing", sub: "Khusus Vario 125/150", note: "Bushing karet penahan getaran mesin ke rangka. Jika pecah, bodi terasa goyang/miring saat manuver." },
  { name: "Bos As Roda Belakang (Collar Rear Axle)", code: "42311-KZR-600", cat: "Bearing & Boshing", type: "boshing", sub: "Khusus KZR", note: "Boshing besi antara bearing arm dengan velg belakang." },

  // OLI MESIN LENGKAP (BERBAGAI MERK MERK TERNAMA)
  { name: "Ipone Katana Scoot 5W-40 Synthetic", code: "Oli Mesin Premium", cat: "Oli & Pelumas", type: "oil", sub: "100% Synthetic + Ester", note: "Oli dingin dan licin luar biasa. Cocok untuk penggunaan jarak jauh/komuter harian Bogor-Jakarta." },
  { name: "Castrol Power1 Ultimate Matic 10W-30", code: "Oli Mesin Fully Syn", cat: "Oli & Pelumas", type: "oil", sub: "JASO MB", note: "Formula akselerasi halus, menjaga suhu mesin tetap terkontrol dan mengurangi gesekan." },
  { name: "Shell Advance AX7 Matic 10W-30", code: "Oli Mesin Semi-Syn", cat: "Oli & Pelumas", type: "oil", sub: "Active Cleansing Tech", note: "Sangat populer untuk Vario KZR. Membersihkan kerak mesin & menjaga mesin tidak cepat panas." },
  { name: "Motul Scooter Expert LE 10W-30 / 10W-40", code: "Oli Mesin HC-Tech", cat: "Oli & Pelumas", type: "oil", sub: "JASO MB", note: "Respon gas menjadi enteng, ramah untuk seal mesin dan emisi rendah." },
  { name: "Liqui Moly 10W-40 Scooter Race", code: "Oli Mesin Import", cat: "Oli & Pelumas", type: "oil", sub: "Made in Germany", note: "Performa kencang, proteksi terhadap keausan sangat tinggi walau sering jalan stop-and-go." },
  { name: "Federal Matic Forged 10W-30", code: "Oli Mesin Lokal Premium", cat: "Oli & Pelumas", type: "oil", sub: "Combination Synthetic", note: "Mengandung Double Actuator Cleaner untuk menjaga kebersihan ruang bakar." },
  { name: "Repsol Smarter Matic 4T 10W-30", code: "Oli Mesin Synthetic Blend", cat: "Oli & Pelumas", type: "oil", sub: "JASO MB", note: "Oli pabrikan kental proteksi suhu tinggi, menjaga performa tetap stabil." },
  { name: "AHM SPX2 Matic 10W-30 (0.8L)", code: "Oli Mesin Standar HGP", cat: "Oli & Pelumas", type: "oil", sub: "08234-M99-K1LN3", note: "Oli bawaan resmi Honda berbahan Full Synthetic." },

  // CVT & TRANSMISI
  { name: "V-Belt CVT KZR Original", code: "23100-KZR-601", cat: "CVT", type: "cvt", sub: "K97 (PCX 150) / KWN", note: "Sabuk ori KZR bawaan tebal & awet. Penggantian berkala ideal tiap 20.000 KM." },
  { name: "Roller Standard KZR (Set 6pcs)", code: "22123-KZR-600", cat: "CVT", type: "cvt", sub: "2DP (NMAX 13g) / K44 (15g)", note: "Berat standar KZR: 18 gram. Racik silang 15g + 18g untuk tanjakan lebih enteng." },
  { name: "Kampas Ganda Set KZR", code: "22535-KZR-600", cat: "CVT", type: "cvt", sub: "K97 (PCX 150) / KWN", note: "Bisa disubstitusi Pakai K97 (PCX 150) karena garis tapaknya lebih panjang meminimalisir gredek." },
  { name: "Mangkok Kampas Ganda", code: "22100-KWN-900", cat: "CVT", type: "cvt", sub: "K97 / Custom Kartel", note: "Sering dikartel / dibolongin mekanik untuk membuang debu gesekan kampas." },

  // MESIN & PENGAPIAN
  { name: "Busi NGK Nickel Standard", code: "CPR9EA-9", cat: "Mesin", type: "engine", sub: "Denso U27EPR9", note: "Celah gap busi standar: 0.80 - 0.90 mm." },
  { name: "Filter Udara Kertas Basah", code: "17210-KZR-600", cat: "Mesin", type: "engine", sub: "KZR-601", note: "Filter tipe viskos (beroli). Jangan disemprot kompresor! Wajib ganti berkala." },
  { name: "Cairan Radiator Coolant 1L", code: "08C89-M55-01S", cat: "Mesin", type: "engine", sub: "Seiken / Prestone / Engine Ice", note: "Kapasitas total pendingin Vario 125: ± 0.48 Liter." },

  // KAKI-KAKI & PENGEREMAN
  { name: "Kampas Rem Depan (Caliper Tokico)", code: "06455-KVB-T01", cat: "Kaki & Rem", type: "kaki", sub: "Bendix MD25 / Elig", note: "Tipe kampas disk brake depan 1 piston / 2 piston CBS." },
  { name: "Comsteer Set (Bantalan Kemudi)", code: "06535-GN5-505", cat: "Kaki & Rem", type: "kaki", sub: "Daytona Bambu", note: "Jika stang terasa berat/nyangkut di tengah saat belok artinya komstir coak." },

  // BODI & KELISTRIKAN
  { name: "Aki Kering GTZ6V / YTZ6V (12V 5Ah)", code: "31500-KZR-601", cat: "Bodi & Lampu", type: "bodi", sub: "GS Astra / Motobatt MTZ6S", note: "Wajib aki 5Ah-6Ah agar starter ACG lancar dan halus." }
];

const CVT_PART_DETAILS = {
  rumah_roller: "<b>1. Rumah Roller (Pulley Primary Drive):</b><br>Tempat 6 buah roller bergerak naik-turun mendorong v-belt ke diameter lebih luar saat RPM naik.",
  kipas_pulley: "<b>2. Kipas Pulley Depan:</b><br>Pasangan rumah roller yang terkunci mati di as kruk as. Menjepit v-belt di sisi luar.",
  bos_roller: "<b>Boshing Rumah Roller (Collar):</b><br>Bos besi presisi khusus KZR (22105-KZR-600) tempat rumah roller meluncur maju-mundur.",
  vbelt: "<b>3. V-Belt (23100-KZR-601):</b><br>Sabuk karet pentransfer tenaga dari pulley depan (mesin) ke pulley belakang (roda).",
  pulley_belakang: "<b>4. Pulley Secondary (Driven):</b><br>Terdiri dari fixed & sliding sheave yang diatur oleh Per CVT dan gerakan Kopling Sentrifugal.",
  per_cvt: "<b>Per CVT Belakang:</b><br>Menahan mekar pulley belakang. Semakin keras per, semakin lama transmisi tertahan di rasio rendah (akselerasi).",
  mangkok_ganda: "<b>5. Mangkok & Kampas Ganda:</b><br>Menghubungkan putaran CVT ke as roda belakang melalui gaya sentrifugal saat gas ditarik."
};

const TORQUE_DATA = [
  { item: "Nut Pulley Depan (Kipas Drive Face)", torque: "108 Nm (11.0 kgf.m)", key: "Kunci Sock 22", cat: "CVT" },
  { item: "Nut Clutch Bell (Mangkok Belakang)", torque: "49 Nm (5.0 kgf.m)", key: "Kunci Sock 19", cat: "CVT" },
  { item: "Baut Cover Bak CVT", torque: "10 Nm (1.0 kgf.m)", key: "Kunci T 8", cat: "CVT" },
  { item: "Baut Tap Oli Gardan", torque: "13 Nm (1.3 kgf.m)", key: "Kunci Sock 12", cat: "CVT" },
  { item: "Baut Tap Oli Mesin Bawah", torque: "24 Nm (2.4 kgf.m)", key: "Kunci Sock 12", cat: "Mesin" },
  { item: "Baut Head Cylinder (4 Mur Main)", torque: "27 Nm (2.8 kgf.m)", key: "Kunci Sock 10 (Silang)", cat: "Mesin" },
  { item: "Busi Mesin", torque: "16 Nm (1.6 kgf.m)", key: "Kunci Busi 16", cat: "Mesin" }
];

const MIL_DATA = {
  7: { sensor: "ECT (Engine Coolant Temp)", detail: "Masalah pada sensor suhu air radiator. Mesin susah hidup saat dingin." },
  8: { sensor: "TP (Throttle Position)", detail: "Sensor posisi gas bermasalah. Tarikan motor terasa brebet atau nahan." },
  12: { sensor: "INJECTOR", detail: "Rangkaian injektor bermasalah/kabel terputus. Mesin bakal mogok total." },
  54: { sensor: "BAS (Bank Angle Sensor)", detail: "Sensor kemiringan bermasalah. Memutus pengapian karena mengira motor jatuh." }
};

const WIRING_DATA = [
  { color: "Hijau (G)", bg: "bg-emerald-600", func: "Massa / Ground Utama Chassis", detail: "Wajib terhubung sempurna ke rangka & blok mesin." },
  { color: "Merah (R)", bg: "bg-red-600", func: "Positif (+) Utama dari Aki (12V)", detail: "Arus langsung dari sekring utama 20A." },
  { color: "Hitam (Bl)", bg: "bg-slate-700", func: "Positif Output Kunci Kontak (12V ON)", detail: "Menyalakan sistem ECM, Klakson, dan Panel Meter." }
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

// --- RENDER KATALOG SPAREPART DENGAN GAMBAR ILUSTRASI ---
function renderParts(data) {
  document.getElementById('partCount').innerText = `${data.length} item ditemukan`;
  const container = document.getElementById('partsList');
  
  if (data.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-500 text-xs">Part tidak ditemukan dalam database.</div>`;
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2 hover:border-slate-700 transition flex gap-3">
      <!-- Icon / Gambar Barang -->
      <div class="w-12 h-12 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-center shrink-0">
        ${getSvgImage(item.type)}
      </div>

      <!-- Detail Barang -->
      <div class="space-y-1 flex-1">
        <div class="flex justify-between items-start gap-2">
          <h4 class="font-bold text-slate-100">${item.name}</h4>
          <span class="font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded text-[10px] border border-slate-800 shrink-0">${item.code}</span>
        </div>
        
        ${item.sub ? `
          <div class="text-[10px]">
            <span class="text-slate-500">Substitusi/Alt: </span>
            <span class="text-emerald-400 font-medium">${item.sub}</span>
          </div>
        ` : ''}

        <p class="text-[11px] text-slate-400 leading-relaxed">${item.note}</p>
      </div>
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

// --- SHOW CVT DIAGRAM DETAIL ---
function showCvtPartDetail(key) {
  const infoDiv = document.getElementById('cvtDiagramInfo');
  if (CVT_PART_DETAILS[key]) {
    infoDiv.innerHTML = `<p class="text-xs text-slate-200 leading-relaxed">${CVT_PART_DETAILS[key]}</p>`;
  }
}

// --- TORQUE FINDER ---
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
  const filtered = TORQUE_DATA.filter(i => i.item.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q));
  renderTorque(filtered);
}

// --- LOGBOOK ---
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
  if (confirm('Hapus semua riwayat servis?')) {
    localStorage.removeItem('kzr_logs');
    renderLogs();
  }
}

// --- CVT CALCULATOR ---
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

  document.getElementById('avgRollerBadge').innerText = `Rata-rata: ${avg}g`;
  let text = `• <b>Rata-rata Roller ${avg}g:</b> `;
  if (avg < 17.5) text += `Putaran bawah lebih responsif untuk tanjakan/stop-and-go. Top speed butuh trek lebih panjang.<br>`;
  else text += `Rasio bawaan/standar turing. RPM atas tenang.<br>`;

  if (per > 1000) text += `• <b>Per CVT ${per} RPM:</b> Menahan mekar pulley lebih lama, mengurangi gredek awal.`;
  else text += `• <b>Per CVT 1000 RPM:</b> Nyaman harian & awet v-belt.`;

  document.getElementById('cvtText').innerHTML = text;
  document.getElementById('cvtResult').classList.remove('hidden');
}

// --- MIL DECODER ---
function decodeMIL() {
  const long = parseInt(document.getElementById('longBlink').value) || 0;
  const short = parseInt(document.getElementById('shortBlink').value) || 0;
  const totalCode = (long * 10) + short;
  const resultDiv = document.getElementById('milResult');
  const info = MIL_DATA[totalCode];

  if (info) {
    resultDiv.innerHTML = `<div class="border-l-2 border-red-500 pl-3 py-1"><h3 class="font-bold text-red-400 text-xs">Kode MIL ${totalCode}: ${info.sensor}</h3><p class="text-slate-300 text-[11px] mt-1">${info.detail}</p></div>`;
  } else {
    resultDiv.innerHTML = `<p class="text-yellow-400">Kode ${totalCode} tidak terdaftar pada ECM KZR.</p>`;
  }
  resultDiv.classList.remove('hidden');
}

// --- WIRING DIAGRAM ---
function renderWiring() {
  const container = document.getElementById('wiringList');
  container.innerHTML = WIRING_DATA.map(item => `
    <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs flex items-start gap-3">
      <div class="w-3.5 h-3.5 rounded-full ${item.bg} shrink-0 border border-slate-700 mt-0.5"></div>
      <div>
        <h4 class="font-bold text-slate-200">${item.color}</h4>
        <p class="text-orange-400 text-[11px] font-medium">${item.func}</p>
        <p class="text-slate-400 text-[10px]">${item.detail}</p>
      </div>
    </div>
  `).join('');
}

window.onload = () => {
  renderParts(PARTS_DATA);
  renderTorque(TORQUE_DATA);
  renderWiring();
};