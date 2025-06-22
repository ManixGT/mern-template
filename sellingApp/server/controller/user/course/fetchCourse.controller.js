import courseModel from "../../../models/course.model.js";

const fetchCourse = async (req, res) => {
  const courseId = req.params.id;

  if (courseId) {
    const specificCourse = await courseModel.findById(courseId);
    return res
      .status(200)
      .json({ message: "Course that you requested", course: specificCourse });
  }

  const allCourses = await courseModel.find({});
  res
    .status(200)
    .json({ message: "All purchased courses", courses: allCourses });
};

export default fetchCourse;
