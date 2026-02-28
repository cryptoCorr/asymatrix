"use client";

import React, { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-8">
      {/* HEADER BÖLÜMÜ */}
      <header className="flex justify-between items-center mb-10 border-b border-[#333] pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-wider text-white flex items-center gap-2">
            🔮 ASYMATRIX <span className="text-xs bg-[#0052FF] text-white px-2 py-1 rounded-md ml-2">PRO</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Cross-Chain Value & Alpha Terminal</p>
        </div>
        <div className="text-sm text-gray-500">
          Status: <span className="text-green-400">● Connected</span>
        </div>
      </header>

      {/* ARAMA ÇUBUĞU */}
      <div className="mb-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Token Ara (Örn: RNDR, PEPE)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#333] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#0052FF] transition-colors"
          />
          <button className="absolute right-3 top-2.5 bg-[#333] text-xs px-3 py-1.5 rounded hover:bg-[#444] transition">
            Tara
          </button>
        </div>
      </div>

      {/* VERİ EKRANI (MOCKUP) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* SOL TARAF: LİDER TOKEN KARTI */}
        <div className="col-span-1 bg-[#12141A] border border-[#222] rounded-xl p-6 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Hedef Lider</p>
              <h2 className="text-2xl font-bold">RNDR</h2>
              <p className="text-sm text-gray-500">Render (Ethereum)</p>
            </div>
            <div className="bg-[#333] p-2 rounded-lg text-xl">🦄</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm">Fiyat</p>
              <p className="text-xl font-semibold">$10.45 <span className="text-green-400 text-sm">▲ 4.2%</span></p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Piyasa Değeri (MCap)</p>
              <p className="text-xl font-semibold">$4.1 Milyar</p>
            </div>
            <div className="pt-4 border-t border-[#333]">
              <p className="text-gray-500 text-sm mb-2">Güvenlik & Backers</p>
              <div className="flex gap-2">
                <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded border border-green-800">✅ Audited</span>
                <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded border border-blue-800">💼 Tier-1 VC</span>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: AYNA (MIRROR) ALTERNATİFLER TABLOSU */}
        <div className="col-span-1 md:col-span-2 bg-[#12141A] border border-[#222] rounded-xl p-6 shadow-2xl overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">🪞 Alternatif Fırsatlar (AI Kategorisi)</h3>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#333] text-gray-500 text-sm">
                <th className="pb-3 font-medium">Varlık (Ağ)</th>
                <th className="pb-3 font-medium">Fiyat</th>
                <th className="pb-3 font-medium">MCap</th>
                <th className="pb-3 font-medium">Potansiyel</th>
                <th className="pb-3 font-medium">Durum</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Satır 1: Fırsat */}
              <tr className="border-b border-[#222] hover:bg-[#1A1A1A] transition-colors">
                <td className="py-4 flex items-center gap-2">
                  <span className="text-lg">🔵</span>
                  <div>
                    <p className="font-bold text-white">VIRTUAL</p>
                    <p className="text-xs text-gray-500">Base</p>
                  </div>
                </td>
                <td className="py-4">$0.24</td>
                <td className="py-4">$240M</td>
                <td className="py-4">
                  <span className="text-[#0052FF] font-bold">17x Gap</span>
                </td>
                <td className="py-4">
                  <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs border border-green-500/20">💎 Fırsat</span>
                </td>
              </tr>

              {/* Satır 2: Riskli */}
              <tr className="border-b border-[#222] hover:bg-[#1A1A1A] transition-colors">
                <td className="py-4 flex items-center gap-2">
                  <span className="text-lg">🟣</span>
                  <div>
                    <p className="font-bold text-white">NOS</p>
                    <p className="text-xs text-gray-500">Solana</p>
                  </div>
                </td>
                <td className="py-4">$4.10</td>
                <td className="py-4">$150M</td>
                <td className="py-4">
                  <span className="text-[#0052FF] font-bold">27x Gap</span>
                </td>
                <td className="py-4">
                  <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs border border-red-500/20">⚠️ Riskli</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      
      {/* FOOTER */}
      <footer className="mt-12 text-center text-xs text-gray-600">
        <p>Asymatrix Terminal © 2026. Powered by CoinGecko & DefiLlama APIs.</p>
      </footer>
    </main>
  );
}
