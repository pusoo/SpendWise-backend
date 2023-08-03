const express = require("express");
const trackerController = require("./controllers");

const router = express.Router();

router
  .route("/")
  .get(trackerController.getAll)
  .post(trackerController.createIncomeData);

router
  .route("/")
  .get(trackerController.getAll)
  .post(trackerController.createExpenseData);

router.route("/income").get(trackerController.getAllIncome);

router.route("/expense").get(trackerController.getAllExpense);

router
  .route("/:id")
  .get(trackerController.getDataById)
  .patch(trackerController.updateIncomeData)
  .delete(trackerController.deleteIncomeData);
router
  .route("/:id")
  .get(trackerController.getDataById)
  .patch(trackerController.updateExpenseData)
  .delete(trackerController.deleteExpenseData);

router
  .route("/")
  .get(trackerController.getAll)
  .post(trackerController.createGoalData);

router
  .route("/:id")
  .get(trackerController.getDataById)
  .patch(trackerController.updateGoalData)
  .delete(trackerController.deleteGoalData);

module.exports = router;