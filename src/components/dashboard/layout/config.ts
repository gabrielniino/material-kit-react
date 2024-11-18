import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Colaboradores', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integrações', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Configuações', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Conta', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Página de erro', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
