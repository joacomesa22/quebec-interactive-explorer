
import { useState } from "react";
import QuebecMap from "@/components/QuebecMap";
import RegionSidebar from "@/components/RegionSidebar";
import QuebecHeader from "@/components/QuebecHeader";

export interface RegionInfo {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleRegionClick = (region: RegionInfo) => {
    setSelectedRegion(region);
    setSidebarOpen(true);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <QuebecHeader />
      <div className="relative mx-auto max-w-7xl px-4 py-8">
        <div className="flex">
          <RegionSidebar 
            region={selectedRegion} 
            isOpen={sidebarOpen} 
            onClose={closeSidebar} 
          />
          <main className={`transition-all duration-300 ease-in-out flex-grow ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
            <div className="flex justify-center">
              <QuebecMap onRegionClick={handleRegionClick} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
