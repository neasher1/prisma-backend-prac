import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoPost(req.body);
    res.send({
      success: true,
      message: "post created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  console.log(options);
  try {
    const result = await PostService.getAllPost(options);
    res.send({
      success: true,
      message: "post fetched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  insertIntoPost,
  getAllPost,
};
