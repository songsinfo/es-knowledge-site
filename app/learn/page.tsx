"use client";
import { wordRoots } from "../data";
import Link from "next/link";
import { useState } from "react";

export default function LearnPage() {
  const [idx, setIdx] = useState(0);
  const [mastered, setMastered] = useState<number[]>([]);
  const item = wordRoots[idx];
  const isMastered = mastered.includes(item.id);
  const pct = Math.round(((idx+1)/wordRoots.length)*100);

  const toggle = () => setMastered(p => p.includes(item.id) ? p.filter(id=>id!==item.id) : [...p, item.id]);

  return (
    <main style={{maxWidth:680,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{width:'100%',height:4,background:'#f3f4f6',borderRadius:2,marginBottom:40}}>
        <div style={{width:`${pct}%`,height:'100%',background:'#fbbf24',borderRadius:2,transition:'width .3s'}}/>
      </div>

      <div style={{border:'1px solid #e5e7eb',borderRadius:16,padding:36,marginBottom:16}}>
        <div style={{fontSize:11,fontWeight:600,color:'#b45309',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:14}}>{item.origin}</div>
        <h2 style={{fontSize:28,fontWeight:800,marginBottom:10}}>{item.root}</h2>
        <div style={{fontSize:15,color:'#6b7280',borderLeft:'3px solid #fbbf24',paddingLeft:14,marginBottom:22}}>{item.meaning}</div>
        <p style={{fontSize:14,lineHeight:1.8,color:'#374151',marginBottom:22}}>{item.description}</p>

        <div style={{fontSize:11,fontWeight:600,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:10}}>应用示例</div>
        {item.examples.map((ex,i)=>(
          <div key={i} style={{background:'#f9fafb',borderRadius:10,padding:'14px 16px',marginBottom:8}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{ex.word}</div>
            <div style={{fontSize:13,color:'#6b7280'}}>{ex.explanation}</div>
          </div>
        ))}

        <button onClick={toggle} style={{marginTop:20,display:'flex',alignItems:'center',gap:8,padding:'10px 20px',borderRadius:10,border:`2px solid ${isMastered?'#fbbf24':'#e5e7eb'}`,background:isMastered?'#fef3c7':'#fff',color:isMastered?'#b45309':'#4b5563',fontWeight:600,fontSize:14,cursor:'pointer',transition:'all .15s'}}>
          {isMastered ? '✓ 已掌握' : '标记为已掌握'}
        </button>
      </div>

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:24}}>
        <button onClick={()=>setIdx(i=>Math.max(0,i-1))} disabled={idx===0} className="btn btn-secondary" style={{opacity:idx===0?.4:1}}>← 上一个</button>
        <span style={{fontSize:13,color:'#9ca3af'}}>{idx+1} / {wordRoots.length}</span>
        <button onClick={()=>setIdx(i=>Math.min(wordRoots.length-1,i+1))} disabled={idx===wordRoots.length-1} className="btn btn-primary" style={{opacity:idx===wordRoots.length-1?.4:1}}>下一个 →</button>
      </div>
      {mastered.length>0 && <p style={{textAlign:'center',fontSize:13,color:'#9ca3af',marginTop:16}}>本次已掌握 {mastered.length} 个概念 🎉</p>}
    </main>
  );
}
