import React from 'react';
import { useTheme } from '../App'; // Make sure this import path is correct

const BikePreloader = ({ isVisible }) => {
  const { isDark } = useTheme();
  
  const preloaderStyle = {
    '--hue': '223',
    '--bg': isDark ? 'hsl(223, 90%, 10%)' : 'hsl(223, 90%, 90%)',
    '--fg': isDark ? 'hsl(223, 90%, 90%)' : 'hsl(223, 90%, 10%)',
    '--primary': 'hsl(223, 90%, 50%)',
    '--trans-dur': '0.3s',
    fontSize: 'calc(16px + (32 - 16) * (100vw - 320px)/(2560 - 320))'
  };

  const bikeStyles = `
    .bike-preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--bg);
      color: var(--fg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
      opacity: ${isVisible ? '1' : '0'};
      visibility: ${isVisible ? 'visible' : 'hidden'};
    }
    
    .bike {
      display: block;
      width: 16em;
      height: auto;
    }
    
    .bike__body, .bike__front, .bike__handlebars, .bike__pedals,
    .bike__pedals-spin, .bike__seat, .bike__spokes,
    .bike__spokes-spin, .bike__tire {
      animation: bikeBody 3s ease-in-out infinite;
      stroke: var(--primary);
      transition: stroke var(--trans-dur);
    }
    
    .bike__spokes, .bike__tire {
      stroke: currentColor;
    }
    
    .bike__spokes-spin, .bike__pedals-spin {
      transform-box: fill-box;
      transform-origin: center;
    }
    
    .bike__front { animation-name: bikeFront; }
    .bike__handlebars { animation-name: bikeHandlebars; }
    .bike__pedals { animation-name: bikePedals; }
    .bike__pedals-spin { animation-name: bikePedalsSpin; }
    .bike__seat { animation-name: bikeSeat; }
    .bike__spokes { animation-name: bikeSpokes; }
    .bike__spokes-spin { animation-name: bikeSpokesSpin; }
    .bike__tire { animation-name: bikeTire; }
    
    @keyframes bikeBody {
      from { stroke-dashoffset: 79; }
      33%, 67% { stroke-dashoffset: 0; }
      to { stroke-dashoffset: -79; }
    }
    
    @keyframes bikeFront {
      from { stroke-dashoffset: 19; }
      33%, 67% { stroke-dashoffset: 0; }
      to { stroke-dashoffset: -19; }
    }
    
    @keyframes bikeHandlebars {
      from { stroke-dashoffset: 10; }
      33%, 67% { stroke-dashoffset: 0; }
      to { stroke-dashoffset: -10; }
    }
    
    @keyframes bikePedals {
      from { animation-timing-function: ease-in; stroke-dashoffset: -25.133; }
      33%, 67% { animation-timing-function: ease-out; stroke-dashoffset: -21.991; }
      to { stroke-dashoffset: -25.133; }
    }
    
    @keyframes bikePedalsSpin {
      from { transform: rotate(0.1875turn); }
      to { transform: rotate(3.1875turn); }
    }
    
    @keyframes bikeSeat {
      from { stroke-dashoffset: 5; }
      33%, 67% { stroke-dashoffset: 0; }
      to { stroke-dashoffset: -5; }
    }
    
    @keyframes bikeSpokes {
      from { animation-timing-function: ease-in; stroke-dashoffset: -31.416; }
      33%, 67% { animation-timing-function: ease-out; stroke-dashoffset: -23.562; }
      to { stroke-dashoffset: -31.416; }
    }
    
    @keyframes bikeSpokesSpin {
      from { transform: rotate(0); }
      to { transform: rotate(3turn); }
    }
    
    @keyframes bikeTire {
      from { animation-timing-function: ease-in; stroke-dashoffset: 56.549; transform: rotate(0); }
      33% { stroke-dashoffset: 0; transform: rotate(0.33turn); }
      67% { animation-timing-function: ease-out; stroke-dashoffset: 0; transform: rotate(0.67turn); }
      to { stroke-dashoffset: -56.549; transform: rotate(1turn); }
    }
    
    .loading-text {
      position: absolute;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
      color: var(--primary);
      font-size: 1.2em;
      font-weight: 600;
      text-align: center;
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
  `;

  return (
    <>
      <style>{bikeStyles}</style>
      <div className="bike-preloader" style={preloaderStyle}>
        <svg className="bike" viewBox="0 0 48 30" width="48" height="30">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
            {/* Rear wheel */}
            <g transform="translate(9.5,19)">
              <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549"/>
              <g className="bike__spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                <circle className="bike__spokes" r="5"/>
                <circle className="bike__spokes" r="5" transform="rotate(180 0 0)"/>
              </g>
            </g>

            {/* Pedal / crankset */}
            <g transform="translate(24,19)">
              <g className="bike__pedals-spin" strokeDasharray="25.133 25.133" strokeDashoffset="-21.991" transform="rotate(67.5 0 0)">
                <circle className="bike__pedals" r="4"/>
                <circle className="bike__pedals" r="4" transform="rotate(180 0 0)"/>
              </g>
            </g>

            {/* Front wheel */}
            <g transform="translate(38.5,19)">
              <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549"/>
              <g className="bike__spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                <circle className="bike__spokes" r="5"/>
                <circle className="bike__spokes" r="5" transform="rotate(180 0 0)"/>
              </g>
            </g>

            {/* Frame, bars & seat */}
            <polyline className="bike__seat" points="14 3,18 3" strokeDasharray="5 5"/>
            <polyline className="bike__body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" strokeDasharray="79 79"/>
            <path className="bike__handlebars" d="M30 2h6s1 0 1 1-1 1-1 1" strokeDasharray="10 10"/>
            <polyline className="bike__front" points="32.5 2,38.5 19" strokeDasharray="19 19"/>
          </g>
        </svg>
        <div className="loading-text">
          Loading Sports IITPkd...
        </div>
      </div>
    </>
  );
};

export default BikePreloader;