import TabGroup from "@/components/ui/TabGroup";

interface AdminPageTemplateProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AdminPageTemplate({ tabs, activeTab, onTabChange }: AdminPageTemplateProps) {
  return <TabGroup tabs={tabs} activeTab={activeTab} onChange={onTabChange} />;
}
