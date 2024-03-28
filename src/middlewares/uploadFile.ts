import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const exectName = path.extname(file.originalname);
    cb(null, Date.now() + "-" + exectName);
  },
});

const upload = multer({ storage: storage });

export default upload;
