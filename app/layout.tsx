import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ES 知识工坊 - 系统掌握 Elasticsearch",
  description: "从倒排索引到向量搜索，覆盖 ES 架构、查询、运维全栈知识。25个核心概念，系统掌握 Elasticsearch。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <style>{`
          *{margin:0;padding:0;box-sizing:border-box}
          body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#111827;background:#fff;-webkit-font-smoothing:antialiased}
          a{text-decoration:none;color:inherit}
          nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);border-bottom:1px solid #f3f4f6}
          .nav-inner{max-width:960px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:56px}
          .nav-logo{font-weight:700;font-size:15px}
          .nav-links{display:flex;gap:4px}
          .nav-links a{padding:6px 12px;border-radius:8px;font-size:14px;color:#4b5563;transition:background .15s}
          .nav-links a:hover{background:#f3f4f6}
          .card{border:1px solid #e5e7eb;border-radius:12px;padding:20px;cursor:pointer;transition:all .15s;display:block;color:inherit;text-decoration:none}
          .card:hover{border-color:#fbbf24;box-shadow:0 4px 6px rgba(0,0,0,.05);transform:translateY(-2px)}
          .tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.05em;color:#b45309;background:#fef3c7;padding:2px 8px;border-radius:4px;margin-bottom:10px}
          .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;border:none;text-decoration:none;transition:all .15s}
          .btn-primary{background:#fbbf24;color:#111827}
          .btn-primary:hover{background:#d97706;transform:translateY(-1px)}
          .btn-secondary{background:#f3f4f6;color:#374151;margin-left:12px}
          .btn-secondary:hover{background:#e5e7eb}
          footer{border-top:1px solid #f3f4f6;padding:48px 24px;text-align:center}
          .section{padding:48px 24px;max-width:960px;margin:0 auto}
          .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
          @media(max-width:640px){.nav-links a{font-size:12px;padding:6px 8px}}
        `}</style>
      </head>
      <body>
        <nav>
          <div className="nav-inner">
            <Link href="/" className="nav-logo">🔍 ES 知识工坊</Link>
            <div className="nav-links">
              <Link href="/flashcard">闪卡</Link>
              <Link href="/learn">学习</Link>
              <Link href="/roots">索引</Link>
              <Link href="/progress">进度</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <p style={{fontSize:18,fontWeight:700,marginBottom:8}}>搜索引擎不只是搜索</p>
          <p style={{fontSize:14,color:'#6b7280',maxWidth:480,margin:'0 auto'}}>Elasticsearch 是现代数据架构的核心组件。从全文检索到实时分析，让你在分布式搜索领域游刃有余。</p>
        </footer>
      </body>
    </html>
  );
}
