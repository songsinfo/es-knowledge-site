"use client";
import { wordRoots } from "../data";
import { useState, useEffect, useCallback } from "react";

export default function FlashcardPage() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const item = wordRoots[idx];

  const next = useCallback(() => { setIdx(i => (i+1) % wordRoots.length); setFlipped(false); }, []);
  const prev = useCallback(() => { setIdx(i => (i-1+wordRoots.length) % wordRoots.length); setFlipped(false); }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key==='ArrowRight') next();
      else if (e.key==='ArrowLeft') prev();
      else if (e.key===' ') { e.preventDefault(); setFlipped(f=>!f); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [next, prev]);

  return (
    <main style={{maxWidth:600,margin:'0 auto',padding:'48px 24px'}}>
      <style>{`
        .fc-wrap{perspective:1000px;height:280px}
        .fc{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .5s;cursor:pointer}
        .fc.flipped{transform:rotateY(180deg)}
        .fc-f,.fc-b{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:36px;text-align:center}
        .fc-f{background:#111827;color:#fff}
        .fc-b{background:#fbbf24;transform:rotateY(180deg)}
      `}</style>

      <div style={{textAlign:'center',fontSize:14,color:'#9ca3af',marginBottom:24}}>{idx+1} / {wordRoots.length}</div>

      <div className="fc-wrap">
        <div className={`fc${flipped?' flipped':''}`} onClick={()=>setFlipped(f=>!f)}>
          <div className="fc-f">
            <div style={{fontSize:12,color:'rgba(255,255,255,.5)',marginBottom:10}}>{item.origin}</div>
            <div style={{fontSize:22,fontWeight:700}}>{item.root}</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,.4)',marginTop:14}}>点击翻转 / 按空格键</div>
          </div>
          <div className="fc-b">
            <div style={{fontSize:17,fontWeight:600,color:'#111827'}}>{item.meaning}</div>
          </div>
        </div>
      </div>

      <div style={{textAlign:'center',fontSize:12,color:'#9ca3af',marginTop:14}}>← → 切换卡片 &nbsp;·&nbsp; 空格键翻转</div>

      <div style={{display:'flex',justifyContent:'center',gap:12,marginTop:28}}>
        <button onClick={prev} className="btn btn-secondary">← 上一张</button>
        <button onClick={next} className="btn btn-primary">下一张 →</button>
      </div>
    </main>
  );
}
