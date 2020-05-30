import { Document } from 'mongoose'
export interface Iitem extends Document {
    id?: string;
    name: string;
    description?: string;
    qty: number;
  }

export interface Item {
    id?: string;
    name: string;
    description?: string;
    qty: number;
  }
