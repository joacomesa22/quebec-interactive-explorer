
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
        viewBox="0 0 800 800"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Quebec map outline */}
        <path 
          d="M250,100 C300,80 400,50 500,80 C600,110 650,150 700,200 C750,250 780,350 760,450 C740,550 720,600 680,650 C640,700 580,730 500,750 C420,770 350,750 300,720 C250,690 220,650 200,600 C180,550 170,500 150,450 C130,400 120,350 130,300 C140,250 160,200 200,150 C220,130 240,110 250,100Z"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        
        {/* Regions */}
        
        {/* Region 1: Capitale-Nationale */}
        <path
          id="region-1"
          d="M520,450 C540,440 560,445 575,460 C590,475 595,495 590,515 C585,535 570,550 550,555 C530,560 510,555 495,540 C480,525 475,505 480,485 C485,465 500,450 520,450Z"
          className={`quebec-region ${hoveredRegion === 1 ? 'region-hovered' : ''}`}
          fill="#1B5E20"
          onClick={() => onRegionClick(regions[0])}
          onMouseEnter={() => setHoveredRegion(1)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 2: Mauricie */}
        <path
          id="region-2"
          d="M470,460 C490,445 515,445 535,460 C555,475 565,500 560,525 C555,550 535,565 510,570 C485,575 460,565 445,540 C430,515 435,485 455,470 C460,465 465,462 470,460Z"
          className={`quebec-region ${hoveredRegion === 2 ? 'region-hovered' : ''}`}
          fill="#283593"
          onClick={() => onRegionClick(regions[1])}
          onMouseEnter={() => setHoveredRegion(2)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 3: Estrie */}
        <path
          id="region-3"
          d="M530,550 C550,540 575,545 590,560 C605,575 610,600 600,620 C590,640 565,650 545,645 C525,640 510,625 505,605 C500,585 510,565 530,550Z"
          className={`quebec-region ${hoveredRegion === 3 ? 'region-hovered' : ''}`}
          fill="#AD1457"
          onClick={() => onRegionClick(regions[2])}
          onMouseEnter={() => setHoveredRegion(3)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 4: Montréal */}
        <path
          id="region-4"
          d="M580,580 C595,575 610,580 620,590 C630,600 635,615 630,630 C625,645 610,655 595,650 C580,645 570,630 570,615 C570,600 575,585 580,580Z"
          className={`quebec-region ${hoveredRegion === 4 ? 'region-hovered' : ''}`}
          fill="#546E7A"
          onClick={() => onRegionClick(regions[3])}
          onMouseEnter={() => setHoveredRegion(4)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 5: Outaouais */}
        <path
          id="region-5"
          d="M400,500 C425,480 455,480 480,495 C505,510 520,540 515,570 C510,600 485,620 460,625 C435,630 410,615 395,590 C380,565 380,530 400,500Z"
          className={`quebec-region ${hoveredRegion === 5 ? 'region-hovered' : ''}`}
          fill="#D32F2F"
          onClick={() => onRegionClick(regions[4])}
          onMouseEnter={() => setHoveredRegion(5)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 6: Abitibi-Témiscamingue */}
        <path
          id="region-6"
          d="M320,450 C345,435 375,440 395,460 C415,480 420,510 410,535 C400,560 375,575 345,570 C315,565 295,540 290,510 C285,480 300,460 320,450Z"
          className={`quebec-region ${hoveredRegion === 6 ? 'region-hovered' : ''}`}
          fill="#E91E63"
          onClick={() => onRegionClick(regions[5])}
          onMouseEnter={() => setHoveredRegion(6)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 7: Côte-Nord */}
        <path
          id="region-7"
          d="M600,250 C640,235 680,245 710,275 C740,305 750,345 740,385 C730,425 695,450 655,460 C615,470 575,455 550,425 C525,395 520,355 540,320 C560,285 580,260 600,250Z"
          className={`quebec-region ${hoveredRegion === 7 ? 'region-hovered' : ''}`}
          fill="#1565C0"
          onClick={() => onRegionClick(regions[6])}
          onMouseEnter={() => setHoveredRegion(7)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 8: Nord-du-Québec */}
        <path
          id="region-8"
          d="M400,180 C440,150 490,150 530,180 C570,210 590,260 580,310 C570,360 540,400 490,420 C440,440 380,430 340,390 C300,350 290,300 310,250 C330,200 370,170 400,180Z"
          className={`quebec-region ${hoveredRegion === 8 ? 'region-hovered' : ''}`}
          fill="#0288D1"
          onClick={() => onRegionClick(regions[7])}
          onMouseEnter={() => setHoveredRegion(8)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 9: Bas-Saint-Laurent */}
        <path
          id="region-9"
          d="M570,500 C585,490 605,490 620,500 C635,510 640,525 635,540 C630,555 615,565 600,570 C585,575 565,570 550,560 C535,550 530,535 535,520 C540,505 555,495 570,500Z"
          className={`quebec-region ${hoveredRegion === 9 ? 'region-hovered' : ''}`}
          fill="#00BCD4"
          onClick={() => onRegionClick(regions[8])}
          onMouseEnter={() => setHoveredRegion(9)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 10: Saguenay-Lac-Saint-Jean */}
        <path
          id="region-10"
          d="M510,350 C540,335 575,340 600,360 C625,380 635,410 630,440 C625,470 605,490 580,500 C555,510 525,500 505,480 C485,460 480,430 490,405 C500,380 515,360 510,350Z"
          className={`quebec-region ${hoveredRegion === 10 ? 'region-hovered' : ''}`}
          fill="#1A237E"
          onClick={() => onRegionClick(regions[9])}
          onMouseEnter={() => setHoveredRegion(10)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 11: Gaspésie-Îles-de-la-Madeleine */}
        <path
          id="region-11"
          d="M640,460 C660,450 685,455 700,470 C715,485 720,505 715,525 C710,545 695,560 675,565 C655,570 635,565 620,550 C605,535 600,515 605,495 C610,475 625,465 640,460Z"
          className={`quebec-region ${hoveredRegion === 11 ? 'region-hovered' : ''}`}
          fill="#00796B"
          onClick={() => onRegionClick(regions[10])}
          onMouseEnter={() => setHoveredRegion(11)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 12: Chaudière-Appalaches */}
        <path
          id="region-12"
          d="M550,510 C565,500 585,500 600,510 C615,520 620,535 615,550 C610,565 595,575 580,580 C565,585 550,580 540,570 C530,560 525,545 530,530 C535,515 545,505 550,510Z"
          className={`quebec-region ${hoveredRegion === 12 ? 'region-hovered' : ''}`}
          fill="#558B2F"
          onClick={() => onRegionClick(regions[11])}
          onMouseEnter={() => setHoveredRegion(12)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 13: Laval */}
        <path
          id="region-13"
          d="M560,590 C570,585 580,585 590,590 C600,595 605,605 605,615 C605,625 595,635 585,640 C575,645 565,645 555,640 C545,635 540,625 540,615 C540,605 550,595 560,590Z"
          className={`quebec-region ${hoveredRegion === 13 ? 'region-hovered' : ''}`}
          fill="#002244"
          onClick={() => onRegionClick(regions[12])}
          onMouseEnter={() => setHoveredRegion(13)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 14: Lanaudière */}
        <path
          id="region-14"
          d="M500,500 C520,485 545,485 565,500 C585,515 590,540 580,560 C570,580 550,590 530,590 C510,590 490,580 480,560 C470,540 475,515 490,500 C495,495 497,492 500,500Z"
          className={`quebec-region ${hoveredRegion === 14 ? 'region-hovered' : ''}`}
          fill="#E91E63"
          onClick={() => onRegionClick(regions[13])}
          onMouseEnter={() => setHoveredRegion(14)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 15: Laurentides */}
        <path
          id="region-15"
          d="M470,440 C495,425 525,430 545,450 C565,470 570,500 560,525 C550,550 530,565 505,570 C480,575 455,560 440,540 C425,520 425,490 440,465 C450,455 460,445 470,440Z"
          className={`quebec-region ${hoveredRegion === 15 ? 'region-hovered' : ''}`}
          fill="#FFC107"
          onClick={() => onRegionClick(regions[14])}
          onMouseEnter={() => setHoveredRegion(15)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 16: Montérégie */}
        <path
          id="region-16"
          d="M540,560 C560,550 585,550 605,565 C625,580 630,600 620,620 C610,640 590,650 570,650 C550,650 530,640 515,625 C500,610 500,590 510,575 C520,565 530,560 540,560Z"
          className={`quebec-region ${hoveredRegion === 16 ? 'region-hovered' : ''}`}
          fill="#795548"
          onClick={() => onRegionClick(regions[15])}
          onMouseEnter={() => setHoveredRegion(16)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
        
        {/* Region 17: Centre-du-Québec */}
        <path
          id="region-17"
          d="M505,580 C520,570 540,570 555,580 C570,590 575,605 570,620 C565,635 550,645 535,650 C520,655 505,650 490,640 C475,630 470,615 475,600 C480,585 495,580 505,580Z"
          className={`quebec-region ${hoveredRegion === 17 ? 'region-hovered' : ''}`}
          fill="#EF6C00"
          onClick={() => onRegionClick(regions[16])}
          onMouseEnter={() => setHoveredRegion(17)}
          onMouseLeave={() => setHoveredRegion(null)}
        />
      </svg>
      
      {/* Tooltip for hover */}
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
