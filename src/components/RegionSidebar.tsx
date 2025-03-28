
import { Button } from "@/components/ui/button";
import { RegionInfo } from "@/pages/Index";
import { X, Phone, Mail } from "lucide-react";

interface RegionSidebarProps {
  region: RegionInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

const RegionSidebar = ({ region, isOpen, onClose }: RegionSidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Region Details</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {region ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-quebec-blue mb-2">{region.name}</h3>
              <div className="h-1 w-20 bg-quebec-blue rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{region.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{region.email}</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-quebec-blue hover:bg-quebec-blue/90">
              Contact Franchise
            </Button>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a region to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default RegionSidebar;
