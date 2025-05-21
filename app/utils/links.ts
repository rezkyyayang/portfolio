import type { NavigationMenuItem } from '@nuxt/ui'

// Define an array of navigation menu items for the application
export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home', // Label for the Home page
    icon: 'i-lucide-home', // Icon for the Home page
    to: '/' // Path to the Home page
  },
  {
    label: 'Projects', // Label for the Projects page
    icon: 'i-lucide-folder', // Icon for the Projects page
    to: '/projects' // Path to the Projects page
  },
  {
    label: 'Blog', // Label for the Blog page
    icon: 'i-lucide-file-text', // Icon for the Blog page
    to: '/blog' // Path to the Blog page
  },
  {
    label: 'Exams', // Label for the Exams page
    icon: 'i-lucide-list', // Icon for the Exams page
    to: '/exams' // Path to the Exams page
  },
    // {
    //   label: 'Videos', // Label for the Videos page
    //   icon: 'i-lucide-mic', // Icon for the Videos page
    //   to: '/speaking' // Path to the Videos page
    // },
  {
    label: 'About', // Label for the About page
    icon: 'i-lucide-user', // Icon for the About page
    to: '/about' // Path to the About page
  }
];
