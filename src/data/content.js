// ✏️ Editable page content: stats, services, process, tech and more.
import { Code2, Globe, ShoppingCart, Bot, LayoutDashboard, Layers, Briefcase, Sparkles, Boxes, Rocket, MessageSquare, RefreshCw, Eye, ShieldCheck, Wrench } from 'lucide-react'

export const techStrip = ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'JAVASCRIPT', 'AI', 'TAILWIND', 'GIT']

// Keep these honest. Update `Projects Built` as your list grows.
export const stats = [
  { value: '8', label: 'Projects Built' },
  { value: 'MERN', label: 'Primary Stack' },
  { value: 'Full-Stack', label: 'Development' },
  { value: 'AI', label: 'Integration' },
]

export const aboutPoints = ['Full-stack development', 'MERN stack', 'AI integration', 'E-commerce', 'Business applications', 'Responsive UI', 'REST APIs', 'Authentication', 'Admin dashboards']

export const projectFilters = ['All', 'Web Apps', 'E-commerce', 'AI', 'FinTech', 'Booking', 'Travel']

export const services = [
  { icon: Code2, title: 'Full-Stack Web Development', text: 'Modern web applications using React, Node.js, Express and MongoDB.' },
  { icon: Globe, title: 'Business Websites', text: 'Professional websites designed around business goals and user experience.' },
  { icon: ShoppingCart, title: 'E-commerce', text: 'Complete online stores with products, carts, orders and admin functionality.' },
  { icon: Bot, title: 'AI Integration', text: 'AI assistants, intelligent workflows, recommendations and automation.' },
  { icon: LayoutDashboard, title: 'Admin Dashboards', text: 'Custom dashboards for managing users, products, bookings, orders and business data.' },
  { icon: Layers, title: 'Custom Web Applications', text: 'Custom software built around specific business requirements.' },
]

export const process = [
  { title: 'Discover', text: 'Understand the business, goals and requirements.' },
  { title: 'Plan', text: 'Define features, technology and project structure.' },
  { title: 'Design', text: 'Create the interface and user experience.' },
  { title: 'Develop', text: 'Build the frontend, backend and integrations.' },
  { title: 'Test', text: 'Test responsiveness, functionality and performance.' },
  { title: 'Launch', text: 'Deploy the application and provide launch support.' },
]

export const techStack = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { category: 'Database', items: ['MongoDB'] },
  { category: 'AI', items: ['OpenAI', 'AI APIs', 'AI Assistants'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
]

export const why = [
  { icon: Briefcase, title: 'Business-Focused', text: 'I focus on building solutions around real business requirements.' },
  { icon: Sparkles, title: 'Modern UI', text: 'Clean, responsive and modern interfaces.' },
  { icon: Boxes, title: 'Full-Stack', text: 'Frontend, backend, database and API integration.' },
  { icon: Layers, title: 'Scalable Architecture', text: 'Organized code that can grow with the project.' },
  { icon: Bot, title: 'AI-Ready', text: 'AI integrations can be incorporated where they provide real value.' },
  { icon: Rocket, title: 'Deployment Support', text: 'Help getting the finished project online.' },
]

// No real testimonials yet. To show real ones later, add them here
// as { quote, name, role } and the Expect section will render them instead.
export const testimonials = []

export const expect = [
  { icon: MessageSquare, title: 'Clear communication' },
  { icon: RefreshCw, title: 'Regular updates' },
  { icon: Sparkles, title: 'Responsive design' },
  { icon: Wrench, title: 'Clean development' },
  { icon: Eye, title: 'Transparent workflow' },
  { icon: ShieldCheck, title: 'Deployment support' },
]

export const navItems = [
  { label: 'Home', id: 'hero', path: '/' },
  { label: 'About', id: 'about', path: '/about' },
  { label: 'Work', id: 'work', path: '/projects' },
  { label: 'Services', id: 'services', path: '/services' },
  { label: 'Skills', id: 'skills', path: '/#skills' },
  { label: 'Contact', id: 'contact', path: '/contact' },
]
