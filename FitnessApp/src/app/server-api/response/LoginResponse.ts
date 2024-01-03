import { Role } from "../../enums/Role";
import { BaseResponse } from "./BaseResponse";

export interface LoginResponse extends BaseResponse {
    role: Role;
}