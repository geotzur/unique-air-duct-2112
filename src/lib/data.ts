import contentJson from '../../content.json';
import companyJson from '../../company_info.json';

export const content = contentJson;
export const company = contentJson.company;
export const companyInfo = companyJson;

export type Service = typeof contentJson.services[number];
export type Area = typeof contentJson.areas[number];
export type BlogPost = typeof contentJson.blog[number];
export type Testimonial = typeof contentJson.testimonials[number];

export const services = contentJson.services;
export const areas = contentJson.areas;
export const blog = contentJson.blog;
export const testimonials = contentJson.testimonials;
export const processSteps = contentJson.process_steps;
export const whyUs = contentJson.home.why_us;
export const stats = contentJson.home.stats;

export const navLinks = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/areas/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const phoneHref = `tel:${company.phone.replace(/[^0-9+]/g, '')}`;

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
export function getArea(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug);
}
export function getBlog(slug: string): BlogPost | undefined {
  return blog.find(b => b.slug === slug);
}
