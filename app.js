// --- DATABASE SUPER LENGKAP KZR ---

const TORQUE_DATA = [
  // CVT
  { item: "Nut Pulley Depan (Kipas Drive Face)", torque: "108 Nm (11.0 kgf.m)", key: "Kunci Sock 22", cat: "CVT" },
  { item: "Nut Clutch Bell (Mangkok Ganda Belakang)", torque: "49 Nm (5.0 kgf.m)", key: "Kunci Sock 19", cat: "CVT" },
  { item: "Baut Cover CVT (Plastik/Bak)", torque: "10 Nm (1.0 kgf.m)", key: "Kunci T 8", cat: "CVT" },
  { item: "Baut Oli Gardan (Tap & Isi)", torque: "13 Nm (1.3 kgf.m)", key: "Kunci Ring/Sock 12", cat: "CVT" },
  // MESIN & CYLINDER
  { item: "Baut Oli Mesin (Tap Bawah)", torque: "24 Nm (2.4 kgf.m)", key: "Kunci Sock 12", cat: "Mesin" },
  { item: "Baut Head Cylinder (4 Mur Utamanya)", torque: "27 Nm (2.8 kgf.m)", key: "Kunci Sock 10 (Silang)", cat: "Mesin" },
  { item: "Baut Noken As / Gear Timing Sprocket", torque: "12 Nm (1.2 kgf.m)", key: "Kunci T 8 / Hex", cat: "Mesin" },
  { item: "Buka Busi", torque: "16 Nm (1.6 kgf.m)", key: "Kunci Busi 16", cat: "Mesin" },
  { item: "Baut Stasioner Tensioner Cam", torque: "10 Nm (1.0 kgf.m)", key: "Kunci T 8", cat: "Mesin" },
  { item: "Baut Magnet / Flywheel Rotors", torque: "59 Nm (6.0 kgf.m)", key: "Kunci Sock 17", cat: "Mesin" },
  // KAKI-KAKI & REM
  { item: "Mur As Roda Depan", torque: "59 Nm (6.0 kgf.m)", key: "Kunci Ring 19 & 14", cat: "Kaki-Kaki" },
  { item: "Mur As Roda Belakang", torque: "118 Nm (12.0 kgf.m)", key: "Kunci Sock 24", cat: "Kaki-Kaki" },
  { item: "Baut Caliper Rem Depan (Bracket)", torque: "30 Nm (3.1 kgf.m)", key: "Kunci Bintang L T45 / Kunci 12", cat: "Pengereman" },
  { item: "Baut Disc Brake / Piringan Rem", torque: "42 Nm (4.3 kgf.m)", key: "Kunci L 6", cat: "Pengereman" },
  { item: "Baut Shockbreaker Belakang (Atas)", torque: "39 Nm (4.0 kgf.m)", key: "Kunci Sock 14", cat: "Kaki-Kaki" },
  { item: "Baut Shockbreaker Belakang (Bawah)", torque: "29 Nm (3.0 kgf.m)", key: "Kunci Sock 12", cat: "Kaki-Kaki" }
];

const MIL_DATA = {
  7: { sensor: "ECT (Engine Coolant Temp)", detail: "Sensor suhu air radiator. Gejala: Mesin susah hidup pas dingin, kipas nyala terus, atau indikator suhu overhead overheat palsu." },
  8: { sensor: "TP (Throttle Position)", detail: "Sensor posisi skep gas di TB. Gejala: Gas berebet, nahan di RPM tengah, atau stasioner tidak stabil." },
  9: { sensor: "IAT (Intake Air Temp)", detail: "Sensor suhu udara masuk di manifol. Gejala: Campuran bensin terlalu kaya/irit." },
  11: { sensor: "VS (Vehicle Speed Sensor)", detail: "Sensor kecepatan roda/girboks. Gejala: Spedometer mati, Idling Stop System (ISS) tidak bekerja." },
  12: { sensor: "INJECTOR", detail: "Rangkaian kabel/solenoid injektor putus/kotor. Gejala: Mesin mati total / mogok." },
  29: { sensor: "IACV (Idle Air Control Valve)", detail: "Katup pengatur langsam otomatis. Gejala: Langsam terlalu tinggi/rendah atau sering mati saat lepas gas." },
  33: { sensor: "ECM / ECU Memory", detail: "EEPROM ECM bermasalah. Jarang terjadi, biasanya karena konsleting arus aki." },
  54: { sensor: "BAS (Bank Angle Sensor)", detail: "Sensor kemiringan motor. Gejala: Mesin mati sendiri pas miring atau setelah motor roboh." }
};

const PARTS_DATA = [
  { name: "V-Belt CVT Original KZR", code: "23100-KZR-601", sub: "K97 (PCX 150) / K44 (Beat FI)", note: "KZR kode ori paling awet. Pakai K97 lebih panjang dikit (top speed naik)." },
  { name: "Roller Standard (Set 6pcs)", code: "22123-KZR-600", sub: "2DP (NMAX 13g) / 54P (Xeon 10g) / K44 (15g)", note: "Berat bawaan KZR 18 gram. Bisa substitusi kepunyaan NMAX/Xeon buat akselerasi." },
  { name: "Kampas Ganda Set", code: "22535-KZR-600", note: "Substitusi plug and play: K97 (PCX 150) atau KWN (Vario 125 lama). Tapak K97 lebih panjang." },
  { name: "Mangkok Kampas Ganda", code: "22100-KWN-900", note: "Bisa dicustom bubut / kartel biar gak gredet." },
  { name: "Seal Kruk As Kiri (CVT)", code: "91202-KWN-901", note: "Ukuran 20.8x52x7.5. Kalau bocor oli bakal masuk ke area vanbelt (slip)." },
  { name: "Sliding Sheave / Piece Ramp", code: "22011-KWN-900", note: "Karet slider piringan roller. Ganti jika sudah longgar biar gak bunyi kletek-kletek." },
  { name: "Busi Standard Dual Ground", code: "CPR9EA-9 (NGK) / U27EPR9", note: "Gap celah busi 0.8 mm - 0.9 mm." },
  { name: "Filter Udara Kertas Basah", code: "17210-KZR-600", note: "Mengandung oli penangkap debu. Haram disemprot kompresor, ganti tiap 12.000 KM." },
  { name: "Thermostat Radiator", code: "19300-KRM-840", note: "Sama dengan Vario 110 / CB150R. Ganti kalau air radiator tidak bersirkulasi." }
];

const WIRING_DATA = [
  { color: "Hijau (G)", bg: "bg-green-600", func: "Massa / Ground Total Chassis", detail: "Wajib nempel ke bodi/mesin. Kalau kendor stater starter bakal klek-klek." },
  { color: "Merah (R)", bg: "bg-red-600", func: "Positif (+) Utama dari Aki (12V)", detail: "Arus langsung dari sekring utama 20A." },
  { color: "Hitam (Bl)", bg: "bg-gray-700", func: "Positif Setelah Kunci Kontak (ON)", detail: "Menyuplai tegangan ke klakson, sen, ECU, dan lampu indikator." },
  { color: "Kuning/Hijau (Y/G)", bg: "bg-yellow-500 text-black", func: "Jalur Saklar Switch Rem -> Relay Starter", detail: "Rem harus ditekan biar arus masuk ke tombol starter." },
  { color: "Biru/Kuning (Bu/Y)", bg: "bg-blue-600", func: "Pulser Sinyal Pengapian (CKP Sensor)", detail: "Mengirim sinyal timing pengapian ke ECM." },
  { color: "Cokelat (Br)", bg: "bg-amber-800", func: "Jalur Lampu Senja / Lampu Plat Belakang", detail: "Aktif saat saklar lampu utama senja di-ON kan." }
];

// --- APP NAVIGATION ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('text-orange-400', 'border-b-2', 'border-orange-500');
    btn.classList.add('text-gray-400');
  });

  document.getElementById(`sec-${tabId}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-${tabId}`);
  activeBtn.classList.add('text-orange-400', 'border-b-2', 'border-orange-500');
  activeBtn.classList.remove('text-gray-400');

  if(tabId === 'logbook') renderLogs();
}

// --- LOGIC 1: TORQUE FINDER ---
function renderTorque(data) {
  document.getElementById('torqueCount').innerText = `${data.length} items`;
  const container = document.getElementById('torqueList');
  container.innerHTML = data.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 flex justify-between items-center text-xs">
      <div>
        <h4 class="font-bold text-gray-200">${item.item}</h4>
        <p class="text-[11px] text-gray-400 mt-0.5">${item.key} • <span class="text-orange-400 font-semibold">${item.cat}</span></p>
      </div>
      <div class="text-right shrink-0 ml-2">
        <span class="font-mono font-bold bg-orange-950 text-orange-300 px-2 py-1 rounded border border-orange-700/60">${item.torque}</span>
      </div>
    </div>
  `).join('');
}
function searchTorque() {
  const q = document.getElementById('torqueSearch').value.toLowerCase();
  const filtered = TORQUE_DATA.filter(i => i.item.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q) || i.key.toLowerCase().includes(q));
  renderTorque(filtered);
}

// --- LOGIC 2: LOGBOOK SERVIS (LOCALSTORAGE) ---
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
  
  if(logs.length === 0) {
    container.innerHTML = `<p class="text-xs text-gray-500 text-center py-4">Belum ada catatan servis. Tambahkan di atas!</p>`;
    return;
  }

  container.innerHTML = logs.map(log => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 text-xs space-y-1">
      <div class="flex justify-between items-start">
        <h4 class="font-bold text-orange-400">${log.title}</h4>
        <span class="text-[10px] text-gray-400 font-mono">${log.date}</span>
      </div>
      <div class="flex justify-between text-[11px] text-gray-300">
        <span>Odometer: <strong class="text-white">${parseInt(log.km).toLocaleString()} KM</strong></span>
        <span>Biaya: <strong class="text-green-400">Rp ${parseInt(log.cost).toLocaleString()}</strong></span>
      </div>
      ${log.note ? `<p class="text-[10px] text-gray-400 bg-gray-900/60 p-1.5 rounded mt-1 border border-gray-700/50">${log.note}</p>` : ''}
    </div>
  `).join('');
}
function clearLogs() {
  if(confirm('Hapus semua riwayat catatan servis?')) {
    localStorage.removeItem('kzr_logs');
    renderLogs();
  }
}

// --- LOGIC 3: CVT SIMULATOR ---
function calculateCVT() {
  const r1 = parseFloat(document.getElementById('r1').value) || 0;
  const r2 = parseFloat(document.getElementById('r2').value) || 0;
  const r3 = parseFloat(document.getElementById('r3').value) || 0;
  const r4 = parseFloat(document.getElementById('r4').value) || 0;
  const r5 = parseFloat(document.getElementById('r5').value) || 0;
  const r6 = parseFloat(document.getElementById('r6').value) || 0;
  const per = parseInt(document.getElementById('perCvt').value);

  const totalWeight = r1 + r2 + r3 + r4 + r5 + r6;
  const avg = (totalWeight / 6).toFixed(1);

  document.getElementById('avgRollerBadge').innerText = `Rata-rata: ${avg}g (Total: ${totalWeight}g)`;
  
  let text = "";
  if (avg < 17.5) {
    text += `• <b>Roller Rata-rata ${avg}g (Enteng):</b> Akselerasi putaran bawah-menengah jauh lebih enteng & responsif. Sangat enak buat jalan nanjak/stop-and-go. Top speed akan membutuhkan trek lurus lebih panjang.<br>`;
  } else if (avg > 18.5) {
    text += `• <b>Roller Rata-rata ${avg}g (Berat):</b> Putaran bawah terasa sedikit ngeden, tapi RPM mesin di trek lurus panjang lebih rileks & napas top speed lebih panjang.<br>`;
  } else {
    text += `• <b>Roller Rata-rata ${avg}g (Standar KZR):</b> Perpaduan seimbang untuk penggunaan harian.<br>`;
  }

  if (per > 1000) {
    text += `• <b>Per CVT ${per} RPM:</b> Menjaga RPM mesin tetap tinggi sebelum pulley mekar. Mengurangi gejala *gredek* awal, namun mesin akan terasa lebih meraung di kecepatan rendah.`;
  } else {
    text += `• <b>Per CVT Standar (1000 RPM):</b> Perpindahan rasio piringan halus & menjaga keawetan komponen v-belt untuk pemakaian harian.`;
  }

  document.getElementById('cvtText').innerHTML = text;
  document.getElementById('cvtResult').classList.remove('hidden');
}

// --- LOGIC 4: BORE UP & CC CALCULATOR ---
function calculateEngine() {
  const bore = parseFloat(document.getElementById('engBore').value);
  const stroke = parseFloat(document.getElementById('engStroke').value);
  const dome = parseFloat(document.getElementById('engDome').value);

  // CC = pi/4 * bore^2 * stroke / 1000
  const vSwept = (Math.PI / 4) * Math.pow(bore, 2) * stroke / 1000;
  // Compression Ratio = (Vs + Vc) / Vc
  const cr = (vSwept + dome) / dome;

  document.getElementById('resCc').innerText = `${vSwept.toFixed(1)} cc`;
  document.getElementById('resComp').innerText = `${cr.toFixed(1)} : 1`;

  let fuelRec = "";
  if (cr < 10.0) {
    fuelRec = "<b>Rekomendasi BBM:</b> Pertalite (RON 90) aman digelontorkan.";
  } else if (cr >= 10.0 && cr <= 11.2) {
    fuelRec = "<b>Rekomendasi BBM:</b> Pertamax (RON 92). Sangat pas buat rasio standar / bore up harian KZR.";
  } else {
    fuelRec = "<b>Rekomendasi BBM:</b> Pertamax Turbo / V-Power (RON 98). Awas bahaya *knocking* (ngelitik) jika pakai bensin oktan rendah!";
  }

  document.getElementById('resFuelRec').innerHTML = fuelRec;
  document.getElementById('engineResult').classList.remove('hidden');
}

// --- LOGIC 5: MIL DECODER ---
function decodeMIL() {
  const long = parseInt(document.getElementById('longBlink').value) || 0;
  const short = parseInt(document.getElementById('shortBlink').value) || 0;
  const totalCode = (long * 10) + short;
  
  const resultDiv = document.getElementById('milResult');
  const info = MIL_DATA[totalCode];

  if (info) {
    resultDiv.innerHTML = `
      <div class="border-l-4 border-red-500 pl-3 py-1">
        <h3 class="font-bold text-red-400 text-xs">Kode Kedip ${totalCode}: ${info.sensor}</h3>
        <p class="text-gray-300 text-[11px] mt-1 leading-relaxed">${info.detail}</p>
      </div>
    `;
  } else if (totalCode === 0) {
    resultDiv.innerHTML = `<p class="text-gray-400">Masukkan jumlah kedipan panjang dan pendek.</p>`;
  } else {
    resultDiv.innerHTML = `<p class="text-yellow-400">Kode ${totalCode} tidak ditemukan di database standar Honda PGM-FI KZR.</p>`;
  }
  resultDiv.classList.remove('hidden');
}

// --- LOGIC 6: PARTS & SUBSTITUTION ---
function renderParts(data) {
  const container = document.getElementById('partsList');
  container.innerHTML = data.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 text-xs space-y-1">
      <div class="flex justify-between items-start">
        <h4 class="font-bold text-gray-200">${item.name}</h4>
        <span class="font-mono bg-gray-900 text-orange-400 px-2 py-0.5 rounded text-[10px] border border-gray-700">${item.code}</span>
      </div>
      ${item.sub ? `<p class="text-[11px] text-green-400 font-medium">Substitusi: ${item.sub}</p>` : ''}
      <p class="text-[11px] text-gray-400">${item.note}</p>
    </div>
  `).join('');
}
function searchParts() {
  const q = document.getElementById('partSearch').value.toLowerCase();
  const filtered = PARTS_DATA.filter(i => i.name.toLowerCase().includes(q) || i.code.toLowerCase().includes(q) || (i.sub && i.sub.toLowerCase().includes(q)));
  renderParts(filtered);
}

// --- LOGIC 7: WIRING ---
function renderWiring() {
  const container = document.getElementById('wiringList');
  container.innerHTML = WIRING_DATA.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 text-xs flex items-start gap-3">
      <div class="w-4 h-4 rounded-full ${item.bg} shrink-0 border border-gray-500 mt-0.5"></div>
      <div class="space-y-0.5">
        <h4 class="font-bold text-gray-200">${item.color}</h4>
        <p class="text-orange-400 text-[11px] font-medium">${item.func}</p>
        <p class="text-gray-400 text-[10px] leading-relaxed">${item.detail}</p>
      </div>
    </div>
  `).join('');
}

// --- INITIALIZE ---
window.onload = () => {
  renderTorque(TORQUE_DATA);
  renderParts(PARTS_DATA);
  renderWiring();
};