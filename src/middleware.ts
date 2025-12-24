// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  if (import.meta.env.PROD) {
    const url = new URL(context.request.url);

    // 强制 www → hqsay.com 跳转到 www.hqsay.com
    if (url.hostname === 'hqsay.com') {
      const newUrl = new URL(context.request.url);
      newUrl.hostname = 'www.hqsay.com';
      return context.redirect(newUrl.toString(), 301);
    }

    // 如果你偏好无 www，用这个：
    // if (url.hostname === 'www.hqsay.com') {
    //   const newUrl = new URL(context.request.url);
    //   newUrl.hostname = 'hqsay.com';
    //   return context.redirect(newUrl.toString(), 301);
    // }
  }

  // ✅ 调用 next() 并返回结果
  return next();
});