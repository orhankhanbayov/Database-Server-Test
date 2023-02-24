const DatabaseController = {
  Set: (req, res) => {
    object = req.query;
    res.send('okay');
    res.status(200);
  },

  Get: (req, res) => {
    res.status(200);
    res.send(`${object[`${req.query.key}`]}`);
  },
};

module.exports = DatabaseController;
