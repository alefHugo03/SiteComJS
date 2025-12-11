import path from 'path';
import express from 'express';
import livros from './server/books/livroRoute.js';
import sobre from './pagina/sobreRoute.js';
import user from './server/users/userRoute.js'

const pastaPublica = path.join(import.meta.dirname, '../../public');

const routes = (app) => {
    app.use(express.static(pastaPublica));

    app.route('/').get((req, res) => {
        res.sendFile(path.join(pastaPublica, 'index.html'));
    });

    app.use(express.json(), livros, sobre, user);
}

export default routes;