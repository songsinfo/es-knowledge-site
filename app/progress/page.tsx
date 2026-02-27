"use client";
import { wordRoots } from "../data";
import Link from "next/link";

export default function ProgressPage() {
  return (
    <main style={{maxWidth:680,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{textAlign:'center',padding:'48px 0',marginBottom:32}}>
        <div style={{fontSize:'4.5rem',fontWeight:800,color:'#fbbf24'}}>0%</div>
        <div style={{fontSize:16,color:'#6b7280',marginTop:8}}>开始学习，追踪你的进度吧！</div>
        <div style={{width:280,height:6,background:'#f3f4f6',borderRadius:3,margin:'20px auto 0'}}/>
      </div>
      <div style={{background:'#f9fafb',borderRadius:16,padding:24,marginBottom:24}}>
        <div style={{fontSize:13,fontWeight:600,color:'#6b7280',marginBottom:16}}>概念总览（共 {wordRoots.length} 个）</div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:8}}>
          {wordRoots.map(item=>(
            <Link key={item.id} href={`/detail/${item.id}`} style={{display:'flex',alignItems:'center',gap:8,padding:'10px 14px',background:'#fff',border:'1px solid #e5e7eb',borderRadius:8,fontSize:13,color:'#374151',textDecoration:'none',transition:'border .15s'}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor='#fbbf24')} onMouseLeave={e=>(e.currentTarget.style.borderColor='#e5e7eb')}>
              <span style={{color:'#9ca3af',fontSize:11}}>{item.id}.</span>
              <span style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{item.root.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </div>
      <div style={{textAlign:'center'}}>
        <Link href="/learn" className="btn btn-primary">开始学习 →</Link>
      </div>
    </main>
  );
}
