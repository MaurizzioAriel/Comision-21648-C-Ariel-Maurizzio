const ctlrIndex = {};

ctlrIndex.renderIndex = (req, res) => {
  res.render("index", { title: "Pagina Principal" });
};

module.exports = { ctlrIndex };
