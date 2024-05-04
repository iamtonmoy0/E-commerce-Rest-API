import { error } from "console";
import multer from "multer";
import path from "path";

// storage

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, process.env.UPLOAD_DIR);
//   },
//   filename: function (req, file, cb) {
//     const exectName = path.extname(file.originalname);
//     cb(
//       null,
//       Date.now() + "-" + file.originalname.replace(exectName, "") + exectName
//     );
//   },
// });

const storage = multer.memoryStorage();
// file filter system
// const fileFilter = (req, file, cb) => {
//   const exectName = path.extname(file.originalname);
//   const fileType = ["jpg", "png"];
//   if (!fileType.includes(exectName.substring(1))) {
//     return cb("file type is not allowed");
//   }
//   cb(null, true);
// };
const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image file are allowed"), false);
  }
  
};
// there can be added file size
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
