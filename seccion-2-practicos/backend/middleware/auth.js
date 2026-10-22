module.exports = (req, res, next) => {
    const clientApiKey = req.headers.apikey;
    const serverApiKey = process.env.API_KEY;

    if (serverApiKey && clientApiKey === serverApiKey) {
        next();
    } else {
        res.status(401).json({ error: 'Acceso no autorizado: API Key inválida o no configurada' });
    }
};