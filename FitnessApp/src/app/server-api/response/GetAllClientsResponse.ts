import { Client } from "../../models/client.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetAllClientsResponse extends BaseResponse {
    clients: Client[];
}