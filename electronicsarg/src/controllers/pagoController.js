

module.exports = {
    pagar: function(req, res, next) {
        
        res.render('pagar', { title: 'Metodo de Pago' ,user:req.session.user });
    }
}