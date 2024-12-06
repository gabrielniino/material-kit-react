import * as React from 'react';
import DynamicDashboard from "@/components/dashboard/overview/dynamic-dashboard";

export const metadata = {
  title: `Overview | Dashboard | Smart Cities`,
};

export default function Page(): React.JSX.Element {
  return <DynamicDashboard />;
}
