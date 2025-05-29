// script.js
document.addEventListener('DOMContentLoaded', () => {
  let orderInterfaceActive = false; 
  let currentSimulatedItems = []; 

  const definedCategories = [ 
    "Cápsulas", "Extratos Líquidos (gotas)", "Chás Medicinais", "Novidades",
    "Último Lote", "Promoções", "Populares", "Óleos", "Pós", "Gomas", "Cartelas", "Blends", "Outros"
  ];

  let tableData = [ 
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 31.46, tag: '', category: 'Cápsulas' },
        { desc: 'Biotina gotas 30ml - Tutti Frutti', unit: 18.07, tag: '', category: 'Extratos Líquidos (gotas)' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 63.41, tag: '', category: 'Pós' },
        { desc: 'Reforce Hair 60caps', unit: 22.44, tag: '', category: 'Cápsulas' },
        { desc: '3 Magnésios 60 Caps', unit: 13.71, tag: '', category: 'Cápsulas' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 19.02, tag: '', category: 'Cápsulas' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 29.31, tag: '', category: 'Cápsulas' },
        { desc: 'Creatina Monohidratada 150g Natural', unit: 43.79, tag: '', category: 'Pós' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 60.06, tag: 'novo', category: 'Novidades' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 16.48, tag: 'gotas', category: 'Extratos Líquidos (gotas)' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 16.48, tag: '', category: 'Cápsulas' },
        { desc: 'CO-MAG 60caps', unit: 26.00, tag: '', category: 'Cápsulas' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 20.67, tag: '', category: 'Cápsulas' },
        { desc: 'Derma B - Biotina Gummy 30gomas - Morango', unit: 35.79, tag: 'ultimo-lote', category: 'Gomas' }, 
        { desc: 'D3 + K2 30caps (2000UI / 159mcg)', unit: 11.91, tag: '', category: 'Cápsulas' },
        { desc: 'Ferrofor + C 60caps', unit: 13.07, tag: 'novo', category: 'Novidades' },
        { desc: 'Feno Grego 60caps', unit: 13.81, tag: 'novo', category: 'Novidades' },
        { desc: 'Morofor 120caps', unit: 20.22, tag: 'novo', category: 'Novidades' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 21.94, tag: '', category: 'Cápsulas' },
        { desc: 'Magnésio Dimalato 60caps', unit: 16.21, tag: '', category: 'Cápsulas' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 19.78, tag: 'novo', category: 'Cartelas' },
        { desc: 'Magnésio Quelato 60caps', unit: 14.83, tag: '', category: 'Cápsulas' },
        { desc: 'Memo Ative 30caps', unit: 13.75, tag: '', category: 'Cápsulas' },
        { desc: 'Melatokalm Gotas 30ml (Melatonina)', unit: 16.10, tag: '', category: 'Extratos Líquidos (gotas)' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 14.45, tag: '', category: 'Cápsulas' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 20.67, tag: '', category: 'Óleos' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60caps', unit: 31.26, tag: 'novo', category: 'Óleos' },
        { desc: 'Ômega 3 IFOS 60caps 1gr Softgel', unit: 37.31, tag: '', category: 'Óleos' }, 
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 31.26, tag: '', category: 'Óleos' }, 
        { desc: 'PEA-600 60caps', unit: 24.29, tag: 'novo', category: 'Novidades' },
        { desc: 'Picolinato de Cromo 30caps', unit: 12.67, tag: '', category: 'Cápsulas' },
        { desc: 'Reartron 60caps', unit: 30.04, tag: '', category: 'Cápsulas' },
        { desc: 'Vitamina B12 30caps', unit: 12.03, tag: '', category: 'Cápsulas' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 16.48, tag: '', category: 'Extratos Líquidos (gotas)' },
        { desc: 'Vitamina K2 30caps', unit: 12.67, tag: '', category: 'Cápsulas' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 11.78, tag: '', category: 'Cápsulas' },
        { desc: 'SuperVita C 60caps', unit: 13.09, tag: 'novo', category: 'Novidades' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 12.25, tag: '', category: 'Cápsulas' },
        { desc: 'Ashwagandha 60caps', unit: 17.01, tag: 'novo', category: 'Novidades' },
        { desc: 'Amora Miúra 60cap', unit: 13.18, tag: '', category: 'Cápsulas' },
        { desc: 'Amora com Isoflavona 60cap', unit: 13.30, tag: '', category: 'Cápsulas' },
        { desc: 'Calmim 60cap', unit: 14.74, tag: '', category: 'Cápsulas' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 13.44, tag: '', category: 'Cápsulas' },
        { desc: 'Carvão Vegetal 60cap', unit: 12.79, tag: '', category: 'Cápsulas' },
        { desc: 'Castanha da Índia 60cap', unit: 14.57, tag: '', category: 'Cápsulas' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 12.67, tag: '', category: 'Cápsulas' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 14.06, tag: '', category: 'Cápsulas' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 14.10, tag: '', category: 'Cápsulas' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 18.32, tag: '', category: 'Cápsulas' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 12.79, tag: '', category: 'Cápsulas' },
        { desc: 'Espinheira Santa 60cap', unit: 13.30, tag: '', category: 'Cápsulas' },
        { desc: 'Ginkgo Biloba 60cap', unit: 14.19, tag: '', category: 'Cápsulas' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 14.70, tag: '', category: 'Cápsulas' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 15.97, tag: 'novo', category: 'Novidades' },
        { desc: 'Maca Peruana Negra 60cap', unit: 16.86, tag: '', category: 'Cápsulas' },
        { desc: 'Mais Ativa 60cap', unit: 12.67, tag: '', category: 'Cápsulas' },
        { desc: 'Óleo de Abacate 1000mg 60cap', unit: 28.81, tag: 'ultimo-lote', category: 'Óleos' },
        { desc: 'Óleo de Alho 500mg 60cap', unit: 18.89, tag: '', category: 'Óleos' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 30.15, tag: 'ultimo-lote', category: 'Óleos' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 13.94, tag: '', category: 'Cápsulas' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 14.32, tag: '', category: 'Cápsulas' },
        { desc: 'Tribulus Terrestris 40% 60cap', unit: 13.94, tag: '', category: 'Cápsulas' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 13.56, tag: '', category: 'Cápsulas' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 13.43, tag: '', category: 'Cápsulas' },
        { desc: 'Valeriana 60cap', unit: 17.75, tag: '', category: 'Cápsulas' },
        { desc: 'Concentrado de Inhame - 250ml', unit: 8.35, tag: 'chá', category: 'Chás Medicinais' },
        { desc: 'Ora Pro Nóbis Chá Pronto - 250ml', unit: 8.45, tag: 'chá', category: 'Chás Medicinais' }
      ]
    }
  ];
  
  function assignCategory(item, forcePortuguese = false) {
    if (item.category && !forcePortuguese && definedCategories.includes(item.category)) {
        if (item.category === "Populares") { return "Populares"; }
    }
    const descLower = item.desc.toLowerCase();
    if (item.tag === 'novo') { return "Novidades"; }
    if (item.tag === 'ultimo-lote') { return "Último Lote"; }
    if (item.tag === 'chá') { return "Chás Medicinais"; }
    if (item.category && definedCategories.includes(item.category) && (forcePortuguese || item.category === "Populares")) {
        return item.category;
    }
    if (forcePortuguese && item.category && item.category !== "Populares") { 
        const map = { "Capsules": "Cápsulas", "Liquid extracts (drops)": "Extratos Líquidos (gotas)", "Herbal teas": "Chás Medicinais", "New arrivals": "Novidades", "Last batch": "Último Lote", "Promotions": "Promoções", "Oils": "Óleos", "Powders": "Pós", "Gummies": "Gomas", "Blister packs": "Cartelas"};
        if (map[item.category]) { return map[item.category]; }
    }
    if (descLower.includes('gummy') || descLower.includes('gomas')) { return "Gomas"; }
    if (descLower.includes('blister')) { return "Cartelas"; }
    if ((descLower.includes('caps') || descLower.includes('cap')) && !descLower.includes('softgel')) { return "Cápsulas"; }
    if (descLower.includes('gotas') || descLower.includes('ml')) { return "Extratos Líquidos (gotas)"; }
    if (descLower.includes('óleo') || descLower.includes('oleo') || descLower.includes('softgel')) { return "Óleos"; }
    if ((/\d+g\s|\d+kg\s|pó/.test(descLower)) && !descLower.includes('caps') && !descLower.includes('softgel') && !descLower.includes('gomas')) { return "Pós"; }
    if (descLower.includes('blend')) { return "Blends"; }
    return "Outros";
  }

  tableData.forEach((brand, brandIndex) => {
    brand.items.forEach((item, itemIndex) => {
      item.id = `brand${brandIndex}_item${itemIndex}`;
      item.quantity = 0; 
      item.category = assignCategory(item, true); 
    });
  });
  
  const originalTableData = JSON.parse(JSON.stringify(tableData)); 

  originalTableData.forEach(brandData => {
    brandData.items.forEach(item => {
      item.category = assignCategory(item); 
    });
  });

  const tabelaContainer = document.getElementById('tabela-container');
  const categoryFilterEl = document.getElementById('category-filter');
  const stockStatusFilterEl = document.getElementById('stock-status-filter');
  const minPriceEl = document.getElementById('min-price');
  const maxPriceEl = document.getElementById('max-price');
  const promotionsFilterEl = document.getElementById('promotions-filter');
  const orderSimulationSummaryEl = document.getElementById('order-simulation-summary');
  const btnExportEl = document.getElementById('btn-export');
  const btnThemeEl = document.getElementById('btn-theme');
  const btnSimulateOrderEl = document.getElementById('btn-simulate-order');
  const floatingTotalEl = document.getElementById('floating-order-total'); 

  function populateCategoryFilter() {
    const categoriesFromData = new Set();
    originalTableData.forEach(brand => {
        brand.items.forEach(item => {
            if (item.category) { categoriesFromData.add(item.category); }
        });
    });
    const allDisplayCategories = [];
    definedCategories.forEach(definedCat => {
        if (definedCat === "Populares" || categoriesFromData.has(definedCat)) { 
            allDisplayCategories.push(definedCat);
            categoriesFromData.delete(definedCat); 
        }
    });
    categoriesFromData.forEach(cat => allDisplayCategories.push(cat)); 
    categoryFilterEl.innerHTML = ''; 
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Todas as Categorias'; 
    categoryFilterEl.appendChild(allOption);
    const uniqueDisplayCategories = [...new Set(allDisplayCategories)];
    uniqueDisplayCategories.forEach(categoryText => {
        if (categoryText === "Outros" && !originalTableData.some(brand => brand.items.some(item => item.category === "Outros"))) {
        } else {
            const option = document.createElement('option');
            option.value = categoryText;
            option.textContent = categoryText;
            categoryFilterEl.appendChild(option);
        }
    });
  }

  function renderTables(dataToRender) {
    document.body.classList.toggle('order-interface-visible', orderInterfaceActive);
    tabelaContainer.innerHTML = ''; 
    dataToRender.forEach((brandData) => { 
      if (brandData.items.length === 0) { return; }
      const tableScrollContainer = document.createElement('div'); 
      tableScrollContainer.className = 'table-container-scrollable';
      const tbl = document.createElement('table');
      tbl.className = 'table-brand';
      const colgroup = document.createElement('colgroup');
      const colWidths = ['50%', '15%', '15%', '20%']; 
      for(let i = 0; i < 3; i++) {
        const col = document.createElement('col');
        colgroup.appendChild(col);
      }
      const qtyCol = document.createElement('col');
      colgroup.appendChild(qtyCol);
      tbl.appendChild(colgroup);
      const bannerRow = document.createElement('tr');
      const bannerCell = document.createElement('th');
      bannerCell.colSpan = 4; 
      const bannerDiv = document.createElement('div');
      bannerDiv.className = 'brand-banner';
      bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
      const img = document.createElement('img');
      img.src = brandData.logo;
      img.alt = brandData.brand;
      bannerDiv.appendChild(img);
      bannerDiv.append(brandData.brand);
      bannerCell.appendChild(bannerDiv);
      bannerRow.appendChild(bannerCell);
      const thead = document.createElement('thead');
      thead.appendChild(bannerRow);
      const hdr = document.createElement('tr');
      hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 un)</th><th class="quantity-column-header">Quantidade</th>`; 
      thead.appendChild(hdr);
      tbl.appendChild(thead);
      const tbody = document.createElement('tbody');
      definedCategories.forEach(categoryPT => {
        const itemsInCategory = brandData.items.filter(item => item.category === categoryPT);
        if (itemsInCategory.length > 0) {
          const categoryRow = document.createElement('tr');
          const categoryCell = document.createElement('th');
          categoryCell.colSpan = 4; 
          categoryCell.className = 'category-header';
          categoryCell.textContent = categoryPT; 
          categoryRow.appendChild(categoryCell);
          tbody.appendChild(categoryRow);
          itemsInCategory.forEach(item => {
            const tr = document.createElement('tr');
            tr.className = 'product-data-row'; 
            const tdDesc = document.createElement('td');
            tdDesc.textContent = item.desc;
            if (item.tag) {
              const spanTag = document.createElement('span');
              spanTag.className = `tag ${item.tag}`;
              spanTag.textContent = item.tag.toUpperCase(); 
              tdDesc.appendChild(spanTag);
            }
            tr.appendChild(tdDesc);
            const tdUnit = document.createElement('td');
            tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
            tr.appendChild(tdUnit);
            const tdBox = document.createElement('td');
            tdBox.textContent = `R$ ${(item.unit * 12).toFixed(2)}`;
            tr.appendChild(tdBox);
            const tdQty = document.createElement('td');
            tdQty.className = 'quantity-column-cell'; 
            const qtyControlDiv = document.createElement('div');
            qtyControlDiv.className = 'quantity-control';
            const decreaseBtn = document.createElement('button');
            decreaseBtn.className = 'quantity-btn quantity-decrease';
            decreaseBtn.textContent = '-';
            decreaseBtn.dataset.productId = item.id;
            const displaySpan = document.createElement('span');
            displaySpan.className = 'quantity-display';
            displaySpan.dataset.productId = item.id; 
            displaySpan.textContent = item.quantity; 
            const increaseBtn = document.createElement('button');
            increaseBtn.className = 'quantity-btn quantity-increase';
            increaseBtn.textContent = '+';
            increaseBtn.dataset.productId = item.id;
            qtyControlDiv.appendChild(decreaseBtn);
            qtyControlDiv.appendChild(displaySpan);
            qtyControlDiv.appendChild(increaseBtn);
            tdQty.appendChild(qtyControlDiv);
            tr.appendChild(tdQty);
            tbody.appendChild(tr);
          });
        }
      });
      tbl.appendChild(tbody);
      tableScrollContainer.appendChild(tbl); 
      tabelaContainer.appendChild(tableScrollContainer); 
    });
     if (tabelaContainer.innerHTML === '') {
        tabelaContainer.innerHTML = '<p class="no-results-message">Nenhum item corresponde aos filtros selecionados.</p>';
    }
  }

  function findProductById(productId) {
    for (const brand of originalTableData) {
      for (const item of brand.items) {
        if (item.id === productId) {
          return item;
        }
      }
    }
    return null;
  }

  function calculateCurrentGrandTotal() {
    let currentTotal = 0;
    originalTableData.forEach(brand => {
      brand.items.forEach(item => {
        if (item.quantity > 0) {
          currentTotal += item.unit * item.quantity;
        }
      });
    });
    return currentTotal;
  }

  function updateFloatingTotal(total) {
    if (floatingTotalEl) {
      floatingTotalEl.textContent = `Total do Pedido: R$ ${total.toFixed(2)}`;
    }
  }

  tabelaContainer.addEventListener('click', function(event) {
    const target = event.target;
    const productId = target.dataset.productId;
    if (!productId || !target.classList.contains('quantity-btn')) { return; }

    const product = findProductById(productId);
    if (!product) { return; }

    let quantityChanged = false;
    if (target.classList.contains('quantity-increase')) {
      product.quantity += 12;
      quantityChanged = true;
    } else if (target.classList.contains('quantity-decrease')) {
      if (product.quantity >= 12) {
        product.quantity -= 12;
        quantityChanged = true;
      }
    }

    if (quantityChanged) {
      const displaySpans = document.querySelectorAll(`.quantity-display[data-product-id="${productId}"]`);
      displaySpans.forEach(span => { span.textContent = product.quantity; });
      if(orderInterfaceActive) {
        const currentGrandTotal = calculateCurrentGrandTotal();
        updateFloatingTotal(currentGrandTotal);
      }
    }
  });

  function simulateOrder() {
    currentSimulatedItems = []; 
    let grandTotal = 0;
    originalTableData.forEach(brand => {
      brand.items.forEach(item => {
        if (item.quantity > 0) {
          const itemTotal = item.unit * item.quantity;
          currentSimulatedItems.push({ 
            desc: item.desc,
            unitPrice: item.unit,
            quantity: item.quantity, 
            total: itemTotal
          });
          grandTotal += itemTotal;
        }
      });
    });

    updateFloatingTotal(grandTotal); 

    orderSimulationSummaryEl.innerHTML = ''; 
    if (currentSimulatedItems.length > 0) {
      let summaryHTML = `<div class="pdf-logo-placeholder"><img src="images/purafor-logo.png" alt="Logo da Empresa" style="max-height: 50px; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto;"></div>`;
      summaryHTML += `<h2 class="quote-title" style="text-align:center;">Cotação de Pedido</h2>`;
      summaryHTML += '<div class="order-summary-table-container"><table class="order-summary-table"><thead><tr><th>Produto</th><th>Preço Unit.</th><th>Qtde.</th><th>Total Item</th></tr></thead><tbody>';
      currentSimulatedItems.forEach(item => {
        summaryHTML += `<tr class="product-data-row">
          <td>${item.desc}</td>
          <td>R$ ${item.unitPrice.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>R$ ${item.total.toFixed(2)}</td>
        </tr>`;
      });
      summaryHTML += `</tbody><tfoot><tr><td colspan="3" style="text-align:right; font-weight:bold;">Total Geral:</td><td class="grand-total-cell" style="font-weight:bold;">R$ ${grandTotal.toFixed(2)}</td></tr></tfoot></table></div>`;
      summaryHTML += `<div class="pdf-quote-footer"><p>Endereço da Empresa | Telefone | email@example.com</p><p>&copy; ${new Date().getFullYear()} Nome da Empresa. Todos os direitos reservados.</p></div>`;
      orderSimulationSummaryEl.innerHTML = summaryHTML;
      if (orderInterfaceActive) { 
          btnExportEl.textContent = 'Exportar Cotação PDF';
      }
    } else {
      orderSimulationSummaryEl.innerHTML = '<p>Por favor, insira quantidades nos produtos para simular um pedido.</p>'; 
      btnExportEl.textContent = 'Exportar Catálogo PDF'; 
    }
  }
  
  btnSimulateOrderEl.addEventListener('click', () => {
    if (!orderInterfaceActive) {
      orderInterfaceActive = true;
      document.body.classList.add('order-interface-visible');
      btnSimulateOrderEl.textContent = 'Atualizar Pedido';
    }
    simulateOrder(); 
  });

  function filterData() {
    const selectedCategory = categoryFilterEl.value; 
    const selectedStockStatus = stockStatusFilterEl.value; 
    const minPrice = parseFloat(minPriceEl.value) || 0;
    const maxPrice = parseFloat(maxPriceEl.value) || Infinity;
    const showPromotions = promotionsFilterEl.checked;
    let filteredData = JSON.parse(JSON.stringify(originalTableData)); 
    filteredData = filteredData.map(brand => {
      let items = brand.items.filter(item => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) { return false; }
        if (selectedStockStatus !== 'all') {
          if (selectedStockStatus === 'new' && item.category !== 'Novidades') { return false; }
          if (selectedStockStatus === 'last' && item.category !== 'Último Lote') { return false; }
        }
        if (item.unit < minPrice || item.unit > maxPrice) { return false; }
        if (showPromotions && item.category !== 'Promoções') { return false; }
        return true;
      });
      return { ...brand, items: items };
    }).filter(brand => brand.items.length > 0); 
    renderTables(filteredData); 
  }

  function resetFilters() {
    categoryFilterEl.value = 'all';
    stockStatusFilterEl.value = 'all';
    minPriceEl.value = '';
    maxPriceEl.value = '';
    promotionsFilterEl.checked = false;
    
    originalTableData.forEach(brand => {
      brand.items.forEach(item => {
        item.quantity = 0;
      });
    });
    currentSimulatedItems = []; 

    if (orderInterfaceActive) {
        orderInterfaceActive = false;
        document.body.classList.remove('order-interface-visible');
        btnSimulateOrderEl.textContent = 'Simular Pedido';
        orderSimulationSummaryEl.innerHTML = ''; 
    }
    updateFloatingTotal(0); 
    renderTables(originalTableData); 
    btnExportEl.textContent = 'Exportar Catálogo PDF'; 
  }
  
  document.getElementById('btn-apply-filters').addEventListener('click', filterData);
  document.getElementById('btn-reset-filters').addEventListener('click', resetFilters);
  
  btnExportEl.addEventListener('click', () => {
    const shouldExportQuote = orderInterfaceActive && currentSimulatedItems.length > 0;

    if (shouldExportQuote) {
        document.body.classList.add('pdf-export-active'); 
        const element = orderSimulationSummaryEl;
        const opt = {
          margin:       [15, 10, 15, 10], 
          filename:     'cotacao_pedido.pdf', 
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false, scrollY: 0 }, 
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save().then(() => {
            document.body.classList.remove('pdf-export-active'); 
        }).catch(err => {
            console.error("PDF generation error:", err);
            document.body.classList.remove('pdf-export-active');
        });
    } else { 
        btnExportEl.classList.add('hide-on-print-temp'); 
        window.print(); 
        setTimeout(() => { btnExportEl.classList.remove('hide-on-print-temp'); }, 1000); 
    }
  });

  btnThemeEl.addEventListener('click', () => { 
    document.body.classList.toggle('dark');
    btnThemeEl.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro'; 
  });

  originalTableData.forEach(brand => { 
    brand.items.forEach(item => {
      if (item.quantity === undefined) { item.quantity = 0; }
    });
  });

  populateCategoryFilter(); 
  renderTables(originalTableData); 
  btnThemeEl.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro'; 
  btnExportEl.textContent = 'Exportar Catálogo PDF'; 
  updateFloatingTotal(0); 
});
