import type { IUser } from '~/services/auth';

export const useAuth = (
  authFn: (user: IUser) => {
    data: { value: { token: string; error: string } };
  },
  auth: { loading: boolean; user: IUser }
) => {
  const router = useRouter();
  const token = useCookie('token');

  const fetchFn = async () => {
    auth.loading = true;
    try {
      const { data } = await authFn(auth.user);
      if (data.value.token) {
        token.value = data.value.token;
        router.push('/dashboard');
      }
    } finally {
      auth.loading = false;
    }
  };

  return { fetchFn };
};
