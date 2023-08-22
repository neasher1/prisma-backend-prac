import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDBCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDBCategory(req.body);
    res.send({
      success: true,
      message: "category created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const CategoryController = {
  insertIntoDBCategory,
};
