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
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.send(err);
  }
};

const updatePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const payload = req.body;
  try {
    const result = await PostService.updatePost(id, payload);
    res.send({
      success: true,
      message: "post updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostService.deletePost(id);
    res.send({
      success: true,
      message: "post deleted successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const PostController = {
  insertIntoPost,
  getAllPost,
  updatePost,
  deletePost
};
