import { timestamp } from ".";

export interface CommentData extends timestamp {
    id: number;
    text: string;
    reply_to: number | null;
}
