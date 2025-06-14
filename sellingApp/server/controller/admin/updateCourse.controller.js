import courseModel from "../../models/course.model.js";
//
// const updateCourseController = async (req, res, next) => {
//   const { title, description, price, image, creatorId } = req.body;
//   const { courseId } = req.params;
//!  // Use this way of update for more complex updates and pre update things
//   const course = await courseModel.findById(courseId);
//   if (!course) {
//     res.status(401).json({ message: "Course is not found" });
//   }
//   Object.assign(course, req.body);
//   await course.save();
// };
const updateCourseController = async (req, res, next) => {
  const { courseId } = req.params;

  //! Use findByIdAndUpdate for Simple updates
  const updatedCourse = await courseModel.findByIdAndUpdate(
    courseId,
    req.body,
    { new: true }
  );

  if (!updatedCourse) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.status(200).json({
    message: "Course updated successfully",
    course: updatedCourse,
  });
};

export default updateCourseController;
