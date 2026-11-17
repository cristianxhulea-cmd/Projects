import hashlib, json, os, re, shutil, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(root, 'electroplan.html'), encoding='utf-8').read()
sw = open(os.path.join(root, 'sw.js'), encoding='utf-8').read()
shell = open(os.path.join(root, 'tools', 'shell.html'), encoding='utf-8').read()
v = hashlib.sha256((src + sw + shell).encode()).hexdigest()[:12]
css = re.search(r'<style>\n?(.*?)</style>', src, re.S).group(1)
s_end = src.index('</style>') + len('</style>')
j0 = src.index('<script>', s_end)
markup = src[s_end:j0]
code = src[j0 + len('<script>'):src.rindex('</script>')]
pre = src[:src.index('<style>')]
links = '\n'.join(l for l in pre.splitlines() if l.startswith('<link'))
app = ('(function(){var s=document.createElement("style");s.textContent=' + json.dumps(css) +
       ';document.head.appendChild(s);document.body.insertAdjacentHTML("beforeend",' + json.dumps(markup) + ');})();\n' + code)
pub = os.path.join(root, 'public')
priv = os.path.join(root, 'private')
shutil.rmtree(pub, ignore_errors=True)
os.makedirs(pub)
os.makedirs(priv, exist_ok=True)
for f in ['manifest.webmanifest']:
    shutil.copy(os.path.join(root, f), pub)
shutil.copytree(os.path.join(root, 'icons'), os.path.join(pub, 'icons'))
open(os.path.join(pub, 'sw.js'), 'w', encoding='utf-8').write(sw)
open(os.path.join(pub, 'version.json'), 'w').write(json.dumps({'v': v}) + '\n')
open(os.path.join(pub, 'index.html'), 'w', encoding='utf-8').write(shell.replace('%VERSION%', v).replace('%FONTS%', links))
for f in os.listdir(priv):
    if f.endswith('.js'):
        os.remove(os.path.join(priv, f))
open(os.path.join(priv, 'app.js'), 'w', encoding='utf-8').write(app)
open(os.path.join(priv, 'version'), 'w').write(v + '\n')
print(v)
