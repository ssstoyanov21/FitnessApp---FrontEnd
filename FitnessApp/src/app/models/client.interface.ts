import { Role } from "../enums/Role";

export interface Client {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    kg: number;
    role: Role;
}