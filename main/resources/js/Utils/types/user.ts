import { timestamp } from ".";

export interface UserData extends timestamp {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    avatar: string;
}
