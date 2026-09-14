// --- DATA BASE APPLICATION ---

const TORQUE_DATA = [
  { item: "Nut Pulley Depan (Kipas)", torque: "108 Nm (11.0 kgf.m)", key: "Kunci Sock 22", cat: "CVT" },
  { item: "Nut Clutch Bell (Mangkok Belakang)", torque: "49 Nm (5.0 kgf.m)", key: "Kunci Sock 19", cat: "CVT" },
  { item: "Baut Oli Mesin (Tap Oli)", torque: "24 Nm (2.4 kgf.m)", key: "Kunci Ring/Sock 12", cat: "Mesin" },
  { item: "Baut Oli Gardan", torque: "13 Nm (1.3 kgf.m)", key: "Kunci Ring/Sock 12", cat: "CVT" },
  { item: "Buka Busi", torque: "16 Nm (1.6 kgf.m)", key: "Kunci Busi 16", cat: "Mesin" },
  { item: "Baut Head Cylinder", torque: "27 Nm (2.8 kgf.m)", key: "Kunci Sock 10", cat: "Mesin" }
];

const MIL_DATA = {
  7: { sensor: "EOT / ECT (Engine Temp)", detail: "Masalah pada sensor suhu mesin/coolant. Cek kabel socket atau sensor kotor." },
  8: { sensor: "TP (Throttle Position)", detail: "Masalah pada sensor posisi gas di TB. Gas berebet/tertahan." },
  11: { sensor: "VS (Vehicle Speed)", detail: "Masalah pada sensor kecepatan (Spedometer mati/kabel terputus)." },
  12: { sensor: "INJECTOR", detail: "Rangkaian injektor bermasalah. Motor susah hidup atau mati total." },
  29: { sensor: "IACV (Idle Air Control)", detail: "Pengatur lansam otomatis bermasalah. Langsam tidak stabil." },
  54: { sensor: "BAS (Bank Angle Sensor)", detail: "Sensor kemiringan/jatuh bermasalah." }
};

const PARTS_DATA = [
  { name: "V-Belt CVT Original", code: "23100-KZR-601", note: "Original KZR bandul tebal" },
  { name: "Roller Standard (Set)", code: "22123-KZR-600", note: "Berat 18 gram / pcs" },
  { name: "Kampas Ganda Set", code: "22535-KZR-600", note: "Bisa substitusi pakai K97 / KWN" },
  { name: "Busi Standard", code: "CPR9EA-9 (NGK)", note: "Gap busi 0.8 - 0.9 mm" },
  { name: "Filter Udara", code: "17210-KZR-600", note: "Tipe kertas basah (jangan disemprot angin kompresor)" }
];

const WIRING_DATA = [
  { color: "Hijau (G)", bg: "bg-green-600", func: "Massa / Ground Total" },
  { color: "Merah (R)", bg: "bg-red-600", func: "Positif Akut langsung dari Aki (+12V)" },
  { color: "Hitam (Bl)", bg: "bg-gray-700", func: "Positif Output Kunci Kontak (Kelistrikan Utama ON)" },
  { color: "Kuning/Hijau (Y/G)", bg: "bg-yellow-500 text-black", func: "Jalur Tombol Starter & Rem" },
  { color: "Biru/Kuning (Bu/Y)", bg: "bg-blue-600", func: "Pulser Ignition (Ke ECM)" }
];

// --- NAVIGATION SWITCH ---
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
}

// --- LOGIC 1: TORQUE FINDER ---
function renderTorque(data) {
  const container = document.getElementById('torqueList');
  container.innerHTML = data.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 flex justify-between items-center">
      <div>
        <h4 class="text-sm font-bold text-gray-200">${item.item}</h4>
        <p class="text-xs text-gray-400">${item.key} • <span class="text-orange-400">${item.cat}</span></p>
      </div>
      <div class="text-right">
        <span class="text-xs font-mono font-bold bg-orange-900/50 text-orange-300 px-2 py-1 rounded border border-orange-700/50">${item.torque}</span>
      </div>
    </div>
  `).join('');
}
function searchTorque() {
  const q = document.getElementById('torqueSearch').value.toLowerCase();
  const filtered = TORQUE_DATA.filter(i => i.item.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q));
  renderTorque(filtered);
}

// --- LOGIC 2: CVT CALCULATOR ---
function calculateCVT() {
  const roller = parseFloat(document.getElementById('rollerWeight').value);
  const per = parseInt(document.getElementById('perCvt').value);
  const resultDiv = document.getElementById('cvtResult');
  const resultText = document.getElementById('cvtText');

  let text = "";
  if (roller < 18) {
    text += `• <b>Roller ${roller}g (Enteng):</b> Akselerasi bawah (putaran bawah-menengah) jadi lebih ngacir & responsif. Cocok buat stop-and-go atau jalanan menanjak. Tapi top-speed bakal butuh trek lebih panjang atau sedikit tertahan.<br>`;
  } else if (roller > 18) {
    text += `• <b>Roller ${roller}g (Berat):</b> Putaran bawah terasa sedikit loyo/berat, tapi RPM mesin lebih tenang di kecepatan menengah-atas (hemat BBM pas turing/trek lurus).<br>`;
  } else {
    text += `• <b>Roller Standar (18g):</b> Balans bawaan pabrik buat daily.<br>`;
  }

  if (per > 1000) {
    text += `• <b>Per CVT ${per} RPM:</b> Menjaga RPM tetap tinggi sebelum pulley mekar. Mengurangi *gejala gredet* awal, tapi mesin akan terasa lebih 'meraung' di kecepatan rendah.`;
  } else {
    text += `• <b>Per CVT Standar:</b> Pergerakan pulley halus & awet untuk pemakaian harian.`;
  }

  resultText.innerHTML = text;
  resultDiv.classList.remove('hidden');
}

// --- LOGIC 3: MIL DECODER ---
function decodeMIL() {
  const long = parseInt(document.getElementById('longBlink').value) || 0;
  const short = parseInt(document.getElementById('shortBlink').value) || 0;
  const totalCode = (long * 10) + short;
  
  const resultDiv = document.getElementById('milResult');
  const info = MIL_DATA[totalCode];

  if (info) {
    resultDiv.innerHTML = `
      <div class="border-l-4 border-red-500 pl-3">
        <h3 class="text-sm font-bold text-red-400">Kode Kedip ${totalCode}: ${info.sensor}</h3>
        <p class="text-xs text-gray-300 mt-1">${info.detail}</p>
      </div>
    `;
  } else if (totalCode === 0) {
    resultDiv.innerHTML = `<p class="text-xs text-gray-400">Masukkan jumlah kedipan panjang/pendek.</p>`;
  } else {
    resultDiv.innerHTML = `<p class="text-xs text-yellow-400">Kode ${totalCode} tidak terdeteksi di database standar KZR. Cek ulang ritme kedipan.</p>`;
  }
  resultDiv.classList.remove('hidden');
}

// --- LOGIC 4: PART NUMBERS ---
function renderParts(data) {
  const container = document.getElementById('partsList');
  container.innerHTML = data.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700">
      <div class="flex justify-between items-start">
        <h4 class="text-sm font-bold text-gray-200">${item.name}</h4>
        <span class="text-xs font-mono bg-gray-700 text-orange-400 px-2 py-0.5 rounded">${item.code}</span>
      </div>
      <p class="text-xs text-gray-400 mt-1">${item.note}</p>
    </div>
  `).join('');
}
function searchParts() {
  const q = document.getElementById('partSearch').value.toLowerCase();
  const filtered = PARTS_DATA.filter(i => i.name.toLowerCase().includes(q) || i.code.toLowerCase().includes(q));
  renderParts(filtered);
}

// --- LOGIC 5: WIRING ---
function renderWiring() {
  const container = document.getElementById('wiringList');
  container.innerHTML = WIRING_DATA.map(item => `
    <div class="bg-gray-800 p-3 rounded-lg border border-gray-700 flex items-center gap-3">
      <div class="w-4 h-4 rounded-full ${item.bg} shrink-0 border border-gray-500"></div>
      <div>
        <h4 class="text-xs font-bold text-gray-200">${item.color}</h4>
        <p class="text-xs text-gray-400">${item.func}</p>
      </div>
    </div>
  `).join('');
}

// --- INITIAL RENDER ---
window.onload = () => {
  renderTorque(TORQUE_DATA);
  renderParts(PARTS_DATA);
  renderWiring();
};