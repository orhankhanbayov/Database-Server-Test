const DatabaseController = require('../../src/controllers/database');
const router = express.Router();

router.put('/set', DatabaseController.set);

module.exports = router;
