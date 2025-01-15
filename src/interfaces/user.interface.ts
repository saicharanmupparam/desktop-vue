export interface User {
  created_at: string;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  mobile: number | null;
  username: string;
}

export interface Login {
  username?: string;
  email: string;
  token?: string;
  session?: string;
  setUsername?: (username: string) => void;
  setEmail?: (email: string) => void;
  setSession?: (session: string) => void;
}
