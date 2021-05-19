export interface Grade {
  ID: string;

  issuer: string;

  grade: string;

  description?: string;

  removed?: boolean;

  updatedAt: number;

  createdAt: number;
}
