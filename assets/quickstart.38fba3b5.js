import{b as e,c as n,s as p,a as t,t as a,h as r,d as o,x as s}from"./index.bf11faf1.js";const i={class:"markdown-body"},l=p('<h2>快速开始</h2><p>本项目使用 vue3、rollup 和 typescript 开发，没有设计风格，所有UI的样式都是随便做的。</p><blockquote><p>文档编写时的环境：</p><ul><li>vue v3.0.5</li></ul></blockquote><pre><code class="language-bash"># 创建vite项目\nnpm init @vitejs/app my-app\n#or yarn create @vitejs/app\n\ncd my-app\n\nnpm i\n</code></pre><h3>安装</h3><pre><code class="language-bash">npm install bar-ui\n</code></pre><h3>引入组件样式</h3><pre><code class="language-js">// src/main.js\nimport { createApp } from &#39;vue&#39;;\nimport App from &#39;./App.vue&#39;;\nimport &#39;bar-ui/lib/index.css&#39;;\n\ncreateApp(App).mount(&#39;#app&#39;);\n</code></pre><h3>使用组件</h3><pre><code class="language-js">// src/App.vue\n&lt;template&gt;\n  &lt;div&gt;\n    &lt;bar-header title=&quot;你好&quot; fixed /&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nimport { defineComponent } from &#39;vue&#39;;\nimport { Header } from &#39;bar-ui&#39;;\n\nexport default defineComponent({\n  name: &#39;App&#39;,\n  components: {\n    [Header.name]: Header,\n  },\n});\n&lt;/script&gt;\n</code></pre>',10),c={components:{quick:{expose:[],setup:p=>(p,t)=>(e(),n("div",i,[l]))}}},u=s("    "),d=s("\n  ");c.render=function(p,s,i,l,c,m){const g=t("quick"),h=a("highlightjs");return r((e(),n("pre",null,[u,o(g),d],512)),[[h]])};export default c;