import type { SVGProps } from 'react';

export function TypeScriptLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="12" fill="#3178C6" />
      <path
        fill="#fff"
        d="M17 16.5h14.2v4.2h-4.8v16.8h-4.6V20.7H17v-4.2Z"
      />
      <path
        fill="#fff"
        d="M33.1 20.3c-3.3 0-5.6 1.9-5.6 4.6 0 2.1 1.5 3.4 4.3 3.9l1.3.2c1.2.2 1.9.6 1.9 1.2 0 .9-.8 1.4-2.1 1.4-1.4 0-2.9-.5-4.3-1.5l-2 3.1c1.8 1.3 4 2 6.5 2 3.7 0 6.1-1.7 6.1-4.6 0-2.2-1.7-3.4-4.4-3.9l-1.2-.2c-1.1-.2-1.8-.6-1.8-1.1 0-.7.7-1.1 1.9-1.1 1.2 0 2.5.4 3.6 1.2l1.9-2.9c-1.6-1-3.5-1.6-5.9-1.6Z"
      />
    </svg>
  );
}

export function JavaScriptLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="12" fill="#F7DF1E" />
      <path
        fill="#111827"
        d="M20.7 17v15.8c0 3.8-1.8 5.4-4.9 5.4-1.7 0-3.1-.4-4.4-1.1l1.5-3.6c.8.4 1.6.7 2.4.7 1 0 1.4-.4 1.4-1.6V17h4Z"
      />
      <path
        fill="#111827"
        d="M24.6 33.1c1.2 1.1 2.9 1.8 4.6 1.8 1.9 0 3-1 3-2.3 0-1.6-1.2-2-3.2-2.9l-1.1-.5c-3.2-1.4-5.3-3.1-5.3-6.6 0-3.4 2.6-5.9 6.6-5.9 1.9 0 3.7.5 5.1 1.4l-1.9 3.5c-1-.7-2.1-1.1-3.2-1.1-1.7 0-2.6.9-2.6 2.1 0 1.5 1 2 3.1 2.9l1.1.5c3.5 1.5 5.4 3.2 5.4 6.7 0 3.8-2.9 6.1-7 6.1-2.2 0-4.3-.6-6-1.9l1.4-3.8Z"
      />
    </svg>
  );
}

export function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" role="img" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="6" fill="#061C29" stroke="#61DAFB" strokeWidth="2" />
      <g stroke="#61DAFB" strokeWidth="3">
        <ellipse cx="32" cy="32" rx="20" ry="9.5" />
        <ellipse cx="32" cy="32" rx="20" ry="9.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="20" ry="9.5" transform="rotate(-60 32 32)" />
      </g>
    </svg>
  );
}

export function NextLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" role="img" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="12" fill="#111827" />
      <path
        fill="#fff"
        d="M15.2 15h4.2l7.1 10.6V15h4.3v18h-4.1l-7.2-10.7V33h-4.3V15Z"
      />
      <path
        fill="#fff"
        d="M33.7 30.6c0-1.4 1.1-2.5 2.4-2.5 1.4 0 2.4 1.1 2.4 2.5 0 1.4-1.1 2.5-2.4 2.5-1.3 0-2.4-1.1-2.4-2.5Z"
      />
    </svg>
  );
}
