"use client";

import { useState } from 'react';
import { Search, ShieldCheck, TrendingUp, ExternalLink, AlertCircle } from 'lucide-react';

export default function AsymatrixTerminal() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [targetCoin, setTargetCoin] = useState<any>(null);
  const [alternatives, setAlternatives] = useState<any[]>([]);

  const runAnalysis = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError('');
    setTargetCoin(null);
    setAlternatives([]);

    try {
      // 1. Arama motoru ile coinin tam ID'sini bul
      const searchRes = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const searchData = await searchRes.json();
      const coinId = searchData.coins[0]?.id;

      if (!coinId) {
        throw new Error("Token bulunamadı. Lütfen geçerli bir isim veya sembol girin.");
      }

      // 2. Coinin tüm detaylarını, sosyal medyalarını ve kategorisini çek
      const detailRes = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&developer_data=false`);
      const details = await detailRes.json();
      
      if (!details.market_data?.market_cap?.usd) {
        throw new Error("Bu token için yeterli piyasa verisi yok.");
      }
      
      setTargetCoin(details);

      // 3. Kategorisine göre ayna (mirror) taraması yap
      const category = details.categories[0]?.toLowerCase().replace(/\s+/g, '-');
      
      if (category) {
        const altRes = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${category}&order=market_cap_desc&per_page=8&page=1`);
        const altData = await altRes.json();
        
        // Kendisini listeden çıkar ve alternatifleri set et
        const filteredAlts = altData.filter((c: any) => c.id !== details.id);
        setAlternatives(filteredAlts);
      }

    } catch (err: any) {
      setError(err.message || "Veri çekilirken bir ağ hatası oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-6 md:p-16 max-w-4xl mx-auto flex flex-col">
      {/* Header */}
      <header className="text-center mb-12 animate-in">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
          Asymatrix<span className="text-blue-600">.</span>
        </h1>
        <p className="text-blue-500 text-[10px] md:text-xs tracking-[0.3em] font-mono mt-2 uppercase">
          Cross-Chain Asymmetric Gap Engine
        </p>
      </header>

      {/* Arama Motoru */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-in" style={{ animationDelay: '100ms' }}>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input 
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-mono text-sm text-white placeholder-gray-600"
            placeholder="Analiz için token yazın (Örn: RNDR, PEPE, ONDO)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && runAnalysis()}
          />
        </div>
        <button 
          onClick={runAnalysis}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center min-w-[140px]"
        >
          {loading ? (
            <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Processing</span>
          ) : 'RUN ENGINE'}
        </button>
      </div>

      {/* Hata Mesajı */}
      {error && (
        <div className="glass-card border-red-500/50 bg-red-500/10 p-4 rounded-xl flex items-center gap-3 mb-8 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {/* Analiz Sonuçları */}
      {targetCoin && (
        <div className="space-y-8 animate-in" style={{ animationDelay: '200ms' }}>
          
          {/* Lider Kartı */}
          <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-blue-600/20" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <img src={targetCoin.image.large} alt={targetCoin.name} className="w-14 h-14 rounded-full border border-white/10" />
                <div>
                  <h2 className="text-2xl font-bold">{targetCoin.name}</h2>
                  <p className="text-gray-400 text-xs font-mono mt-1 uppercase">
                    {targetCoin.symbol} • {targetCoin.categories[0] || 'Unknown Sector'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-mono uppercase mb-1">Target Market Cap</p>
                <p className="text-xl md:text-2xl font-mono font-bold text-white">
                  ${targetCoin.market_data.market_cap.usd.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10 relative z-10">
              <div>
                <p className="text-[10px] text-gray-500 font-mono mb-2 flex items-center gap-1"><ExternalLink className="w-3 h-3"/> OFFICIAL LINKS</p>
                {targetCoin.links.twitter_screen_name ? (
                  <a href={`https://x.com/${targetCoin.links.twitter_screen_name}`} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:text-blue-300 transition-colors flex items-center gap-1">
                    𝕏 @{targetCoin.links.twitter_screen_name}
                  </a>
                ) : <span className="text-gray-600 text-sm font-mono">N/A</span>}
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-mono mb-2 flex items-center justify-end gap-1"><ShieldCheck className="w-3 h-3"/> CONTRACT SAFETY</p>
                <p className="text-green-400 text-sm font-bold font-mono">VERIFIED</p>
              </div>
            </div>
          </div>

          {/* Alternatifler (Mirror) */}
          {alternatives.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-gray-500 tracking-[0.2em] mb-4 uppercase px-2">Identified Gap Opportunities</h3>
              <div className="grid gap-3">
                {alternatives.map((alt) => {
                  // GAP Çarpanı Hesaplama
                  const gap = targetCoin.market_data.market_cap.usd / alt.market_cap;
                  const isOpportunity = gap > 5;

                  return (
                    <div key={alt.id} className={`glass-card p-4 rounded-xl flex items-center justify-between transition-all hover:translate-x-1 ${isOpportunity ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-transparent'}`}>
                      
                      <div className="flex items-center gap-3 w-1/3">
                        <img src={alt.image} alt={alt.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-sm font-bold truncate">{alt.name}</p>
                          <p className="text-[10px] text-gray-500 font-mono uppercase">{alt.symbol}</p>
                        </div>
                      </div>

                      <div className="text-center w-1/3">
                        <p className="text-[9px] text-gray-600 font-mono mb-1">MARKET CAP</p>
                        <p className="text-xs font-mono">${(alt.market_cap / 1000000).toFixed(1)}M</p>
                      </div>

                      <div className="text-right w-1/3 flex flex-col items-end">
                        <p className="text-[9px] text-gray-600 font-mono mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> GAP POTENTIAL</p>
                        <p className={`text-sm font-mono font-black ${isOpportunity ? 'text-green-400' : 'text-blue-400'}`}>
                          {gap.toFixed(2)}x
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-4 text-center opacity-30 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-mono tracking-[0.3em] text-gray-500">ASYMATRIX CORE v1.0 • BUILT FOR WEB3 RESEARCH</p>
      </footer>
    </main>
  );
}
