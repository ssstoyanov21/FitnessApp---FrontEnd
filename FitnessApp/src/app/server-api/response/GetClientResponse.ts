import { Client } from "../../models/client.interface";
import { BaseResponse } from "./BaseResponse";

export interface GetClientResponse extends BaseResponse {
    client: Client;
}