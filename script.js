// script.js
document.addEventListener('DOMContentLoaded', () => {
  let tableData = [ 
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 31.46, tag: '', category: 'Capsules' },
        { desc: 'Biotina gotas 30ml - Tutti Frutti', unit: 18.07, tag: '', category: 'Liquid extracts (drops)' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 63.41, tag: '', category: 'Powders' },
        { desc: 'Reforce Hair 60caps', unit: 22.44, tag: '', category: 'Capsules' },
        { desc: '3 Magnésios 60 Caps', unit: 13.71, tag: '', category: 'Capsules' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 19.02, tag: '', category: 'Capsules' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 29.31, tag: '', category: 'Capsules' },
        { desc: 'Creatina Monohidratada 150g Natural', unit: 43.79, tag: '', category: 'Powders' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 60.06, tag: 'novo', category: 'New arrivals' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 16.48, tag: 'gotas', category: 'Liquid extracts (drops)' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 16.48, tag: '', category: 'Capsules' },
        { desc: 'CO-MAG 60caps', unit: 26.00, tag: '', category: 'Capsules' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 20.67, tag: '', category: 'Capsules' },
        { desc: 'Derma B - Biotina Gummy 30gomas - Morango', unit: 35.79, tag: 'ultimo-lote', category: 'Gummies' }, 
        { desc: 'D3 + K2 30caps (2000UI / 159mcg)', unit: 11.91, tag: '', category: 'Capsules' },
        { desc: 'Ferrofor + C 60caps', unit: 13.07, tag: 'novo', category: 'New arrivals' },
        { desc: 'Feno Grego 60caps', unit: 13.81, tag: 'novo', category: 'New arrivals' },
        { desc: 'Morofor 120caps', unit: 20.22, tag: 'novo', category: 'New arrivals' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 21.94, tag: '', category: 'Capsules' },
        { desc: 'Magnésio Dimalato 60caps', unit: 16.21, tag: '', category: 'Capsules' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 19.78, tag: 'novo', category: 'Blister packs' },
        { desc: 'Magnésio Quelato 60caps', unit: 14.83, tag: '', category: 'Capsules' },
        { desc: 'Memo Ative 30caps', unit: 13.75, tag: '', category: 'Capsules' },
        { desc: 'Melatokalm Gotas 30ml (Melatonina)', unit: 16.10, tag: '', category: 'Liquid extracts (drops)' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 14.45, tag: '', category: 'Capsules' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 20.67, tag: '', category: 'Oils' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60caps', unit: 31.26, tag: 'novo', category: 'Oils' },
        { desc: 'Ômega 3 IFOS 60caps 1gr Softgel', unit: 37.31, tag: '', category: 'Oils' }, 
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 31.26, tag: '', category: 'Oils' }, 
        { desc: 'PEA-600 60caps', unit: 24.29, tag: 'novo', category: 'New arrivals' },
        { desc: 'Picolinato de Cromo 30caps', unit: 12.67, tag: '', category: 'Capsules' },
        { desc: 'Reartron 60caps', unit: 30.04, tag: '', category: 'Capsules' },
        { desc: 'Vitamina B12 30caps', unit: 12.03, tag: '', category: 'Capsules' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 16.48, tag: '', category: 'Liquid extracts (drops)' },
        { desc: 'Vitamina K2 30caps', unit: 12.67, tag: '', category: 'Capsules' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 11.78, tag: '', category: 'Capsules' },
        { desc: 'SuperVita C 60caps', unit: 13.09, tag: 'novo', category: 'New arrivals' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 12.25, tag: '', category: 'Capsules' },
        { desc: 'Ashwagandha 60caps', unit: 17.01, tag: 'novo', category: 'New arrivals' },
        { desc: 'Amora Miúra 60cap', unit: 13.18, tag: '', category: 'Capsules' },
        { desc: 'Amora com Isoflavona 60cap', unit: 13.30, tag: '', category: 'Capsules' },
        { desc: 'Calmim 60cap', unit: 14.74, tag: '', category: 'Capsules' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 13.44, tag: '', category: 'Capsules' },
        { desc: 'Carvão Vegetal 60cap', unit: 12.79, tag: '', category: 'Capsules' },
        { desc: 'Castanha da Índia 60cap', unit: 14.57, tag: '', category: 'Capsules' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 12.67, tag: '', category: 'Capsules' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 14.06, tag: '', category: 'Capsules' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 14.10, tag: '', category: 'Capsules' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 18.32, tag: '', category: 'Capsules' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 12.79, tag: '', category: 'Capsules' },
        { desc: 'Espinheira Santa 60cap', unit: 13.30, tag: '', category: 'Capsules' },
        { desc: 'Ginkgo Biloba 60cap', unit: 14.19, tag: '', category: 'Capsules' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 14.70, tag: '', category: 'Capsules' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 15.97, tag: 'novo', category: 'New arrivals' },
        { desc: 'Maca Peruana Negra 60cap', unit: 16.86, tag: '', category: 'Capsules' },
        { desc: 'Mais Ativa 60cap', unit: 12.67, tag: '', category: 'Capsules' },
        { desc: 'Óleo de Abacate 1000mg 60cap', unit: 28.81, tag: 'ultimo-lote', category: 'Oils' },
        { desc: 'Óleo de Alho 500mg 60cap', unit: 18.89, tag: '', category: 'Oils' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 30.15, tag: 'ultimo-lote', category: 'Oils' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 13.94, tag: '', category: 'Capsules' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 14.32, tag: '', category: 'Capsules' },
        { desc: 'Tribulus Terrestris 40% 60cap', unit: 13.94, tag: '', category: 'Capsules' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 13.56, tag: '', category: 'Capsules' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 13.43, tag: '', category: 'Capsules' },
        { desc: 'Valeriana 60cap', unit: 17.75, tag: '', category: 'Capsules' },
        { desc: 'Concentrado de Inhame - 250ml', unit: 8.35, tag: 'chá', category: 'Herbal teas' },
        { desc: 'Ora Pro Nóbis Chá Pronto - 250ml', unit: 8.45, tag: 'chá', category: 'Herbal teas' }
      ]
    }
  ];

  tableData.forEach((brand, brandIndex) => {
    brand.items.forEach((item, itemIndex) => {
      item.id = `brand${brandIndex}_item${itemIndex}`;
      if (!item.category) {
          item.category = assignCategory(item);
      }
    });
  });
  
  const originalTableData = JSON.parse(JSON.stringify(tableData)); 

  const definedCategories = [
    "Capsules", "Liquid extracts (drops)", "Herbal teas", "New arrivals",
    "Last batch", "Promotions", "Oils", "Powders", "Gummies", "Blister packs", "Others"
  ];
  
  function assignCategory(item) { 
    if (item.category && item.category !== "Others") return item.category; 
    const descLower = item.desc.toLowerCase();
    if (item.tag === 'novo') return "New arrivals";
    if (item.tag === 'ultimo-lote') return "Last batch";
    if (item.tag === 'chá') return "Herbal teas";
    if (descLower.includes('gummy') || descLower.includes('gomas')) return "Gummies";
    if (descLower.includes('blister')) return "Blister packs";
    if (descLower.includes('caps') || descLower.includes('cap')) return "Capsules";
    if (descLower.includes('gotas') || descLower.includes('ml')) return "Liquid extracts (drops)";
    if (descLower.includes('óleo') || descLower.includes('oleo')) return "Oils";
    if (/\d+g\s|\d+kg\s|pó/.test(descLower) && !descLower.includes('caps')) return "Powders";
    return "Others";
  }
  
  originalTableData.forEach(brandData => {
    brandData.items.forEach(item => {
      item.category = assignCategory(item);
    });
  });

  const container = document.getElementById('tabela-container');
  const categoryFilterEl = document.getElementById('category-filter');
  const stockStatusFilterEl = document.getElementById('stock-status-filter');
  const minPriceEl = document.getElementById('min-price');
  const maxPriceEl = document.getElementById('max-price');
  const promotionsFilterEl = document.getElementById('promotions-filter');
  const orderSimulationSummaryEl = document.getElementById('order-simulation-summary');
  const btnExportEl = document.getElementById('btn-export');

  function populateCategoryFilter() {
    const allCategories = new Set(["All Categories"]); 
    originalTableData.forEach(brand => {
      brand.items.forEach(item => allCategories.add(item.category));
    });
    
    categoryFilterEl.innerHTML = ''; 

    const sortedCategories = Array.from(allCategories).sort((a, b) => {
        if (a === "All Categories") return -1;
        if (b === "All Categories") return 1;
        if (a === "Others") return 1;
        if (b === "Others") return -1;
        return a.localeCompare(b);
    });

    sortedCategories.forEach(categoryText => {
      const option = document.createElement('option');
      option.value = categoryText === "All Categories" ? 'all' : categoryText;
      option.textContent = categoryText;
      categoryFilterEl.appendChild(option);
    });
  }

  function renderTables(dataToRender) {
    container.innerHTML = ''; 

    dataToRender.forEach((brandData) => { 
      if (brandData.items.length === 0) return; 

      const tableScrollContainer = document.createElement('div'); // Create scroll wrapper
      tableScrollContainer.className = 'table-container-scrollable';

      const tbl = document.createElement('table');
      tbl.className = 'table-brand';

      const colgroup = document.createElement('colgroup');
      ['50%', '15%', '15%', '20%'].forEach(w => { 
        const col = document.createElement('col');
        // col.style.width = w; // Widths are now primarily controlled by CSS media queries for table-layout:auto responsiveness
        colgroup.appendChild(col);
      });
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
      hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 un)</th><th>Quantidade</th>`; 
      thead.appendChild(hdr);
      tbl.appendChild(thead);

      const tbody = document.createElement('tbody');
      
      definedCategories.forEach(category => {
        const itemsInCategory = brandData.items.filter(item => item.category === category);

        if (itemsInCategory.length > 0) {
          const categoryRow = document.createElement('tr');
          const categoryCell = document.createElement('th');
          categoryCell.colSpan = 4; 
          categoryCell.className = 'category-header';
          categoryCell.textContent = category;
          categoryRow.appendChild(categoryCell);
          tbody.appendChild(categoryRow);

          itemsInCategory.forEach(item => {
            const tr = document.createElement('tr');
            const tdDesc = document.createElement('td');
            tdDesc.textContent = item.desc;
            if (item.tag) {
              const span = document.createElement('span');
              span.className = `tag ${item.tag}`;
              span.textContent = item.tag.toUpperCase();
              tdDesc.appendChild(span);
            }
            tr.appendChild(tdDesc);

            const tdUnit = document.createElement('td');
            tdUnit.textContent = `R$ ${item.unit.toFixed(2)}`;
            tr.appendChild(tdUnit);

            const tdBox = document.createElement('td');
            tdBox.textContent = `R$ ${(item.unit * 12).toFixed(2)}`;
            tr.appendChild(tdBox);

            const tdQty = document.createElement('td');
            const qtyInput = document.createElement('input');
            qtyInput.type = 'number';
            qtyInput.min = '0';
            qtyInput.className = 'quantity-input';
            qtyInput.dataset.productId = item.id; 
            tdQty.appendChild(qtyInput);
            tr.appendChild(tdQty);

            tbody.appendChild(tr);
          });
        }
      });
      tbl.appendChild(tbody);
      tableScrollContainer.appendChild(tbl); // Append table to scroll wrapper
      container.appendChild(tableScrollContainer); // Append scroll wrapper to main container
    });
     if (container.innerHTML === '') {
        container.innerHTML = '<p class="no-results-message">Nenhum item corresponde aos filtros selecionados.</p>';
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

  function simulateOrder() {
    const selectedItems = [];
    let grandTotal = 0;
    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(input => {
      const quantity = parseInt(input.value, 10);
      if (quantity > 0) {
        const productId = input.dataset.productId;
        const product = findProductById(productId); 
        if (product) {
          const itemTotal = product.unit * quantity;
          selectedItems.push({
            desc: product.desc,
            unitPrice: product.unit,
            quantity: quantity,
            total: itemTotal
          });
          grandTotal += itemTotal;
        }
      }
    });

    orderSimulationSummaryEl.innerHTML = ''; 
    if (selectedItems.length > 0) {
      // Wrap summary table in its scroll container
      let summaryHTML = '<h3>Resumo do Pedido</h3><div class="order-summary-table-container"><table class="order-summary-table"><thead><tr><th>Produto</th><th>Preço Unit.</th><th>Qtde.</th><th>Total Item</th></tr></thead><tbody>';
      selectedItems.forEach(item => {
        summaryHTML += `<tr>
          <td>${item.desc}</td>
          <td>R$ ${item.unitPrice.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>R$ ${item.total.toFixed(2)}</td>
        </tr>`;
      });
      summaryHTML += `</tbody><tfoot><tr><td colspan="3" style="text-align:right;"><strong>Total Geral:</strong></td><td><strong>R$ ${grandTotal.toFixed(2)}</strong></td></tr></tfoot></table></div>`; // Close table and div
      orderSimulationSummaryEl.innerHTML = summaryHTML;
      orderSimulationSummaryEl.style.display = 'block';
      btnExportEl.textContent = 'Exportar Cotação PDF';
      btnExportEl.classList.remove('hide-on-print'); // Ensure export button is visible for quote
    } else {
      orderSimulationSummaryEl.innerHTML = '<p>Por favor, insira quantidades nos produtos para simular um pedido.</p>';
      orderSimulationSummaryEl.style.display = 'block'; 
      btnExportEl.textContent = 'Exportar Catálogo PDF'; 
      btnExportEl.classList.add('hide-on-print'); // Hide if it's for catalog and we are printing quote
    }
  }
  
  function filterData() {
    const selectedCategory = categoryFilterEl.value;
    const selectedStockStatus = stockStatusFilterEl.value;
    const minPrice = parseFloat(minPriceEl.value) || 0;
    const maxPrice = parseFloat(maxPriceEl.value) || Infinity;
    const showPromotions = promotionsFilterEl.checked;

    let filteredData = JSON.parse(JSON.stringify(originalTableData)); 

    filteredData = filteredData.map(brand => {
      let items = brand.items.filter(item => {
        if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
        if (selectedStockStatus !== 'all') {
          if (selectedStockStatus === 'new' && item.category !== 'New arrivals' && item.tag !== 'novo') return false;
          if (selectedStockStatus === 'last' && item.category !== 'Last batch' && item.tag !== 'ultimo-lote') return false;
        }
        if (item.unit < minPrice || item.unit > maxPrice) return false;
        if (showPromotions && item.category !== 'Promotions') return false;
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
    renderTables(originalTableData);
    orderSimulationSummaryEl.innerHTML = ''; 
    orderSimulationSummaryEl.style.display = 'none';
    btnExportEl.textContent = 'Exportar Catálogo PDF';
    btnExportEl.classList.remove('hide-on-print'); // Default state for export button
  }
  
  document.getElementById('btn-apply-filters').addEventListener('click', filterData);
  document.getElementById('btn-reset-filters').addEventListener('click', resetFilters);
  document.getElementById('btn-simulate-order').addEventListener('click', simulateOrder);
  
  document.getElementById('btn-export').addEventListener('click', () => {
    const isQuoteActive = orderSimulationSummaryEl.innerHTML !== '' && 
                          orderSimulationSummaryEl.style.display === 'block' && 
                          !orderSimulationSummaryEl.querySelector('p');

    if (isQuoteActive) {
        document.body.classList.add('pdf-export-active'); // Prepare body for quote PDF
        const element = orderSimulationSummaryEl;
        const opt = {
          margin:       [0.5, 0.5, 0.5, 0.5], // Margins in inches [top, left, bottom, right]
          filename:     'cotacao_pedido.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save().then(() => {
            document.body.classList.remove('pdf-export-active'); // Clean up body class
        }).catch(err => {
            console.error("PDF generation error:", err);
            document.body.classList.remove('pdf-export-active');
        });
    } else {
        btnExportEl.classList.add('hide-on-print'); // Hide catalog export button for system print dialog
        window.print(); 
        // No reliable way to know when print dialog closes, so button might stay hidden if user cancels.
        // A small timeout could be used, or instruct user to refresh. For now, this is a limitation.
        setTimeout(() => btnExportEl.classList.remove('hide-on-print'), 2000); // Attempt to restore
    }
  });

  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });

  populateCategoryFilter();
  renderTables(originalTableData); 
  btnExportEl.classList.add('hide-on-print'); // Initially hide if it's for catalog print
});
