import { Exercise } from "../../models/exercise.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetAllExerciseResponse extends BaseResponse {
    exercises: Exercise[]
}