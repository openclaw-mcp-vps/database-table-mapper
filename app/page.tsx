export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Database{" "}
          <span className="text-[#58a6ff]">Relationship Explorer</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Connect via a connection string, auto-map every foreign key, and explore
          interactive SVG diagrams. Get suggested JOIN paths between any two tables
          in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $15/mo
        </a>
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">schema-explorer</span>
          </div>
          <svg viewBox="0 0 640 260" className="w-full" aria-label="Schema diagram preview">
            <rect x="40" y="40" width="140" height="100" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5"/>
            <text x="110" y="62" textAnchor="middle" fill="#58a6ff" fontSize="11" fontWeight="bold">users</text>
            <line x1="55" y1="70" x2="165" y2="70" stroke="#30363d" strokeWidth="1"/>
            <text x="55" y="86" fill="#c9d1d9" fontSize="10">id (PK)</text>
            <text x="55" y="102" fill="#8b949e" fontSize="10">email</text>
            <text x="55" y="118" fill="#8b949e" fontSize="10">created_at</text>
            <rect x="250" y="20" width="150" height="120" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5"/>
            <text x="325" y="42" textAnchor="middle" fill="#58a6ff" fontSize="11" fontWeight="bold">orders</text>
            <line x1="265" y1="50" x2="385" y2="50" stroke="#30363d" strokeWidth="1"/>
            <text x="265" y="66" fill="#c9d1d9" fontSize="10">id (PK)</text>
            <text x="265" y="82" fill="#e3b341" fontSize="10">user_id (FK)</text>
            <text x="265" y="98" fill="#8b949e" fontSize="10">total</text>
            <text x="265" y="114" fill="#8b949e" fontSize="10">status</text>
            <rect x="460" y="60" width="140" height="100" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5"/>
            <text x="530" y="82" textAnchor="middle" fill="#58a6ff" fontSize="11" fontWeight="bold">order_items</text>
            <line x1="475" y1="90" x2="585" y2="90" stroke="#30363d" strokeWidth="1"/>
            <text x="475" y="106" fill="#c9d1d9" fontSize="10">id (PK)</text>
            <text x="475" y="122" fill="#e3b341" fontSize="10">order_id (FK)</text>
            <text x="475" y="138" fill="#8b949e" fontSize="10">product_id</text>
            <line x1="180" y1="80" x2="250" y2="72" stroke="#58a6ff" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow)"/>
            <line x1="400" y1="90" x2="460" y2="100" stroke="#58a6ff" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow)"/>
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#58a6ff"/>
              </marker>
            </defs>
            <rect x="200" y="180" width="240" height="28" rx="4" fill="#161b22" stroke="#30363d" strokeWidth="1"/>
            <text x="320" y="198" textAnchor="middle" fill="#3fb950" fontSize="10" fontFamily="monospace">JOIN orders ON orders.user_id = users.id</text>
          </svg>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything included</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect PostgreSQL, MySQL, SQLite",
              "Auto-detect all foreign keys",
              "Interactive SVG schema diagrams",
              "JOIN path suggestions",
              "Export diagrams as PNG/SVG",
              "Unlimited databases"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Exploring
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which databases are supported?",
              a: "PostgreSQL, MySQL, and SQLite are fully supported. Just paste your connection string and the schema is analyzed automatically."
            },
            {
              q: "Is my connection string stored?",
              a: "No. Connection strings are used only for the active session and never persisted to any server or database."
            },
            {
              q: "How does JOIN path suggestion work?",
              a: "The tool traverses the foreign key graph between your selected tables and returns the shortest JOIN chain with ready-to-copy SQL."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Database Table Mapper. All rights reserved.
      </footer>
    </main>
  )
}
