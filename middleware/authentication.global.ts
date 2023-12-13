export default defineNuxtRouteMiddleware((to) => {
  const blackList = ['/', '/signup'];
  const token = useCookie('token');

  if (!token.value && !blackList.includes(to.path)) {
    return navigateTo('/');
  }
});
