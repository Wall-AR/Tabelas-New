// script.js
document.addEventListener('DOMContentLoaded', () => {
  class ProductCatalog {
    constructor() {
      this.orderInterfaceActive = false;
      this.currentSimulatedItems = [];
      this.config = {
        categories: [
          "Cápsulas", "Extratos Líquidos (gotas)", "Chás Medicinais", "Novidades",
          "Último Lote", "Promoções", "Populares", "Óleos", "Pós", "Gomas", "Cartelas", "Blends", "Outros"
        ],
        logoPlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", // 1x1 transparent PNG
        debounceTimer: null,
        debounceDelay: 300 // ms for filter input debounce
      };
      this.elements = {}; // To be filled by cacheElements
      this.originalTableData = []; // To be filled by setupData

      this.init();
    }

    init() {
      try {
        this.cacheElements();
        this.setupData();
        this.populateCategoryFilter();
        this.setupEventListeners();
        this.renderTables(this.config.originalTableData);
        this.updateUI();
      } catch (error) {
        this.handleError("Initialization failed", error);
      }
    }

    cacheElements() {
      this.elements.tabelaContainer = document.getElementById('tabela-container');
      this.elements.categoryFilterEl = document.getElementById('category-filter');
      this.elements.stockStatusFilterEl = document.getElementById('stock-status-filter');
      this.elements.minPriceEl = document.getElementById('min-price');
      this.elements.maxPriceEl = document.getElementById('max-price');
      this.elements.promotionsFilterEl = document.getElementById('promotions-filter');
      this.elements.orderSimulationSummaryEl = document.getElementById('order-simulation-summary');
      this.elements.btnExportEl = document.getElementById('btn-export');
      this.elements.btnThemeEl = document.getElementById('btn-theme');
      this.elements.btnSimulateOrderEl = document.getElementById('btn-simulate-order');
      this.elements.floatingTotalEl = document.getElementById('floating-order-total');
      this.elements.btnApplyFiltersEl = document.getElementById('btn-apply-filters');
      this.elements.btnResetFiltersEl = document.getElementById('btn-reset-filters');
    }

    setupData() {
      const rawTableData = this.getProductData();
      this.config.originalTableData = this.processProductData(rawTableData);
    }

    getProductData() {
      // This is the main product data array, identical to the previous script.js
      return [
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
    }

    processProductData(data) {
      const processedData = JSON.parse(JSON.stringify(data)); // Deep copy
      processedData.forEach((brand, brandIndex) => {
        brand.items.forEach((item, itemIndex) => {
          item.id = `brand${brandIndex}_item${itemIndex}`;
          item.quantity = 0;
          item.category = this.assignCategory(item, true);
        });
      });
      return processedData;
    }

    assignCategory(item, forceUpdate = false) {
      if (item.category && !forceUpdate && this.config.categories.includes(item.category)) {
        if (item.category === "Populares") { return "Populares"; }
      }
      const descLower = item.desc.toLowerCase();
      if (item.tag === 'novo') { return "Novidades"; }
      if (item.tag === 'ultimo-lote') { return "Último Lote"; }
      if (item.tag === 'chá') { return "Chás Medicinais"; }

      if (item.category && this.config.categories.includes(item.category) && (forceUpdate || item.category === "Populares")) {
          return item.category;
      }
      if (forceUpdate && item.category && item.category !== "Populares") {
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

    setupEventListeners() {
      this.elements.btnSimulateOrderEl.addEventListener('click', this.handleOrderSimulation.bind(this));
      this.elements.btnApplyFiltersEl.addEventListener('click', this.applyFilters.bind(this));
      this.elements.btnResetFiltersEl.addEventListener('click', this.resetFilters.bind(this));
      this.elements.btnExportEl.addEventListener('click', this.handleExport.bind(this));
      this.elements.btnThemeEl.addEventListener('click', this.toggleTheme.bind(this));

      // Event delegation for quantity buttons
      this.elements.tabelaContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('quantity-increase')) {
          this.handleQuantityChange(target.dataset.productId, 'increase');
        } else if (target.classList.contains('quantity-decrease')) {
          this.handleQuantityChange(target.dataset.productId, 'decrease');
        }
      });

      // Debounced listeners for text/number inputs
      const debouncedApplyFilters = this.debounce(this.applyFilters.bind(this), this.config.debounceDelay);
      this.elements.minPriceEl.addEventListener('input', debouncedApplyFilters);
      this.elements.maxPriceEl.addEventListener('input', debouncedApplyFilters);

      // Immediate listeners for select/checkbox
      this.elements.categoryFilterEl.addEventListener('change', this.applyFilters.bind(this));
      this.elements.stockStatusFilterEl.addEventListener('change', this.applyFilters.bind(this));
      this.elements.promotionsFilterEl.addEventListener('change', this.applyFilters.bind(this));
    }

    debounce(func, delay) {
      return (...args) => {
        clearTimeout(this.config.debounceTimer);
        this.config.debounceTimer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }

    createBrandTable(brandData) {
      const tableScrollContainer = document.createElement('div');
      tableScrollContainer.className = 'table-container-scrollable';

      const tbl = document.createElement('table');
      tbl.className = 'table-brand';

      const colgroup = document.createElement('colgroup');
      for(let i = 0; i < 3; i++) { // 3 for product info + 1 for quantity
        const col = document.createElement('col');
        colgroup.appendChild(col);
      }
      const qtyCol = document.createElement('col');
      colgroup.appendChild(qtyCol);
      tbl.appendChild(colgroup);

      tbl.appendChild(this.createBrandHeader(brandData, 4));
      tbl.appendChild(this.createTableHeader(4));
      tbl.appendChild(this.createTableBody(brandData.items));

      tableScrollContainer.appendChild(tbl);
      return tableScrollContainer;
    }

    createBrandHeader(brandData, colSpan) {
      const bannerRow = document.createElement('tr');
      const bannerCell = document.createElement('th');
      bannerCell.colSpan = colSpan;
      const bannerDiv = document.createElement('div');
      bannerDiv.className = 'brand-banner';
      bannerDiv.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(brandData.colorVar);
      const img = document.createElement('img');
      img.src = brandData.logo;
      img.alt = brandData.brand || 'Logo da Marca'; // Added fallback alt
      bannerDiv.appendChild(img);
      if (brandData.brand) { // Only append brand name if it exists
         bannerDiv.append(brandData.brand);
      }
      bannerCell.appendChild(bannerDiv);
      bannerRow.appendChild(bannerCell);
      const thead = document.createElement('thead');
      thead.appendChild(bannerRow);
      return thead;
    }

    createTableHeader(colSpan) {
      const hdr = document.createElement('tr');
      hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 un)</th><th class="quantity-column-header">Quantidade</th>`;
      // Ensure the quantity header also has colspan if needed, or is part of the main header.
      // The colSpan for banner header is already set. This header has individual th cells.
      return hdr; // This should be appended to a thead, which is done in createBrandTable if this is a separate header.
                  // For now, assuming createBrandTable handles the structure.
    }

    createTableBody(brandItems) {
      const tbody = document.createElement('tbody');
      this.config.categories.forEach(categoryPT => {
        const itemsInCategory = brandItems.filter(item => item.category === categoryPT);
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
      return tbody;
    }

    renderTables(dataToRender) {
      document.body.classList.toggle('order-interface-visible', this.orderInterfaceActive);
      this.elements.tabelaContainer.innerHTML = '';
      dataToRender.forEach(brandData => {
        if (brandData.items.length === 0) { return; }
        this.elements.tabelaContainer.appendChild(this.createBrandTable(brandData));
      });
      if (this.elements.tabelaContainer.innerHTML === '') {
        this.elements.tabelaContainer.innerHTML = '<p class="no-results-message">Nenhum item corresponde aos filtros selecionados.</p>';
      }
    }

    populateCategoryFilter() {
      const categoriesFromData = new Set();
      this.config.originalTableData.forEach(brand => {
          brand.items.forEach(item => {
              if (item.category) { categoriesFromData.add(item.category); }
          });
      });
      const allDisplayCategories = [];
      this.config.categories.forEach(definedCat => {
          if (categoriesFromData.has(definedCat) || definedCat === "Populares") {
              allDisplayCategories.push(definedCat);
              categoriesFromData.delete(definedCat);
          }
      });
      categoriesFromData.forEach(cat => allDisplayCategories.push(cat));

      this.elements.categoryFilterEl.innerHTML = '';
      const allOption = document.createElement('option');
      allOption.value = 'all';
      allOption.textContent = 'Todas as Categorias';
      this.elements.categoryFilterEl.appendChild(allOption);

      const uniqueDisplayCategories = [...new Set(allDisplayCategories)];
      uniqueDisplayCategories.forEach(categoryText => {
          if (categoryText === "Outros" && !this.config.originalTableData.some(brand => brand.items.some(item => item.category === "Outros"))) {
             // Skip "Outros" if no items actually belong to it
          } else {
              const option = document.createElement('option');
              option.value = categoryText;
              option.textContent = categoryText;
              this.elements.categoryFilterEl.appendChild(option);
          }
      });
    }

    getFilterValues() {
      return {
        category: this.elements.categoryFilterEl.value,
        stockStatus: this.elements.stockStatusFilterEl.value,
        minPrice: parseFloat(this.elements.minPriceEl.value) || 0,
        maxPrice: parseFloat(this.elements.maxPriceEl.value) || Infinity,
        promotions: this.elements.promotionsFilterEl.checked
      };
    }

    filterProductData(filters) {
      return JSON.parse(JSON.stringify(this.config.originalTableData)).map(brand => {
        brand.items = brand.items.filter(item => {
          if (filters.category !== 'all' && item.category !== filters.category) { return false; }
          if (filters.stockStatus !== 'all') {
            if (filters.stockStatus === 'new' && item.category !== 'Novidades') { return false; }
            if (filters.stockStatus === 'last' && item.category !== 'Último Lote') { return false; }
          }
          if (item.unit < filters.minPrice || item.unit > filters.maxPrice) { return false; }
          if (filters.promotions && item.category !== 'Promoções') { return false; }
          return true;
        });
        return brand;
      }).filter(brand => brand.items.length > 0);
    }

    applyFilters() {
      const filters = this.getFilterValues();
      const filteredData = this.filterProductData(filters);
      this.renderTables(filteredData);
    }

    resetFilters() {
      this.elements.categoryFilterEl.value = 'all';
      this.elements.stockStatusFilterEl.value = 'all';
      this.elements.minPriceEl.value = '';
      this.elements.maxPriceEl.value = '';
      this.elements.promotionsFilterEl.checked = false;

      this.config.originalTableData.forEach(brand => {
        brand.items.forEach(item => { item.quantity = 0; });
      });
      this.currentSimulatedItems = [];

      if (this.orderInterfaceActive) {
          this.orderInterfaceActive = false;
          document.body.classList.remove('order-interface-visible');
          this.elements.btnSimulateOrderEl.textContent = 'Simular Pedido';
          this.elements.orderSimulationSummaryEl.innerHTML = '';
      }
      this.updateFloatingTotal(0);
      this.renderTables(this.config.originalTableData);
      this.elements.btnExportEl.textContent = 'Exportar Catálogo PDF';
    }

    findProductById(productId) {
      for (const brand of this.config.originalTableData) {
        for (const item of brand.items) {
          if (item.id === productId) { return item; }
        }
      }
      return null;
    }

    calculateGrandTotal() {
      let total = 0;
      this.config.originalTableData.forEach(brand => {
        brand.items.forEach(item => {
          if (item.quantity > 0) {
            total += item.unit * item.quantity;
          }
        });
      });
      return total;
    }

    updateQuantityDisplay(productId, quantity) {
        const displaySpans = document.querySelectorAll(`.quantity-display[data-product-id="${productId}"]`);
        displaySpans.forEach(span => { span.textContent = quantity; });
    }

    handleQuantityChange(productId, action) {
      const product = this.findProductById(productId);
      if (!product) { return; }

      let quantityChanged = false;
      if (action === 'increase') {
        product.quantity += 12;
        quantityChanged = true;
      } else if (action === 'decrease') {
        if (product.quantity >= 12) {
          product.quantity -= 12;
          quantityChanged = true;
        }
      }

      if (quantityChanged) {
        this.updateQuantityDisplay(productId, product.quantity);
        if (this.orderInterfaceActive) {
          const grandTotal = this.calculateGrandTotal();
          this.updateFloatingTotal(grandTotal);
          // Optionally, could call renderOrderSummary here for full real-time summary update
          // this.renderOrderSummary();
        }
      }
    }

    renderOrderSummary() {
      const grandTotal = this.calculateGrandTotal();
      this.currentSimulatedItems = []; // Reset and rebuild

      this.config.originalTableData.forEach(brand => {
        brand.items.forEach(item => {
          if (item.quantity > 0) {
            this.currentSimulatedItems.push({
              desc: item.desc,
              unitPrice: item.unit,
              quantity: item.quantity,
              total: item.unit * item.quantity
            });
          }
        });
      });

      this.updateFloatingTotal(grandTotal);
      this.elements.orderSimulationSummaryEl.innerHTML = '';

      if (this.currentSimulatedItems.length > 0) {
        let summaryHTML = `<div class="pdf-logo-placeholder"><img src="${this.config.logoPlaceholder}" alt="Logo da Empresa" class="pdf-quote-logo"></div>`;
        summaryHTML += `<h2 class="quote-title">Cotação de Pedido</h2>`;
        summaryHTML += '<div class="order-summary-table-container"><table class="order-summary-table"><thead><tr><th>Produto</th><th>Preço Unit.</th><th>Qtde.</th><th>Total Item</th></tr></thead><tbody>';
        this.currentSimulatedItems.forEach(item => {
          summaryHTML += `<tr class="product-data-row">
            <td>${item.desc}</td>
            <td>R$ ${item.unitPrice.toFixed(2)}</td><td>${item.quantity}</td>
            <td>R$ ${item.total.toFixed(2)}</td>
          </tr>`;
        });
        summaryHTML += `</tbody><tfoot><tr><td colspan="3" style="text-align:right; font-weight:bold;">Total Geral:</td><td class="grand-total-cell" style="font-weight:bold;">R$ ${grandTotal.toFixed(2)}</td></tr></tfoot></table></div>`;
        summaryHTML += `<div class="pdf-quote-footer"><p>Endereço da Empresa | Telefone | email@example.com</p><p>&copy; ${new Date().getFullYear()} Nome da Empresa. Todos os direitos reservados.</p></div>`;
        this.elements.orderSimulationSummaryEl.innerHTML = summaryHTML;
        this.elements.btnExportEl.textContent = 'Exportar Cotação PDF';
      } else {
        this.elements.orderSimulationSummaryEl.innerHTML = '<p>Por favor, insira quantidades nos produtos para simular um pedido.</p>';
        this.elements.btnExportEl.textContent = 'Exportar Catálogo PDF';
      }
    }

    handleOrderSimulation() {
      if (!this.orderInterfaceActive) {
        this.orderInterfaceActive = true;
        document.body.classList.add('order-interface-visible');
        this.elements.btnSimulateOrderEl.textContent = 'Atualizar Pedido';
      }
      this.renderOrderSummary(); // Calculates and renders the main summary
    }

    handleExport() {
      const shouldExportQuote = this.orderInterfaceActive && this.currentSimulatedItems.length > 0;
      if (shouldExportQuote) {
          document.body.classList.add('pdf-export-active');
          const element = this.elements.orderSimulationSummaryEl;
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
              this.handleError("PDF generation error", err);
              document.body.classList.remove('pdf-export-active');
          });
      } else {
          this.elements.btnExportEl.classList.add('hide-on-print-temp');
          window.print();
          setTimeout(() => { this.elements.btnExportEl.classList.remove('hide-on-print-temp'); }, 1000);
      }
    }

    toggleTheme() {
      document.body.classList.toggle('dark');
      this.elements.btnThemeEl.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
    }

    updateUI() {
      this.elements.btnThemeEl.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
      this.elements.btnExportEl.textContent = 'Exportar Catálogo PDF';
      this.updateFloatingTotal(0);
      if (this.orderInterfaceActive) { // If interface is meant to be active on load (e.g. from saved state)
          this.elements.btnSimulateOrderEl.textContent = 'Atualizar Pedido';
      } else {
          this.elements.btnSimulateOrderEl.textContent = 'Simular Pedido';
      }
    }

    handleError(message, error) {
      console.error(message, error);
      // Optionally, display a user-friendly message on the page
    }
  }

  const catalog = new ProductCatalog();
});
