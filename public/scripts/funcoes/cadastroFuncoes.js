/* ==========================================================================
   ARQUIVO: api/scripts/funcoes/cadastroFuncoes.js
   DESCRIÇÃO: Estilo principal para fazer as requisições para o servidor
   ========================================================================== */

import {validarCpf} from '../validations/cpf.js';
import {validarData} from '../validations/data.js';
import {validarEmail} from '../validations/email.js';
import {validarNome} from '../validations/name.js';
import {validarSenha} from '../validations/password.js';
import {validarTipo} from '../validations/tipo.js';
import {} from '../validations/utilits.js';


class cadastroFuncoes {
    static validarLogin(email, senha){

        if (!email || !senha) {
            console.error("Erro: IDs dos inputs não encontrados no HTML:", email, senha);
            return 
        };

        const validacaoEmail = validarEmail(email);
        const validacaoSenha = validarSenha(senha);

        if (!validacaoEmail || !validacaoSenha) return;

    }
}

export default cadastroFuncoes;