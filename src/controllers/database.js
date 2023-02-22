const DatabaseController = {
  Set: (req, res) => {
    object = req.query;
    res.send('okay');
    res.status(200);
  },
};

module.exports = DatabaseController;
