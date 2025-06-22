import purchaseModel from "../../../models/purchase.model.js";

const purchaseController = async (req, res) => {
  const userId = req.user?._id; // Use req.user if set by auth middleware
  const courseId = req.body.courseId;

  // Check if the user already purchased this course
  const existingPurchase = await purchaseModel.findOne({ userId, courseId });
  if (existingPurchase) {
    return res.status(400).json({ message: "Already bought it" });
  }

  // Create a new purchase
  await purchaseModel.create({
    userId,
    courseId,
  });

  res.status(201).json({
    message: "Successfully Purchased course",
    data: { courseId, userId },
  });
};

export default purchaseController;
