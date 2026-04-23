import type { Config } from 'tailwindcss';
import { designConfig } from './src/design.config';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: designConfig.colors.primary,
        primaryLight: designConfig.colors.primaryLight,
        primaryDark: designConfig.colors.primaryDark,
        secondary: designConfig.colors.secondary,
        accent: designConfig.colors.accent, // #FFCF2A
        background: designConfig.colors.background,
        surface: designConfig.colors.surface,
        surfaceDark: designConfig.colors.surfaceDark,
        textPrimary: designConfig.colors.textPrimary,
        textSecondary: designConfig.colors.textSecondary,
        textLight: designConfig.colors.textLight,
        border: designConfig.colors.border,
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "'Arial Narrow'", 'system-ui', 'sans-serif'],
        body: ["'Nunito'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'system-ui', 'sans-serif'],
        rounded: ["'Fredoka'", "'Nunito'", '-apple-system', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        whisper: '0 2px 8px rgba(29,11,36,0.06)',
        card: '0 8px 24px rgba(29,11,36,0.10)',
        glow: '0 12px 32px rgba(180,31,207,0.18)',
        deep: '0 24px 56px rgba(29,11,36,0.24)',
        ribbon: '0 4px 16px rgba(29,11,36,0.22)',
        pillGreen: '0 10px 28px rgba(53,196,81,0.32)',
        pillMagenta: '0 10px 28px rgba(180,31,207,0.28)',
      },
      borderRadius: {
        pill: '50px',
        bubble: '28px',
        card: '12px',
        bento: '20px',
      },
      letterSpacing: {
        stamp: '0.1em',
        tight2: '-0.01em',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #B41FCF 0%, #63176F 55%, #1D0B24 100%)',
        'hero-gradient-mobile': 'linear-gradient(180deg, #B41FCF 0%, #63176F 55%, #1D0B24 100%)',
        'cta-gradient': 'linear-gradient(160deg, #63176F 0%, #B41FCF 60%, #1D0B24 100%)',
        'section-mesh':
          'radial-gradient(circle at 15% 20%, rgba(180,31,207,0.22) 0%, transparent 42%), radial-gradient(circle at 85% 80%, rgba(99,23,111,0.38) 0%, transparent 50%), radial-gradient(circle at 55% 55%, rgba(53,196,81,0.14) 0%, transparent 45%)',
        'dot-grid':
          'radial-gradient(circle, rgba(231,217,233,0.9) 1.2px, transparent 1.5px)',
        'dot-grid-dark':
          'radial-gradient(circle, rgba(253,249,245,0.12) 1.2px, transparent 1.5px)',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(20px,-30px,0) scale(1.05)' },
        },
        driftSwoosh: {
          '0%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
          '100%': { transform: 'translateX(-20px)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.08) translate(-2%,-2%)' },
        },
        sparklePulse: {
          '0%,100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.35)', opacity: '1' },
        },
        springIn: {
          '0%': { transform: 'translateY(24px) scale(0.92)', opacity: '0' },
          '60%': { transform: 'translateY(-4px) scale(1.02)', opacity: '1' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        ribbonIn: {
          '0%': { transform: 'scaleX(0.92) skewX(-4deg)', opacity: '0' },
          '100%': { transform: 'scaleX(1) skewX(0)', opacity: '1' },
        },
        ringPulse: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(53,196,81,0.6)' },
          '50%': { boxShadow: '0 0 0 10px rgba(53,196,81,0)' },
        },
        underlineSweep: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 30s ease-in-out infinite',
        driftSwoosh: 'driftSwoosh 14s ease-in-out infinite',
        kenBurns: 'kenBurns 18s ease-in-out infinite alternate',
        sparklePulse: 'sparklePulse 2.4s ease-in-out infinite',
        springIn: 'springIn 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        ribbonIn: 'ribbonIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        ringPulse: 'ringPulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
