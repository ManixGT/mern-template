import courseModel from "../../models/course.model.js";
const createCourseController = async (req, res, next) => {
  console.log("Id", req);
  const adminId = req.admin;

  const { title, description, price } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  const newCourse = new courseModel({
    title,
    description,
    image,
    price,
    creatorId: adminId,
  });
  await newCourse.save();

  res.status(201).json({
    message: "Course Created Successfully",
    image,
  });
};

export default createCourseController;
