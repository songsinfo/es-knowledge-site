# ES 知识工坊 (Next.js)

> 系统学习 Elasticsearch 核心概念的交互式知识网站，使用 Next.js 14 + TypeScript + Tailwind CSS 构建。

## 🌐 在线访问

https://g7s7ls3v1x.space.minimaxi.com

## ✨ 功能

- 📇 **闪卡复习** - 快速记忆，键盘 `←` `→` 翻页，`空格` 翻转
- 📚 **渐进式学习** - 25个核心概念逐个深入学习，含详细说明和应用示例
- 🔍 **概念索引** - 关键词搜索 + 按模块分类筛选
- 🧪 **知识测验** - 每个概念配备四选一测验题，即时反馈
- 📊 **学习进度** - 追踪已掌握概念

## 📚 知识模块（25个概念）

| 模块 | 概念 |
|------|------|
| 核心概念 | 索引、文档、映射 |
| 分布式架构 | 分片、集群、节点 |
| 底层原理 | 倒排索引、Refresh、Flush、段合并 |
| 查询语言 | Query DSL、布尔查询、相关性评分、Scroll API |
| 数据分析 | 聚合、高亮显示 |
| 文本处理 | 分析器、Ingest Pipeline |
| 运维管理 | 索引别名、快照、冷热架构、集群监控 |
| AI 搜索 | 向量搜索（Vector Search）|
| 架构设计 | 多租户、性能调优 |

## 🛠 技术栈

- **Next.js 14** - App Router
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式系统
- **React 18** - UI 框架

## 🚀 本地运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 启动
npm start
```

打开 http://localhost:3000

## 📁 项目结构

```
app/
├── layout.tsx          # 全局布局（导航栏）
├── page.tsx            # 首页
├── globals.css         # 全局样式
├── flashcard/page.tsx  # 闪卡页
├── learn/page.tsx      # 学习页
├── roots/page.tsx      # 索引页
├── progress/page.tsx   # 进度页
└── detail/[id]/page.tsx # 概念详情页
lib/
└── data.ts             # 25个概念数据
```

## 📄 License

MIT
