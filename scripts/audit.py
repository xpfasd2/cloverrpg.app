from pathlib import Path
from html.parser import HTMLParser
import json, re
root=Path(__file__).resolve().parents[1]/'dist'
class Page(HTMLParser):
 def __init__(self): super().__init__();self.links=[];self.scripts=[];self.h1=0;self.canonical=[];self.meta={};self.json=[];self.capture=False
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if t=='a' and a.get('href','').startswith('/'):self.links.append(a['href'])
  if t=='h1':self.h1+=1
  if t=='link' and a.get('rel')=='canonical':self.canonical.append(a['href'])
  if t=='meta':self.meta[a.get('name')]=a.get('content')
  if t=='script':
   if a.get('src'):self.scripts.append(a['src'])
   self.capture=a.get('type')=='application/ld+json'
 def handle_data(self,d):
  if self.capture:self.json.append(json.loads(d))
 def handle_endtag(self,t):
  if t=='script':self.capture=False
files=list(root.rglob('*.html'));fail=[]
for f in files:
 s=f.read_text();p=Page();p.feed(s)
 checks={'one h1':p.h1==1,'one canonical':len(p.canonical)==1,'description':bool(p.meta.get('description')),'one GA loader':sum('googletagmanager.com/gtag/js' in x for x in p.scripts)==1,'one GA config':s.count("gtag('config', 'G-RX85XWEK03')")==1,'tag follows head':bool(re.search(r'<head>\s*<!-- Google tag \(gtag.js\) -->',s)),'schema':len(p.json)>0}
 for label,passed in checks.items():
  if not passed:fail.append(f'{f.relative_to(root)}: {label}')
 for link in p.links:
  path=link.split('#')[0].split('?')[0].strip('/')
  if not (root/path/'index.html').exists() and not (root/path).is_file():fail.append(f'{f}: broken link {link}')
assert not fail,'\n'.join(fail)
assert '404' not in (root/'sitemap.xml').read_text()
assert (root/'404.html').exists()
print(f'PASS: {len(files)} pages; all internal paths, H1, descriptions, canonical, JSON-LD, single GA loader/config and head placement.')
