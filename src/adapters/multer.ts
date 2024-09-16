import multer from "multer";
import path from "path";

// Define where and how to store files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the folder where files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Use unique name to avoid conflicts
  }
});

// Only accept image files
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Not an image! Please upload only images."), false); // Reject the file
  }
};

// Export Multer middleware
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
