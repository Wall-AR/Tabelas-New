# B2B Supplement Catalog & Order Simulator

## Description

This project is an interactive B2B product catalog designed for supplement brands and their customers. It allows users to browse products, filter them based on various criteria, simulate an order by adding quantities, and export the catalog or a generated quote as a PDF. The application features a responsive design for usability on desktop, tablet, and mobile devices, as well as a dark/light theme option.

## Key Features

*   **Product Listing by Brand**: Products are organized and displayed under their respective brands (e.g., Purafor, Reavita). Each brand has a distinct banner and color scheme.
*   **Product Categorization**: Items are categorized for easier browsing. Main categories include:
    *   Capsules
    *   Liquid extracts (drops)
    *   Herbal teas
    *   Powders
    *   Gummies
    *   Blister packs
    *   Oils
    *   New arrivals (identified by tag)
    *   Last batch (identified by tag)
    *   Promotions (filter option)
*   **Smart Filters**: Users can refine the product list using a comprehensive set of filters:
    *   **Category Filter**: Select from a list of all available product categories.
    *   **Stock Status Filter**: Filter by "New arrivals" or "Last batch" items.
    *   **Price Range Filter**: Specify minimum and maximum unit prices.
    *   **Promotions Filter**: Checkbox to show only items categorized under "Promotions".
*   **Order Simulation Tool**:
    *   Users can input desired quantities for each product directly in the catalog table.
    *   Clicking the "Simular Pedido" (Simulate Order) button calculates the total for each item and a grand total for the selection.
    *   A detailed summary of the simulated order (product, unit price, quantity, item total, grand total) is displayed on the page.
*   **PDF Export**:
    *   **Catalog Export**: The full product catalog (optionally filtered) can be exported as a PDF using the browser's print functionality.
    *   **Quote Export**: If an order simulation is active, the export button changes to "Exportar Cotação PDF", allowing users to download a PDF of the order summary using `html2pdf.js`.
*   **Responsive Design**: The application layout is optimized for various screen sizes, ensuring good usability on desktops, tablets, and mobile phones. This includes responsive filters and scrollable tables.
*   **Dark/Light Theme**: A toggle button allows users to switch between a light and a dark visual theme for comfortable viewing.

## How to Use

1.  **Browse Products**: Scroll through the catalog to view products, which are grouped by brand and then by category within each brand.
2.  **Filter Products (Optional)**:
    *   Use the filter controls at the top of the page to narrow down the product list.
    *   Select a category, stock status, enter a price range, or check "Promotions".
    *   Click "Aplicar Filtros" (Apply Filters). To see all products again, click "Limpar Filtros" (Clear Filters).
3.  **Input Quantities**: In the "Quantidade" (Quantity) column of the product tables, enter the desired amount for any product you wish to include in an order.
4.  **Simulate Order**: Click the "Simular Pedido" (Simulate Order) button. An order summary will appear below the button, detailing selected items and totals.
5.  **Export**:
    *   **To Export a Quote**: After simulating an order, the main export button will read "Exportar Cotação PDF". Click it to download the quote.
    *   **To Export the Catalog**: If no order is simulated, or after clearing a simulation, the button will read "Exportar Catálogo PDF". Click it to open the system print dialog for the catalog view.
6.  **Change Theme**: Click the "Tema Escuro" / "Tema Claro" (Dark/Light Theme) button to toggle the visual theme.

## Local Development

This project consists of static HTML, CSS, and JavaScript files. No special build steps are required. To run locally:

1.  Clone the repository (if applicable) or download the files.
2.  Open the `index.html` file directly in a web browser.

All functionalities are client-side.
