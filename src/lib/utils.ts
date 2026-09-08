export function cn(...inputs: (string | boolean | null | undefined)[]) {
  return inputs.filter(Boolean).join(' ');
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id.replace(/^#/, ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
