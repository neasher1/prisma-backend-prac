import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDb(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateIntoProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateIntoProfile(req.body);

    res.send({
      success: true,
      message: "profile created/updated successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      success: true,
      message: "User fetched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Single User fetched successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const userController = {
  insertIntoDb,
  insertOrUpdateIntoProfile,
  getUsers,
  getSingleUser,
};
