"use client";

import React, { useState } from "react";

// --- ÇOKLU DİL SÖZLÜĞÜ (DICTIONARY) ---
const translations = {
  en: {
    subtitle: "Cross-Chain Value & Alpha Terminal",
    status: "Connected",
    searchPlaceholder: "Search Token (e.g. RNDR, PEPE)...",
    scanBtn: "Scan",
    targetLeader: "Target Leader",
    price: "Price",
    mcap: "Market Cap (MCap)",
    security: "Security & Backers",
    audited: "Audited",
    tier1: "Tier-1 VC",
    altTitle: "🪞 Alternative Opportunities",
    asset: "Asset (Chain)",
    potential: "Potential",
    state: "Status",
    opportunity: "💎 Opportunity",
    risky: "⚠️ Risky",
    footer: "Asymatrix Terminal © 2026. Powered by CoinGecko & DefiLlama APIs."
  },
  tr: {
    subtitle: "Çapraz Ağ Değer ve Alpha Terminali",
    status: "Bağlı",
    searchPlaceholder: "Token Ara (Örn: RNDR, PEPE)...",
    scanBtn: "Tara",
    targetLeader: "Hedef Lider",
    price: "Fiyat",
    mcap: "Piyasa Değeri",
    security: "Güvenlik ve Yatırımcılar",
    audited: "Denetlendi",
    tier1: "1. Sınıf VC",
    altTitle: "🪞 Alternatif Fırsatlar",
    asset: "Varlık (Ağ)",
    potential: "Potansiyel",
    state: "Durum",
    opportunity: "💎 Fırsat",
    risky: "⚠️ Riskli",
    footer: "Asymatrix Terminal © 2026. CoinGecko ve DefiLlama API'leri ile güçlendirilmiştir."
  },
  ru: {
    subtitle: "Кроссчейн Терминал Ценностей и Альфы",
    status: "Подключено",
    searchPlaceholder: "Поиск токена (напр. RNDR, PEPE)...",
    scanBtn: "Поиск",
    targetLeader: "Целевой Лидер",
    price: "Цена",
    mcap: "Капитализация",
    security: "Безопасность и Инвесторы",
    audited: "Проверено",
    tier1: "Топ Фонды",
    altTitle: "🪞 Альтернативные Возможности",
    asset: "Актив (Сеть)",
    potential: "Потенциал",
    state: "Статус",
    opportunity: "💎 Возможность",
    risky: "⚠️ Рискованно",
    footer: "Asymatrix Terminal © 2026. Работает на API CoinGecko и DefiLlama."
  },
  zh: {
    subtitle: "跨链价值与 Alpha 终端",
    status: "已连接",
    searchPlaceholder: "搜索代币 (例如 RNDR, PEPE)...",
    scanBtn: "扫描",
    targetLeader: "目标领导者",
    price: "价格",
    mcap: "市值 (MCap)",
    security: "安全与支持者",
    audited: "已审计",
    tier1: "顶级 VC",
    altTitle: "🪞 替代机会",
    asset: "资产 (网络)",
    potential: "潜力",
    state: "状态",
    opportunity: "💎 机会",
    risky: "⚠️ 高风险",
    footer: "Asymatrix Terminal © 2026. 由 CoinGecko 和 DefiLlama API 提供支持。"
  },
  es: {
    subtitle: "Terminal de Valor Cross-Chain y Alpha",
    status: "Conectado",
    searchPlaceholder: "Buscar Token (ej. RNDR, PEPE)...",
    scanBtn: "Escanear",
    targetLeader: "Líder Objetivo",
    price: "Precio",
    mcap: "Capitalización",
    security: "Seguridad y Respaldo",
    audited: "Auditado",
    tier1: "VC de Nivel 1",
    altTitle: "🪞 Oportunidades Alternativas",
    asset: "Activo (Red)",
    potential: "Potencial",
    state: "Estado",
    opportunity: "💎 Oportunidad",
    risky: "⚠️ Riesgoso",
    footer: "Asymatrix Terminal © 2026. Impulsado por las API de CoinGecko y DefiLlama."
  }
};

type LanguageKey = keyof typeof translations;

export default function Home() {
  const [lang, setLang] = useState<LanguageKey>("en");
  const [searchQuery, setSearchQuery] = useState("");

  // Seçili dile göre çevirileri değişkene atıyoruz
  const t = translations[lang];

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-8">
      {/* HEADER BÖLÜMÜ */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-[#333] pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-wider text-white flex items-center gap-2">
            🔮 ASYMATRIX <span className="text-xs bg-[#0052FF] text-white px-2 py-1 rounded-md ml-2">PRO</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">{t.subtitle}</p>
        </div>
        
        {/* SAĞ ÜST KISIM: Dil Seçici ve Statüs */}
        <div className="flex items-center gap-4">
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as LanguageKey)}
            className="bg-[#1A1A1A] text-white text-sm border border-[#333] rounded-md px-2 py-1 focus:outline-none focus:border-[#0052FF]"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="tr">🇹🇷 TR</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="zh">🇨🇳 ZH</option>
            <option value="es">🇪🇸 ES</option>
          </select>
          
          <div className="text-sm text-gray-500 bg-[#1A1A1A] px-3 py-1 rounded-md border border-[#222]">
            <span className="text-green-400 mr-1">●</span> {t.status}
          </div>
        </div>
      </header>

      {/* ARAMA ÇUBUĞU */}
      <div className="mb-8">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#333] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#0052FF] transition-colors"
          />
          <button className="absolute right-3 top-2.5 bg-[#333] text-xs px-3 py-1.5 rounded hover:bg-[#444] transition">
            {t.scanBtn}
          </button>
        </div>
      </div>

      {/* VERİ EKRANI (MOCKUP) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* SOL TARAF: LİDER TOKEN KARTI */}
        <div className="col-span-1 bg-[#12141A] border border-[#222] rounded-xl p-6 shadow-2xl">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{t.targetLeader}</p>
              <h2 className="text-2xl font-bold">RNDR</h2>
              <p className="text-sm text-gray-500">Render (Ethereum)</p>
            </div>
            <div className="bg-[#333] p-2 rounded-lg text-xl">🦄</div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-500 text-sm">{t.price}</p>
              <p className="text-xl font-semibold">$10.45 <span className="text-green-400 text-sm">▲ 4.2%</span></p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">{t.mcap}</p>
              <p className="text-xl font-semibold">$4.1B</p>
            </div>
            <div className="pt-4 border-t border-[#333]">
              <p className="text-gray-500 text-sm mb-2">{t.security}</p>
              <div className="flex gap-2">
                <span className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded border border-green-800">✅ {t.audited}</span>
                <span className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded border border-blue-800">💼 {t.tier1}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ TARAF: AYNA (MIRROR) ALTERNATİFLER TABLOSU */}
        <div className="col-span-1 md:col-span-2 bg-[#12141A] border border-[#222] rounded-xl p-6 shadow-2xl overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">{t.altTitle}</h3>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#333] text-gray-500 text-sm">
                <th className="pb-3 font-medium">{t.asset}</th>
                <th className="pb-3 font-medium">{t.price}</th>
                <th className="pb-3 font-medium">{t.mcap}</th>
                <th className="pb-3 font-medium">{t.potential}</th>
                <th className="pb-3 font-medium">{t.state}</th>
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
                  <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded-md text-xs border border-green-500/20">{t.opportunity}</span>
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
                  <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded-md text-xs border border-red-500/20">{t.risky}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      
      {/* FOOTER */}
      <footer className="mt-12 text-center text-xs text-gray-600">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
