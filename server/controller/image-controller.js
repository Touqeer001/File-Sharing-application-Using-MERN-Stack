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
    response
      .status(200)
      .json({ path: `http://localhost:8000/file/${file._id}` }); //examplehttps://www.branchcms.com/learn/docs/overview/uploading-files-images/image-upload
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

//url me ? mark ke baad jo aata h use query kehte h or slash/ ke baad jo aata h use Params kehte h....

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);
    file.downloadContent++;
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message });
  }
};
