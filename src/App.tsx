// import * as Icons from "defyne-icons";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");

  // const filteredIcons = Object.entries(Icons).filter(([name]) =>
  //   name.toLowerCase().includes(search.toLowerCase()),
  // );
  return (
    <div className="p-8 flex-1 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1>Defyne Icons</h1>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 px-3 py-2 rounded-lg w-1/4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {/* {filteredIcons.map(([name, IconComponent]) => (
          <div key={name} className="flex flex-col justify-center items-center">
            <IconComponent width={24} height={24} className="stroke-white" />
            <p className="text-sm text-white">{name}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
