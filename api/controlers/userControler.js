import user from '../models/user.js'

class UserControler {
    
    static async listarUsuarios (req, res) {
            try{
                const listarUsers = await user.find({});
                res.status(200).json(listarUsers);
            } catch (erro) {
                res.status(500).json({ message: ` ${erro.message} - falha na requisição` });
            }
        }
}


export default UserControler;