/// <reference types="astro/client" />

declare module 'virtual:config' {
  const Config: import('astro-pure/types').ConfigOutput
  export default Config
}

declare module '*.astro' {
  const component: any;
  export default component;
}