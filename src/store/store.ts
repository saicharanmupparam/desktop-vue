import { reactive } from 'vue';
import type { Login } from '../interfaces';

export const store = reactive<Login>({
  username: '',
  session: '',
  email: '',
  setUsername(username: string) {
    this.username = username;
    localStorage.setItem('username', username);
  },
  setEmail(email: string) {
    this.email = email;
    localStorage.setItem('email', email);
  },
  setSession(session: string) {
    this.session = session;
    localStorage.setItem('session', session);
  },
});
