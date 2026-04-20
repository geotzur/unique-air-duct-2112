import imagesJson from '../../images.json';

export type ImageManifest = {
  hero: string | null;
  hero_portrait?: string | null;
  about: string | null;
  cta_bg: string | null;
  services: Record<string, string | null>;
  areas: Record<string, string | null>;
  before_after: Record<string, { before: string; after: string }>;
  reuse_map?: Record<string, string>;
  icons?: Record<string, string>;
  utility_icons?: Record<string, string>;
  _layout_meta?: { service_aspect?: string };
};

export const manifest = imagesJson as unknown as ImageManifest;

export const getHeroImage = (m: ImageManifest = manifest) => m?.hero ?? null;
export const getAboutImage = (m: ImageManifest = manifest) => m?.about ?? null;
export const getCtaImage = (m: ImageManifest = manifest) => m?.cta_bg ?? null;

export const getServiceImage = (slug: string, m: ImageManifest = manifest) =>
  m?.services?.[slug] ?? m?.reuse_map?.[`service:${slug}`] ?? null;

export const getAreaImage = (slug: string, m: ImageManifest = manifest) =>
  m?.areas?.[slug] ?? m?.reuse_map?.[`area:${slug}`] ?? null;

export const getServiceIcon = (slug: string, m: ImageManifest = manifest) =>
  m?.icons?.[slug] ?? null;

export const getUtilityIcon = (key: string, m: ImageManifest = manifest) =>
  m?.utility_icons?.[key] ?? null;

export const getBeforeAfter = (slug: string, m: ImageManifest = manifest) =>
  m?.before_after?.[slug] ?? null;

export const hasBeforeAfter = (slug: string, m: ImageManifest = manifest) =>
  !!m?.before_after?.[slug];

/** Build a fallback gradient from palette tokens for a given slug seed */
export function fallbackGradient(seed: string): string {
  const colors = ['#B41FCF', '#63176F', '#35C451', '#FFCF2A', '#1D0B24'];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const a = colors[h % colors.length];
  const b = colors[(h >>> 3) % colors.length];
  return `linear-gradient(135deg, ${a} 0%, ${b} 100%)`;
}
