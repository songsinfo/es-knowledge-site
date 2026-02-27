"use client";
import { wordRoots } from "./data";
import Link from "next/link";
import { useEffect, useState } from "react";

const s = {
  hero: { maxWidth: 680, margin: '0 auto', textAlign: 'center' as const, padding: '80px 24px 48px' },
  badge: { display: 'inline-block', background: '#fef3c7', color: '#b45309', fontSize: 13, fontWeight: 600, padding: '4px 12px', borderRadius: 100, marginBottom: 24 },
  h1: { fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20 },
  yellow: { color: '#fbbf24' },
  sub: { fontSize: 17, color: '#6b7280', maxWidth: 440, margin: '0 auto 32px' },
  ticker: { margin: '40px auto 0', maxWidth: 420, background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: '18px 22px', textAlign: 'left' as const },
  stats: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, maxWidth: 580, margin: '56px auto 0', padding: '0 24px' },
  stat: { background: '#f9fafb', borderRadius: 12, padding: 24, textAlign: 'center' as const },
};

export default function Home() {
  const [idx, setIdx] = useState(0);
  const demo = wordRoots.slice(0, 5);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % demo.length), 2500);
    return () => clearInterval(t);
  }, [demo.length]);

  return (
    <main>
      <div style={s.hero}>
        <div style={s.badge}>🔍 Elasticsearch 核心概念</div>
        <h1 style={s.h1}>25个核心概念<br/>系统掌握<br/><span style={s.yellow}>Elasticsearch</span></h1>
        <p style={s.sub}>从倒排索引到向量搜索，覆盖 ES 架构、查询、运维全栈知识</p>
        <Link href="/learn" className="btn btn-primary">开始学习第一个概念 →</Link>
        <Link href="/flashcard" className="btn btn-secondary">闪卡快速复习</Link>
        <div style={s.ticker}>
          <div style={{fontSize:11,color:'#9ca3af',fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',marginBottom:8}}>今日概念</div>
          <div style={{fontSize:17,fontWeight:700,minHeight:28}}>{demo[idx].root}</div>
          <div style={{fontSize:13,color:'#6b7280',marginTop:4}}>{demo[idx].meaning}</div>
        </div>
      </div>

      <div style={s.stats}>
        {[{v:'25',l:'核心概念'},{v:'5',l:'知识模块'},{v:'10分钟',l:'快速入门'}].map(({v,l})=>(
          <div key={l} style={s.stat}>
            <div style={{fontSize:'2rem',fontWeight:800}}>{v}</div>
            <div style={{fontSize:13,color:'#6b7280',marginTop:4}}>{l}</div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2 style={{fontSize:22,fontWeight:700,marginBottom:20}}>全部概念</h2>
        <div className="grid">
          {wordRoots.map(item => (
            <Link key={item.id} href={`/detail/${item.id}`} className="card">
              <div className="tag">{item.origin}</div>
              <div style={{fontWeight:700,fontSize:15,marginBottom:6}}>{item.root}</div>
              <div style={{fontSize:13,color:'#6b7280',lineHeight:1.5}}>{item.meaning}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
