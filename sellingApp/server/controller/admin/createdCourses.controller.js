import courseModel from "../../models/course.model.js";

const createdCourses = async (req, res, next) => {
  const allCourses = await courseModel.find({});

  res
    .status(201)
    .json({ message: "Created Courses list", courses: allCourses });
};

export default createdCourses;
