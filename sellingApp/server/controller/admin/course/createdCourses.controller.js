import courseModel from "../../../models/course.model.js";

const createdCourses = async (req, res, next) => {
  const courseId = req.params.id;
  const adminId = req.admin?._id;
  console.log(req, "<---REQUEST");

  if (courseId) {
    const specificCourse = await courseModel.findById(courseId);

    return res
      .status(201)
      .json({ message: "Successfully Fetched", course: specificCourse });
  }

  const allCourses = await courseModel.find({});
  res
    .status(201)
    .json({ message: "Created Courses list", courses: allCourses });
};

export default createdCourses;
