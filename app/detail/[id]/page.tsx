"use client";
import { wordRoots } from "./data";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function DetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const item = wordRoots.find(w=>w.id===id);
  const [sel, setSel] = useState<number|null>(null);

  if (!item) return <div style={{textAlign:'center',padding:'80px 0',color:'#9ca3af'}}>未找到该概念</div>;

  const answered = sel!==null;
  const correct = sel===item.quiz.correctAnswer;

  return (
    <main style={{maxWidth:680,margin:'0 auto',padding:'48px 24px'}}>
      <Link href="/roots" style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:13,color:'#9ca3af',marginBottom:28,transition:'color .15s'}} onMouseEnter={e=>e.currentTarget.style.color='#374151'} onMouseLeave={e=>e.currentTarget.style.color='#9ca3af'}>← 返回索引</Link>

      <div style={{border:'1px solid #e5e7eb',borderRadius:16,padding:36,marginBottom:16}}>
        <div style={{fontSize:11,fontWeight:600,color:'#b45309',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:14}}>{item.origin}</div>
        <h1 style={{fontSize:28,fontWeight:800,marginBottom:10}}>{item.root}</h1>
        <div style={{fontSize:15,color:'#6b7280',borderLeft:'3px solid #fbbf24',paddingLeft:14,marginBottom:22}}>{item.meaning}</div>
        <p style={{fontSize:14,lineHeight:1.8,color:'#374151',marginBottom:22}}>{item.description}</p>
        <div style={{fontSize:11,fontWeight:600,color:'#9ca3af',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:10}}>应用示例</div>
        {item.examples.map((ex,i)=>(
          <div key={i} style={{background:'#f9fafb',borderRadius:10,padding:'14px 16px',marginBottom:8}}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:4}}>{ex.word}</div>
            <div style={{fontSize:13,color:'#6b7280'}}>{ex.explanation}</div>
          </div>
        ))}
      </div>

      <div style={{border:'1px solid #e5e7eb',borderRadius:16,padding:36}}>
        <div style={{fontSize:11,fontWeight:600,color:'#b45309',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:14}}>知识测验</div>
        <div style={{fontWeight:600,fontSize:15,marginBottom:16}}>{item.quiz.question}</div>
        <div style={{display:'flex',flexDirection:'column',gap:10}}>
          {item.quiz.options.map((opt,i)=>{
            let bg='#fff', border='2px solid #e5e7eb', color='#374151';
            if (answered) {
              if (i===item.quiz.correctAnswer) { bg='#ecfdf5'; border='2px solid #10b981'; color='#065f46'; }
              else if (i===sel) { bg='#fef2f2'; border='2px solid #ef4444'; color='#991b1b'; }
              else { bg='#f9fafb'; color='#9ca3af'; }
            }
            return (
              <button key={i} disabled={answered} onClick={()=>setSel(i)}
                style={{padding:'14px 18px',border,borderRadius:10,fontSize:14,textAlign:'left',cursor:answered?'default':'pointer',background:bg,color,transition:'all .15s'}}
                onMouseEnter={e=>{ if(!answered) { e.currentTarget.style.border='2px solid #fbbf24'; e.currentTarget.style.background='#fef3c7'; } }}
                onMouseLeave={e=>{ if(!answered) { e.currentTarget.style.border='2px solid #e5e7eb'; e.currentTarget.style.background='#fff'; } }}>
                {opt}
              </button>
            );
          })}
        </div>
        {answered && <div style={{marginTop:14,fontWeight:600,fontSize:14,color:correct?'#059669':'#dc2626'}}>{correct?'✅ 正确！':`❌ 答错了，正确答案是第 ${item.quiz.correctAnswer+1} 项`}</div>}
      </div>

      <div style={{display:'flex',justifyContent:'space-between',marginTop:20}}>
        {id>1 ? <Link href={`/detail/${id-1}`} style={{fontSize:13,color:'#9ca3af'}}>← 上一个</Link> : <span/>}
        {id<wordRoots.length ? <Link href={`/detail/${id+1}`} style={{fontSize:13,color:'#9ca3af'}}>下一个 →</Link> : <span/>}
      </div>
    </main>
  );
}
