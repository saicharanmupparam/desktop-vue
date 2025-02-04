import type { Login, User } from "../interfaces";
import { supabase } from "../utils";

export default {
  login({ email }: Login) {
    return supabase.auth.signInWithOtp({
      email,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
      },
    });
  },

  verify({ email, token }: Login) {
    return supabase.auth.verifyOtp({
      email,
      token: token as string,
      type: "email",
    });
  },

  signUp({ email, password, phone, firstname, lastname }: User) {
    return supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstname,
          last_name: lastname,
          phone,
        },
      },
    });
  },
};
