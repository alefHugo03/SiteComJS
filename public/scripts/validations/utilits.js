export function avisoFalas(mensagem, idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.innerText = mensagem;
        elemento.style.color = "red";
        elemento.style.display = "block";
        elemento.style.fontSize = "0.9rem";
        elemento.style.marginTop = "5px";
        elemento.style.transition = "opacity 0.5s ease";
        elemento.style.opacity = "1";

        // Adiciona borda vermelha no input anterior
        if(elemento.previousElementSibling) {
            elemento.previousElementSibling.classList.add('input-erro');
        }

        // --- NOVO: LIMPAR APÓS 6 SEGUNDOS ---
        setTimeout(() => {
            elemento.style.opacity = "0";
            setTimeout(() => {
                limparAviso(idElemento);
                elemento.style.opacity = "1";
            }, 500);
        }, 6000);
    } else {
        console.warn(`Aviso: Elemento com ID '${idElemento}' não encontrado.`);
    }
}

// Função para limpar mensagem de erro
export function limparAviso(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.innerText = "";
        elemento.style.display = "none";
        
        // Remove borda vermelha
        if(elemento.previousElementSibling) {
            elemento.previousElementSibling.classList.remove('input-erro');
        }
    }
}

/* ARRAY CENTRAL DE IDS DE AVISO */
export const etapa = [
    "avisoNome",      // [0]
    "avisoEmail",     // [1]
    "avisoData",      // [2]
    "avisoSenha",     // [3]
    "avisoSenhaDois", // [4]
    "avisoCpf",       // [5]
    "avisoTipo",      // [6]
    "avisoTitulo",
    "avisoDescricao",
    "avisoDataPubli",
    "avisoCategoria",
    "avisoAutor",
    "avisoPdf"
];