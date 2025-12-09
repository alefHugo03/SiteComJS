document.addEventListener("DOMContentLoaded", function() {

    function loadComponent(selector, url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao buscar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                    element.classList.add('loaded'); // Adiciona classe para animação CSS se quiser
                } else {
                    console.warn(`O seletor placeholder "${selector}" não foi encontrado.`);
                }
            })
            .catch(error => {
                console.error('Falha no loadComponent:', error);
            });
    }

    // --- CORREÇÃO AQUI ---
    // O navegador acessa direto a partir da raiz estática
    const basePath = "/templates/corpos/"; 
    
    loadComponent("#header-placeholder", basePath + "header.html");
    loadComponent("#footer-placeholder", basePath + "footer.html");
});