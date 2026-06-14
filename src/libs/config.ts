export const MORGAN_CONFIG = ":method :url :response-time [:status] \n";

import mongoose from "mongoose";

export const shapeIntoMongoosObjectId = (target: any) => {
  return typeof target === "string"
    ? new mongoose.Types.ObjectId(target)
    : target;
};
