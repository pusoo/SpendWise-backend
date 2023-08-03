const Tracker = require("./model");
// const Saving = require('./saving-model')

exports.getAll = async (req, res) => {
  try {
    const Data = await Tracker.find();

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAllIncome = async (req, res) => {
  try {
    const Data = await Tracker.find({ type: "income" });

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAllExpense = async (req, res) => {
  try {
    const Data = await Tracker.find({ type: "expense" });

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const Data = await Tracker.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const Data = await Tracker.find();

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.createIncomeData = async (req, res) => {
  try {
    const newData = await Tracker.create(req.body);

    res.status(200).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateIncomeData = async (req, res) => {
  try {
    const Data = await Tracker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteIncomeData = async (req, res) => {
  try {
    await Tracker.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createExpenseData = async (req, res) => {
  try {
    const newData = await Tracker.create(req.body);

    res.status(200).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateExpenseData = async (req, res) => {
  try {
    const Data = await Tracker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteExpenseData = async (req, res) => {
  try {
    await Tracker.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// exports.getAll = async (req, res) => {
//     try {
//         const Data = await Saving.find()

//         res.status(200).json({
//             status: 'success',
//             data: Data
//         })
//     } catch (err) {
//         res.status(404).json({
//             status: 'failed',
//             message: err
//         })
//     }`
// }

exports.getDataById = async (req, res) => {
  try {
    const Data = await Saving.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.createGoalData = async (req, res) => {
  try {
    const newData = await Saving.create(req.body);

    res.status(200).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateGoalData = async (req, res) => {
  try {
    const Data = await Saving.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: Data,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteGoalData = async (req, res) => {
  try {
    await Saving.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};