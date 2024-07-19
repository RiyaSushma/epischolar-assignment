"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/globe-data')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));

    console.log("data is: ", data);
  }, []);

  const countLines = (text: string, maxWidth: number) => {
    const words = text.split(' ');
    let lineCount = 0;
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const metrics = document.createElement('span');
      metrics.style.position = 'absolute';
      metrics.style.whiteSpace = 'nowrap';
      metrics.style.visibility = 'hidden';
      metrics.innerHTML = testLine;
      document.body.appendChild(metrics);
      const testWidth = metrics.clientWidth;
      document.body.removeChild(metrics);

      if (testWidth > maxWidth && currentLine !== '') {
        lineCount++;
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });

    lineCount++;
    return lineCount;
  };

  const generateCirclesData = (item: any) => {
    return Object.entries(item).map(([key, value]) => {
      const textLength = key.length + String(value).length;
      const combinedText = `${key}: ${String(value)}`;
      const lines = countLines(combinedText, 2);
      const size = Math.max(4, Math.max(lines, 2));
      
      console.log("size is: ", size);
      return {
        key,
        value: String(value),
        size,
      };
    });
  };

  const renderCircles = (circlesData: any[]) => {
    const radius = 20;
    const rows = 3;
    const cols = Math.ceil(circlesData.length / rows); 
    const spacing = 6;

    return circlesData.map((circle, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      
      const circleSize = Math.min(circle.size * 1.5, 14);
      const adjustedSize = circleSize + 'rem';

      return (
        <div
          key={index}
          className="bg-white rounded-full border-4 border-gradient-circle" 
          style={{
            width: adjustedSize,
            height: adjustedSize,
            position: 'absolute',
            color: '#00008B',
            padding: '2rem',
            background: 'radial-gradient(circle, white 45%, rgb(231, 84, 128) 90%)', 
            top: `calc(${row * (circleSize + spacing)}rem + 2rem)`,
            left: `calc(${col * (circleSize + spacing)}rem + 2rem)`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="text-xs">
            <h6 className="text-center font-semibold mb-1">{circle.key}</h6>
            <p className="text-left" style={{ fontSize: '0.75rem', display: 'flex', justifyContent: "center", alignItems: "center", padding: '0.05rem' }}>
            {circle.value}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-4 h-[120rem]">
    <h2 className="text-xl font-extrabold text-gray-800 mt-8 font-calibri z-10">Documents Required for Study Abroad Loan</h2>
    <div className="absolute flex mt-[3rem] w-[100rem] h-[100rem]">
    <div className="absolute inset-0 flex m-[5rem] items-center justify-center pointer-events-none">
        <div className="absolute rounded-full border-4 border-dotted border-gray-400 w-1/2 h-1/2"></div>
        <div className="absolute rounded-full border-4 border-dotted border-gray-300 w-3/4 h-3/4"></div>
        <div className="absolute rounded-full border-4 border-dotted border-gray-200 w-full h-full"></div>

      {data.map((item, index) => {
          const circlesData = generateCirclesData(item);
          return (
            <div
              key={index}
              className="absolute w-1/2 h-1/2 text-black"
            >
              {renderCircles(circlesData)}
            </div>
          );
        })}
    </div>
  </div>
  </div>
  );
}
