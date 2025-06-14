import courseModel from "../../models/course.model.js";

const deleteCourse = async (req, res, next) => {
  const { id } = req.params;

  const course = await courseModel.findByIdAndDelete({ id });

  res
    .status(200) //! 200 for deletion and 201 for creation
    .json({ message: "Course Deleted successfully ", course_D: course });
};

export default deleteCourse;
