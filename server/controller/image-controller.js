import File from "../model/file.js";

export const uplaodImage = async (request, response) => {
  console.log(request);
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    console.log(file);
    response.status(200).json({});
  } catch (error) {
    console.error(error.message);
  }
};
