// ========== RENDER FUNCTIONS ==========

function renderServiceGrid() {
  const grid = document.getElementById('serviceGrid');
  if (!grid) return;

  grid.innerHTML = SERVICES.map(service => `
    <div data-service-id="${service.id}"
         class="service-btn p-4 rounded-2xl bg-[#141418] ${service.borderColor} ${service.shadowColor} hover:scale-105 transition transform cursor-pointer text-center font-semibold text-sm text-gray-200 backdrop-blur-lg">
      <img src="${service.image}" alt="${service.name}" class="w-16 h-16 mx-auto mb-2 rounded-lg" onerror="this.style.display='none'">
      <span class="bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent font-bold text-xs">${service.name}</span>
    </div>
  `).join('');

  attachGridListeners();
}

function renderDetailPage(service) {
  const container = document.getElementById('serviceDetailContainer');
  if (!container) return;

  const template = document.getElementById(service.templateId);
  let templateText = '';

  if (template) {
    templateText = template.tagName === 'TEMPLATE'
      ? template.innerHTML.trim()
      : template.textContent.trim();
  }

  container.innerHTML = `
    <div class="max-w-xl mx-auto bg-[#141418] p-6 rounded-2xl border border-${service.color}-500 shadow-[0_0_25px_rgba(0,0,0,0.45)] mt-10">
      <div class="flex justify-center mb-4">
        <img src="${service.image}" alt="${service.name}" class="w-24 h-24 rounded-lg" onerror="this.src='https://via.placeholder.com/150'">
      </div>
      <h1 class="text-4xl font-extrabold text-center bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent tracking-wide">${service.name}</h1>
      <div id="serviceContent" class="text-gray-300 text-base leading-relaxed space-y-6 mt-6">
        <!-- Content will be injected from template -->
      </div>
      <div class="mt-6 grid grid-cols-2 gap-3">
        <button data-copy="${service.templateId}" class="copyBtn w-full bg-${service.color}-600 hover:bg-${service.color}-700 transition py-2 rounded-lg font-semibold">Copy Format</button>
        <button data-order="${service.templateId}" class="orderBtn w-full bg-${service.color}-600 hover:bg-${service.color}-700 transition py-2 rounded-lg font-semibold">Order via WhatsApp</button>
      </div>
      <button id="backBtn" class="mt-4 w-full bg-[#1b1b24] hover:bg-[#232330] border border-gray-700 transition py-2 rounded-lg font-semibold">Kembali</button>
    </div>
  `;

  // Extract and inject content from template
  if (template && templateText) {
    const contentDiv = document.getElementById('serviceContent');
    const lines = templateText.split('\n');
    let html = '';
    let currentSection = null;
    let items = [];

    lines.forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('[') || line.startsWith('Format') || line === '') return;

      if (line.match(/^[A-Z\s]+$/)) {
        if (currentSection && items.length) {
          if (currentSection === 'NOTE') {
            html += `<div><h2 class="text-2xl font-bold bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent">${currentSection}</h2><ul class="mt-2 list-disc list-inside space-y-1">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
          } else {
            html += `<div><h2 class="text-2xl font-bold bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent">${currentSection}</h2><ul class="mt-2 space-y-1">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
          }
          items = [];
        }
        currentSection = line;
      } else if (currentSection) {
        items.push(line);
      }
    });

    if (currentSection && items.length) {
      if (currentSection === 'NOTE') {
        html += `<div><h2 class="text-2xl font-bold bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent">${currentSection}</h2><ul class="mt-2 list-disc list-inside space-y-1">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
      } else {
        html += `<div><h2 class="text-2xl font-bold bg-gradient-to-r ${service.textGradient} bg-clip-text text-transparent">${currentSection}</h2><ul class="mt-2 space-y-1">${items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
      }
    }

    contentDiv.innerHTML = html;
  }

  // Attach button listeners
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showMainPage();
      CURRENT_SERVICE = 'Beranda';
      setWALink();
    });
  }

  const copyBtns = document.querySelectorAll('#serviceDetailContainer .copyBtn');
  const orderBtns = document.querySelectorAll('#serviceDetailContainer .orderBtn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-copy');
      const txt = getTemplateText(id);
      if (txt) {
        await navigator.clipboard.writeText(txt);
        showToast('Format disalin ke clipboard ✓');
      }
    });
  });

  orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-order');
      const txt = getTemplateText(id);
      if (txt) {
        orderViaWA(id);
      }
    });
  });
}

function attachGridListeners() {
  const buttons = document.querySelectorAll('.service-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service-id');
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        showDetailPage(service);
        CURRENT_SERVICE = service.name;
        setWALink();
      }
    });
  });
}

function showMainPage() {
  const mainPage = document.getElementById('mainPage');
  const detailPage = document.getElementById('serviceDetailPage');
  if (mainPage) mainPage.classList.remove('hidden');
  if (detailPage) detailPage.classList.add('hidden');
}

function showDetailPage(service) {
  const mainPage = document.getElementById('mainPage');
  const detailPage = document.getElementById('serviceDetailPage');
  if (mainPage) mainPage.classList.add('hidden');
  if (detailPage) detailPage.classList.remove('hidden');
  renderDetailPage(service);
}

console.log('✓ RENDER FUNCTIONS LOADED');
