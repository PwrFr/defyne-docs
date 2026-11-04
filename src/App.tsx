import { useState, useMemo } from "react";
import * as Icons from "defyne-icons";
import pkg from "../package.json";
import { toast } from "sonner";

// Strip the range prefix (e.g. "^2.0.1" -> "2.0.1").
const iconsVersion = pkg.dependencies["defyne-icons"].replace(/^[^\d]*/, "");

type PackageManager = "bun" | "npm" | "pnpm" | "yarn";

export default function App() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#0f172a");
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [activePm, setActivePm] = useState<PackageManager>("bun");
  const [copiedInstall, setCopiedInstall] = useState(false);

  // Filter out non-component exports if any exist
  const iconList = useMemo(() => {
    return Object.entries(Icons).filter(
      ([key, value]) => typeof value === "function" && key !== "default",
    );
  }, []);

  const filteredIcons = useMemo(() => {
    return iconList.filter(([name]) =>
      name.toLowerCase().includes(search.toLowerCase().trim()),
    );
  }, [iconList, search]);

  const installCommands: Record<PackageManager, string> = {
    bun: "bun add ",
    npm: "npm install ",
    pnpm: "pnpm add ",
    yarn: "yarn add ",
  };

  const copyToClipboard = (text: string, iconName?: string) => {
    toast.info(iconName ? `Copied ${iconName}!` : `Copied!`);
    navigator.clipboard.writeText(text);
    if (iconName) {
      setCopiedName(iconName);
      setTimeout(() => setCopiedName(null), 2000);
    } else {
      setCopiedInstall(true);
      setTimeout(() => setCopiedInstall(false), 2000);
    }
  };

  return (
    <div className="min-h-screen  text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Hero Header */}
      <header>
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-indigo-600">
              v{iconsVersion} • Open Source
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-indigo-600">
              Defyne Icons
            </h1>
            <p className="mt-3 max-w-xl text-base text-slate-600 sm:text-lg">
              A clean, modern React icon library customizable with Tailwind CSS,
              stroke width, and arbitrary sizes.
            </p>

            {/* Installation Box */}
            <div className="mt-8 w-full max-w-lg">
              <div className="flex gap-2 border-b border-slate-200 bg-slate-100 p-1.5 rounded-t-xl text-xs font-medium">
                {(["bun", "npm", "pnpm", "yarn"] as PackageManager[]).map(
                  (pm) => (
                    <button
                      key={pm}
                      onClick={() => setActivePm(pm)}
                      className={`rounded-lg px-3 py-1 transition-colors ${
                        activePm === pm
                          ? "bg-white text-slate-900 shadow-sm font-semibold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {pm}
                    </button>
                  ),
                )}
              </div>
              <div className="flex items-center justify-between rounded-b-xl border border-t-0 border-slate-200 bg-slate-900 px-4 py-3 text-left font-mono text-sm text-slate-100 shadow-sm">
                <code>{installCommands[activePm]} defyne-icons</code>
                <button
                  onClick={() =>
                    copyToClipboard(installCommands[activePm] + "defyne-icons")
                  }
                  className="rounded-md border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-sans text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  {copiedInstall ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Controls Toolbar */}
        <div className="sticky top-4 z-40 mb-8 rounded-2xl border border-slate-200/80 bg-white/5 p-4 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <svg
                className="pointer-events-none absolute left-3.5 top-3 h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                // placeholder={`Search ${iconList.length} icons...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            {/* Interactive Toggles */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-600">
              {/* Size Slider */}
              <div className="flex items-center gap-2">
                <span>Size:</span>
                <input
                  type="range"
                  min="16"
                  max="48"
                  step="4"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="h-1.5 w-24 cursor-pointer accent-indigo-600"
                />
                <span className="w-8 font-mono text-slate-900">{size}px</span>
              </div>

              {/* Stroke Width Slider */}
              <div className="flex items-center gap-2">
                <span>Stroke:</span>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.5"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="h-1.5 w-20 cursor-pointer accent-indigo-600"
                />
                <span className="w-6 font-mono text-slate-900">
                  {strokeWidth}
                </span>
              </div>

              {/* Color Picker */}
              <div className="flex items-center gap-2">
                <span>Color:</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-7 w-7 cursor-pointer rounded-lg border border-slate-200 bg-transparent p-0.5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Icons Grid */}
        {filteredIcons.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {filteredIcons.map(([name, IconComponent]) => (
              <button
                key={name}
                onClick={() =>
                  copyToClipboard(
                    `<${name} size={${size}} strokeWidth={${strokeWidth}} />`,
                    name,
                  )
                }
                className="group relative flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-5 text-center transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md active:translate-y-0"
              >
                <div
                  className="flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ width: 56, height: 56 }}
                >
                  <IconComponent
                    size={size}
                    strokeWidth={strokeWidth}
                    style={{ stroke: color }}
                  />
                </div>
                <span
                  className={`mt-3 truncate w-full text-xs font-medium group-hover:text-indigo-600 ${
                    copiedName === name ? "text-emerald-600" : "text-slate-600"
                  }`}
                >
                  {copiedName === name ? "Copied!" : name}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <p className="text-sm text-slate-500">
              No icons matching "
              <span className="font-semibold text-slate-800">{search}</span>"
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
