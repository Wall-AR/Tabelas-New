# Catálogo B2B de Suplementos & Simulador de Pedidos

## Descrição

Este projeto é um catálogo interativo de produtos B2B, desenvolvido para marcas de suplementos e seus clientes. Ele permite aos usuários navegar pelos produtos, filtrá-los com base em diversos critérios, simular um pedido adicionando quantidades, e exportar o catálogo ou uma cotação gerada como PDF. A aplicação possui um design responsivo para usabilidade em desktops, tablets e dispositivos móveis, além de uma opção de tema claro/escuro.

## Principais Funcionalidades

*   **Listagem de Produtos por Marca**: Os produtos são organizados e exibidos sob suas respectivas marcas (ex: Purafor, Reavita). Cada marca possui um banner e esquema de cores distintos.
*   **Categorização de Produtos**: Os itens são categorizados para facilitar a navegação. As categorias principais incluem:
    *   Cápsulas
    *   Extratos Líquidos (gotas)
    *   Chás Medicinais
    *   Pós
    *   Gomas
    *   Cartelas (Blister packs)
    *   Óleos
    *   Blends (mantido em inglês)
    *   Novidades (identificadas por tag)
    *   Último Lote (identificado por tag)
    *   Promoções (opção de filtro)
    *   Outros
*   **Filtros Inteligentes**: Os usuários podem refinar a lista de produtos usando um conjunto abrangente de filtros:
    *   **Filtro de Categoria**: Selecione de uma lista de todas as categorias de produtos disponíveis.
    *   **Filtro de Status de Estoque**: Filtre por itens em "Novidades" ou "Último Lote".
    *   **Filtro de Faixa de Preço**: Especifique preços unitários mínimos e máximos.
    *   **Filtro de Promoções**: Caixa de seleção para mostrar apenas itens categorizados como "Promoções".
*   **Ferramenta de Simulação de Pedido**:
    *   Clique em "Simular Pedido" para ativar a interface de inserção de quantidades (coluna "Quantidade" nas tabelas) e a área de resumo do pedido.
    *   Insira quantidades para os produtos em múltiplos de 12 usando os botões +/- dedicados.
    *   Visualize um resumo detalhado do pedido (produto, preço unitário, quantidade, total do item) e o valor total.
    *   Exibição flutuante em tempo real do valor total do pedido atual.
*   **Exportação PDF**:
    *   **Exportação de Catálogo**: O catálogo completo de produtos (opcionalmente filtrado) pode ser exportado como PDF usando a funcionalidade de impressão do navegador.
    *   **Exportação de Cotação**: Se uma simulação de pedido estiver ativa, o botão de exportação muda para "Exportar Cotação PDF", permitindo aos usuários baixar um PDF do resumo do pedido usando `html2pdf.js`.
*   **Design Responsivo**: O layout da aplicação é otimizado para diversos tamanhos de tela, garantindo boa usabilidade em desktops, tablets e celulares. Isso inclui filtros responsivos e tabelas roláveis.
*   **Tema Claro/Escuro**: Um botão de alternância permite aos usuários mudar entre um tema visual claro e escuro para visualização confortável.

## Como Usar

1.  **Navegar pelos Produtos**: Role pelo catálogo para visualizar os produtos, que são agrupados por marca e, em seguida, por categoria dentro de cada marca.
2.  **Filtrar Produtos (Opcional)**:
    *   Use os controles de filtro no topo da página para refinar a lista de produtos.
    *   Selecione uma categoria, status de estoque, insira uma faixa de preço ou marque "Promoções".
    *   Clique em "Aplicar Filtros". Para ver todos os produtos novamente, clique em "Limpar Filtros".
3.  **Ativar Interface de Pedido**: Clique no botão "Simular Pedido". Isso revelará a coluna "Quantidade" nas tabelas de produtos e a área de resumo do pedido, além do total flutuante do pedido. O botão mudará para "Atualizar Pedido".
4.  **Ajustar Quantidades**: Utilize os botões +/- na coluna "Quantidade" para adicionar ou remover produtos do seu pedido. As quantidades são ajustadas em múltiplos de 12 (representando caixas). O total flutuante é atualizado em tempo real.
5.  **Atualizar/Visualizar Simulação Completa**: Após ajustar as quantidades, clique em "Atualizar Pedido" para que o resumo principal do pedido seja atualizado.
6.  **Exportar**:
    *   **Para Exportar uma Cotação**: Com a interface de pedido ativa e itens no pedido, o botão principal de exportação indicará "Exportar Cotação PDF". Clique nele para baixar a cotação.
    *   **Para Exportar o Catálogo**: Se a interface de pedido não estiver ativa (ou seja, antes de clicar em "Simular Pedido" pela primeira vez, ou após limpar os filtros e o pedido), o botão indicará "Exportar Catálogo PDF". Clique nele para abrir a caixa de diálogo de impressão do sistema para o catálogo.
7.  **Mudar Tema**: Clique no botão "Tema Escuro" / "Tema Claro" para alternar o tema visual.

## Desenvolvimento Local

Este projeto consiste em arquivos HTML, CSS e JavaScript estáticos. Nenhum passo especial de compilação é necessário. Para executar localmente:

1.  Clone o repositório (se aplicável) ou baixe os arquivos.
2.  Abra o arquivo `index.html` diretamente em um navegador web.

Todas as funcionalidades são executadas no lado do cliente.
