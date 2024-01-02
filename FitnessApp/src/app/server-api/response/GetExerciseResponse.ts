import { Exercise } from "../../models/exercise.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetExerciseResponse extends BaseResponse {
    exercise: Exercise;
}