import courseModel from "../../../models/course.model.js";

const updateCourse = async (req, res, next) => {
  try {
    const id = req.params.id;

    //! 1. Check if course exists
    const course = await courseModel.findById(id);
    console.log(course, "course{}");

    if (!course) {
      return res.status(404).json({
        success: false,
        error: "Course not found",
      });
    }

    //! 2. Authorization check for only Creator can update the course details
    if (course.creatorId.toString() !== req.admin._id.toString()) {
      return res.status(403).json({
        success: false,
        error: "Not authorized to update this course",
      });
    }

    //! 3. Define allowed fields and prepare updates
    const allowedUpdates = ["title", "description", "price", "image"];
    const updates = {};

    //! Process body fields
    Object.keys(req.body).forEach((field) => {
      if (allowedUpdates.includes(field) && req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    //! Process file upload (Cloudinary)
    if (req.file) {
      updates.image = req.file.path; // Cloudinary URL
    }

    //! 4. Validate if there are updates
    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        error: "No valid fields to update",
      });
    }

    //! 5. Perform the update
    const updatedCourse = await courseModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    next(error);
  }
};

export default updateCourse;
