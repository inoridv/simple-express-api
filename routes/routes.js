const axios = require('axios');

var appRouter = function (app) {
  app.get("/data", function(req, res) {
    axios.get('http://catalogo.governoaberto.sp.gov.br/api/3/action/package_list')
    .then(response => {
      res.status(200).json(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  });
}

module.exports = appRouter;
