//Middleware is software that acts as a bridge between a web application's incoming requests and outgoing responses.
//It intercepts and manipulates these messages, adding extra functionality to the application,
// such as logging, authentication, or error handling, without directly altering the core application logic.
//Middleware functions operate in the middle of the request-response cycle and can modify both the request and response objects.
import multer from "multer";
const upload = multer({ dest: "uploads" });
export default upload;
