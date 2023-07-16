import { Auth as NuxtAuth } from '@nuxtjs/auth-next';
import { User } from 'auth0';

export interface AuthUser extends Required<User> {
  sub: string;
}

declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: AuthUser & typeof NuxtAuth.prototype.user;
  }
}

declare module '@nuxt/types' {
  interface Auth extends NuxtAuth {
    user: AuthUser & typeof NuxtAuth.prototype.user;
  }
}

declare module 'vuex/types/index' {
  interface Auth extends NuxtAuth {
    user: AuthUser & typeof NuxtAuth.prototype.user;
  }
}
