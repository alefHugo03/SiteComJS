import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GuiaControler {
    static guiaCaminho(nomeArquivo) {
        return (req, res) => {
            const caminhoCompleto = path.join(__dirname, '..', '..', '..', 'public', nomeArquivo);
            res.sendFile(caminhoCompleto, (erro) => {
                if (erro) {
                    console.log("Erro ao enviar arquivo:", erro);
                    if (!res.headersSent) {
                        res.status(404).send('Arquivo não encontrado');
                    }
                }
            });
        }
    }
}

export default GuiaControler;