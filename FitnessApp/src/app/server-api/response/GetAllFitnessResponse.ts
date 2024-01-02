import { Fitness } from "../../models/fitness.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetAllFitnessResponse extends BaseResponse {
    fitness: Fitness[]
}