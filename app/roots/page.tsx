"use client";
import { wordRoots } from "../data";
import Link from "next/link";
import { useState } from "react";

export default function RootsPage() {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('全部');
  const origins = ['全部', ...Array.from(new Set(wordRoots.map(w=>w.origin)))];
  const filtered = wordRoots.filter(item => {
    const mf = filter==='全部' || item.origin===filter;
    const mq = !q || item.root.toLowerCase().includes(q.toLowerCase()) || item.meaning.includes(q);
    return mf && mq;
  });

  return (
    <main className="section">
      <div style={{marginBottom:28}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索概念..." style={{width:'100%',padding:'12px 16px',border:'2px solid #e5e7eb',borderRadius:10,fontSize:14,outline:'none',transition:'border .15s'}} onFocus={e=>(e.target.style.borderColor='#fbbf24')} onBlur={e=>(e.target.style.borderColor='#e5e7eb')}/>
        <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:10}}>
          {origins.map(o=>(
            <button key={o} onClick={()=>setFilter(o)} style={{padding:'6px 14px',borderRadius:100,fontSize:12,fontWeight:500,cursor:'pointer',border:`1px solid ${filter===o?'#fbbf24':'#e5e7eb'}`,background:filter===o?'#fbbf24':'#fff',color:'#374151',transition:'all .15s'}}>{o}</button>
          ))}
        </div>
      </div>
      <div className="grid">
        {filtered.map(item=>(
          <Link key={item.id} href={`/detail/${item.id}`} className="card">
            <div className="tag">{item.origin}</div>
            <div style={{fontWeight:700,fontSize:15,marginBottom:6}}>{item.root}</div>
            <div style={{fontSize:13,color:'#6b7280',lineHeight:1.5}}>{item.meaning}</div>
          </Link>
        ))}
        {filtered.length===0 && <div style={{gridColumn:'1/-1',textAlign:'center',padding:'60px 0',color:'#9ca3af'}}>没有找到相关概念</div>}
      </div>
    </main>
  );
}
