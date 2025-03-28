
import { useState } from "react";
import { RegionInfo } from "@/pages/Index";
import { regions } from "@/data/quebecRegions";

interface QuebecMapProps {
  onRegionClick: (region: RegionInfo) => void;
}

const QuebecMap = ({ onRegionClick }: QuebecMapProps) => {
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-3xl">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Quebec map */}
        <g>
          {/* Region 1: Capitale-Nationale */}
          <path
            id="region-1"
            d="M620,560 L650,530 L680,550 L650,580 Z"
            className={`quebec-region ${hoveredRegion === 1 ? 'region-hovered' : ''}`}
            fill="#1B5E20"
            onClick={() => onRegionClick(regions[0])}
            onMouseEnter={() => setHoveredRegion(1)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 2: Mauricie */}
          <path
            id="region-2"
            d="M540,560 L580,530 L620,560 L580,590 Z"
            className={`quebec-region ${hoveredRegion === 2 ? 'region-hovered' : ''}`}
            fill="#283593"
            onClick={() => onRegionClick(regions[1])}
            onMouseEnter={() => setHoveredRegion(2)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 3: Estrie */}
          <path
            id="region-3"
            d="M640,590 L660,570 L680,590 L660,610 Z"
            className={`quebec-region ${hoveredRegion === 3 ? 'region-hovered' : ''}`}
            fill="#AD1457"
            onClick={() => onRegionClick(regions[2])}
            onMouseEnter={() => setHoveredRegion(3)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 4: Montréal */}
          <path
            id="region-4"
            d="M790,590 L810,580 L830,600 L810,610 Z"
            className={`quebec-region ${hoveredRegion === 4 ? 'region-hovered' : ''}`}
            fill="#546E7A"
            onClick={() => onRegionClick(regions[3])}
            onMouseEnter={() => setHoveredRegion(4)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 5: Outaouais */}
          <path
            id="region-5"
            d="M460,590 L510,560 L540,590 L490,620 Z"
            className={`quebec-region ${hoveredRegion === 5 ? 'region-hovered' : ''}`}
            fill="#D32F2F"
            onClick={() => onRegionClick(regions[4])}
            onMouseEnter={() => setHoveredRegion(5)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 6: Abitibi-Témiscamingue */}
          <path
            id="region-6"
            d="M400,520 L450,480 L500,520 L450,560 Z"
            className={`quebec-region ${hoveredRegion === 6 ? 'region-hovered' : ''}`}
            fill="#E91E63"
            onClick={() => onRegionClick(regions[5])}
            onMouseEnter={() => setHoveredRegion(6)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 7: Côte-Nord */}
          <path
            id="region-7"
            d="M650,320 L800,200 L850,300 L700,420 Z"
            className={`quebec-region ${hoveredRegion === 7 ? 'region-hovered' : ''}`}
            fill="#1565C0"
            onClick={() => onRegionClick(regions[6])}
            onMouseEnter={() => setHoveredRegion(7)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 8: Nord-du-Québec */}
          <path
            id="region-8"
            d="M450,200 L600,100 L650,300 L500,400 Z"
            className={`quebec-region ${hoveredRegion === 8 ? 'region-hovered' : ''}`}
            fill="#0288D1"
            onClick={() => onRegionClick(regions[7])}
            onMouseEnter={() => setHoveredRegion(8)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 9: Bas-Saint-Laurent */}
          <path
            id="region-9"
            d="M670,520 L700,500 L730,520 L700,540 Z"
            className={`quebec-region ${hoveredRegion === 9 ? 'region-hovered' : ''}`}
            fill="#00BCD4"
            onClick={() => onRegionClick(regions[8])}
            onMouseEnter={() => setHoveredRegion(9)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 10: Saguenay-Lac-Saint-Jean */}
          <path
            id="region-10"
            d="M570,400 L650,320 L700,400 L620,480 Z"
            className={`quebec-region ${hoveredRegion === 10 ? 'region-hovered' : ''}`}
            fill="#1A237E"
            onClick={() => onRegionClick(regions[9])}
            onMouseEnter={() => setHoveredRegion(10)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 11: Gaspésie-Îles-de-la-Madeleine */}
          <path
            id="region-11"
            d="M750,470 L790,450 L820,480 L780,500 Z"
            className={`quebec-region ${hoveredRegion === 11 ? 'region-hovered' : ''}`}
            fill="#00796B"
            onClick={() => onRegionClick(regions[10])}
            onMouseEnter={() => setHoveredRegion(11)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 12: Chaudière-Appalaches */}
          <path
            id="region-12"
            d="M630,570 L660,550 L690,570 L660,590 Z"
            className={`quebec-region ${hoveredRegion === 12 ? 'region-hovered' : ''}`}
            fill="#558B2F"
            onClick={() => onRegionClick(regions[11])}
            onMouseEnter={() => setHoveredRegion(12)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 13: Laval */}
          <path
            id="region-13"
            d="M770,580 L785,570 L800,585 L785,595 Z"
            className={`quebec-region ${hoveredRegion === 13 ? 'region-hovered' : ''}`}
            fill="#002244"
            onClick={() => onRegionClick(regions[12])}
            onMouseEnter={() => setHoveredRegion(13)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 14: Lanaudière */}
          <path
            id="region-14"
            d="M590,580 L610,560 L630,580 L610,600 Z"
            className={`quebec-region ${hoveredRegion === 14 ? 'region-hovered' : ''}`}
            fill="#E91E63"
            onClick={() => onRegionClick(regions[13])}
            onMouseEnter={() => setHoveredRegion(14)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 15: Laurentides */}
          <path
            id="region-15"
            d="M560,570 L590,550 L620,570 L590,590 Z"
            className={`quebec-region ${hoveredRegion === 15 ? 'region-hovered' : ''}`}
            fill="#FFC107"
            onClick={() => onRegionClick(regions[14])}
            onMouseEnter={() => setHoveredRegion(15)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 16: Montérégie */}
          <path
            id="region-16"
            d="M630,600 L650,580 L670,600 L650,620 Z"
            className={`quebec-region ${hoveredRegion === 16 ? 'region-hovered' : ''}`}
            fill="#795548"
            onClick={() => onRegionClick(regions[15])}
            onMouseEnter={() => setHoveredRegion(16)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
          
          {/* Region 17: Centre-du-Québec */}
          <path
            id="region-17"
            d="M610,610 L630,590 L650,610 L630,630 Z"
            className={`quebec-region ${hoveredRegion === 17 ? 'region-hovered' : ''}`}
            fill="#EF6C00"
            onClick={() => onRegionClick(regions[16])}
            onMouseEnter={() => setHoveredRegion(17)}
            onMouseLeave={() => setHoveredRegion(null)}
          />
        </g>
        
        {/* Map Inset for Montreal area regions */}
        <rect x="740" y="550" width="120" height="100" className="map-inset" />
      </svg>
      
      {/* Tooltips for hover */}
      {hoveredRegion !== null && (
        <div className="tooltip">
          {regions.find(r => r.id === hoveredRegion)?.name}
        </div>
      )}
      
      {/* Region legend */}
      <div className="region-legend">
        {regions.map((region) => (
          <div 
            key={region.id} 
            className="legend-item"
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => onRegionClick(region)}
          >
            <span className="legend-number">{region.id}</span>
            <span className="legend-name">{region.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuebecMap;
