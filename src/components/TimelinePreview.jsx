import React from "react";

export default function TimelinePreview() {
  const items = [
    { year: "2024", title: "Lead dev at XYZ" },
    { year: "2023", title: "Freelance product builds" },
    { year: "2022", title: "FullStack Engineer" },
  ];
  return (
    <div className="w-full mt-10 flex overflow-x-auto gap-4 py-4 px-6 z-20">
      {items.map((it, idx) => (
        <div key={idx} className="min-w-[220px] bg-white/4 border border-white/6 rounded-lg p-4">
          <div className="text-sm text-gray-300">{it.year}</div>
          <div className="text-white font-semibold mt-2">{it.title}</div>
        </div>
      ))}
    </div>
  );
}
