import courseModel from "../../../models/course.model.js";

const createCourseController = async (req, res, next) => {
  try {
    const adminId = req.admin; //?? `admin` Object is set by auth middleware
    const { title, description, price } = req.body;

    //! Cloudinary gives `req.file.path`, NOT `/uploads/filename`
    const image = req.file ? req.file.path : null; // Full Cloudinary URL

    const newCourse = await courseModel.create({
      title,
      description,
      price,
      image,
      creatorId: adminId,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: {
        id: newCourse._id,
        title: newCourse.title,
        image: newCourse.image,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default createCourseController;
