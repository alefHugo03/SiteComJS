import cadastroFuncoes from '../funcoes/cadastroFuncoes.js'

const formLogin = document.getElementById('form-login');
if (!formLogin) alert('Formulário não encontrado');

if (formLogin) {
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();

        const isValido = cadastroFuncoes.validarLogin('emailLogin', 'senhaLogin');
        if (!isValido) return;

        const dados = new FormData(formLogin);

        try {
            const response = await fetch('/validardados', {
            method: 'POST',
            body: dados
            })

            if (response.ok) {
                console.log("Sucesso:", response);
                alert("Dados validados com sucesso!");
            } 
            else {
                console.log("Erro no servidor:", response.status);
            }
        } catch(error) {
            console.error("Erro:", error)
        }
    });
}