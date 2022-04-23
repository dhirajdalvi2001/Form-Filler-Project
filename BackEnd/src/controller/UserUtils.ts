import { User, UserModel } from "../entity/User";

export const findUser = async (
  userInfo: string,
  inputType: String = "id"
): Promise<(User & { _id: string }) | null> => {
  let user = null;
  try {
    if (inputType === "email") {
      user = await UserModel.find({ email: userInfo });
    } else if (inputType === "id") {
      user = await UserModel.findById(userInfo);
    }

    if (user && user.length === 0) {
      user = null;
    }
  } catch (e) {
    throw e;
  }
  return user;
};
