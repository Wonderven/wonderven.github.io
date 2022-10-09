import{_ as n,q as s,r as a,a2 as p}from"./plugin-vue_export-helper.c35c1c54.js";const y='{"title":"JavaScript \u679A\u4E3E\u5BF9\u8C61\u5C5E\u6027","description":null,"frontmatter":{"page":false,"title":"JavaScript \u679A\u4E3E\u5BF9\u8C61\u5C5E\u6027","description":null,"date":"2022-10-08T15:56:23.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["Javascript"]},"relativePath":"posts/tech/javascript/obj-enum.md","lastUpdated":1665217825868}',t={},o=p(`<h1 id="_1-reflect-ownkeys-obj" tabindex="-1">1. Reflect.ownKeys(obj) <a class="header-anchor" href="#_1-reflect-ownkeys-obj" aria-hidden="true">#</a></h1><blockquote><p>\u9759\u6001\u65B9\u6CD5 Reflect.ownKeys() \u8FD4\u56DE\u4E00\u4E2A\u7531\u76EE\u6807\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\u952E\u7EC4\u6210\u7684\u6570\u7EC4\uFF1B<br> \u8BE5\u6570\u7EC4\u5305\u542B\u5BF9\u8C61\u81EA\u8EAB\u7684<strong>\u6240\u6709\u952E\u540D</strong>\uFF0C\u4E0D\u7BA1\u952E\u540D\u662F Symbol \u6216\u5B57\u7B26\u4E32\uFF0C\u4E5F\u4E0D\u7BA1\u662F\u5426\u53EF\u679A\u4E3E\u3002</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">const</span> object1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">property1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">property2</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;s&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>object1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: Array [&quot;property1&quot;, &quot;property2&quot;, Symbol()]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>array1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: Array [&quot;length&quot;]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h1 id="_2-object-getownpropertynames-obj" tabindex="-1">2. Object.getOwnPropertyNames(obj) <a class="header-anchor" href="#_2-object-getownpropertynames-obj" aria-hidden="true">#</a></h1><blockquote><p>Object.getOwnPropertyNames() \u8FD4\u56DE\u4E00\u4E2A\u7531\u6307\u5B9A\u5BF9\u8C61\u7684\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u5C5E\u6027\u540D\u7EC4\u6210\u7684\u6570\u7EC4\uFF1B<br> \u8BE5\u6570\u7EC4<strong>\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u4F46\u4E0D\u5305\u62EC Symbol</strong> \u503C\u4F5C\u4E3A\u540D\u79F0\u7684\u5C5E\u6027\u3002</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u6570\u7EC4</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;, &quot;length&quot;]</span>

<span class="token comment">// \u7C7B\u6570\u7EC4\u5BF9\u8C61</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</span>


<span class="token comment">//\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027</span>
<span class="token keyword">var</span> my_obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">getFoo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
my_obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>my_obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;foo&quot;, &quot;getFoo&quot;]</span>

<span class="token comment">// Symbol</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;s1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;a&quot;]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h1 id="_3-object-keys-obj" tabindex="-1">3. Object.keys(obj) <a class="header-anchor" href="#_3-object-keys-obj" aria-hidden="true">#</a></h1><blockquote><p>Object.keys() \u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u7531\u4E00\u4E2A\u7ED9\u5B9A\u5BF9\u8C61\u7684\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u7EC4\u6210\u7684\u6570\u7EC4\uFF1B<br> \u8BE5\u6570\u7EC4<strong>\u4E0D\u5305\u62EC enumerable \u4E3A false \u6216\u8005 symbol</strong> \u5C5E\u6027\u7684\u540D\u79F0\uFF0C\u5C5E\u6027\u540D\u7684\u6392\u5217\u987A\u5E8F\u548C\u6B63\u5E38\u5FAA\u73AF\u904D\u5386\u8BE5\u5BF9\u8C61\u65F6\u8FD4\u56DE\u7684\u987A\u5E8F\u4E00\u81F4\u3002</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// Symbol</span>
<span class="token keyword">const</span> object1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;somestring&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;s&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>object1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</span>

<span class="token comment">//\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027</span>
<span class="token keyword">var</span> my_obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">getFoo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
my_obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>my_obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;foo&quot;]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,9),e=[o];function c(l,u,r,i,k,b){return s(),a("div",null,e)}var d=n(t,[["render",c]]);export{y as __pageData,d as default};