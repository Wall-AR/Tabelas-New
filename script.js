// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tableData = [
    {
      brand: '',
      logo: 'images/purafor-logo.png',
      colorVar: '--color-purafor',
      items: [
        { desc: 'Artrion 60caps', unit: 31.46, tag: '' },
        { desc: 'Biotina gotas 30ml - Tutti Frutti', unit: 18.07, tag: '' },
        { desc: 'Beauty Blend 200g - Frutas Vermelhas', unit: 63.41, tag: '' },
        { desc: 'Reforce Hair 60caps', unit: 22.44, tag: '' },
        { desc: '3 Magnésios 60 Caps', unit: 13.71, tag: '' },
        { desc: 'Cálcio MDK + Z 60caps (Cálcio, Magnésio, Vit.D, Vit.K, Zinco)', unit: 19.02, tag: '' },
        { desc: 'Coenzima Q10 200mg com vitamina E 30caps', unit: 29.31, tag: '' },
        { desc: 'Creatina Monohidratada 150g Natural', unit: 43.79, tag: '' },
        { desc: 'CO-Creatin 300g (Creatina com coenzima + vitaminas) Sabor Laranja', unit: 60.06, tag: 'novo' },
        { desc: 'Curcumina com colágeno tipo 2 30ml - Gotas', unit: 16.48, tag: 'gotas' },
        { desc: 'Cúrcuma Longa com Curcumina 60caps', unit: 16.48, tag: '' },
        { desc: 'CO-MAG 60caps', unit: 26.00, tag: '' },
        { desc: 'Caffeine 60caps - Microencapsulada 200mg Softgel', unit: 20.67, tag: '' },
        { desc: 'Derma B - Biotina Gummy 30gomas - Morango', unit: 35.79, tag: 'ultimo-lote' },
        { desc: 'D3 + K2 30caps (2000UI / 159mcg)', unit: 11.91, tag: '' },
        { desc: 'Ferrofor + C 60caps', unit: 13.07, tag: 'novo' },
        { desc: 'Feno Grego 60caps', unit: 13.81, tag: 'novo' },
        { desc: 'Morofor 120caps', unit: 20.22, tag: 'novo' },
        { desc: 'Melatonina com Triptofano 30caps', unit: 21.94, tag: '' },
        { desc: 'Magnésio Dimalato 60caps', unit: 16.21, tag: '' },
        { desc: 'Magnésio L-Treonato Blister 30caps', unit: 19.78, tag: 'novo' },
        { desc: 'Magnésio Quelato 60caps', unit: 14.83, tag: '' },
        { desc: 'Memo Ative 30caps', unit: 13.75, tag: '' },
        { desc: 'Melatokalm Gotas 30ml (Melatonina)', unit: 16.10, tag: '' },
        { desc: 'Mag 6 60caps (seis magnésios)', unit: 14.45, tag: '' },
        { desc: 'Óleo de Primula 60caps Softgel', unit: 20.67, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60caps', unit: 31.26, tag: 'novo' },
        { desc: 'Ômega 3 IFOS 60caps 1gr Softgel', unit: 37.31, tag: '' },
        { desc: 'Ômega 3, 6, 9 60caps 1gr Softgel', unit: 31.26, tag: '' },
        { desc: 'PEA-600 60caps', unit: 24.29, tag: 'novo' },
        { desc: 'Picolinato de Cromo 30caps', unit: 12.67, tag: '' },
        { desc: 'Reartron 60caps', unit: 30.04, tag: '' },
        { desc: 'Vitamina B12 30caps', unit: 12.03, tag: '' },
        { desc: 'Vitam-B12 gotas 30ml', unit: 16.48, tag: '' },
        { desc: 'Vitamina K2 30caps', unit: 12.67, tag: '' },
        { desc: 'Zinco + L-Cisteina 30caps', unit: 11.78, tag: '' },
        { desc: 'SuperVita C 60caps', unit: 13.09, tag: 'novo' }
      ]
    },
    {
      brand: '',
      logo: 'images/reavita-logo.png',
      colorVar: '--color-reavita',
      items: [
        { desc: 'Amargo Detox 60cap', unit: 12.25, tag: '' },
        { desc: 'Ashwagandha 60caps', unit: 17.01, tag: 'novo' },
        { desc: 'Amora Miúra 60cap', unit: 13.18, tag: '' },
        { desc: 'Amora com Isoflavona 60cap', unit: 13.30, tag: '' },
        { desc: 'Calmim 60cap', unit: 14.74, tag: '' },
        { desc: 'Canela de Velho + Sucupira 60cap', unit: 13.44, tag: '' },
        { desc: 'Carvão Vegetal 60cap', unit: 12.79, tag: '' },
        { desc: 'Castanha da Índia 60cap', unit: 14.57, tag: '' },
        { desc: 'Cloreto de Magnésio PA 60cap', unit: 12.67, tag: '' },
        { desc: 'Cloreto de Magnésio PA + Sucupira 60cap', unit: 14.06, tag: '' },
        { desc: 'Colágeno Hidrolisado 60cap', unit: 14.10, tag: '' },
        { desc: 'Colágeno Tipo 2 60cap', unit: 18.32, tag: '' },
        { desc: 'Cúrcuma 95% + Pimenta Preta 60cap', unit: 12.79, tag: '' },
        { desc: 'Espinheira Santa 60cap', unit: 13.30, tag: '' },
        { desc: 'Ginkgo Biloba 60cap', unit: 14.19, tag: '' },
        { desc: 'Ginkgo + Castanha 60cap', unit: 14.70, tag: '' },
        { desc: 'L-Treonato Magnésio 60cap', unit: 15.97, tag: 'novo' },
        { desc: 'Maca Peruana Negra 60cap', unit: 16.86, tag: '' },
        { desc: 'Mais Ativa 60cap', unit: 12.67, tag: '' },
        { desc: 'Óleo de Abacate 1000mg 60cap', unit: 28.81, tag: 'ultimo-lote' },
        { desc: 'Óleo de Alho 500mg 60cap', unit: 18.89, tag: '' },
        { desc: 'Óleo de Semente de Abóbora 1000mg 60cap', unit: 30.15, tag: 'ultimo-lote' },
        { desc: 'Ora Pro Nóbis 60cap', unit: 13.94, tag: '' },
        { desc: 'Seca Barriga com Laranja MORO 60cap', unit: 14.32, tag: '' },
        { desc: 'Tribulus Terrestris 40% 60cap', unit: 13.94, tag: '' },
        { desc: 'Tribulus + Maca Peruana 60cap', unit: 13.56, tag: '' },
        { desc: 'Uxi Amarelo + Unha de Gato 60cap', unit: 13.43, tag: '' },
        { desc: 'Valeriana 60cap', unit: 17.75, tag: '' },
        { desc: 'Concentrado de Inhame - 250ml', unit: 8.35, tag: 'chá' },
        { desc: 'Ora Pro Nóbis Chá Pronto - 250ml', unit: 8.45, tag: 'chá' }
      ]
    }
  ];

  const container = document.getElementById('tabela-container');

  tableData.forEach(brandData => {
    const tbl = document.createElement('table');
    tbl.className = 'table-brand';

    const colgroup = document.createElement('colgroup');
    ['60%', '20%', '20%'].forEach(w => {
      const col = document.createElement('col');
      col.style.width = w;
      colgroup.appendChild(col);
    });
    tbl.appendChild(colgroup);

    const bannerRow = document.createElement('tr');
    const bannerCell = document.createElement('th');
    bannerCell.colSpan = 3;
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
    hdr.innerHTML = `<th>Descrição do Produto</th><th>Unidade</th><th>Caixa (12 unidades)</th>`;
    thead.appendChild(hdr);
    tbl.appendChild(thead);

    const tbody = document.createElement('tbody');
    brandData.items.forEach(item => {
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

      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    container.appendChild(tbl);
  });

 // Por este:
document.getElementById('btn-export').addEventListener('click', () => {
  window.print();
});

  document.getElementById('btn-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('btn-theme');
    btn.textContent = document.body.classList.contains('dark') ? 'Tema Claro' : 'Tema Escuro';
  });
});
