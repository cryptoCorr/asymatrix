"use client";

import React, { useState } from "react";

// --- ORİJİNAL AĞ SEMBOLLERİ (SVG CDNs) ---
const CHAIN_ICONS: { [key: string]: string } = {
  Ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  Solana: "https://cryptologos.cc/logos/solana-sol-logo.svg",
  Arbitrum: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg",
  Avalanche: "https://cryptologos.cc/logos/avalanche-avax-logo.svg",
  Sui: "https://cryptologos.cc/logos/sui-sui-logo.svg",
  Base: "https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg" 
};

// --- ÇOKLU DİL SÖZLÜĞÜ (i18n) ---
const translations = {
  en: {
    subtitle: "The Quantum Gap & Cross-Chain Alpha Terminal",
    search: "Search Leader (RNDR, WIF)...",
    scan: "Scan",
    hypeTitle: "Hype Leader Matrix (7D)",
    price: "Price",
    mcap: "Market Cap",
    backers: "Key VCs & Funding",
    security: "Security Matrix",
    mirrorTitle: "Cross-Chain Quantum Mirror",
    thAsset: "Asset (Network)",
    thFunding: "Funding/Score",
    thPotential: "Potential Gap",
    thAction: "Action",
    gap: "Gap",
    audited: "Audited",
    honeypot: "No Honeypot",
    opportunity: "GEM",
    fair: "FAIR",
  },
  tr: {
    subtitle: "Kuantum Boşluk ve Çapraz Ağ Alpha Terminali",
    search: "Lider Ara (RNDR, WIF)...",
    scan: "Tara",
    hypeTitle: "Hype Lideri Matriksi (7G)",
    price: "Fiyat",
    mcap: "Piyasa Değeri",
    backers: "Ana VC'ler ve Fonlama",
    security: "Güvenlik Matriksi",
    mirrorTitle: "Çapraz Ağ Kuantum Aynası",
    thAsset: "Varlık (Ağ)",
    thFunding: "Fon/Skor",
    thPotential: "Potansiyel Boşluk",
    thAction: "Eylem",
    gap: "Gap",
    audited: "Denetlendi",
    honeypot: "Bal Küpü Değil",
    opportunity: "CEVHER",
    fair: "ADİL",
  },
  ru: {
    subtitle: "Терминал Квантового Разрыва и Кроссчейн Альфы",
    search: "Поиск Лидера...",
    scan: "Поиск",
    hypeTitle: "Матрица Хайп-Лидеров",
    price: "Цена",
    mcap: "Капитализация",
    backers: "Фонды",
    security: "Безопасность",
    mirrorTitle: "Кроссчейн Зеркало",
    thAsset: "Актив",
    thFunding: "Фонды",
    thPotential: "Потенциал",
    thAction: "Действие",
    gap: "Разрыв",
    audited: "Аудит",
    honeypot: "Нет Honeypot",
    opportunity: "ГЕМ",
    fair: "ЧЕСТНО",
  },
  zh: {
    subtitle: "量子间隙与跨链终端",
    search: "搜索代币...",
    scan: "扫描",
    hypeTitle: "领导者矩阵",
    price: "价格",
    mcap: "市值",
    backers: "投资机构",
    security: "安全",
    mirrorTitle: "跨链量子镜像",
    thAsset: "资产",
    thFunding: "融资",
    thPotential: "潜力",
    thAction: "行动",
    gap: "间隙",
    audited: "已审计",
    honeypot: "无蜜罐",
    opportunity: "宝石",
    fair: "公平",
  },
  es: {
    subtitle: "Terminal de Brecha Cuántica y Alpha",
    search: "Buscar Líder...",
    scan: "Escanear",
    hypeTitle: "Matriz de Líderes Hype",
    price: "Precio",
    mcap: "Cap. de Mercado",
    backers: "VCs Clave",
    security: "Seguridad",
    mirrorTitle: "Espejo Cross-Chain",
    thAsset: "Activo",
    thFunding: "Fondos",
    thPotential: "Brecha",
    thAction: "Acción",
    gap: "Brecha",
    audited: "Auditado",
    honeypot: "Sin Honeypot",
    opportunity: "GEMA",
    fair: "JUSTO",
  },
};

type LanguageKey = keyof typeof translations;

export default function Home() {
  const [lang, setLang] = useState<LanguageKey>("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#0A0B10] text-[#E0E0E0] p-4 md:p-10 font-sans">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-gray-800/50 gap-4">
        <div className="flex items-center gap-3">
          <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tighter text-white">
              ASY<span className="text-cyan-400">MATRIX</span> <span className="text-[10px] bg-cyan-950/50 text-cyan-400 px-2 py-1 rounded border border-cyan-800/50 ml-1 uppercase tracking-widest">Premium</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">{t.subtitle}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-[#12141F] p-2 rounded-xl border border-gray-800">
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as LanguageKey)}
            className="bg-transparent text-white text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 px-2 rounded-md cursor-pointer"
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
            <option value="ru">RU</option>
            <option value="zh">ZH</option>
            <option value="es">ES</option>
          </select>
          <div className="h-6 w-px bg-gray-800"></div>
          <div className="text-xs text-green-400 bg-green-950/30 px-3 py-1.5 rounded-md border border-green-900/50 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {t.audited}
          </div>
        </div>
      </header>

      {/* ARAMA */}
      <div className="mb-10 flex flex-col md:flex-row items-center gap-4 p-4 bg-[#12141F] rounded-2xl border border-gray-800/80 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="relative w-full flex-grow">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="text"
            placeholder={t.search}
            className="w-full bg-[#0A0B10] border border-gray-800 text-white rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-900 transition-all text-lg placeholder:text-gray-600"
          />
        </div>
        <button className="w-full md:w-auto bg-[#0052FF] text-white font-semibold text-base tracking-wide px-10 py-4 rounded-xl hover:bg-blue-600 transition-colors border border-blue-500">
          {t.scan}
        </button>
      </div>

      {/* ANA VERİ MATRİKSİ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LİDER KARTI */}
        <div className="col-span-1 lg:col-span-4 space-y-6">
          <div className="bg-[#12141F] border border-gray-800/80 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            {/* Arka plan siber ışıltısı */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-900/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">{t.hypeTitle}</p>
              <span className="text-[10px] text-gray-400 border border-gray-700 px-2 py-1 rounded bg-gray-800/50">MEME</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <img src={CHAIN_ICONS["Solana"]} alt="Solana" className="w-10 h-10 object-contain drop-shadow-md" />
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">WIF</h2>
                <p className="text-xs text-gray-400 mt-1">dogwifhat</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-800/60">
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-1">{t.price}</p>
                <p className="text-2xl font-semibold text-white">$2.75 <span className="text-green-400 text-sm ml-1 font-medium">▲ 15%</span></p>
              </div>
              <div>
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-1">{t.mcap}</p>
                <p className="text-2xl font-semibold text-white">$2.7B</p>
              </div>
            </div>

            <div className="w-full h-12 bg-gradient-to-t from-cyan-900/10 to-transparent border-b-2 border-cyan-500/50 flex items-end mb-6">
              <svg viewBox="0 0 100 20" className="w-full h-full text-cyan-400 opacity-70 drop-shadow-[0_0_5px_rgba(0,242,254,0.5)]">
                <path d="M0,15 C10,12 20,18 30,10 C40,2 50,8 60,5 C70,2 80,12 90,8 L100,2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            
            <div className="space-y-4 pt-2">
              <p className="text-gray-500 text-[11px] uppercase tracking-wider">{t.backers}</p>
              <div className="flex gap-2 flex-wrap text-xs">
                <span className="bg-[#1A1D27] text-gray-300 px-2.5 py-1.5 rounded flex items-center gap-1 border border-gray-700/50">
                   <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                   a16z (Seed)
                </span>
                <span className="bg-[#1A1D27] text-gray-300 px-2.5 py-1.5 rounded flex items-center gap-1 border border-gray-700/50">
                   <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                   Paradigm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CROSS-CHAIN MIRROR TABLOSU */}
        <div className="col-span-1 lg:col-span-8 bg-[#12141F] border border-gray-800/80 rounded-2xl p-6 shadow-xl overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              {t.mirrorTitle}
            </h3>
          </div>
          
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-[10px] uppercase tracking-wider">
                <th className="pb-3 font-medium pl-2">{t.thAsset}</th>
                <th className="pb-3 font-medium">{t.price}</th>
                <th className="pb-3 font-medium">{t.mcap}</th>
                <th className="pb-3 font-medium">{t.thPotential}</th>
                <th className="pb-3 font-medium">{t.thFunding}</th>
                <th className="pb-3 font-medium text-right pr-2">{t.thAction}</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              
              {/* SATIR 1: BASE GEM */}
              <tr className="border-b border-gray-800/30 hover:bg-[#181B26] transition-all group">
                <td className="py-4 pl-2 flex items-center gap-3">
                  <img src={CHAIN_ICONS["Base"]} alt="Base" className="w-8 h-8 object-contain" />
                  <div>
                    <p className="font-bold text-gray-100 text-sm">BRETT</p>
                    <p className="text-[11px] text-gray-500 font-normal">Base</p>
                  </div>
                </td>
                <td className="py-4 text-gray-300">$0.089 <span className="text-red-400 text-[10px] ml-1">▼ 2%</span></td>
                <td className="py-4 text-gray-300">$890M</td>
                <td className="py-4">
                  <p className="text-base font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">3x {t.gap}</p>
                </td>
                <td className="py-4">
                  <span className="text-xs text-gray-400 bg-[#0A0B10] border border-gray-700 px-2 py-1 rounded">Binance Labs</span>
                </td>
                <td className="py-4 text-right pr-2">
                  <span className="bg-cyan-950/40 text-cyan-400 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold border border-cyan-800/60 shadow-[0_0_10px_rgba(0,242,254,0.1)]">{t.opportunity}</span>
                </td>
              </tr>

              {/* SATIR 2: SUI GEM */}
              <tr className="border-b border-gray-800/30 hover:bg-[#181B26] transition-all group">
                <td className="py-4 pl-2 flex items-center gap-3">
                  <img src={CHAIN_ICONS["Sui"]} alt="Sui" className="w-8 h-8 object-contain" />
                  <div>
                    <p className="font-bold text-gray-100 text-sm">FUD</p>
                    <p className="text-[11px] text-gray-500 font-normal">Sui</p>
                  </div>
                </td>
                <td className="py-4 text-gray-300">$0.000001 <span className="text-green-400 text-[10px] ml-1">▲ 25%</span></td>
                <td className="py-4 text-gray-300">$50M</td>
                <td className="py-4">
                  <p className="text-base font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">54x {t.gap}</p>
                </td>
                <td className="py-4">
                  <span className="text-xs text-gray-400 bg-[#0A0B10] border border-gray-700 px-2 py-1 rounded">8.5/10 GoPlus</span>
                </td>
                <td className="py-4 text-right pr-2">
                  <span className="bg-cyan-950/40 text-cyan-400 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold border border-cyan-800/60 shadow-[0_0_10px_rgba(0,242,254,0.1)]">{t.opportunity}</span>
                </td>
              </tr>

              {/* SATIR 3: ETHEREUM */}
              <tr className="hover:bg-[#181B26] transition-all group">
                <td className="py-4 pl-2 flex items-center gap-3">
                  <img src={CHAIN_ICONS["Ethereum"]} alt="Ethereum" className="w-8 h-8 object-contain" />
                  <div>
                    <p className="font-bold text-gray-100 text-sm">PEPE</p>
                    <p className="text-[11px] text-gray-500 font-normal">Ethereum</p>
                  </div>
                </td>
                <td className="py-4 text-gray-300">$0.000009 <span className="text-green-400 text-[10px] ml-1">▲ 1%</span></td>
                <td className="py-4 text-gray-300">$3.8B</td>
                <td className="py-4 text-gray-600 font-normal">-</td>
                <td className="py-4">
                  <span className="text-xs text-gray-400 bg-[#0A0B10] border border-gray-700 px-2 py-1 rounded">9.9/10 GoPlus</span>
                </td>
                <td className="py-4 text-right pr-2">
                  <span className="bg-gray-800/50 text-gray-400 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-bold border border-gray-700">{t.fair}</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        
      </div>
      
      {/* FOOTER */}
      <footer className="mt-16 text-center text-[11px] text-gray-600 pt-8 border-t border-gray-800/50 uppercase tracking-widest">
        <p>Asymatrix Terminal © 2026. Data by CoinGecko & DefiLlama.</p>
        <p className="mt-2 text-cyan-900 font-mono">Status: Optimal // Sync: 15s // V2.1</p>
      </footer>
    </main>
  );
}
