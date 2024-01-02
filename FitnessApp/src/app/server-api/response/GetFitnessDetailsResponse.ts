import { Exercise } from "../../models/exercise.interface";
import { Fitness } from "../../models/fitness.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetFitnessDetailsResponse extends BaseResponse{
    fitness: Fitness;
    exercises: Exercise[];
}