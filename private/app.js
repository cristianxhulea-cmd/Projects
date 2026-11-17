(function(){var s=document.createElement("style");s.textContent=":root{\n  --bg:#E9EDE8;--panel:#F8FAF6;--canvas:#FBFCFA;--ink:#18222C;--muted:#5A6671;--line:#CDD5CC;\n  --grid:#E3E8E1;--grid2:#CBD3C9;--room:#EAF0F5;--wall:#18222C;\n  --accent:#1E5DA6;--accent-ink:#FFFFFF;--accent-soft:#DCE7F4;\n  --wire-l:#7A4A26;--wire-n:#2C6BC0;--wire-pe1:#3E8E3A;--wire-pe2:#E2C21C;\n  --ok:#2E7D4F;--warn:#9A6408;--warn-bg:#FBF1DC;--bad:#B23A3A;--sel:#D99A00;\n  --c0:#1E5DA6;--c1:#B4442E;--c2:#2E7D4F;--c3:#8A4FB0;--c4:#B87300;--c5:#0D8585;--c6:#B03A7A;--c7:#5A6B1E;--tv:#1F2A33;--struct:#4A3F5C;\n  --f-display:\"Barlow Condensed\",\"Arial Narrow\",system-ui,sans-serif;\n  --f-body:\"IBM Plex Sans\",system-ui,-apple-system,\"Segoe UI\",sans-serif;\n  --f-mono:\"IBM Plex Mono\",ui-monospace,\"SFMono-Regular\",Menlo,monospace;\n}\n@media (prefers-color-scheme:dark){:root:not([data-theme=\"light\"]){\n  --bg:#0E1317;--panel:#161D23;--canvas:#10161B;--ink:#E3E9EE;--muted:#93A0AB;--line:#2A3640;\n  --grid:#18212A;--grid2:#24303A;--room:#172430;--wall:#DCE4EB;\n  --accent:#6EA6E6;--accent-ink:#0A1520;--accent-soft:#1B2D42;\n  --wire-l:#B07A4E;--wire-n:#5B95E0;--wire-pe1:#5DB257;--wire-pe2:#E8CC3A;\n  --ok:#5CC28A;--warn:#E5B04C;--warn-bg:#2B2414;--bad:#EE7B7B;--sel:#F2C230;\n  --c0:#6EA6E6;--c1:#EE8A6E;--c2:#5CC28A;--c3:#B98AE0;--c4:#E8B04A;--c5:#4CC6C6;--c6:#E07AB0;--c7:#A9C25A;--tv:#EEF2F6;--struct:#C3B6DA;\n  color-scheme:dark}}\n:root[data-theme=\"dark\"]{\n  --bg:#0E1317;--panel:#161D23;--canvas:#10161B;--ink:#E3E9EE;--muted:#93A0AB;--line:#2A3640;\n  --grid:#18212A;--grid2:#24303A;--room:#172430;--wall:#DCE4EB;\n  --accent:#6EA6E6;--accent-ink:#0A1520;--accent-soft:#1B2D42;\n  --wire-l:#B07A4E;--wire-n:#5B95E0;--wire-pe1:#5DB257;--wire-pe2:#E8CC3A;\n  --ok:#5CC28A;--warn:#E5B04C;--warn-bg:#2B2414;--bad:#EE7B7B;--sel:#F2C230;\n  --c0:#6EA6E6;--c1:#EE8A6E;--c2:#5CC28A;--c3:#B98AE0;--c4:#E8B04A;--c5:#4CC6C6;--c6:#E07AB0;--c7:#A9C25A;--tv:#EEF2F6;--struct:#C3B6DA;\n  color-scheme:dark}\n[hidden]{display:none!important}\n.intro{position:fixed;inset:0;z-index:40;overflow-y:auto;color:#E8EEF3;background:\nradial-gradient(1200px 700px at 85% 15%,rgba(110,166,230,.18),transparent 60%),\nradial-gradient(900px 600px at 10% 90%,rgba(176,122,78,.16),transparent 60%),\nrepeating-linear-gradient(0deg,rgba(150,180,210,.07) 0 1px,transparent 1px 32px),\nrepeating-linear-gradient(90deg,rgba(150,180,210,.07) 0 1px,transparent 1px 32px),\nrepeating-linear-gradient(0deg,rgba(150,180,210,.12) 0 1px,transparent 1px 160px),\nrepeating-linear-gradient(90deg,rgba(150,180,210,.12) 0 1px,transparent 1px 160px),\n#0C1621;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}\n.intro-art{position:absolute;right:-40px;bottom:-30px;width:min(780px,70vw);opacity:.55;pointer-events:none}\n.intro-in{position:relative;max-width:1180px;margin:0 auto;min-height:100%;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:48px;align-items:center;padding-block:48px;padding-left:max(28px,env(safe-area-inset-left,0px));padding-right:max(28px,env(safe-area-inset-right,0px))}\n.intro-brand{display:flex;align-items:center;gap:12px;font-family:var(--f-display);font-weight:700;font-size:26px;letter-spacing:.03em}\n.intro-brand .wires i{width:30px;height:5px}\n.intro h1{margin:28px 0 14px;font-family:var(--f-display);font-weight:700;font-size:clamp(42px,6vw,76px);line-height:.95;letter-spacing:-.01em;text-wrap:balance}\n.intro h1 em{font-style:normal;color:#E0A26C}\n.intro .lead{margin:0;max-width:52ch;font-size:18px;line-height:1.55;color:#AFC0CF}\n.intro-steps{display:flex;flex-wrap:wrap;gap:8px 18px;margin:22px 0 30px;padding:0;list-style:none;font-family:var(--f-mono);font-size:13px;color:#8FA6BA}\n.intro-steps li::before{content:\"\";display:inline-block;width:8px;height:8px;border-radius:50%;background:#5B95E0;margin-right:8px;vertical-align:1px}\n.intro-acts{display:flex;flex-wrap:wrap;gap:12px}\n.ib{display:inline-flex;align-items:center;gap:10px;padding:14px 22px;border-radius:10px;border:1px solid rgba(175,192,207,.35);background:rgba(255,255,255,.04);color:#E8EEF3;font-size:16px;font-weight:600}\n.ib:hover{border-color:#AFC0CF;background:rgba(255,255,255,.08)}\n.ib.pri{background:#E0A26C;border-color:#E0A26C;color:#1A120B}\n.ib.pri:hover{background:#EAB384}\n.intro-card{background:rgba(12,22,33,.72);backdrop-filter:blur(6px);border:1px solid rgba(175,192,207,.2);border-radius:16px;padding:22px;display:flex;flex-direction:column;gap:12px}\n.intro-card h2{margin:0;font-family:var(--f-display);font-weight:600;font-size:24px;color:#E8EEF3}\n.recent{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none;max-height:min(56vh,520px);overflow-y:auto}\n.pli{position:relative}\n.recent .pli>button[data-io=open]{padding-right:48px}\n.recent .pmenu{position:absolute;top:6px;right:6px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;padding:0;border-radius:8px;font-size:20px;line-height:1;color:#AFC0CF;background:transparent;border:0}\n.recent .pmenu:hover{background:rgba(255,255,255,.08)}\n.pmenu-list{display:flex;flex-wrap:wrap;gap:6px;padding:6px 2px 2px}\n.recent .pmenu-list button{width:auto;display:inline-flex;padding:8px 12px;border-radius:8px;font-size:14px;grid-template-columns:none}\n.recent .pmenu-list .dng{color:#F2A0A0;border-color:rgba(242,160,160,.4)}\n.recent button{width:100%;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 12px;text-align:left;padding:12px 14px;border-radius:10px;border:1px solid rgba(175,192,207,.18);background:rgba(255,255,255,.03);color:#E8EEF3}\n.recent button:hover{border-color:#5B95E0;background:rgba(91,149,224,.1)}\n.recent b{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.recent small{grid-column:1/-1;color:#8FA6BA;font-family:var(--f-mono);font-size:12px}\n.recent span{color:#8FA6BA;font-size:12px;white-space:nowrap}\n.intro-foot{grid-column:1/-1;display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;font-size:12px;color:#7D93A7;border-top:1px solid rgba(175,192,207,.15);padding-top:16px}\n.intro-foot label{display:inline-flex;gap:8px;align-items:center}\n@media (max-width:860px){.intro-in{grid-template-columns:minmax(0,1fr);gap:28px;padding-block:28px}.intro-art{opacity:.3}}\n@media (prefers-reduced-motion:no-preference){.intro-in>*{animation:introIn .5s ease both}.intro-card{animation-delay:.12s}@keyframes introIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}}\n*,*::before,*::after{box-sizing:border-box}\nhtml,body{height:100%}\nbody{background:var(--bg);color:var(--ink);font-family:var(--f-body);font-size:14px;line-height:1.45;overflow:hidden}\nbutton,input,select,textarea{font:inherit;color:inherit}\nbutton{cursor:pointer}\n:focus-visible{outline:2px solid var(--accent);outline-offset:2px}\n#app{height:100%;display:grid;grid-template-rows:auto minmax(0,1fr);grid-template-columns:minmax(0,1fr)}\n.top{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;padding-block:8px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));background:var(--panel);border-bottom:1px solid var(--line)}\n.brand{display:flex;align-items:center;gap:8px;font-family:var(--f-display);font-weight:700;font-size:23px;letter-spacing:.02em;line-height:1}\n.wires{display:inline-flex;flex-direction:column;gap:2px}\n.wires i{display:block;width:18px;height:3px;border-radius:2px}\n.wires i:nth-child(1){background:var(--wire-l)}\n.wires i:nth-child(2){background:var(--wire-n)}\n.wires i:nth-child(3){background:repeating-linear-gradient(90deg,var(--wire-pe1) 0 4px,var(--wire-pe2) 4px 8px)}\n.proj{display:flex;align-items:center;gap:6px;min-width:0}\n.proj select{max-width:240px;min-width:0;padding:6px 8px;border:1px solid var(--line);border-radius:6px;background:var(--canvas)}\n.tabs{display:flex;gap:2px;padding:3px;border-radius:8px;background:var(--bg);overflow-x:auto;max-width:100%}\n.tabs button{border:0;background:none;padding:6px 12px;border-radius:6px;font-weight:500;white-space:nowrap;color:var(--muted)}\n.tabs button[aria-selected=\"true\"]{background:var(--panel);color:var(--ink);box-shadow:0 1px 2px rgba(0,0,0,.12)}\n.acts{display:flex;gap:6px;margin-left:auto;align-items:center}\n.sync{display:inline-flex;min-height:24px;align-items:center;gap:6px;font-size:12px;color:var(--muted);white-space:nowrap}\n.sync::before{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--muted)}\n.sync[data-s=\"ok\"]{color:var(--ok)}\n.sync[data-s=\"ok\"]::before{background:var(--ok)}\n.sync[data-s=\"bad\"]{color:var(--bad)}\n.sync[data-s=\"bad\"]::before{background:var(--bad)}\n.btn{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:1px solid var(--line);border-radius:6px;background:var(--panel);font-size:13px;white-space:nowrap}\n.btn:hover{border-color:var(--muted)}\n.btn.pri{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}\n.btn.dng{color:var(--bad)}\n.btn.ic{padding:6px 8px}\n.btn svg{width:16px;height:16px}\nmain{min-height:0;position:relative}\n.view{height:100%;min-height:0}\n.plan{display:grid;grid-template-columns:68px minmax(0,1fr);position:relative}\n.tools{display:flex;flex-direction:column;gap:6px;padding:6px 4px;overflow-y:auto;background:var(--panel);border-right:1px solid var(--line)}\n.tg{display:flex;flex-direction:column;gap:2px}\n.tg+.tg{border-top:1px solid var(--line);padding-top:6px}\n.tg-h{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:100%;min-height:46px;padding:4px 2px;border:1px solid var(--line);border-radius:7px;background:var(--bg);color:var(--ink);font-size:9.5px;font-weight:600;text-align:center}\n.tg-h svg{width:20px;height:20px;flex:none}.tg-h span{line-height:1.1;overflow-wrap:anywhere}.tg-h i{display:none}\n.tg-h[aria-expanded=true]{background:var(--accent-soft);border-color:var(--accent)}\n.tg-h.act{border-color:var(--accent);color:var(--accent)}\n.tg-rec{border:0;background:none;min-height:0;padding:2px 4px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-size:9px}\n.tg.open{background:var(--bg);border-radius:8px;padding-bottom:4px}\n.tg-l{display:none;font-size:10px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);padding-left:4px}\n.tool{display:flex;flex-direction:column;align-items:center;gap:1px;min-height:48px;padding:5px 2px;border:1px solid transparent;border-radius:7px;background:none;font-size:9.5px;line-height:1.15;text-align:center;color:var(--ink)}\n.tool:hover{background:var(--bg)}\n.tool[aria-pressed=\"true\"]{background:var(--accent);color:var(--accent-ink)}\n.tool svg{width:24px;height:24px;flex:none}\n.stage{position:relative;min-width:0;min-height:0;overflow:hidden;background:var(--canvas)}\n#cv{display:block;touch-action:none;cursor:crosshair}\n.hud{position:absolute;left:10px;right:10px;bottom:10px;z-index:4;display:flex;flex-wrap:wrap;gap:6px;align-items:center;pointer-events:none}\n.hud>*{pointer-events:auto}\n.hudMore{position:absolute;right:0;bottom:calc(100% + 8px);display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:flex-end;max-width:min(560px,calc(100vw - 40px));padding:10px;background:var(--panel);border:1px solid var(--line);border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.18)}\n.hudMore .layers{margin-left:0}\n.bgpages{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;max-height:60vh;overflow:auto}.bgpage{display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px;border:1px solid var(--line);border-radius:8px;background:var(--canvas);color:var(--ink);cursor:pointer;font:inherit;font-size:13px}.bgpage canvas{max-width:100%;height:auto;background:#fff;border-radius:4px}.bgpage:hover{border-color:var(--accent)}\n.layers{display:flex;flex-wrap:wrap;gap:6px;margin-left:auto}\n.ovl{position:absolute;inset:0;z-index:9;display:flex;flex-direction:column;background:var(--canvas);border-radius:inherit;overflow:hidden}\n.ovl[hidden]{display:none!important}\n.ov-h{display:flex;align-items:center;flex-wrap:wrap;gap:8px;padding:10px 12px;border-bottom:1px solid var(--line);background:var(--panel)}\n.v3sel{display:flex;align-items:center;flex-wrap:wrap;gap:10px;flex:1;min-width:200px;font-size:13px}.v3sel label{display:flex;align-items:center;gap:6px}.v3sel input{width:72px;padding:6px 8px;border:1px solid var(--line);border-radius:6px;background:var(--canvas);color:var(--ink);font-size:14px}\n.ov-h b{font-family:var(--f-display);font-size:19px;margin-right:6px}\n.ov-tabs{display:flex;gap:6px;flex-wrap:wrap}\n#v3dBox{flex:1;min-height:0;position:relative}\n#v3dBox canvas{display:block}\n#ecv{display:block;flex:1}\n.stage.meas .hud,.stage.meas .selbar,.stage.meas .statc{display:none}\n.measBar{position:absolute;left:10px;right:10px;bottom:10px;z-index:7;background:var(--panel);border:1px solid var(--line);border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.18);padding:12px 14px}\n.measBar form{display:flex;flex-direction:column;gap:8px}\n.measIn{width:150px;font:600 26px var(--f-mono);padding:6px 10px;border:2px solid var(--sel);border-radius:8px;background:var(--canvas);color:var(--ink)}\n.selbar{position:absolute;left:10px;right:10px;top:10px;z-index:4;display:flex;flex-wrap:wrap;align-items:center;gap:8px;pointer-events:none}\n.selbar>*{pointer-events:auto}\n.selbar .tag{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:8px;background:var(--panel);border:1px solid var(--line);font-size:13px;max-width:100%}\n.selbar .tag b{font-weight:600}\n.selbar .tag svg{width:22px;height:22px;flex:none}\n.nameEd{position:absolute;z-index:7;font:600 18px var(--f-body);padding:6px 10px;border:2px solid var(--accent);border-radius:8px;background:var(--canvas);color:var(--ink);width:min(260px,70%);transform-origin:0 50%}\n.selbar .btn{min-height:36px}\n.chip{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;border:1px solid var(--line);background:var(--panel);font-size:12px}\n.chip[aria-pressed=\"true\"]{border-color:var(--accent);background:var(--accent-soft)}\n.chipsel{padding:5px 8px;border-radius:999px;border:1px solid var(--line);background:var(--panel);font-size:12px;max-width:190px}\n.chipsel.on{border-color:var(--accent);background:var(--accent-soft)}\n.scale{font-family:var(--f-mono);font-size:11.5px;color:var(--muted);background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:5px 8px}\n.inspector{position:absolute;top:10px;right:10px;bottom:62px;width:min(340px,calc(100% - 88px));z-index:6;overflow-y:auto;padding:16px;background:var(--panel);border:1px solid var(--line);border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.18);display:flex;flex-direction:column;gap:16px;min-width:0}\n.inspector h2{margin:0;font-family:var(--f-display);font-weight:600;font-size:22px;line-height:1.1;text-wrap:balance}\n.inspector h4{margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}\n.ihead{display:flex;gap:10px;align-items:center}\n.ihead svg{width:34px;height:34px;flex:none;color:var(--accent)}\n.sub{margin:2px 0 0;color:var(--muted);font-size:12.5px}\n.fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.fields .full{grid-column:1/-1}\nlabel.f{display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--muted);min-width:0}\nlabel.f input,label.f select,label.f textarea{padding:7px 9px;border:1px solid var(--line);border-radius:6px;background:var(--canvas);color:var(--ink);font-size:14px;min-width:0;width:100%}\nlabel.ck{display:flex;align-items:center;gap:8px;font-size:13px}\n.spec{border:1px solid var(--line);border-radius:8px;padding:10px 12px;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}\n.spec dt{color:var(--muted)}\n.spec dd{margin:0;font-family:var(--f-mono);font-size:12.5px;text-align:right}\n.legend{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}\n.legend li[aria-current=\"true\"]{background:var(--accent-soft)}\n.legend li{cursor:pointer;display:grid;grid-template-columns:12px 34px minmax(0,1fr) auto;gap:8px;align-items:center;font-size:13px;padding:4px 0;border-bottom:1px solid var(--line)}\n.legend li:last-child{border-bottom:0}\n.dot{width:12px;height:12px;border-radius:50%}\n.mono{font-family:var(--f-mono);font-size:12.5px}\n.muted{color:var(--muted)}\n.trunc{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.warns{display:flex;flex-direction:column;gap:6px;margin:0;padding:0;list-style:none}\n.flagmsg{padding:8px 10px;border-radius:6px;color:var(--bad);border-left:3px solid var(--bad);background:var(--bg);font-size:13px}\n.dchk{display:flex;flex-direction:column;gap:8px;margin:0;padding:0;list-style:none}\n.dchk li{display:flex;flex-direction:column;gap:6px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;font-size:13px}\n.dchk .ok{color:var(--ok)}\n.dchk .no{color:var(--warn)}\n.warns li{padding:8px 10px;border-radius:6px;background:var(--warn-bg);color:var(--warn);font-size:13px;border-left:3px solid var(--warn)}\n.okmsg{padding:8px 10px;border-radius:6px;color:var(--ok);border:1px solid var(--line);font-size:13px}\n.doc{height:100%;overflow-y:auto}\n.wrap{max-width:1120px;margin:0 auto;padding-block:24px 48px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));display:flex;flex-direction:column;gap:20px}\n.wrap h1{margin:0;font-family:var(--f-display);font-weight:700;font-size:32px;line-height:1.05;text-wrap:balance}\n.wrap h2{margin:0;font-family:var(--f-display);font-weight:600;font-size:22px}\n.lede{margin:-12px 0 0;color:var(--muted);max-width:68ch}\n.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:10px;overflow:hidden}\n.stat{background:var(--panel);padding:12px 14px;display:flex;flex-direction:column;gap:2px}\n.stat span{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}\n.stat b{font-family:var(--f-mono);font-weight:500;font-size:20px;font-variant-numeric:tabular-nums}\n.stat small{color:var(--muted);font-size:12px}\n.tbl{overflow-x:auto;border:1px solid var(--line);border-radius:10px;background:var(--panel)}\ntable{border-collapse:collapse;width:100%;font-variant-numeric:tabular-nums}\nth,td{padding:9px 12px;text-align:left;border-bottom:1px solid var(--line);vertical-align:middle}\nth{font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);white-space:nowrap;background:var(--panel)}\ntbody tr:last-child td{border-bottom:0}\ntd.n,th.n{text-align:right;font-family:var(--f-mono);font-size:13px;white-space:nowrap}\ntr.cat td{background:var(--bg);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);padding-block:6px}\ntfoot td{font-weight:600;border-top:2px solid var(--ink);border-bottom:0}\n.pin{width:92px;padding:5px 7px;border:1px solid var(--line);border-radius:5px;background:var(--canvas);text-align:right;font-family:var(--f-mono);font-size:13px}\n.cid{display:inline-flex;align-items:center;gap:6px;font-family:var(--f-mono);font-weight:600}\n.pill{display:inline-block;padding:1px 7px;border-radius:999px;font-size:12px;font-family:var(--f-mono)}\n.pill.ok{color:var(--ok);border:1px solid currentColor}\n.pill.bad{color:var(--bad);border:1px solid currentColor}\n.rail-box{overflow-x:auto;border:1px solid var(--line);border-radius:10px;background:var(--panel);padding:16px}\n.rail{min-width:620px;display:flex;flex-direction:column;gap:14px}\n.row{display:grid;gap:3px;padding:6px;border-radius:4px;background:repeating-linear-gradient(0deg,var(--grid2) 0 2px,transparent 2px 12px),var(--bg)}\n.mod{min-height:86px;border-radius:3px;background:var(--canvas);border:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;padding:6px 4px;text-align:center;font-size:11px;line-height:1.2;position:relative;overflow:hidden}\n.mod .k{display:block;height:5px;border-radius:2px;margin:0 2px 4px}\n.mod b{font-family:var(--f-mono);font-size:12px}\n.mod small{font-family:var(--f-mono);color:var(--muted);font-size:10.5px}\n.mod.main{background:var(--ink);color:var(--canvas);border-color:var(--ink)}\n.mod.main small{color:inherit;opacity:.75}\n.mod.rcd{border:2px solid var(--accent)}\n.mod.spare{background:none;border:1px dashed var(--grid2)}\n.note{font-size:13px;color:var(--muted);max-width:80ch;margin:0}\n.bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center}\n.kb{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;align-items:start}\n.col{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:10px;display:flex;flex-direction:column;gap:8px;min-width:0}\n.col h3{margin:0;padding:2px 4px 4px;display:flex;justify-content:space-between;font-family:var(--f-display);font-weight:600;font-size:19px}\n.col h3 span{font-family:var(--f-mono);font-size:13px;color:var(--muted);font-weight:400}\n.task{border:1px solid var(--line);border-radius:8px;background:var(--canvas);padding:10px;display:flex;flex-direction:column;gap:6px;min-width:0}\n.task[data-s=\"done\"] .tt{color:var(--muted);text-decoration:line-through}\n.tt{font-weight:500;overflow-wrap:anywhere}\n.tm{font-size:12px;color:var(--muted);display:flex;flex-wrap:wrap;gap:4px 10px}\n.ta{display:flex;gap:6px;justify-content:space-between}\n.ta .btn{padding:4px 8px;font-size:12px}\n.prog{height:8px;border-radius:999px;background:var(--line);overflow:hidden}\n.prog i{display:block;height:100%;background:var(--ok)}\n.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px;display:flex;flex-direction:column;gap:12px}\n.cfields{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}\n.empty{padding:16px;color:var(--muted);text-align:center;border:1px dashed var(--line);border-radius:8px}\ndialog{border:1px solid var(--line);border-radius:12px;background:var(--panel);color:var(--ink);padding:20px;width:min(560px,calc(100vw - 32px))}\ndialog::backdrop{background:rgba(10,15,20,.45)}\ndialog h2{margin:0 0 6px;font-family:var(--f-display);font-weight:600;font-size:24px}\ndialog textarea{width:100%;min-height:150px;font-family:var(--f-mono);font-size:12px;border:1px solid var(--line);border-radius:6px;background:var(--canvas);padding:8px;resize:vertical}\n.dl{display:flex;flex-direction:column;gap:12px}\n.upd{position:fixed;left:50%;top:calc(64px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:45;display:flex;align-items:center;gap:10px;max-width:calc(100vw - 32px);padding:8px 8px 8px 16px;border-radius:12px;background:var(--ink);color:var(--canvas);box-shadow:0 8px 28px rgba(0,0,0,.25);font-size:14px}\n.upd .btn{border-color:transparent}\n.upd .x{background:none;border:0;color:inherit;opacity:.7;font-size:18px;padding:4px 8px}\n.guide{margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px;line-height:1.45}\n.guide li::marker{font-weight:700;color:var(--accent)}\n.toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--canvas);padding:8px 14px;border-radius:8px;font-size:13px;z-index:20}\n.insp-bar{position:sticky;top:-16px;z-index:2;display:flex;align-items:center;gap:6px;margin:-16px -16px -4px;padding:8px 10px 8px 14px;background:var(--panel);border-bottom:1px solid var(--line);border-radius:12px 12px 0 0;cursor:grab;touch-action:none}\n.insp-bar .btn{width:36px;height:36px;justify-content:center;flex:none}\n.insp-t{flex:1;min-width:0;font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.insp-grip{position:absolute;left:-6px;top:0;bottom:0;width:12px;cursor:ew-resize}\n.inspector.pt .insp-grip{left:50%;top:4px;bottom:auto;width:44px;height:5px;margin-left:-22px;border-radius:3px;background:var(--line);cursor:ns-resize}\n.inspector.pt .insp-bar{padding-top:14px;cursor:ns-resize}\n.inspector:not(.pt) .insp-bar::before{content:\"\";position:absolute;left:3px;top:50%;width:4px;height:28px;margin-top:-14px;border-radius:2px;background:var(--line)}\n.inspector.min{bottom:auto!important;overflow:hidden;width:min(240px,calc(100% - 88px))}\n.inspector.min.pt{width:auto}\n.inspector.min>*:not(.insp-bar){display:none!important}\n.inspector.min .insp-bar{margin-bottom:-16px;border-bottom:0}\n.stage.io .selbar{right:calc(var(--inspW,340px) + 20px)}\n.btn .lbl{white-space:nowrap}\nbody.focus .top{display:none}\nbody.focus #app{grid-template-rows:minmax(0,1fr)}\nbody.focus #focusBtn{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}\n:root{--r-lg:16px;--r-md:11px;--shadow:0 6px 22px rgba(15,25,35,.08);--brand:#D9894A}\n.top{min-height:62px;padding-block:8px;gap:10px 16px}\n.brand{font-size:21px}\n.proj{gap:8px}\n#projSel{display:none}\n.projBtn{display:flex;flex-direction:column;align-items:flex-start;line-height:1.15;padding:6px 12px;border-radius:var(--r-md);border:0;background:var(--bg);color:var(--ink);text-align:left;max-width:280px;min-width:0}\n.projBtn b{font-size:15px;font-weight:700;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.projBtn span{font-size:12px;color:var(--muted);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.projBtn:hover{background:var(--accent-soft)}\n#newProj{border-radius:var(--r-md);min-height:40px;width:40px;justify-content:center;padding:0}\n#newProj .lbl{display:none}\n.sync{padding:4px 10px;border-radius:999px;background:var(--bg)}\n.sync[data-s=\"ok\"]{background:color-mix(in srgb,var(--ok) 14%,transparent)}\n.sync[data-s=\"bad\"]{background:color-mix(in srgb,var(--bad) 14%,transparent)}\n.tabs{margin-inline:auto;padding:4px;border-radius:13px;gap:3px}\n.tabs button{display:inline-flex;align-items:center;gap:7px;padding:8px 14px;border-radius:9px;font-weight:600}\n.tabs button svg{width:17px;height:17px;flex:none}\n.acts{margin-left:0;gap:8px}\n.acts .btn.ic{width:40px;height:40px;justify-content:center;border-radius:var(--r-md)}\n#ioBtn{height:40px;border-radius:var(--r-md)}\n#ioBtn .lbl{display:none}\n@media (max-width:1180px){#fbBtn .lbl{display:none}}\n#accBtn.av{width:40px;height:40px;padding:0;justify-content:center;border-radius:50%;background:var(--ink);color:var(--canvas);border-color:var(--ink);font-weight:700;font-size:13px}\n.btn{border-radius:9px}\n.plan{grid-template-columns:92px minmax(0,1fr);background:var(--bg)}\n.tools{margin:12px 0 12px 12px;padding:8px 6px;gap:3px;border:1px solid var(--line);border-radius:var(--r-lg);box-shadow:var(--shadow);overflow-y:auto}\n.rail-b{display:flex;flex-direction:column;align-items:center;gap:3px;min-height:58px;padding:8px 2px;border:0;border-radius:12px;background:none;color:var(--muted);font-size:10.5px;font-weight:600;line-height:1.15;text-align:center}\n.rail-b svg{width:26px;height:26px;flex:none}\n.rail-b span{max-width:100%;overflow-wrap:anywhere}\n.rail-b:hover{background:var(--bg);color:var(--ink)}\n.rail-b.on{background:var(--accent);color:var(--accent-ink)}\n.rail-b.open:not(.on){background:var(--accent-soft);color:var(--accent)}\n.rail-sep{width:40px;border:0;border-top:1px solid var(--line);margin:4px auto}\n.fly{position:absolute;left:104px;top:12px;z-index:8;width:256px;max-height:calc(100% - 24px);overflow-y:auto;padding:14px;background:var(--panel);border:1px solid var(--line);border-radius:var(--r-lg);box-shadow:0 14px 36px rgba(15,25,35,.16)}\n.fly-h{display:flex;align-items:center;justify-content:space-between}\n.fly-h b{font-family:var(--f-display);font-size:21px}\n.fly-h .btn{width:34px;height:34px;justify-content:center}\n.fly p{margin:4px 0 12px;font-size:12.5px;color:var(--muted)}\n.fly-t{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.ftile{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 6px;border:1px solid var(--line);border-radius:12px;background:var(--canvas);color:var(--ink);font-size:12px;font-weight:600;text-align:center}\n.ftile svg{width:32px;height:32px}\n.ftile:hover{border-color:var(--accent)}\n.ftile.on{border:2px solid var(--accent);background:var(--accent-soft)}\n.stage{margin:12px;border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}\n.statc{position:absolute;left:12px;top:12px;right:12px;z-index:4;display:flex;flex-wrap:wrap;gap:8px;pointer-events:none}\n.statc>*{pointer-events:auto}\n.schip{display:inline-flex;align-items:center;gap:7px;padding:7px 12px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--panel) 92%,transparent);color:var(--ink);font-size:12.5px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.05);backdrop-filter:blur(4px)}\n.schip i{width:8px;height:8px;border-radius:50%;flex:none}\n.schip svg{width:15px;height:15px}\n.schip.ok{color:var(--ok)}.schip.w{color:var(--warn)}\n.stage.io .statc{right:calc(var(--inspW,340px) + 24px)}\n.selbar{left:12px;right:auto;top:60px;max-width:calc(100% - 24px);padding:5px;gap:4px;background:var(--ink);color:var(--canvas);border-radius:13px;box-shadow:0 10px 26px rgba(0,0,0,.25);pointer-events:auto}\n.selbar:empty{display:none}\n.selbar.anch .tag .muted{display:none}\n.selbar.anch{flex-wrap:wrap;max-width:min(560px,calc(100% - 24px))}\n.selbar.anch .tag{flex:none;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}\n.selbar .tag{background:transparent;border:0;color:inherit;padding:6px 8px}\n.selbar .tag .muted{color:inherit;opacity:.7}\n.selbar .btn{background:transparent;border-color:transparent;color:inherit;font-weight:600;font-size:13px}\n.selbar .btn:hover{background:color-mix(in srgb,var(--canvas) 14%,transparent)}\n.selbar .btn.pri,.selbar .btn[aria-pressed=\"true\"]{background:var(--brand);border-color:var(--brand);color:#1A120B}\n.selbar .btn.dng{color:#F4A3A3}\n.stage.io .selbar{right:auto}\n.hud{left:50%;right:auto;bottom:14px;transform:translateX(-50%);max-width:calc(100% - 24px);flex-wrap:nowrap;gap:4px;padding:6px;background:var(--panel);border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 28px rgba(15,25,35,.12);pointer-events:auto}\n.stage.io .hud{left:calc(50% - var(--inspW,340px)/2 - 12px)}\n.hud .btn{border-color:transparent;min-height:36px}\n.hud .btn.ic{min-width:36px;justify-content:center;font-size:17px}\n.hud .btn:hover{background:var(--bg)}\n.zpct{font:600 12.5px var(--f-mono);color:var(--ink);min-width:48px;text-align:center}\n.hud .chipsel{border-radius:9px;padding:7px 8px;font-size:13px;font-weight:600}\n.lq{margin-left:0;gap:4px;flex-wrap:nowrap;padding-left:6px;border-left:1px solid var(--line)}\n.lq .chip,.hudMore .chip{border-radius:9px;padding:7px 11px;font-weight:600;font-size:12.5px}\n#hudMoreBtn{border-left:1px solid var(--line)!important;border-radius:0 9px 9px 0}\n#zFit .lbl{display:none}\n.hudMore{right:0;bottom:calc(100% + 10px)}\n.inspector{top:12px;right:12px;bottom:12px;border-radius:var(--r-lg);box-shadow:0 14px 36px rgba(15,25,35,.14)}\n.itabs{display:flex;gap:18px;margin:-6px 0 -4px;border-bottom:1px solid var(--line)}\n.itabs button{border:0;background:none;padding:8px 0 10px;font-weight:600;font-size:13.5px;color:var(--muted);border-bottom:2px solid transparent;margin-bottom:-1px}\n.itabs button[aria-selected=\"true\"]{color:var(--ink);border-bottom-color:var(--accent)}\n.rsum{display:flex;flex-direction:column;gap:14px}\n.kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.kpis>div{background:var(--bg);border-radius:10px;padding:9px 10px;display:flex;flex-direction:column}\n.kpis b{font:600 19px var(--f-mono)}.kpis span{font-size:11.5px;color:var(--muted)}\n.rchk{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}\n.rchk li{display:flex;gap:8px;align-items:flex-start;padding:8px 10px;border-radius:10px;background:var(--bg);font-size:13px}\n.rchk li span{flex:1}\n.rchk li i{font-style:normal;font-weight:800;width:16px;text-align:center}\n.rchk li i.ok{color:var(--ok)}\n.rchk li.w{background:var(--warn-bg);color:var(--warn)}\n.rchk li .btn{padding:3px 9px;font-size:12px}\n.rcirc>div{display:grid;grid-template-columns:10px 36px minmax(0,1fr) auto;gap:8px;align-items:center;padding:7px 2px;border-bottom:1px solid var(--line);font-size:13px}\n.rcirc>div:last-child{border-bottom:0}\n.rcirc small{color:var(--muted)}\n.wrap{gap:22px}\n.wrap h1{font-size:34px}\n.card{border-radius:var(--r-lg);box-shadow:var(--shadow)}\n.tbl{border-radius:14px;box-shadow:var(--shadow)}\n.stats{border-radius:14px;box-shadow:var(--shadow)}\n.col{border-radius:var(--r-lg)}\n.rail-box{border-radius:var(--r-lg)}\n@media (max-width:1366px){\n  .brand .bt{display:none}\n  .tabs button{padding:8px 11px}\n}\n@media (max-width:1180px){\n  .tabs button{padding:8px 10px}\n  .tabs button span{display:none}\n  .tabs button[aria-selected=\"true\"] span{display:inline}\n  .projBtn{max-width:200px}\n}\n@media (max-width:1440px){\n  .sync-t{display:none}\n  #ioBtn .lbl{display:none}\n  #ioBtn{padding:6px 8px}\n  .top{gap:6px 12px}\n}\n@media (max-width:1180px){\n  .bt,.sync-t{display:none}\n  .top{gap:6px 10px;padding-block:6px}\n  .proj select{max-width:170px}\n  #newProj .lbl,#ioBtn .lbl{display:none}\n  #newProj,#ioBtn{padding:6px 8px}\n  .tabs button{padding:6px 10px}\n}\n@media (max-width:760px),(orientation:portrait) and (max-width:1100px){\n  .inspector{top:auto;left:10px;right:10px;bottom:62px;width:auto;max-height:55%}\n  .stage.io .selbar{right:10px}\n  .scale,#focusBtn .lbl{display:none}\n}\n@media (max-width:640px){\n  .tabs{order:3;flex:1 1 100%;min-width:0}\n  .tabs button{padding:6px 9px;font-size:13.5px}\n  .plan{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}\n  .tools{flex-direction:row;overflow-x:auto;overflow-y:hidden;border-right:0;border-bottom:1px solid var(--line);padding:6px 8px;gap:6px}\n  .tg{flex-direction:row}\n  .tg+.tg{border-top:0;padding-top:0;border-left:1px solid var(--line);padding-left:6px}\n  .tg-l{display:none}\n  .tg-h{width:auto;min-width:64px;flex-direction:column;justify-content:center;text-align:center}\n  .tg-h i{display:none}\n  .tg.open{padding:0 4px 0 0}\n  .tool{min-width:56px}\n  .kb{grid-template-columns:minmax(0,1fr)}\n  .acts{margin-left:0}\n  .brand{font-size:20px}\n}\n@media (max-width:760px),(orientation:portrait) and (max-width:1100px){\n  .inspector{top:auto;left:12px;right:12px;bottom:12px}\n  .stage.io .statc{right:12px}\n  .stage.io .hud{left:50%}\n}\n@media (max-width:640px){\n  .top{padding-block:6px;gap:6px 8px}\n  .brand .bt{display:none}\n  .projBtn{max-width:none;flex:1;padding:5px 10px}\n  .proj{flex:1;min-width:0}\n  .sync{display:none}\n  .tabs button span{display:inline}\n  .tabs button svg{display:none}\n  .plan{grid-template-columns:minmax(0,1fr)}\n  .tools{flex-direction:row;margin:8px 8px 0;padding:4px 6px;overflow-x:auto;overflow-y:hidden;gap:2px}\n  .rail-b{min-width:62px;min-height:52px;padding:6px 4px}\n  .rail-b svg{width:22px;height:22px}\n  .rail-sep{width:0;height:36px;border-top:0;border-left:1px solid var(--line);margin:auto 4px}\n  .fly{left:8px;right:8px;top:74px;width:auto}\n  .fly-t{grid-template-columns:repeat(3,minmax(0,1fr))}\n  .stage{margin:8px}\n  .statc{left:8px;right:8px;top:8px}\n  .schip.kw{display:none}\n  .schip.pj span{display:none}\n  .hud{bottom:8px;max-width:calc(100% - 16px);flex-wrap:wrap;justify-content:center}\n  .acts{gap:5px}\n  .acts .btn.ic{width:36px;height:36px}\n  #redoBtn,#ioBtn{display:none}\n  #newProj{width:36px;min-height:36px}\n  .rail-b span{white-space:nowrap;font-size:10px}\n  .rail-b{min-width:64px}\n  #zOut,#zIn{display:none}\n  .hud{flex-wrap:nowrap}\n  #lvSel{max-width:96px}\n  #isoSel{max-width:118px}\n  .stage.io .selbar.anch{display:none}\n  .lq{display:none}\n  .zpct{display:none}\n  #hudMoreBtn .lbl{display:none}\n  .hud .chipsel{max-width:120px}\n}\n@media (prefers-reduced-motion:reduce){*{transition:none!important}}\n";document.head.appendChild(s);document.body.insertAdjacentHTML("beforeend","\n\n<div class=\"intro\" id=\"intro\" hidden>\n  <svg class=\"intro-art\" viewBox=\"0 0 780 520\" aria-hidden=\"true\" fill=\"none\">\n    <g stroke=\"#AFC0CF\" stroke-width=\"6\" opacity=\".55\"><path d=\"M40 40h460v200H40zM500 40h240v300H500zM40 240h260v240H40zM300 240h200v240H300z\"/></g>\n    <g stroke=\"#AFC0CF\" stroke-width=\"2\" opacity=\".5\" stroke-dasharray=\"6 6\"><path d=\"M330 240a70 70 0 0 1 70-70M500 180a60 60 0 0 1 60 60\"/></g>\n    <path d=\"M400 470V300h-180V140h-90\" stroke=\"#B07A4E\" stroke-width=\"3\"/>\n    <path d=\"M410 470V310h200V120h60\" stroke=\"#5B95E0\" stroke-width=\"3\"/>\n    <path d=\"M390 470V290H170V380\" stroke=\"#5DB257\" stroke-width=\"3\" stroke-dasharray=\"10 8\"/>\n    <path d=\"M390 470V290H170V380\" stroke=\"#E8CC3A\" stroke-width=\"3\" stroke-dasharray=\"10 8\" stroke-dashoffset=\"9\"/>\n    <g fill=\"#0C1621\" stroke=\"#E8EEF3\" stroke-width=\"3\"><circle cx=\"130\" cy=\"140\" r=\"16\"/><circle cx=\"670\" cy=\"120\" r=\"16\"/><circle cx=\"170\" cy=\"380\" r=\"16\"/><rect x=\"380\" y=\"456\" width=\"40\" height=\"22\"/></g>\n    <g stroke=\"#E8EEF3\" stroke-width=\"3\"><path d=\"M119 129l22 22M141 129l-22 22M659 109l22 22M681 109l-22 22\"/></g>\n    <text x=\"170\" y=\"386\" fill=\"#E8EEF3\" font-family=\"IBM Plex Mono,monospace\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">P</text>\n  </svg>\n  <div class=\"intro-in\">\n    <section>\n      <div class=\"intro-brand\"><span class=\"wires\" aria-hidden=\"true\"><i></i><i></i><i></i></span>ElectroPlan</div>\n      <h1>Instala\u021bia electric\u0103, <em>de la schi\u021b\u0103</em> la tablou.</h1>\n      <p class=\"lead\">Desenezi casa cu penul, pui prizele \u0219i luminile, iar aplica\u021bia traseaz\u0103 circuitele, dimensioneaz\u0103 cablurile \u0219i siguran\u021bele dup\u0103 I7 \u0219i scoate materialele, schema monofilar\u0103 \u0219i PDF-ul pentru client.</p>\n      <ul class=\"intro-steps\"><li>Schi\u021b\u0103 cu penul</li><li>Circuite \u0219i tablou</li><li>Materiale \u0219i manoper\u0103</li><li>PDF pentru dosar</li></ul>\n      <div class=\"intro-acts\" id=\"introActs\"></div>\n    </section>\n    <section class=\"intro-card\">\n      <h2>Proiectele tale</h2>\n      <ul class=\"recent\" id=\"introRecent\"></ul>\n    </section>\n    <form class=\"intro-card\" id=\"authBox\" hidden style=\"grid-column:1/-1;max-width:520px\">\n      <h2 id=\"authT\">Intr\u0103 \u00een cont</h2>\n      <p style=\"margin:0;color:#AFC0CF;font-size:14px\" id=\"authH\">Proiectele tale sunt salvate \u00een cont \u0219i le vezi doar tu, pe orice dispozitiv.</p>\n      <label class=\"f\" style=\"color:#AFC0CF\">E-mail<input id=\"authE\" type=\"email\" inputmode=\"email\" autocomplete=\"username\" required style=\"background:#0C1621;color:#E8EEF3;border-color:rgba(175,192,207,.35)\"></label>\n      <label class=\"f\" style=\"color:#AFC0CF\" id=\"authPL\">Parol\u0103<input id=\"authP\" type=\"password\" autocomplete=\"current-password\" minlength=\"6\" style=\"background:#0C1621;color:#E8EEF3;border-color:rgba(175,192,207,.35)\"></label>\n      <label class=\"f\" style=\"color:#AFC0CF\" id=\"authP2L\" hidden>Repet\u0103 parola<input id=\"authP2\" type=\"password\" autocomplete=\"new-password\" minlength=\"6\" style=\"background:#0C1621;color:#E8EEF3;border-color:rgba(175,192,207,.35)\"></label>\n      <p id=\"authMsg\" style=\"margin:0;font-size:14px;color:#E0A26C\" role=\"status\"></p>\n      <div class=\"intro-acts\"><button class=\"ib pri\" type=\"submit\" id=\"authGo\">Intr\u0103 \u00een cont</button><button class=\"ib\" type=\"button\" id=\"authSw\">Creeaz\u0103 cont nou</button></div>\n      <button type=\"button\" id=\"authForgot\" style=\"align-self:flex-start;background:none;border:0;color:#8FB8EE;padding:0;font-size:14px;text-decoration:underline\">Ai uitat parola?</button>\n    </form>\n    <div class=\"intro-foot\"><span>Calcule orientative conform I7-2011. Proiectul final se verific\u0103 \u0219i se semneaz\u0103 de un electrician autorizat ANRE.</span><label><input type=\"checkbox\" id=\"introSkip\"> Nu mai afi\u0219a la pornire</label></div>\n  </div>\n</div>\n<div id=\"app\">\n  <header class=\"top\">\n    <div class=\"brand\" id=\"brandBtn\" role=\"button\" tabindex=\"0\" title=\"Ecranul de pornire\" style=\"cursor:pointer\"><span class=\"wires\" aria-hidden=\"true\"><i></i><i></i><i></i></span><span class=\"bt\">ElectroPlan</span></div>\n    <div class=\"proj\">\n      <button class=\"projBtn\" id=\"projBtn\" type=\"button\" title=\"Proiectele tale\"><b id=\"projName\"></b><span id=\"projSub\"></span></button>\n      <select id=\"projSel\" aria-label=\"Proiect\"></select>\n      <button class=\"btn\" id=\"newProj\" type=\"button\" title=\"Proiect nou\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M12 5v14M5 12h14\"/></svg><span class=\"lbl\">Proiect nou</span></button>\n      <span class=\"sync\" id=\"sync\" data-s=\"muted\" role=\"status\"><span class=\"sync-t\">Doar pe acest dispozitiv</span></span>\n    </div>\n    <nav class=\"tabs\" role=\"tablist\" aria-label=\"Sec\u021biuni\">\n      <button role=\"tab\" data-tab=\"plan\" aria-selected=\"true\" type=\"button\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 12h9V3M12 12v9\"/></svg><span>Plan</span></button>\n      <button role=\"tab\" data-tab=\"calcul\" aria-selected=\"false\" type=\"button\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 2 4 14h7l-1 8 9-12h-7z\"/></svg><span>Circuite</span></button>\n      <button role=\"tab\" data-tab=\"materiale\" aria-selected=\"false\" type=\"button\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 7h16M4 12h16M4 17h10\"/></svg><span>Materiale</span></button>\n      <button role=\"tab\" data-tab=\"oferta\" aria-selected=\"false\" type=\"button\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 3h7l5 5v13H7z\"/><path d=\"M14 3v5h5\"/></svg><span>Documente</span></button>\n      <button role=\"tab\" data-tab=\"lucrari\" aria-selected=\"false\" type=\"button\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11l3 3 8-8\"/><path d=\"M20 12v7H4V5h11\"/></svg><span>Lucr\u0103ri</span></button>\n      <button role=\"tab\" data-tab=\"admin\" aria-selected=\"false\" type=\"button\" id=\"tabAdmin\" hidden><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z\"/></svg><span>Admin</span></button>\n    </nav>\n    <div class=\"acts\">\n      <button class=\"btn\" id=\"accBtn\" type=\"button\" hidden>Conecteaz\u0103-te</button>\n      <button class=\"btn pri\" id=\"installBtn\" type=\"button\" hidden>Instaleaz\u0103 aplica\u021bia</button>\n      <button class=\"btn\" id=\"fbBtn\" type=\"button\" hidden title=\"Trimite o sugestie sau o problem\u0103\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z\"/><path d=\"M8.5 10.5h7M8.5 14h4\"/></svg><span class=\"lbl\">Feedback</span></button>\n      <button class=\"btn ic\" id=\"helpBtn\" type=\"button\" title=\"Cum lucrezi cu ElectroPlan\" aria-label=\"Ajutor\" style=\"font-weight:700;min-width:34px;justify-content:center\">?</button>\n      <button class=\"btn ic\" id=\"undoBtn\" type=\"button\" title=\"Anuleaz\u0103 (Ctrl+Z)\" aria-label=\"Anuleaz\u0103\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10.5a5.5 5.5 0 0 1 0 11H11\"/></svg></button>\n      <button class=\"btn ic\" id=\"redoBtn\" type=\"button\" title=\"Ref\u0103 (Ctrl+Y)\" aria-label=\"Ref\u0103\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15 14 5-5-5-5\"/><path d=\"M20 9H9.5a5.5 5.5 0 0 0 0 11H13\"/></svg></button>\n      <button class=\"btn\" id=\"ioBtn\" type=\"button\" title=\"Salvare / import\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v12M7 10l5 5 5-5M5 21h14\"/></svg><span class=\"lbl\">Salvare / import</span></button>\n    </div>\n  </header>\n  <main>\n    <section class=\"view plan\" id=\"v-plan\">\n      <div class=\"tools\" id=\"tools\"></div>\n      <div class=\"fly\" id=\"fly\" hidden></div>\n      <div class=\"stage\" id=\"stage\">\n        <canvas id=\"cv\"></canvas>\n        <div class=\"statc\" id=\"statc\"></div>\n        <div class=\"selbar\" id=\"selbar\"></div>\n        <div class=\"measBar\" id=\"measBar\" hidden></div>\n        <div class=\"ovl\" id=\"elev\" hidden><div class=\"ov-h\"><b id=\"elevT\"></b><button class=\"btn ic\" type=\"button\" data-ev-n=\"-1\" aria-label=\"Peretele anterior\">\u2039</button><div class=\"ov-tabs\" id=\"elevTabs\"></div><button class=\"btn ic\" type=\"button\" data-ev-n=\"1\" aria-label=\"Peretele urm\u0103tor\">\u203a</button><span class=\"muted\" id=\"elevInfo\" style=\"font-size:12px;flex:1;min-width:160px\"></span><button class=\"btn ic\" type=\"button\" data-ov-x aria-label=\"\u00cenchide\">\u2715</button></div><canvas id=\"ecv\"></canvas></div>\n        <div class=\"ovl\" id=\"v3d\" hidden><div class=\"ov-h\"><b>Vedere 3D</b><span class=\"muted\" id=\"v3dHint\" style=\"font-size:12px;flex:1;min-width:160px\">Un deget rote\u0219te, dou\u0103 degete m\u0103resc \u0219i mut\u0103. Trage de o priz\u0103 sau de un \u00eentrerup\u0103tor ca s\u0103-l mu\u021bi.</span><span id=\"v3dSel\" class=\"v3sel\" hidden></span><select id=\"v3dRoom\" class=\"chipsel\" aria-label=\"Camer\u0103\"></select><select id=\"v3dIso\" class=\"chipsel\" aria-label=\"Circuit\"></select><button class=\"chip\" type=\"button\" id=\"v3dWalls\" aria-pressed=\"true\">Pere\u021bi</button><button class=\"btn\" type=\"button\" id=\"v3dReset\">Vedere ini\u021bial\u0103</button><button class=\"btn ic\" type=\"button\" data-ov-x aria-label=\"\u00cenchide\">\u2715</button></div><div id=\"v3dBox\"></div></div>\n        <input class=\"nameEd\" id=\"nameEd\" hidden aria-label=\"Numele camerei\" autocomplete=\"off\">\n        <div class=\"hud\">\n          <button class=\"btn ic\" id=\"zOut\" type=\"button\" aria-label=\"Mic\u0219oreaz\u0103\">\u2212</button>\n          <span class=\"zpct\" id=\"zPct\" title=\"Scara aproximativ\u0103 pe ecran\">1:50</span>\n          <button class=\"btn ic\" id=\"zIn\" type=\"button\" aria-label=\"M\u0103re\u0219te\">+</button>\n          <button class=\"btn\" id=\"zFit\" type=\"button\" title=\"Centreaz\u0103 pe elementul selectat sau pe tot planul (dubl\u0103 atingere pe plan)\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 2v4M12 18v4M2 12h4M18 12h4\"/></svg><span class=\"lbl\" id=\"zFitL\">Centreaz\u0103</span></button>\n          <select id=\"lvSel\" class=\"chipsel on\" aria-label=\"Nivel\"></select>\n          <select id=\"isoSel\" class=\"chipsel\" aria-label=\"Arat\u0103 traseul\"></select>\n          <div class=\"layers lq\" id=\"layersQ\"></div>\n          <button class=\"btn\" id=\"hudMoreBtn\" type=\"button\" aria-expanded=\"false\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M4 6h16M4 12h16M4 18h10\"/></svg><span class=\"lbl\">Afi\u0219are</span></button>\n          <div class=\"hudMore\" id=\"hudMore\" hidden>\n          <button class=\"btn ic\" id=\"rot90\" type=\"button\" title=\"Rote\u0219te planul cu 90\u00b0\" aria-label=\"Rote\u0219te planul cu 90\u00b0\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 11a8 8 0 1 0-2.3 5.7\"/><path d=\"M20 4v7h-7\"/></svg></button>\n          <button class=\"btn\" id=\"rotReset\" type=\"button\" hidden>\u00cendreapt\u0103</button>\n          <button class=\"btn\" id=\"bgBtn\" type=\"button\" title=\"Planul primit de la arhitect, ca fundal\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><path d=\"M14 3v6h6M9 15h6M9 18h4\"/></svg><span class=\"lbl\">Plan arhitect</span></button>\n          <span class=\"scale\" id=\"scaleLbl\"></span>\n          <div class=\"layers\" id=\"layers\"></div>\n          <button class=\"btn\" id=\"focusBtn\" type=\"button\" aria-pressed=\"false\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5\"/></svg><span class=\"lbl\">Ecran mare</span></button>\n          </div>\n        </div>\n      </div>\n      <aside class=\"inspector\" id=\"insp\" aria-live=\"polite\" hidden></aside>\n    </section>\n    <section class=\"view doc\" id=\"v-calcul\" hidden></section>\n    <section class=\"view doc\" id=\"v-materiale\" hidden></section>\n    <section class=\"view doc\" id=\"v-oferta\" hidden></section>\n    <section class=\"view doc\" id=\"v-lucrari\" hidden></section>\n    <section class=\"view doc\" id=\"v-admin\" hidden></section>\n  </main>\n</div>\n\n<div class=\"upd\" id=\"updBar\" role=\"status\" hidden><span>Versiune nou\u0103 disponibil\u0103.</span><button class=\"btn pri\" type=\"button\" id=\"updGo\">Actualizeaz\u0103</button><button class=\"x\" type=\"button\" id=\"updX\" aria-label=\"Mai t\u00e2rziu\">\u00d7</button></div>\n<dialog id=\"guideDlg\">\n  <div class=\"dl\">\n    <div><h2>Cum lucrezi cu ElectroPlan</h2><p class=\"muted\" style=\"margin:0\">Patru pa\u0219i, de la casa goal\u0103 la oferta pentru client.</p></div>\n    <ol class=\"guide\">\n      <li><b>Deseneaz\u0103 planul.</b> Alege <i>Schi\u021b\u0103</i> \u0219i trage cu degetul sau penul conturul casei \u0219i pere\u021bii dintre camere, apoi apas\u0103 <i>Genereaz\u0103 planul</i>. Sau folose\u0219te <i>Camer\u0103</i> \u0219i trage dreptunghiuri.</li>\n      <li><b>M\u0103soar\u0103 camerele.</b> Atinge o camer\u0103 \u0219i apas\u0103 <i>M\u0103soar\u0103</i>: scrii lungimile cu telemetrul sau ruleta, iar planul se ajusteaz\u0103. Pune u\u0219ile \u0219i ferestrele.</li>\n      <li><b>Pune aparatele.</b> Din grupurile din st\u00e2nga alegi prize, lumini, \u00eentrerup\u0103toare, consumatori \u0219i tabloul, apoi atingi peretele. Circuitele \u0219i traseele se calculeaz\u0103 singure, dup\u0103 I7.</li>\n      <li><b>Scoate documentele.</b> La <i>Circuite</i> verifici tabloul, la <i>Materiale</i> completezi pre\u021burile o singur\u0103 dat\u0103, iar la <i>Documente</i> descarci proiectul tehnic \u0219i oferta pentru client.</li>\n    </ol>\n    <label class=\"ck\"><input type=\"checkbox\" id=\"guideOff\"> Nu mai afi\u0219a la proiectele noi</label>\n    <div class=\"bar\" style=\"justify-content:flex-end\"><button class=\"btn pri\" type=\"button\" id=\"guideOk\">Am \u00een\u021beles</button></div>\n  </div>\n</dialog>\n<dialog id=\"fbDlg\">\n  <form class=\"dl\" id=\"fbF\">\n    <div><h2>Feedback</h2><p class=\"muted\" style=\"margin:0\">Spune-ne ce ai vrea s\u0103 apar\u0103, ce nu \u00ee\u021bi place sau ce nu merge. Citim fiecare mesaj.</p></div>\n    <div class=\"bar\" role=\"radiogroup\" aria-label=\"Tip\" id=\"fbKinds\"><button class=\"chip\" type=\"button\" data-fbk=\"vreau\" aria-pressed=\"true\">A\u0219 vrea s\u0103 apar\u0103</button><button class=\"chip\" type=\"button\" data-fbk=\"nu_place\" aria-pressed=\"false\">Nu \u00eemi place</button><button class=\"chip\" type=\"button\" data-fbk=\"bug\" aria-pressed=\"false\">Nu merge</button></div>\n    <label class=\"f\">Mesajul t\u0103u<textarea id=\"fbText\" rows=\"5\" maxlength=\"4000\" style=\"font-family:inherit;font-size:15px;min-height:130px\" placeholder=\"ex. A\u0219 vrea s\u0103 pot pune \u0219i o priz\u0103 de pardoseal\u0103.\"></textarea></label>\n    <p class=\"muted\" id=\"fbCtx\" style=\"margin:0;font-size:12px\"></p>\n    <div class=\"bar\" style=\"justify-content:flex-end\"><button class=\"btn\" type=\"button\" id=\"fbC\">Renun\u021b\u0103</button><button class=\"btn pri\" type=\"submit\" id=\"fbGo\">Trimite</button></div>\n  </form>\n</dialog>\n<dialog id=\"bgDlg\"></dialog>\n<dialog id=\"accDlg\">\n  <form class=\"dl\" id=\"accF\">\n    <div><h2>Cont ElectroPlan</h2><p class=\"muted\" style=\"margin:0\" id=\"accH\">Te conectezi cu adresa de e-mail. Proiectele se salveaz\u0103 online \u0219i apar pe orice dispozitiv pe care te conectezi.</p></div>\n    <label class=\"f\" id=\"accEL\">Adresa de e-mail<input id=\"accE\" type=\"email\" inputmode=\"email\" autocomplete=\"email\" placeholder=\"nume@exemplu.ro\"></label>\n    <div class=\"bar\" style=\"justify-content:flex-end\"><button class=\"btn\" type=\"button\" id=\"accC\">\u00cenchide</button><button class=\"btn dng\" type=\"button\" id=\"accOut\" hidden>Deconecteaz\u0103-te</button><button class=\"btn\" type=\"button\" id=\"accSync\" hidden>Sincronizeaz\u0103 acum</button><button class=\"btn pri\" type=\"submit\" id=\"accGo\">Trimite linkul de conectare</button></div>\n  </form>\n</dialog>\n<dialog id=\"dimDlg\">\n  <form class=\"dl\" id=\"dimF\">\n    <div><h2 id=\"dimT\">Lungime perete</h2><p class=\"muted\" id=\"dimH\" style=\"margin:0\"></p></div>\n    <label class=\"f\">Lungime m\u0103surat\u0103 (cm)<input id=\"dimV\" type=\"number\" inputmode=\"decimal\" min=\"50\" max=\"5000\" step=\"1\" required></label>\n    <div class=\"bar\" style=\"justify-content:flex-end\"><button class=\"btn\" type=\"button\" id=\"dimC\">Renun\u021b\u0103</button><button class=\"btn pri\" type=\"submit\">Aplic\u0103</button></div>\n  </form>\n</dialog>\n<dialog id=\"adjDlg\">\n  <form class=\"dl\" id=\"adjF\">\n    <div><h2>Camer\u0103 al\u0103turat\u0103</h2><p class=\"muted\" style=\"margin:0\" id=\"adjH\"></p></div>\n    <div class=\"fields\">\n      <label class=\"f full\">Unde<select id=\"adjD\"><option value=\"r\">La dreapta</option><option value=\"d\">Dedesubt</option><option value=\"l\">La st\u00e2nga</option><option value=\"u\">Deasupra</option></select></label>\n      <label class=\"f\">L\u0103\u021bime (cm)<input id=\"adjW\" type=\"number\" inputmode=\"decimal\" min=\"50\" max=\"5000\" step=\"1\" required></label>\n      <label class=\"f\">Lungime (cm)<input id=\"adjL\" type=\"number\" inputmode=\"decimal\" min=\"50\" max=\"5000\" step=\"1\" required></label>\n      <label class=\"f full\">Tip<select id=\"adjT\"></select></label>\n    </div>\n    <div class=\"bar\" style=\"justify-content:flex-end\"><button class=\"btn\" type=\"button\" id=\"adjC\">Renun\u021b\u0103</button><button class=\"btn pri\" type=\"submit\">Adaug\u0103 camera</button></div>\n  </form>\n</dialog>\n<dialog id=\"dlg\">\n  <div class=\"dl\">\n    <div>\n      <h2>Salvare \u0219i import</h2>\n      <p class=\"muted\" style=\"margin:0\">C\u00e2nd deschizi aplica\u021bia din linkul Claude, proiectele se salveaz\u0103 \u00een contul t\u0103u \u0219i apar pe orice dispozitiv. Textul de mai jos e o copie de siguran\u021b\u0103 a proiectului curent.</p>\n    </div>\n    <textarea id=\"ioText\" aria-label=\"Proiect \u00een format JSON\"></textarea>\n    <div class=\"bar\">\n      <button class=\"btn pri\" id=\"ioCopy\" type=\"button\">Copiaz\u0103 proiectul</button>\n      <button class=\"btn\" id=\"ioImport\" type=\"button\">Import\u0103 textul lipit</button>\n      <label class=\"btn\" for=\"ioFile\">\u00cencarc\u0103 fi\u0219ier .json</label>\n      <input type=\"file\" id=\"ioFile\" accept=\".json,application/json\" hidden>\n    </div>\n    <div class=\"bar\" style=\"justify-content:space-between\">\n      <button class=\"btn dng\" id=\"ioDel\" type=\"button\">\u0218terge proiectul curent</button>\n      <button class=\"btn\" id=\"ioClose\" type=\"button\">\u00cenchide</button>\n    </div>\n  </div>\n</dialog>\n\n");})();

(()=>{
const U=230,GAMMA=56,STD=[6,10,16,20,25,32,40,50,63],MAINS=[25,32,40,50,63],PANELS=[8,12,18,24,36,48,54,72];
const SECTS=[1.5,2.5,4,6,10,16],IZ={1.5:16,2.5:21,4:28,6:36,10:50,16:66};
const T={
  priza:{n:'Priză simplă',g:'priza',w:200,h:.3,code:'P'},
  priza2:{n:'Priză dublă',g:'priza',w:400,h:.3,code:'P2'},
  prizaip:{n:'Priză IP44',g:'priza',w:200,h:1.1,code:'IP'},
  prizaM:{n:'Priză multiplă',g:'priza',w:200,h:.3,code:'P'},
  tv:{n:'Priză TV',g:'priza',w:400,h:.5,code:'TV'},
  lumina:{n:'Plafonieră',g:'lum',w:60,h:'ceil',code:'L'},
  spot:{n:'Spot',g:'lum',w:10,h:'ceil',code:'S'},
  aplica:{n:'Aplică',g:'lum',w:40,h:2,code:'A'},
  intr:{n:'Întrerupător simplu',g:'intr',w:0,h:1.1,code:'I'},
  intr2:{n:'Întrerupător dublu',g:'intr',w:0,h:1.1,code:'I2'},
  intrCS:{n:'Întrerupător cap scară',g:'intr',w:0,h:1.1,code:'CS'},
  intrCR:{n:'Întrerupător cruce',g:'intr',w:0,h:1.1,code:'CR'},
  msr:{n:'Mașină de spălat rufe',g:'ded',w:2200,h:.6,code:'MSR',conn:'priza'},
  msv:{n:'Mașină de spălat vase',g:'ded',w:2000,h:.4,code:'MSV',conn:'priza'},
  cuptor:{n:'Cuptor electric',g:'ded',w:3500,h:.5,code:'CPT',conn:'racord'},
  plita:{n:'Plită inducție',g:'ded',w:7200,h:.6,code:'PLT',conn:'racord'},
  ac:{n:'Aer condiționat',g:'ded',w:2600,h:2.2,code:'AC',conn:'racord',curve:'C',cos:.9},
  boiler:{n:'Boiler electric',g:'ded',w:2000,h:1.8,code:'BOI',conn:'racord'},
  feon:{n:'Feon (uscător de păr)',g:'ded',w:2000,h:1.1,code:'FEN',conn:'priza'},
  vent:{n:'Ventilator aerisire',g:'ded',w:40,h:2.2,code:'VNT',conn:'racord',onLum:true},
  ded:{n:'Consumator dedicat',g:'ded',w:2000,h:.6,code:'D',conn:'racord'},
  trecere:{n:'Trecere între niveluri',g:'aux',w:0,h:0,code:'TR'},
  tablou:{n:'Tablou electric',g:'tab',w:0,h:1.6,code:'TE'}
};
const TOOLS=[['Plan',['select','schita','scris','room','usa','geam','gol']],['Structură',['rez','grinda']],['Doze',['dozaS','dozaM','dozaL']],['Prize',['priza','priza2','prizaM','prizaip','tv']],['Iluminat',['lumina','spot','aplica','intr','intr2','intrCS','intrCR']],['Consumatori',['msr','msv','cuptor','plita','ac','boiler','feon','vent','ded']],['Alimentare',['tablou','trecere']]];
const JB={s:{n:'Doză Ø80',cap:4,lbl:'Ø80 mm',k:5},m:{n:'Doză 100×100',cap:6,lbl:'100×100 mm',k:6},l:{n:'Doză 160×100',cap:10,lbl:'160×100 mm',k:8},xl:{n:'Doză 200×150',cap:16,lbl:'200×150 mm',k:10}};
const JBT={dozaS:'s',dozaM:'m',dozaL:'l'};
const SHORT={intrCS:'Cap scară',intrCR:'Cruce',scris:'Scris',trecere:'Trecere nivel',schita:'Schiță',gol:'Gol perete',prizaM:'Priză 1–5',dozaS:'Doză mică',dozaM:'Doză medie',dozaL:'Doză mare',tv:'Priză TV',select:'Selectează',room:'Cameră',usa:'Ușă',geam:'Fereastră',rez:'Perete rez.',grinda:'Grindă',priza:'Priză',priza2:'Priză dublă',prizaip:'Priză IP44',lumina:'Plafonieră',spot:'Spot',aplica:'Aplică',intr:'Întrerupător',intr2:'Întrer. dublu',msr:'Mașină rufe',msv:'Mașină vase',cuptor:'Cuptor',plita:'Plită',ac:'Aer cond.',boiler:'Boiler',feon:'Feon',vent:'Ventilator',ded:'Alt consumator',tablou:'Tablou'};
const RT={living:'Living',dormitor:'Dormitor',bucatarie:'Bucătărie',baie:'Baie',hol:'Hol',birou:'Birou',debara:'Debara',altul:'Altă cameră'};
const ST={todo:'De făcut',doing:'În lucru',done:'Finalizat'};
const KEY0='electroplan.v1';let KEY=KEY0;
const $=s=>document.querySelector(s);
const uid=()=>Math.random().toString(36).slice(2,10);
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const f=(n,d=1)=>Number(n).toFixed(d).replace('.',',');
const fS=s=>String(s).replace('.',',');
const r05=v=>Math.round(v*20)/20;

const hOf=(p,i)=>{const t=T[i.type];return i.h!=null&&i.h!==''?+i.h:(t.h==='ceil'?p.H:t.h)};
const BOXN={2:'Doză de aparataj rotundă Ø68 (2 module)',3:'Doză de aparataj modulară 3M (503)',4:'Doză de aparataj modulară 4M (504)',7:'Doză de aparataj modulară 7M'};
const stOf=(p,it)=>it.st||p.sockType||'schuko';
const WM={caramida:'cărămidă',bca:'BCA',beton:'beton',gips:'gips-carton'};
const WMULT={caramida:1,bca:.8,beton:2,gips:.5};
const wmOf=(p,r)=>(r&&r.wall)||p.wallMat||'caramida';
function onRez(p,o,c,t){return(p.struct||[]).some(x=>x.k==='rez'&&x.o===o&&Math.abs(x.c-c)<.03&&t>=Math.min(x.a,x.b)-.03&&t<=Math.max(x.a,x.b)+.03)}
function matAt(p,pt,rid){
  if(onRez(p,'h',pt.y,pt.x)||onRez(p,'v',pt.x,pt.y))return'beton';
  let r=rid&&p.rooms.find(x=>x.id===rid);
  if(!r)r=p.rooms.find(x=>pt.x>=x.x-.03&&pt.x<=x.x+x.w+.03&&pt.y>=x.y-.03&&pt.y<=x.y+x.h+.03);
  return wmOf(p,r&&r.of?p.rooms.find(x=>x.id===r.of)||r:r);
}
function legWall(p,A,B){
  const h=Math.abs(A.y-B.y)<1e-6,c=h?A.y:A.x,lo=Math.min(h?A.x:A.y,h?B.x:B.y),hi=Math.max(h?A.x:A.y,h?B.x:B.y);
  for(const r of p.rooms){const E=h?[[r.y,r.x,r.x+r.w],[r.y+r.h,r.x,r.x+r.w]]:[[r.x,r.y,r.y+r.h],[r.x+r.w,r.y,r.y+r.h]];for(const[ec,el,eh]of E)if(Math.abs(ec-c)<.03&&Math.min(hi,eh)-Math.max(lo,el)>(hi-lo)*.5)return r}
  return null;
}
function chaseOf(p,out,z){
  const ch={};const add=(m,k,v)=>{ch[m]=ch[m]||{m:0,dz:0};ch[m][k]+=v};
  for(const s of out.segs){
    const sz=s.z??z;if(Math.abs(s.fh-sz)>.01)add(matAt(p,s.a,s.ra),'m',Math.abs(s.fh-sz));
    if(Math.abs(s.th-sz)>.01)add(matAt(p,s.b,s.rb),'m',Math.abs(s.th-sz));
    for(let k=0;k+1<s.pts.length;k++){const A=s.pts[k],B=s.pts[k+1],r=legWall(p,A,B);if(!r)continue;const mid={x:(A.x+B.x)/2,y:(A.y+B.y)/2};add(matAt(p,mid,r.id),'m',Math.abs(A.x-B.x)+Math.abs(A.y-B.y))}
  }
  for(const it of p.items){if(T[it.type].h==='ceil'||!out.by[it.id])continue;const n=(T[it.type].g==='priza'||T[it.type].g==='intr')?(p.aparataj==='modular'?devInfo(p,it).boxes.length:devInfo(p,it).cls):1;add(matAt(p,it,it.room),'dz',n)}
  for(const q of out.phys)if(q.cis.length)add(matAt(p,q,null),'dz',1);
  return ch;
}
const nOf=i=>clamp(Math.round(+i.n||3),1,5);
const ptsOf=i=>i.type==='prizaM'?nOf(i):1;
const codeOf=i=>i.type==='prizaM'?(nOf(i)>1?'P'+nOf(i):'P'):T[i.type].code;
const wOf=i=>i.w!=null&&i.w!==''?+i.w:i.type==='prizaM'?200+100*(nOf(i)-1):T[i.type].w;
let lastN=3;
const dRoom=(r,q)=>Math.max(r.x-q.x,0,q.x-r.x-r.w)+Math.max(r.y-q.y,0,q.y-r.y-r.h);
const dEnds=d=>[d.t-d.w/2,d.t+d.w/2];
const dPt=(d,t,n)=>d.o==='h'?{x:t,y:d.c+n}:{x:d.c+n,y:t};
const onLine=(d,it)=>Math.abs((d.o==='h'?it.y:it.x)-d.c)<.02;
const along=(d,it)=>d.o==='h'?it.x:it.y;
const chOf=r=>r&&r.ch&&r.ch.k&&r.ch.a>0&&r.ch.b>0?r.ch:null;
function chPts(r){const c=chOf(r);if(!c)return null;const L=r.x,Rr=r.x+r.w,T=r.y,B=r.y+r.h,a=Math.min(c.a,c.fill?r.w:r.w-.1),b=Math.min(c.b,c.fill?r.h:r.h-.1);
  return c.k==='tl'?{c:{x:L,y:T},p:{x:L+a,y:T},q:{x:L,y:T+b},a,b}:c.k==='tr'?{c:{x:Rr,y:T},p:{x:Rr-a,y:T},q:{x:Rr,y:T+b},a,b}:c.k==='bl'?{c:{x:L,y:B},p:{x:L+a,y:B},q:{x:L,y:B-b},a,b}:{c:{x:Rr,y:B},p:{x:Rr-a,y:B},q:{x:Rr,y:B-b},a,b}}
function inCut(r,x,y){const t=chPts(r);if(!t)return false;const u=(x-t.c.x)/(t.p.x-t.c.x),v=(y-t.c.y)/(t.q.y-t.c.y);return u>1e-6&&v>1e-6&&u+v<1-1e-6}
function roomPoly(r){const L=r.x,Rr=r.x+r.w,T=r.y,B=r.y+r.h,t=chPts(r),c=chOf(r),P4=[{x:L,y:T},{x:Rr,y:T},{x:Rr,y:B},{x:L,y:B}];if(!t)return P4;
  const i={tl:0,tr:1,br:2,bl:3}[c.k],rep=c.k==='tl'?[t.q,t.p]:c.k==='tr'?[t.p,t.q]:c.k==='br'?[t.q,t.p]:[t.p,t.q];return[...P4.slice(0,i),...rep,...P4.slice(i+1)]}
const areaR=r=>r.w*r.h-(chPts(r)?chPts(r).a*chPts(r).b/2:0);
function diagOf(r){const t=chPts(r);if(!t)return null;const dx=t.q.x-t.p.x,dy=t.q.y-t.p.y,l=Math.hypot(dx,dy),mx=(t.p.x+t.q.x)/2,my=(t.p.y+t.q.y)/2;let nx=-dy/l,ny=dx/l;if((t.c.x-mx)*nx+(t.c.y-my)*ny>0){nx=-nx;ny=-ny}return{p:t.p,q:t.q,len:l,ux:dx/l,uy:dy/l,nx,ny}}
function onDiag(r,x,y,tol){const d=diagOf(r);if(!d)return null;const px=x-d.p.x,py=y-d.p.y,t=px*d.ux+py*d.uy,n=Math.abs(px*d.nx+py*d.ny);if(t<-.05||t>d.len+.05||n>tol)return null;const tt=clamp(t,.05,d.len-.05);return{t:tt,x:+(d.p.x+d.ux*tt).toFixed(3),y:+(d.p.y+d.uy*tt).toFixed(3),dist:n}}
function rEdges(r){const t=chPts(r),c=chOf(r),E=[{o:'h',c:r.y,lo:r.x,hi:r.x+r.w,s:1},{o:'h',c:r.y+r.h,lo:r.x,hi:r.x+r.w,s:-1},{o:'v',c:r.x,lo:r.y,hi:r.y+r.h,s:1},{o:'v',c:r.x+r.w,lo:r.y,hi:r.y+r.h,s:-1}];if(!t)return E;
  const top=c.k[0]==='t',left=c.k[1]==='l',eh=E[top?0:1],ev=E[left?2:3];if(left)eh.lo=t.p.x;else eh.hi=t.p.x;if(top)ev.lo=t.q.y;else ev.hi=t.q.y;return E}
function cutHit(pts,rooms){const cr=rooms.filter(chOf);if(!cr.length)return false;for(let i=0;i+1<pts.length;i++){const a=pts[i],b=pts[i+1],n=Math.max(1,Math.ceil((Math.abs(b.x-a.x)+Math.abs(b.y-a.y))/.08));for(let k=1;k<n;k++){const x=a.x+(b.x-a.x)*k/n,y=a.y+(b.y-a.y)*k/n;if(cr.some(r=>inCut(r,x,y))&&!rooms.some(r=>x>r.x+.01&&x<r.x+r.w-.01&&y>r.y+.01&&y<r.y+r.h-.01&&!inCut(r,x,y)))return true}}return false}
function drawChDoor(r){const c=chOf(r);if(!c||!c.door)return;const d=diagOf(r),w=Math.min(c.door.w,d.len-.1),t0=(d.len-w)/2,A={x:d.p.x+d.ux*t0,y:d.p.y+d.uy*t0},B={x:A.x+d.ux*w,y:A.y+d.uy*w};
  ctx.save();ctx.globalAlpha=1;ctx.strokeStyle=C.room;ctx.lineWidth=clamp(view.s*.1,2,7)+2;ctx.beginPath();ctx.moveTo(sx(A.x),sy(A.y));ctx.lineTo(sx(B.x),sy(B.y));ctx.stroke();
  ctx.strokeStyle=C.wall;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(sx(A.x),sy(A.y));ctx.lineTo(sx(A.x+d.nx*w),sy(A.y+d.ny*w));ctx.stroke();
  const a0=Math.atan2(d.ny,d.nx),a1=Math.atan2(d.uy,d.ux),df=Math.atan2(Math.sin(a1-a0),Math.cos(a1-a0));ctx.setLineDash([4,4]);ctx.lineWidth=1.2;ctx.beginPath();for(let k=0;k<=16;k++){const a=a0+df*k/16,X=sx(A.x+Math.cos(a)*w),Y=sy(A.y+Math.sin(a)*w);k?ctx.lineTo(X,Y):ctx.moveTo(X,Y)}ctx.stroke();ctx.restore()}
function rPath(r){ctx.beginPath();roomPoly(r).forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.closePath()}
const roomAtPt=(p,q)=>p.rooms.find(r=>q.x>r.x+1e-6&&q.x<r.x+r.w-1e-6&&q.y>r.y+1e-6&&q.y<r.y+r.h-1e-6&&!inCut(r,q.x,q.y))||null;
const rootOf=(p,r)=>r&&r.of?p.rooms.find(x=>x.id===r.of)||r:r;
const doorRooms=(p,d)=>({sw:rootOf(p,roomAtPt(p,dPt(d,d.t,d.s*.15))),ot:rootOf(p,roomAtPt(p,dPt(d,d.t,-d.s*.15)))});
function sharedSeg(a,b){
  const ov=(l1,h1,l2,h2)=>[Math.max(l1,l2),Math.min(h1,h2)];
  for(const[c1,c2]of[[a.x+a.w,b.x],[b.x+b.w,a.x]])if(Math.abs(c1-c2)<.02){const[lo,hi]=ov(a.y,a.y+a.h,b.y,b.y+b.h);if(hi-lo>=.3)return{o:'v',c:c1,a:lo,b:hi}}
  for(const[c1,c2]of[[a.y+a.h,b.y],[b.y+b.h,a.y]])if(Math.abs(c1-c2)<.02){const[lo,hi]=ov(a.x,a.x+a.w,b.x,b.x+b.w);if(hi-lo>=.3)return{o:'h',c:c1,a:lo,b:hi}}
  return null;
}
const onGol=(p,o,c,t)=>(p.struct||[]).some(x=>x.k==='gol'&&x.o===o&&Math.abs(x.c-c)<.02&&t>=Math.min(x.a,x.b)-.02&&t<=Math.max(x.a,x.b)+.02);
const roomSpan=(r,d)=>d.o==='h'?[r.x,r.x+r.w]:[r.y,r.y+r.h];
function behindLeaf(d,t){const[a,b]=dEnds(d);return d.hinge?(t>b&&t<b+d.w):(t<a&&t>a-d.w)}
function switchOk(p,d,room){
  const[a,b]=dEnds(d),swing=(doorRooms(p,d).sw||{}).id===room.id;
  return p.items.some(it=>{
    if(it.room!==room.id||T[it.type].g!=='intr'||!onLine(d,it))return false;
    const t=along(d,it),gap=Math.max(a-t,t-b);
    return gap>=.1&&gap<=.45&&!(swing&&behindLeaf(d,t));
  });
}
function switchSpot(p,d,room){
  const[a,b]=dEnds(d),off=clamp(+p.swOff||.2,.1,.3),[lo,hi]=roomSpan(room,d);
  const hand=d.hinge?a-off:b+off,hing=d.hinge?b+off:a-off,swing=(doorRooms(p,d).sw||{}).id===room.id;
  for(const t of swing?[hand]:[hand,hing])if(t>=lo+.1&&t<=hi-.1)return dPt(d,Math.round(t*100)/100,0);
  return null;
}
function cleanPts(pts){
  const o=[];for(const q of pts){const l=o[o.length-1];if(l&&Math.abs(l.x-q.x)<1e-6&&Math.abs(l.y-q.y)<1e-6)continue;o.push({x:q.x,y:q.y})}
  for(let i=1;i<o.length-1;){const a=o[i-1],b=o[i],c=o[i+1];if((Math.abs(a.x-b.x)<1e-6&&Math.abs(b.x-c.x)<1e-6)||(Math.abs(a.y-b.y)<1e-6&&Math.abs(b.y-c.y)<1e-6))o.splice(i,1);else i++}
  return o;
}
function legsOf(pts){const o=[pts[0]];for(let i=1;i<pts.length;i++){const a=o[o.length-1],b=pts[i];if(Math.abs(a.x-b.x)>1e-6&&Math.abs(a.y-b.y)>1e-6)o.push({x:b.x,y:a.y});o.push(b)}return cleanPts(o)}
function crossRect(p1,p2,rc,e=.03){const x1=Math.min(p1.x,p2.x),x2=Math.max(p1.x,p2.x),y1=Math.min(p1.y,p2.y),y2=Math.max(p1.y,p2.y);return x2>rc.x+e&&x1<rc.x+rc.w-e&&y2>rc.y+e&&y1<rc.y+rc.h-e}
function pathOk(pts,F,e){for(let i=0;i+1<pts.length;i++)for(const rc of F)if(crossRect(pts[i],pts[i+1],rc,e))return false;return true}
const pathLen=pts=>{let l=0;for(let i=0;i+1<pts.length;i++)l+=Math.abs(pts[i+1].x-pts[i].x)+Math.abs(pts[i+1].y-pts[i].y);return l};
function closedWalls(p){
  if(p.through==='perete')return[];
  const roots=p.rooms.filter(r=>!r.of),grp=id=>p.rooms.filter(z=>z.id===id||z.of===id),out=[];
  for(let i=0;i<roots.length;i++)for(let j=i+1;j<roots.length;j++)for(const A of grp(roots[i].id))for(const B of grp(roots[j].id)){const sg=sharedSeg(A,B);if(!sg)continue;
    const ops=[...p.doors.filter(d=>d.o===sg.o&&Math.abs(d.c-sg.c)<.02).map(d=>dEnds(d)),...(p.struct||[]).filter(g=>g.k==='gol'&&g.o===sg.o&&Math.abs(g.c-sg.c)<.02).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)])].sort((x,y)=>x[0]-y[0]);
    let lo=sg.a;for(const[o0,o1]of ops){if(o1<=lo||o0>=sg.b)continue;if(o0>lo)out.push({o:sg.o,c:sg.c,lo,hi:o0});lo=Math.max(lo,o1)}if(lo<sg.b)out.push({o:sg.o,c:sg.c,lo,hi:sg.b})}
  return out.filter(w=>w.hi-w.lo>.05);
}
function crossW(pts,Wc){
  if(!Wc||!Wc.length)return false;const e=.01;
  for(const w of Wc){const v=w.o==='v',X=q=>v?q.x:q.y,Y=q=>v?q.y:q.x,inn=q=>Y(q)>=w.lo-e&&Y(q)<=w.hi+e;
    for(let k=0;k+1<pts.length;k++){const A=pts[k],B=pts[k+1];if(Math.abs(Y(A)-Y(B))<1e-6&&inn(A)&&Math.min(X(A),X(B))<w.c-e&&Math.max(X(A),X(B))>w.c+e)return true}
    for(let k=1;k+1<pts.length;k++){const A=pts[k-1],M=pts[k],B=pts[k+1];if(Math.abs(X(M)-w.c)<e&&inn(M)&&(X(A)-w.c)*(X(B)-w.c)<-e*e)return true}}
  return false;
}
function routeAuto(a,b,F,rooms,Wc){
  const okP=q=>(!F.length||pathOk(q,F,-.1))&&!crossW(q,Wc)&&!cutHit(q,rooms);
  const c1=cleanPts([a,{x:b.x,y:a.y},b]);if(okP(c1))return c1;
  const c2=cleanPts([a,{x:a.x,y:b.y},b]);if(okP(c2))return c2;
  const st=.1,xs=[a.x,b.x,...rooms.flatMap(r=>[r.x,r.x+r.w])],ys=[a.y,b.y,...rooms.flatMap(r=>[r.y,r.y+r.h])];
  const x0=Math.floor(Math.min(...xs)/st)*st-.5,y0=Math.floor(Math.min(...ys)/st)*st-.5,nx=Math.ceil((Math.max(...xs)+.5-x0)/st)+1,ny=Math.ceil((Math.max(...ys)+.5-y0)/st)+1;
  if(nx*ny>90000)return c1;
  const inF=(x,y)=>(Math.abs(x-a.x)+Math.abs(y-a.y)>.16&&Math.abs(x-b.x)+Math.abs(y-b.y)>.16&&F.some(rc=>x>rc.x-.1&&x<rc.x+rc.w+.1&&y>rc.y-.1&&y<rc.y+rc.h+.1))||!rooms.some(r=>x>=r.x-.001&&x<=r.x+r.w+.001&&y>=r.y-.001&&y<=r.y+r.h+.001&&!inCut(r,x,y));
  const blk=new Uint8Array(nx*ny);for(let j=0;j<ny;j++)for(let i=0;i<nx;i++)if(inF(x0+i*st,y0+j*st))blk[j*nx+i]=1;
  const gi=v=>clamp(Math.round((v.x-x0)/st),0,nx-1),gj=v=>clamp(Math.round((v.y-y0)/st),0,ny-1);
  const si=gi(a),sj=gj(a),ti=gi(b),tj=gj(b);blk[sj*nx+si]=0;blk[tj*nx+ti]=0;
  const np=new Uint8Array(nx*ny),eh=new Uint8Array(nx*ny),ev=new Uint8Array(nx*ny),PEN=25;
  for(const w of Wc||[]){const v=w.o==='v',f0=(w.c-(v?x0:y0))/st,r0=Math.round(f0),on=Math.abs(f0-r0)<.01,fl=Math.floor(f0);
    const lo=Math.ceil((w.lo-(v?y0:x0))/st-1e-6),hi=Math.floor((w.hi-(v?y0:x0))/st+1e-6);
    for(let t=Math.max(0,lo);t<=Math.min((v?ny:nx)-1,hi);t++){const u=(v?y0:x0)+t*st;if(u<w.lo-.001||u>w.hi+.001)continue;
      if(on){if(r0>=0&&r0<(v?nx:ny))np[v?t*nx+r0:r0*nx+t]=1}else if(fl>=0&&fl<(v?nx:ny)-1){if(v)eh[t*nx+fl]=1;else ev[fl*nx+t]=1}}}
  const D=[[1,0],[-1,0],[0,1],[0,-1]],N=nx*ny*4,dist=new Float64Array(N).fill(Infinity),prev=new Int32Array(N).fill(-1);
  const H=[];const push=(d,k)=>{H.push([d,k]);let i=H.length-1;while(i){const q=(i-1)>>1;if(H[q][0]<=H[i][0])break;[H[q],H[i]]=[H[i],H[q]];i=q}};
  const pop=()=>{const t=H[0],l=H.pop();if(H.length){H[0]=l;let i=0;for(;;){const a2=2*i+1,b2=a2+1;let m=i;if(a2<H.length&&H[a2][0]<H[m][0])m=a2;if(b2<H.length&&H[b2][0]<H[m][0])m=b2;if(m===i)break;[H[m],H[i]]=[H[i],H[m]];i=m}}return t};
  for(let d=0;d<4;d++){const k=(sj*nx+si)*4+d;dist[k]=0;push(0,k)}
  let end=-1;
  while(H.length){const[dd,k]=pop();if(dd>dist[k])continue;const c=k>>2,d=k&3,i=c%nx,j=(c/nx)|0;if(i===ti&&j===tj){end=k;break}
    for(let nd=0;nd<4;nd++){const ni=i+D[nd][0],nj=j+D[nd][1];if(ni<0||nj<0||ni>=nx||nj>=ny||blk[nj*nx+ni])continue;const pe=((np[nj*nx+ni]&&!(ni===ti&&nj===tj))?PEN:0)+((nd===0?eh[j*nx+i]:nd===1?eh[j*nx+ni]:nd===2?ev[j*nx+i]:ev[nj*nx+i])?PEN:0);const nk=(nj*nx+ni)*4+nd,w=dd+st+(nd!==d?.4:0)+pe;if(w<dist[nk]){dist[nk]=w;prev[nk]=k;push(w,nk)}}}
  if(end<0)return null;
  const g=[];for(let k=end;k>=0;k=prev[k]){const c=k>>2;g.push({x:Math.round((x0+(c%nx)*st)*100)/100,y:Math.round((y0+((c/nx)|0)*st)*100)/100})}
  g.reverse();
  return legsOf([a,...g,b]);
}
function boxAt(r,q,z){
  const E=[{o:'h',c:r.y,lo:r.x,w:'sus'},{o:'h',c:r.y+r.h,lo:r.x,w:'jos'},{o:'v',c:r.x,lo:r.y,w:'stânga'},{o:'v',c:r.x+r.w,lo:r.y,w:'dreapta'}];
  const e=E.find(e=>Math.abs((e.o==='h'?q.y:q.x)-e.c)<.02);
  return{x:q.x,y:q.y,wall:e?e.w:'',dist:e?(e.o==='h'?q.x:q.y)-e.lo:0,z};
}
function boxSpot(p,r,from,z,used,F=[]){
  const E=rEdges(r).map((e,i)=>({...e,w:['sus','jos','stânga','dreapta'][i]}));
  const on=(o,c)=>q=>q.o===o&&Math.abs(q.c-c)<.02;
  const bad=(e,t)=>{
    if(t<e.lo+.15||t>e.hi-.15)return true;
    for(const d of p.doors.filter(on(e.o,e.c))){const[a,b]=dEnds(d);if(t>a-.15&&t<b+.15&&z<2.25)return true}
    for(const w of p.wins.filter(on(e.o,e.c))){const[a,b]=dEnds(w);if(t>a-.15&&t<b+.15&&z>w.sill-.15&&z<w.sill+w.hg+.15)return true}
    for(const st of(p.struct||[]).filter(x=>(x.k==='rez'||x.k==='gol')&&x.o===e.o&&Math.abs(x.c-e.c)<.02))if(t>=Math.min(st.a,st.b)-.05&&t<=Math.max(st.a,st.b)+.05)return true;
    for(const rc of F){const pt=e.o==='h'?{x:t,y:e.c}:{x:e.c,y:t};if(pt.x>=rc.x-.05&&pt.x<=rc.x+rc.w+.05&&pt.y>=rc.y-.05&&pt.y<=rc.y+rc.h+.05)return true}
    for(const u of used)if(Math.abs((e.o==='h'?u.y:u.x)-e.c)<.02&&Math.abs((e.o==='h'?u.x:u.y)-t)<.22)return true;
    return false;
  };
  let best=null;
  for(const e of E){
    const t0=clamp(e.o==='h'?from.x:from.y,e.lo+.15,e.hi-.15);
    for(let i=0;i<=200;i++){let hit=null;for(const sg of i?[1,-1]:[1]){const t=Math.round((t0+sg*i*.05)*100)/100;if(!bad(e,t)){hit=t;break}}
      if(hit==null)continue;const pt=e.o==='h'?{x:hit,y:e.c}:{x:e.c,y:hit},cost=Math.abs(pt.x-from.x)+Math.abs(pt.y-from.y);
      if(!best||cost<best.cost)best={...pt,cost,wall:e.w,dist:hit-e.lo,o:e.o};break}
  }
  if(!best){const q=clampIn(r,from,.15);return{x:q.x,y:q.y,wall:'',dist:0,z,bad:true}}
  return{x:best.x,y:best.y,wall:best.wall,dist:best.dist,z};
}
function structChecks(p,out,z){
  const st=p.struct||[];if(!st.length)return;
  for(const it of p.items){if(T[it.type].h==='ceil'||out.flag[it.id])continue;if(onGol(p,'h',it.y,it.x)||onGol(p,'v',it.x,it.y))out.flag[it.id]='Este într-un loc unde peretele lipsește. Mută-l pe un perete.'}
  const rez=st.filter(x=>x.k==='rez'),gr=st.filter(x=>x.k==='grinda'),lo=x=>Math.min(x.a,x.b),hi=x=>Math.max(x.a,x.b);
  let ni=0;
  for(const it of p.items){
    if(T[it.type].h==='ceil'||out.flag[it.id])continue;
    for(const w of rez){const c=w.o==='h'?it.y:it.x,t=w.o==='h'?it.x:it.y;if(Math.abs(c-w.c)<.02&&t>=lo(w)-.05&&t<=hi(w)+.05){out.flag[it.id]='Este pe un perete de rezistență. Nu tăia și nu găuri peretele fără acordul proiectantului de structură. Mută aparatul pe alt perete sau montează-l aparent.';ni++;break}}
  }
  if(ni)out.warn.push(`${ni} aparat(e) sunt pe pereți de rezistență. Sunt marcate cu roșu pe plan.`);
  const per={};
  const mark=(x,y,ci,kind)=>{out.hits.push({x,y,ci,kind});const k=ci+'|'+kind;per[k]=(per[k]||0)+1};
  for(const s of out.segs){
    const pieces=[];for(let k=0;k+1<s.pts.length;k++){const P1=s.pts[k],P2=s.pts[k+1];pieces.push([P1,P2,Math.abs(P1.y-P2.y)<1e-6?'h':'v'])}
    for(const[P1,P2,o]of pieces){
      const c=o==='h'?P1.y:P1.x,t1=Math.min(o==='h'?P1.x:P1.y,o==='h'?P2.x:P2.y),t2=Math.max(o==='h'?P1.x:P1.y,o==='h'?P2.x:P2.y);if(t2-t1<.01)continue;
      for(const w of rez){
        if(w.o!==o&&w.c>t1+.03&&w.c<t2-.03&&c>=lo(w)&&c<=hi(w))mark(o==='h'?w.c:c,o==='h'?c:w.c,s.ci,'str');
        else if(w.o===o&&Math.abs(w.c-c)<.05&&Math.min(t2,hi(w))-Math.max(t1,lo(w))>.05){const m=(Math.max(t1,lo(w))+Math.min(t2,hi(w)))/2;mark(o==='h'?m:c,o==='h'?c:m,s.ci,'slit')}
      }
      if((s.z??z)>0)for(const g of gr){if(g.o!==o&&g.c>t1+.03&&g.c<t2-.03&&c>=lo(g)&&c<=hi(g))mark(o==='h'?g.c:c,o==='h'?c:g.c,s.ci,'gr')}
    }
  }
  const msg={str:'străpunge un perete de rezistență',slit:'merge în lungul unui perete de rezistență (șliț)',gr:'traversează o grindă'};
  const fix={str:'Ocolește prin alt perete sau cere acordul proiectantului de structură.',slit:'Mută traseul pe alt perete sau montează-l aparent, în canal.',gr:'Nu găuri grinda: treci pe sub ea, aparent, sau mută traseele în pardoseală.'};
  for(const k of Object.keys(per)){const[ci,kind]=k.split('|');out.warn.push(`${(out.circuits[+ci]||{}).id||'C'+(+ci+1)}: ${msg[kind]}${per[k]>1?` (${per[k]}×)`:''}. ${fix[kind]}`)}
}
function winChecks(p,out){
  const ws=p.wins||[];let nf=0;
  for(const w of ws){
    const[a,b]=dEnds(w),lo=+w.sill||0,hi=lo+(+w.hg||0);
    for(const it of p.items){
      if(T[it.type].h==='ceil'||out.flag[it.id]||!onLine(w,it))continue;
      const t=along(w,it),h=hOf(p,it);
      if(t<=a-.1||t>=b+.1||h<lo-.1||h>hi+.1)continue;
      out.flag[it.id]=t>a&&t<b&&h>=lo&&h<=hi?'Este în golul ferestrei. Mută-l pe perete, la cel puțin 10 cm de toc, sau sub parapet.':'Este la mai puțin de 10 cm de tocul ferestrei. Zona verticală de instalare de lângă toc începe la 10 cm.';nf++;
    }
  }
  if(nf)out.warn.push(`${nf} element(e) sunt în golul unei ferestre sau prea aproape de toc. Sunt marcate cu roșu pe plan.`);
}
function doorChecks(p,out){
  const ds=p.doors||[];if(!ds.length)return;
  let nf=0;
  for(const d of ds){
    const[a,b]=dEnds(d),{sw}=doorRooms(p,d);
    for(const it of p.items){
      if(T[it.type].h==='ceil'||out.flag[it.id]||!onLine(d,it))continue;
      const t=along(d,it);
      if(t>a-.1&&t<b+.1){out.flag[it.id]=t>a&&t<b?'Este în golul ușii. Mută-l pe perete, la cel puțin 10 cm de toc.':'Este la mai puțin de 10 cm de tocul ușii. Zona verticală de instalare de lângă toc începe la 10 cm.';nf++;continue}
      if(sw&&it.room===sw.id&&(T[it.type].g==='intr'||it.type==='tablou')&&behindLeaf(d,t)){out.flag[it.id]=T[it.type].g==='intr'?'Rămâne în spatele ușii deschise. Pune întrerupătorul pe partea clanței.':'Rămâne în spatele ușii deschise. Tabloul trebuie să fie ușor accesibil.';nf++}
    }
  }
  if(nf)out.warn.push(`${nf} element(e) sunt prea aproape de uși sau în spatele lor. Sunt marcate cu roșu pe plan.`);
  for(const r of p.rooms){
    if(r.of)continue;
    const mine=ds.filter(d=>{const q=doorRooms(p,d);return(q.sw&&q.sw.id===r.id)||(q.ot&&q.ot.id===r.id)});
    const grp=p.rooms.filter(x=>x.id===r.id||x.of===r.id),hasGol=(p.struct||[]).some(g=>g.k==='gol'&&grp.some(x=>{const e=g.o==='h'?[x.y,x.y+x.h]:[x.x,x.x+x.w],sp=g.o==='h'?[x.x,x.x+x.w]:[x.y,x.y+x.h];return e.some(c=>Math.abs(c-g.c)<.02)&&Math.max(g.a,g.b)>sp[0]&&Math.min(g.a,g.b)<sp[1]}));
    if(!mine.length){if(!hasGol)out.warn.push(`${r.name}: nu are nicio ușă desenată.`);continue}
    const lum=p.items.some(i=>i.room===r.id&&T[i.type].g==='lum');
    if(lum&&!mine.some(d=>switchOk(p,d,r)))out.warn.push(`${r.name}: pune un întrerupător lângă ușă, pe partea clanței, la 10–30 cm de toc.`);
  }
}
const BOXZ=.3;
function spotBad(p,q,z){for(const o of['h','v']){const c=o==='h'?q.y:q.x,t=o==='h'?q.x:q.y,on=x=>x.o===o&&Math.abs(x.c-c)<.02;
  for(const d of p.doors.filter(on)){const[a,b]=dEnds(d);if(t>a-.15&&t<b+.15&&z<2.25)return'în golul ușii'}
  for(const w of p.wins.filter(on)){const[a,b]=dEnds(w);if(t>a-.15&&t<b+.15&&z>w.sill-.15&&z<w.sill+w.hg+.15)return'în golul ferestrei'}
  for(const st of(p.struct||[]).filter(x=>(x.k==='gol'||x.k==='rez')&&on(x)))if(t>=Math.min(st.a,st.b)-.05&&t<=Math.max(st.a,st.b)+.05)return st.k==='gol'?'unde peretele lipsește':'pe un perete de rezistență'}
  return null}
const clampIn=(r,q,m)=>({x:clamp(q.x,r.x+m,r.x+r.w-m),y:clamp(q.y,r.y+m,r.y+r.h-m)});

function blank(name){return{id:uid(),name:name||'Proiect nou',client:'',adresa:'',telefon:'',start:'',H:2.6,route:'pardoseala',routeV:3,cable:'CYY-F',reserve:10,maxPrize:8,maxLum:10,ks:.4,spd:true,swOff:.2,rooms:[],items:[],doors:[],wins:[],struct:[],routes:{},boxes:{},jb:[],sketch:[],tasks:[],prices:{}}}
const norm=p=>{if(!Array.isArray(p.doors))p.doors=[];if(!Array.isArray(p.wins))p.wins=[];if(!Array.isArray(p.struct))p.struct=[];if(!p.routes||typeof p.routes!=='object')p.routes={};if(!p.boxes||typeof p.boxes!=='object')p.boxes={};if(!Array.isArray(p.jb))p.jb=[];if(!Array.isArray(p.sketch))p.sketch=[];if(!Array.isArray(p.sketchErase))p.sketchErase=[];if(!Array.isArray(p.levels)||!p.levels.length){p.levels=[{id:'L0',name:'Parter',elev:0}];p.lvCur='L0'}if(!p.lvData||typeof p.lvData!=='object')p.lvData={};if(!p.levels.some(l=>l.id===p.lvCur))p.lvCur=p.levels[0].id;if(p.swOff==null)p.swOff=.2;if(!p.routeV){if(!p.route||p.route==='tavan')p.route='mixt';p.routeV=2}if(p.routeV<3){if(p.route==='mixt')p.route='pardoseala';p.routeV=3}return p};
function sample(){
  const p=blank('Exemplu — apartament 3 camere');
  p.client='Exemplu (date fictive)';p.adresa='Str. Exemplu nr. 1, ap. 4';
  const R=(name,type,x,y,w,h)=>{const r={id:uid(),name,type,x,y,w,h};p.rooms.push(r);return r};
  const lv=R('Living','living',0,0,5,4.2),dm=R('Dormitor','dormitor',5,0,3.6,4.2),bc=R('Bucătărie','bucatarie',0,4.2,3.2,3),hl=R('Hol','hol',3.2,4.2,2.8,3),bi=R('Baie','baie',6,4.2,2.6,3);
  const I=(type,r,x,y)=>p.items.push({id:uid(),type,room:r.id,x,y});
  I('tablou',hl,5.1,7.2);
  I('lumina',lv,2.5,2.1);I('spot',lv,1,2.1);I('spot',lv,4,2.1);I('intr2',lv,3.5,4.2);
  I('priza',lv,0,1.2);I('priza',lv,0,3.2);I('priza2',lv,2.5,0);I('priza2',lv,5,3.2);I('ac',lv,1,0);
  I('lumina',dm,6.8,2.1);I('intr',dm,6.1,4.2);I('priza',dm,8.6,1);I('priza',dm,8.6,3.2);I('priza2',dm,6.8,0);I('ac',dm,7.8,0);
  I('lumina',bc,1.6,5.7);I('intr',bc,3.2,5.6);I('priza2',bc,0,4.9);I('priza2',bc,0,6.6);I('priza',bc,1.6,4.2);I('plita',bc,0,5.8);I('msv',bc,1,7.2);I('cuptor',bc,2.3,7.2);
  I('lumina',hl,4.6,5.7);I('intr',hl,4.65,7.2);I('priza',hl,3.2,6.6);
  I('lumina',bi,7.3,5.7);I('intr',bi,6,5.6);I('prizaip',bi,8.6,5.2);I('msr',bi,6.8,7.2);I('boiler',bi,8,7.2);
  const D=(o,c,t,w,hinge,sd,kind)=>p.doors.push({id:uid(),o,c,t,w,hinge,s:sd,kind});
  D('h',7.2,4,.9,0,-1,'ext');D('h',4.2,4.1,.8,1,-1,'int');D('h',4.2,5.5,.8,0,-1,'int');D('v',3.2,5,.8,0,-1,'int');D('v',6,5,.8,0,1,'int');
  const Wn=(o,c,t,w,sill,hg)=>p.wins.push({id:uid(),o,c,t,w,sill,hg,kind:'geam'});
  Wn('h',0,3.6,1.4,.9,1.2);Wn('h',0,6,1.2,.9,1.2);Wn('h',7.2,1.65,.9,.9,1.2);Wn('v',8.6,6.4,.6,1.4,.6);
  const res=compute(p);p.tasks=genTasks(p,res);
  p.tasks.forEach((t,i)=>{t.s=i<2?'done':i<4?'doing':'todo'});
  p.prices={};p.sample=true;
  return p;
}

let store=null;
try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&Array.isArray(s.projects)&&s.projects.length)store=s}catch(e){}
if(!store){const s=sample();store={projects:[s],current:s.id}}
store.projects.forEach(norm);
let P=store.projects.find(x=>x.id===store.current)||store.projects[0];
let R=null,tool='select',sel=null,undoS=[],redoS=[],tab='plan',editTask=null,hover=null;
const layers={routes:true,boxes:true,tags:true,dims:true,cmd:false};
const view={s:60,ox:40,oy:40,rot:0};
const cloud={db:null,col:null,seen:false,busy:false,queue:new Set(),last:{}};
const CFG0=()=>({updated:0,firm:{tva:true,cota:21},prices:{},names:{},labor:{},offer:{valid:30,avans:50,garantie:'24 de luni pentru manoperă',termen:'',mat:'incl'},next:1});
let cfg=CFG0();
const cfgId=()=>'cfg-'+(typeof sbUser!=='undefined'&&sbUser?sbUser.id:'local');
const isCfg=id=>String(id).startsWith('cfg-');
function cfgNorm(o){const d=CFG0(),c=Object.assign(d,o||{});for(const k of['firm','prices','names','labor','offer'])c[k]=Object.assign({},d[k],(o||{})[k]||{});return c}
function loadCfg(){try{cfg=cfgNorm(JSON.parse(localStorage.getItem(KEY+':cfg')||'null'))}catch(e){cfg=CFG0()}}
function saveCfg(){cfg.updated=Date.now();try{localStorage.setItem(KEY+':cfg',JSON.stringify(cfg))}catch(e){}if(cloud.col){cloud.queue.add(cfgId());flush()}}
loadCfg();
const pbody=p=>{const{updated,...rest}=p;return JSON.stringify(rest)};
const markSaved=p=>{cloud.last[p.id]=pbody(p)};
store.projects.forEach(markSaved);
function persist(){try{store.current=P.id;localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}}
function setSync(k){const M={local:['Doar pe acest dispozitiv','muted'],conn:['Se conectează…','muted'],ok:['Salvat în cont','ok'],save:['Se salvează…','muted'],err:['Nesalvat în cont','bad'],ro:['Doar citire','muted'],full:['Spațiu plin în cont','bad']};const el=$('#sync');if(el){el.querySelector('.sync-t').textContent=M[k][0];el.title=M[k][0];el.setAttribute('aria-label',M[k][0]);el.dataset.s=M[k][1]}}
function save(){clearTimeout(save.t);save.t=setTimeout(()=>{const b=pbody(P);if(cloud.last[P.id]!==b){P.updated=Date.now();P.sample=false;cloud.last[P.id]=b;queuePush(P.id)}persist()},300)}
function queuePush(id){if(!cloud.col)return;cloud.queue.add(id);flush()}
async function flush(){
  if(cloud.busy)return;cloud.busy=true;setSync('save');let fails=0;
  while(cloud.queue.size){
    const id=cloud.queue.values().next().value;cloud.queue.delete(id);
    const p=store.projects.find(x=>x.id===id);
    try{if(isCfg(id))await cloud.col.doc(id).set({p:JSON.parse(JSON.stringify(cfg)),updated:cfg.updated||0,name:'__cfg'});else if(p)await cloud.col.doc(id).set({p:JSON.parse(JSON.stringify(p)),updated:p.updated||0,name:p.name});else await cloud.col.doc(id).delete();fails=0}
    catch(e){
      const c=e&&e.code;
      if(c==='invalid_argument'||c==='not_granted'||c==='revoked'){cloud.busy=false;setSync('ro');if(cloud.col===sbCol)checkSession();return}
      if(c==='quota_exceeded'){cloud.busy=false;setSync('full');toast('Spațiul din cont s-a umplut. Șterge proiecte vechi.');return}
      if(++fails>3){cloud.queue.add(id);cloud.busy=false;setSync('err');return}
      cloud.queue.add(id);await new Promise(r=>setTimeout(r,2000*fails+Math.random()*1000));
    }
  }
  cloud.busy=false;setSync('ok');
}
function onRemote(snap){
  const first=!cloud.seen;cloud.seen=true;let cur=false;
  {const cd=snap.docs.find(d=>d.id===cfgId()),rc=cd&&cd.data();
    if(rc&&rc.p&&(rc.updated||0)>(cfg.updated||0)){cfg=cfgNorm(rc.p);cfg.updated=rc.updated;try{localStorage.setItem(KEY+':cfg',JSON.stringify(cfg))}catch(e){}if(tab==='materiale'||tab==='oferta')renderTab()}
    else if(first&&(cfg.updated||0)>((rc&&rc.updated)||0))queuePush(cfgId())}
  const remote=new Map(snap.docs.map(d=>[d.id,d.data()]).filter(([id,r])=>r&&r.p&&!isCfg(id)));
  if(first){
    if(remote.size)store.projects=store.projects.filter(p=>!p.sample||remote.has(p.id));
    for(const p of store.projects){if(p.sample)continue;const r=remote.get(p.id);if(!r||(p.updated||0)>(r.updated||0))queuePush(p.id)}
  }else for(const c of snap.docChanges())if(c.type==='removed'&&!snap.docs.some(d=>d.id===c.doc.id)){store.projects=store.projects.filter(p=>p.id!==c.doc.id);delete cloud.last[c.doc.id]}
  for(const[id,r]of remote){
    const i=store.projects.findIndex(x=>x.id===id),q=norm(JSON.parse(JSON.stringify(r.p)));
    if(i<0){store.projects.push(q);markSaved(q);continue}
    if((r.updated||0)>(store.projects[i].updated||0)){if(store.projects[i]===P)cur=true;store.projects[i]=q;markSaved(q)}
  }
  if(!store.projects.length){const b=norm(blank('Proiect 1'));store.projects.push(b)}
  const keep=store.projects.find(x=>x.id===P.id);
  if(!keep){P=store.projects.find(x=>x.id===store.current)||store.projects[0];cur=true}else if(cur)P=keep;
  persist();renderProjSel();
  if(cur){undoS=[];redoS=[];sel=null;editTask=null;R=computeLv();fit();changed(true)}
  if(!cloud.busy&&!cloud.queue.size)setSync('ok');
}
async function connectCloud(){
  if(!window.claude||typeof window.claude.use!=='function'){sbConnect();return}
  setSync('conn');let db=null;
  try{db=await window.claude.use('db')}catch(e){}
  if(!db){setSync('local');return}
  cloud.db=db;cloud.col=db.collection('proiecte');
  cloud.col.onSnapshot(onRemote,()=>{cloud.col=null;setSync('err')});
}
const SB_URL='https://mqyvtxrdxhaogjranrps.supabase.co',SB_KEY='sb_publishable_L2ILOYrD_mFvPdMzVVTawg_mhXFbyNe';
let sb=null,sbUser=null,sbPullT=0,sbSid=null,claimNext=false,kickMsg='',kicking=false;
let urlLogin=/access_token=|[?&]code=/.test(location.hash+location.search)||(()=>{try{const f=sessionStorage.getItem('ep.fresh')==='1';sessionStorage.removeItem('ep.fresh');return f}catch(e){return false}})();
const jwtSid=s=>{try{return JSON.parse(atob(s.access_token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).session_id||null}catch(e){return null}};
const devName=()=>{const u=navigator.userAgent;return/iPad|Tablet/i.test(u)||(/Android/i.test(u)&&!/Mobile/i.test(u))||(/Macintosh/.test(u)&&navigator.maxTouchPoints>1)?'tabletă':/Mobi|iPhone|Android/i.test(u)?'telefon':'calculator'};
async function claimSession(){if(!sb||!sbUser||!sbSid)return true;const{error}=await sb.from('active_sessions').upsert({user_id:sbUser.id,session_id:sbSid,device:devName(),claimed_at:new Date().toISOString()});if(!error){try{await sb.auth.signOut({scope:'others'})}catch(e){}}return true}
async function checkSession(){
  if(!sb||!sbUser||!sbSid)return true;
  const{data,error}=await sb.from('active_sessions').select('session_id,device').eq('user_id',sbUser.id).maybeSingle();
  if(error){if(error.status===401||/jwt|session/i.test(error.message||'')){kick('','Ai fost deconectat. Intră din nou în cont.');return false}return true}if(!data){kick('','Sesiunea ta a fost închisă. Intră din nou în cont.');return false}
  if(data.session_id!==sbSid){kick(data.device);return false}return true;
}
async function kick(dev,msg){
  if(kicking)return;kicking=true;kickMsg=msg||`Contul tău a fost deschis pe alt dispozitiv${dev?' ('+dev+')':''}, așa că te-am deconectat aici. Intră din nou ca să lucrezi pe acest dispozitiv.`;
  cloud.col=null;cloud.queue.clear();try{await sb.auth.signOut({scope:'local'})}catch(e){}kicking=false;
}
async function startUser(ev){
  setSync('conn');
  const fresh=claimNext||urlLogin;claimNext=false;urlLogin=false;
  if(!(fresh?await claimSession():await checkSession()))return;
  if(!(await checkLicense()))return;
  useStore(KEY0+':'+sbUser.id,true);try{sb.rpc('touch_profile').then(()=>{},()=>{})}catch(e){}
  cloud.col=sbCol;cloud.seen=false;sbPull();if(!$('#intro').hidden)showIntro();
  if(ev==='SIGNED_IN')toast('Bine ai venit, '+(sbUser.email||'')+'.');
}
function loadSB(){return window.supabase?Promise.resolve():new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/dist/umd/supabase.min.js';sc.onload=res;sc.onerror=()=>rej(new Error('sb'));document.head.appendChild(sc)})}
const sbErr=e=>({code:!e?'unavailable':e.code==='42501'||e.status===401||e.status===403?'invalid_argument':'unavailable',message:e&&e.message||''});
const sbCol={doc:id=>({
  set:async v=>{const{error}=await sb.from('projects').upsert({id,name:v.name||'',data:v.p,updated:v.updated||0,deleted:false});if(error)throw sbErr(error)},
  delete:async()=>{const{error}=await sb.from('projects').update({deleted:true,updated:Date.now()}).eq('id',id);if(error)throw sbErr(error)}
})};
async function sbPull(){
  if(!sb||!sbUser||!cloud.col)return;if(!(await checkSession()))return;const{data,error}=await sb.from('projects').select('id,data,updated,deleted');
  if(error){setSync('err');return}
  const del=new Map(data.filter(r=>r.deleted).map(r=>[r.id,r.updated]));
  if(del.size){store.projects=store.projects.filter(p=>!del.has(p.id)||(p.updated||0)>del.get(p.id));if(!store.projects.length)store.projects.push(norm(blank('Proiect 1')))}
  onRemote({docs:data.filter(r=>!r.deleted).map(r=>({id:r.id,data:()=>({p:r.data,updated:+r.updated})})),docChanges:()=>[]});
}
function renderAccount(){const fb=$('#fbBtn');if(fb)fb.hidden=!sbUser;const b=$('#accBtn');if(!b)return;b.hidden=!sb;b.classList.toggle('av',!!sbUser);b.textContent=sbUser?((sbUser.email||'?').split('@')[0].replace(/[^a-zA-Z]/g,'').slice(0,2).toUpperCase()||'?'):'Conectează-te';b.title=sbUser?sbUser.email||'':'Salvează proiectele online'}
async function sbConnect(){
  if(!SB_KEY||!/^https?:$/.test(location.protocol)){setSync('local');return}
  try{await loadSB()}catch(e){siteMode=false;setSync('local');if(!$('#intro').hidden)showIntro();toast('Nu mă pot conecta acum la cont. Lucrezi local, pe acest dispozitiv.');return}
  sb=window.__epSb||window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});renderAccount();
  sb.auth.onAuthStateChange((ev,session)=>{
    if(session)sbSid=jwtSid(session)||sbSid;
    if(ev==='PASSWORD_RECOVERY'){sbUser=session&&session.user||null;renderAccount();setAuthMode('reset');$('#authBox').hidden=false;$('#introActs').hidden=true;$('#intro').hidden=false;return}
    const u=session&&session.user;if(u&&sbUser&&u.id===sbUser.id){sbUser=u;return}sbUser=u||null;renderAccount();
    if(sbUser)setTimeout(()=>startUser(ev),0);
    else{sbSid=null;cloud.col=null;cloud.queue.clear();acct=null;renderAdminTab();setSync('local');useStore(KEY0+':anon',false);if(wipeKeys){try{wipeKeys.forEach(k=>localStorage.removeItem(k))}catch(e){}wipeKeys=null}authMode='in';showIntro();if(kickMsg){$('#authMsg').textContent=kickMsg;toast(kickMsg);kickMsg=''}}
  });
  const{data}=await sb.auth.getSession();if(!data.session){setSync('local');showIntro()}
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState!=='visible'||!sbUser)return;if(Date.now()-sbPullT>15000){sbPullT=Date.now();sbPull()}else checkSession()});
  window.addEventListener('online',()=>{if(sbUser){flush();sbPull()}});
  setInterval(()=>{if(sbUser&&document.visibilityState==='visible'&&!cloud.busy)sbPull()},120000);
  setInterval(async()=>{if(sbUser&&cloud.col&&document.visibilityState==='visible'){if(await checkSession()&&++licTick%3===0)checkLicense()}},20000);
}
$('#accBtn').onclick=()=>{if(!sbUser){setAuthMode('in');showIntro();return}const on=true;$('#accH').textContent=on?`Conectat ca ${sbUser.email}. ${acct?(acct.role==='admin'?'Cont de administrator. ':acct.status==='trial'?`Perioadă de probă: mai ai ${daysLeft(acct)} ${daysLeft(acct)===1?'zi':'zile'}, până la ${dRo(isoD(new Date(acct.valid_until)))}. `:`Abonament activ până la ${dRo(isoD(new Date(acct.valid_until)))}. `):''}Proiectele se salvează online automat.`:'Te conectezi cu adresa de e-mail: primești un link, îl deschizi pe acest dispozitiv și gata. Proiectele se salvează online și apar pe orice dispozitiv pe care te conectezi.';$('#accEL').hidden=on;$('#accGo').hidden=on;$('#accOut').hidden=!on;$('#accSync').hidden=!on;$('#accDlg').showModal()};
$('#accC').onclick=()=>$('#accDlg').close();
let fbKind='vreau';
const TABN={plan:'Plan',calcul:'Circuite',materiale:'Materiale',oferta:'Documente',lucrari:'Lucrări',admin:'Admin'};
const fbCtx=()=>{const it=sel&&sel.kind==='item'?P.items.find(i=>i.id===sel.id):null,mv=document.querySelector('meta[name="app-version"]');return{tab:TABN[tab]||tab,sel:it?T[it.type].n:sel?sel.kind:'',project:P.name,device:devName(),v:mv?mv.content:''}};
const FBPH={vreau:'ex. Aș vrea să pot pune și o priză de pardoseală.',nu_place:'ex. Nu îmi place că trebuie să apăs de două ori ca să selectez o priză.',bug:'ex. Când apăs Exportă PDF pe tabletă, nu se întâmplă nimic.'};
function setFbKind(k){fbKind=k;document.querySelectorAll('[data-fbk]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.fbk===k));$('#fbText').placeholder=FBPH[k]}
function openFb(){if(!sbUser){toast('Conectează-te ca să trimiți feedback.');return}const c=fbCtx();$('#fbCtx').textContent=`Trimitem și unde erai: ${c.tab}${c.sel?' · '+c.sel:''} · ${c.device}.`;$('#fbDlg').showModal();setTimeout(()=>$('#fbText').focus(),50)}
$('#fbBtn').onclick=openFb;
$('#fbKinds').addEventListener('click',e=>{const b=e.target.closest('[data-fbk]');if(b)setFbKind(b.dataset.fbk)});
$('#fbC').onclick=()=>$('#fbDlg').close();
$('#fbF').addEventListener('submit',async e=>{e.preventDefault();const t=$('#fbText').value.trim();if(t.length<3){toast('Scrie câteva cuvinte despre ce ai observat.');$('#fbText').focus();return}
  const go=$('#fbGo');go.disabled=true;go.textContent='Se trimite…';
  try{const{error}=await sb.from('feedback').insert({user_id:sbUser.id,email:sbUser.email||'',kind:fbKind,body:t.slice(0,4000),context:fbCtx()});
    if(error){toast(/relation|does not exist|schema cache/i.test(error.message||'')?'Feedback-ul nu e pornit încă. Spune-i administratorului.':'Nu am putut trimite: '+(error.message||'eroare')+'. Mesajul a rămas aici.');return}
    $('#fbText').value='';setFbKind('vreau');$('#fbDlg').close();toast('Mulțumim! Am primit mesajul.')}
  catch(x){toast('Nu există conexiune la internet. Mesajul a rămas aici, încearcă din nou.')}
  finally{go.disabled=false;go.textContent='Trimite'}});
$('#accSync').onclick=async()=>{await sbPull();flush();toast('Sincronizat.')};
$('#accOut').onclick=async()=>{$('#accDlg').close();await sb.auth.signOut();toast('Te-ai deconectat.')};
$('#accF').addEventListener('submit',async e=>{e.preventDefault();const em=$('#accE').value.trim();if(!/^\S+@\S+\.\S+$/.test(em)){toast('Scrie o adresă de e-mail validă.');return}
  const{error}=await sb.auth.signInWithOtp({email:em,options:{emailRedirectTo:location.origin+location.pathname}});
  if(error){toast(error.status===429?'Ai cerut prea multe linkuri. Încearcă din nou peste câteva minute.':'Nu am putut trimite linkul: '+error.message);return}
  $('#accDlg').close();toast('Ți-am trimis un link pe '+em+'. Deschide-l pe acest dispozitiv ca să te conectezi.')});
function snap(){undoS.push(JSON.stringify(P));if(undoS.length>80)undoS.shift();redoS=[]}
function replaceP(q){const i=store.projects.findIndex(x=>x.id===P.id);store.projects[i]=q;P=q}
function undo(){if(!undoS.length)return;redoS.push(JSON.stringify(P));replaceP(JSON.parse(undoS.pop()));sel=null;changed(true)}
function redo(){if(!redoS.length)return;undoS.push(JSON.stringify(P));replaceP(JSON.parse(redoS.pop()));sel=null;changed(true)}

function isLight(i){const t=T[i.type];return t.g==='lum'||!!t.onLum}
function isSw(i){return T[i.type].g==='intr'}
function ctrlOf(p,sw){const L=p.items.filter(isLight);if(Array.isArray(sw.ctrl))return L.filter(l=>sw.ctrl.includes(l.id));return L.filter(l=>l.room===sw.room)}
function ctrlBy(p,light){return p.items.filter(i=>isSw(i)&&ctrlOf(p,i).some(l=>l.id===light.id))}
function cmdChecks(p,out){
  const lights=p.items.filter(i=>isLight(i)&&p.rooms.some(r=>r.id===i.room)),groups=new Map();
  for(const l of lights){const sws=ctrlBy(p,l);if(!sws.length)continue;const k=sws.map(x=>x.id).sort().join('|');if(!groups.has(k))groups.set(k,{sws,lights:[]});groups.get(k).lights.push(l)}
  for(const g of groups.values()){
    const cs=g.sws.filter(x=>x.type==='intrCS'),cr=g.sws.filter(x=>x.type==='intrCR'),rn=[...new Set(g.lights.map(l=>(p.rooms.find(r=>r.id===l.room)||{}).name))].join(', ');
    if(cs.length===1){out.warn.push(`${rn}: luminile sunt comandate de un singur cap scară. Pune al doilea cap scară sau folosește întrerupător simplu.`);out.flag[cs[0].id]=out.flag[cs[0].id]||'Cap scară fără pereche: un cap scară se montează doar câte două, care comandă aceleași lumini.'}
    if(cs.length>2){out.warn.push(`${rn}: ${cs.length} cap scară pe aceleași lumini. Folosește două cap scară și întrerupătoare cruce între ele.`);cs.slice(2).forEach(x=>out.flag[x.id]=out.flag[x.id]||'Al treilea cap scară: înlocuiește-l cu un întrerupător cruce.')}
    if(cr.length&&cs.length<2){out.warn.push(`${rn}: întrerupătorul cruce funcționează doar între două cap scară.`);cr.forEach(x=>out.flag[x.id]=out.flag[x.id]||'Cruce fără două cap scară pe aceleași lumini.')}
  }
}
function compute(p,o={}){
  const out={circuits:[],segs:[],nodes:[],warn:[],by:{},rcds:[],tot:null,flag:{},hits:[],phys:[],chase:{}};
  doorChecks(p,out);
  winChecks(p,out);
  cmdChecks(p,out);
  const tbs0=p.items.filter(i=>i.type==='tablou'),tbs=tbs0.length?tbs0:o.virt?[o.virt]:[];if(!tbs0.length&&o.virt)out.virt=o.virt;
  if(!p.rooms.length)out.warn.push('Desenează cel puțin o cameră.');
  if(!tbs.length){out.warn.push('Plasează tabloul electric pe plan ca să calculez traseele, circuitele și materialele.');return out}
  if(tbs.length>1)out.warn.push('Sunt mai multe tablouri pe plan. Calculul folosește primul tablou plasat.');
  const tb=tbs[0],z=p.route==='pardoseala'?0:p.H-.3,tz=hOf(p,tb);
  const rooms=p.rooms.slice().sort((a,b)=>dRoom(a,tb)-dRoom(b,tb));
  const orph=p.items.filter(i=>i.type!=='tablou'&&!p.rooms.some(r=>r.id===i.room));
  if(orph.length)out.warn.push(`${orph.length} element(e) sunt în afara camerelor și nu intră în calcul.`);
  const inRoom=(r,gs)=>p.items.filter(i=>i.room===r.id&&gs.includes(T[i.type].g));
  const maxP=Math.max(1,+p.maxPrize||8),maxL=Math.max(1,+p.maxLum||10);
  let cur=null;
  const flush=a=>{if(cur&&cur.parts.length)a.push(cur);cur=null};
  const lum=[];
  for(const r of rooms){
    const its=p.items.filter(i=>i.room===r.id&&(['lum','intr'].includes(T[i.type].g)||T[i.type].onLum));if(!its.length)continue;
    const n=its.filter(i=>T[i.type].g==='lum').length;
    const free=its.filter(i=>isLight(i)&&!ctrlBy(p,i).length).length;if(free)out.warn.push(`${r.name}: ${free===1?'un corp de iluminat nu e comandat':free+' corpuri de iluminat nu sunt comandate'} de niciun întrerupător.`);
    if(!n&&its.some(i=>isSw(i)&&!Array.isArray(i.ctrl)))out.warn.push(`${r.name}: are întrerupător, dar niciun corp de iluminat.`);
    if(r.type==='baie'){lum.push({kind:'lum',parts:[{r,items:its}],n,bath:true});continue}
    if(cur&&cur.n+n>maxL)flush(lum);
    if(!cur)cur={kind:'lum',parts:[],n:0};
    cur.parts.push({r,items:its});cur.n+=n;
  }
  flush(lum);
  const pr=[];
  for(const r of rooms){
    const its=inRoom(r,['priza']);if(!its.length)continue;
    const wet=r.type==='bucatarie'||r.type==='baie';
    const chunks=[];let cc=[],cn=0;
    for(const it of its){const q=ptsOf(it);if(cn+q>maxP&&cc.length){chunks.push([cc,cn]);cc=[];cn=0}cc.push(it);cn+=q}
    if(cc.length)chunks.push([cc,cn]);
    for(const[ch,n]of chunks){
      if(wet){pr.push({kind:'priza',parts:[{r,items:ch}],n,bath:r.type==='baie'});continue}
      if(cur&&cur.n+n>maxP)flush(pr);
      if(!cur)cur={kind:'priza',parts:[],n:0};
      cur.parts.push({r,items:ch});cur.n+=n;
    }
  }
  flush(pr);
  const ded=[];
  for(const r of rooms)for(const it of inRoom(r,['ded']).filter(i=>!T[i.type].onLum))ded.push({kind:'ded',parts:[{r,items:[it]}],n:1});
  const used=[],shared={},baths=p.rooms.filter(r=>r.type==='baie'),CW=closedWalls(p);
  [...lum,...pr,...ded].forEach((s,k)=>{
    let zc=p.route==='mixt'?((s.kind==='lum'||(s.kind==='ded'&&hOf(p,s.parts[0].items[0])>1.4))?p.H-.3:0):z;
    const id=(o.pre||'')+'C'+(k+1+(o.base||0)),ci=k;
    let a={x:tb.x,y:tb.y},ah=tz,cum=0,len=0,Lmax=0,pk='TE';const xcab={};
    const F=baths.filter(r=>!s.parts.some(x=>x.r.id===r.id));
    const bz=zc>0?zc:BOXZ,loop=s.kind==='lum'&&zc<=0;
    const add=(fr,fh,to,th,feed,key,zo)=>{const zc0=zc;if(zo!=null)zc=zo;try{
      const W=p.routes[key];let pts=W&&W.length?legsOf([fr,...W,to]):routeAuto(fr,to,F,p.rooms,CW);
      if(!pts){pts=cleanPts([fr,{x:to.x,y:fr.y},to]);out.warn.push(`${id}: nu am găsit un traseu care să ocolească baia. Trage traseul manual.`)}
      if(F.length&&!pathOk(pts,F)){out.warn.push(`${id}: traseul trece prin baie. În baie intră doar circuitele care o alimentează. Mută traseul.`);for(let k=0;k+1<pts.length;k++)for(const rc of F)if(crossRect(pts[k],pts[k+1],rc))out.hits.push({x:(pts[k].x+pts[k+1].x)/2,y:(pts[k].y+pts[k+1].y)/2,ci,kind:'baie'})}
      const l=Math.abs(fh-zc)+pathLen(pts)+Math.abs(th-zc);out.segs.push({a:{x:fr.x,y:fr.y},b:{x:to.x,y:to.y},pts,ci,feed,l,key,man:!!(W&&W.length),fh,th,z:zc,ra:fr.room||null,rb:to.room||null});len+=l;return l}finally{zc=zc0}};
    if(s.kind==='ded'){const it=s.parts[0].items[0];Lmax=add(a,ah,it,hOf(p,it),true,'TE>'+it.id)}
    else for(const[pi,part]of s.parts.entries()){
      const nk='n:'+part.r.id+':'+part.items[0].id,uj=(p.jb||[]).filter(j=>j.room===part.r.id).sort((u,v)=>(Math.abs(u.x-a.x)+Math.abs(u.y-a.y))-(Math.abs(v.x-a.x)+Math.abs(v.y-a.y)))[0];
      const viaSw=new Map();if(loop)for(const it of part.items){if(!isLight(it))continue;const sw=ctrlBy(p,it).find(q=>part.items.includes(q));if(sw)viaSw.set(it.id,sw)}
      const cab=1+part.items.length-viaSw.size+(pi<s.parts.length-1?1:0);
      let sb=null;if(!uj&&p.shareBoxes!==false){const sk=part.r.id+(zc>0?'':':f'),L=shared[sk]||(shared[sk]=[]);sb=L.find(q=>q.cab+cab<=JB.xl.cap);if(!sb){sb={i:L.length,cab:0,bx:null};L.push(sb)}}
      const bk=sb?'sb:'+part.r.id+(zc>0?'':':f')+':'+sb.i:nk,ov=p.boxes[bk];
      const bx=uj?boxAt(part.r,uj,bz):ov?boxAt(part.r,ov,bz):sb&&sb.bx?sb.bx:boxSpot(p,part.r,a,bz,used,F),d={x:bx.x,y:bx.y,room:part.r.id};
      {const why=(uj||ov)&&spotBad(p,bx,bz);if(why)out.warn.push(`${part.r.name}: doza de derivație a circuitului ${id} e ${why}. Mut-o pe un perete plin.`)}
      if(sb){sb.bx=bx;sb.cab+=cab}
      used.push(d);cum+=add(a,ah,d,bz,true,pk+'>'+nk);out.nodes.push({...bx,ci,cid:id,room:part.r.name,rid:part.r.id,key:nk,bkey:bk,sb:sb?bk:null,man:!!ov,jb:uj?uj.id:null,cab});
      if(bx.bad)out.warn.push(`${part.r.name}: nu am găsit un perete liber pentru doza de derivație a circuitului ${id}.`);
      const swL={};for(const it of part.items){if(viaSw.has(it.id))continue;const l=add(d,bz,it,hOf(p,it),false,nk+'>'+it.id);swL[it.id]=l;Lmax=Math.max(Lmax,cum+l);const co=it.type==='intrCS'?4:it.type==='intrCR'?5:0;if(co){const nm=`${p.cable} ${co}×1,5`;xcab[nm]=(xcab[nm]||0)+l}}
      for(const[lid,sw]of viaSw){const it=part.items.find(q=>q.id===lid),hi=hOf(p,it),up=T[it.type].h==='ceil'||hi>=p.H-.05,l=add(sw,hOf(p,sw),it,hi,false,sw.id+'>'+it.id,up?p.H:null);Lmax=Math.max(Lmax,cum+(swL[sw.id]||0)+l)}
      a=d;ah=bz;pk=nk;
    }
    Lmax+=o.ex||0;len+=o.ex||0;
    const items=s.parts.flatMap(x=>x.items),t0=T[items[0].type];
    const P=items.reduce((t,i)=>t+wOf(i),0),cos=s.kind==='ded'?(t0.cos||1):1,Ib=P/(U*cos);
    const minIn=s.kind==='lum'?10:(s.kind==='ded'&&t0.minIn)||16,In=STD.find(v=>v>=Math.max(Ib,minIn))||63;
    let S=SECTS.find(v=>IZ[v]>=In&&v>=(s.kind==='lum'||In<=10?1.5:2.5))||16;
    const lim=s.kind==='lum'?3:5,du=S=>200*Lmax*Ib*cos/(GAMMA*S*U);
    while(du(S)>lim&&S<16)S=SECTS[SECTS.indexOf(S)+1];
    if(Ib>63)out.warn.push(`${id}: curentul de ${f(Ib)} A depășește 63 A. Folosește alimentare trifazică pentru acest consumator.`);
    if(du(S)>lim)out.warn.push(`${id}: căderea de tensiune rămâne peste ${lim} %. Mută tabloul mai aproape sau împarte circuitul.`);
    const curve=s.kind==='ded'?(t0.curve||'B'):'B';
    const name=s.kind==='lum'?(s.bath?'Iluminat baie':'Iluminat')+(items.some(i=>T[i.type].onLum)?' și ventilator':''):s.kind==='priza'?'Prize':t0.n;
    const where=[...new Set(s.parts.map(x=>x.r.name))].join(', ');
    const cabMain=`${p.cable} 3×${fS(S)}`,cabs={[cabMain]:len-Object.values(xcab).reduce((t,v)=>t+v,0)};for(const k in xcab)cabs[k]=(cabs[k]||0)+xcab[k];
    out.circuits.push({cabs,bath:!!s.bath||s.parts.every(x=>x.r.type==='baie'),id,ci,kind:s.kind,name,where,items,n:items.length,P,Ib,In,curve,S,cable:`${p.cable} 3×${fS(S)}`,len,Lmax,du:du(S),lim,rcd:null,tube:S<=2.5?16:S<=4?20:25});
    items.forEach(i=>out.by[i.id]=id);
  });
  out.cs=null;{const tvs=p.items.filter(i=>i.type==='tv'&&p.rooms.some(r=>r.id===i.room));
  if(tvs.length){const zt=p.route==='tavan'?p.H-.3:0,tr=p.rooms.find(r=>r.id===tb.room),[nx]=tr?nrmIn(p.rooms,tb):[0];let bx={x:tb.x,y:tb.y};
    if(tr){const ax=nx?'y':'x',lo=(ax==='y'?tr.y:tr.x)+.15,hi=(ax==='y'?tr.y+tr.h:tr.x+tr.w)-.15,t0=tb[ax],t=t0+.45<=hi?t0+.45:t0-.45>=lo?t0-.45:clamp(t0+.3,lo,hi);bx={...bx,[ax]:t}}
    const bh=tr?tz:1.6,segs=[];let len=0;
    for(const it of tvs){const F=baths.filter(r=>r.id!==it.room),W=p.routes['CS>'+it.id];let pts=W&&W.length?legsOf([bx,...W,it]):routeAuto(bx,it,F,p.rooms,CW);if(!pts)pts=cleanPts([bx,{x:it.x,y:bx.y},it]);
      const th=hOf(p,it),l=Math.abs(bh-zt)+pathLen(pts)+Math.abs(th-zt);len+=l;segs.push({a:{x:bx.x,y:bx.y},b:{x:it.x,y:it.y},pts,fh:bh,th,z:zt,l,key:'CS>'+it.id,room:it.room})}
    out.cs={box:{x:bx.x,y:bx.y,z:bh,room:tr?tr.id:null},segs,len,n:tvs.length}}}
  const phys=new Map();
  for(const n of out.nodes){const k=n.jb?'jb:'+n.jb:n.sb?n.sb:'au:'+n.key;let q=phys.get(k);if(!q){q={x:n.x,y:n.y,room:n.room,wall:n.wall,dist:n.dist,z:n.z,jb:n.jb,cab:0,cis:[],cids:[]};phys.set(k,q)}q.cab+=n.cab;q.cis.push(n.ci);q.cids.push(n.cid);n.ph=k}
  for(const j of p.jb||[])if(!phys.has('jb:'+j.id)){const r=p.rooms.find(x=>x.id===j.room);phys.set('jb:'+j.id,{...(r?boxAt(r,j,z):{x:j.x,y:j.y,wall:'',dist:0,z}),room:r?r.name:'—',jb:j.id,cab:0,cis:[],cids:[],unused:true})}
  let di=0;for(const q of phys.values()){q.id='D'+(++di);const j=q.jb&&p.jb.find(x=>x.id===q.jb);q.size=j?j.size:(['s','m','l','xl'].find(k=>JB[k].cap>=q.cab)||'xl');if(j&&q.cab>JB[j.size].cap)out.warn.push(`${q.id} (${JB[j.size].n}, ${q.room}): intră ${q.cab} cabluri, iar capacitatea recomandată e ${JB[j.size].cap}. Alege o doză mai mare.`)}
  for(const sw of p.items.filter(i=>isSw(i)&&Array.isArray(i.ctrl))){
    const seen=new Set();for(const l of ctrlOf(p,sw)){if(l.room===sw.room||seen.has(l.room))continue;seen.add(l.room);const c=out.circuits.find(q=>q.id===out.by[l.id]);if(!c)continue;
      const L=Math.abs(sw.x-l.x)+Math.abs(sw.y-l.y)+Math.abs(p.H-hOf(p,sw))+.6,nm=`${p.cable} 3×1,5`;c.cabs[nm]=(c.cabs[nm]||0)+L;c.len+=L}}
  out.nodes.forEach(n=>n.id=phys.get(n.ph).id);out.phys=[...phys.values()];out.chase=chaseOf(p,out,z);
  structChecks(p,out,z);
  const fb=finishBoard(p,out.circuits);out.rcds=fb.rcds;out.tot={...fb.tot,z};out.warn.push(...fb.warn);
  return out;
}
function finishBoard(p,circs){
  const rcds=[],warn=[],prot=circs.filter(c=>(c.kind!=='lum'||c.bath)&&c.kind!=='feed');
  for(let k=0;k<prot.length;k+=4){const g=prot.slice(k,k+4),rid='ΔI'+(rcds.length+1);g.forEach(c=>c.rcd=rid);rcds.push({id:rid,circuits:g})}
  const Pi=circs.reduce((t,c)=>t+c.P,0),ks=clamp(+p.ks||.4,.1,1),Pc=Pi*ks,Ic=Pc/U;
  const maxIn=circs.reduce((m,c)=>Math.max(m,c.In),0),main=MAINS.find(v=>v>=Ic&&v>maxIn)||null;
  if(!main&&circs.length)warn.push(`Curentul cerut (${f(Ic)} A) depășește 63 A pe monofazic. Ia în calcul un branșament trifazic.`);
  const mods=2+(p.spd?2:0)+2*rcds.length+circs.length,panel=PANELS.find(v=>v>=Math.ceil(mods*1.2))||72;
  return{rcds,warn,tot:{Pi,ks,Pc,Ic,main,mods,panel}};
}
const LVK=['rooms','items','doors','wins','struct','jb','sketch','sketchErase','routes','boxes'];
function lvGet(p,id){if(id===p.lvCur){const o={};LVK.forEach(k=>o[k]=p[k]);return o}const d=(p.lvData||{})[id]||{},o={};LVK.forEach(k=>o[k]=d[k]||(k==='routes'||k==='boxes'?{}:[]));return o}
const lvView=(p,id)=>({...p,...lvGet(p,id)});
const lvSorted=p=>p.levels.slice().sort((a,b)=>(+a.elev||0)-(+b.elev||0));
let RA=null;
function computeAll(p){
  const views=lvSorted(p).map(l=>({l,v:lvView(p,l.id)})),hasTb=x=>x.v.items.some(i=>i.type==='tablou');
  const res=[],boards=[],mainV=views.find(hasTb);
  if(!mainV){for(const x of views)res.push({id:x.l.id,l:x.l,R:compute(x.v)});return{levels:res,boards}}
  const mtb=mainV.v.items.find(i=>i.type==='tablou'),Rm=compute(mainV.v);
  res.push({id:mainV.l.id,l:mainV.l,R:Rm});Rm.circuits.forEach(c=>c.lv=mainV.l.id);
  const mainB={l:mainV.l,tb:mtb,circuits:[...Rm.circuits],levels:[mainV.l.id]};boards.push(mainB);
  let base=Rm.circuits.length;
  for(const x of views){
    if(x===mainV)continue;
    if(hasTb(x)){const pre='T'+(boards.length+1)+'.',Rx=compute(x.v,{pre});Rx.circuits.forEach(c=>c.lv=x.l.id);res.push({id:x.l.id,l:x.l,R:Rx});boards.push({l:x.l,tb:x.v.items.find(i=>i.type==='tablou'),circuits:[...Rx.circuits],levels:[x.l.id],pre});continue}
    const tr=x.v.items.find(i=>i.type==='trecere'),pt=tr?{x:tr.x,y:tr.y}:{x:mtb.x,y:mtb.y};
    const ex=Math.abs(pt.x-mtb.x)+Math.abs(pt.y-mtb.y)+Math.abs((+x.l.elev||0)-(+mainV.l.elev||0)-hOf(p,mtb));
    const Rx=compute(x.v,{base,ex,virt:{id:'__v',type:'tablou',x:pt.x,y:pt.y,h:0,room:null}});
    Rx.circuits.forEach(c=>c.lv=x.l.id);res.push({id:x.l.id,l:x.l,R:Rx});mainB.circuits.push(...Rx.circuits);mainB.levels.push(x.l.id);base+=Rx.circuits.length;
  }
  for(const b of boards.slice(1)){
    const bt=finishBoard(p,b.circuits),Ib=bt.tot.Pc/U,In=STD.find(v=>v>=Math.max(Ib,bt.tot.main||16))||63;
    const len=Math.abs(b.tb.x-mtb.x)+Math.abs(b.tb.y-mtb.y)+Math.abs((+b.l.elev||0)+hOf(p,b.tb)-(+mainV.l.elev||0)-hOf(p,mtb))+1;
    let S=SECTS.find(v=>IZ[v]>=In&&v>=2.5)||16;const du=S=>200*len*Ib/(GAMMA*S*U);while(du(S)>3&&S<16)S=SECTS[SECTS.indexOf(S)+1];
    const k=mainB.circuits.length;
    const fc={id:'C'+(k+1),ci:k,kind:'feed',lv:mainV.l.id,name:'Alimentare tablou '+b.l.name,where:b.l.name,items:[],n:0,P:bt.tot.Pi,Ib,In,curve:'C',S,cable:`${p.cable} 3×${fS(S)}`,len,Lmax:len,du:du(S),lim:3,rcd:null,tube:S<=2.5?16:S<=4?20:25};
    mainB.circuits.push(fc);b.feed=fc;
  }
  for(const b of boards){const bt=finishBoard(p,b.circuits);Object.assign(b,bt)}
  for(const r of res){const b=boards.find(q=>q.levels.includes(r.id));if(b){r.R.board=b;r.R.rcds=b.rcds;r.R.tot={...b.tot,z:r.R.tot?r.R.tot.z:(p.route==='pardoseala'?0:p.H-.3)}}}
  return{levels:res,boards};
}
function computeLv(){RA=computeAll(P);const x=RA.levels.find(q=>q.id===P.lvCur);return x?x.R:compute(P)}

function modBoxes(m){if(m<=0)return[];if(m<=2)return[2];if(m<=3)return[3];if(m<=4)return[4];if(m<=7)return[7];return[7,...modBoxes(m-7)]}
function devInfo(p,it){
  const ded=T[it.type].g==='ded',st=ded?'schuko':stOf(p,it),SN=st==='slim'?'slim':'Schuko',ms=st==='slim'?(+p.modSlim||1):(+p.modSchuko||2);
  let socks=0,extra=0,cls=1,ck,cn,cu,mech=[];
  switch(it.type){
    case'priza':socks=1;ck='p1:'+st;cn=`Priză simplă ${SN} 16 A`;break;
    case'priza2':socks=2;ck='p2:'+st;cn=`Priză dublă ${SN} 16 A`;break;
    case'prizaM':{const n=nOf(it);socks=n;cls=n;ck='pm'+n+':'+st;cn=n===1?`Priză ${SN} 16 A cu ramă de 1 post`:`Priză ${SN} 16 A în ramă de ${n} posturi`;cu='set';break}
    case'prizaip':socks=1;ck='ip:'+st;cn=`Priză ${SN} IP44 cu capac`;break;
    case'feon':socks=1;ck='ip:'+st;cn=`Priză ${SN} IP44 cu capac`;break;
    case'tv':socks=2;extra=1;cls=2;ck='tv:'+st;cn=`Set priză TV: priză dublă ${SN} + priză TV/SAT`;cu='set';mech.push(['tvm','Priză TV/SAT modulară 1M',1]);break;
    case'intr':extra=1;ck='i1';cn='Întrerupător simplu 10 A';mech.push(['i1','Întrerupător modular 1M',1]);break;
    case'intr2':extra=2;ck='i2';cn='Întrerupător dublu 10 A';mech.push(['i1','Întrerupător modular 1M',2]);break;
    case'intrCS':extra=1;ck='ics';cn='Întrerupător cap scară 10 A';mech.push(['ics','Comutator cap scară modular 1M',1]);break;
    case'intrCR':extra=1;ck='icr';cn='Întrerupător cruce 10 A';mech.push(['icr','Inversor cruce modular 1M',1]);break;
    default:socks=ded?1:0;ck='pd';cn='Priză Schuko 16 A pentru circuit dedicat';
  }
  if(socks)mech.unshift(['s:'+st,`Priză ${SN} modulară ${ms}M`,socks]);
  const mods=socks*ms+extra;
  return{mods,mech,cls,ck,cn,cu,boxes:modBoxes(mods),st};
}
function pms0(p){return p.items.filter(i=>i.type==='prizaM'&&p.rooms.some(x=>x.id===i.room)).reduce((t,i)=>t+nOf(i),0)}
function materials(p,r,o={}){
  const m=new Map();
  const add=(cat,key,name,um,q)=>{if(!q)return;const o=m.get(key);if(o)o.q+=q;else m.set(key,{cat,key,name,um,q})};
  const cnt=t=>p.items.filter(i=>i.type===t&&p.rooms.some(x=>x.id===i.room)).length;
  for(const c of r.circuits){for(const[nm,L]of Object.entries(c.cabs||{[c.cable]:c.len}))add('Cabluri','cab:'+nm,`Cablu ${nm} mm²`,'m',L*(1+(+p.reserve||0)/100));add('Tuburi și doze','tub:'+c.tube,`Tub flexibil de protecție Ø${c.tube} mm`,'m',c.len*1.05)}
  const racord=p.items.filter(i=>T[i.type].conn==='racord'&&r.by[i.id]).length;
  const devs=p.items.filter(i=>p.rooms.some(x=>x.id===i.room)&&(T[i.type].g==='priza'||T[i.type].g==='intr'||(T[i.type].conn==='priza'&&r.by[i.id])));
  if(p.aparataj==='modular'){
    for(const it of devs){const d=devInfo(p,it);for(const bx of modBoxes(d.mods)){add('Tuburi și doze','doza:mod:'+bx,BOXN[bx],'buc',1);add('Aparataj','sup:'+bx,`Suport aparataj ${bx} module`,'buc',1);add('Aparataj','rama:'+bx+(it.type==='prizaip'||it.type==='feon'?':ip':''),`Ramă ${bx} module`+(it.type==='prizaip'||it.type==='feon'?' cu capac IP44':''),'buc',1)}for(const[k,n,q]of d.mech)add('Aparataj','mec:'+k,n,'buc',q)}
  }else for(const it of devs){const d=devInfo(p,it);add('Tuburi și doze','doza:ap','Doză de aparataj Ø68 mm','buc',d.cls);add('Aparataj','cl:'+d.ck,d.cn,d.cu||'buc',1)}
  for(const k of['s','m','l','xl'])add('Tuburi și doze','doza:der:'+k,`Doză de derivație ${JB[k].lbl}`,'buc',r.phys.filter(q=>q.size===k).length);
  add('Tuburi și doze','doza:rac','Doză de racord pentru consumator fix','buc',racord);
  add('Tuburi și doze','wago','Clemă de legătură 5 conductori (tip Wago 221)','buc',r.phys.reduce((t,q)=>t+3*Math.max(1,q.cis.length),0)+racord*3);
  const tb=p.items.find(i=>i.type==='tablou');
  if(tb&&r.tot){const tvL=r.cs?r.cs.len:0;if(r.cs)add('Curenți slabi','cutcs','Doză de distribuție TV (splitter), separată de dozele de forță','buc',1);
    add('Curenți slabi','coax','Cablu coaxial RG6 pentru prizele TV','m',tvL*(1+(+p.reserve||0)/100));add('Curenți slabi','tubcs','Tub flexibil Ø20 mm pentru curenți slabi, separat de cablurile de forță','m',tvL*1.05)}
  add('Iluminat','il:l','Corp de iluminat — plafonieră','buc',cnt('lumina'));
  add('Iluminat','il:s','Spot încastrat','buc',cnt('spot'));
  add('Iluminat','il:a','Aplică de perete','buc',cnt('aplica'));
  const t=r.tot;
  if(t&&r.circuits.length&&!o.noBoard){
    add('Tablou electric','tb:box',`Tablou electric îngropat ${t.panel} module`,'buc',1);
    if(t.main)add('Tablou electric','tb:main',`Disjunctor general 2P C${t.main}`,'buc',1);
    if(p.spd)add('Tablou electric','tb:spd','Descărcător de supratensiune T2 1P+N','buc',1);
    add('Tablou electric','tb:rcd','Întrerupător diferențial 2P 40 A 30 mA tip A','buc',r.rcds.length);
    for(const c of r.circuits)add('Tablou electric',`tb:mcb:${c.curve}${c.In}`,`Siguranță automată 1P+N ${c.curve}${c.In}`,'buc',1);
    add('Tablou electric','tb:bar','Set bare nul și PE','buc',1);
    add('Tablou electric','tb:comb','Pieptene de legătură 1P+N','buc',1);
  }
  const pts=p.items.filter(i=>i.type!=='tablou'&&r.by[i.id]).length;
  for(const m of Object.keys(WM)){const c=r.chase[m];if(!c)continue;add('Manoperă','man:slit:'+m,`Șlițuire în ${WM[m]} (tăiere, montaj tub, astupare)`,'m',c.m);add('Manoperă','man:dz:'+m,`Frezare locaș doză în ${WM[m]}`,'buc',c.dz)}
  add('Manoperă','man:pct','Manoperă — punct electric','buc',pts);
  if(t&&r.circuits.length&&!o.noBoard)add('Manoperă','man:tb','Manoperă — echipare și conectare tablou','buc',1);
  const out=[...m.values()];
  out.forEach(x=>{x.q=x.um==='m'?Math.ceil(x.q):Math.round(x.q)});
  const order=['Cabluri','Tuburi și doze','Aparataj','Iluminat','Curenți slabi','Tablou electric','Manoperă'];
  return out.sort((a,b)=>order.indexOf(a.cat)-order.indexOf(b.cat));
}

function genTasks(p,r,M){
  const mats=M||materials(p,r),q=k=>(mats.find(x=>x.key===k)||{q:0}).q;
  const tub=mats.filter(x=>x.key.startsWith('tub:')).reduce((t,x)=>t+x.q,0);
  const doze=mats.filter(x=>x.key.startsWith('doza:')).reduce((t,x)=>t+x.q,0);
  const pr=p.items.filter(i=>T[i.type].g==='priza'&&r.by[i.id]).length,ii=p.items.filter(i=>T[i.type].g==='intr'&&r.by[i.id]).length,ll=q('il:l')+q('il:s')+q('il:a');
  const L=[];
  const A=(t,h)=>L.push({id:uid(),t,s:'todo',who:'',due:'',hrs:Math.max(.5,Math.round(h*2)/2),note:''});
  A('Trasare trasee și poziții de doze pe pereți',Math.max(2,p.items.length*.1));
  A(`Șlițuire și frezare doze (${doze} doze)`,doze*.4);
  A(`Montaj tub de protecție (${tub} m)`,tub*.05);
  A(`Montaj doze de aparataj și derivație (${doze} buc)`,doze*.2);
  for(const c of r.circuits)A(`Tragere cablu ${c.id} ${c.name.toLowerCase()} — ${c.cable}, ~${Math.ceil(c.len)} m`,c.len*.04);
  if(r.tot&&r.circuits.length){A(`Montaj tablou electric ${r.tot.panel} module`,3);A('Conectare circuite în tablou și etichetare',r.circuits.length*.3)}
  if(pr+ii)A(`Montaj aparataj: ${pr} prize, ${ii} întrerupătoare`,(pr+ii)*.25);
  if(ll)A(`Montaj corpuri de iluminat (${ll} buc)`,ll*.5);
  if(q('doza:rac'))A(`Racordare consumatori ficși (${q('doza:rac')} buc)`,q('doza:rac')*.5);
  A('Verificări: continuitate PE, rezistența izolației, test diferențiale',3);
  A('Măsurare priză de pământ (buletin PRAM)',1);
  A('Recepție lucrare și predare documentație',1);
  return L;
}

const cv=$('#cv'),ctx=cv.getContext('2d'),stage=$('#stage'),insp=$('#insp');
let W=0,Hh=0,dpr=1,C={};
function readColors(){const cs=getComputedStyle(document.documentElement),g=n=>cs.getPropertyValue(n).trim();C={struct:g('--struct'),canvas:g('--canvas'),grid:g('--grid'),grid2:g('--grid2'),room:g('--room'),wall:g('--wall'),ink:g('--ink'),muted:g('--muted'),sel:g('--sel'),accent:g('--accent'),circ:[0,1,2,3,4,5,6,7].map(i=>g('--c'+i)),tv:g('--tv')||'#1F2A33'}}
const sx=x=>x*view.s+view.ox,sy=y=>y*view.s+view.oy,wx=X=>(X-view.ox)/view.s,wy=Y=>(Y-view.oy)/view.s;
function resize(){const b=stage.getBoundingClientRect();dpr=window.devicePixelRatio||1;W=Math.max(1,b.width);Hh=Math.max(1,b.height);cv.width=Math.round(W*dpr);cv.height=Math.round(Hh*dpr);cv.style.width=W+'px';cv.style.height=Hh+'px';if(view.auto)fit();draw()}
function toLoc(X,Y){const c=Math.cos(-view.rot),s2=Math.sin(-view.rot),dx=X-W/2,dy=Y-Hh/2;return{X:W/2+dx*c-dy*s2,Y:Hh/2+dx*s2+dy*c}}
const loc=e=>toLoc(e.offsetX,e.offsetY);
function setRot(r){const k=Math.PI/2;r=((r%(2*Math.PI))+2*Math.PI)%(2*Math.PI);const n=Math.round(r/k)*k;if(Math.abs(r-n)<.07)r=n%(2*Math.PI);view.rot=r;const b=$('#rotReset');if(b)b.hidden=!view.rot}
function fit(){
  const pts=[];P.rooms.forEach(r=>{pts.push([r.x,r.y],[r.x+r.w,r.y+r.h])});P.items.forEach(i=>pts.push([i.x,i.y]));
  if(!pts.length||W<10){view.s=50;view.ox=40;view.oy=40;return}
  const x0=Math.min(...pts.map(p=>p[0])),x1=Math.max(...pts.map(p=>p[0])),y0=Math.min(...pts.map(p=>p[1])),y1=Math.max(...pts.map(p=>p[1]));
  const sw=Math.abs(Math.sin(view.rot))>.7,pad=Math.min(40,Math.max(16,Math.min(W,Hh)*.05)),hud=document.querySelector('.hud'),sb=$('#selbar'),hb=(hud?hud.offsetHeight+10:0),tb=(sb&&sb.offsetHeight?sb.offsetHeight+10:0),bar=Math.max(hb,tb);
  const FW=(sw?Hh-bar*2:W)-pad*2,FH=(sw?W:Hh-(view.rot?bar*2:hb+tb))-pad*2;view.auto=true;view.s=clamp(Math.min(FW/Math.max(1,x1-x0),FH/Math.max(1,y1-y0)),12,260);
  view.ox=(W-(x1-x0)*view.s)/2-x0*view.s;view.oy=(view.rot?(Hh-(y1-y0)*view.s)/2:tb+pad+(FH-(y1-y0)*view.s)/2)-y0*view.s;
}
const colOf=id=>{const c=R&&R.circuits.find(x=>x.id===id);return c?C.circ[c.ci%8]:C.ink};
function halo(s,X,Y,font,col,al,bg){ctx.font=font;ctx.textAlign=al||'center';ctx.textBaseline='middle';ctx.lineJoin='round';ctx.lineWidth=4;ctx.strokeStyle=bg||C.room;ctx.strokeText(s,X,Y);ctx.fillStyle=col;ctx.fillText(s,X,Y)}
function txt(s,X,Y,size,wt,col,al){ctx.font=`${wt||500} ${size}px "IBM Plex Mono",ui-monospace,monospace`;ctx.textAlign=al||'center';ctx.textBaseline='middle';ctx.fillStyle=col;ctx.fillText(s,X,Y)}
function sym(type,X,Y,r,col,ghost,code){
  const t=T[type];ctx.save();if(ghost)ctx.globalAlpha=.5;ctx.lineWidth=1.7;ctx.strokeStyle=col;ctx.fillStyle=C.canvas;
  const circ=rr=>{ctx.beginPath();ctx.arc(X,Y,rr,0,Math.PI*2);ctx.fill();ctx.stroke()};
  if(t.g==='aux'){ctx.beginPath();ctx.arc(X,Y,r,0,Math.PI*2);ctx.fill();ctx.setLineDash([3,2]);ctx.stroke();ctx.setLineDash([]);ctx.beginPath();ctx.moveTo(X,Y-r*.6);ctx.lineTo(X,Y+r*.6);ctx.moveTo(X-r*.35,Y-r*.25);ctx.lineTo(X,Y-r*.6);ctx.lineTo(X+r*.35,Y-r*.25);ctx.moveTo(X-r*.35,Y+r*.25);ctx.lineTo(X,Y+r*.6);ctx.lineTo(X+r*.35,Y+r*.25);ctx.stroke()}
  else if(type==='tablou'){const w=r*2.8,h=r*1.5;ctx.fillStyle=C.ink;ctx.fillRect(X-w/2,Y-h/2,w,h);txt('TE',X,Y+.5,r*.95,600,C.canvas)}
  else if(t.g==='ded'){const s=r*1.3;ctx.beginPath();ctx.roundRect?ctx.roundRect(X-s,Y-s*.75,s*2,s*1.5,3):ctx.rect(X-s,Y-s*.75,s*2,s*1.5);ctx.fill();ctx.stroke();txt(t.code,X,Y+.5,t.code.length>2?r*.72:r*.9,600,col)}
  else if(t.g==='priza'){const cd=code||t.code;circ(r);txt(cd,X,Y+.5,cd.length>1?r*.8:r*1.05,600,col)}
  else if(type==='spot'){circ(r*.72);ctx.beginPath();ctx.arc(X,Y,r*.26,0,Math.PI*2);ctx.fillStyle=col;ctx.fill()}
  else if(t.g==='lum'){circ(r);const k=r*.7;ctx.beginPath();ctx.moveTo(X-k,Y-k);ctx.lineTo(X+k,Y+k);ctx.moveTo(X+k,Y-k);ctx.lineTo(X-k,Y+k);ctx.stroke();if(type==='aplica'){ctx.beginPath();ctx.moveTo(X-r,Y+r+3);ctx.lineTo(X+r,Y+r+3);ctx.stroke()}}
  else if(t.g==='intr'){ctx.beginPath();ctx.arc(X,Y,r*.42,0,Math.PI*2);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X,Y);ctx.lineTo(X+r*.95,Y-r*.95);if(type==='intr2'){ctx.moveTo(X,Y);ctx.lineTo(X+r*.25,Y-r*1.3)}if(type==='intrCS'){ctx.moveTo(X,Y);ctx.lineTo(X-r*.95,Y+r*.95);ctx.moveTo(X+r*.95,Y-r*.95);ctx.lineTo(X+r*.95+r*.35,Y-r*.6);ctx.moveTo(X-r*.95,Y+r*.95);ctx.lineTo(X-r*.95-r*.35,Y+r*.6)}if(type==='intrCR'){ctx.moveTo(X,Y);ctx.lineTo(X-r*.95,Y+r*.95);ctx.moveTo(X-r*.95,Y-r*.95);ctx.lineTo(X+r*.95,Y+r*.95)}ctx.stroke()}
  ctx.restore();
}
function draw(){
  if(!W)return;
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle=C.canvas;ctx.fillRect(0,0,W,Hh);
  if(view.rot){ctx.translate(W/2,Hh/2);ctx.rotate(view.rot);ctx.translate(-W/2,-Hh/2)}
  const GM=view.rot?Math.hypot(W,Hh):0;
  const step=view.s*.5>=14?.5:view.s>=14?1:5,maj=step===5?10:step===.5?1:5;
  const gx0=Math.floor(wx(-GM)/step)*step,gy0=Math.floor(wy(-GM)/step)*step;
  ctx.lineWidth=1;
  for(let x=gx0;sx(x)<=W+GM;x+=step){const mj=Math.abs(x/maj-Math.round(x/maj))<1e-6;ctx.strokeStyle=mj?C.grid2:C.grid;const X=Math.round(sx(x))+.5;ctx.beginPath();ctx.moveTo(X,-GM);ctx.lineTo(X,Hh+GM);ctx.stroke()}
  for(let y=gy0;sy(y)<=Hh+GM;y+=step){const mj=Math.abs(y/maj-Math.round(y/maj))<1e-6;ctx.strokeStyle=mj?C.grid2:C.grid;const Y=Math.round(sy(y))+.5;ctx.beginPath();ctx.moveTo(-GM,Y);ctx.lineTo(W+GM,Y);ctx.stroke()}
  {const ls=lvSorted(P),ix=ls.findIndex(l=>l.id===P.lvCur),bl=ix>0?ls[ix-1]:null;if(bl){const gr=lvGet(P,bl.id).rooms;ctx.save();ctx.strokeStyle=C.muted;ctx.globalAlpha=.55;ctx.lineWidth=1.5;ctx.setLineDash([6,5]);for(const r of gr)ctx.strokeRect(sx(r.x),sy(r.y),r.w*view.s,r.h*view.s);ctx.restore()}}
  const inF=r=>!focusId||(r.of||r.id)===focusId;
  for(const r of P.rooms){ctx.globalAlpha=inF(r)?1:.3;ctx.fillStyle=C.room;if(chOf(r)){rPath(r);ctx.fill()}else ctx.fillRect(sx(r.x),sy(r.y),r.w*view.s,r.h*view.s)}ctx.globalAlpha=1;
  drawBg();
  ctx.lineWidth=clamp(view.s*.1,2,7);ctx.strokeStyle=C.wall;ctx.lineJoin='miter';
  for(const r of P.rooms){ctx.globalAlpha=inF(r)?1:.3;if(chOf(r)){rPath(r);ctx.stroke();drawChDoor(r)}else ctx.strokeRect(sx(r.x),sy(r.y),r.w*view.s,r.h*view.s)}ctx.globalAlpha=1;
  labelHits=[];
  const r0=clamp(view.s*.15,7,13),occ=[],late=[],hitO=a=>occ.some(b=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y);
  for(const it of P.items){const g=T[it.type].g,hw=it.type==='tablou'?r0*1.45:g==='ded'?r0*1.35:r0+1,hh=it.type==='tablou'?r0*.8:g==='ded'?r0:r0+1;occ.push({x:sx(it.x)-hw,y:sy(it.y)-hh,w:2*hw,h:2*hh})}
  const MONO='"IBM Plex Mono",ui-monospace,monospace';
  if(layers.boxes||layers.routes||isoC())for(const q of(R&&R.phys&&R.phys.length?R.phys:P.jb)){const k=(JB[q.size]||JB.m).k+1;occ.push({x:sx(q.x)-k,y:sy(q.y)-k,w:2*k,h:2*k})}
  for(const r of P.rooms){
    if(r.of)continue;
    const area=P.rooms.filter(x=>x.id===r.id||x.of===r.id).reduce((t,x)=>t+areaR(x),0),big=layers.dims&&view.s>=25,X0=sx(r.x),Y0=sy(r.y),RW=r.w*view.s,RH=r.h*view.s;
    if(big){
      const wl=f(r.w,2)+' m',hl=f(r.h,2)+' m';ctx.font=`500 10.5px ${MONO}`;const ww=ctx.measureText(wl).width,hw2=ctx.measureText(hl).width;
      const hx=[X0+16,X0+RW-16-ww].find(x=>!hitO({x:x-2,y:Y0+6,w:ww+4,h:14})),vx=[X0+12,X0+RW-12].find(x=>!hitO({x:x-7,y:Y0+RH/2-hw2/2-2,w:14,h:hw2+4}));
      if(hx!=null&&ww+40<RW){occ.push({x:hx-2,y:Y0+6,w:ww+4,h:14});late.push(()=>halo(wl,hx,Y0+13,`${r.mw?600:500} 10.5px ${MONO}`,r.mw?C.ok:C.muted,'left'))}
      if(vx!=null&&hw2+40<RH){occ.push({x:vx-7,y:Y0+RH/2-hw2/2-2,w:14,h:hw2+4});late.push(()=>{ctx.save();ctx.translate(vx,Y0+RH/2);ctx.rotate(-Math.PI/2);halo(hl,0,0,`${r.mh?600:500} 10.5px ${MONO}`,r.mh?C.ok:C.muted);ctx.restore()})}
    }
    if(RW>60){
      const fs=clamp(view.s*.2,11,15),nf=`600 ${fs}px "IBM Plex Sans",system-ui,sans-serif`,at=f(area,1)+' m²',af=`400 11px ${MONO}`;
      ctx.font=nf;const nw=ctx.measureText(r.name).width;ctx.font=af;const aw=ctx.measureText(at).width;const bw=Math.max(nw,aw)+10,top=Y0+(big?34:20);
      const cands=[[X0+22,top],[X0+RW-bw-14,top],[X0+22,Y0+RH-32],[X0+RW-bw-14,Y0+RH-32],[X0+RW/2-bw/2,Y0+RH/2-8],[X0+22,Y0+RH/2-8]];
      let pick=cands[0];for(const c of cands){if(c[0]<X0+4||c[1]+24>Y0+RH)continue;if(!hitO({x:c[0]-5,y:c[1]-11,w:bw,h:34})){pick=c;break}}
      const[lx,ly]=pick;occ.push({x:lx-5,y:ly-11,w:bw,h:34});
      labelHits.push({id:r.id,x:lx-6,y:ly-14,w:nw+12,h:30,lx,ly});
      late.push(()=>{halo(r.name,lx,ly,nf,C.ink,'left');halo(at,lx,ly+16,af,C.muted,'left')});
    }
  }
  for(const g of P.struct)if(g.k==='gol')drawStruct(g,false,sel&&sel.kind==='st'&&sel.id===g.id);
  for(const d of P.doors)drawDoor(d,false,sel&&sel.kind==='door'&&sel.id===d.id);
  for(const w of P.wins)drawWin(w,false,sel&&sel.kind==='win'&&sel.id===w.id);
  for(const st of P.struct)if(st.k!=='gol')drawStruct(st,false,sel&&sel.kind==='st'&&sel.id===st.id);
  const selIt=sel&&sel.kind==='item'?P.items.find(i=>i.id===sel.id):null,selCid=selIt&&R&&R.by[selIt.id],hl=!isoC()&&selCid?(R.circuits.find(c=>c.id===selCid)||{}).ci:null;
  const iso=isoC(),focusCis=new Set(focusId&&R?P.items.filter(i=>i.room===focusId&&R.by[i.id]).map(i=>(R.circuits.find(c=>c.id===R.by[i.id])||{}).ci):[]);
  if(R&&(layers.routes||iso)){
    ctx.lineCap='round';ctx.lineJoin='round';
    for(const s of R.segs){
      if(iso&&s.ci!==iso.ci)continue;
      if(focusId&&!focusCis.has(s.ci))continue;
      const o=((s.ci%5)-2)*.035,col=C.circ[s.ci%8];
      ctx.strokeStyle=col;ctx.lineWidth=s.feed?2.2:1.3;ctx.globalAlpha=s.feed?.8:.55;ctx.setLineDash(s.feed?[]:[6,4]);
      if(hl!=null){if(s.ci===hl){ctx.lineWidth=s.feed?3.4:2.4;ctx.globalAlpha=1}else ctx.globalAlpha=.15}
      if(iso){ctx.lineWidth=s.feed?3.4:2.4;ctx.globalAlpha=1}
      const sl=sel&&sel.kind==='seg'&&sel.key===s.key;if(sl){ctx.strokeStyle=C.sel;ctx.lineWidth=5;ctx.globalAlpha=.55;ctx.setLineDash([]);ctx.beginPath();s.pts.forEach((q,k)=>k?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke();ctx.strokeStyle=col;ctx.globalAlpha=1;ctx.lineWidth=2.6;ctx.setLineDash(s.feed?[]:[6,4])}
      ctx.beginPath();s.pts.forEach((q,k)=>{const oo=k&&k<s.pts.length-1?o:0;k?ctx.lineTo(sx(q.x+oo),sy(q.y+oo)):ctx.moveTo(sx(q.x),sy(q.y))});ctx.stroke();
      if(sl)for(let k=1;k<s.pts.length-1;k++){ctx.setLineDash([]);ctx.fillStyle=C.canvas;ctx.strokeStyle=C.sel;ctx.lineWidth=2;ctx.beginPath();ctx.arc(sx(s.pts[k].x),sy(s.pts[k].y),5,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.strokeStyle=col;ctx.setLineDash(s.feed?[]:[6,4])}
      if((iso||sl)&&s.l>.3&&s.pts.length>1){let bi=0,bl=-1;for(let k=0;k+1<s.pts.length;k++){const L2=Math.abs(s.pts[k+1].x-s.pts[k].x)+Math.abs(s.pts[k+1].y-s.pts[k].y);if(L2>bl){bl=L2;bi=k}}const mx=(s.pts[bi].x+s.pts[bi+1].x)/2,my=(s.pts[bi].y+s.pts[bi+1].y)/2,lb=f(s.l,1)+' m';ctx.font='600 11px "IBM Plex Mono",monospace';const tw=ctx.measureText(lb).width+8;ctx.globalAlpha=1;ctx.fillStyle=C.canvas;ctx.fillRect(sx(mx)-tw/2,sy(my)-8,tw,16);ctx.strokeStyle=col;ctx.lineWidth=1;ctx.setLineDash([]);ctx.strokeRect(sx(mx)-tw/2,sy(my)-8,tw,16);txt(lb,sx(mx),sy(my)+.5,11,600,col);ctx.setLineDash(s.feed?[]:[6,4])}
    }
    ctx.setLineDash([]);ctx.globalAlpha=1;
    if(R.cs&&!iso){ctx.strokeStyle=C.tv;ctx.lineWidth=1.8;ctx.globalAlpha=.9;ctx.setLineDash([1,5]);ctx.lineCap='round';
      for(const s of R.cs.segs){if(focusId&&s.room!==focusId)continue;ctx.beginPath();s.pts.forEach((q,k)=>{const oo=k&&k<s.pts.length-1?.07:0;k?ctx.lineTo(sx(q.x+oo),sy(q.y-oo)):ctx.moveTo(sx(q.x),sy(q.y))});ctx.stroke()}
      ctx.setLineDash([]);const b=R.cs.box,X=sx(b.x),Y=sy(b.y);ctx.globalAlpha=1;ctx.fillStyle=C.canvas;ctx.strokeStyle=C.tv;ctx.lineWidth=1.6;ctx.beginPath();ctx.rect(X-9,Y-7,18,14);ctx.fill();ctx.stroke();ctx.fillStyle=C.tv;ctx.font='700 8px "IBM Plex Mono",monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('TV',X,Y+.5)}
  }
  const physL=R&&R.phys&&R.phys.length?R.phys:P.jb.map(j=>({x:j.x,y:j.y,jb:j.id,cis:[],size:j.size,id:''}));
  if(layers.boxes||layers.routes||iso){
    for(const q of physL){
      if(iso&&!q.cis.includes(iso.ci))continue;
      const X=sx(q.x),Y=sy(q.y),k=(JB[q.size]||JB.m).k+(layers.boxes||iso?1:-1),col=q.cis.length?C.circ[q.cis[0]%8]:C.muted,sj=sel&&sel.kind==='jb'&&sel.id===q.jb;
      if(q.jb){ctx.fillStyle=col;ctx.globalAlpha=.22;ctx.fillRect(X-k,Y-k,2*k,2*k);ctx.globalAlpha=1}else{ctx.fillStyle=C.canvas;ctx.fillRect(X-k,Y-k,2*k,2*k)}
      ctx.strokeStyle=sj?C.sel:col;ctx.lineWidth=sj?3:q.jb?2.4:2;ctx.strokeRect(X-k,Y-k,2*k,2*k);
      if(layers.boxes||iso){ctx.beginPath();ctx.moveTo(X-k,Y-k);ctx.lineTo(X+k,Y+k);ctx.moveTo(X+k,Y-k);ctx.lineTo(X-k,Y+k);ctx.lineWidth=1;ctx.strokeStyle=col;ctx.stroke();if(q.id){const tf=`700 10px ${MONO}`;ctx.font=tf;const tw=ctx.measureText(q.id).width;let pl=null;for(const[dx,dy]of[[0,-k-8],[0,k+8],[k+4+tw/2,0],[-k-4-tw/2,0]]){const rc={x:X+dx-tw/2-1,y:Y+dy-6,w:tw+2,h:12};if(!hitO(rc)){pl=[X+dx,Y+dy];occ.push(rc);break}}if(!pl)pl=[X,Y-k-8];halo(q.id,pl[0],pl[1],tf,col,'center')}}
    }
  }
  for(const fn of late)fn();
  if(meas)drawMeas();
  if(R&&R.hits.length){const bad=getComputedStyle(document.documentElement).getPropertyValue('--bad').trim();for(const h of R.hits){if(iso&&h.ci!==iso.ci)continue;const X=sx(h.x),Y=sy(h.y);ctx.strokeStyle=bad;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(X,Y,7,0,Math.PI*2);ctx.moveTo(X-4,Y-4);ctx.lineTo(X+4,Y+4);ctx.moveTo(X+4,Y-4);ctx.lineTo(X-4,Y+4);ctx.stroke()}}
  if(R&&R.virt&&!P.items.some(i=>i.type==='trecere')){const X=sx(R.virt.x),Y=sy(R.virt.y);sym('trecere',X,Y,r0,C.accent);txt('din tabloul '+((R.board&&R.board.l.name)||''),X+r0+4,Y+r0+6,10,600,C.accent,'left')}
  for(const it of P.items){
    const cid=R&&R.by[it.id],col=it.type==='tablou'?C.ink:cid?colOf(cid):C.muted,X=sx(it.x),Y=sy(it.y);
    const dim=(iso&&it.type!=='tablou'&&cid!==iso.id)||(focusId&&it.room!==focusId&&it.type!=='tablou');if(dim)ctx.globalAlpha=.22;
    sym(it.type,X,Y,r0,col,false,codeOf(it));ctx.globalAlpha=1;if(dim)continue;
    if(R&&R.flag[it.id]){ctx.save();ctx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--bad').trim();ctx.lineWidth=2;ctx.setLineDash([3,3]);ctx.beginPath();ctx.arc(X,Y,r0+5,0,Math.PI*2);ctx.stroke();ctx.restore()}
    if(layers.tags&&cid&&(view.s>=45||iso||hl!=null&&(R.circuits.find(c=>c.id===cid)||{}).ci===hl)){const tf=`600 10px ${MONO}`;ctx.font=tf;const tw=ctx.measureText(cid).width;let bx=null,by=0,ba='left';
      for(const[dx,dy,al]of[[r0+3,-r0,'left'],[r0+4,0,'left'],[r0+3,r0,'left'],[-r0-3,-r0,'right'],[-r0-4,0,'right'],[-r0-3,r0,'right'],[0,-r0-9,'center'],[0,r0+9,'center']]){const x=al==='left'?X+dx:al==='right'?X+dx-tw:X-tw/2,rc={x:x-1,y:Y+dy-6,w:tw+2,h:12};if(!hitO(rc)){bx=X+dx;by=Y+dy;ba=al;occ.push(rc);break}}
      if(bx===null){bx=X+r0+3;by=Y-r0}halo(cid,bx,by,tf,col,ba)}
  }
  {const si=sel&&sel.kind==='item'?P.items.find(i=>i.id===sel.id):null,sws=layers.cmd?P.items.filter(isSw):si?(isSw(si)?[si]:isLight(si)?ctrlBy(P,si):[]):[];
    if(pickSw){const ps=P.items.find(i=>i.id===pickSw);if(ps&&!sws.includes(ps))sws.push(ps)}
    if(sws.length){ctx.save();ctx.strokeStyle=C.accent;ctx.lineWidth=1.6;ctx.setLineDash([2,4]);ctx.lineCap='round';for(const sw of sws)for(const l of ctrlOf(P,sw)){ctx.beginPath();ctx.moveTo(sx(sw.x),sy(sw.y));const mx=(sw.x+l.x)/2,my=(sw.y+l.y)/2,nx=-(l.y-sw.y)*.12,ny=(l.x-sw.x)*.12;ctx.quadraticCurveTo(sx(mx+nx),sy(my+ny),sx(l.x),sy(l.y));ctx.stroke()}ctx.restore()}}
  if(meas)chips=[];
  if(sel&&!meas){
    ctx.strokeStyle=C.sel;ctx.lineWidth=2.5;
    if(sel.kind==='item'){const it=P.items.find(i=>i.id===sel.id);if(it){ctx.beginPath();ctx.arc(sx(it.x),sy(it.y),r0+6,0,Math.PI*2);ctx.stroke()}}
    else if(sel.kind==='room'){const r=P.rooms.find(i=>i.id===sel.id);if(r){ctx.setLineDash([8,5]);ctx.strokeRect(sx(r.x)-4,sy(r.y)-4,r.w*view.s+8,r.h*view.s+8);ctx.setLineDash([]);
      for(const[hx,hy]of HANDLES){const X=sx(r.x+r.w*(hx+1)/2),Y=sy(r.y+r.h*(hy+1)/2),k=hx&&hy?7:6;ctx.fillStyle=C.canvas;ctx.strokeStyle=C.sel;ctx.lineWidth=2.5;ctx.beginPath();hx&&hy?ctx.rect(X-k,Y-k,2*k,2*k):ctx.arc(X,Y,k,0,Math.PI*2);ctx.fill();ctx.stroke()}
      chips=[];for(const[ax,X,Y]of[['x',sx(r.x+r.w/2),sy(r.y)-22],['y',sx(r.x)-22,sy(r.y+r.h/2)]]){const lb=Math.round((ax==='x'?r.w:r.h)*100)+' cm';ctx.font='600 13px "IBM Plex Mono",monospace';const tw=ctx.measureText(lb).width+20,th=26;ctx.save();ctx.translate(X,Y);if(ax==='y')ctx.rotate(-Math.PI/2);ctx.fillStyle=C.accent;ctx.beginPath();ctx.roundRect?ctx.roundRect(-tw/2,-th/2,tw,th,13):ctx.rect(-tw/2,-th/2,tw,th);ctx.fill();txt(lb,0,1,13,600,C.canvas);ctx.restore();chips.push({ax,X,Y,w:ax==='x'?tw:th,h:ax==='x'?th:tw,id:r.id})}}}
  }
  if(gest&&gest.k==='st'){const q=stFrom(gest);if(q)drawStruct(q,true,false)}
  if(P.sketch.length){ctx.save();ctx.strokeStyle=C.muted;ctx.lineWidth=2.2;ctx.lineJoin='round';ctx.lineCap='round';ctx.setLineDash([]);for(const st of P.sketch){ctx.beginPath();st.pts.forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke()}ctx.restore()}
  if(P.sketchErase&&P.sketchErase.length){ctx.save();ctx.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--bad').trim();ctx.lineWidth=clamp(view.s*.1,2,7)+3;ctx.setLineDash([6,4]);for(const g of P.sketchErase){const A=g.o==='h'?{x:g.a,y:g.c}:{x:g.c,y:g.a},B=g.o==='h'?{x:g.b,y:g.c}:{x:g.c,y:g.b};ctx.beginPath();ctx.moveTo(sx(A.x),sy(A.y));ctx.lineTo(sx(B.x),sy(B.y));ctx.stroke()}ctx.restore()}
  if(txStrokes.length){ctx.save();ctx.strokeStyle=C.accent;ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';for(const st of txStrokes){ctx.beginPath();st.forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke()}if(gest&&gest.k==='write'){ctx.beginPath();gest.pts.forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke()}ctx.restore()}
  else if(gest&&gest.k==='write'){ctx.save();ctx.strokeStyle=C.accent;ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();gest.pts.forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke();ctx.restore()}
  if(skOpen.length&&tool==='schita'){ctx.save();const bad=getComputedStyle(document.documentElement).getPropertyValue('--bad').trim();for(const q of skOpen){const X=sx(q.x),Y=sy(q.y);ctx.fillStyle=bad;ctx.globalAlpha=.18;ctx.beginPath();ctx.arc(X,Y,22,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;ctx.strokeStyle=bad;ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(X,Y,22,0,Math.PI*2);ctx.stroke()}ctx.restore()}
  if(eraseHover&&tool==='schita'){ctx.save();ctx.strokeStyle=C.ink;ctx.lineWidth=1.5;ctx.setLineDash([3,3]);ctx.beginPath();ctx.arc(sx(eraseHover.x),sy(eraseHover.y),ERASE_PX,0,Math.PI*2);ctx.stroke();ctx.restore()}
  if(gest&&gest.k==='sketch'){ctx.save();ctx.strokeStyle=C.accent;ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.lineCap='round';ctx.beginPath();gest.pts.forEach((q,i)=>i?ctx.lineTo(sx(q.x),sy(q.y)):ctx.moveTo(sx(q.x),sy(q.y)));ctx.stroke();ctx.restore()}
  if(gest&&gest.k==='room'){
    const x=Math.min(gest.x0,gest.x1),y=Math.min(gest.y0,gest.y1),w=Math.abs(gest.x1-gest.x0),h=Math.abs(gest.y1-gest.y0);
    ctx.fillStyle=C.room;ctx.globalAlpha=.7;ctx.fillRect(sx(x),sy(y),w*view.s,h*view.s);ctx.globalAlpha=1;
    ctx.strokeStyle=C.accent;ctx.lineWidth=2;ctx.setLineDash([7,5]);ctx.strokeRect(sx(x),sy(y),w*view.s,h*view.s);ctx.setLineDash([]);
    txt(`${f(w,2)} × ${f(h,2)} m`,sx(x+w/2),sy(y+h/2),13,600,C.accent);
  }
  const gh=gest&&gest.k==='place'?gest:(hover&&(T[tool]||JBT[tool]||tool==='usa'||tool==='geam')?{type:tool,x:hover.x,y:hover.y}:null);
  if(gh&&gh.type==='usa'){const q=placeDoor(gh.x,gh.y);if(q)drawDoor(q,true,false)}
  else if(gh&&gh.type==='geam'){const q=placeWin(gh.x,gh.y);if(q)drawWin(q,true,false)}
  else if(gh&&JBT[gh.type]){const q=jbPt(gh.x,gh.y);if(q){const k=JB[JBT[gh.type]].k+1;ctx.strokeStyle=C.accent;ctx.lineWidth=2;ctx.globalAlpha=.7;ctx.strokeRect(sx(q.x)-k,sy(q.y)-k,2*k,2*k);ctx.globalAlpha=1}}
  else if(gh){const q=placePt(gh.type,gh.x,gh.y);sym(gh.type,sx(q.x),sy(q.y),r0,C.accent,true,gh.type==='prizaM'?(lastN>1?'P'+lastN:'P'):undefined)}
  $('#scaleLbl').textContent=`grilă ${f(step,step<1?1:0)} m · ${Math.round(view.s)} px/m`;
  {const v=3779.5/view.s,N=[5,10,20,25,50,75,100,125,150,200,250,300,400,500,750,1000];$('#zPct').textContent='1:'+N.reduce((a,b)=>Math.abs(b-v)<Math.abs(a-v)?b:a)}
  placeSelbar();
}

function hitItem(X,Y){let b=null,bd=18;for(const it of P.items){if(focusId&&it.room!==focusId&&it.type!=='tablou')continue;const d=Math.hypot(sx(it.x)-X,sy(it.y)-Y);if(d<bd){bd=d;b=it}}return b}
function hitRoom(x,y){for(let i=P.rooms.length-1;i>=0;i--){const r=P.rooms[i];if(focusId&&(r.of||r.id)!==focusId)continue;if(x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h&&!inCut(r,x,y))return r}return null}
function snapRoomPt(x,y){
  let X=r05(x),Y=r05(y);const tol=12/view.s;
  for(const r of P.rooms){for(const v of [r.x,r.x+r.w])if(Math.abs(x-v)<tol)X=v;for(const v of [r.y,r.y+r.h])if(Math.abs(y-v)<tol)Y=v}
  return{x:X,y:Y};
}
function placeDoor(x,y,keep){
  const tol=Math.max(.45,22/view.s),inR=hitRoom(x,y),E=[];
  for(const r of P.rooms)for(const e of rEdges(r))E.push({...e,r});
  let best=null;
  for(const e of E){
    const t=e.o==='h'?x:y,n=e.o==='h'?y:x;if(t<e.lo-.1||t>e.hi+.1)continue;
    const dist=Math.abs(n-e.c)+(inR&&inR.id===e.r.id?0:.001);
    if(dist<tol&&(!best||dist<best.dist))best={...e,t,dist};
  }
  if(!best)return null;
  const w=keep?keep.w:.8,lo=best.lo+w/2+.1,hi=best.hi-w/2-.1,t=lo>hi?(best.lo+best.hi)/2:clamp(r05(best.t),lo,hi);
  const d={o:best.o,c:best.c,t,w,hinge:keep?keep.hinge:0,s:best.s};
  if(!keep){const q=doorRooms(P,d);if(!q.ot){d.kind='ext';d.w=.9;const l2=best.lo+.55,h2=best.hi-.55;d.t=l2>h2?(best.lo+best.hi)/2:clamp(d.t,l2,h2)}else d.kind='int'}
  return d;
}
const HANDLES=[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]];
function hitHandle(X,Y){
  if(!sel||sel.kind!=='room')return null;const r=P.rooms.find(i=>i.id===sel.id);if(!r)return null;
  let b=null,bd=20;
  for(const[hx,hy]of HANDLES){const d=Math.hypot(sx(r.x+r.w*(hx+1)/2)-X,sy(r.y+r.h*(hy+1)/2)-Y);if(d<bd){bd=d;b={r,hx,hy}}}
  return b;
}
let hatch=null,hatchKey='';
function hatchPat(){const k=C.struct;if(hatch&&hatchKey===k)return hatch;const c=document.createElement('canvas');c.width=c.height=8;const g=c.getContext('2d');g.strokeStyle=k;g.lineWidth=1.6;g.beginPath();g.moveTo(0,8);g.lineTo(8,0);g.moveTo(-2,2);g.lineTo(2,-2);g.moveTo(6,10);g.lineTo(10,6);g.stroke();hatch=ctx.createPattern(c,'repeat');hatchKey=k;return hatch}
function drawStruct(st,ghost,selected){
  const a=Math.min(st.a,st.b),b=Math.max(st.a,st.b),P1=st.o==='h'?{x:a,y:st.c}:{x:st.c,y:a},P2=st.o==='h'?{x:b,y:st.c}:{x:st.c,y:b};
  ctx.save();if(ghost)ctx.globalAlpha=.6;
  if(st.k==='gol'){
    const lw=clamp(view.s*.1,2,7),nw=(lw/2+1.5)/view.s,sh=(lw/2)/view.s,a2=a+sh,b2=b-sh;
    if(!ghost)for(const k of[1,-1]){const Q1=st.o==='h'?{x:a2,y:st.c}:{x:st.c,y:a2},Q2=st.o==='h'?{x:b2,y:st.c+k*nw}:{x:st.c+k*nw,y:b2},mid=st.o==='h'?{x:(a+b)/2,y:st.c+k*.15}:{x:st.c+k*.15,y:(a+b)/2};
      ctx.fillStyle=roomAtPt(P,mid)?C.room:C.canvas;ctx.fillRect(Math.min(sx(Q1.x),sx(Q2.x)),Math.min(sy(Q1.y),sy(Q2.y)),Math.abs(sx(Q2.x)-sx(Q1.x))||1,Math.abs(sy(Q2.y)-sy(Q1.y))||1)}
    ctx.strokeStyle=ghost?C.accent:selected?C.sel:C.wall;ctx.lineWidth=2;
    if(!st.auto||ghost||selected)for(const t of[a,b]){const p1=st.o==='h'?{x:t,y:st.c-nw}:{x:st.c-nw,y:t},p2=st.o==='h'?{x:t,y:st.c+nw}:{x:st.c+nw,y:t};ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke()}
    if(ghost||selected){ctx.setLineDash([5,4]);ctx.beginPath();ctx.moveTo(sx(P1.x),sy(P1.y));ctx.lineTo(sx(P2.x),sy(P2.y));ctx.stroke();ctx.setLineDash([])}
  }else if(st.k==='rez'){
    const th=clamp(view.s*.1,2,7)+8,X1=sx(P1.x),Y1=sy(P1.y),X2=sx(P2.x),Y2=sy(P2.y);
    const rx=st.o==='h'?X1:X1-th/2,ry=st.o==='h'?Y1-th/2:Y1,rw=st.o==='h'?X2-X1:th,rh=st.o==='h'?th:Y2-Y1;
    ctx.fillStyle=C.canvas;ctx.fillRect(rx,ry,rw,rh);ctx.fillStyle=hatchPat();ctx.fillRect(rx,ry,rw,rh);ctx.strokeStyle=selected?C.sel:C.struct;ctx.lineWidth=selected?3:2;ctx.strokeRect(rx,ry,rw,rh);
  }else{
    const hw=(st.w||.25)/2,Q1=st.o==='h'?{x:a,y:st.c-hw}:{x:st.c-hw,y:a},X=sx(Q1.x),Y=sy(Q1.y),Wd=st.o==='h'?(b-a)*view.s:2*hw*view.s,Ht=st.o==='h'?2*hw*view.s:(b-a)*view.s;
    ctx.fillStyle=C.struct;ctx.globalAlpha=(ghost?.6:1)*.12;ctx.fillRect(X,Y,Wd,Ht);ctx.globalAlpha=ghost?.6:1;ctx.strokeStyle=selected?C.sel:C.struct;ctx.lineWidth=selected?3:1.8;ctx.setLineDash([9,5]);ctx.strokeRect(X,Y,Wd,Ht);ctx.setLineDash([]);
    if(Math.max(Wd,Ht)>70){ctx.save();ctx.translate(X+Wd/2,Y+Ht/2);if(st.o==='v')ctx.rotate(-Math.PI/2);txt('GRINDĂ',0,0,10,700,C.struct);ctx.restore()}
  }
  ctx.restore();
}
function stFrom(g){
  if(g.k!=='st')return null;
  if(g.type==='rez'||g.type==='gol'){const e=g.edge;if(!e)return null;const t0=g.t0,t1=clamp(r05(e.o==='h'?g.x:g.y),e.lo,e.hi);if(Math.abs(t1-t0)<.1)return{k:g.type,o:e.o,c:e.c,a:t0,b:t0+.1};return{k:g.type,o:e.o,c:e.c,a:t0,b:t1}}
  const dx=g.x-g.x0,dy=g.y-g.y0,o=Math.abs(dx)>=Math.abs(dy)?'h':'v';
  return{k:'grinda',o,c:o==='h'?r05(g.y0):r05(g.x0),a:o==='h'?r05(g.x0):r05(g.y0),b:o==='h'?r05(g.x):r05(g.y),w:.25};
}
function nearEdge(x,y){
  const tol=Math.max(.4,22/view.s);let best=null;
  for(const r of P.rooms)for(const e of[{o:'h',c:r.y,lo:r.x,hi:r.x+r.w},{o:'h',c:r.y+r.h,lo:r.x,hi:r.x+r.w},{o:'v',c:r.x,lo:r.y,hi:r.y+r.h},{o:'v',c:r.x+r.w,lo:r.y,hi:r.y+r.h}]){
    const t=e.o==='h'?x:y,n=e.o==='h'?y:x;if(t<e.lo-.1||t>e.hi+.1)continue;const d=Math.abs(n-e.c);if(d<tol&&(!best||d<best.d))best={...e,d};
  }
  if(!best)return null;
  const same=P.rooms.flatMap(r=>best.o==='h'?[[r.y,r.x,r.x+r.w],[r.y+r.h,r.x,r.x+r.w]]:[[r.x,r.y,r.y+r.h],[r.x+r.w,r.y,r.y+r.h]]).filter(q=>Math.abs(q[0]-best.c)<.02);
  return{o:best.o,c:best.c,lo:Math.min(...same.map(q=>q[1])),hi:Math.max(...same.map(q=>q[2]))};
}
let isoId='';
const isoC=()=>isoId&&R?R.circuits.find(c=>c.id===isoId)||null:null;
function renderIso(){
  const el=$('#isoSel');if(!el)return;if(isoId&&!isoC())isoId='';
  el.innerHTML=`<option value=""${!isoId&&layers.routes?' selected':''}>Toate traseele</option><option value="__off"${!isoId&&!layers.routes?' selected':''}>Fără trasee</option>`+(R?R.circuits.map(c=>`<option value="${c.id}"${c.id===isoId?' selected':''}>${c.id} · ${esc(c.name)} · ${f(c.len,1)} m</option>`).join(''):'');
  el.classList.toggle('on',!!isoId);
}
function setIso(id){if(id==='__off'){isoId='';layers.routes=false}else{isoId=id||'';layers.routes=true}renderLayers();renderIso();if(tab!=='plan')showTab('plan');draw();renderDyn()}
function hitStruct(X,Y){
  let b=null,bd=12;
  for(const st of P.struct){const a=Math.min(st.a,st.b),c=Math.max(st.a,st.b),A=st.o==='h'?{x:a,y:st.c}:{x:st.c,y:a},B=st.o==='h'?{x:c,y:st.c}:{x:st.c,y:c},ax=sx(A.x),ay=sy(A.y),bx=sx(B.x),by=sy(B.y);
    const L=Math.hypot(bx-ax,by-ay)||1,u=clamp(((X-ax)*(bx-ax)+(Y-ay)*(by-ay))/(L*L),0,1),dd=Math.hypot(X-ax-u*(bx-ax),Y-ay-u*(by-ay))-(st.k==='grinda'?(st.w||.25)/2*view.s:0);
    if(dd<bd){bd=dd;b=st}}
  return b;
}
function jbPt(x,y){
  const r=hitRoom(x,y);if(!r)return null;
  const c=[[Math.abs(y-r.y),{x:clamp(r05(x),r.x+.1,r.x+r.w-.1),y:r.y}],[Math.abs(y-r.y-r.h),{x:clamp(r05(x),r.x+.1,r.x+r.w-.1),y:r.y+r.h}],[Math.abs(x-r.x),{x:r.x,y:clamp(r05(y),r.y+.1,r.y+r.h-.1)}],[Math.abs(x-r.x-r.w),{x:r.x+r.w,y:clamp(r05(y),r.y+.1,r.y+r.h-.1)}]].sort((a,b)=>a[0]-b[0])[0][1];
  return{...c,room:r.of||r.id};
}
function hitJb(X,Y){let b=null,bd=14;for(const j of P.jb){const d=Math.hypot(sx(j.x)-X,sy(j.y)-Y);if(d<bd){bd=d;b=j}}return b}
let chips=[];
function rdp(pts,eps){if(pts.length<3)return pts;let dm=0,ix=0;const A=pts[0],B=pts[pts.length-1],L=Math.hypot(B.x-A.x,B.y-A.y)||1e-9;for(let i=1;i<pts.length-1;i++){const d=Math.abs((B.y-A.y)*pts[i].x-(B.x-A.x)*pts[i].y+B.x*A.y-B.y*A.x)/L;if(d>dm){dm=d;ix=i}}if(dm>eps){const a=rdp(pts.slice(0,ix+1),eps),b=rdp(pts.slice(ix),eps);return[...a.slice(0,-1),...b]}return[A,B]}
function sketchRooms(raw){
  if(raw.length<6)return null;
  const xs=raw.map(q=>q.x),ys=raw.map(q=>q.y),bw=Math.max(...xs)-Math.min(...xs),bh=Math.max(...ys)-Math.min(...ys);
  if(bw<.5||bh<.5)return null;
  const gap=Math.hypot(raw[0].x-raw[raw.length-1].x,raw[0].y-raw[raw.length-1].y);
  if(gap>Math.max(bw,bh)*.35)return null;
  const eps=Math.max(.12,Math.max(bw,bh)*.06);
  let fi=0,fd=0;raw.forEach((q,i)=>{const d=Math.hypot(q.x-raw[0].x,q.y-raw[0].y);if(d>fd){fd=d;fi=i}});
  let pts=[...rdp(raw.slice(0,fi+1),eps).slice(0,-1),...rdp([...raw.slice(fi),raw[0]],eps)];
  let segs=[];for(let i=0;i+1<pts.length;i++){const a=pts[i],b=pts[i+1],dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy);if(len<.15)continue;const o=Math.abs(dx)>=Math.abs(dy)?'h':'v';const l=segs[segs.length-1];if(l&&l.o===o){l.sum+=(o==='h'?(a.y+b.y)/2:(a.x+b.x)/2)*len;l.len+=len}else segs.push({o,sum:(o==='h'?(a.y+b.y)/2:(a.x+b.x)/2)*len,len})}
  if(segs.length>1&&segs[0].o===segs[segs.length-1].o){const l=segs.pop();segs[0].sum+=l.sum;segs[0].len+=l.len}
  const box=()=>[{x:r05(Math.min(...xs)),y:r05(Math.min(...ys)),w:Math.max(.5,r05(bw)),h:Math.max(.5,r05(bh))}];
  if(segs.length<4||segs.length%2)return box();
  const v=segs.map(q=>q.sum/q.len);
  const snapC=(c,o)=>{const tol=Math.max(.25,14/view.s);let b=r05(c),bd=tol;for(const r of P.rooms)for(const e of o==='h'?[r.y,r.y+r.h]:[r.x,r.x+r.w]){const d=Math.abs(e-c);if(d<bd){bd=d;b=e}}return b};
  const cv=v.map((c,i)=>snapC(c,segs[i].o));
  const poly=[];for(let i=0;i<segs.length;i++){const a=segs[i],b=segs[(i+1)%segs.length];poly.push(a.o==='h'?{x:cv[(i+1)%segs.length],y:cv[i]}:{x:cv[i],y:cv[(i+1)%segs.length]})}
  if(poly.length===4)return box().map(()=>{const px=poly.map(q=>q.x),py=poly.map(q=>q.y),x0=Math.min(...px),y0=Math.min(...py);return{x:x0,y:y0,w:Math.max(...px)-x0,h:Math.max(...py)-y0}}).filter(r=>r.w>=.5&&r.h>=.5);
  const Y=[...new Set(poly.map(q=>q.y))].sort((a,b)=>a-b),VE=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];if(Math.abs(a.x-b.x)<1e-6&&Math.abs(a.y-b.y)>1e-6)VE.push({x:a.x,y0:Math.min(a.y,b.y),y1:Math.max(a.y,b.y)})}
  let out=[];
  for(let k=0;k+1<Y.length;k++){const ym=(Y[k]+Y[k+1])/2,cx=VE.filter(e=>ym>e.y0&&ym<e.y1).map(e=>e.x).sort((a,b)=>a-b);for(let j=0;j+1<cx.length;j+=2){const r={x:cx[j],y:Y[k],w:cx[j+1]-cx[j],h:Y[k+1]-Y[k]};const up=out.find(q=>Math.abs(q.x-r.x)<1e-6&&Math.abs(q.w-r.w)<1e-6&&Math.abs(q.y+q.h-r.y)<1e-6);if(up)up.h+=r.h;else out.push(r)}}
  out=out.map(r=>({x:+r.x.toFixed(2),y:+r.y.toFixed(2),w:+r.w.toFixed(2),h:+r.h.toFixed(2)})).filter(r=>r.w>=.3&&r.h>=.3);
  if(!out.length||out.length>4)return box();
  out.sort((a,b)=>b.w*b.h-a.w*a.h);
  return out;
}
let skErase=false,eraseHover=null;const ERASE_PX=16;
function eraseAlong(a,b){
  const r=ERASE_PX/view.s,steps=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/(r/2))),probes=[];
  for(let i=0;i<=steps;i++)probes.push({x:a.x+(b.x-a.x)*i/steps,y:a.y+(b.y-a.y)*i/steps});
  const near=q=>probes.some(c=>Math.hypot(q.x-c.x,q.y-c.y)<r);
  const out=[];
  for(const st of P.sketch){
    const dense=[];for(let i=0;i<st.pts.length;i++){const p1=st.pts[i];if(i){const p0=st.pts[i-1],d=Math.hypot(p1.x-p0.x,p1.y-p0.y),n=Math.ceil(d/(r/3));for(let k=1;k<n;k++)dense.push({x:p0.x+(p1.x-p0.x)*k/n,y:p0.y+(p1.y-p0.y)*k/n})}dense.push(p1)}
    if(!dense.some(near)){out.push(st);continue}
    let cur=[];const flush=()=>{let L=0;for(let i=1;i<cur.length;i++)L+=Math.hypot(cur[i].x-cur[i-1].x,cur[i].y-cur[i-1].y);if(cur.length>1&&L>=.1)out.push({pts:rdp(cur,.02).map(q=>({x:+q.x.toFixed(3),y:+q.y.toFixed(3)}))});cur=[]};
    for(const q of dense){if(near(q))flush();else cur.push(q)}flush();
  }
  P.sketch=out;
  const add=[];
  const ddx=Math.abs(b.x-a.x),ddy=Math.abs(b.y-a.y),dirO=Math.hypot(ddx,ddy)*view.s<2?null:(ddx>=ddy?'h':'v');
  const edges=P.rooms.flatMap(rm=>[{o:'h',c:rm.y,a:rm.x,b:rm.x+rm.w},{o:'h',c:rm.y+rm.h,a:rm.x,b:rm.x+rm.w},{o:'v',c:rm.x,a:rm.y,b:rm.y+rm.h},{o:'v',c:rm.x+rm.w,a:rm.y,b:rm.y+rm.h}]);
  for(const q of dirO?probes:[]){
    const hits=edges.filter(e=>e.o===dirO).map(e=>({e,d:e.o==='h'?Math.abs(q.y-e.c):Math.abs(q.x-e.c),t:e.o==='h'?q.x:q.y})).filter(h=>h.d<r&&h.t>=h.e.a-1e-6&&h.t<=h.e.b+1e-6);
    if(!hits.length)continue;const dm=Math.min(...hits.map(h=>h.d));
    for(const h of hits)if(h.d<=dm+1e-6)add.push({o:h.e.o,c:h.e.c,a:Math.max(h.e.a,h.t-r),b:Math.min(h.e.b,h.t+r)});
  }
  if(add.length){const all=[...P.sketchErase,...add],res=[];for(const g of all){const m=res.find(q=>q.o===g.o&&Math.abs(q.c-g.c)<1e-3&&g.a<=q.b+1e-6&&g.b>=q.a-1e-6);if(m){m.a=Math.min(m.a,g.a);m.b=Math.max(m.b,g.b)}else res.push({...g})}
    let ch=true;while(ch){ch=false;for(let i=0;i<res.length;i++)for(let j=i+1;j<res.length;j++){const A=res[i],B=res[j];if(A.o===B.o&&Math.abs(A.c-B.c)<1e-3&&B.a<=A.b+1e-6&&B.b>=A.a-1e-6){A.a=Math.min(A.a,B.a);A.b=Math.max(A.b,B.b);res.splice(j,1);ch=true;break}}}
    P.sketchErase=res.map(g=>({o:g.o,c:+g.c.toFixed(3),a:+g.a.toFixed(3),b:+g.b.toFixed(3)}))}
}
function strokeShape(raw){
  if(raw.length<2)return null;
  const xs=raw.map(q=>q.x),ys=raw.map(q=>q.y),bw=Math.max(...xs)-Math.min(...xs),bh=Math.max(...ys)-Math.min(...ys),mx=Math.max(bw,bh);
  const gap=Math.hypot(raw[0].x-raw[raw.length-1].x,raw[0].y-raw[raw.length-1].y),eps=Math.max(.12,mx*.05);
  const closed=raw.length>=4&&bw>=.5&&bh>=.5&&gap<mx*.3;
  const segsOf=pts=>{const out=[];for(let i=0;i+1<pts.length;i++){const a=pts[i],b=pts[i+1],dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy);if(len<.12)continue;const o=Math.abs(dx)>=Math.abs(dy)?'h':'v',l=out[out.length-1],c=o==='h'?(a.y+b.y)/2:(a.x+b.x)/2;if(l&&l.o===o){l.sum+=c*len;l.len+=len;l.e=o==='h'?b.x:b.y}else out.push({o,sum:c*len,len,s:o==='h'?a.x:a.y,e:o==='h'?b.x:b.y})}return out};
  if(closed){
    let fi=0,fd=0;raw.forEach((q,i)=>{const d=Math.hypot(q.x-raw[0].x,q.y-raw[0].y);if(d>fd){fd=d;fi=i}});
    const pts=[...rdp(raw.slice(0,fi+1),eps).slice(0,-1),...rdp([...raw.slice(fi),raw[0]],eps)];
    const sg=segsOf(pts);if(sg.length>1&&sg[0].o===sg[sg.length-1].o){const l=sg.pop();sg[0].sum+=l.sum;sg[0].len+=l.len}
    const x0=Math.min(...xs),y0=Math.min(...ys),bb=[{x:x0,y:y0},{x:x0+bw,y:y0},{x:x0+bw,y:y0+bh},{x:x0,y:y0+bh}];
    if(sg.length<4||sg.length%2)return{poly:bb};
    const cv=sg.map(q=>q.sum/q.len),poly=[];
    for(let i=0;i<sg.length;i++){const a=sg[i],n=(i+1)%sg.length;poly.push(a.o==='h'?{x:cv[n],y:cv[i]}:{x:cv[i],y:cv[n]})}
    return{poly};
  }
  const sg=segsOf(rdp(raw,eps));
  return{lines:sg.map(q=>({o:q.o,c:q.sum/q.len,a:Math.min(q.s,q.e),b:Math.max(q.s,q.e)}))};
}
function cellsToRects(cells,xs,ys){
  const rows=new Map();for(const[a,b]of cells){if(!rows.has(b))rows.set(b,[]);rows.get(b).push(a)}
  let rects=[];for(const b of[...rows.keys()].sort((p1,p2)=>p1-p2)){const is=rows.get(b).sort((p1,p2)=>p1-p2);let s0=is[0],pv=is[0];const runs=[];for(const a of is.slice(1)){if(a===pv+1){pv=a;continue}runs.push([s0,pv]);s0=pv=a}runs.push([s0,pv]);
    for(const[a0,a1]of runs){const r={x:xs[a0],w:xs[a1+1]-xs[a0],y:ys[b],h:ys[b+1]-ys[b]};const up=rects.find(q=>Math.abs(q.x-r.x)<1e-6&&Math.abs(q.w-r.w)<1e-6&&Math.abs(q.y+q.h-r.y)<1e-6);if(up)up.h+=r.h;else rects.push(r)}}
  return rects.map(r=>({x:+r.x.toFixed(2),y:+r.y.toFixed(2),w:+r.w.toFixed(2),h:+r.h.toFixed(2)})).filter(r=>r.w>=.05&&r.h>=.05).sort((a,b)=>b.w*b.h-a.w*a.h);
}
function linkGroup(rootId){
  const grp=P.rooms.filter(z=>z.id===rootId||z.of===rootId);
  for(const c of grp){if(!c.of)continue;for(const y of grp){if(y===c)continue;const sg=sharedSeg(c,y);if(sg&&!P.struct.some(g=>g.k==='gol'&&g.auto&&g.o===sg.o&&Math.abs(g.c-sg.c)<.02&&Math.abs(g.a-sg.a)<.02&&Math.abs(g.b-sg.b)<.02))P.struct.push({id:uid(),k:'gol',auto:true,of:c.id,...sg})}}
}
function setRootRects(root,rects){
  const kids=P.rooms.filter(z=>z.of===root.id).map(z=>z.id);
  P.rooms=P.rooms.filter(z=>z.of!==root.id);P.struct=P.struct.filter(g=>!(g.auto&&(g.of===root.id||kids.includes(g.of))));
  Object.assign(root,rects[0]);
  for(const q of rects.slice(1))P.rooms.push({id:uid(),name:root.name,type:root.type,of:root.id,...q});
  linkGroup(root.id);
}
let pickSw=null,skOpen=[],txStrokes=[],txBusy=false,labelHits=[],SAMP;
function guessType(n){const t=n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');if(/dormitor|camera copil|camera de dormit/.test(t))return'dormitor';if(/baie|wc|toaleta|dus/.test(t))return'baie';if(/bucatarie|bucat/.test(t))return'bucatarie';if(/hol|antreu|vestibul|coridor/.test(t))return'hol';if(/living|sufragerie|camera de zi/.test(t))return'living';if(/birou/.test(t))return'birou';if(/debara|camara|depozit|dressing/.test(t))return'debara';return null}
function renameRoom(r,name){name=String(name||'').replace(/^["'„”]+|["'„”.]+$/g,'').trim().slice(0,40);if(!name)return false;snap();const ty=guessType(name);for(const z of P.rooms)if(z.id===r.id||z.of===r.id){z.name=name;if(ty)z.type=ty}changed(true);toast(`Camera se numește acum „${name}”${ty?' ('+RT[ty].toLowerCase()+')':''}.`);return true}
function toScr(X,Y){const c=Math.cos(view.rot),s2=Math.sin(view.rot),dx=X-W/2,dy=Y-Hh/2;return{X:W/2+dx*c-dy*s2,Y:Hh/2+dx*s2+dy*c}}
function openNameEditor(r){
  const ed=$('#nameEd'),h=labelHits.find(q=>q.id===r.id),pt=h?toScr(h.lx-8,h.ly):{X:W/2-120,Y:Hh/2};
  ed.style.left=Math.max(8,Math.min(W-200,pt.X))+'px';ed.style.top=Math.max(8,pt.Y-18)+'px';ed.value=r.name;ed.dataset.id=r.id;ed.hidden=false;setTimeout(()=>{ed.focus();ed.select()},30);
}
$('#nameEd').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();e.target.blur()}else if(e.key==='Escape'){e.target.dataset.id='';e.target.blur()}});
$('#nameEd').addEventListener('blur',e=>{const ed=e.target,r=P.rooms.find(z=>z.id===ed.dataset.id);ed.hidden=true;if(r&&ed.value.trim()&&ed.value.trim()!==r.name)renameRoom(r,ed.value);ed.dataset.id=''});
async function getSample(){if(SAMP!==undefined)return SAMP;SAMP=null;try{if(window.claude&&typeof window.claude.use==='function'){const s2=await window.claude.use('sample');if(s2){const lim=await s2.limits().catch(()=>null);if(lim&&lim.images)SAMP=s2}}}catch(e){}return SAMP}
async function recognizeName(){
  if(!txStrokes.length||txBusy)return;
  const pts=txStrokes.flat(),cx=pts.reduce((t,q)=>t+q.x,0)/pts.length,cy=pts.reduce((t,q)=>t+q.y,0)/pts.length;
  let rr=hitRoom(cx,cy);if(rr&&rr.of)rr=P.rooms.find(z=>z.id===rr.of)||rr;
  if(!rr){toast('Scrie în interiorul chenarului unei camere.');return}
  const xs=pts.map(q=>q.x),ys=pts.map(q=>q.y),x0=Math.min(...xs),y0=Math.min(...ys),bw=Math.max(...xs)-x0||.1,bh=Math.max(...ys)-y0||.1,sc=Math.min(900/bw,300/bh),pad=24;
  const cnv=document.createElement('canvas');cnv.width=Math.ceil(bw*sc+pad*2);cnv.height=Math.ceil(bh*sc+pad*2);const g2=cnv.getContext('2d');g2.fillStyle='#fff';g2.fillRect(0,0,cnv.width,cnv.height);g2.strokeStyle='#000';g2.lineWidth=Math.max(3,cnv.height/40);g2.lineCap='round';g2.lineJoin='round';
  for(const st of txStrokes){g2.beginPath();st.forEach((q,i)=>{const X=pad+(q.x-x0)*sc,Y=pad+(q.y-y0)*sc;i?g2.lineTo(X,Y):g2.moveTo(X,Y)});g2.stroke()}
  const smp=await getSample();
  if(!smp){txStrokes=[];renderSelbar();draw();openNameEditor(rr);toast('Aici nu pot citi scrisul automat. Scrie numele în câmpul deschis; tastatura tabletei poate transforma scrisul de mână în text.');return}
  txBusy=true;renderSelbar();
  try{
    const blob=await new Promise(res=>cnv.toBlob(res,'image/png'));
    const {text}=await smp('Imaginea conține un text scris de mână cu penul pe o tabletă: numele unei încăperi dintr-o locuință, în limba română (de exemplu Dormitor 1, Baie, Bucătărie, Hol, Living, Birou). Transcrie exact textul, cu diacritice și majuscule corecte. Răspunde doar cu textul, fără ghilimele și fără alte cuvinte. Dacă nu se poate citi, răspunde doar cu ?',{images:[blob],modelTier:'quick',cache:false});
    const t=String(text||'').split('\n')[0].trim();
    txStrokes=[];
    if(!t||t==='?'){toast('Nu am putut citi scrisul. Scrie mai mare sau corectează în câmpul deschis.');openNameEditor(rr)}else renameRoom(rr,t);
  }catch(e){
    const m={not_granted:'Nu ai permis aplicației să folosească Claude. Scrie numele în câmpul deschis.',rate_limited:'Ai folosit Claude mult în ultimul timp. Încearcă puțin mai târziu sau scrie numele în câmpul deschis.',cancelled:''};
    const msg=m[e&&e.code]??'Nu am putut citi scrisul acum. Scrie numele în câmpul deschis.';if(msg)toast(msg);txStrokes=[];openNameEditor(rr);
  }finally{txBusy=false;renderSelbar();draw()}
}
function generatePlan(){
  skOpen=[];
  if(!P.sketch.length&&!P.sketchErase.length)return 0;
  const segs=[];
  for(const st of P.sketch){const r=strokeShape(st.pts);if(!r)continue;if(r.poly){const pl=r.poly;for(let i=0;i<pl.length;i++){const a=pl[i],b=pl[(i+1)%pl.length];if(Math.abs(a.y-b.y)<Math.abs(a.x-b.x))segs.push({o:'h',c:(a.y+b.y)/2,a:Math.min(a.x,b.x),b:Math.max(a.x,b.x)});else segs.push({o:'v',c:(a.x+b.x)/2,a:Math.min(a.y,b.y),b:Math.max(a.y,b.y)})}}else segs.push(...r.lines)}
  if(!segs.length&&!P.sketchErase.length)return 0;
  const tol=Math.max(.35,24/view.s);
  const clus=(vals,fixed)=>{const all=[...vals.map(v=>({v,f:false})),...fixed.map(v=>({v,f:true}))].sort((a,b)=>a.v-b.v),map=new Map();let g=[];const flush=()=>{if(!g.length)return;const fx=g.find(q=>q.f),rep=fx?fx.v:r05(g.reduce((t,q)=>t+q.v,0)/g.length);g.forEach(q=>{if(!q.f)map.set(q.v,rep)});g=[]};for(const q of all){if(g.length&&q.v-g[g.length-1].v>tol)flush();g.push(q)}flush();return v=>map.has(v)?map.get(v):v};
  const X=[],Y=[];for(const s2 of segs){if(s2.o==='v'){X.push(s2.c);Y.push(s2.a,s2.b)}else{Y.push(s2.c);X.push(s2.a,s2.b)}}
  const opn=[...P.sketchErase,...P.struct.filter(g=>g.k==='gol')];
  const mx=clus(X,[...P.rooms.flatMap(r=>[r.x,r.x+r.w]),...opn.filter(g=>g.o==='h').flatMap(g=>[g.a,g.b])]),my=clus(Y,[...P.rooms.flatMap(r=>[r.y,r.y+r.h]),...opn.filter(g=>g.o==='v').flatMap(g=>[g.a,g.b])]);
  for(const s2 of segs){if(s2.o==='v'){s2.c=mx(s2.c);s2.a=my(s2.a);s2.b=my(s2.b)}else{s2.c=my(s2.c);s2.a=mx(s2.a);s2.b=mx(s2.b)}if(s2.a>s2.b)[s2.a,s2.b]=[s2.b,s2.a]}
  for(const g of P.sketchErase){const per=g.o==='h'?'v':'h',att=segs.filter(q=>q.o===per&&(Math.abs(q.a-g.c)<1e-3||Math.abs(q.b-g.c)<1e-3)&&q.c>=g.a-tol&&q.c<=g.b+tol).map(q=>q.c);if(att.length>=2){g.a=Math.max(g.a,Math.min(...att));g.b=Math.min(g.b,Math.max(...att))}}
  const rootOfR=r=>r.of||r.id;
  const keepE=[];
  for(const g of P.sketchErase){
    let partial=null;
    for(const r1 of P.rooms)for(const r2 of P.rooms){if(rootOfR(r1)===rootOfR(r2)||r1.id>=r2.id)continue;const sg=sharedSeg(r1,r2);if(!sg||sg.o!==g.o||Math.abs(sg.c-g.c)>.02)continue;const a=Math.max(sg.a,g.a),b=Math.min(sg.b,g.b);if(b-a<.05)continue;if(!(g.a<=sg.a+.1&&g.b>=sg.b-.1))partial={o:g.o,c:sg.c,a:+a.toFixed(2),b:+b.toFixed(2)}}
    if(partial){if(!P.struct.some(q=>q.k==='gol'&&q.o===partial.o&&Math.abs(q.c-partial.c)<.02&&Math.abs(q.a-partial.a)<.05&&Math.abs(q.b-partial.b)<.05))P.struct.push({id:uid(),k:'gol',...partial})}else keepE.push(g);
  }
  const gaps=P.sketchErase.length-keepE.length;P.sketchErase=keepE;
  for(const r of P.rooms){
    const mates=P.rooms.filter(z=>z!==r&&rootOfR(z)===rootOfR(r));
    for(const e of[{o:'h',c:r.y,a:r.x,b:r.x+r.w},{o:'h',c:r.y+r.h,a:r.x,b:r.x+r.w},{o:'v',c:r.x,a:r.y,b:r.y+r.h},{o:'v',c:r.x+r.w,a:r.y,b:r.y+r.h}]){
      let pieces=[[e.a,e.b]];
      for(const m of mates){const sg=sharedSeg(r,m);if(!sg||sg.o!==e.o||Math.abs(sg.c-e.c)>.02)continue;pieces=pieces.flatMap(([a,b])=>{const o=[];if(sg.a>a+1e-6)o.push([a,Math.min(b,sg.a)]);if(sg.b<b-1e-6)o.push([Math.max(a,sg.b),b]);return o.filter(([u,v])=>v-u>1e-6)})}
      for(const g of P.sketchErase)if(g.o===e.o&&Math.abs(g.c-e.c)<.02){const ga=Math.min(g.a,g.b),gb=Math.max(g.a,g.b);pieces=pieces.flatMap(([a,b])=>{const o=[];if(ga>a+1e-6)o.push([a,Math.min(b,ga)]);if(gb<b-1e-6)o.push([Math.max(a,gb),b]);return o.filter(([u,v])=>v-u>1e-6)})}
      for(const[a,b]of pieces)segs.push({o:e.o,c:e.c,a,b,fixed:true});
    }
  }
  const ext=Math.max(1,60/view.s),eq=(u,v)=>Math.abs(u-v)<1e-3;
  const endPt=(q,w)=>q.o==='h'?{x:q[w],y:q.c}:{x:q.c,y:q[w]};
  const touches=(q,w)=>{const t=q[w];return segs.some(o=>o!==q&&((o.o!==q.o&&eq(o.c,t)&&q.c>=o.a-1e-3&&q.c<=o.b+1e-3)||(o.o===q.o&&eq(o.c,q.c)&&t>=o.a-1e-3&&t<=o.b+1e-3)))};
  for(let pass=0;pass<2;pass++)for(const q of segs){if(q.fixed)continue;for(const w of['a','b']){if(touches(q,w))continue;
    let best=null,bd=ext;for(const o of segs){const rt=o.fixed?tol:ext;if(o===q||o.o===q.o||q.c<o.a-rt||q.c>o.b+rt)continue;const d=Math.abs(o.c-q[w]);if(d>=bd)continue;if(w==='a'&&o.c>=q.b-.05)continue;if(w==='b'&&o.c<=q.a+.05)continue;bd=d;best=o}
    if(best){q[w]=best.c;if(!best.fixed){best.a=Math.min(best.a,q.c);best.b=Math.max(best.b,q.c)}}}}
  skOpen=[];for(const q of segs){if(q.fixed)continue;for(const w of['a','b'])if(!touches(q,w))skOpen.push(endPt(q,w))}
  const uniq=a=>[...new Set(a.map(v=>+v.toFixed(3)))].sort((p1,p2)=>p1-p2);
  const xs=uniq(segs.flatMap(s2=>s2.o==='v'?[s2.c]:[s2.a,s2.b])),ys=uniq(segs.flatMap(s2=>s2.o==='h'?[s2.c]:[s2.a,s2.b]));
  if(xs.length<2||ys.length<2)return 0;
  xs.unshift(xs[0]-1);xs.push(xs[xs.length-1]+1);ys.unshift(ys[0]-1);ys.push(ys[ys.length-1]+1);
  const nx=xs.length-1,ny=ys.length-1;
  const wall=(o,c,m)=>segs.some(s2=>s2.o===o&&Math.abs(s2.c-c)<1e-3&&m>s2.a-1e-6&&m<s2.b+1e-6);
  const nbs=(a,b)=>[[a+1,b,'v',xs[a+1],(ys[b]+ys[b+1])/2],[a-1,b,'v',xs[a],(ys[b]+ys[b+1])/2],[a,b+1,'h',ys[b+1],(xs[a]+xs[a+1])/2],[a,b-1,'h',ys[b],(xs[a]+xs[a+1])/2]];
  const out=new Uint8Array(nx*ny),st=[];
  for(let i=0;i<nx;i++)for(const j of[0,ny-1])if(!out[j*nx+i]){out[j*nx+i]=1;st.push([i,j])}
  for(let j=0;j<ny;j++)for(const i of[0,nx-1])if(!out[j*nx+i]){out[j*nx+i]=1;st.push([i,j])}
  while(st.length){const[a,b]=st.pop();for(const[c,d,o,cc,m]of nbs(a,b)){if(c<0||d<0||c>=nx||d>=ny||out[d*nx+c]||wall(o,cc,m))continue;out[d*nx+c]=1;st.push([c,d])}}
  const rootAt=(x,y)=>{const r=P.rooms.find(q=>x>q.x&&x<q.x+q.w&&y>q.y&&y<q.y+q.h);return r?rootOfR(r):null};
  const id=new Int32Array(nx*ny).fill(-1),regs=[];
  for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){
    if(out[j*nx+i]||id[j*nx+i]>=0)continue;const k=regs.length,reg={cells:[],by:new Map(),fresh:[]},q=[[i,j]];id[j*nx+i]=k;
    while(q.length){const[a,b]=q.pop();reg.cells.push([a,b]);const rt=rootAt((xs[a]+xs[a+1])/2,(ys[b]+ys[b+1])/2);if(rt){if(!reg.by.has(rt))reg.by.set(rt,[]);reg.by.get(rt).push([a,b])}else reg.fresh.push([a,b]);
      for(const[c,d,o,cc,m]of nbs(a,b)){if(c<0||d<0||c>=nx||d>=ny||out[d*nx+c]||id[d*nx+c]>=0||wall(o,cc,m))continue;id[d*nx+c]=k;q.push([c,d])}}
    regs.push(reg);
  }
  const area=cells=>cells.reduce((t,[a,b])=>t+(xs[a+1]-xs[a])*(ys[b+1]-ys[b]),0);
  let n=0;const touched=new Set();
  for(const reg of regs){if(reg.by.size||area(reg.fresh)<.8)continue;const rs=cellsToRects(reg.fresh,xs,ys);if(rs.length){addRects(rs);n++}}
  const roots=[...new Set(regs.flatMap(r=>[...r.by.keys()]))];
  const absorbed=new Map();
  for(const reg of regs){if(reg.by.size<2)continue;const ids=[...reg.by.keys()].sort((a,b)=>area(reg.by.get(b))-area(reg.by.get(a))),keep=ids[0];for(const o of ids.slice(1))if(regs.filter(r=>r.by.has(o)).length===1)absorbed.set(o,keep)}
  for(const rid of roots){
    if(absorbed.has(rid))continue;
    const root=P.rooms.find(z=>z.id===rid);if(!root)continue;
    const rr=regs.filter(r=>r.by.has(rid)).sort((a,b)=>area(b.by.get(rid))-area(a.by.get(rid)));
    const main=rr[0],abs=[...absorbed].filter(([o,k])=>k===rid&&main.by.has(o)).map(([o])=>o);
    const extra=(main.by.size===1+abs.length)&&area(main.fresh)>=.3?main.fresh:[];
    if(rr.length===1&&!extra.length&&!abs.length)continue;
    setRootRects(root,cellsToRects([...main.by.get(rid),...abs.flatMap(o=>main.by.get(o)),...extra],xs,ys));touched.add(rid);
    for(const o of abs){const kids=P.rooms.filter(z=>z.of===o).map(z=>z.id);P.items.forEach(it=>{if(it.room===o)it.room=rid});P.jb.forEach(j=>{if(j.room===o)j.room=rid});P.struct=P.struct.filter(g=>!(g.auto&&(g.of===o||kids.includes(g.of))));P.rooms=P.rooms.filter(z=>z.id!==o&&z.of!==o);linkGroup(rid);n++}
    for(const r2 of rr.slice(1)){
      const cells=[...r2.by.get(rid),...(r2.by.size===1?r2.fresh:[])];if(area(cells)<.5)continue;
      const nr=addRects(cellsToRects(cells,xs,ys)),grp=P.rooms.filter(z=>z.id===nr.id||z.of===nr.id),ins=q=>grp.some(g=>q.x>g.x-1e-6&&q.x<g.x+g.w+1e-6&&q.y>g.y-1e-6&&q.y<g.y+g.h+1e-6);
      for(const it of P.items)if(it.room===rid&&ins(it)){const inMain=P.rooms.filter(z=>z.id===rid||z.of===rid).some(g=>it.x>g.x+1e-6&&it.x<g.x+g.w-1e-6&&it.y>g.y+1e-6&&it.y<g.y+g.h-1e-6);if(!inMain)it.room=nr.id}
      for(const j of P.jb)if(j.room===rid&&ins(j))j.room=nr.id;
      n++;
    }
    n++;
  }
  const opened=P.rooms.filter(z=>!z.of&&!roots.includes(z.id)&&P.sketchErase.some(g=>(g.o==='h'&&(Math.abs(g.c-z.y)<.02||Math.abs(g.c-z.y-z.h)<.02)&&g.b>z.x&&g.a<z.x+z.w)||(g.o==='v'&&(Math.abs(g.c-z.x)<.02||Math.abs(g.c-z.x-z.w)<.02)&&g.b>z.y&&g.a<z.y+z.h)));
  if(opened.length)setTimeout(()=>toast(`${opened.map(z=>z.name).join(', ')}: camera e deschisă spre exterior. Desenează doar bucata care o închide, pornind de la capetele golului roșu, și generează din nou.`),n?2800:10);
  const touchO=g=>opened.some(z=>(g.o==='h'&&(Math.abs(g.c-z.y)<.02||Math.abs(g.c-z.y-z.h)<.02)&&g.b>z.x&&g.a<z.x+z.w)||(g.o==='v'&&(Math.abs(g.c-z.x)<.02||Math.abs(g.c-z.x-z.w)<.02)&&g.b>z.y&&g.a<z.y+z.h));
  if(n||gaps){P.sketch=[];P.sketchErase=P.sketchErase.filter(touchO);sel=null}
  return n||gaps;
}
function addRects(rs){
  const n=P.rooms.filter(r=>!r.of).length+1,par={id:uid(),name:'Cameră '+n,type:'altul',...rs[0]};P.rooms.push(par);
  for(const q of rs.slice(1)){const c={id:uid(),name:par.name,type:par.type,of:par.id,...q};P.rooms.push(c);for(const y of P.rooms.filter(z=>z.id===par.id||z.of===par.id)){if(y===c)continue;const sg=sharedSeg(c,y);if(sg)P.struct.push({id:uid(),k:'gol',auto:true,of:c.id,...sg})}}
  sel={kind:'room',id:par.id};
  return par;
}
function stretch(ax,L,d){
  const e=.02,sh=v=>v>=L-e?+(v+d).toFixed(2):(d<0&&v>L+d?+(L+d).toFixed(2):v),A=ax,B=ax==='x'?'w':'h';
  for(const r of P.rooms){if(r[A]>=L-e)r[A]=+(r[A]+d).toFixed(2);else if(r[A]+r[B]>=L-e)r[B]=+(r[B]+d).toFixed(2)}
  for(const it of[...P.items,...P.jb])it[A]=sh(it[A]);
  const perp=ax==='x'?'v':'h';
  for(const o of[...P.doors,...P.wins])if(o.o===perp)o.c=sh(o.c);else o.t=sh(o.t);
  for(const o of P.struct)if(o.o===perp)o.c=sh(o.c);else{o.a=sh(o.a);o.b=sh(o.b)}
  for(const k in P.routes)P.routes[k]=P.routes[k].map(q=>({...q,[A]:sh(q[A])}));
  for(const k in P.boxes)P.boxes[k]={...P.boxes[k],[A]:sh(P.boxes[k][A])};
}
let dimCtx=null;
function openDim(id,ax){
  const r=P.rooms.find(x=>x.id===id);if(!r)return;dimCtx={id,ax};
  $('#dimT').textContent=ax==='x'?'Lățimea camerei':'Lungimea camerei';
  $('#dimH').textContent=`${r.name} · acum ${Math.round((ax==='x'?r.w:r.h)*100)} cm. Camerele de ${ax==='x'?'la dreapta':'dedesubt'} se mută ca să rămână lipite.`;
  const i=$('#dimV');i.value=Math.round((ax==='x'?r.w:r.h)*100);$('#dimDlg').showModal();setTimeout(()=>{i.focus();i.select()},50);
}
$('#dimC').onclick=()=>$('#dimDlg').close();
$('#dimF').addEventListener('submit',e=>{
  e.preventDefault();const v=parseFloat($('#dimV').value);if(!dimCtx||!isFinite(v)||v<50){toast('Scrie o lungime de cel puțin 50 cm.');return}
  const r=P.rooms.find(x=>x.id===dimCtx.id);if(!r)return;const ax=dimCtx.ax,cur=ax==='x'?r.w:r.h,d=+(v/100-cur).toFixed(2);
  if(Math.abs(d)<.005){$('#dimDlg').close();return}
  const L=+((ax==='x'?r.x+r.w:r.y+r.h)).toFixed(2),B=ax==='x'?'w':'h',A=ax;
  if(d<0&&P.rooms.some(q=>q[A]<L-.02&&q[A]+q[B]>=L-.02&&q[B]+d<.5)){toast('O cameră ar deveni mai mică de 50 cm. Micșorează mai puțin.');return}
  snap();stretch(ax,L,d);$('#dimDlg').close();changed(true);
});
function openAdj(id){
  const r=P.rooms.find(x=>x.id===id);if(!r)return;dimCtx={id};
  $('#adjH').textContent='Lângă '+r.name+'. Se aliniază la colțul camerei selectate.';
  $('#adjT').innerHTML=opt(RT,'altul');
  const upd=()=>{const d=$('#adjD').value;if(d==='r'||d==='l'){$('#adjL').value=Math.round(r.h*100);if(!$('#adjW').dataset.t)$('#adjW').value=300}else{$('#adjW').value=Math.round(r.w*100);if(!$('#adjL').dataset.t)$('#adjL').value=300}};
  $('#adjW').dataset.t='';$('#adjL').dataset.t='';$('#adjD').onchange=upd;upd();$('#adjDlg').showModal();
}
$('#adjW').oninput=e=>e.target.dataset.t='1';$('#adjL').oninput=e=>e.target.dataset.t='1';
$('#adjC').onclick=()=>{measAdj=false;$('#adjDlg').close()};
$('#adjF').addEventListener('submit',e=>{
  e.preventDefault();const r=P.rooms.find(x=>x.id===(dimCtx&&dimCtx.id));if(!r)return;
  const w=parseFloat($('#adjW').value)/100,h=parseFloat($('#adjL').value)/100,d=$('#adjD').value,ty=$('#adjT').value;
  if(!(w>=.5&&h>=.5)){toast('Dimensiunile trebuie să fie de cel puțin 50 cm.');return}
  const q={x:d==='r'?r.x+r.w:d==='l'?r.x-w:r.x,y:d==='d'?r.y+r.h:d==='u'?r.y-h:r.y,w:+w.toFixed(2),h:+h.toFixed(2)};q.x=+q.x.toFixed(2);q.y=+q.y.toFixed(2);
  const hit=P.rooms.find(o=>q.x<o.x+o.w-.02&&q.x+q.w>o.x+.02&&q.y<o.y+o.h-.02&&q.y+q.h>o.y+.02);
  if(hit){toast(`Locul e ocupat de ${hit.name}. Alege altă direcție.`);return}
  snap();const nr={id:uid(),name:ty==='altul'?'Cameră '+(P.rooms.filter(x=>!x.of).length+1):RT[ty],type:ty,...q};P.rooms.push(nr);sel={kind:'room',id:nr.id};$('#adjDlg').close();changed(true);if(measAdj){measAdj=false;startMeas(nr.id);return}
  const v=fitVisible(nr);if(!v)recenter();
});
function fitVisible(r){const pts=[[r.x,r.y],[r.x+r.w,r.y+r.h]];return pts.every(([x,y])=>{const X=sx(x),Y=sy(y);return X>0&&X<W&&Y>0&&Y<Hh})}
function hitNode(X,Y){if(!R||!(layers.boxes||layers.routes||isoC()))return null;const iso=isoC();let b=null,bd=12;for(const n of R.nodes){if(iso&&n.ci!==iso.ci)continue;const d=Math.hypot(sx(n.x)-X,sy(n.y)-Y);if(d<bd){bd=d;b=n}}return b}
function hitSeg(X,Y){
  const iso=isoC();if(!R||!iso)return null;let b=null,bd=9;
  for(const s of R.segs){if(iso&&s.ci!==iso.ci)continue;for(let k=0;k+1<s.pts.length;k++){const A=s.pts[k],B=s.pts[k+1],ax=sx(A.x),ay=sy(A.y),bx=sx(B.x),by=sy(B.y),L=Math.hypot(bx-ax,by-ay)||1,u=clamp(((X-ax)*(bx-ax)+(Y-ay)*(by-ay))/(L*L),0,1),d=Math.hypot(X-ax-u*(bx-ax),Y-ay-u*(by-ay));if(d<bd){bd=d;b={s,k}}}}
  return b;
}
function hitOpen(list,X,Y){
  let b=null,bd=14;
  for(const d of list){const[a,c]=dEnds(d),A=dPt(d,a,0),B=dPt(d,c,0),ax=sx(A.x),ay=sy(A.y),bx=sx(B.x),by=sy(B.y);
    const L=Math.hypot(bx-ax,by-ay)||1,u=clamp(((X-ax)*(bx-ax)+(Y-ay)*(by-ay))/(L*L),0,1),dd=Math.hypot(X-ax-u*(bx-ax),Y-ay-u*(by-ay));
    if(dd<bd){bd=dd;b=d}}
  return b;
}
function placeWin(x,y,keep){const q=placeDoor(x,y,{w:keep?keep.w:1.2,hinge:0});if(!q)return null;return{o:q.o,c:q.c,t:q.t,w:q.w,sill:keep?keep.sill:.9,hg:keep?keep.hg:1.2,kind:keep?keep.kind:'geam'}}
function drawWin(w,ghost,selected){
  const[a,b]=dEnds(w),lw=clamp(view.s*.1,2,7),nw=(lw/2+1)/view.s;
  ctx.save();if(ghost)ctx.globalAlpha=.6;
  if(!ghost){const P1=dPt(w,a,-nw),P2=dPt(w,b,nw);ctx.fillStyle=C.canvas;ctx.fillRect(Math.min(sx(P1.x),sx(P2.x)),Math.min(sy(P1.y),sy(P2.y)),Math.abs(sx(P2.x)-sx(P1.x))||1,Math.abs(sy(P2.y)-sy(P1.y))||1)}
  const col=ghost?C.accent:selected?C.sel:C.ink;ctx.strokeStyle=col;ctx.lineCap='butt';
  ctx.lineWidth=2;for(const t of[a,b]){const p1=dPt(w,t,-nw),p2=dPt(w,t,nw);ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke()}
  ctx.lineWidth=1.3;for(const n of w.kind==='balcon'?[-nw,nw]:[-nw,0,nw]){const p1=dPt(w,a,n),p2=dPt(w,b,n);ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke()}
  if(w.kind==='balcon'){ctx.setLineDash([4,3]);const p1=dPt(w,a,0),p2=dPt(w,b,0);ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke();ctx.setLineDash([])}
  if(selected){ctx.strokeStyle=C.sel;ctx.lineWidth=5;ctx.globalAlpha=.5;const p1=dPt(w,a,0),p2=dPt(w,b,0);ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke()}
  ctx.restore();
}
function hitDoor(X,Y){
  let b=null,bd=14;
  for(const d of P.doors){const[a,c]=dEnds(d),A=dPt(d,a,0),B=dPt(d,c,0),ax=sx(A.x),ay=sy(A.y),bx=sx(B.x),by=sy(B.y);
    const L=Math.hypot(bx-ax,by-ay)||1,u=clamp(((X-ax)*(bx-ax)+(Y-ay)*(by-ay))/(L*L),0,1),dd=Math.hypot(X-ax-u*(bx-ax),Y-ay-u*(by-ay));
    if(dd<bd){bd=dd;b=d}}
  return b;
}
function drawDoor(d,ghost,selected){
  const[a,b]=dEnds(d),lw=clamp(view.s*.1,2,7),A=dPt(d,a,0),B=dPt(d,b,0);
  ctx.save();if(ghost)ctx.globalAlpha=.6;
  const half=(n,col)=>{const P1=dPt(d,a,0),P2=dPt(d,b,n),x0=Math.min(sx(P1.x),sx(P2.x)),y0=Math.min(sy(P1.y),sy(P2.y));ctx.fillStyle=col;ctx.fillRect(x0,y0,Math.abs(sx(P2.x)-sx(P1.x))||1,Math.abs(sy(P2.y)-sy(P1.y))||1)};
  const nw=(lw/2+1)/view.s;
  if(!ghost){[1,-1].forEach(k=>half(k*nw,roomAtPt(P,dPt(d,d.t,k*.15))?C.room:C.canvas))}
  const col=ghost?C.accent:selected?C.sel:C.ink;
  ctx.strokeStyle=col;ctx.lineWidth=2;ctx.lineCap='butt';
  for(const t of[a,b]){const p1=dPt(d,t,-nw),p2=dPt(d,t,nw);ctx.beginPath();ctx.moveTo(sx(p1.x),sy(p1.y));ctx.lineTo(sx(p2.x),sy(p2.y));ctx.stroke()}
  const DS=.6,ht=d.hinge?b:a,H=dPt(d,ht,0),L=dPt(d,ht,d.s*d.w*DS),F0=d.hinge?A:B,F={x:H.x+(F0.x-H.x)*DS,y:H.y+(F0.y-H.y)*DS};
  ctx.lineWidth=selected?3:2.2;ctx.beginPath();ctx.moveTo(sx(H.x),sy(H.y));ctx.lineTo(sx(L.x),sy(L.y));ctx.stroke();
  const a1=Math.atan2(F.y-H.y,F.x-H.x),a2=Math.atan2(L.y-H.y,L.x-H.x);let dl=a2-a1;while(dl>Math.PI)dl-=2*Math.PI;while(dl<-Math.PI)dl+=2*Math.PI;
  ctx.lineWidth=1.2;ctx.setLineDash([4,3]);ctx.beginPath();
  for(let i=0;i<=24;i++){const an=a1+dl*i/24,px=sx(H.x+Math.cos(an)*d.w*DS),py=sy(H.y+Math.sin(an)*d.w*DS);i?ctx.lineTo(px,py):ctx.moveTo(px,py)}
  ctx.stroke();ctx.setLineDash([]);
  if(selected){ctx.strokeStyle=C.sel;ctx.lineWidth=4;ctx.globalAlpha=.5;ctx.beginPath();ctx.moveTo(sx(A.x),sy(A.y));ctx.lineTo(sx(B.x),sy(B.y));ctx.stroke()}
  ctx.restore();
}
function placePt(type,x,y){
  const r=hitRoom(x,y);let X=r05(x),Y=r05(y);
  const wall=!['lumina','spot'].includes(type);
  const dg=r&&wall&&onDiag(r,x,y,Math.max(.35,16/view.s));
  if(r&&wall&&!dg){const d=[[Math.abs(x-r.x),'x',r.x],[Math.abs(x-r.x-r.w),'x',r.x+r.w],[Math.abs(y-r.y),'y',r.y],[Math.abs(y-r.y-r.h),'y',r.y+r.h]].sort((a,b)=>a[0]-b[0])[0];if(d[0]<Math.max(.35,16/view.s)){if(d[1]==='x')X=d[2];else Y=d[2]}}
  if(r&&T[type].g==='intr'){
    for(const d of P.doors){
      if(Math.abs((d.o==='h'?Y:X)-d.c)>.02)continue;
      const t=d.o==='h'?X:Y;if(Math.abs(t-d.t)>d.w/2+.7)continue;
      const q=doorRooms(P,d);if(!((q.sw&&q.sw.id===r.id)||(q.ot&&q.ot.id===r.id)))continue;
      const sp=switchSpot(P,d,r);if(sp){X=sp.x;Y=sp.y;break}
    }
  }
  if(dg){const e=[Math.abs(x-r.x),Math.abs(x-r.x-r.w),Math.abs(y-r.y),Math.abs(y-r.y-r.h)];if(dg.dist<=Math.min(...e)+.05){X=dg.x;Y=dg.y}}
  return{x:X,y:Y,room:r?(r.of||r.id):null};
}

const ptrs=new Map();let gest=null;
cv.addEventListener('pointerdown',e=>{
  cv.setPointerCapture(e.pointerId);ptrs.set(e.pointerId,{x:e.offsetX,y:e.offsetY});hover=null;
  if(ptrs.size===2){const[a,b]=[...ptrs.values()],cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;if(gest&&gest.k==='moveItem'&&gest.moved)changed();const lc=toLoc(cx,cy);gest={k:'pinch',d:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y)),s:view.s,wx:wx(lc.X),wy:wy(lc.Y),an:Math.atan2(b.y-a.y,b.x-a.x),r0:view.rot};draw();return}
  if(ptrs.size>2)return;
  const{X,Y}=loc(e),x=wx(X),y=wy(Y);
  if(bgMode&&bgDown(x,y))return;
  if(tool==='select'){
    const lh=labelHits.find(h=>X>=h.x&&X<=h.x+h.w&&Y>=h.y&&Y<=h.y+h.h);
    if(lh){const rr=P.rooms.find(z=>z.id===lh.id);if(rr){sel={kind:'room',id:rr.id};renderInspector();draw();openNameEditor(rr);return}}
    const cp=chips.find(c=>sel&&sel.kind==='room'&&c.id===sel.id&&Math.abs(X-c.X)<=c.w/2+4&&Math.abs(Y-c.Y)<=c.h/2+4);
    if(cp){openDim(cp.id,cp.ax);return}
    const hd=hitHandle(X,Y);
    if(hd){const r=hd.r;gest={k:'resize',id:r.id,hx:hd.hx,hy:hd.hy,o:{x:r.x,y:r.y,w:r.w,h:r.h},its:P.items.filter(i=>i.room===r.id).map(i=>[i,i.x,i.y]),dos:[...P.doors,...P.wins].map(d=>[d,d.c,d.t]),X,Y,moved:false};return}
    const it=hitItem(X,Y);
    if(pickSw){const ps=P.items.find(i=>i.id===pickSw);if(it&&ps&&isLight(it)){snap();const cur=ctrlOf(P,ps).map(l=>l.id);ps.ctrl=cur.includes(it.id)?cur.filter(x=>x!==it.id):[...cur,it.id];changed(true);return}return}
    if(it){sel={kind:'item',id:it.id};gest={k:'moveItem',id:it.id,X,Y,moved:false};renderInspector();draw();return}
    const jh=hitJb(X,Y);
    if(jh){sel={kind:'jb',id:jh.id};gest={k:'moveJb',id:jh.id,X,Y,moved:false};renderInspector();draw();return}
    const dr=hitDoor(X,Y);
    if(dr){sel={kind:'door',id:dr.id};gest={k:'moveDoor',id:dr.id,X,Y,moved:false};renderInspector();draw();return}
    const stx=hitStruct(X,Y);
    const wn=hitOpen(P.wins,X,Y);
    if(!wn&&!stx){const nd=hitNode(X,Y);if(nd){sel={kind:'node',key:nd.bkey||nd.key};gest={k:'node',key:nd.bkey||nd.key,room:nd.rid,X,Y,moved:false};renderInspector();draw();return}
      const hs=hitSeg(X,Y);if(hs){sel={kind:'seg',key:hs.s.key};gest={k:'leg',key:hs.s.key,i:hs.k,base:hs.s.pts.map(q=>({...q})),o:Math.abs(hs.s.pts[hs.k].y-hs.s.pts[hs.k+1].y)<1e-6?'h':'v',X,Y,moved:false};renderInspector();draw();return}}
    if(!wn&&stx){sel={kind:'st',id:stx.id};gest={k:'pan',X,Y,ox:view.ox,oy:view.oy,moved:false,keep:true};renderInspector();draw();return}
    if(wn){sel={kind:'win',id:wn.id};gest={k:'moveWin',id:wn.id,X,Y,moved:false};renderInspector();draw();return}
    const r=hitRoom(x,y);
    if(r&&sel&&sel.kind==='room'&&sel.id===r.id){gest={k:'moveRoom',id:r.id,x0:x,y0:y,rx:r.x,ry:r.y,kids:P.rooms.filter(k=>k.of===r.id).map(k=>[k,k.x,k.y]),gols:P.struct.filter(g=>g.auto&&(g.of===r.id||P.rooms.some(k=>k.of===r.id&&k.id===g.of))).map(g=>[g,g.c,g.a,g.b]),its:P.items.filter(i=>i.room===r.id).map(i=>[i,i.x,i.y]),X,Y,moved:false};return}
    gest={k:'pan',X,Y,ox:view.ox,oy:view.oy,moved:false,room:r?r.id:null};return;
  }
  if(tool==='rez'||tool==='gol'){const e=nearEdge(x,y);if(!e){toast('Atinge un perete și trage de-a lungul lui.');return}gest={k:'st',type:tool,edge:e,t0:clamp(r05(e.o==='h'?x:y),e.lo,e.hi),x,y};draw();return}
  if(tool==='grinda'){gest={k:'st',type:'grinda',x0:x,y0:y,x,y};draw();return}
  if(tool==='scris'){gest={k:'write',pts:[{x,y}]};draw();return}
  if(tool==='schita'){if(skErase||(e.pointerType==='pen'&&(e.buttons&32))){snap();gest={k:'erase',last:{x,y},moved:false};eraseAlong({x,y},{x,y});eraseHover={x,y};draw();return}gest={k:'sketch',pts:[{x,y}]};draw();return}
  if(tool==='room'){const q=snapRoomPt(x,y);gest={k:'room',x0:q.x,y0:q.y,x1:q.x,y1:q.y,rx:x,ry:y};draw();return}
  gest={k:'place',type:tool,x,y};draw();
});
cv.addEventListener('pointermove',e=>{
  if(!ptrs.has(e.pointerId)){if(tool==='schita'&&skErase&&e.pointerType!=='touch'){const q=loc(e);eraseHover={x:wx(q.X),y:wy(q.Y)};draw()}if(e.pointerType!=='touch'&&T[tool]){const q=loc(e);hover={x:wx(q.X),y:wy(q.Y)};draw()}return}
  ptrs.set(e.pointerId,{x:e.offsetX,y:e.offsetY});
  const g=gest;if(!g)return;
  if(g.k==='bgMove'){const q=loc(e);bgMoveTo(g,wx(q.X),wy(q.Y));return}
  if(g.k==='pinch'){if(ptrs.size<2)return;const[a,b]=[...ptrs.values()],d=Math.hypot(a.x-b.x,a.y-b.y),cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;view.auto=false;view.s=clamp(g.s*d/g.d,10,400);setRot(g.r0+Math.atan2(b.y-a.y,b.x-a.x)-g.an);const lc=toLoc(cx,cy);view.ox=lc.X-g.wx*view.s;view.oy=lc.Y-g.wy*view.s;draw();return}
  const{X,Y}=loc(e),x=wx(X),y=wy(Y);
  if(g.k==='resize'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<4)return;
    if(!g.moved){snap();g.moved=true}
    const r=P.rooms.find(i=>i.id===g.id);if(!r)return;
    const o=g.o,q=snapRoomPt(x,y);let L=o.x,Rr=o.x+o.w,Tp=o.y,B=o.y+o.h;
    if(g.hx<0)L=Math.min(q.x,Rr-.5);if(g.hx>0)Rr=Math.max(q.x,L+.5);
    if(g.hy<0)Tp=Math.min(q.y,B-.5);if(g.hy>0)B=Math.max(q.y,Tp+.5);
    r.x=L;r.y=Tp;r.w=+(Rr-L).toFixed(2);r.h=+(B-Tp).toFixed(2);
    const mv=(v,a,b)=>Math.abs(v-a)<.02?b:v;
    for(const[i,ix,iy]of g.its){let nx=ix,ny=iy;if(g.hx<0)nx=mv(ix,o.x,L);if(g.hx>0)nx=mv(ix,o.x+o.w,Rr);if(g.hy<0)ny=mv(iy,o.y,Tp);if(g.hy>0)ny=mv(iy,o.y+o.h,B);i.x=clamp(nx,L,Rr);i.y=clamp(ny,Tp,B)}
    for(const[d,dc,dt]of g.dos){
      if(d.o==='v'&&dt>o.y-1e-6&&dt<o.y+o.h+1e-6){if(g.hx<0&&Math.abs(dc-o.x)<.02)d.c=L;if(g.hx>0&&Math.abs(dc-o.x-o.w)<.02)d.c=Rr}
      if(d.o==='h'&&dt>o.x-1e-6&&dt<o.x+o.w+1e-6){if(g.hy<0&&Math.abs(dc-o.y)<.02)d.c=Tp;if(g.hy>0&&Math.abs(dc-o.y-o.h)<.02)d.c=B}
      const onH=d.o==='h'&&(Math.abs(d.c-r.y)<.02||Math.abs(d.c-r.y-r.h)<.02)&&dt>o.x-1e-6&&dt<o.x+o.w+1e-6;
      const onV=d.o==='v'&&(Math.abs(d.c-r.x)<.02||Math.abs(d.c-r.x-r.w)<.02)&&dt>o.y-1e-6&&dt<o.y+o.h+1e-6;
      if(onH||onV){const[lo,hi]=onH?[r.x,r.x+r.w]:[r.y,r.y+r.h],a=lo+d.w/2+.1,b=hi-d.w/2-.1;d.t=a>b?(lo+hi)/2:clamp(dt,a,b)}
    }
    R=computeLv();draw();renderDyn();return;
  }
  if(g.k==='pan'){if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<(e.pointerType==='mouse'?5:10))return;g.moved=true;view.auto=false;view.ox=g.ox+X-g.X;view.oy=g.oy+Y-g.Y;draw();return}
  if(g.k==='moveItem'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;
    if(!g.moved){snap();g.moved=true}
    const it=P.items.find(i=>i.id===g.id);if(!it)return;const q=placePt(it.type,x,y);it.x=q.x;it.y=q.y;if(q.room)it.room=q.room;
    R=computeLv();draw();return;
  }
  if(g.k==='moveRoom'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;
    if(!g.moved){snap();g.moved=true}
    const r=P.rooms.find(i=>i.id===g.id);if(!r)return;
    const q=snapRoomPt(g.rx+x-g.x0,g.ry+y-g.y0),dx=q.x-g.rx,dy=q.y-g.ry;
    r.x=g.rx+dx;r.y=g.ry+dy;g.its.forEach(([i,ix,iy])=>{i.x=r05(ix+dx);i.y=r05(iy+dy)});
    (g.kids||[]).forEach(([k,kx,ky])=>{k.x=kx+dx;k.y=ky+dy});(g.gols||[]).forEach(([q,c,a,b])=>{const dc=q.o==='h'?dy:dx,dt=q.o==='h'?dx:dy;q.c=c+dc;q.a=a+dt;q.b=b+dt});
    R=computeLv();draw();return;
  }
  if(g.k==='room'){const q=snapRoomPt(x,y);g.x1=q.x;g.y1=q.y;draw();return}
  if(g.k==='write'){const l=g.pts[g.pts.length-1];if(Math.hypot(x-l.x,y-l.y)*view.s>2){g.pts.push({x,y});draw()}return}
  if(g.k==='erase'){eraseAlong(g.last,{x,y});g.last={x,y};g.moved=true;eraseHover={x,y};draw();return}
  if(g.k==='sketch'){const l=g.pts[g.pts.length-1];if(Math.hypot(x-l.x,y-l.y)*view.s>3){g.pts.push({x,y});draw()}return}
  if(g.k==='st'){g.x=x;g.y=y;draw();return}
  if(g.k==='moveJb'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;if(!g.moved){snap();g.moved=true}
    const j=P.jb.find(i=>i.id===g.id),q=jbPt(x,y);if(j&&q&&!spotBad(P,q,P.route==='tavan'?P.H-.3:BOXZ)){j.x=q.x;j.y=q.y;j.room=q.room}R=computeLv();draw();return;
  }
  if(g.k==='leg'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;if(!g.moved){snap();g.moved=true}
    const b=g.base.map(q=>({...q})),n=b.length,v=r05(g.o==='h'?y:x),i=g.i;let pts;
    const setc=q=>g.o==='h'?{x:q.x,y:v}:{x:v,y:q.y};
    const A=i===0?[b[0],setc(b[0])]:[setc(b[i])],Bp=i+1===n-1?[setc(b[n-1]),b[n-1]]:[setc(b[i+1])];
    pts=[...b.slice(0,i),...A,...Bp,...b.slice(i+2)];
    P.routes[g.key]=pts.slice(1,-1);R=computeLv();draw();return;
  }
  if(g.k==='node'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;if(!g.moved){snap();g.moved=true}
    const r=P.rooms.find(q=>q.id===g.room);if(!r)return;
    const c=[[Math.abs(y-r.y),{x:clamp(r05(x),r.x+.1,r.x+r.w-.1),y:r.y}],[Math.abs(y-r.y-r.h),{x:clamp(r05(x),r.x+.1,r.x+r.w-.1),y:r.y+r.h}],[Math.abs(x-r.x),{x:r.x,y:clamp(r05(y),r.y+.1,r.y+r.h-.1)}],[Math.abs(x-r.x-r.w),{x:r.x+r.w,y:clamp(r05(y),r.y+.1,r.y+r.h-.1)}]].sort((a,b)=>a[0]-b[0])[0][1];
    {const why=spotBad(P,c,P.route==='tavan'?P.H-.3:BOXZ);if(why){if(!g.warned){g.warned=1;toast('Doza nu poate sta '+why+'. Mut-o pe un perete plin.')}return}g.warned=0}
    P.boxes[g.key]=c;R=computeLv();draw();return;
  }
  if(g.k==='moveWin'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;
    const w=P.wins.find(i=>i.id===g.id);if(!w)return;const q=placeWin(x,y,w);if(!q)return;
    if(!g.moved){snap();g.moved=true}
    w.o=q.o;w.c=q.c;w.t=q.t;R=computeLv();draw();return;
  }
  if(g.k==='moveDoor'){
    if(!g.moved&&Math.hypot(X-g.X,Y-g.Y)<5)return;
    const d=P.doors.find(i=>i.id===g.id);if(!d)return;const q=placeDoor(x,y,d);if(!q)return;
    if(!g.moved){snap();g.moved=true}
    if(q.o!==d.o||q.c!==d.c)d.s=q.s;d.o=q.o;d.c=q.c;d.t=q.t;R=computeLv();draw();return;
  }
  if(g.k==='place'){g.x=x;g.y=y;draw()}
});
function up(e,cancel){
  if(!ptrs.has(e.pointerId))return;ptrs.delete(e.pointerId);
  const g=gest;if(!g)return;
  if(g.k==='pinch'){if(!ptrs.size)gest=null;return}
  gest=null;if(cancel){if(g.moved)changed();else draw();return}
  if(g.k==='bgMove'){if(g.moved)changed();else draw();return}
  if(g.k==='pan'){if(!g.moved&&!g.keep){const now=performance.now(),dbl=now-lastTap.t<350&&Math.hypot(g.X-lastTap.x,g.Y-lastTap.y)<30;lastTap={t:dbl?0:now,x:g.X,y:g.Y};if(dbl){if(g.room&&!focusId){enterRoom(rootOf(P,P.rooms.find(z=>z.id===g.room)).id);return}if(focusId&&!g.room){exitRoom();return}sel=null;renderInspector();fit();draw();return}sel=g.room?{kind:'room',id:g.room}:null;renderInspector();draw()}return}
  if(g.k==='st'){const q=stFrom(g);if(!q||Math.abs(q.b-q.a)<.2){draw();return}snap();q.id=uid();if(q.a>q.b)[q.a,q.b]=[q.b,q.a];P.struct.push(q);sel={kind:'st',id:q.id};changed(true);return}
  if(g.k==='leg'&&g.moved&&P.routes[g.key]){const s0=R.segs.find(q=>q.key===g.key);if(s0)P.routes[g.key]=cleanPts(s0.pts).slice(1,-1)}
  if(g.k==='moveItem'||g.k==='moveRoom'||g.k==='moveDoor'||g.k==='moveWin'||g.k==='resize'||g.k==='leg'||g.k==='node'||g.k==='moveJb'){if(g.moved)changed(true);return}
  if(g.k==='write'){txStrokes.push(g.pts.length>1?g.pts:[g.pts[0],{x:g.pts[0].x+.01,y:g.pts[0].y}]);renderSelbar();draw();return}
  if(g.k==='erase'){eraseHover=null;if(!P.sketch.length)renderSelbar();changed();renderSelbar();return}
  if(g.k==='sketch'){let L=0;for(let i=1;i<g.pts.length;i++)L+=Math.hypot(g.pts[i].x-g.pts[i-1].x,g.pts[i].y-g.pts[i-1].y);if(L<.4){draw();return}skOpen=[];snap();P.sketch.push({pts:rdp(g.pts,.03).map(q=>({x:+q.x.toFixed(3),y:+q.y.toFixed(3)}))});changed();renderSelbar();return}
  if(g.k==='room'){
    const x=Math.min(g.x0,g.x1),y=Math.min(g.y0,g.y1),w=Math.abs(g.x1-g.x0),h=Math.abs(g.y1-g.y0);
    if(w>=.5&&h>=.5){snap();const r={id:uid(),name:'Cameră '+(P.rooms.length+1),type:'altul',x,y,w:+w.toFixed(2),h:+h.toFixed(2)};P.rooms.push(r);sel={kind:'room',id:r.id};changed(true)}else if(!(w<.3&&h<.3&&bgAutoRoom(g.rx,g.ry)))draw();
    return;
  }
  if(g.k==='place'&&g.type==='geam'){const q=placeWin(g.x,g.y);if(!q){toast('Atinge un perete ca să pui fereastra.');draw();return}snap();q.id=uid();P.wins.push(q);sel={kind:'win',id:q.id};changed(true);return}
  if(g.k==='place'&&g.type==='usa'){const q=placeDoor(g.x,g.y);if(!q){toast('Atinge un perete ca să pui ușa.');draw();return}snap();q.id=uid();P.doors.push(q);sel={kind:'door',id:q.id};changed(true);return}
  if(g.k==='place'&&JBT[g.type]){const q=jbPt(g.x,g.y);if(!q){toast('Atinge un perete din interiorul unei camere.');draw();return}{const why=spotBad(P,q,P.route==='tavan'?P.H-.3:BOXZ);if(why){toast('Doza nu poate sta '+why+'. Pune-o pe un perete plin.');draw();return}}snap();const j={id:uid(),size:JBT[g.type],room:q.room,x:q.x,y:q.y};P.jb.push(j);sel={kind:'jb',id:j.id};changed(true);return}
  if(g.k==='place'&&focusId&&!placePt(g.type,g.x,g.y).room){toast('Ești în camera '+((P.rooms.find(z=>z.id===focusId)||{}).name||'')+'. Pune elementele în chenarul ei sau ieși din cameră.');draw();return}
  if(g.k==='place'){const q=placePt(g.type,g.x,g.y);snap();const it={id:uid(),type:g.type,room:q.room,x:q.x,y:q.y};if(g.type==='prizaM')it.n=lastN;P.items.push(it);sel={kind:'item',id:it.id};changed(true)}
}
cv.addEventListener('pointerup',e=>up(e,false));
cv.addEventListener('pointercancel',e=>up(e,true));
cv.addEventListener('pointerleave',()=>{if(hover){hover=null;draw()}});
cv.addEventListener('wheel',e=>{e.preventDefault();const q=loc(e);zoomAt(q.X,q.Y,Math.exp(-e.deltaY*.0015))},{passive:false});
function zoomAt(X,Y,k){view.auto=false;const x=wx(X),y=wy(Y);view.s=clamp(view.s*k,10,400);view.ox=X-x*view.s;view.oy=Y-y*view.s;draw()}
$('#zIn').onclick=()=>zoomAt(W/2,Hh/2,1.25);
$('#zOut').onclick=()=>zoomAt(W/2,Hh/2,.8);
function selPoint(){
  if(!sel)return null;const k=sel.kind;
  if(k==='item'){const o=P.items.find(i=>i.id===sel.id);return o&&{x:o.x,y:o.y}}
  if(k==='jb'){const o=P.jb.find(i=>i.id===sel.id);return o&&{x:o.x,y:o.y}}
  if(k==='door'||k==='win'){const o=(k==='door'?P.doors:P.wins).find(i=>i.id===sel.id);return o&&dPt(o,o.t,0)}
  if(k==='room'){const o=P.rooms.find(i=>i.id===sel.id);return o&&{x:o.x+o.w/2,y:o.y+o.h/2}}
  if(k==='st'){const o=P.struct.find(i=>i.id===sel.id);return o&&(o.o==='h'?{x:(o.a+o.b)/2,y:o.c}:{x:o.c,y:(o.a+o.b)/2})}
  if(k==='seg'&&R){const o=R.segs.find(q=>q.key===sel.key);if(o){const m=o.pts[Math.floor(o.pts.length/2)];return{x:m.x,y:m.y}}}
  if(k==='node'&&R){const o=R.nodes.find(q=>(q.bkey||q.key)===sel.key);return o&&{x:o.x,y:o.y}}
  return null;
}
function centerOn(q){view.auto=false;view.ox=W/2-q.x*view.s;view.oy=Hh/2-q.y*view.s;draw()}
function recenter(){const q=selPoint();if(q)centerOn(q);else{fit();draw()}}
$('#zFit').onclick=recenter;
let lastTap={t:0,x:0,y:0};
function rotateBy(dr){const c=toLoc(W/2,Hh/2),wx0=wx(c.X),wy0=wy(c.Y);setRot(view.rot+dr);view.ox=W/2-wx0*view.s;view.oy=Hh/2-wy0*view.s;if(view.auto)fit();draw()}
$('#rot90').onclick=()=>rotateBy(Math.PI/2);
$('#rotReset').onclick=()=>rotateBy(-view.rot);
$('#focusBtn').onclick=()=>{const on=document.body.classList.toggle('focus');$('#focusBtn').setAttribute('aria-pressed',on);$('#focusBtn .lbl').textContent=on?'Ieși din ecran mare':'Ecran mare';requestAnimationFrame(resize)};

const ICON={
  select:'<path d="M8 5l15 10-6.5 1.5L20 24l-3 1.5-3.5-7.5L8 22z" fill="currentColor"/>',
  geam:'<path d="M3 16h6M23 16h6" stroke="currentColor" stroke-width="4"/><path d="M9 12v8M23 12v8" stroke="currentColor" stroke-width="2"/><path d="M9 13.5h14M9 16h14M9 18.5h14" stroke="currentColor" stroke-width="1.2"/>',
  prizaM:'<circle cx="6" cy="16" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="16" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="26" cy="16" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  intrCS:'<circle cx="16" cy="16" r="3.5" fill="currentColor"/><path d="M16 16 26 6M26 6l3 3M16 16 6 26M6 26l-3-3" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  intrCR:'<circle cx="16" cy="16" r="3.5" fill="currentColor"/><path d="M7 7l18 18M25 7 7 25" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  dozaS:'<rect x="11" y="11" width="10" height="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M11 11l10 10M21 11 11 21" stroke="currentColor" stroke-width="1.2"/>',
  dozaM:'<rect x="8" y="8" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 8l16 16M24 8 8 24" stroke="currentColor" stroke-width="1.2"/>',
  dozaL:'<rect x="4" y="7" width="24" height="18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 7l24 18M28 7 4 25" stroke="currentColor" stroke-width="1.2"/>',
  scris:'<path d="M5 24c3-7 5-12 7-12s-1 10 2 10 4-9 6-9-1 8 2 8 3-4 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 28h24" stroke="currentColor" stroke-width="1.4"/>',
  trecere:'<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/><path d="M16 9v14M12 13l4-4 4 4M12 19l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2"/>',
  schita:'<path d="M5 25c2-6 1-13 3-18 5 1 12-1 18 1-1 5 1 12-1 17-6-1-13 1-20 0z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-dasharray="3 2"/><path d="M22 21l5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  gol:'<path d="M2 16h8M22 16h8" stroke="currentColor" stroke-width="4"/><path d="M10 11v10M22 11v10" stroke="currentColor" stroke-width="2"/><path d="M12 16h8" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2"/>',
  rez:'<rect x="3" y="12" width="26" height="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 20l8-8M12 20l8-8M18 20l8-8" stroke="currentColor" stroke-width="1.5"/>',
  grinda:'<rect x="3" y="11" width="26" height="10" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/><text x="16" y="16.5" fill="currentColor" font-size="7" font-weight="700" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono,monospace">GR</text>',
  usa:'<path d="M3 26h7M24 26h5" stroke="currentColor" stroke-width="3"/><path d="M10 26V12" stroke="currentColor" stroke-width="2.4"/><path d="M10 12a14 14 0 0 1 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2.5 2"/>',
  room:'<rect x="5" y="7" width="22" height="18" fill="none" stroke="currentColor" stroke-width="3"/><path d="M5 3.5h22M5 2v3M27 2v3" stroke="currentColor" stroke-width="1.4"/>',
  tablou:'<rect x="4" y="10" width="24" height="12" fill="currentColor"/><text x="16" y="16.5" fill="var(--panel)" font-size="8" font-weight="700" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono,monospace">TE</text>'
};
function svgSym(type){
  let s=ICON[type];
  if(!s){const t=T[type];
    if(t.g==='priza')s=`<circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" stroke-width="2"/><text x="16" y="16.5" fill="currentColor" font-size="${t.code.length>1?9:12}" font-weight="600" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono,monospace">${t.code}</text>`;
    else if(type==='spot')s='<circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="16" r="3" fill="currentColor"/>';
    else if(t.g==='lum')s='<circle cx="16" cy="15" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 8l14 14M23 8 9 22" stroke="currentColor" stroke-width="2"/>'+(type==='aplica'?'<path d="M5 28h22" stroke="currentColor" stroke-width="2"/>':'');
    else if(t.g==='intr')s='<circle cx="12" cy="20" r="4" fill="currentColor"/><path d="M12 20 24 8" stroke="currentColor" stroke-width="2.4"/>'+(type==='intr2'?'<path d="M12 20 15 5" stroke="currentColor" stroke-width="2.4"/>':'');
    else s=`<rect x="3" y="8" width="26" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><text x="16" y="16.5" fill="currentColor" font-size="${t.code.length>2?8:10}" font-weight="600" text-anchor="middle" dominant-baseline="middle" font-family="IBM Plex Mono,monospace">${t.code}</text>`;
  }
  return `<svg viewBox="0 0 32 32" aria-hidden="true">${s}</svg>`;
}
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}},lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const CATS=[['Desen','schita',['schita','scris','room','usa','geam','gol'],'Desenează conturul cu penul sau trage camere, apoi pune ușile și ferestrele pe pereți.'],
['Pereți','rez',['rez','grinda'],'Marchează pereții de rezistență și grinzile, ca traseele să le ocolească.'],
['Prize','priza',['priza','priza2','prizaM','prizaip','tv'],'Atinge un perete ca să plasezi. Înălțimea se pune singură, după I7.'],
['Lumini','lumina',['lumina','spot','aplica'],'Atinge camera ca să pui corpul de iluminat.'],
['Comenzi','intr',['intr','intr2','intrCS','intrCR'],'Pune întrerupătorul lângă ușă, pe partea clanței.'],
['Aparate','ded',['msr','msv','cuptor','plita','ac','boiler','feon','vent','ded'],'Consumatorii mari primesc circuit dedicat, cu protecția potrivită.'],
['Doze','dozaM',['dozaS','dozaM','dozaL'],'Doze de derivație puse de tine. Altfel aplicația le alege singură.'],
['Tablou','tablou',['tablou','trecere'],'Tabloul electric și trecerile de cabluri între niveluri.']];
let flyCat=null;
function renderTools(){
  const cur=CATS.find(c=>c[2].includes(tool));
  $('#tools').innerHTML=`<button class="rail-b${tool==='select'?' on':''}" type="button" data-tool="select" aria-pressed="${tool==='select'}" title="Selectează">${svgSym('select')}<span>Selectează</span></button><hr class="rail-sep">`+CATS.map(([n,ic])=>{const on=cur&&cur[0]===n;return`<button class="rail-b${on?' on':''}${flyCat===n?' open':''}" type="button" data-cat="${n}" aria-expanded="${flyCat===n}" title="${n}">${svgSym(on?tool:ic)}<span>${on?SHORT[tool]:n}</span></button>`}).join('');
  const fl=$('#fly');if(!flyCat){fl.hidden=true;return}
  const c=CATS.find(x=>x[0]===flyCat);
  fl.innerHTML=`<div class="fly-h"><b>${c[0]}</b><button class="btn ic" type="button" data-flyx aria-label="Închide">✕</button></div><p>${c[3]}</p><div class="fly-t">${c[2].map(t=>`<button class="ftile${t===tool?' on':''}" type="button" data-tool="${t}" aria-pressed="${t===tool}">${svgSym(t)}<span>${SHORT[t]}</span></button>`).join('')}</div>`;
  fl.hidden=false;
}
$('#tools').addEventListener('click',e=>{const c=e.target.closest('[data-cat]');if(c){flyCat=flyCat===c.dataset.cat?null:c.dataset.cat;renderTools();return}const b=e.target.closest('[data-tool]');if(b){flyCat=null;setTool(b.dataset.tool)}});
$('#fly').addEventListener('click',e=>{if(e.target.closest('[data-flyx]')){flyCat=null;renderTools();return}const b=e.target.closest('[data-tool]');if(b){flyCat=null;setTool(b.dataset.tool)}});
$('#stage').addEventListener('pointerdown',()=>{if(flyCat){flyCat=null;renderTools()}},true);
function setTool(t){if(meas&&t!=='select')endMeas(false);tool=t;renderTools();if(t!=='scris')txStrokes=[];if(t!=='select'&&sel){sel=null;renderInspector()}renderSelbar();document.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.tool===t));cv.style.cursor=t==='select'?'default':'crosshair';draw()}
function renderLayers(){
  const L=[['routes','Trasee'],['boxes','Doze'],['cmd','Comenzi'],['tags','Circuite'],['dims','Cote']],q=['routes','boxes','dims'];
  $('#layersQ').innerHTML=L.filter(([k])=>q.includes(k)).map(([k,n])=>`<button class="chip" type="button" data-layer="${k}" aria-pressed="${layers[k]}">${n}</button>`).join('');
  $('#layers').innerHTML=L.filter(([k])=>!q.includes(k)).map(([k,n])=>`<button class="chip" type="button" data-layer="${k}" aria-pressed="${layers[k]}">${n}</button>`).join('');
}
for(const LL of[$('#layers'),$('#layersQ')])LL.addEventListener('click',e=>{const b=e.target.closest('[data-layer]');if(!b)return;layers[b.dataset.layer]=!layers[b.dataset.layer];b.setAttribute('aria-pressed',layers[b.dataset.layer]);if(b.dataset.layer==='routes'){if(!layers.routes)isoId='';renderIso()}draw()});

const opt=(o,v)=>Object.entries(o).map(([k,n])=>`<option value="${k}"${k===v?' selected':''}>${esc(n)}</option>`).join('');
function renderInspector(){
  let h='';
  if(sel&&sel.kind==='item'){
    const it=P.items.find(i=>i.id===sel.id);
    if(!it){sel=null;return renderInspector()}
    const t=T[it.type],room=P.rooms.find(r=>r.id===it.room),hd=t.h==='ceil'?P.H:t.h;
    h=`<div class="ihead">${svgSym(it.type)}<div><h2>${esc(t.n)}${it.type==='prizaM'?` · ${nOf(it)} ${nOf(it)>1?'posturi':'post'}`:''}</h2><p class="sub">${room?esc(room.name):'În afara camerelor'}</p></div></div>
    <div class="fields">
      ${t.g==='priza'?`<label class="f full">Tip priză<select data-s="item" data-f="st" id="i-st"><option value="">Ca în proiect (${(P.sockType||'schuko')==='slim'?'Slim':'Schuko'})</option>${opt({schuko:'Schuko',slim:'Slim'},it.st||'__')}</select></label>`:''}
      ${it.type==='prizaM'?`<label class="f full">Număr de posturi<select data-s="item" data-f="n" id="i-n">${[1,2,3,4,5].map(v=>`<option value="${v}"${v===nOf(it)?' selected':''}>${v} ${v>1?'posturi':'post'}</option>`).join('')}</select></label>`:''}
      ${isSw(it)?`<div class="full"><h4>Comandă</h4><p class="muted" style="margin:0 0 6px;font-size:13px">${(()=>{const L=ctrlOf(P,it);return L.length?`Comandă ${L.length} ${L.length===1?'element':'elemente'} (lumini, ventilator)${Array.isArray(it.ctrl)?' (ales manual)':' (cele din cameră)'}.`:'Nu comandă nicio lumină.'})()}</p><div class="bar"><button class="btn" type="button" data-act="pick">Alege luminile pe plan</button>${Array.isArray(it.ctrl)?'<button class="btn" type="button" data-act="ctrlAuto">Luminile din cameră</button>':''}</div></div>`:''}
      ${isLight(it)?`<div class="full"><h4>Comandat de</h4><p class="muted" style="margin:0;font-size:13px">${(()=>{const S=ctrlBy(P,it);return S.length?S.map(s2=>T[s2.type].n+(s2.label?' „'+esc(s2.label)+'”':'')).join(', '):'niciun întrerupător'})()}</p></div>`:''}
      <label class="f full">Etichetă<input data-s="item" data-f="label" id="i-label" value="${esc(it.label||'')}" placeholder="ex. Priză TV"></label>
      ${t.g==='intr'||t.g==='tab'?'':`<label class="f">Putere (W)<input data-s="item" data-f="w" id="i-w" type="number" inputmode="decimal" min="0" step="10" value="${it.w??''}" placeholder="${t.w}"></label>`}
      <label class="f">Înălțime montaj (m)<input data-s="item" data-f="h" id="i-h" type="number" inputmode="decimal" min="0" step=".05" value="${it.h??''}" placeholder="${hd}"></label>
    </div>
    <div id="insDyn"></div>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge elementul</button></div>`;
  }else if(sel&&sel.kind==='jb'){
    const j=P.jb.find(i=>i.id===sel.id);
    if(!j){sel=null;return renderInspector()}
    const q=R.phys.find(x=>x.jb===j.id),rm=P.rooms.find(x=>x.id===j.room);
    h=`<div class="ihead">${svgSym(j.size==='s'?'dozaS':j.size==='m'?'dozaM':'dozaL')}<div><h2>${JB[j.size].n}${q&&q.id?' · '+q.id:''}</h2><p class="sub">${rm?esc(rm.name):''} · pusă de tine · trage ca s-o muți</p></div></div>
    <div class="fields"><label class="f full">Mărime<select data-s="jb" data-f="size" id="jb-size">${Object.entries(JB).map(([k,v])=>`<option value="${k}"${k===j.size?' selected':''}>${v.n} (până la ~${v.cap} cabluri)</option>`).join('')}</select></label></div>
    <dl class="spec"><dt>Circuite</dt><dd>${q&&q.cids.length?q.cids.join(', '):'nefolosită încă'}</dd><dt>Cabluri care intră</dt><dd>${q?q.cab:0} / ${JB[j.size].cap}</dd><dt>Înălțime</dt><dd>${q?f(q.z,2):'—'} m</dd></dl>
    <p class="muted" style="margin:0;font-size:13px">Circuitele din această cameră trec prin doza ta în loc să primească una automată. Capacitatea e orientativă.</p>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge doza</button></div>`;
  }else if(sel&&sel.kind==='st'){
    const st=P.struct.find(i=>i.id===sel.id);
    if(!st){sel=null;return renderInspector()}
    h=`<div class="ihead">${svgSym(st.k)}<div><h2>${st.k==='rez'?'Perete de rezistență':st.k==='gol'?'Gol în perete':'Grindă'}</h2><p class="sub">${f(Math.abs(st.b-st.a),2)} m lungime</p></div></div>
    ${st.k==='grinda'?`<div class="fields"><label class="f">Lățime grindă (m)<input data-s="st" data-f="w" id="st-w" type="number" inputmode="decimal" min=".1" max="1" step=".05" value="${st.w}"></label></div>`:''}
    <ul class="dchk"><li>${st.k==='gol'?(st.auto?'Peretele dintre camerele unite. Ca să-l refaci, separă camera din Detalii.':'Aici peretele lipsește: nu se pun aparate și nici doze de derivație.'):st.k==='rez'?'Nu se taie șlițuri și nu se fac goluri pentru doze fără acordul proiectantului de structură. Aplicația nu pune doze de derivație aici și marchează aparatele, traseele care trec prin perete și cele care merg în lungul lui.':'Grinda nu se găurește și nu se taie. Traseele de sub tavan care o traversează sunt marcate cu ✕ roșu. Treci pe sub ea, aparent, sau mută traseele în pardoseală.'}</li></ul>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge</button></div>`;
  }else if(sel&&sel.kind==='win'){
    const w=P.wins.find(i=>i.id===sel.id);
    if(!w){sel=null;return renderInspector()}
    const q=doorRooms(P,{...w,s:1});
    h=`<div class="ihead">${svgSym('geam')}<div><h2>${w.kind==='balcon'?'Ușă de balcon':'Fereastră'}</h2><p class="sub">${[q.sw,q.ot].filter(Boolean).map(r=>esc(r.name)).join(' · ')||'Perete'} · trage ca s-o muți pe perete</p></div></div>
    <div class="fields">
      <label class="f">Lățime gol (m)<select data-s="win" data-f="w" id="w-w">${[.6,.8,.9,1,1.2,1.4,1.5,1.8,2,2.4].map(v=>`<option value="${v}"${v===w.w?' selected':''}>${f(v,2)}</option>`).join('')}</select></label>
      <label class="f">Tip<select data-s="win" data-f="kind" id="w-kind">${opt({geam:'Fereastră',balcon:'Ușă de balcon'},w.kind)}</select></label>
      <label class="f">Parapet (m)<input data-s="win" data-f="sill" id="w-sill" type="number" inputmode="decimal" min="0" max="2" step=".05" value="${w.sill}"></label>
      <label class="f">Înălțime gol (m)<input data-s="win" data-f="hg" id="w-hg" type="number" inputmode="decimal" min=".3" max="3" step=".05" value="${w.hg}"></label>
    </div>
    <div id="insDyn"></div>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge fereastra</button></div>`;
  }else if(sel&&sel.kind==='door'){
    const d=P.doors.find(i=>i.id===sel.id);
    if(!d){sel=null;return renderInspector()}
    const q=doorRooms(P,d);
    h=`<div class="ihead">${svgSym('usa')}<div><h2>${d.kind==='ext'?'Ușă de intrare':'Ușă interioară'}</h2><p class="sub">${q.ot?esc(q.ot.name)+' → ':'Exterior → '}${q.sw?esc(q.sw.name):'exterior'} · trage ca s-o muți pe perete</p></div></div>
    <div class="fields">
      <label class="f">Lățime gol (m)<select data-s="door" data-f="w" id="d-w">${[.6,.7,.8,.9,1,1.2].map(v=>`<option value="${v}"${v===d.w?' selected':''}>${f(v,2)}</option>`).join('')}</select></label>
      <label class="f">Tip<select data-s="door" data-f="kind" id="d-kind">${opt({int:'Interioară',ext:'De intrare'},d.kind)}</select></label>
    </div>
    <div class="bar"><button class="btn" type="button" data-act="flipH">Mută balamalele</button><button class="btn" type="button" data-act="flipS">Inversează deschiderea</button></div>
    <div id="insDyn"></div>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge ușa</button></div>`;
  }else if(sel&&sel.kind==='room'){
    const r=P.rooms.find(i=>i.id===sel.id);
    if(!r){sel=null;return renderInspector()}
    const par=r.of&&P.rooms.find(x=>x.id===r.of),nb=r.of?[]:[...new Map(P.rooms.filter(x=>x.id!==r.id&&x.of!==r.id&&(x.of||x.id)!==r.id&&sharedSeg(r,x)).map(x=>{const t=rootOf(P,x);return[t.id,t]})).values()];
    h=`<div class="ihead">${svgSym('room')}<div><h2>${esc(r.name)}</h2><p class="sub">${par?'Parte din '+esc(par.name):'Cameră'} · trage din nou ca s-o muți</p></div></div>
    ${roomTabs()}${inspTab==='sum'?roomSummary(r):`
    ${par?`<div class="bar"><span class="muted" style="font-size:13px">Peretele dintre ele lipsește. Elementele de aici aparțin camerei ${esc(par.name)}.</span><button class="btn" type="button" data-act="unmerge">Separă</button></div>`:nb.length?`<div><h4>Fără perete între ele</h4><div class="bar">${nb.map(x=>`<button class="btn" type="button" data-act="merge" data-room="${x.id}">Unește cu ${esc(x.name)}</button>`).join('')}</div></div>`:''}
    <div class="fields">
      <label class="f full">Nume<input data-s="room" data-f="name" id="r-name" value="${esc(r.name)}"></label>
      <label class="f full">Tip<select data-s="room" data-f="type" id="r-type">${opt(RT,r.type)}</select></label>
      <label class="f full">Pereți<select data-s="room" data-f="wall" id="r-wall"><option value="">Ca în proiect (${WM[P.wallMat||'caramida']})</option>${opt(WM,r.wall||'__')}</select></label>
      <label class="f">Lățime (m)<input data-s="room" data-f="w" id="r-w" type="number" inputmode="decimal" min=".5" step=".05" value="${r.w}"></label>
      <label class="f">Lungime (m)<input data-s="room" data-f="h" id="r-h" type="number" inputmode="decimal" min=".5" step=".05" value="${r.h}"></label>
      <label class="f full">Colț teșit (perete oblic)<select id="r-ch">${opt({'':'Fără','tl':'Stânga sus','tr':'Dreapta sus','bl':'Stânga jos','br':'Dreapta jos'},(r.ch&&r.ch.k)||'')}</select></label>
      ${chOf(r)?`<label class="f">Teșire pe lățime (cm)<input id="r-cha" type="number" inputmode="numeric" min="20" step="5" value="${Math.round(r.ch.a*100)}"></label><label class="f">Teșire pe lungime (cm)<input id="r-chb" type="number" inputmode="numeric" min="20" step="5" value="${Math.round(r.ch.b*100)}"></label>
      <label class="f full" style="flex-direction:row;align-items:center;gap:8px"><input type="checkbox" id="r-chd"${r.ch.door?' checked':''}> Ușă pe peretele oblic (${f(diagOf(r).len,2)} m)</label>${r.ch.door?`<label class="f">Lățime ușă (cm)<input id="r-chw" type="number" inputmode="numeric" min="60" step="5" value="${Math.round(r.ch.door.w*100)}"></label>`:''}`:''}
    </div>
    <div id="insDyn"></div>
    <div class="bar"><button class="btn dng" type="button" data-act="del">Șterge camera și elementele ei</button></div>`}`;
  }else if(focusId&&P.rooms.some(z=>z.id===focusId)){
    h=roomPanel(focusId);
  }else{
    h=`<div><h2>${esc(P.name)}</h2><p class="sub">Atinge o cameră sau un element ca să-l editezi.</p></div>
    <div id="insDyn"></div>
    <div><h4>Niveluri</h4><ul class="dchk">${lvSorted(P).map(l=>`<li><div class="fields"><label class="f">Nume<input data-lvf="name" data-lid="${l.id}" id="lv-n-${l.id}" value="${esc(l.name)}"></label><label class="f">Cota pardoselii (m)<input data-lvf="elev" data-lid="${l.id}" id="lv-e-${l.id}" type="number" inputmode="decimal" step=".05" value="${l.elev}"></label></div><div class="bar">${l.id===P.lvCur?'<span class="muted" style="font-size:12px">Nivelul afișat</span>':`<button class="btn" type="button" data-lva="go" data-lid="${l.id}">Deschide</button>`}${P.levels.length>1?`<button class="btn dng" type="button" data-lva="del" data-lid="${l.id}">Șterge nivelul</button>`:''}</div></li>`).join('')}</ul>
    <div class="bar" style="margin-top:8px"><button class="btn pri" type="button" data-lva="add">+ Nivel nou deasupra</button>${(()=>{const ls=lvSorted(P),ix=ls.findIndex(l=>l.id===P.lvCur);return ix>0&&!P.rooms.length?`<button class="btn" type="button" data-lva="copy">Copiază camerele de la ${esc(ls[ix-1].name)}</button>`:''})()}</div></div>
    <div><h4>Setări proiect</h4><div class="fields">
      <label class="f full">Nume proiect<input data-s="proj" data-f="name" id="p-name" value="${esc(P.name)}"></label>
      <label class="f">Înălțime cameră (m)<input data-s="proj" data-f="H" id="p-H" type="number" inputmode="decimal" min="2" max="5" step=".05" value="${P.H}"></label>
      <label class="f">Trasee orizontale<select data-s="proj" data-f="route" id="p-route">${opt({pardoseala:'Toate pe jos, lumini prin întrerupător',mixt:'Prize pe jos, lumini sus',tavan:'Toate sub tavan'},P.route||'mixt')}</select></label>
      <label class="f">Trecere între camere<select data-s="proj" data-f="through" id="p-through">${opt({usa:'Pe la uși (peste toc)',perete:'Prin perete (cel mai scurt)'},P.through==='perete'?'perete':'usa')}</select></label>
      <label class="f">Tip cablu<select data-s="proj" data-f="cable" id="p-cable">${opt({'CYY-F':'CYY-F','NYM-J':'NYM-J','MYYM':'MYYM'},P.cable)}</select></label>
      <label class="f">Rezervă cablu (%)<input data-s="proj" data-f="reserve" id="p-res" type="number" inputmode="decimal" min="0" max="50" step="1" value="${P.reserve}"></label>
      <label class="f">Max. prize / circuit<input data-s="proj" data-f="maxPrize" id="p-mp" type="number" min="1" max="20" step="1" value="${P.maxPrize}"></label>
      <label class="f">Max. lumini / circuit<input data-s="proj" data-f="maxLum" id="p-ml" type="number" min="1" max="30" step="1" value="${P.maxLum}"></label>
      <label class="f">Coef. simultaneitate<input data-s="proj" data-f="ks" id="p-ks" type="number" inputmode="decimal" min=".1" max="1" step=".05" value="${P.ks}"></label>
      <label class="f">Aparataj<select data-s="proj" data-f="aparataj" id="p-ap">${opt({clasic:'Clasic',modular:'Modular'},P.aparataj||'clasic')}</select></label>
      <label class="f">Temă<select id="p-theme">${opt(THEMES,themeGet())}</select></label>
      <label class="f">Tip priză implicit<select data-s="proj" data-f="sockType" id="p-st">${opt({schuko:'Schuko',slim:'Slim'},P.sockType||'schuko')}</select></label>
      ${P.aparataj==='modular'?`<label class="f">Module priză Schuko<input data-s="proj" data-f="modSchuko" id="p-ms" type="number" min="1" max="4" step="1" value="${P.modSchuko||2}"></label>
      <label class="f">Module priză slim<input data-s="proj" data-f="modSlim" id="p-msl" type="number" min="1" max="4" step="1" value="${P.modSlim||1}"></label>`:''}
      <label class="ck full"><input type="checkbox" data-s="proj" data-f="spd" id="p-spd"${P.spd?' checked':''}> Descărcător de supratensiune în tablou</label>
      <label class="ck full"><input type="checkbox" data-s="proj" data-f="shareBoxes" id="p-share"${P.shareBoxes!==false?' checked':''}> Doze comune pentru lumini și prize (mai puține doze)</label>
    </div></div>`;
  }
  insp.innerHTML=`<div class="insp-bar"><span class="insp-grip" data-grip title="Trage ca să schimbi mărimea panoului" aria-hidden="true"></span><span class="insp-t"></span><button class="btn ic" type="button" data-min aria-label="${inspMin?'Arată panoul':'Minimizează panoul'}" title="${inspMin?'Arată panoul':'Minimizează panoul'}">${inspMin?'▴':'▾'}</button><button class="btn ic" type="button" data-x aria-label="Închide panoul">✕</button></div>`+h;{const t=insp.querySelector('h2');insp.querySelector('.insp-t').textContent=t?t.textContent:''}applyInsp();insp.hidden=!inspOpen;stage.classList.toggle('io',inspOpen);renderDyn();renderSelbar();
}
let inspOpen=false;
function setInsp(v){inspOpen=v;insp.hidden=!v;stage.classList.toggle('io',v);if(v)renderInspector();else placeSelbar()}
let inspMin=false,inspSz=(()=>{try{return JSON.parse(localStorage.getItem('electroplan.insp')||'{}')}catch(e){return{}}})();
const inspPortrait=()=>matchMedia('(max-width:760px),(orientation:portrait) and (max-width:1100px)').matches;
function applyInsp(){const pt=inspPortrait();insp.classList.toggle('min',inspMin);insp.classList.toggle('pt',pt);
  if(pt){insp.style.width='';insp.style.height=inspMin?'':(inspSz.h?Math.min(inspSz.h,Hh-90)+'px':'');insp.style.maxHeight=inspMin||inspSz.h?'none':''}
  else{insp.style.height='';insp.style.maxHeight='';insp.style.width=inspMin?'':(inspSz.w?Math.min(inspSz.w,W-120)+'px':'')}
  stage.style.setProperty('--inspW',(inspMin?220:(insp.offsetWidth||340))+'px');placeSelbar()}
insp.addEventListener('click',e=>{if(e.target.closest('[data-min]')){inspMin=!inspMin;renderInspector()}});
insp.addEventListener('pointerdown',e=>{const g=e.target.closest('[data-grip],.insp-bar');if(!g||e.target.closest('button'))return;const pt=inspPortrait(),r=insp.getBoundingClientRect(),x0=e.clientX,y0=e.clientY;let moved=false;
  const mv=ev=>{const dx=ev.clientX-x0,dy=ev.clientY-y0;if(!moved&&Math.hypot(dx,dy)<6)return;moved=true;if(inspMin){inspMin=false;renderInspector()}
    if(pt){inspSz.h=Math.round(clamp(r.bottom-ev.clientY+ (y0-r.top),140,Hh-90));insp.style.height=inspSz.h+'px';insp.style.maxHeight='none'}
    else{inspSz.w=Math.round(clamp(r.right-ev.clientX+(x0-r.left),260,Math.min(640,W-120)));insp.style.width=inspSz.w+'px'}stage.style.setProperty('--inspW',insp.offsetWidth+'px')};
  const up=()=>{removeEventListener('pointermove',mv);removeEventListener('pointerup',up);if(moved){try{localStorage.setItem('electroplan.insp',JSON.stringify(inspSz))}catch(x){}}else if(e.target.closest('[data-grip]')){inspMin=!inspMin;renderInspector()}};
  addEventListener('pointermove',mv);addEventListener('pointerup',up)});
function renderSelbar(){
  const el=$('#selbar');if(!el)return;
  if(bgMode){el.innerHTML=`<span class="tag"><b>${bgMode==='move'?'Mută planul':'Calibrează scara'}</b><span class="muted">${bgMode==='move'?'trage cu degetul ca să așezi planul peste camere':bgCal.length?'atinge al doilea capăt':'atinge primul capăt al unei cote cunoscute'}</span></span><button class="btn pri" type="button" data-sb="bgEnd">${bgMode==='move'?'Gata':'Renunță'}</button>`;return}
  if(tool==='scris'){el.innerHTML=`<span class="tag">${svgSym('scris')}<span>${txBusy?'Citesc scrisul…':txStrokes.length?'Când ai terminat de scris, apasă Redenumește.':'Scrie cu penul numele în chenarul camerei, de exemplu „Dormitor 1”.'}</span></span>${txStrokes.length&&!txBusy?'<button class="btn pri" type="button" data-sb="tx-ok">Redenumește</button><button class="btn" type="button" data-sb="tx-clear">Șterge scrisul</button>':''}<button class="btn" type="button" data-sb="done">Gata</button>`;return}
  if(tool!=='select'){el.innerHTML=`<span class="tag">${svgSym(tool)}<span>${tool==='schita'?(P.sketch.length||P.sketchErase.length?`${P.sketch.length} ${P.sketch.length===1?'linie':'linii'} desenate${P.sketchErase.length?', '+P.sketchErase.length+' '+(P.sketchErase.length===1?'perete șters':'pereți șterși'):''}. Continuă sau generează planul.`:'Desenează cu penul conturul casei și pereții dintre camere, ca pe hârtie.'):tool==='room'?(bgMeta()?'Atinge o cameră din planul importat sau trage ca s-o desenezi de mână':'Trage pe grilă ca să desenezi o cameră'):tool==='usa'?'Atinge un perete ca să pui ușa':tool==='geam'?'Atinge un perete ca să pui fereastra':JBT[tool]?'Atinge un perete ca să pui doza de '+JB[JBT[tool]].lbl+'. Traseele din cameră vor trece prin ea.':tool==='gol'?'Atinge peretele și trage pe porțiunea care lipsește':tool==='rez'?'Atinge peretele de rezistență și trage de-a lungul lui':tool==='grinda'?'Trage pe plan de-a lungul grinzii':'Atinge planul ca să pui: <b>'+esc(T[tool].n)+'</b>'}</span></span>${tool==='schita'?(`<button class="btn${skErase?'':' pri'}" type="button" data-sb="sk-pen" aria-pressed="${!skErase}">Creion</button><button class="btn${skErase?' pri':''}" type="button" data-sb="sk-erase" aria-pressed="${skErase}">Radieră</button>`)+(P.sketch.length||P.sketchErase.length?'<button class="btn" type="button" data-sb="sk-undo">↶ Ultima linie</button><button class="btn dng" type="button" data-sb="sk-clear">Șterge schița</button><button class="btn pri" type="button" data-sb="sk-gen">Generează planul</button>':''):'<button class="btn pri" type="button" data-sb="done">Gata, editez</button>'}`;return}
  if(pickSw){const ps=P.items.find(i=>i.id===pickSw);if(ps){el.innerHTML=`<span class="tag"><b>${esc(T[ps.type].n)}</b><span class="muted">atinge luminile pe care le aprinde; atinge din nou ca să o scoți · ${ctrlOf(P,ps).length} alese</span></span><button class="btn pri" type="button" data-sb="pickDone">Gata</button>`;return}pickSw=null}
  if(!sel&&focusId){const fr=P.rooms.find(z=>z.id===focusId),lv=(P.levels.find(l=>l.id===P.lvCur)||{}).name;if(fr){el.innerHTML=`<span class="tag"><span class="muted">${esc(lv||'')} ›</span><b>${esc(fr.name)}</b></span><button class="btn" type="button" data-sb="proj">${inspOpen?'Ascunde camera':'Detalii cameră'}</button><button class="btn pri" type="button" data-sb="exitRoom">Ieși din cameră</button>`;return}focusId=null}
  if(!sel){el.innerHTML='';return}
  if(sel.kind==='seg'||sel.kind==='node'){
    const sg=sel.kind==='seg'?R.segs.find(q=>q.key===sel.key):null,nd=sel.kind==='node'?R.nodes.find(q=>(q.bkey||q.key)===sel.key):null;
    if(!sg&&!nd){el.innerHTML='';return}
    const c=R.circuits[(sg||nd).ci],man=sg?!!P.routes[sel.key]:!!P.boxes[sel.key];
    el.innerHTML=`<span class="tag"><b>${sg?'Traseu '+c.id+' · '+f(sg.l,1)+' m':'Doza '+nd.id+' · '+esc(nd.room)}</b><span class="muted">${sg?'trage de o porțiune ca s-o muți':'trage ca s-o muți pe alt perete'}${man?' · modificat manual':''}</span></span>${man?`<button class="btn" type="button" data-sb="auto">${sg?'Traseu automat':'Poziție automată'}</button>`:''}<button class="btn" type="button" data-sb="close" aria-label="Deselectează">✕</button>`;
    return;
  }
  const o=sel.kind==='item'?P.items.find(i=>i.id===sel.id):sel.kind==='door'?P.doors.find(i=>i.id===sel.id):sel.kind==='win'?P.wins.find(i=>i.id===sel.id):sel.kind==='st'?P.struct.find(i=>i.id===sel.id):sel.kind==='jb'?P.jb.find(i=>i.id===sel.id):P.rooms.find(i=>i.id===sel.id);if(!o){el.innerHTML='';return}
  const name=sel.kind==='item'?T[o.type].n+(o.type==='prizaM'?` · ${nOf(o)} ${nOf(o)>1?'posturi':'post'}`:''):sel.kind==='door'?'Ușă':sel.kind==='jb'?JB[o.size].n:sel.kind==='st'?(o.k==='rez'?'Perete de rezistență':o.k==='gol'?'Gol în perete':'Grindă'):sel.kind==='win'?(o.kind==='balcon'?'Ușă de balcon':'Fereastră'):o.name,help=sel.kind==='room'?'atinge cotele albastre ca să scrii lungimile':sel.kind==='st'?'șterge-l și desenează-l din nou ca să-l schimbi':'trage ca să-l muți';
  el.innerHTML=`<span class="tag"><b>${esc(name)}</b><span class="muted">${help}</span></span>${sel.kind==='item'&&R&&R.by[sel.id]?'<button class="btn pri" type="button" data-sb="route">Editează traseul</button>':''}${sel.kind==='room'&&!focusId?'<button class="btn" type="button" data-sb="enterRoom">Intră în cameră</button>':''}${focusId?'<button class="btn" type="button" data-sb="exitRoom">Ieși din cameră</button>':''}${sel.kind==='room'?'<button class="btn" type="button" data-sb="elev">Pereți</button><button class="btn pri" type="button" data-sb="meas">Măsoară</button><button class="btn" type="button" data-sb="adj">+ Cameră alăturată</button>':''}<button class="btn" type="button" data-sb="info">${inspOpen?'Ascunde detalii':'Detalii'}</button><button class="btn dng" type="button" data-sb="del">Șterge</button><button class="btn" type="button" data-sb="close" aria-label="Deselectează">✕</button>`;
}
function renderDyn(){
  const el=$('#insDyn');if(!el)return;
  if(sel&&sel.kind==='item'){
    const it=P.items.find(i=>i.id===sel.id);if(!it){el.innerHTML='';return}
    if(it.type==='tablou'){const t=R.tot;el.innerHTML=t&&R.circuits.length?`<dl class="spec"><dt>Circuite</dt><dd>${R.circuits.length}</dd><dt>Diferențiale</dt><dd>${R.rcds.length}</dd><dt>Disjunctor general</dt><dd>${t.main?'C'+t.main:'—'}</dd><dt>Carcasă</dt><dd>${t.panel} module</dd></dl>`:'';return}
    const c=R.circuits.find(x=>x.id===R.by[it.id]),fl=R.flag[it.id]?`<div class="flagmsg">${esc(R.flag[it.id])}</div>`:'';
    const dv=(T[it.type].g==='priza'||T[it.type].g==='intr'||T[it.type].conn==='priza')?devInfo(P,it):null;
    const bxh=dv?`<dl class="spec"><dt>Doză de aparataj</dt><dd>${P.aparataj==='modular'?dv.boxes.map(b=>BOXN[b].replace('Doză de aparataj ','')).join(' + ')+' · '+dv.mods+' module':(dv.cls>1?dv.cls+' × ':'')+'Ø68 mm'}</dd></dl>`:'';
    el.innerHTML=fl+bxh+(c?`<dl class="spec"><dt>Circuit</dt><dd><span class="cid"><span class="dot" style="background:${C.circ[c.ci%8]}"></span>${c.id}</span></dd><dt>Protecție</dt><dd>${c.curve}${c.In} A${c.rcd?' · '+c.rcd:''}</dd><dt>Cablu</dt><dd>${esc(c.cable)}</dd><dt>Lungime circuit</dt><dd>${f(c.len)} m</dd><dt>Cădere tensiune</dt><dd>${f(c.du,2)} %</dd></dl>`:'<p class="muted" style="margin:0">Elementul nu e încă pe niciun circuit. Pune-l într-o cameră și plasează tabloul.</p>');
    return;
  }
  if(sel&&sel.kind==='win'){
    const w=P.wins.find(i=>i.id===sel.id);if(!w){el.innerHTML='';return}
    const fl=P.items.filter(i=>R.flag[i.id]&&onLine(w,i)&&Math.abs(along(w,i)-w.t)<w.w/2+.15);
    el.innerHTML=`<div><h4>Verificare I7 la fereastră</h4><ul class="dchk"><li><span>Gol între ${f(w.sill,2)} m și ${f(w.sill+w.hg,2)} m de la pardoseală. Aparatele de sub parapet sunt permise; în dreptul golului și la mai puțin de 10 cm de toc, nu.</span></li>${fl.length?fl.map(i=>`<li class="no">${esc(T[i.type].n)}: ${esc(R.flag[i.id])}</li>`).join(''):'<li class="ok">Niciun aparat în golul ferestrei sau lângă toc.</li>'}</ul></div>`;
    return;
  }
  if(sel&&sel.kind==='door'){
    const d=P.doors.find(i=>i.id===sel.id);if(!d){el.innerHTML='';return}
    const q=doorRooms(P,d),rs=[q.sw,q.ot].filter(Boolean),fl=P.items.filter(i=>R.flag[i.id]&&onLine(d,i)&&Math.abs(along(d,i)-d.t)<d.w/2+d.w+.2);
    el.innerHTML=`<div><h4>Verificare I7 lângă ușă</h4><ul class="dchk">${rs.map(r=>{const ok=switchOk(P,d,r),lum=P.items.some(i=>i.room===r.id&&T[i.type].g==='lum'),can=switchSpot(P,d,r);
      return`<li><span><b>${esc(r.name)}</b> · ${ok?'<span class="ok">întrerupător pe partea clanței, la 10–30 cm de toc</span>':`<span class="no">${lum?'fără întrerupător lângă ușă':'fără întrerupător aici (camera nu are lumini)'}</span>`}</span>${!ok&&can?`<button class="btn" type="button" data-act="sw" data-room="${r.id}">Pune întrerupător lângă ușă</button>`:''}</li>`}).join('')}
      ${fl.map(i=>`<li class="no">${esc(T[i.type].n)}: ${esc(R.flag[i.id])}</li>`).join('')}</ul></div>`;
    return;
  }
  if(sel&&sel.kind==='room'){
    const r=P.rooms.find(i=>i.id===sel.id);if(!r){el.innerHTML='';return}
    const its=P.items.filter(i=>i.room===r.id),c=g=>its.filter(i=>T[i.type].g===g).length;
    el.innerHTML=`<dl class="spec"><dt>Suprafață</dt><dd>${f(areaR(r),2)} m²</dd><dt>Perimetru</dt><dd>${f(2*(r.w+r.h)-(chPts(r)?chPts(r).a+chPts(r).b-diagOf(r).len:0),2)} m</dd><dt>Prize</dt><dd>${c('priza')}</dd><dt>Lumini / întrerupătoare</dt><dd>${c('lum')} / ${c('intr')}</dd><dt>Consumatori dedicați</dt><dd>${its.filter(i=>T[i.type].g==='ded'&&!T[i.type].onLum).length}</dd></dl>`;
    return;
  }
  const w=R.warn.length?`<ul class="warns">${R.warn.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:(R.circuits.length?'<div class="okmsg">Toate circuitele respectă căderea de tensiune admisă.</div>':'');
  const lg=R.circuits.length?`<div><h4>Circuite (${R.circuits.length})</h4><ul class="legend">${R.circuits.map(c=>`<li data-iso="${c.id}" aria-current="${c.id===isoId}"><span class="dot" style="background:${C.circ[c.ci%8]}"></span><span class="mono">${c.id}</span><span class="trunc">${esc(c.name)} · ${esc(c.where)}</span><span class="mono muted">${c.curve}${c.In}</span></li>`).join('')}</ul></div>`:'';
  el.innerHTML=w+lg;
}
insp.addEventListener('focusin',e=>{if(e.target.dataset.f&&!insp._s){snap();insp._s=true}});
insp.addEventListener('focusout',()=>{insp._s=false});
insp.addEventListener('change',e=>{const id=e.target.id;if(!/^r-ch/.test(id)||!sel)return;const r=P.rooms.find(i=>i.id===sel.id);if(!r)return;snap();
  if(id==='r-ch'){const k=e.target.value;if(!k)delete r.ch;else{const d=+Math.min(1,r.w/2,r.h/2).toFixed(2);r.ch={k,a:r.ch&&r.ch.a||d,b:r.ch&&r.ch.b||d,...(r.ch&&r.ch.door?{door:r.ch.door}:{})}}}
  else if(id==='r-cha'||id==='r-chb'){const v=parseFloat(e.target.value)/100;if(!(v>0)||!r.ch)return;r.ch[id==='r-cha'?'a':'b']=+clamp(v,.2,(id==='r-cha'?r.w:r.h)-.2).toFixed(2)}
  else if(id==='r-chd'){if(!r.ch)return;if(e.target.checked)r.ch.door={w:.8};else delete r.ch.door}
  else if(id==='r-chw'){const v=parseFloat(e.target.value)/100;if(v>0&&r.ch&&r.ch.door)r.ch.door.w=+clamp(v,.6,Math.max(.6,diagOf(r).len-.1)).toFixed(2)}
  changed(true)});
insp.addEventListener('input',e=>{
  const el=e.target,k=el.dataset.f,sc=el.dataset.s;if(!k)return;
  const o=sc==='item'?P.items.find(i=>i.id===sel.id):sc==='room'?P.rooms.find(i=>i.id===sel.id):sc==='door'?P.doors.find(i=>i.id===sel.id):sc==='win'?P.wins.find(i=>i.id===sel.id):sc==='st'?P.struct.find(i=>i.id===sel.id):sc==='jb'?P.jb.find(i=>i.id===sel.id):P;if(!o)return;
  let v=el.type==='checkbox'?el.checked:el.value;
  if(sc==='door'){if(k==='w')v=parseFloat(v);o[k]=v;changed(true);return}
  if(sc==='jb'){o.size=v;changed(true);return}
  if(sc==='st'){v=parseFloat(v);if(!isFinite(v))return;o[k]=clamp(v,.1,1);changed();return}
  if(sc==='win'){
    if(k==='kind'){o.kind=v;if(v==='balcon'){o.sill=0;o.hg=2.1}else if(!o.sill){o.sill=.9;o.hg=1.2}changed(true);return}
    v=parseFloat(v);if(!isFinite(v))return;if(k==='sill')v=clamp(v,0,2);if(k==='hg')v=clamp(v,.3,3);o[k]=v;
    if(k==='w')changed(true);else changed();return;
  }
  if(el.type==='number'){if(v===''){if(sc==='item')delete o[k];return}v=parseFloat(v);if(!isFinite(v))return;if(sc==='room')v=Math.max(.5,v);if(k==='H')v=clamp(v,2,5)}
  if(sc==='room'&&k==='wall'){if(v)o.wall=v;else delete o.wall;changed();return}
  if(sc==='item'&&k==='st'){if(v)o.st=v;else delete o.st;changed(true);return}
  if(sc==='proj'&&k==='aparataj'){o.aparataj=v;changed(true);return}
  if(sc==='item'&&k==='n'){o.n=lastN=clamp(parseInt(v,10)||3,1,5);changed(true);return}
  if(sc==='item'&&k==='label'&&!v){delete o[k]}else o[k]=v;
  if(sc==='room'&&k==='type'&&/^Cameră \d+$/.test(o.name)){o.name=RT[v];const n=$('#r-name');if(n)n.value=o.name}
  if(sc==='room'&&(k==='name'||k==='type')){const hh=insp.querySelector('h2');if(hh)hh.textContent=o.name}
  if(sc==='proj'&&k==='name'){renderProjSel();const hh=insp.querySelector('h2');if(hh)hh.textContent=o.name}
  changed();
});
function deleteSel(){
  if(!sel)return;const k=sel.kind;snap();
  if(k==='item')P.items=P.items.filter(i=>i.id!==sel.id);
  else if(k==='door')P.doors=P.doors.filter(i=>i.id!==sel.id);
  else if(k==='win')P.wins=P.wins.filter(i=>i.id!==sel.id);
  else if(k==='st')P.struct=P.struct.filter(i=>i.id!==sel.id);
  else if(k==='jb')P.jb=P.jb.filter(i=>i.id!==sel.id);
  else{const r=P.rooms.find(x=>x.id===sel.id);
    if(r&&r.of){P.items=P.items.filter(i=>!(i.x>r.x+.01&&i.x<r.x+r.w-.01&&i.y>r.y+.01&&i.y<r.y+r.h-.01));P.struct=P.struct.filter(g=>!(g.auto&&g.of===r.id));P.rooms=P.rooms.filter(x=>x.id!==r.id)}
    else{const ks=P.rooms.filter(x=>x.of===sel.id).map(x=>x.id);P.items=P.items.filter(i=>i.room!==sel.id);P.struct=P.struct.filter(g=>!(g.auto&&(ks.includes(g.of)||g.of===sel.id)));P.rooms=P.rooms.filter(x=>x.id!==sel.id&&x.of!==sel.id)}}
  sel=null;changed(true);toast(k==='room'?'Camera a fost ștearsă. Apasă ↶ ca s-o recuperezi.':'Șters. Apasă ↶ ca să recuperezi.');
}
$('#selbar').addEventListener('click',e=>{
  const b=e.target.closest('[data-sb]');if(!b)return;
  if(b.dataset.sb==='del')deleteSel();
  else if(b.dataset.sb==='done')setTool('select');
  else if(b.dataset.sb==='pickDone'){pickSw=null;renderSelbar();draw()}
  else if(b.dataset.sb==='bgEnd'){bgEnd()}
  else if(b.dataset.sb==='tx-ok')recognizeName();
  else if(b.dataset.sb==='tx-clear'){txStrokes=[];renderSelbar();draw()}
  else if(b.dataset.sb==='sk-pen'){skErase=false;eraseHover=null;renderSelbar();draw()}
  else if(b.dataset.sb==='sk-erase'){skErase=true;renderSelbar();draw()}
  else if(b.dataset.sb==='sk-undo'){snap();P.sketch.pop();changed();renderSelbar()}
  else if(b.dataset.sb==='sk-clear'){snap();P.sketch=[];P.sketchErase=[];changed();renderSelbar()}
  else if(b.dataset.sb==='sk-gen'){snap();const n=generatePlan();if(!n){undoS.pop();renderSelbar();draw()}if(n){setTool('select');changed(true);fit();draw();toast(`Planul a fost actualizat: ${n} ${n===1?'cameră nouă sau modificată':'camere noi sau modificate'}. Atinge o cameră și apoi cotele albastre ca să scrii lungimile.`)}else {if(skOpen.length)toast(`Conturul nu se închide: ${skOpen.length===1?'un capăt de linie nu atinge':skOpen.length+' capete de linie nu ating'} alt perete. Le-am marcat cu cerc roșu. Prelungește linia până atinge peretele și generează din nou.`);else if(!P.sketchErase.length)toast('Nu am găsit camere închise în schiță. Desenează conturul sau completează-l pornind de la pereții existenți.')}}
  else if(b.dataset.sb==='meas'&&sel)startMeas(sel.id);
  else if(b.dataset.sb==='elev'&&sel)openElev(sel.id);
  else if(b.dataset.sb==='route'&&sel){const cid=R&&R.by[sel.id];if(cid){sel=null;setIso(cid);renderInspector();renderSelbar();toastAct(`Traseul circuitului ${cid}: trage de o porțiune ca s-o muți, de exemplu spre ușă.`,'Gata',()=>setIso(''))}}
  else if(b.dataset.sb==='info'||b.dataset.sb==='proj')setInsp(!inspOpen);
  else if(b.dataset.sb==='enterRoom'&&sel&&sel.kind==='room'){const r=P.rooms.find(z=>z.id===sel.id);if(r)enterRoom(r.of||r.id)}
  else if(b.dataset.sb==='exitRoom')exitRoom();
  else if(b.dataset.sb==='adj'&&sel&&sel.kind==='room')openAdj(sel.id);
  else if(b.dataset.sb==='auto'&&sel){snap();if(sel.kind==='seg')delete P.routes[sel.key];else delete P.boxes[sel.key];changed(true)}
  else{sel=null;setInsp(false);renderInspector();draw()}
});
insp.addEventListener('click',e=>{
  if(e.target.closest('[data-x]')){setInsp(false);renderSelbar();return}
  const li=e.target.closest('[data-iso]');if(li){setIso(li.dataset.iso===isoId?'':li.dataset.iso);return}
  const it=e.target.closest('[data-itab]');if(it){inspTab=it.dataset.itab;renderInspector();return}
  const b=e.target.closest('[data-act]');if(!b||!sel)return;
  if(b.dataset.act==='goitem'){const q=P.items.find(i=>i.id===b.dataset.id);if(q){sel={kind:'item',id:q.id};centerOn(q);renderInspector();renderSelbar();draw()}return}
  if(b.dataset.act==='measure'){startMeas(sel.id);return}
  if(b.dataset.act==='elev'){openElev(sel.id);return}
  if(b.dataset.act==='enter'){const r=P.rooms.find(x=>x.id===sel.id);if(r)enterRoom(r.of||r.id);return}
  const act=b.dataset.act,d=sel.kind==='door'?P.doors.find(i=>i.id===sel.id):null;
  if(act==='pick'&&sel.kind==='item'){pickSw=sel.id;setInsp(false);renderSelbar();draw();return}
  if(act==='ctrlAuto'&&sel.kind==='item'){const it=P.items.find(i=>i.id===sel.id);if(it){snap();delete it.ctrl;changed(true)}return}
  if(act==='merge'||act==='unmerge'){
    const r=P.rooms.find(x=>x.id===sel.id);if(!r)return;snap();
    if(act==='merge'){
      const tg=P.rooms.find(x=>x.id===b.dataset.room);if(!tg)return;
      const kids=P.rooms.filter(x=>x.of===r.id);
      for(const x of[r,...kids]){x.of=tg.id;x.name=tg.name;x.type=tg.type}
      P.items.forEach(i=>{if(i.room===r.id)i.room=tg.id});P.jb.forEach(j=>{if(j.room===r.id)j.room=tg.id});
      const grp=P.rooms.filter(x=>x.id===tg.id||x.of===tg.id);
      for(const x of[r,...kids])for(const y of grp){if(x===y||x.of===y.id&&y.of)continue;const sg=sharedSeg(x,y);if(sg&&!P.struct.some(g=>g.k==='gol'&&g.auto&&g.o===sg.o&&Math.abs(g.c-sg.c)<.02&&Math.abs(g.a-sg.a)<.02))P.struct.push({id:uid(),k:'gol',auto:true,of:x.id,...sg})}
      toast(`Unită cu ${tg.name}. Peretele dintre ele a fost scos.`);
    }else{
      const pid=r.of;r.of=null;r.name='Cameră '+(P.rooms.length);P.struct=P.struct.filter(g=>!(g.k==='gol'&&g.auto&&g.of===r.id));
      P.items.forEach(i=>{if(i.room===pid&&i.x>r.x+.01&&i.x<r.x+r.w-.01&&i.y>r.y+.01&&i.y<r.y+r.h-.01)i.room=r.id});
    }
    changed(true);return;
  }
  if(act!=='del'){
    if(!d)return;snap();
    if(act==='flipH')d.hinge=d.hinge?0:1;
    else if(act==='flipS')d.s=-d.s;
    else if(act==='sw'){const r=P.rooms.find(x=>x.id===b.dataset.room),sp=r&&switchSpot(P,d,r);if(sp)P.items.push({id:uid(),type:'intr',room:r.id,x:sp.x,y:sp.y})}
    changed(true);return;
  }
  deleteSel();
});

$('#v-calcul').addEventListener('click',e=>{if(e.target.closest('#pdfBtn')){exportPdf();return}const b=e.target.closest('[data-iso]');if(!b)return;if(b.dataset.lv&&b.dataset.lv!==P.lvCur)switchLevel(b.dataset.lv);setIso(b.dataset.iso)});
$('#isoSel').addEventListener('change',e=>setIso(e.target.value));
$('#bgBtn').onclick=()=>{$('#hudMore').hidden=true;renderBgDlg()};
$('#hudMoreBtn').onclick=e=>{e.stopPropagation();const m=$('#hudMore');m.hidden=!m.hidden;$('#hudMoreBtn').setAttribute('aria-expanded',!m.hidden)};
document.addEventListener('pointerdown',e=>{const m=$('#hudMore');if(!m.hidden&&!e.target.closest('#hudMore,#hudMoreBtn')){m.hidden=true;$('#hudMoreBtn').setAttribute('aria-expanded','false')}});
function renderCalc(){
  const el=$('#v-calcul'),multi=P.levels.length>1,lvN=id=>(P.levels.find(l=>l.id===id)||{}).name||'';
  if(!RA)R=computeLv();
  const warns=RA.levels.flatMap(x=>x.R.warn.map(w=>multi?`${x.l.name}: ${w}`:w));
  if(!RA.boards.length||!RA.boards.some(b=>b.circuits.length)){el.innerHTML=`<div class="wrap"><div class="bar" style="justify-content:space-between"><h1>Circuite și tablou</h1><button class="btn pri" type="button" id="pdfBtn">Exportă PDF</button></div><div class="empty">${esc(warns[0]||'Adaugă elemente pe plan.')} Revino aici după ce ai pus prize, lumini și tabloul. Exportul PDF are nevoie de tablou și de cel puțin un circuit.</div></div>`;return}
  const board=b=>{
    const t=b.tot;
    const rows=b.circuits.map(c=>`<tr><td><span class="cid"><span class="dot" style="background:${C.circ[c.ci%8]}"></span>${c.id}</span></td>${multi?`<td>${esc(lvN(c.lv))}</td>`:''}<td>${esc(c.name)}<div class="muted" style="font-size:12px">${esc(c.where)}</div></td><td class="n">${c.n}</td><td class="n">${Math.round(c.P)}</td><td class="n">${f(c.Ib)}</td><td class="n">${c.curve}${c.In}</td><td>${c.rcd||'—'}</td><td class="mono" style="white-space:nowrap">${esc(c.cable)}</td><td class="n">${f(c.len)}</td><td class="n"><span class="pill ${c.du<=c.lim?'ok':'bad'}">${f(c.du,2)} %</span></td><td>${c.kind==='feed'?'':`<button class="btn" type="button" data-iso="${c.id}" data-lv="${c.lv}">Vezi traseul</button>`}</td></tr>`).join('');
    const mods=[{w:2,cls:'main',a:'General',b:t.main?`C${t.main} 2P`:'trifazic'}];
    if(P.spd)mods.push({w:2,a:'SPD',b:'T2 1P+N'});
    b.circuits.filter(c=>!c.rcd).forEach(c=>mods.push({w:1,a:c.id,b:c.curve+c.In,col:C.circ[c.ci%8]}));
    b.rcds.forEach(r=>{mods.push({w:2,cls:'rcd',a:r.id,b:'40A 30mA'});r.circuits.forEach(c=>mods.push({w:1,a:c.id,b:c.curve+c.In,col:C.circ[c.ci%8]}))});
    const per=t.panel<=18?t.panel:t.panel%18===0&&t.panel>36?18:12,rowsD=[];let row=[],used=0;
    for(const m of mods){if(used+m.w>per){rowsD.push(row);row=[];used=0}row.push(m);used+=m.w}
    rowsD.push(row);while(rowsD.length*per<t.panel)rowsD.push([]);
    const rail=rowsD.map(r=>{const u=r.reduce((s2,m)=>s2+m.w,0);return`<div class="row" style="grid-template-columns:repeat(${per},minmax(0,1fr))">${r.map(m=>`<div class="mod ${m.cls||''}" style="grid-column:span ${m.w}">${m.col?`<span class="k" style="background:${m.col}"></span>`:'<span></span>'}<b>${esc(m.a)}</b><small>${esc(m.b)}</small></div>`).join('')}${Array.from({length:Math.max(0,per-u)},()=>'<div class="mod spare"></div>').join('')}</div>`}).join('');
    return`${RA.boards.length>1?`<h2 style="font-size:28px">Tablou ${esc(b.l.name)}${b===RA.boards[0]?' (principal)':''}</h2>`:''}
    <div class="stats">
      <div class="stat"><span>Putere instalată</span><b>${f(t.Pi/1000,2)} kW</b><small>suma receptoarelor</small></div>
      <div class="stat"><span>Putere cerută</span><b>${f(t.Pc/1000,2)} kW</b><small>Ks = ${f(t.ks,2)}</small></div>
      <div class="stat"><span>Curent cerut</span><b>${f(t.Ic)} A</b><small>monofazic 230 V</small></div>
      <div class="stat"><span>Disjunctor general</span><b>${t.main?'C'+t.main:'—'}</b><small>2P</small></div>
      <div class="stat"><span>Tablou</span><b>${t.panel} mod.</b><small>${t.mods} ocupate + rezervă</small></div>
    </div>
    <h2>Lista circuitelor${RA.boards.length>1?' · '+esc(b.l.name):''}</h2>
    <div class="tbl"><table><thead><tr><th>Circuit</th>${multi?'<th>Nivel</th>':''}<th>Destinație</th><th class="n">Puncte</th><th class="n">Pi (W)</th><th class="n">Ib (A)</th><th class="n">Protecție</th><th>Diferențial</th><th>Cablu</th><th class="n">Lungime (m)</th><th class="n">ΔU</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
    <h2>Echiparea tabloului${RA.boards.length>1?' · '+esc(b.l.name):''}</h2>
    <div class="rail-box"><div class="rail">${rail}</div></div>`;
  };
  const doze=RA.levels.flatMap(x=>x.R.phys.map(n=>({...n,lvn:x.l.name})));
  el.innerHTML=`<div class="wrap">
    <div class="bar" style="justify-content:space-between"><h1>Circuite și tablou</h1><button class="btn pri" type="button" id="pdfBtn">Exportă PDF</button></div>
    <p class="lede">Calculat automat din plan${multi?` pe ${P.levels.length} niveluri`:''}: ${RA.boards.reduce((t,b)=>t+b.circuits.length,0)} circuite, trasee ${P.route==='tavan'?'orizontale la 30 cm sub tavan':P.route==='mixt'?'la prize și consumatori prin pardoseală, la iluminat și la consumatorii montați sus (aer condiționat, boiler) la 30 cm sub tavan':'prin pardoseală, cu dozele de derivație pe perete, la 30 cm de pardoseală; la iluminat cablul merge de la doză la întrerupător, iar de la întrerupător urcă pe perete și ajunge la corpul de iluminat pe tavan'}, cablu ${esc(P.cable)} în tub de protecție.${multi&&RA.boards.length===1?' Nivelurile fără tablou propriu sunt alimentate din tabloul principal, printr-o trecere între niveluri.':''}</p>
    ${warns.length?`<ul class="warns">${warns.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}
    ${RA.boards.map(board).join('')}
    <h2>Doze de derivație</h2>
    <p class="lede" style="margin:-8px 0 0">Poziții pe perete, măsurate de la colțul camerei (stânga pentru pereții de sus și jos, sus pentru cei laterali, privind planul). Dozele de aparataj stau în spatele fiecărei prize și al fiecărui întrerupător, la înălțimea lor de montaj. Când o doză e comună mai multor circuite, fiecare circuit are clemele lui, separate și etichetate, iar nulurile circuitelor nu se leagă între ele, mai ales când sunt pe diferențiale diferite.</p>
    <div class="tbl"><table><thead><tr><th>Doză</th>${multi?'<th>Nivel</th>':''}<th>Mărime</th><th>Circuite</th><th>Cameră</th><th>Perete</th><th class="n">De la colț (m)</th><th class="n">Înălțime (m)</th><th class="n">Cabluri</th></tr></thead><tbody>${doze.map(n=>`<tr><td class="mono"><b>${n.id}</b>${n.jb?' <span class="muted" style="font-family:var(--f-body);font-size:12px">pusă de tine</span>':''}</td>${multi?`<td>${esc(n.lvn)}</td>`:''}<td>${JB[n.size].lbl}</td><td>${n.cids.length?n.cids.map((c,i)=>`<span class="cid"><span class="dot" style="background:${C.circ[n.cis[i]%8]}"></span>${c}</span>`).join(' '):'<span class="muted">nefolosită</span>'}</td><td>${esc(n.room)}</td><td>${n.wall?'peretele din '+n.wall:'—'}</td><td class="n">${f(n.dist,2)}</td><td class="n">${f(n.z,2)}</td><td class="n">${n.cab} / ${JB[n.size].cap}</td></tr>`).join('')||`<tr><td colspan="${multi?9:8}" class="muted">Nu există doze de derivație.</td></tr>`}</tbody></table></div>
    <p class="note">Secțiunile țin cont de curentul admisibil în tub și de căderea de tensiune maximă de 3 % la iluminat și 5 % la celelalte receptoare (I7-2011). Circuitele de prize și consumatori sunt protejate cu diferențial de 30 mA. Traseele orizontale stau în zona de instalare de sub tavan (15–45 cm), coborârile spre aparate sunt verticale, iar aparatele de lângă uși și ferestre stau la 10–30 cm de toc, cu întrerupătorul pe partea clanței. Sub parapetul ferestrei se pot monta aparate, în dreptul golului nu. Pereții de rezistență și grinzile nu se taie și nu se găuresc fără acordul proiectantului de structură: dozele de derivație se pun pe alți pereți, iar traseele care îi străpung sau trec prin grinzi sunt marcate. Rezultatele sunt orientative: proiectul final se verifică și se semnează de un electrician autorizat ANRE.</p>
  </div>`;
}

function boardMats(p,b){
  const L=[],add=(cat,key,name,um,q)=>{if(q)L.push({cat,key,name,um,q})},t=b.tot;if(!t||!b.circuits.length)return L;
  add('Tablou electric','tb:box:'+t.panel,`Tablou electric îngropat ${t.panel} module`,'buc',1);
  if(t.main)add('Tablou electric','tb:main:'+t.main,`Disjunctor general 2P C${t.main}`,'buc',1);
  if(p.spd)add('Tablou electric','tb:spd','Descărcător de supratensiune T2 1P+N','buc',1);
  add('Tablou electric','tb:rcd','Întrerupător diferențial 2P 40 A 30 mA tip A','buc',b.rcds.length);
  for(const c of b.circuits)add('Tablou electric',`tb:mcb:${c.curve}${c.In}`,`Siguranță automată 1P+N ${c.curve}${c.In}`,'buc',1);
  add('Tablou electric','tb:bar','Set bare nul și PE','buc',1);add('Tablou electric','tb:comb','Pieptene de legătură 1P+N','buc',1);
  if(b.feed){add('Cabluri','cab:'+b.feed.cable,`Cablu ${b.feed.cable} mm²`,'m',Math.ceil(b.feed.len*(1+(+p.reserve||0)/100)));add('Tuburi și doze','tub:'+b.feed.tube,`Tub flexibil de protecție Ø${b.feed.tube} mm`,'m',Math.ceil(b.feed.len*1.05))}
  add('Manoperă','man:tb','Manoperă — echipare și conectare tablou','buc',1);
  return L;
}
function materialsAll(){
  if(!RA)R=computeLv();
  const m=new Map(),addL=L=>{for(const x of L){const q=m.get(x.key);if(q)q.q+=x.q;else m.set(x.key,{...x})}};
  for(const lv of RA.levels)addL(materials(lvView(P,lv.id),lv.R,{noBoard:RA.boards.length>0}));
  for(const b of RA.boards)addL(boardMats(P,b));
  const order=['Cabluri','Tuburi și doze','Aparataj','Iluminat','Curenți slabi','Tablou electric','Manoperă'];
  return[...m.values()].sort((a,b)=>order.indexOf(a.cat)-order.indexOf(b.cat));
}
function genTasksAll(){
  if(!RA)R=computeLv();
  const items=RA.levels.flatMap(x=>lvGet(P,x.id).items),by=Object.assign({},...RA.levels.map(x=>x.R.by));
  const circs=RA.boards.length?RA.boards.flatMap(b=>b.circuits):RA.levels.flatMap(x=>x.R.circuits);
  return genTasks({...P,items},{circuits:circs,tot:RA.boards[0]?RA.boards[0].tot:null,by},materialsAll());
}
function laborBase(p){const a=p.labor||{},b=cfg.labor||{};return{...a,...b,mult:{...(a.mult||{}),...(b.mult||{})}}}
function derivedPrice(p,k){const lb=laborBase(p),mt=k.split(':')[2],mult=+((lb.mult||{})[mt]??WMULT[mt]);if(k.startsWith('man:slit:')&&+lb.slit)return +lb.slit*mult;if(k.startsWith('man:dz:')&&+lb.doza)return +lb.doza*mult;return 0}
const priceOf=k=>P.prices[k]!=null?+P.prices[k]:cfg.prices[k]!=null?+cfg.prices[k]:derivedPrice(P,k);
function migratePrices(){if(cfg.migrated)return;let n=0;const ps=store.projects.slice().sort((a,b)=>(a.updated||0)-(b.updated||0));for(const p of ps){for(const[k,v]of Object.entries(p.prices||{}))if(cfg.prices[k]==null){cfg.prices[k]=v;n++}for(const[k,v]of Object.entries(p.labor||{}))if(k!=='mult'&&cfg.labor[k]==null)cfg.labor[k]=v}cfg.migrated=true;if(n)saveCfg()}
const money=v=>(+v||0).toLocaleString('ro-RO',{minimumFractionDigits:2,maximumFractionDigits:2});
function renderMat(){
  if(renderMat.busy)return;{const ae=document.activeElement;if(ae&&ae.closest&&ae.closest('#v-materiale')){renderMat.busy=true;ae.blur();renderMat.busy=false}}migratePrices();const el=$('#v-materiale'),L=materialsAll();
  if(!L.length){el.innerHTML=`<div class="wrap"><h1>Necesar de materiale</h1><div class="empty">Lista apare după ce pui camere, elemente și tabloul pe plan.</div></div>`;return}
  let cat='',body='';
  for(const m of L){
    if(m.cat!==cat){cat=m.cat;body+=`<tr class="cat"><td colspan="5">${esc(cat)}</td></tr>`}
    const pr=P.prices[m.key]??cfg.prices[m.key],dp=derivedPrice(P,m.key),ep=priceOf(m.key);
    body+=`<tr><td>${esc(m.name)}</td><td>${m.um}</td><td class="n">${m.q}</td><td class="n"><input class="pin" type="number" inputmode="decimal" min="0" step=".01" data-pk="${esc(m.key)}" id="pr-${esc(m.key.replace(/[^a-z0-9]/gi,'_'))}" value="${pr??''}" placeholder="${dp?f(dp,2):'0,00'}" aria-label="Preț unitar ${esc(m.name)}"></td><td class="n" data-v="${esc(m.key)}">${ep?f(ep*m.q,2):'—'}</td></tr>`;
  }
  el.innerHTML=`<div class="wrap">
    <h1>Necesar de materiale</h1>
    <p class="lede">Cantități calculate din lungimile traseelor, cu ${P.reserve} % rezervă la cablu. Prețurile unitare se salvează în catalogul tău și se folosesc automat în toate proiectele.</p>
    <div class="bar"><button class="btn pri" type="button" id="matCopy">Copiază tabelul pentru Excel</button><button class="btn" type="button" id="catExp">Exportă catalogul (CSV)</button><label class="btn" for="catImp">Importă catalogul (CSV)</label><input type="file" id="catImp" accept=".csv,text/csv,.txt" hidden><button class="btn" type="button" id="toOffer">Ofertă pentru client →</button></div>
    <div class="tbl"><table><thead><tr><th>Material</th><th>UM</th><th class="n">Cantitate</th><th class="n">Preț unitar (lei)</th><th class="n">Valoare (lei)</th></tr></thead><tbody>${body}</tbody><tfoot><tr><td colspan="4">Total (fără TVA)</td><td class="n" id="matTot"></td></tr></tfoot></table></div>
    <div class="card">
      <h2>Manoperă de șlițuire</h2>
      <p class="muted" style="margin:0;font-size:13px">Metrajul de șliț e calculat din coborârile pe perete și din porțiunile de traseu care merg pe pereți. Pereții de rezistență se socotesc beton. Materialul fiecărei camere îl schimbi din Detalii pe plan. Prețurile de mai jos sunt ale tale; coeficienții arată cât de greu se taie fiecare material față de cărămidă.</p>
      <div class="cfields">
        <label class="f">Pereți, implicit<select data-lab="wallMat" id="lb-wm">${opt(WM,P.wallMat||'caramida')}</select></label>
        <label class="f">Preț șliț în cărămidă (lei/m)<input data-lab="slit" id="lb-slit" type="number" inputmode="decimal" min="0" step=".5" value="${laborBase(P).slit??''}" placeholder="ex. 25"></label>
        <label class="f">Preț locaș doză în cărămidă (lei/buc)<input data-lab="doza" id="lb-doza" type="number" inputmode="decimal" min="0" step=".5" value="${laborBase(P).doza??''}" placeholder="ex. 15"></label>
      </div>
      <div class="cfields">${Object.keys(WM).map(k=>`<label class="f">Coeficient ${WM[k]}<input data-mult="${k}" id="lb-m-${k}" type="number" inputmode="decimal" min=".1" max="10" step=".1" value="${(laborBase(P).mult||{})[k]??WMULT[k]}"></label>`).join('')}</div>
    </div>
  </div>`;
  matTotal(L);
}
function matTotal(L){L=L||materialsAll();const t=L.reduce((s,m)=>s+(priceOf(m.key)||0)*m.q,0);const e=$('#matTot');if(e)e.textContent=t?f(t,2):'—'}
$('#v-materiale').addEventListener('change',e=>{
  if(e.target.id==='catImp'){const fl=e.target.files[0];e.target.value='';if(fl)importCatalog(fl);return}
  const lk=e.target.dataset.lab,mk=e.target.dataset.mult;if(!lk&&!mk)return;
  P.labor=P.labor||{};
  if(lk==='wallMat'){P.wallMat=e.target.value;changed();renderMat();return}
  if(lk){const v=parseFloat(e.target.value);delete P.labor[lk];if(isFinite(v)&&v>=0)cfg.labor[lk]=v;else delete cfg.labor[lk]}
  if(mk){const v=parseFloat(e.target.value);if(P.labor.mult)delete P.labor.mult[mk];cfg.labor.mult=cfg.labor.mult||{};if(isFinite(v)&&v>0)cfg.labor.mult[mk]=v;else delete cfg.labor.mult[mk]}
  saveCfg();save();renderMat();
});
$('#v-materiale').addEventListener('input',e=>{
  const k=e.target.dataset.pk;if(!k)return;const v=parseFloat(e.target.value);
  const L=materialsAll(),m=L.find(x=>x.key===k),c=[...document.querySelectorAll('[data-v]')].find(x=>x.dataset.v===k);
  const had=P.prices[k]!=null;delete P.prices[k];if(isFinite(v)&&v>0){cfg.prices[k]=v;if(m)cfg.names[k]=m.name}else delete cfg.prices[k];
  if(c&&m)c.textContent=priceOf(k)?f(priceOf(k)*m.q,2):'—';matTotal(L);clearTimeout(saveCfg.t);saveCfg.t=setTimeout(saveCfg,600);if(had)save();
});
$('#v-materiale').addEventListener('click',e=>{
  if(e.target.id==='toOffer'){showTab('oferta');return}
  if(e.target.id==='catExp'){exportCatalog();return}
  if(e.target.id!=='matCopy')return;
  const L=materialsAll(),rows=[['Categorie','Material','UM','Cantitate','Preț unitar','Valoare']];
  L.forEach(m=>{const p=priceOf(m.key)||0;rows.push([m.cat,m.name,m.um,m.q,p?f(p,2):'',p?f(p*m.q,2):''])});
  copy(rows.map(r=>r.join('\t')).join('\n'),'Tabel copiat. Lipește-l în Excel sau Google Sheets.');
});

function renderWork(){
  const el=$('#v-lucrari'),ts=P.tasks,done=ts.filter(t=>t.s==='done'),hrs=ts.reduce((s,t)=>s+(+t.hrs||0),0),hd=done.reduce((s,t)=>s+(+t.hrs||0),0);
  const pct=hrs?Math.round(hd/hrs*100):ts.length?Math.round(done.length/ts.length*100):0;
  const card=t=>{
    const ed=editTask===t.id,i=['todo','doing','done'].indexOf(t.s);
    return`<article class="task" data-id="${t.id}" data-s="${t.s}">
      <div class="tt">${esc(t.t)}</div>
      ${t.who||t.due||t.hrs||t.note?`<div class="tm">${t.who?`<span>${esc(t.who)}</span>`:''}${t.due?`<span>termen ${esc(t.due.split('-').reverse().join('.'))}</span>`:''}${t.hrs?`<span class="mono">${f(t.hrs,1)} h</span>`:''}${t.note&&!ed?`<span>${esc(t.note)}</span>`:''}</div>`:''}
      ${ed?`<div class="fields">
        <label class="f full">Sarcină<input data-tf="t" id="t-t-${t.id}" value="${esc(t.t)}"></label>
        <label class="f">Responsabil<input data-tf="who" id="t-who-${t.id}" value="${esc(t.who)}"></label>
        <label class="f">Termen<input data-tf="due" id="t-due-${t.id}" type="date" value="${esc(t.due)}"></label>
        <label class="f">Ore estimate<input data-tf="hrs" id="t-hrs-${t.id}" type="number" inputmode="decimal" min="0" step=".5" value="${t.hrs??''}"></label>
        <label class="f">Stare<select data-tf="s" id="t-s-${t.id}">${opt(ST,t.s)}</select></label>
        <label class="f full">Notă<textarea data-tf="note" id="t-note-${t.id}" rows="2">${esc(t.note)}</textarea></label>
      </div>`:''}
      <div class="ta">
        <button class="btn" type="button" data-mv="-1" ${i===0?'disabled':''} aria-label="Mută înapoi">←</button>
        ${ed?`<button class="btn dng" type="button" data-tdel>Șterge</button><button class="btn pri" type="button" data-ted>Gata</button>`:`<button class="btn" type="button" data-ted>Editează</button>`}
        <button class="btn" type="button" data-mv="1" ${i===2?'disabled':''} aria-label="Mută înainte">→</button>
      </div>
    </article>`;
  };
  const col=s=>{const l=ts.filter(t=>t.s===s);return`<section class="col"><h3>${ST[s]}<span>${l.length}</span></h3>${l.map(card).join('')||'<div class="empty">Nicio sarcină</div>'}</section>`};
  el.innerHTML=`<div class="wrap">
    <h1>Lucrări</h1>
    <div class="card">
      <h2>Client și șantier</h2>
      <div class="cfields">
        <label class="f">Client<input data-pf="client" id="w-client" value="${esc(P.client)}" placeholder="Nume client"></label>
        <label class="f">Adresă<input data-pf="adresa" id="w-adresa" value="${esc(P.adresa)}" placeholder="Strada, nr., localitate"></label>
        <label class="f">Telefon<input data-pf="telefon" id="w-tel" type="tel" value="${esc(P.telefon)}" placeholder="07xx xxx xxx"></label>
        <label class="f">Data începerii<input data-pf="start" id="w-start" type="date" value="${esc(P.start)}"></label>
      </div>
    </div>
    <div class="card">
      <div class="bar" style="justify-content:space-between"><h2>Progres ${pct} %</h2><span class="muted mono">${done.length}/${ts.length} sarcini · ${f(hd,1)} / ${f(hrs,1)} h</span></div>
      <div class="prog" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
      <div class="bar"><button class="btn pri" type="button" id="wGen">Generează etapele din proiect</button><button class="btn" type="button" id="wAdd">Adaugă sarcină</button></div>
    </div>
    <div class="kb">${col('todo')}${col('doing')}${col('done')}</div>
  </div>`;
}
const vW=$('#v-lucrari');
vW.addEventListener('input',e=>{
  const pf=e.target.dataset.pf;if(pf){P[pf]=e.target.value;save();return}
  const tf=e.target.dataset.tf;if(!tf)return;const t=P.tasks.find(x=>x.id===e.target.closest('[data-id]').dataset.id);if(!t)return;
  t[tf]=tf==='hrs'?(e.target.value===''?'':parseFloat(e.target.value)):e.target.value;
  if(tf==='s'){renderWork()}save();
});
vW.addEventListener('click',e=>{
  if(e.target.id==='wGen'){const have=new Set(P.tasks.map(t=>t.t));const n=genTasksAll().filter(t=>!have.has(t.t));P.tasks.push(...n);save();renderWork();toast(n.length?`Am adăugat ${n.length} etape.`:'Etapele sunt deja în listă.');return}
  if(e.target.id==='wAdd'){const t={id:uid(),t:'Sarcină nouă',s:'todo',who:'',due:'',hrs:'',note:''};P.tasks.push(t);editTask=t.id;save();renderWork();const i=document.getElementById('t-t-'+t.id);if(i){i.focus();i.select()}return}
  const card=e.target.closest('[data-id]');if(!card)return;const t=P.tasks.find(x=>x.id===card.dataset.id);if(!t)return;
  const mv=e.target.closest('[data-mv]');
  if(mv){const o=['todo','doing','done'],i=clamp(o.indexOf(t.s)+ +mv.dataset.mv,0,2);t.s=o[i];save();renderWork();return}
  if(e.target.closest('[data-ted]')){editTask=editTask===t.id?null:t.id;renderWork();return}
  if(e.target.closest('[data-tdel]')){P.tasks=P.tasks.filter(x=>x.id!==t.id);editTask=null;save();renderWork()}
});

function showTab(t){if(meas&&t!=='plan')endMeas(false);if(t!=='plan')closeOv();
  tab=t;document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===t));
  ['plan','calcul','materiale','oferta','lucrari','admin'].forEach(k=>{$('#v-'+k).hidden=k!==t});
  if(t==='plan')requestAnimationFrame(resize);else renderTab();
}
function renderTab(){if(tab==='calcul')renderCalc();else if(tab==='materiale')renderMat();else if(tab==='oferta')renderOffer();else if(tab==='lucrari')renderWork();else if(tab==='admin'){renderAdmin();loadAdmin()}}
document.querySelector('.tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b)showTab(b.dataset.tab)});

function changed(full){R=computeLv();renderIso();renderLevels();renderStat();draw();if(full)renderInspector();else renderDyn();if(tab!=='plan')renderTab();save()}
let focusId=null;
function loadJsPDF(){return window.jspdf?Promise.resolve():new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';sc.onload=res;sc.onerror=()=>rej(new Error('jspdf'));document.head.appendChild(sc)})}
const PW=2480,PH=1754,PM=70;
function pageCanvas(title,num,tot){
  const c2=document.createElement('canvas');c2.width=PW;c2.height=PH;const g=c2.getContext('2d');
  g.fillStyle='#fff';g.fillRect(0,0,PW,PH);g.strokeStyle='#111';g.lineWidth=4;g.strokeRect(PM/2,PM/2,PW-PM,PH-PM);
  const bw=880,bh=250,bx=PW-PM/2-bw,by=PH-PM/2-bh;g.lineWidth=3;g.strokeRect(bx,by,bw,bh);
  const rows=[['Proiect',P.name],['Beneficiar',P.client||''],['Adresă',P.adresa||''],['Planșa',title],['Data',new Date().toLocaleDateString('ro-RO')],['Întocmit',''],['Verificat (electrician autorizat ANRE)','']];
  const rh=bh/rows.length;g.lineWidth=1.5;g.font='500 22px "IBM Plex Sans",Arial,sans-serif';g.textBaseline='middle';
  rows.forEach(([k,v],i)=>{const y=by+i*rh;if(i)g.beginPath(),g.moveTo(bx,y),g.lineTo(bx+bw,y),g.stroke();g.fillStyle='#555';g.fillText(k,bx+14,y+rh/2);g.fillStyle='#111';g.font='600 22px "IBM Plex Sans",Arial,sans-serif';g.fillText(String(v).slice(0,48),bx+330,y+rh/2);g.font='500 22px "IBM Plex Sans",Arial,sans-serif'});
  g.beginPath();g.moveTo(bx+320,by);g.lineTo(bx+320,by+bh);g.stroke();
  g.font='500 20px "IBM Plex Sans",Arial,sans-serif';g.fillStyle='#555';g.textAlign='right';g.fillText(`Pagina ${num} / ${tot} · ElectroPlan`,PW-PM/2-10,by-16);g.textAlign='left';
  g.fillStyle='#111';g.font='700 46px "Barlow Condensed","Arial Narrow",sans-serif';g.textBaseline='alphabetic';g.fillText(title,PM,PM+40);
  return{c2,g,area:{x:PM,y:PM+70,w:PW-PM*2,h:by-PM-90}};
}
function planImage(w,h){
  const keep={W,Hh,dpr,view:{...view},sel,iso:isoId,focus:focusId,hover,lay:{...layers},cw:cv.width,ch:cv.height,theme:document.documentElement.getAttribute('data-theme'),tx:txStrokes,pk:pickSw};
  document.documentElement.setAttribute('data-theme','light');readColors();
  sel=null;isoId='';focusId=null;hover=null;eraseHover=null;txStrokes=[];pickSw=null;Object.assign(layers,{routes:true,boxes:true,tags:true,dims:true,cmd:false});
  W=w;Hh=h;dpr=1;cv.width=w;cv.height=h;view.rot=0;fit();draw();
  const out=document.createElement('canvas');out.width=w;out.height=h;out.getContext('2d').drawImage(cv,0,0);
  Object.assign(view,keep.view);W=keep.W;Hh=keep.Hh;dpr=keep.dpr;cv.width=keep.cw;cv.height=keep.ch;sel=keep.sel;isoId=keep.iso;focusId=keep.focus;hover=keep.hover;txStrokes=keep.tx;pickSw=keep.pk;Object.assign(layers,keep.lay);
  if(keep.theme)document.documentElement.setAttribute('data-theme',keep.theme);else document.documentElement.removeAttribute('data-theme');readColors();
  return out;
}
function sldPages(b,lvName){
  const ro=b.rcds.map(r=>r.id),circs=b.circuits.slice().sort((p1,p2)=>(p1.rcd?ro.indexOf(p1.rcd)+1:0)-(p2.rcd?ro.indexOf(p2.rcd)+1:0)),LBL=230,MINC=78,area={w:PW-PM*2},per=Math.max(4,Math.floor((area.w-LBL-40)/MINC)),chunks=[];
  for(let i=0;i<circs.length;i+=per)chunks.push(circs.slice(i,i+per));
  return chunks.map((ch,ci)=>({title:`Schema monofilară — Tablou ${b.l?b.l.name:lvName}${chunks.length>1?` (${ci+1}/${chunks.length})`:''}`,draw:(g,a)=>{
    const t=b.tot,ink='#111',x0=a.x+LBL,cw=(a.w-LBL-20)/ch.length,yBus=a.y+260,font=(w2,sz)=>g.font=`${w2} ${sz}px "IBM Plex Sans",Arial,sans-serif`;
    g.strokeStyle=ink;g.fillStyle=ink;g.lineWidth=3;g.textBaseline='middle';
    if(ci===0){
      const mx=a.x+80;font(600,24);g.fillText(b===RA.boards[0]?'Alimentare 230 V / 50 Hz':`Din tabloul ${RA.boards[0].l.name}, ${b.feed?b.feed.id:''}`,mx+30,a.y+20);
      g.beginPath();g.moveTo(mx,a.y);g.lineTo(mx,a.y+70);g.stroke();
      g.strokeRect(mx-26,a.y+70,52,90);font(700,22);g.fillText(`Q0  ${t.main?'C'+t.main:'—'} 2P`,mx+40,a.y+105);font(500,20);g.fillText('Disjunctor general',mx+40,a.y+135);
      g.beginPath();g.moveTo(mx,a.y+160);g.lineTo(mx,yBus);g.stroke();
      if(P.spd){const sx2=mx+300;g.beginPath();g.moveTo(mx,a.y+195);g.lineTo(sx2,a.y+195);g.lineTo(sx2,a.y+205);g.stroke();g.strokeRect(sx2-15,a.y+205,30,40);g.beginPath();g.moveTo(sx2,a.y+245);g.lineTo(sx2,a.y+262);g.moveTo(sx2-16,a.y+262);g.lineTo(sx2+16,a.y+262);g.moveTo(sx2-9,a.y+270);g.lineTo(sx2+9,a.y+270);g.stroke();font(600,18);g.fillText('Descărcător SPD T2',sx2+26,a.y+225)}
      g.lineWidth=6;g.beginPath();g.moveTo(mx,yBus);g.lineTo(x0+cw*ch.length,yBus);g.stroke();g.lineWidth=3;
    }else{g.lineWidth=6;g.beginPath();g.moveTo(x0-20,yBus);g.lineTo(x0+cw*ch.length,yBus);g.stroke();g.lineWidth=3;font(500,20);g.fillText('(continuare)',a.x,yBus)}
    const yR=yBus+40,yS=yBus+170,yM=yS+40,yE=yM+130;
    const groups=[];for(const[i,c]of ch.entries()){const k=c.rcd||'';const lg=groups[groups.length-1];if(lg&&lg.k===k&&k)lg.cols.push(i);else groups.push({k,cols:[i]})}
    for(const gr of groups){
      const xa=x0+cw*gr.cols[0]+cw/2,xb=x0+cw*gr.cols[gr.cols.length-1]+cw/2,xm=(xa+xb)/2;
      if(gr.k){g.beginPath();g.moveTo(xm,yBus);g.lineTo(xm,yR);g.stroke();g.strokeRect(xm-34,yR,68,80);font(700,22);g.textAlign='center';g.fillText('ΔI',xm,yR+28);font(500,16);g.fillText('30 mA',xm,yR+56);g.textAlign='left';font(600,18);g.fillText(`${gr.k} 40A tip A`,xm+42,yR+40);
        g.beginPath();g.moveTo(xm,yR+80);g.lineTo(xm,yS);g.stroke();g.lineWidth=5;g.beginPath();g.moveTo(Math.min(xa,xm)-10,yS);g.lineTo(Math.max(xb,xm)+10,yS);g.stroke();g.lineWidth=3}
      for(const i of gr.cols){const x=x0+cw*i+cw/2;g.beginPath();g.moveTo(x,gr.k?yS:yBus);g.lineTo(x,yM);g.lineTo(x+18,yM+46);g.moveTo(x,yM+50);g.lineTo(x,yE);g.stroke();g.beginPath();g.moveTo(x-8,yM+42);g.lineTo(x+8,yM+58);g.moveTo(x+8,yM+42);g.lineTo(x-8,yM+58);g.stroke();
        g.beginPath();g.moveTo(x-10,yE-14);g.lineTo(x,yE);g.lineTo(x+10,yE-14);g.stroke()}
    }
    const rows=[['Circuit',c=>c.id,'700'],['Protecție',c=>c.curve+c.In],['Diferențial',c=>c.rcd||'—'],['Cablu',c=>c.cable.replace(P.cable+' ','')],['Tip cablu',()=>P.cable],['Lungime (m)',c=>f(c.len,1)],['Pi (W)',c=>String(Math.round(c.P))],['Ib (A)',c=>f(c.Ib,1)],['ΔU (%)',c=>f(c.du,2)],['Nivel',c=>(P.levels.find(l=>l.id===c.lv)||{}).name||'']];
    const ty=yE+20,rh=40;g.lineWidth=1.5;font(600,19);
    rows.forEach(([lb,fn,w2],r)=>{const y=ty+r*rh;g.strokeRect(a.x,y,LBL-10,rh);g.fillStyle='#444';g.fillText(lb,a.x+10,y+rh/2);g.fillStyle=ink;ch.forEach((c,i)=>{const x=x0+cw*i;g.strokeRect(x,y,cw,rh);font(w2||500,18);g.textAlign='center';g.fillText(fn(c),x+cw/2,y+rh/2);g.textAlign='left'});font(600,19)});
    const dy=ty+rows.length*rh,dh=Math.min(a.y+a.h-dy,420);g.strokeRect(a.x,dy,LBL-10,dh);g.fillStyle='#444';g.fillText('Destinație',a.x+10,dy+24);g.fillStyle=ink;
    ch.forEach((c,i)=>{const x=x0+cw*i;g.strokeRect(x,dy,cw,dh);g.save();g.translate(x+cw/2,dy+dh-12);g.rotate(-Math.PI/2);font(600,19);g.fillText(c.name.slice(0,34),0,-10);font(400,17);g.fillText(String(c.where||'').slice(0,40),0,14);g.restore()});
    g.lineWidth=3;
  }}));
}
async function exportPdf(){
  if(!RA)R=computeLv();
  if(!RA.boards.length||!RA.boards.some(b=>b.circuits.length)){toast('Pune tabloul și elementele pe plan înainte de export.');return}
  toast('Pregătesc PDF-ul…');
  try{await loadJsPDF()}catch(e){toast('Nu am putut încărca generatorul de PDF. Verifică conexiunea la internet.');return}
  const lv0=P.lvCur,specs=[];
  for(const l of lvSorted(P))specs.push({title:`Plan instalație electrică — ${l.name}`,plan:l.id});
  for(const l of lvSorted(P)){const rs=lvGet(P,l.id).rooms||[];for(const r of rs.filter(x=>!x.of)){const n=roomWalls(r.id,rs).length;for(let i=0;i<n;i+=4)specs.push({title:`Desfășurata pereților — ${r.name}${lvSorted(P).length>1?' ('+l.name+')':''}${n>4?' '+(i/4+1):''}`,elev:true,lv:l.id,rid:r.id,from:i})}}
  for(const b of RA.boards)specs.push(...sldPages(b));
  specs.push({title:'Tabel circuite',table:true});
  const imgs=[];
  for(const[i,sp]of specs.entries()){
    const pg=pageCanvas(sp.title,i+1,specs.length);
    if(sp.plan){if(P.lvCur!==sp.plan)switchLevel(sp.plan);const k2=1.7,im=planImage(Math.round(pg.area.w/k2),Math.round(pg.area.h/k2));pg.g.imageSmoothingQuality='high';pg.g.drawImage(im,pg.area.x,pg.area.y,pg.area.w,pg.area.h)}
    else if(sp.elev){if(P.lvCur!==sp.lv)switchLevel(sp.lv);const ws=roomWalls(sp.rid),all=ws,part=ws.slice(sp.from,sp.from+4),a=pg.area,cw=a.w/2,chh=a.h/2;
      part.forEach((w,i)=>{const cell={x:a.x+(i%2)*cw+10,y:a.y+Math.floor(i/2)*chh+10,w:cw-20,h:chh-20};pg.g.strokeStyle='#ccc';pg.g.lineWidth=2;pg.g.strokeRect(cell.x,cell.y,cell.w,cell.h);drawElev(pg.g,{x:cell.x+10,y:cell.y+6,w:cell.w-20,h:cell.h-12},w,{k:2.1,title:`${wallName(w,all)} · ${f(w.hi-w.lo,2)} m`,pal:{bg:'#fff',ink:'#111',muted:'#555',face:'#F1F4F7',line:'#999',win:'#D6E8F7'}})})}
    else if(sp.draw)sp.draw(pg.g,pg.area);
    else if(sp.table){const g=pg.g,a=pg.area,cols=[['Tablou',170],['Circuit',120],['Nivel',150],['Destinație',560],['Pct.',80],['Pi (W)',120],['Ib (A)',110],['Protecție',140],['Difer.',110],['Cablu',260],['L (m)',110],['ΔU %',110]];
      let y=a.y;g.lineWidth=1.5;g.strokeStyle='#111';g.textBaseline='middle';const row=(vals,bold)=>{let x=a.x;g.font=`${bold?700:500} 20px "IBM Plex Sans",Arial,sans-serif`;cols.forEach(([,w2],k)=>{g.strokeRect(x,y,w2,38);g.fillStyle='#111';g.fillText(String(vals[k]).slice(0,Math.floor(w2/11)),x+8,y+19);x+=w2});y+=38};
      row(cols.map(c=>c[0]),true);
      for(const b of RA.boards)for(const c of b.circuits){if(y>a.y+a.h-40)break;row([b.l.name,c.id,(P.levels.find(l=>l.id===c.lv)||{}).name||'',`${c.name} · ${c.where||''}`,c.n,Math.round(c.P),f(c.Ib,1),c.curve+c.In,c.rcd||'—',c.cable,f(c.len,1),f(c.du,2)])}
      g.font='500 19px "IBM Plex Sans",Arial,sans-serif';g.fillStyle='#444';g.fillText('Valori calculate orientativ conform I7-2011. Proiectul se verifică și se semnează de un electrician autorizat ANRE.',a.x,y+40)}
    imgs.push(pg.c2.toDataURL('image/jpeg',.9));
  }
  if(P.lvCur!==lv0)switchLevel(lv0);resize();
  const doc=new window.jspdf.jsPDF({orientation:'landscape',unit:'mm',format:'a3',compress:true});
  imgs.forEach((im,i)=>{if(i)doc.addPage('a3','landscape');doc.addImage(im,'JPEG',0,0,420,297)});
  const blob=doc.output('blob'),name=fileBase()+'_instalatie_electrica.pdf';
  await saveBlob(blob,name,['PDF-ul a fost salvat.','PDF-ul a fost descărcat.']);
}
const fileBase=()=>(P.name||'proiect').replace(/[^\w\-ăâîșțĂÂÎȘȚ ]+/g,'').trim().replace(/\s+/g,'_')||'proiect';
async function saveBlob(blob,name,msg){
  try{if(window.claude&&typeof window.claude.use==='function'){const d=await window.claude.use('downloads');if(d){await d.save({filename:name,data:blob});toast(msg[0]);return}}}catch(e){if(e&&e.code==='declined'){toast('Salvarea a fost anulată.');return}}
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),5000);toast(msg[1]);
}
const numRo=v=>(+v||0).toFixed(2).replace('.',',');
function exportCatalog(){
  const L=materialsAll(),seen=new Set(),rows=[['Cod','Material','UM','Pret unitar (lei)']];
  for(const m of L){seen.add(m.key);const p=cfg.prices[m.key];rows.push([m.key,m.name,m.um,p!=null?numRo(p):''])}
  for(const[k,p]of Object.entries(cfg.prices))if(!seen.has(k))rows.push([k,cfg.names[k]||k,'',numRo(p)]);
  const q=v=>/[;"\n]/.test(String(v))?'"'+String(v).replace(/"/g,'""')+'"':String(v);
  saveBlob(new Blob(['﻿'+rows.map(r=>r.map(q).join(';')).join('\r\n')],{type:'text/csv;charset=utf-8'}),'catalog_preturi_electroplan.csv',['Catalogul a fost salvat.','Catalogul a fost descărcat. Îl poți edita în Excel și îl imporți înapoi.']);
}
function parseCsv(t){
  t=t.replace(/^﻿/,'');const first=t.split(/\r?\n/)[0]||'',sep=[';','\t',','].sort((a,b)=>first.split(b).length-first.split(a).length)[0];
  const out=[];let row=[],cell='',qt=false;
  for(let i=0;i<t.length;i++){const ch=t[i];if(qt){if(ch==='"'&&t[i+1]==='"'){cell+='"';i++}else if(ch==='"')qt=false;else cell+=ch}else if(ch==='"')qt=true;else if(ch===sep){row.push(cell);cell=''}else if(ch==='\n'||ch==='\r'){if(ch==='\r'&&t[i+1]==='\n')i++;row.push(cell);out.push(row);row=[];cell=''}else cell+=ch}
  if(cell||row.length){row.push(cell);out.push(row)}
  return out.filter(r=>r.some(c=>c.trim()));
}
async function importCatalog(file){
  let rows;try{rows=parseCsv(await file.text())}catch(e){toast('Nu pot citi fișierul.');return}
  if(!rows.length){toast('Fișierul e gol.');return}
  const L=materialsAll(),byName=new Map(),norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,' ').trim();
  for(const m of L)byName.set(norm(m.name),m.key);for(const[k,n]of Object.entries(cfg.names))byName.set(norm(n),k);
  const keys=new Set([...L.map(m=>m.key),...Object.keys(cfg.prices)]);
  const pnum=v=>{v=String(v||'').replace(/[^\d,.\-]/g,'');if(/,\d{1,2}$/.test(v))v=v.replace(/\./g,'').replace(',','.');else v=v.replace(/,/g,'');return parseFloat(v)};
  let ok=0,bad=0;
  for(const r of rows){
    const pc=[...r].reverse().find(c=>isFinite(pnum(c))&&String(c).trim()!=='');const price=pc==null?NaN:pnum(pc);
    let key=r.map(c=>c.trim()).find(c=>keys.has(c));if(!key)for(const c of r){const k=byName.get(norm(c));if(k){key=k;break}}
    if(!key||!isFinite(price)||price<=0){if(r.some(c=>/\d/.test(c)))bad++;continue}
    cfg.prices[key]=price;const nm=(L.find(m=>m.key===key)||{}).name;if(nm)cfg.names[key]=nm;delete P.prices[key];ok++;
  }
  saveCfg();save();renderMat();toast(`Am importat ${ok} ${ok===1?'preț':'prețuri'}${bad?`, ${bad} ${bad===1?'rând nerecunoscut':'rânduri nerecunoscute'}`:''}.`);
}
function offerOf(p){const o=cfg.offer;p.offer=Object.assign({date:'',valid:o.valid,avans:o.avans,garantie:o.garantie,termen:o.termen,mat:o.mat,disc:0,note:''},p.offer||{});return p.offer}
function offerCalc(){
  const L=materialsAll(),o=offerOf(P),fi=cfg.firm;
  const mats=L.filter(m=>m.cat!=='Manoperă'),lab=L.filter(m=>m.cat==='Manoperă');
  const val=m=>(priceOf(m.key)||0)*m.q,incl=o.mat!=='client';
  const tm=mats.reduce((t,m)=>t+val(m),0),tl=lab.reduce((t,m)=>t+val(m),0);
  const base=(incl?tm:0)+tl,disc=base*Math.min(100,Math.max(0,+o.disc||0))/100,net=base-disc,tva=fi.tva?net*(+fi.cota||0)/100:0;
  const miss=[...(incl?mats:[]),...lab].filter(m=>!priceOf(m.key)).length;
  return{L,mats,lab,tm,tl,base,disc,net,tva,tot:net+tva,incl,miss,o,fi};
}
function offerScope(){
  if(!RA)R=computeLv();const items=RA.levels.flatMap(x=>lvGet(P,x.id).items),cn=g=>items.filter(i=>T[i.type].g===g).reduce((t,i)=>t+ptsOf(i),0);
  const circ=RA.boards.reduce((t,b)=>t+b.circuits.length,0),tb=RA.boards[0]&&RA.boards[0].tot;
  const parts=[];if(circ)parts.push(`${circ} circuite`);if(tb)parts.push(`tablou electric ${tb.panel} module`);
  const pr=cn('priza'),lu=items.filter(i=>T[i.type].g==='lum').length,sw=cn('intr'),de=items.filter(i=>T[i.type].g==='ded'&&!T[i.type].onLum).length;
  if(pr)parts.push(`${pr} ${pr===1?'priză':'prize'}`);if(lu)parts.push(`${lu} ${lu===1?'corp de iluminat':'corpuri de iluminat'}`);if(sw)parts.push(`${sw} ${sw===1?'întrerupător':'întrerupătoare'}`);if(de)parts.push(`${de} ${de===1?'consumator cu circuit dedicat':'consumatori cu circuit dedicat'}`);
  return parts.join(', ');
}
const dRo=d=>{const x=d?new Date(d+'T12:00'):new Date();return isNaN(x)?'':x.toLocaleDateString('ro-RO',{day:'2-digit',month:'2-digit',year:'numeric'})};
const isoD=d=>d.toISOString().slice(0,10);
function offerStats(c){const o=c.o,fi=c.fi;return`<div class="stat"><span>Materiale</span><b>${c.incl?money(c.tm):'—'}</b><small>${c.incl?'lei fără TVA':'procurate de beneficiar'}</small></div>
      <div class="stat"><span>Manoperă</span><b>${money(c.tl)}</b><small>lei fără TVA</small></div>
      <div class="stat"><span>Total fără TVA</span><b>${money(c.net)}</b><small>${c.disc?'după discount '+f(+o.disc,1)+' %':'lei'}</small></div>
      <div class="stat"><span>${fi.tva?'Total cu TVA '+f(+fi.cota||0,0)+' %':'Total de plată'}</span><b>${money(c.tot)}</b><small>${fi.tva?'lei':'neplătitor de TVA'}</small></div>`}
function renderOffer(){
  if(renderOffer.busy)return;{const ae=document.activeElement;if(ae&&ae.closest&&ae.closest('#v-oferta')){renderOffer.busy=true;ae.blur();renderOffer.busy=false}}migratePrices();const el=$('#v-oferta'),c=offerCalc(),o=c.o,fi=c.fi;
  if(!c.L.length){el.innerHTML=`<div class="wrap"><h1>Documente</h1><div class="empty">Documentele apar după ce pui camere, elemente și tabloul pe plan.</div></div>`;return}
  const F=(k,lb,v,t='text',ex='')=>`<label class="f">${lb}<input data-fi="${k}" type="${t}" value="${esc(v??'')}" ${ex}></label>`;
  const O=(k,lb,v,t='text',ex='')=>`<label class="f">${lb}<input data-of="${k}" type="${t}" value="${esc(v??'')}" ${ex}></label>`;
  const Cl=(k,lb,v,t='text')=>`<label class="f">${lb}<input data-pc="${k}" type="${t}" value="${esc(v??'')}"></label>`;
  el.innerHTML=`<div class="wrap">
    <h1>Documente</h1>
    <div class="card" style="flex-direction:row;flex-wrap:wrap;gap:10px;align-items:center"><button class="btn pri" type="button" id="docPdf" style="min-height:44px">Proiect tehnic (PDF)</button><span class="muted" style="font-size:13px;flex:1;min-width:200px">Planurile, schema monofilară și tabelul circuitelor, format A3.</span></div>
    <h2>Ofertă pentru client</h2>
    <p class="lede" style="margin:0">Oferta folosește cantitățile din plan și prețurile din catalogul tău. Datele firmei și condițiile se păstrează pentru toate ofertele.</p>
    <div class="stats" id="offStats">${offerStats(c)}</div>
    ${c.miss?`<div class="warns"><li style="list-style:none">${c.miss} ${c.miss===1?'poziție nu are':'poziții nu au'} preț. Completează-le în <button class="btn" type="button" data-go="materiale" style="padding:2px 8px">Materiale</button>, altfel apar cu 0 în ofertă.</li></div>`:''}
    <div class="bar"><button class="btn pri" type="button" id="offPdf" style="min-height:44px">Ofertă pentru client (PDF)</button>${!fi.name?'<span class="muted" style="font-size:13px">Completează întâi numele firmei, mai jos.</span>':''}</div>
    <div class="card">
      <h2>Client și lucrare</h2>
      <div class="cfields">${Cl('client','Beneficiar',P.client)}${Cl('adresa','Adresa lucrării',P.adresa)}${Cl('telefon','Telefon',P.telefon,'tel')}</div>
    </div>
    <div class="card">
      <h2>Condițiile ofertei</h2>
      <div class="cfields">
        ${O('nr','Număr ofertă',o.nr??'','text',`placeholder="${cfg.next} (automat)"`)}
        ${O('date','Data ofertei',o.date||isoD(new Date()),'date')}
        ${O('valid','Valabilitate (zile)',o.valid,'number','min="1" step="1" inputmode="numeric"')}
        ${O('avans','Avans (%)',o.avans,'number','min="0" max="100" step="5" inputmode="numeric"')}
        ${O('disc','Discount (%)',o.disc||'','number','min="0" max="100" step=".5" inputmode="decimal" placeholder="0"')}
        <label class="f">Materialele<select data-of="mat"><option value="incl"${o.mat!=='client'?' selected':''}>Incluse în ofertă</option><option value="client"${o.mat==='client'?' selected':''}>Procurate de beneficiar</option></select></label>
        ${O('termen','Termen de execuție',o.termen,'text','placeholder="ex. 10 zile lucrătoare de la avans"')}
        ${O('garantie','Garanție',o.garantie)}
      </div>
      <label class="f">Mențiuni (apar în ofertă)<textarea data-of="note" rows="3" style="min-height:70px;font-family:inherit;font-size:14px" placeholder="ex. Nu include corpurile de iluminat decorative.">${esc(o.note||'')}</textarea></label>
    </div>
    <div class="card">
      <h2>Datele firmei tale</h2>
      <p class="muted" style="margin:0;font-size:13px">Se completează o singură dată și apar pe toate ofertele.</p>
      <div class="cfields">
        ${F('name','Nume firmă / PFA',fi.name)}${F('cui','CUI',fi.cui)}${F('reg','Nr. Registrul Comerțului',fi.reg)}
        ${F('addr','Adresă sediu',fi.addr)}${F('tel','Telefon',fi.tel,'tel')}${F('email','E-mail',fi.email,'email')}
        ${F('iban','IBAN',fi.iban)}${F('bank','Banca',fi.bank)}${F('anre','Autorizație ANRE (nr., grad)',fi.anre)}
        ${F('person','Persoană de contact',fi.person)}
        <label class="f">TVA<select data-fi="tva"><option value="1"${fi.tva?' selected':''}>Plătitor de TVA</option><option value="0"${!fi.tva?' selected':''}>Neplătitor de TVA</option></select></label>
        ${fi.tva?F('cota','Cota TVA (%)',fi.cota??21,'number','min="0" max="30" step="1" inputmode="numeric"'):''}
      </div>
      <div class="bar">${fi.logo?`<img src="${fi.logo}" alt="Logo" style="max-height:56px;max-width:200px;background:#fff;border:1px solid var(--line);border-radius:6px;padding:4px">`:''}<label class="btn" for="logoIn">${fi.logo?'Schimbă logo-ul':'Adaugă logo'}</label><input type="file" id="logoIn" accept="image/*" hidden>${fi.logo?'<button class="btn dng" type="button" id="logoDel">Șterge logo-ul</button>':''}</div>
    </div>
  </div>`;
}
const vO=$('#v-oferta');
vO.addEventListener('change',e=>{
  const t=e.target;
  if(t.id==='logoIn'){const fl=t.files[0];t.value='';if(!fl)return;const im=new Image();im.onload=()=>{const k=Math.min(1,600/im.width,240/im.height),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);const g=c.getContext('2d');g.drawImage(im,0,0,c.width,c.height);cfg.firm.logo=c.toDataURL('image/png');URL.revokeObjectURL(im.src);saveCfg();renderOffer()};im.onerror=()=>toast('Nu pot citi imaginea.');im.src=URL.createObjectURL(fl);return}
  if(t.dataset.fi==='tva'){cfg.firm.tva=t.value==='1';saveCfg();renderOffer();return}
  if(t.dataset.of==='mat'){offerOf(P).mat=t.value;cfg.offer.mat=t.value;saveCfg();save();renderOffer();return}
  if(t.dataset.of==='date'){offerOf(P).date=t.value;save();return}
});
vO.addEventListener('input',e=>{
  const t=e.target,v=t.value;
  if(t.dataset.fi){const k=t.dataset.fi;cfg.firm[k]=k==='cota'?(parseFloat(v)||0):v;clearTimeout(saveCfg.t);saveCfg.t=setTimeout(saveCfg,600)}
  else if(t.dataset.of){const k=t.dataset.of,o=offerOf(P),num=['valid','avans','disc'].includes(k);o[k]=num?(v===''?'':parseFloat(v)):v;if(['valid','avans','garantie','termen'].includes(k)){cfg.offer[k]=o[k];clearTimeout(saveCfg.t);saveCfg.t=setTimeout(saveCfg,600)}save()}
  else if(t.dataset.pc){P[t.dataset.pc]=v;save()}
  if(t.dataset.of==='disc'||t.dataset.fi==='cota'){const st=$('#offStats');if(st)st.innerHTML=offerStats(offerCalc())}
});
vO.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){showTab(g.dataset.go);return}
  if(e.target.id==='logoDel'){delete cfg.firm.logo;saveCfg();renderOffer();return}
  if(e.target.id==='offPdf')exportOffer();
  if(e.target.id==='docPdf')exportPdf();
});
async function exportOffer(){
  const c=offerCalc(),o=c.o,fi=c.fi;
  if(!fi.name){toast('Completează numele firmei în „Datele firmei tale”.');const i=vO.querySelector('[data-fi="name"]');if(i){i.scrollIntoView({block:'center'});i.focus()}return}
  toast('Pregătesc oferta…');
  try{await loadJsPDF()}catch(e){toast('Nu am putut încărca generatorul de PDF. Verifică conexiunea la internet.');return}
  if(o.nr==null||o.nr===''){o.nr=String(cfg.next);cfg.next=(+cfg.next||1)+1;saveCfg();save()}
  if(!o.date){o.date=isoD(new Date());save()}
  const W2=1240,H2=1754,M=84,SANS='"IBM Plex Sans",Arial,sans-serif',pages=[];let g,y;
  const font=(w,sz)=>{g.font=`${w} ${sz}px ${SANS}`};
  const newPage=()=>{const cv=document.createElement('canvas');cv.width=W2;cv.height=H2;g=cv.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,W2,H2);g.textBaseline='alphabetic';pages.push(cv);y=M};
  const room=h=>{if(y+h>H2-M-50){newPage();return true}return false};
  const wrap=(t,w)=>{const out=[];for(const para of String(t||'').split('\n')){let line='';for(const wd of para.split(/\s+/)){const tt=line?line+' '+wd:wd;if(g.measureText(tt).width>w&&line){out.push(line);line=wd}else line=tt}out.push(line)}return out};
  const text=(t,x,yy,col,al)=>{g.fillStyle=col||'#111';g.textAlign=al||'left';g.fillText(t,x,yy);g.textAlign='left'};
  newPage();
  let lh=0;
  if(fi.logo){const im=await new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=fi.logo});if(im){const k=Math.min(320/im.width,110/im.height);g.drawImage(im,M,y,im.width*k,im.height*k);lh=im.height*k+18}}
  let fy=y+lh+26;font(700,28);text(fi.name,M,fy);fy+=30;font(400,18);
  for(const l of[[fi.cui&&'CUI '+fi.cui,fi.reg&&'Reg. Com. '+fi.reg].filter(Boolean).join(' · '),fi.addr,[fi.tel&&'Tel. '+fi.tel,fi.email].filter(Boolean).join(' · '),fi.anre&&'Autorizație ANRE: '+fi.anre].filter(Boolean)){text(l,M,fy,'#333');fy+=25}
  g.font=`700 64px "Barlow Condensed","Arial Narrow",sans-serif`;text('OFERTĂ DE PREȚ',W2-M,y+60,'#111','right');
  font(500,20);const dd=new Date(o.date+'T12:00'),vu=new Date(dd);vu.setDate(vu.getDate()+(+o.valid||30));
  text(`Nr. ${o.nr} din ${dRo(o.date)}`,W2-M,y+98,'#333','right');text(`Valabilă până la ${vu.toLocaleDateString('ro-RO',{day:'2-digit',month:'2-digit',year:'numeric'})}`,W2-M,y+126,'#333','right');
  y=Math.max(fy,y+150)+10;g.fillStyle='#18222C';g.fillRect(M,y,W2-2*M,4);y+=44;
  const kv=(k,v)=>{font(600,19);text(k,M,y,'#555');font(400,20);const ls=wrap(v,W2-2*M-190);ls.forEach((l,i)=>text(l,M+190,y+i*27));y+=ls.length*27+6};
  kv('Beneficiar',P.client||'—');if(P.adresa)kv('Adresa lucrării',P.adresa);if(P.telefon)kv('Telefon',P.telefon);
  kv('Obiect','Execuție instalație electrică interioară'+(P.name?' — '+P.name:''));
  const sc=offerScope();if(sc)kv('Cuprinde',sc[0].toUpperCase()+sc.slice(1)+'.');
  y+=18;
  const cols=c.incl?[['Nr.',60,'l'],['Denumire',560,'l'],['UM',70,'c'],['Cant.',100,'r'],['Preț unitar',140,'r'],['Valoare',142,'r']]:[['Nr.',60,'l'],['Denumire',790,'l'],['UM',90,'c'],['Cant.',132,'r']];
  const tw=cols.reduce((t,x)=>t+x[1],0),X0=M;
  const head=()=>{g.fillStyle='#EEF1EC';g.fillRect(X0,y,tw,40);font(700,17);let x=X0;for(const[n,w,a]of cols){text(n,a==='r'?x+w-10:a==='c'?x+w/2:x+10,y+26,'#333',a==='r'?'right':a==='c'?'center':'left');x+=w}y+=40};
  const table=(title,list,priced,sub)=>{
    room(140);font(700,24);text(title,M,y+6);y+=24;head();let n=0,cat='';
    for(const m of list){
      if(m.cat!==cat&&list!==c.lab){cat=m.cat;if(room(76))head();font(700,15);text(cat.toUpperCase(),X0+10,y+26,'#666');y+=36}
      font(400,18);const ls=wrap(m.name,cols[1][1]-20),h=Math.max(38,ls.length*24+14);if(room(h))head();font(400,18);
      n++;let x=X0;const pu=priceOf(m.key)||0,vals=priced?[String(n),'',m.um,String(m.q),money(pu),money(pu*m.q)]:[String(n),'',m.um,String(m.q)];
      cols.forEach(([,w,a],k)=>{if(k===1)ls.forEach((l,i)=>text(l,x+10,y+26+i*24));else text(vals[k],a==='r'?x+w-10:a==='c'?x+w/2:x+10,y+26,'#111',a==='r'?'right':a==='c'?'center':'left');x+=w});
      g.strokeStyle='#D5DAD3';g.lineWidth=1;g.beginPath();g.moveTo(X0,y+h);g.lineTo(X0+tw,y+h);g.stroke();y+=h;
    }
    if(priced){if(room(46))head();font(700,19);text(sub,X0+tw-152,y+30,'#111','right');text(money(list.reduce((t,m)=>t+(priceOf(m.key)||0)*m.q,0)),X0+tw-10,y+30,'#111','right');y+=46}
    y+=26;
  };
  if(c.mats.length)table(c.incl?'Materiale':'Materiale necesare (procurate de beneficiar)',c.mats,c.incl,'Total materiale');
  if(c.lab.length){if(!c.incl)cols.splice(0,cols.length,['Nr.',60,'l'],['Denumire',560,'l'],['UM',70,'c'],['Cant.',100,'r'],['Preț unitar',140,'r'],['Valoare',142,'r']);table('Manoperă',c.lab,true,'Total manoperă')}
  const tr=[];if(c.incl)tr.push(['Materiale',c.tm]);tr.push(['Manoperă',c.tl]);if(c.disc)tr.push([`Discount ${f(+o.disc,1)} %`,-c.disc]);
  if(fi.tva){tr.push(['Total fără TVA',c.net],[`TVA ${f(+fi.cota||0,0)} %`,c.tva])}
  room(tr.length*36+90);const bx=W2-M-520;
  for(const[k,v]of tr){font(500,20);text(k,bx,y+26,'#333');text(money(v)+' lei',W2-M,y+26,'#111','right');y+=36}
  g.fillStyle='#18222C';g.fillRect(bx,y+6,520,62);font(700,24);text(fi.tva?'TOTAL CU TVA':'TOTAL DE PLATĂ',bx+16,y+46,'#fff');text(money(c.tot)+' lei',W2-M-16,y+46,'#fff','right');y+=96;
  if(!fi.tva){font(400,17);text('Furnizorul nu este înregistrat în scopuri de TVA.',W2-M,y-14,'#555','right');y+=12}
  const cond=[`Valabilitatea ofertei: ${+o.valid||30} de zile de la data emiterii.`];
  if(+o.avans)cond.push(`Plata: avans ${f(+o.avans,0)} % la semnarea contractului, diferența la recepția lucrării.`);
  if(o.termen)cond.push(`Termen de execuție: ${o.termen}.`.replace(/\.\.$/,'.'));
  if(o.garantie)cond.push(`Garanție: ${o.garantie}.`.replace(/\.\.$/,'.'));
  if(fi.iban)cond.push(`Plata se face în contul ${fi.iban}${fi.bank?', '+fi.bank:''}${fi.name?', titular '+fi.name:''}.`);
  cond.push('Cantitățile sunt estimate pe baza planului. Diferențele constatate la execuție se decontează la prețurile unitare din prezenta ofertă.');
  if(!c.incl)cond.push('Materialele se procură de beneficiar, conform listei de mai sus.');
  if(o.note)cond.push(o.note);
  room(80);font(700,24);text('Condiții',M,y+6);y+=30;font(400,19);
  for(const l of cond){const ls=wrap(l,W2-2*M-30);if(room(ls.length*27+8)){font(400,19)}text('•',M+4,y+20,'#333');ls.forEach((t,i)=>text(t,M+30,y+20+i*27,'#222'));y+=ls.length*27+8}
  y+=30;room(190);const cw=(W2-2*M-60)/2;
  font(600,20);text('Ofertant',M,y+20,'#333');text('Beneficiar — de acord cu oferta',M+cw+60,y+20,'#333');
  font(400,19);text(fi.person||fi.name,M,y+50,'#111');text(P.client||'',M+cw+60,y+50,'#111');
  g.strokeStyle='#999';g.lineWidth=1.5;for(const x of[M,M+cw+60]){g.beginPath();g.moveTo(x,y+140);g.lineTo(x+cw,y+140);g.stroke()}
  font(400,16);text('Semnătura',M,y+164,'#777');text('Semnătura și data',M+cw+60,y+164,'#777');
  pages.forEach((cv,i)=>{const gg=cv.getContext('2d');gg.font=`400 16px ${SANS}`;gg.fillStyle='#777';gg.textAlign='left';gg.fillText(`${fi.name} · Oferta nr. ${o.nr} din ${dRo(o.date)}`,M,H2-M/2);gg.textAlign='right';gg.fillText(`Pagina ${i+1} / ${pages.length}`,W2-M,H2-M/2)});
  const doc=new window.jspdf.jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});
  pages.forEach((cv,i)=>{if(i)doc.addPage('a4','portrait');doc.addImage(cv.toDataURL('image/jpeg',.92),'JPEG',0,0,210,297)});
  renderOffer();
  await saveBlob(doc.output('blob'),`Oferta_${String(o.nr).replace(/[^\w-]+/g,'_')}_${fileBase()}.pdf`,['Oferta a fost salvată.','Oferta a fost descărcată.']);
}
let meas=null,measAdj=false;
function parseLen(s,small){s=String(s||'').trim().toLowerCase().replace(/\s+/g,'');const m=s.match(/^(\d+(?:[.,]\d+)?)(mm|cm|m)?$/);if(!m)return NaN;const v=parseFloat(m[1].replace(',','.')),u=m[2];
  if(u==='mm')return v/10;if(u==='cm')return v;if(u==='m')return v*100;if(/[.,]/.test(m[1])&&v<30)return v*100;if(!small&&v<=30)return v*100;return v}
const cmTxt=v=>f(v,Math.abs(v-Math.round(v))<.05?0:1);
function measWalls(g){return{w:[{x:g.x,y:g.y},{x:g.x+g.w,y:g.y}],h:[{x:g.x+g.w,y:g.y},{x:g.x+g.w,y:g.y+g.h}],w2:[{x:g.x,y:g.y+g.h},{x:g.x+g.w,y:g.y+g.h}],h2:[{x:g.x,y:g.y},{x:g.x,y:g.y+g.h}]}}
function measOps(grp){const out=[];const on=(o,g)=>o.o==='h'?(Math.abs(o.c-g.y)<.02||Math.abs(o.c-g.y-g.h)<.02)&&o.t>g.x-.01&&o.t<g.x+g.w+.01:(Math.abs(o.c-g.x)<.02||Math.abs(o.c-g.x-g.w)<.02)&&o.t>g.y-.01&&o.t<g.y+g.h+.01;
  for(const[kind,list]of[['door',P.doors],['win',P.wins]])for(const o of list){const g=grp.find(q=>on(o,q));if(g&&!out.some(x=>x.o===o))out.push({k:'op',kind,o,g})}return out}
function measSteps(rid){const grp=P.rooms.filter(z=>z.id===rid||z.of===rid),st=[];
  for(const g of grp){st.push({k:'w',g},{k:'h',g},{k:'w2',g},{k:'h2',g})}
  st.push({k:'H'});st.push(...measOps(grp));return st}
const SIDE={w:'de sus',h:'din dreapta',w2:'de jos',h2:'din stânga'};
function wallTag(g,k){const sw=measWalls(g)[k],h=Math.abs(sw[0].y-sw[1].y)<1e-6,c=h?sw[0].y:sw[0].x,lo=h?g.x:g.y,hi=h?g.x+g.w:g.y+g.h;
  const has=l=>l.some(o=>o.o===(h?'h':'v')&&Math.abs(o.c-c)<.02&&o.t>lo&&o.t<hi);return has(P.doors)&&has(P.wins)?' (cu ușa și fereastra)':has(P.doors)?' (cu ușa)':has(P.wins)?' (cu fereastra)':''}
function startMeas(id){const r0=P.rooms.find(z=>z.id===id);if(!r0)return;const rid=r0.of||r0.id;
  if(tool!=='select')setTool('select');if(focusId)focusId=null;
  meas={rid,steps:measSteps(rid),i:0,warn:null};sel=null;setInsp(false);
  $('#stage').classList.add('meas');renderMeas();setTimeout(()=>{measFit();draw()},80)}
function measFit(){if(!meas)return;const grp=P.rooms.filter(z=>z.id===meas.rid||z.of===meas.rid);if(!grp.length)return;const st=measCur();
  const bar=$('#measBar'),bh=bar?bar.offsetHeight+20:200;let x0=Math.min(...grp.map(r=>r.x)),y0=Math.min(...grp.map(r=>r.y)),x1=Math.max(...grp.map(r=>r.x+r.w)),y1=Math.max(...grp.map(r=>r.y+r.h));
  if(st&&st.k==='op'){const o=st.o,g=st.g;if(o.o==='h'){x0=g.x;x1=g.x+g.w;y0=o.c-.9;y1=o.c+.9}else{y0=g.y;y1=g.y+g.h;x0=o.c-.9;x1=o.c+.9}}
  if(view.rot){fitRects(grp,60);return}const AH=Math.max(120,Hh-bh);view.auto=false;view.s=clamp(Math.min((W-140)/Math.max(.5,x1-x0),(AH-110)/Math.max(.5,y1-y0)),12,320);view.ox=W/2-(x0+x1)/2*view.s;view.oy=AH/2-(y0+y1)/2*view.s+8}
function endMeas(show){if(!meas)return;const rid=meas.rid;meas=null;sel={kind:'room',id:rid};$('#stage').classList.remove('meas');$('#measBar').hidden=true;
  if(show!==false){const grp=P.rooms.filter(z=>z.id===rid||z.of===rid),r=grp[0];if(r)toast(`${r.name}: ${grp.length>1?'măsurată':Math.round(r.w*100)+' × '+Math.round(r.h*100)+' cm'}, înălțime ${Math.round(P.H*100)} cm.`)}
  renderSelbar();fit();draw()}
function measCur(){return meas&&meas.steps[meas.i]}
function renderMeas(){
  const el=$('#measBar');if(!meas){el.hidden=true;return}const s=measCur();if(!s){endMeas();return}
  const grp=P.rooms.filter(z=>z.id===meas.rid||z.of===meas.rid),r=grp[0],n=meas.steps.length,multi=grp.length>1;
  let q='',help='',cur='',two=false;
  if(s.k==='w'||s.k==='h'){q=`Peretele ${SIDE[s.k]}${wallTag(s.g,s.k)}${multi?' · porțiunea '+(grp.indexOf(s.g)+1):''}`;help='Măsoară de la colț la colț, la aproximativ 1 m de pardoseală, peretele evidențiat cu portocaliu.';cur=s.k==='w'?s.g.w:s.g.h}
  else if(s.k==='w2'||s.k==='h2'){q=`Verificare: peretele ${SIDE[s.k]}${wallTag(s.g,s.k)}`;help='Peretele opus. Dacă iese diferit cu mai mult de 2 cm, îți spun. Poți și sări peste el.';cur=s.k==='w2'?s.g.w:s.g.h}
  else if(s.k==='H'){q='Înălțimea camerei';help='De la pardoseala finită la tavan. Se folosește la coborârile cablurilor pe pereți, pentru tot proiectul.';cur=P.H}
  else{const o=s.o,hz=o.o==='h';q=`${s.kind==='door'?'Ușa':'Fereastra'} de pe peretele ${hz?(Math.abs(o.c-s.g.y)<.02?'de sus':'de jos'):(Math.abs(o.c-s.g.x)<.02?'din stânga':'din dreapta')}`;help=`Distanța: de la colțul marcat pe plan (${hz?'capătul din stânga':'capătul de sus'} al peretelui) până la marginea golului cea mai apropiată. Lățimea: golul ${s.kind==='door'?'ușii':'ferestrei'}, de la un toc la celălalt.`;two=true}
  const dots=meas.steps.map((x,k)=>`<i style="display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:3px;background:${k<meas.i?'var(--ok)':k===meas.i?'var(--sel)':'var(--line)'}"></i>`).join('');
  const w=meas.warn;
  el.innerHTML=`<form id="measF" autocomplete="off">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px"><b style="font-family:var(--f-display);font-size:20px">Măsurare · ${esc(r?r.name:'')}</b><span class="muted" style="font-size:13px">pasul ${meas.i+1} din ${n}</span><span style="line-height:8px">${dots}</span><button class="btn" type="button" data-ms="close" style="margin-left:auto" aria-label="Închide măsurarea">✕</button></div>
    <div style="font-weight:600;font-size:16px">${esc(q)}</div>
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px">
      ${two?'<label style="display:flex;flex-direction:column;gap:2px;font-size:12px;color:var(--accent);font-weight:600">Distanța de la colț':''}<input id="measV" class="measIn" type="text" inputmode="decimal" enterkeyhint="${two?'next':'done'}" placeholder="${two?'ex. 45':cmTxt(cur*100)}" aria-label="${two?'Distanța de la colț până la gol':'Lungimea măsurată'}">${two?'</label>':''}<span class="muted">cm</span>
      ${two?`<label style="display:flex;flex-direction:column;gap:2px;font-size:12px;color:var(--sel);font-weight:600">Lățimea golului<input id="measV2" class="measIn" type="text" inputmode="decimal" enterkeyhint="done" placeholder="ex. ${Math.round(s.o.w*100)}" aria-label="Lățimea golului"></label><span class="muted">cm</span>`:''}
      <button class="btn pri" type="submit" style="min-height:44px;padding-inline:18px">OK</button>
      <button class="btn" type="button" data-ms="back" ${meas.i?'':'disabled'}>← Înapoi</button><button class="btn" type="button" data-ms="skip">Sari</button>
    </div>
    <div class="muted" style="font-size:13px">${esc(help)}${two?'':` Acum: ${cmTxt(cur*100)} cm.`} Poți scrie în cm (362,5) sau în metri (3,625).</div>
    ${w?`<div style="padding:8px 10px;border-radius:6px;background:var(--warn-bg);color:var(--warn);font-size:14px;display:flex;flex-wrap:wrap;gap:8px;align-items:center"><span>${esc(w.msg)}</span><button class="btn" type="button" data-ms="avg">Folosește media (${cmTxt(w.avg)} cm)</button><button class="btn" type="button" data-ms="keep">Păstrează ${cmTxt(w.cur)} cm</button><button class="btn" type="button" data-ms="redo">Remăsoară</button></div>`:''}
    <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end"><button class="btn" type="button" data-ms="adj">+ Cameră alăturată</button><button class="btn pri" type="button" data-ms="done">Gata ✓</button></div>
  </form>`;
  el.hidden=false;const i=$('#measV');setTimeout(()=>{i.focus();i.select&&i.select()},30);requestAnimationFrame(()=>{measFit();draw()});
}
function measNext(){meas.warn=null;meas.i++;if(meas.i>=meas.steps.length){endMeas();return}renderMeas();draw()}
function measApply(){
  const s=measCur();if(!s)return;const v=parseLen($('#measV').value,s.k==='op');
  if(s.k==='op'){const w2=parseLen(($('#measV2')||{}).value,true),o=s.o,hz=o.o==='h',lo=hz?s.g.x:s.g.y,L=(hz?s.g.w:s.g.h)*100;
    if(!isFinite(v)||v<0){toast('Scrie distanța de la colț, de exemplu 45 sau 0,45.');$('#measV').focus();return}
    if(!isFinite(w2)||w2<30){toast('Scrie lățimea golului, de cel puțin 30 cm.');$('#measV2').focus();return}
    if(v+w2>L+1){toast(`Nu încape: ${cmTxt(v)} + ${cmTxt(w2)} cm depășește peretele de ${cmTxt(L)} cm.`);return}
    snap();o.w=+(w2/100).toFixed(2);o.t=+(lo+v/100+o.w/2).toFixed(3);changed(true);measNext();return}
  if(!isFinite(v)){toast('Scrie lungimea, de exemplu 362 sau 3,62.');$('#measV').focus();return}
  if(s.k==='H'){if(v<200||v>500){toast('Înălțimea trebuie să fie între 200 și 500 cm.');return}snap();P.H=+(v/100).toFixed(2);changed(true);measNext();return}
  if(v<50||v>5000){toast('Peretele trebuie să aibă între 50 cm și 50 m.');return}
  const g=s.g,ax=s.k==='w'||s.k==='w2'?'x':'y',cur=(ax==='x'?g.w:g.h)*100;
  if(s.k==='w2'||s.k==='h2'){const df=Math.abs(v-cur);if(df<=2){g[ax==='x'?'mw':'mh']=1;g.m2=1;save();measNext();return}
    meas.warn={msg:`Diferă cu ${cmTxt(df)} cm de peretele opus (${cmTxt(cur)} cm). Camera poate fi strâmbă sau o măsurătoare e greșită.`,avg:(v+cur)/2,cur,ax,g};renderMeas();return}
  if(!measSet(g,ax,v))return;g[ax==='x'?'mw':'mh']=1;changed(true);measNext();
}
function measSet(g,ax,vcm){const B=ax==='x'?'w':'h',d=+(vcm/100-g[B]).toFixed(2);if(Math.abs(d)<.005)return true;const L=+(g[ax]+g[B]).toFixed(2);
  if(d<0&&P.rooms.some(q=>q[ax]<L-.02&&q[ax]+q[B]>=L-.02&&q[B]+d<.5)){toast('O cameră ar deveni mai mică de 50 cm. Verifică măsurătoarea.');return false}
  snap();stretch(ax,L,d);return true}
$('#measBar').addEventListener('submit',e=>{e.preventDefault();measApply()});
$('#measBar').addEventListener('keydown',e=>{if(e.target.id==='measV'&&(e.key==='Tab'||e.key==='Enter')&&$('#measV2')){e.preventDefault();$('#measV2').focus();return}if(e.key==='Tab'&&e.target.classList.contains('measIn')&&!e.shiftKey){e.preventDefault();measApply()}});
$('#measBar').addEventListener('click',e=>{const b=e.target.closest('[data-ms]');if(!b||!meas)return;const k=b.dataset.ms;
  if(k==='close'||k==='done')endMeas();
  else if(k==='skip')measNext();
  else if(k==='back'){meas.warn=null;meas.i=Math.max(0,meas.i-1);renderMeas();draw()}
  else if(k==='redo'){meas.warn=null;renderMeas()}
  else if(k==='keep'){const w=meas.warn;w.g.m2=1;measNext()}
  else if(k==='avg'){const w=meas.warn;if(measSet(w.g,w.ax,w.avg)){w.g[w.ax==='x'?'mw':'mh']=1;w.g.m2=1;changed(true);measNext()}}
  else if(k==='adj'){const rid=meas.rid;endMeas(false);measAdj=true;openAdj(rid)}});
function drawMeas(){
  const s=measCur();if(!s)return;ctx.save();const C2=C.sel;
  const line=(a,b,wd,al)=>{ctx.globalAlpha=al;ctx.strokeStyle=C2;ctx.lineWidth=wd;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(sx(a.x),sy(a.y));ctx.lineTo(sx(b.x),sy(b.y));ctx.stroke()};
  if(s.g&&s.k!=='op'){const[a,b]=measWalls(s.g)[s.k];line(a,b,10,.35);line(a,b,4,1);
    const mx=(sx(a.x)+sx(b.x))/2,my=(sy(a.y)+sy(b.y))/2,hz=Math.abs(a.y-b.y)<1e-6,out=s.k==='w'||s.k==='h2'?-1:1,X=mx+(hz?0:out*30),Y=my+(hz?out*24:0);
    const lb='? cm';ctx.globalAlpha=1;ctx.font='700 14px "IBM Plex Mono",monospace';const tw=ctx.measureText(lb).width+18;ctx.fillStyle=C2;ctx.beginPath();ctx.roundRect?ctx.roundRect(X-tw/2,Y-13,tw,26,13):ctx.rect(X-tw/2,Y-13,tw,26);ctx.fill();txt(lb,X,Y+1,14,700,C.canvas)}
  if(s.k==='op'){const o=s.o,[t0,t1]=dEnds(o),A=dPt(o,t0,0),B=dPt(o,t1,0),hz=o.o==='h',cx=hz?s.g.x:o.c,cy=hz?o.c:s.g.y,inner=hz?(Math.abs(o.c-s.g.y)<.02?1:-1):(Math.abs(o.c-s.g.x)<.02?1:-1);let off=26;
    const sh=(p,k)=>hz?{X:sx(p.x),Y:sy(p.y)+inner*k}:{X:sx(p.x)+inner*k,Y:sy(p.y)};
    const dim=(p,q,lab,col)=>{const a=sh(p,off),b=sh(q,off);ctx.globalAlpha=1;ctx.strokeStyle=col;ctx.lineWidth=2;ctx.setLineDash([]);ctx.beginPath();ctx.moveTo(a.X,a.Y);ctx.lineTo(b.X,b.Y);ctx.stroke();
      for(const e of[a,b]){ctx.beginPath();hz?(ctx.moveTo(e.X,e.Y-7),ctx.lineTo(e.X,e.Y+7)):(ctx.moveTo(e.X-7,e.Y),ctx.lineTo(e.X+7,e.Y));ctx.stroke()}
      const mx=(a.X+b.X)/2,my=(a.Y+b.Y)/2;ctx.save();ctx.translate(mx,my);if(!hz)ctx.rotate(-Math.PI/2);halo(lab,0,0,'700 13px "IBM Plex Sans",system-ui,sans-serif',col,'center',C.canvas);ctx.restore()};
    line(A,B,10,.35);line(A,B,4,1);
    dim({x:cx,y:cy},A,'distanța',C.accent);off=56;dim(A,B,'lățimea',C2);off=26;
    ctx.globalAlpha=1;ctx.fillStyle=C.accent;ctx.strokeStyle=C.canvas;ctx.lineWidth=3;ctx.beginPath();ctx.arc(sx(cx),sy(cy),9,0,Math.PI*2);ctx.fill();ctx.stroke();
    const cp=sh({x:cx,y:cy},-24);halo('colț',cp.X,cp.Y,'700 13px "IBM Plex Sans",system-ui,sans-serif',C.accent,'center',C.canvas)}
  if(s.k==='H'){const grp=P.rooms.filter(z=>z.id===meas.rid||z.of===meas.rid);ctx.globalAlpha=.9;ctx.strokeStyle=C2;ctx.lineWidth=3;ctx.setLineDash([8,6]);for(const g of grp)ctx.strokeRect(sx(g.x),sy(g.y),g.w*view.s,g.h*view.s);ctx.setLineDash([])}
  ctx.restore()}
let acct=null,wipeKeys=null,licTick=0;
const acctOk=d=>!d||d.role==='admin'||(d.status!=='suspended'&&new Date(d.valid_until)>new Date());
const daysLeft=d=>Math.ceil((new Date(d.valid_until)-Date.now())/864e5);
function renderAdminTab(){const b=$('#tabAdmin');if(b)b.hidden=!(acct&&acct.role==='admin');if(tab==='admin'&&!(acct&&acct.role==='admin'))showTab('plan')}
async function checkLicense(){
  if(!sb||!sbUser)return true;
  const{data,error}=await sb.from('profiles').select('role,status,valid_until').eq('user_id',sbUser.id).maybeSingle();
  if(error){if(error.status===401||/jwt/i.test(error.message||'')){kick('','Ai fost deconectat. Intră din nou în cont.');return false}return true}
  acct=data||null;renderAdminTab();
  if(!acctOk(data)){blockAcct(data);return false}
  return true}
function blockAcct(d){
  const sus=d.status==='suspended';
  kickMsg=sus?'Contul tău a fost suspendat. Pentru detalii, contactează administratorul ElectroPlan.':`${d.status==='trial'?'Perioada de probă':'Abonamentul'} s-a încheiat pe ${dRo(isoD(new Date(d.valid_until)))}. Contactează-ne ca să continui.`;
  if(sus)wipeKeys=[KEY0+':'+sbUser.id,KEY0+':'+sbUser.id+':cfg'];
  cloud.col=null;cloud.queue.clear();acct=null;renderAdminTab();sb.auth.signOut({scope:'local'}).catch(()=>{});
}
const adm={users:[],log:[],fb:[],fbErr:'',fbF:'open',q:'',busy:false,err:''};
const FBK={vreau:['Aș vrea să apară','var(--accent)'],nu_place:['Nu îmi place','var(--warn)'],bug:['Nu merge','var(--bad)']},FBS={nou:'Nou',vazut:'Văzut',rezolvat:'Rezolvat'};
function admBadge(u){const exp=new Date(u.valid_until)<=new Date();
  const [t,c]=u.role==='admin'?['Admin','var(--accent)']:u.status==='suspended'?['Suspendat','var(--bad)']:exp?['Expirat','var(--muted)']:u.status==='trial'?[`Probă · ${daysLeft(u)} ${daysLeft(u)===1?'zi':'zile'}`,'var(--warn)']:['Activ','var(--ok)'];
  return`<span class="pill" style="color:${c};border:1px solid currentColor;white-space:nowrap">${t}</span>`}
const relT=t=>{if(!t)return'—';const d=(Date.now()-new Date(t))/1000;if(d<120)return'acum';if(d<3600)return Math.round(d/60)+' min';if(d<86400)return Math.round(d/3600)+' h';if(d<86400*30)return Math.round(d/86400)+' zile';return dRo(isoD(new Date(t)))};
const ACT={'status:suspended':'a suspendat','status:active':'a activat','status:trial':'a trecut pe probă',extend:'a prelungit',kick:'a deconectat',delete:'a șters'};
function renderAdmin(){
  const el=$('#v-admin');if(!(acct&&acct.role==='admin')){el.innerHTML='';return}
  const q=adm.q.trim().toLowerCase(),U=adm.users.filter(u=>!q||u.email.toLowerCase().includes(q)),now=new Date();
  const n=k=>adm.users.filter(k).length;
  const rows=U.map(u=>{const me=u.user_id===sbUser.id,sus=u.status==='suspended',exp=new Date(u.valid_until)<=now;
    return`<tr data-uid="${u.user_id}"><td><b style="overflow-wrap:anywhere">${esc(u.email)}</b>${me?' <span class="muted">(tu)</span>':''}<div class="muted" style="font-size:12px">din ${dRo(isoD(new Date(u.created_at)))}</div></td>
      <td>${admBadge(u)}</td><td class="n">${u.role==='admin'?'—':dRo(isoD(new Date(u.valid_until)))}</td><td>${relT(u.last_seen||u.last_sign_in)}</td><td>${esc(u.device||'—')}</td><td class="n">${u.projects??0}</td>
      <td><div style="display:flex;flex-wrap:wrap;gap:4px">${me?'':sus?'<button class="btn" type="button" data-adm="activate">Activează</button>':'<button class="btn dng" type="button" data-adm="suspend">Suspendă</button>'}
      ${u.role==='admin'?'':'<button class="btn" type="button" data-adm="d30">+30 zile</button><button class="btn" type="button" data-adm="d365">+1 an</button>'}
      ${me||!u.device?'':'<button class="btn" type="button" data-adm="kick">Deconectează</button>'}${me?'':'<button class="btn dng" type="button" data-adm="del" aria-label="Șterge contul">Șterge</button>'}${!sus&&!exp&&u.status==='trial'&&u.role!=='admin'?'<button class="btn" type="button" data-adm="activate">Marchează plătit</button>':''}</div></td></tr>`}).join('');
  el.innerHTML=`<div class="wrap">
    <h1>Admin</h1>
    <p class="lede">Conturile utilizatorilor. Suspendarea îi deconectează imediat și baza de date le refuză proiectele. Doar tu vezi această pagină.</p>
    ${adm.err?`<div class="warns"><li style="list-style:none">${esc(adm.err)}</li></div>`:''}
    <div class="stats"><div class="stat"><span>Utilizatori</span><b>${adm.users.length}</b></div><div class="stat"><span>În probă</span><b>${n(u=>u.status==='trial'&&new Date(u.valid_until)>now)}</b></div><div class="stat"><span>Activi</span><b>${n(u=>u.status==='active'&&new Date(u.valid_until)>now)}</b></div><div class="stat"><span>Expirați</span><b>${n(u=>u.status!=='suspended'&&u.role!=='admin'&&new Date(u.valid_until)<=now)}</b></div><div class="stat"><span>Suspendați</span><b>${n(u=>u.status==='suspended')}</b></div></div>
    <div class="bar"><input id="admQ" type="search" placeholder="Caută după e-mail" value="${esc(adm.q)}" style="flex:1;min-width:200px;padding:8px 10px;border:1px solid var(--line);border-radius:6px;background:var(--canvas);color:var(--ink)"><button class="btn" type="button" data-adm="reload">${adm.busy?'Se încarcă…':'Reîncarcă'}</button></div>
    <div class="tbl"><table><thead><tr><th>Cont</th><th>Stare</th><th class="n">Valabil până la</th><th>Activ ultima dată</th><th>Dispozitiv</th><th class="n">Proiecte</th><th>Acțiuni</th></tr></thead><tbody>${rows||'<tr><td colspan="7" class="muted">Niciun cont găsit.</td></tr>'}</tbody></table></div>
    <div class="bar" style="justify-content:space-between"><h2>Feedback de la testeri</h2><div class="bar">${[['open','Deschise'],['all','Toate']].map(([k,n])=>`<button class="chip" type="button" data-fbf="${k}" aria-pressed="${adm.fbF===k}">${n} (${k==='open'?adm.fb.filter(x=>x.status!=='rezolvat').length:adm.fb.length})</button>`).join('')}</div></div>
    ${adm.fbErr?`<div class="warns"><li style="list-style:none">${esc(adm.fbErr)}</li></div>`:''}
    <div class="tbl"><table><thead><tr><th>Data</th><th>Cont</th><th>Tip</th><th>Mesaj</th><th>Stare</th></tr></thead><tbody>${adm.fb.filter(x=>adm.fbF==='all'||x.status!=='rezolvat').map(x=>{const k=FBK[x.kind]||[x.kind,'var(--muted)'],cx=x.context||{};return`<tr><td class="mono" style="white-space:nowrap">${new Date(x.at).toLocaleString('ro-RO',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</td><td style="overflow-wrap:anywhere">${esc(x.email)}</td><td><span class="pill" style="color:${k[1]};border:1px solid currentColor;white-space:nowrap">${esc(k[0])}</span></td><td style="min-width:240px;max-width:520px;white-space:pre-wrap;overflow-wrap:anywhere">${esc(x.body)}<div class="muted" style="font-size:12px;margin-top:4px">${esc([cx.tab,cx.sel,cx.device,cx.v].filter(Boolean).join(' · '))}</div></td><td><select data-fbid="${x.id}" aria-label="Stare" style="padding:5px 7px;border:1px solid var(--line);border-radius:6px;background:var(--canvas);color:var(--ink)">${opt(FBS,x.status)}</select></td></tr>`}).join('')||'<tr><td colspan="5" class="muted">Niciun mesaj încă.</td></tr>'}</tbody></table></div>
    <h2>Jurnal</h2>
    <div class="tbl"><table><tbody>${adm.log.map(l=>`<tr><td class="mono" style="white-space:nowrap">${new Date(l.at).toLocaleString('ro-RO',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'})}</td><td>${ACT[l.action]||esc(l.action)} <b>${esc(l.target_email)}</b>${l.detail&&l.detail.add_days?` cu ${l.detail.add_days} zile`:''}</td></tr>`).join('')||'<tr><td class="muted">Nicio acțiune încă.</td></tr>'}</tbody></table></div>
  </div>`;
}
async function loadAdmin(){
  if(!(acct&&acct.role==='admin')||adm.busy)return;adm.busy=true;adm.err='';renderAdmin();
  const[a,b,c]=await Promise.all([sb.rpc('admin_list_users'),sb.from('admin_log').select('at,target_email,action,detail').order('at',{ascending:false}).limit(40),sb.from('feedback').select('id,at,email,kind,body,context,status').order('at',{ascending:false}).limit(300)]);
  adm.busy=false;if(a.error){adm.err='Nu am putut încărca lista de conturi. Verifică dacă scriptul 0003 a fost rulat în Supabase.'}else adm.users=a.data||[];
  adm.log=b.error?[]:(b.data||[]);adm.fbErr=c.error?'Feedback-ul nu e disponibil. Rulează scriptul supabase/migrations/0004_feedback.sql în Supabase.':'';adm.fb=c.error?[]:(c.data||[]);if(tab==='admin')renderAdmin();
}
$('#v-admin').addEventListener('change',async e=>{const id=e.target.dataset.fbid;if(!id)return;const v=e.target.value,{error}=await sb.from('feedback').update({status:v}).eq('id',+id);if(error){toast('Nu am putut schimba starea: '+(error.message||'eroare'));return}const x=adm.fb.find(q=>String(q.id)===id);if(x)x.status=v;renderAdmin();toast('Stare: '+FBS[v]+'.')});
$('#v-admin').addEventListener('input',e=>{if(e.target.id==='admQ'){adm.q=e.target.value;const p=e.target.selectionStart;renderAdmin();const i=$('#admQ');i.focus();i.setSelectionRange(p,p)}});
$('#v-admin').addEventListener('click',async e=>{
  const ff=e.target.closest('[data-fbf]');if(ff){adm.fbF=ff.dataset.fbf;renderAdmin();return}const b=e.target.closest('[data-adm]');if(!b)return;const k=b.dataset.adm;if(k==='reload'){loadAdmin();return}
  const u=adm.users.find(x=>x.user_id===(b.closest('[data-uid]')||{}).dataset?.uid);if(!u)return;let r;
  if(k==='suspend'){if(!confirm(`Suspenzi contul ${u.email}?\n\nVa fi deconectat imediat de pe toate dispozitivele și nu va mai putea intra până îl reactivezi.`))return;r=await sb.rpc('admin_update_user',{target:u.user_id,new_status:'suspended'})}
  else if(k==='activate'){r=await sb.rpc('admin_update_user',{target:u.user_id,new_status:'active',add_days:new Date(u.valid_until)<=new Date()?30:null})}
  else if(k==='d30'||k==='d365'){r=await sb.rpc('admin_update_user',{target:u.user_id,add_days:k==='d30'?30:365})}
  else if(k==='kick'){if(!confirm(`Deconectezi ${u.email} de pe ${u.device||'dispozitivul activ'}? Poate intra din nou cu parola.`))return;r=await sb.rpc('admin_update_user',{target:u.user_id,kick:true})}
  else if(k==='del'){const t=prompt(`Ștergerea contului e definitivă: se șterg și toate proiectele lui.\n\nScrie adresa ${u.email} ca să confirmi:`);if(t==null)return;if(t.trim().toLowerCase()!==u.email.toLowerCase()){toast('Adresa nu se potrivește. Contul nu a fost șters.');return}r=await sb.rpc('admin_delete_user',{target:u.user_id})}
  if(r&&r.error){toast('Acțiunea nu a reușit: '+(r.error.message||'eroare'));return}
  toast({suspend:'Cont suspendat.',activate:'Cont activat.',d30:'Prelungit cu 30 de zile.',d365:'Prelungit cu un an.',kick:'Dispozitiv deconectat.',del:'Cont șters.'}[k]);loadAdmin();
});
function renderStat(){
  const el=$('#statc');if(!el)return;if(!RA){el.innerHTML='';return}
  const n=RA.boards.reduce((t,b)=>t+b.circuits.length,0),w=RA.levels.reduce((t,l)=>t+((l.R&&l.R.warn)||[]).length,0)+(R?Object.keys(R.flag||{}).length:0),tb=RA.boards[0]&&RA.boards[0].tot;
  el.innerHTML=(n?`<button class="schip ${w?'':'ok'}" type="button" data-st="calc"><i style="background:${w?'var(--muted)':'var(--ok)'}"></i>${n} ${n===1?'circuit':'circuite'}${w?'':' conforme I7'}</button>`:'<span class="schip"><i style="background:var(--muted)"></i>Pune aparatele și tabloul pe plan</span>')+
    (w?`<button class="schip w" type="button" data-st="calc"><i style="background:var(--warn)"></i>${w} ${w===1?'atenționare':'atenționări'}</button>`:'')+
    `<button class="schip" type="button" data-st="3d" title="Vedere 3D a instalației"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg><span>3D</span></button>`+(tb&&n?`<button class="schip kw" type="button" data-st="calc">${f(tb.Pc/1000,1)} kW · ${tb.main?'C'+tb.main:'—'} · ${tb.panel} mod.</button>`:'')+
    `<button class="schip pj" type="button" data-st="proj" title="Setări proiect, niveluri">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>'}<span>Proiect</span></button>`;
}
$('#statc').addEventListener('click',e=>{const b=e.target.closest('[data-st]');if(!b)return;if(b.dataset.st==='calc')showTab('calcul');else if(b.dataset.st==='3d')open3D();else{sel=null;setInsp(!inspOpen||!!sel);renderSelbar();draw()}});
function selBox(){
  if(!sel)return null;let pts=[];
  if(sel.kind==='room'){const r=P.rooms.find(x=>x.id===sel.id);if(!r)return null;const root=r.of||r.id;for(const z of P.rooms.filter(q=>q.id===root||q.of===root))pts.push([z.x,z.y],[z.x+z.w,z.y+z.h],[z.x+z.w,z.y],[z.x,z.y+z.h])}
  else{const q=selPoint();if(!q)return null;pts=[[q.x,q.y]]}
  const S=pts.map(([x,y])=>toScr(sx(x),sy(y)));return{x0:Math.min(...S.map(p=>p.X)),x1:Math.max(...S.map(p=>p.X)),y0:Math.min(...S.map(p=>p.Y)),y1:Math.max(...S.map(p=>p.Y))};
}
function placeSelbar(){
  const el=$('#selbar');if(!el||!el.innerHTML){return}
  const pad=10,top0=(($('#statc')||{}).offsetHeight||0)+20,avail=W-(stage.classList.contains('io')&&!inspPortrait()?(insp.offsetWidth||340)+20:0);
  el.classList.toggle('anch',!!(sel&&!focusId));el.style.maxWidth=Math.max(240,Math.min(sel&&!focusId?560:9999,avail-2*pad))+'px';const w=el.offsetWidth,h=el.offsetHeight,b=sel&&!focusId?selBox():null;
  let L=pad,T=top0;
  if(b){L=clamp((b.x0+b.x1)/2-w/2,pad,Math.max(pad,avail-w-pad));T=b.y0-h-12;if(T<top0)T=b.y0+12<top0?top0:b.y0+12;if(T+h>Hh-80)T=Math.max(top0,Hh-80-h)}
  el.style.left=Math.round(L)+'px';el.style.top=Math.round(T)+'px';
}
let inspTab='sum';
function roomTabs(){return`<div class="itabs" role="tablist"><button type="button" data-itab="sum" aria-selected="${inspTab==='sum'}">Rezumat</button><button type="button" data-itab="det" aria-selected="${inspTab==='det'}">Detalii</button></div>`}
function roomSummary(r){
  const root=r.of||r.id,rr=P.rooms.find(z=>z.id===root)||r,grp=P.rooms.filter(z=>z.id===root||z.of===root),gid=new Set(grp.map(z=>z.id)),its=P.items.filter(i=>gid.has(i.room));
  const g=i=>T[i.type].g,pr=its.filter(i=>g(i)==='priza').reduce((t,i)=>t+ptsOf(i),0),lu=its.filter(i=>g(i)==='lum').length,sw=its.filter(i=>g(i)==='intr').length,de=its.filter(i=>g(i)==='ded'&&!T[i.type].onLum).length;
  const area=grp.reduce((t,z)=>t+areaR(z),0),dims=grp.length===1&&!chOf(rr)?`${Math.round(rr.w*100)} × ${Math.round(rr.h*100)} cm`:`${f(area,1)} m²`;
  const fl=R?its.filter(i=>R.flag&&R.flag[i.id]):[],ck=[];
  for(const i of fl)ck.push(`<li class="w"><i>!</i><span><b>${esc(T[i.type].n)}:</b> ${esc(R.flag[i.id])}</span><button class="btn" type="button" data-act="goitem" data-id="${i.id}">Arată</button></li>`);
  if(!fl.length&&its.length)ck.push(`<li><i class="ok">✓</i><span>Aparatele respectă distanțele față de uși, ferestre și pereții de rezistență.</span></li>`);
  if(!pr&&!['baie','hol','debara'].includes(rr.type))ck.push(`<li class="w"><i>!</i><span>Camera nu are nicio priză.</span></li>`);
  if(!lu)ck.push(`<li class="w"><i>!</i><span>Camera nu are iluminat.</span></li>`);
  else if(!sw&&!its.some(i=>g(i)==='lum'&&ctrlBy(P,i).length))ck.push(`<li class="w"><i>!</i><span>Lumina nu are întrerupător.</span></li>`);
  const cids=[...new Set(its.map(i=>R&&R.by[i.id]).filter(Boolean))],cs=cids.map(id=>R.circuits.find(c=>c.id===id)).filter(Boolean);
  return`<div class="rsum"><div class="sub">${dims} · înălțime ${Math.round(P.H*100)} cm · ${WM[rr.wall||P.wallMat||'caramida']}</div>
    <div class="kpis"><div><b>${pr}</b><span>${pr===1?'priză':'prize'}</span></div><div><b>${lu}/${sw}</b><span>lumini / întrer.</span></div><div><b>${de}</b><span>${de===1?'dedicat':'dedicați'}</span></div></div>
    <div><h4>Verificări</h4><ul class="rchk">${ck.join('')||'<li><i>·</i><span>Pune aparate în cameră ca să vezi verificările.</span></li>'}</ul></div>
    ${cs.length?`<div><h4>Circuite în cameră</h4><div class="rcirc">${cs.map(c=>`<div><span class="dot" style="background:${colOf(c.id)}"></span><b class="mono">${c.id}</b><span>${esc(c.name)} · ${c.curve}${c.In}${c.rcd?' · ΔI 30 mA':''}</span><small class="mono">${f(c.Ib,1)} A</small></div>`).join('')}</div></div>`:''}
    <div class="bar"><button class="btn pri" type="button" data-act="measure">Măsoară camera</button><button class="btn" type="button" data-act="elev">Desfășurata pereților</button>${focusId?'':'<button class="btn" type="button" data-act="enter">Intră în cameră</button>'}</div></div>`;
}
const routeZ=()=>R&&R.tot&&R.tot.z!=null?R.tot.z:(P.route==='pardoseala'?0:P.H-.3);
const SIDEN={sus:'de sus',dreapta:'din dreapta',jos:'de jos','stânga':'din stânga',oblic:'oblic'};
function roomWalls(rid,rooms){
  const grp=(rooms||P.rooms).filter(z=>z.id===rid||z.of===rid),W=[];
  for(const g of grp){
    const re=rEdges(g),E=[{k:'sus',o:'h',c:g.y,lo:re[0].lo,hi:re[0].hi,rev:false},{k:'dreapta',o:'v',c:g.x+g.w,lo:re[3].lo,hi:re[3].hi,rev:false},{k:'jos',o:'h',c:g.y+g.h,lo:re[1].lo,hi:re[1].hi,rev:true},{k:'stânga',o:'v',c:g.x,lo:re[2].lo,hi:re[2].hi,rev:true}];
    {const d=diagOf(g);if(d&&!g.ch.fill){const k=g.ch.k,ix={tl:4,tr:1,br:2,bl:3}[k];E.splice(ix,0,{k:'oblic',o:'d',c:0,lo:0,hi:d.len,rev:false,dg:d})}}
    for(const e of E){const inner=grp.some(q=>{if(q===g)return false;const sg=sharedSeg(g,q);return sg&&sg.o===e.o&&Math.abs(sg.c-e.c)<.02&&sg.a<=e.lo+.02&&sg.b>=e.hi-.02});if(!inner)W.push({...e,g,rid})}
  }
  return W;
}
function elevData(w){
  const H=w.o==='h',D=w.o==='d'&&w.dg,T_=q=>D?(q.x-D.p.x)*D.ux+(q.y-D.p.y)*D.uy:H?q.x:q.y,on=q=>(D?Math.abs((q.x-D.p.x)*D.nx+(q.y-D.p.y)*D.ny)<.03:Math.abs((H?q.y:q.x)-w.c)<.03)&&T_(q)>=w.lo-.03&&T_(q)<=w.hi+.03,z=routeZ();
  const gid=new Set(P.rooms.filter(q=>q.id===w.rid||q.of===w.rid).map(q=>q.id));
  const items=P.items.filter(i=>T[i.type].h!=='ceil'&&on(i)&&(gid.has(i.room)||i.type==='tablou')).map(i=>({t:T_(i),h:hOf(P,i),it:i,cid:R&&R.by[i.id]}));
  const cut=(a,b)=>[Math.max(a,w.lo),Math.min(b,w.hi)];
  const doors=D?(w.g.ch.door?(()=>{const dw=Math.min(w.g.ch.door.w,D.len-.1),t0=(D.len-dw)/2;return[[t0,t0+dw]]})():[]):P.doors.filter(d=>d.o===w.o&&Math.abs(d.c-w.c)<.02).map(d=>cut(...dEnds(d))).filter(([a,b])=>b-a>.05);
  const wins=D?[]:P.wins.filter(d=>d.o===w.o&&Math.abs(d.c-w.c)<.02).map(d=>{const[a,b]=cut(...dEnds(d));return{a,b,s:+d.sill||0,hg:+d.hg||0}}).filter(o=>o.b-o.a>.05);
  const boxes=R?R.phys.filter(q=>on(q)&&q.cis.length).map(q=>({t:T_(q),h:q.z!=null?q.z:z,id:q.id,ci:q.cis[0]})):[];
  const near=t=>items.some(o=>Math.abs(o.t-t)<.04)||boxes.some(o=>Math.abs(o.t-t)<.04);
  const drops=[],runs=[];
  if(R)for(const s of R.segs){
    const sz=s.z??z;for(const[e,h]of[[s.a,s.fh],[s.b,s.th]])if(on(e)&&Math.abs(h-sz)>.01&&near(T_(e)))drops.push({t:T_(e),h0:Math.min(h,sz),h1:Math.max(h,sz),ci:s.ci});
    for(let k=0;k+1<s.pts.length;k++){const A=s.pts[k],B=s.pts[k+1];if(on(A)&&on(B)&&Math.abs(T_(A)-T_(B))>.02)runs.push({t0:Math.min(T_(A),T_(B)),t1:Math.max(T_(A),T_(B)),ci:s.ci,z:sz})}
  }
  const dd=new Map();for(const d of drops){const k=Math.round(d.t*100)+'|'+d.ci;const o=dd.get(k);if(!o)dd.set(k,{...d});else{o.h0=Math.min(o.h0,d.h0);o.h1=Math.max(o.h1,d.h1)}}
  const zs=R?[...new Set(R.segs.map(s=>Math.round((s.z??z)*100)/100))]:[z];return{items,doors,wins,boxes,drops:[...dd.values()],runs,z:Math.max(...zs),zs};
}
function wallName(w,all){const same=all.filter(x=>x.k===w.k).length>1;return`Peretele ${SIDEN[w.k]}${same?' '+(all.filter(x=>x.k===w.k).indexOf(w)+1):''}`}
function drawElev(g,a,w,o={}){
  const k=o.k||1,pal=o.pal||{bg:C.canvas,ink:C.ink,muted:C.muted,face:C.room,line:C.muted,win:'#CFE3F5'},d=elevData(w),Hh2=P.H,L=w.hi-w.lo;
  const fnt=(wt,sz,mono)=>`${wt} ${sz*k}px ${mono?'"IBM Plex Mono",ui-monospace,monospace':'"IBM Plex Sans",system-ui,sans-serif'}`;
  const ml=58*k,mr=74*k,mt=(o.title?44:18)*k,mb=78*k,s=Math.min((a.w-ml-mr)/L,(a.h-mt-mb)/Hh2),ox=a.x+ml+((a.w-ml-mr)-L*s)/2,oy=a.y+mt+Hh2*s;
  const X=t=>ox+(w.rev?(w.hi-t):(t-w.lo))*s,Y=h=>oy-h*s,col=ci=>C.circ[ci%8];
  g.save();g.textBaseline='middle';
  if(o.title){g.fillStyle=pal.ink;g.font=fnt(700,17);g.textAlign='left';g.fillText(o.title,a.x+8*k,a.y+18*k)}
  g.fillStyle=pal.face;g.fillRect(ox,Y(Hh2),L*s,Hh2*s);g.strokeStyle=pal.ink;g.lineWidth=2*k;g.strokeRect(ox,Y(Hh2),L*s,Hh2*s);
  g.lineWidth=4*k;g.beginPath();g.moveTo(ox-10*k,oy);g.lineTo(ox+L*s+10*k,oy);g.stroke();
  for(const[a0,b0]of d.doors){const x0=Math.min(X(a0),X(b0)),x1=Math.max(X(a0),X(b0));g.fillStyle=pal.bg;g.fillRect(x0,Y(2.1),x1-x0,2.1*s);g.lineWidth=1.5*k;g.strokeStyle=pal.ink;g.strokeRect(x0,Y(2.1),x1-x0,2.1*s);g.fillStyle=pal.muted;g.font=fnt(600,11);g.textAlign='center';g.fillText('ușă',(x0+x1)/2,Y(1.05))}
  for(const q of d.wins){const x0=Math.min(X(q.a),X(q.b)),x1=Math.max(X(q.a),X(q.b));g.fillStyle=pal.win;g.fillRect(x0,Y(q.s+q.hg),x1-x0,q.hg*s);g.lineWidth=1.5*k;g.strokeStyle=pal.ink;g.strokeRect(x0,Y(q.s+q.hg),x1-x0,q.hg*s);g.fillStyle=pal.muted;g.font=fnt(600,11);g.textAlign='center';g.fillText('fereastră',(x0+x1)/2,Y(q.s+q.hg/2))}
  g.setLineDash([6*k,5*k]);g.lineWidth=1*k;g.strokeStyle=pal.muted;
  if(d.z>0&&d.z<Hh2){g.beginPath();g.moveTo(ox,Y(d.z));g.lineTo(ox+L*s,Y(d.z));g.stroke()}
  g.setLineDash([]);
  for(const r of d.runs){g.strokeStyle=col(r.ci);g.lineWidth=4*k;g.beginPath();g.moveTo(X(r.t0),Y(r.z??d.z));g.lineTo(X(r.t1),Y(r.z??d.z));g.stroke()}
  const lab=[];
  for(const q of d.drops){const x=X(q.t);g.strokeStyle=col(q.ci);g.lineWidth=4*k;g.beginPath();g.moveTo(x,Y(q.h1));g.lineTo(x,Y(q.h0));g.stroke();if(q.h1-q.h0>=.3)lab.push({x,y:(Y(q.h1)+Y(q.h0))/2,txt:f(q.h1-q.h0,2)+' m',c:col(q.ci)})}
  for(const q of d.boxes){const x=X(q.t),y=Y(q.h),r=7*k;g.fillStyle=pal.bg;g.fillRect(x-r,y-r,2*r,2*r);g.strokeStyle=col(q.ci);g.lineWidth=2*k;g.strokeRect(x-r,y-r,2*r,2*r);g.beginPath();g.moveTo(x-r,y-r);g.lineTo(x+r,y+r);g.moveTo(x+r,y-r);g.lineTo(x-r,y+r);g.lineWidth=1*k;g.stroke();g.fillStyle=col(q.ci);g.font=fnt(700,10,1);g.textAlign='center';g.fillText(q.id,x,y-r-8*k)}
  for(const q of d.items){const x=X(q.t),y=Y(q.h),c=q.it.type==='tablou'?pal.ink:q.cid?colOf(q.cid):pal.muted,r=11*k;
    if(q.it.type==='tablou'){g.fillStyle=pal.ink;g.fillRect(x-16*k,y-22*k,32*k,44*k);g.fillStyle=pal.bg;g.font=fnt(700,11,1);g.textAlign='center';g.fillText('TE',x,y)}
    else{g.fillStyle=pal.bg;g.strokeStyle=c;g.lineWidth=2*k;g.beginPath();g.arc(x,y,r,0,Math.PI*2);g.fill();g.stroke();g.fillStyle=c;g.font=fnt(700,codeOf(q.it).length>2?8.5:10,1);g.textAlign='center';g.fillText(codeOf(q.it),x,y+.5*k)}
    g.font=fnt(600,10.5,1);g.fillStyle=pal.ink;g.textAlign='left';g.fillText(`h ${Math.round(q.h*100)}`,x+r+4*k,y-6*k);if(q.cid){g.fillStyle=c;g.fillText(q.cid,x+r+4*k,y+7*k)}}
  g.font=fnt(700,10.5,1);g.textAlign='left';for(const l of lab){g.fillStyle=pal.bg;const tw=g.measureText(l.txt).width+6*k;g.fillRect(l.x+5*k,l.y-7*k,tw,14*k);g.fillStyle=l.c;g.fillText(l.txt,l.x+8*k,l.y)}
  const ts=[...new Set([...d.items.map(q=>Math.round(q.t*100)),...d.boxes.map(q=>Math.round(q.t*100))])].map(v=>v/100).map(t=>({t,x:X(t),dist:w.rev?(w.hi-t):(t-w.lo)})).sort((p,q)=>p.x-q.x);
  const dy=oy+22*k;g.strokeStyle=pal.muted;g.lineWidth=1*k;g.beginPath();g.moveTo(ox,dy);g.lineTo(ox+L*s,dy);g.stroke();
  g.font=fnt(500,10,1);g.fillStyle=pal.ink;g.textAlign='center';
  const tick=x=>{g.beginPath();g.moveTo(x,dy-5*k);g.lineTo(x,dy+5*k);g.stroke()};tick(ox);tick(ox+L*s);
  let lastX=-1e9,row=0;for(const q of ts){tick(q.x);row=q.x-lastX<34*k?1-row:0;lastX=q.x;g.fillText(String(Math.round(q.dist*100)),q.x,dy+(row?26:14)*k)}
  g.font=fnt(700,11,1);g.fillText(`${Math.round(L*100)} cm`,ox+L*s/2,dy+44*k);
  g.textAlign='left';g.fillStyle=pal.muted;g.font=fnt(500,10,1);g.fillText(`tavan ${f(Hh2,2)} m`,ox+L*s+8*k,Y(Hh2));if(d.z>0&&d.z<Hh2)g.fillText(`traseu ${f(d.z,2)} m`,ox+L*s+8*k,Y(d.z));g.fillText(d.zs&&d.zs.includes(0)?'pardoseală · traseu':'pardoseală',ox+L*s+8*k,oy);
  if(!d.items.length&&!d.boxes.length){g.fillStyle=pal.muted;g.font=fnt(500,13);g.textAlign='center';g.fillText('Nimic de montat pe acest perete',ox+L*s/2,Y(Hh2/2))}
  g.restore();
  return d;
}
const elevS={rid:null,i:0};
function openElev(rid){const r=P.rooms.find(z=>z.id===rid);if(!r)return;elevS.rid=r.of||r.id;elevS.i=0;$('#elev').hidden=false;renderElev()}
function closeOv(){$('#elev').hidden=true;$('#v3d').hidden=true;if(v3.raf)cancelAnimationFrame(v3.raf)}
function renderElev(){
  const el=$('#elev');if(el.hidden)return;const W2=roomWalls(elevS.rid),r=P.rooms.find(z=>z.id===elevS.rid);if(!r||!W2.length){closeOv();return}
  elevS.i=clamp(elevS.i,0,W2.length-1);const w=W2[elevS.i];
  $('#elevT').textContent=`${r.name} · ${wallName(w,W2)} · ${f(w.hi-w.lo,2)} m`;
  $('#elevTabs').innerHTML=W2.map((x,i)=>`<button type="button" class="chip" data-ew="${i}" aria-pressed="${i===elevS.i}">${wallName(x,W2).replace('Peretele ','')}</button>`).join('');
  const cv2=$('#ecv'),b=cv2.parentElement.getBoundingClientRect(),hh=b.height-$('#elev .ov-h').offsetHeight,dp=devicePixelRatio||1;
  cv2.width=Math.round(b.width*dp);cv2.height=Math.round(hh*dp);cv2.style.width=b.width+'px';cv2.style.height=hh+'px';
  const g=cv2.getContext('2d');g.setTransform(dp,0,0,dp,0,0);g.fillStyle=C.canvas;g.fillRect(0,0,b.width,hh);
  const d=drawElev(g,{x:8,y:8,w:b.width-16,h:hh-16},w);
  $('#elevInfo').textContent=d.items.length?`${d.items.length} ${d.items.length===1?'aparat':'aparate'} · ${d.drops.length} ${d.drops.length===1?'coborâre':'coborâri'} · cotele de jos sunt în cm, de la colțul din stânga`:'';
}
$('#elev').addEventListener('click',e=>{const t=e.target.closest('[data-ew]');if(t){elevS.i=+t.dataset.ew;renderElev();return}if(e.target.closest('[data-ov-x]'))closeOv();if(e.target.closest('[data-ev-n]')){elevS.i=(elevS.i+(+e.target.closest('[data-ev-n]').dataset.evN)+roomWalls(elevS.rid).length)%roomWalls(elevS.rid).length;renderElev()}});
const v3={ready:false,loading:null,scene:null,cam:null,ren:null,th:-.8,ph:.95,rad:12,tg:null,meshes:[],walls:[],iso:'',wallOn:true,raf:0,items:new Map(),sel:null,hl:null,fp:null,room:'',fov:45};
function load3(){if(window.THREE)return Promise.resolve();if(v3.loading)return v3.loading;v3.loading=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js';sc.onload=res;sc.onerror=()=>{v3.loading=null;rej(new Error('3d'))};document.head.appendChild(sc)});return v3.loading}
async function open3D(){
  $('#v3d').hidden=false;$('#v3dBox').innerHTML='<div class="empty" style="margin:20px">Se încarcă vederea 3D…</div>';
  try{await load3()}catch(e){$('#v3dBox').innerHTML='<div class="empty" style="margin:20px">Nu am putut încărca vederea 3D. Verifică conexiunea la internet.</div>';return}
  build3D(false,focusId||'');
}
function cyl(T3,A,B,r,mat){const a=new T3.Vector3(...A),b=new T3.Vector3(...B),dir=b.clone().sub(a),len=dir.length();if(len<1e-4)return null;const m=new T3.Mesh(new T3.CylinderGeometry(r,r,len,8),mat);m.position.copy(a.clone().add(b).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new T3.Vector3(0,1,0),dir.normalize());return m}
function wallNormal(it){const r=P.rooms.find(z=>z.id===it.room);for(const z of P.rooms.filter(q=>chOf(q)&&(q.id===it.room||q.of===it.room||(r&&q.id===r.of)))){const d=onDiag(z,it.x,it.y,.03);if(d){const g=diagOf(z);return[g.nx,g.ny]}}return nrmIn(P.rooms,it)}
function nrmIn(rooms,it){
  const r=rooms.find(z=>z.id===it.room)||rooms.find(z=>it.x>=z.x-.05&&it.x<=z.x+z.w+.05&&it.y>=z.y-.05&&it.y<=z.y+z.h+.05);if(!r)return[0,1];
  const d=[[Math.abs(it.x-r.x),[1,0]],[Math.abs(it.x-r.x-r.w),[-1,0]],[Math.abs(it.y-r.y),[0,1]],[Math.abs(it.y-r.y-r.h),[0,-1]]].sort((a,b)=>a[0]-b[0]);
  return d[0][1];
}
function makeDevice(T3,it,col,H){
  const g=new T3.Group(),M=(c,o={})=>new T3.MeshLambertMaterial({color:new T3.Color(c),transparent:true,opacity:1,...o}),white=0xF4F4F1,dark=0x2B2F33;
  const add=(geo,m,x=0,y=0,z=0)=>{const ms=new T3.Mesh(geo,m);ms.position.set(x,y,z);g.add(ms);return ms};
  const box=(w,h,d,m,x,y,z)=>add(new T3.BoxGeometry(w,h,d),m,x,y,z);
  const cylZ=(r,len,m,x,y,z,seg=20)=>{const ms=add(new T3.CylinderGeometry(r,r,len,seg),m,x,y,z);ms.rotation.x=Math.PI/2;return ms};
  const t=it.type,gr=T[t].g,cm=M(col);
  if(gr==='priza'){
    const n=t==='prizaM'?nOf(it):t==='priza2'?2:1,pw=.085;
    for(let i=0;i<n;i++){const x=(i-(n-1)/2)*pw;box(pw-.004,.085,.012,M(white),x,0,.006);box(pw+.006,.095,.006,cm,x,0,0);
      if(t==='tv'){cylZ(.012,.004,M(dark),x,0,.014)}else{cylZ(.016,.003,M(0xDADAD6),x,0,.0135);cylZ(.0045,.006,M(dark),x-.011,0,.015,10);cylZ(.0045,.006,M(dark),x+.011,0,.015,10)}}
    if(t==='prizaip')box(pw+.01,.07,.025,M(0xBFC5CA,{opacity:.85}),0,.012,.03);
    return g}
  if(gr==='intr'){
    const n=t==='intr2'?2:1;box(.085,.085,.012,M(white),0,0,.006);box(.095,.095,.006,cm,0,0,0);
    for(let i=0;i<n;i++){const w=n===2?.03:.05,x=n===2?(i?.017:-.017):0,rk=box(w,.05,.01,M(t==='intrCS'||t==='intrCR'?0xE8E8E3:0xEDEDEA),x,0,.016);rk.rotation.x=-.12}
    if(t==='intrCS'||t==='intrCR')box(.012,.006,.004,cm,0,-.03,.022);
    return g}
  if(t==='lumina'){add(new T3.CylinderGeometry(.18,.2,.03,28),M(white),0,-.015,0);const dome=add(new T3.SphereGeometry(.16,24,12,0,Math.PI*2,0,Math.PI/2),M(0xFFF6D8,{emissive:new T3.Color(0x5a4a10)}),0,-.03,0);dome.rotation.x=Math.PI;add(new T3.TorusGeometry(.19,.01,6,28),cm,0,-.03,0).rotation.x=Math.PI/2;return g}
  if(t==='spot'){add(new T3.CylinderGeometry(.05,.05,.015,20),M(0xDADAD6),0,-.008,0);add(new T3.CylinderGeometry(.032,.032,.02,16),M(0xFFF3C4,{emissive:new T3.Color(0x6a5a10)}),0,-.015,0);add(new T3.TorusGeometry(.05,.006,6,20),cm,0,-.016,0).rotation.x=Math.PI/2;return g}
  if(t==='aplica'){box(.1,.14,.02,cm,0,0,.01);const sh=add(new T3.CylinderGeometry(.07,.1,.16,20,1,true,0,Math.PI),M(0xFFF6D8,{emissive:new T3.Color(0x4a3a08),side:T3.DoubleSide}),0,.02,.02);sh.rotation.y=-Math.PI/2;return g}
  if(t==='tablou'){box(.42,.55,.12,M(0xE6E8EA),0,0,.06);box(.38,.5,.01,M(0xD3D7DB),0,0,.125);box(.3,.06,.012,M(dark),0,.05,.128);box(.03,.08,.01,M(0x8A9096),.16,0,.132);box(.44,.57,.01,cm,0,0,.0);return g}
  if(t==='msr'||t==='msv'){const h=t==='msr'?.85:.82;box(.6,h,.58,M(white),0,h/2,.29);box(.6,.1,.585,M(0xE2E2DE),0,h-.05,.29);if(t==='msr'){add(new T3.TorusGeometry(.17,.03,10,28),M(0xB9BEC3),0,h*.45,.585);cylZ(.15,.01,M(0x9DB7C9,{opacity:.85}),0,h*.45,.585)}else box(.4,.02,.02,M(0xB9BEC3),0,h-.14,.59);box(.6,.02,.01,cm,0,h-.01,.585);return g}
  if(t==='cuptor'){box(.6,.6,.56,M(0x3A3F44),0,.3,.28);box(.48,.3,.01,M(0x15181B,{opacity:.9}),0,.27,.565);box(.5,.03,.03,M(0xB9BEC3),0,.47,.575);box(.6,.02,.01,cm,0,.59,.565);return g}
  if(t==='plita'){box(.62,.86,.6,M(0xE9E6DF),0,.43,.3);box(.6,.012,.52,M(0x111315),0,.866,.3);for(const[x,z]of[[-.15,.18],[.15,.18],[-.15,.42],[.15,.42]])add(new T3.TorusGeometry(.07,.004,4,24),M(0x666b70),x,.874,z).rotation.x=Math.PI/2;box(.62,.02,.01,cm,0,.86,.6);return g}
  if(t==='boiler'){const b=add(new T3.CylinderGeometry(.22,.22,.8,28),M(white),0,-.2,.24);add(new T3.TorusGeometry(.22,.008,6,28),cm,0,.18,.24).rotation.x=Math.PI/2;return g}
  if(t==='feon'){box(.1,.16,.03,M(white),0,0,.015);box(.11,.17,.006,cm,0,0,0);cylZ(.035,.12,M(0x3A3F44),0,.02,.09);cylZ(.028,.05,M(0x2B2F33),0,.02,.17);add(new T3.CylinderGeometry(.018,.018,.12,12),M(0x3A3F44),0,-.06,.07);return g}
  if(t==='vent'){cylZ(.075,.02,M(white),0,0,.01,28);for(const r of[.055,.04,.025])add(new T3.TorusGeometry(r,.003,4,24),M(0xA9AFB5),0,0,.022);cylZ(.08,.006,cm,0,0,0,28);return g}
  if(t==='ac'){box(.82,.28,.2,M(white),0,0,.1);box(.7,.02,.01,M(0xC9CED3),0,-.08,.2);box(.82,.01,.2,cm,0,.14,.1);return g}
  box(.35,.35,.25,M(0xE6E8EA),0,0,.125);box(.36,.02,.01,cm,0,.16,.25);return g;
}
function build3D(keep,room){
  const T3=window.THREE,box=$('#v3dBox');if(v3.ren){try{v3.ren.dispose();v3.ren.forceContextLoss()}catch(e){}v3.ren=null}box.innerHTML='';v3.items=new Map();v3.hl=null;if(!keep)v3.sel=null;
  const scene=new T3.Scene();scene.background=new T3.Color(C.canvas);
  scene.add(new T3.AmbientLight(0xffffff,.75));const dl=new T3.DirectionalLight(0xffffff,.55);dl.position.set(5,12,8);scene.add(dl);
  const H=P.H,z=routeZ(),rooms=P.rooms;if(!rooms.length){box.innerHTML='<div class="empty" style="margin:20px">Desenează întâi camerele pe plan.</div>';return}
  const x0=Math.min(...rooms.map(r=>r.x)),x1=Math.max(...rooms.map(r=>r.x+r.w)),y0=Math.min(...rooms.map(r=>r.y)),y1=Math.max(...rooms.map(r=>r.y+r.h));
  const floorM=new T3.MeshLambertMaterial({color:new T3.Color(C.room)});
  for(const r of rooms){if(chOf(r)){const sh=new T3.Shape(roomPoly(r).map(q=>new T3.Vector2(q.x,-q.y))),m=new T3.Mesh(new T3.ShapeGeometry(sh),floorM);m.rotation.x=-Math.PI/2;scene.add(m);continue}const m=new T3.Mesh(new T3.PlaneGeometry(r.w,r.h),floorM);m.rotation.x=-Math.PI/2;m.position.set(r.x+r.w/2,0,r.y+r.h/2);scene.add(m)}
  if(room!=null)v3.room=P.rooms.some(r=>r.id===room)?room:'';
  if(v3.room){const ceilM=new T3.MeshLambertMaterial({color:new T3.Color(C.room),side:T3.DoubleSide,transparent:true,opacity:.6,depthWrite:false});for(const r of groupOf(v3.room)){const m=new T3.Mesh(new T3.PlaneGeometry(r.w,r.h),ceilM);m.rotation.x=Math.PI/2;m.position.set(r.x+r.w/2,H+.001,r.y+r.h/2);scene.add(m)}}
  const lines=new Map();for(const r of rooms)for(const[o,c,lo,hi]of rEdges(r).map(e=>[e.o,e.c,e.lo,e.hi])){const k=o+'|'+Math.round(c*100);if(!lines.has(k))lines.set(k,{o,c,iv:[]});lines.get(k).iv.push([lo,hi])}
  const gols=(P.struct||[]).filter(g=>g.k==='gol');
  const wallM=new T3.MeshLambertMaterial({color:new T3.Color(C.wall),transparent:true,opacity:v3.room?.55:.22,depthWrite:false}),edgeM=new T3.LineBasicMaterial({color:new T3.Color(C.wall),transparent:true,opacity:.55});
  v3.walls=[];
  const addWall=(o,c,a,b,h0,h1)=>{if(b-a<.01||h1-h0<.01)return;const len=b-a,geo=new T3.BoxGeometry(o==='h'?len:.1,h1-h0,o==='h'?.1:len),m=new T3.Mesh(geo,wallM);m.position.set(o==='h'?(a+b)/2:c,(h0+h1)/2,o==='h'?c:(a+b)/2);scene.add(m);const e=new T3.LineSegments(new T3.EdgesGeometry(geo),edgeM);e.position.copy(m.position);scene.add(e);v3.walls.push(m,e)};
  for(const{o,c,iv}of lines.values()){
    iv.sort((p,q)=>p[0]-q[0]);const mg=[];for(const[a,b]of iv){const l=mg[mg.length-1];if(l&&a<=l[1]+.01)l[1]=Math.max(l[1],b);else mg.push([a,b])}
    const ops=[...P.doors.filter(d=>d.o===o&&Math.abs(d.c-c)<.02).map(d=>{const[a,b]=dEnds(d);return{a,b,top:2.1,bot:0}}),...P.wins.filter(d=>d.o===o&&Math.abs(d.c-c)<.02).map(d=>{const[a,b]=dEnds(d);return{a,b,bot:+d.sill||0,top:(+d.sill||0)+(+d.hg||0)}}),...gols.filter(g=>g.o===o&&Math.abs(g.c-c)<.02).map(g=>({a:Math.min(g.a,g.b),b:Math.max(g.a,g.b),bot:0,top:H}))];
    for(const[a,b]of mg){const cuts=[a,b,...ops.flatMap(q=>[q.a,q.b]).filter(t=>t>a&&t<b)].sort((p,q)=>p-q);
      for(let i=0;i+1<cuts.length;i++){const p0=cuts[i],p1=cuts[i+1],mid=(p0+p1)/2,op=ops.find(q=>mid>q.a&&mid<q.b);if(!op)addWall(o,c,p0,p1,0,H);else{addWall(o,c,p0,p1,0,op.bot);addWall(o,c,p0,p1,op.top,H)}}}
  }
  for(const r of rooms){const d=diagOf(r);if(!d||r.ch.fill)continue;const dw=r.ch.door?Math.min(r.ch.door.w,d.len-.1):0,t0=(d.len-dw)/2,ang=Math.atan2(d.uy,d.ux);
    const piece=(a,b,h0,h1)=>{if(b-a<.01||h1-h0<.01)return;const len=b-a,geo=new T3.BoxGeometry(len,h1-h0,.1),m=new T3.Mesh(geo,wallM),cx=d.p.x+d.ux*(a+b)/2,cz=d.p.y+d.uy*(a+b)/2;m.position.set(cx,(h0+h1)/2,cz);m.rotation.y=-ang;scene.add(m);const e=new T3.LineSegments(new T3.EdgesGeometry(geo),edgeM);e.position.copy(m.position);e.rotation.copy(m.rotation);scene.add(e);v3.walls.push(m,e)};
    if(dw){piece(0,t0,0,H);piece(t0+dw,d.len,0,H);piece(t0,t0+dw,2.1,H)}else piece(0,d.len,0,H)}
  v3.meshes=[];const mats={},mat=ci=>mats[ci]||(mats[ci]=new T3.MeshLambertMaterial({color:new T3.Color(C.circ[ci%8]),transparent:true,opacity:1}));
  if(R)for(const s of R.segs){const sz=(s.z??z)+((s.z??z)<.01?.03:0),P3=[[s.a.x,s.fh,s.a.y],[s.a.x,sz,s.a.y],...s.pts.map(q=>[q.x,sz,q.y]),[s.b.x,sz,s.b.y],[s.b.x,s.th,s.b.y]];
    for(let i=0;i+1<P3.length;i++){const m=cyl(T3,P3[i],P3[i+1],s.feed?.017:.011,mat(s.ci).clone());if(m){m.userData.ci=s.ci;scene.add(m);v3.meshes.push(m)}}}
  if(R&&R.cs){const tm=new T3.MeshLambertMaterial({color:new T3.Color(C.tv),transparent:true,opacity:1});for(const s of R.cs.segs){const sz=s.z+(s.z<.01?.06:-.04),P3=[[s.a.x,s.fh,s.a.y],[s.a.x,sz,s.a.y],...s.pts.map(q=>[q.x,sz,q.y]),[s.b.x,sz,s.b.y],[s.b.x,s.th,s.b.y]];for(let i=0;i+1<P3.length;i++){const m=cyl(T3,P3[i],P3[i+1],.013,tm);if(m)scene.add(m)}}
    const b=R.cs.box,bm=new T3.Mesh(new T3.BoxGeometry(.14,.14,.07),new T3.MeshLambertMaterial({color:new T3.Color(C.tv)}));bm.position.set(b.x,b.z,b.y);scene.add(bm)}
  if(R)for(const q of R.phys){if(!q.cis.length)continue;const m=new T3.Mesh(new T3.BoxGeometry(.09,.09,.06),mat(q.cis[0]).clone());m.position.set(q.x,q.z!=null?q.z:z,q.y);m.userData.ci=q.cis[0];scene.add(m);v3.meshes.push(m)}
  for(const it of P.items){const cid=R&&R.by[it.id],c=cid&&R.circuits.find(x=>x.id===cid),h=hOf(P,it),col=c?C.circ[c.ci%8]:'#999999',ceil=T[it.type].h==='ceil',gr=T[it.type].g;
    const m=makeDevice(T3,it,col,H);
    if(gr==='priza'||gr==='intr')m.scale.setScalar(1.6);else if(it.type==='spot')m.scale.setScalar(1.4);
    if(ceil)m.position.set(it.x,H,it.y);
    else{const[nx,nz]=wallNormal(it),floorDev=['msr','msv','cuptor','plita'].includes(it.type);m.rotation.y=Math.atan2(nx,nz);m.position.set(it.x+nx*.05,floorDev?0:h,it.y+nz*.05)}
    m.userData.item=it.id;v3.items.set(it.id,m);m.traverse(o=>{if(o.isMesh){if(c)o.userData.ci=c.ci;v3.meshes.push(o)}});scene.add(m)}
  const ren=new T3.WebGLRenderer({antialias:true});ren.setPixelRatio(Math.min(2,devicePixelRatio||1));box.appendChild(ren.domElement);
  const cam=new T3.PerspectiveCamera(v3.room?v3.fov:45,1,.05,200);v3.scene=scene;v3.cam=cam;v3.ren=ren;if(!keep||!v3.tg){v3.tg=new T3.Vector3((x0+x1)/2,H*.35,(y0+y1)/2);v3.span=Math.max(x1-x0,y1-y0);v3.th=-.8;v3.ph=.95;const bb=box.getBoundingClientRect(),asp=bb.width/Math.max(1,bb.height);v3.rad0=(v3.span*1.45+3)/Math.min(1,asp*1.25);v3.rad=v3.rad0;v3.fp=null;if(v3.room)enterFp()}
  $('#v3dHint').textContent=v3.room?'Ești în cameră. Un deget te uită în jur, două degete merg prin cameră și apropie. Trage de o priză sau de un întrerupător ca să-l muți.':'Un deget rotește, două degete măresc și mută. Trage de o priză sau de un întrerupător ca să-l muți.';
  $('#v3dRoom').innerHTML='<option value="">Toată casa</option>'+P.rooms.filter(r=>!r.of).map(r=>`<option value="${r.id}"${r.id===v3.room?' selected':''}>În ${esc(r.name)}</option>`).join('');
  $('#v3dIso').innerHTML='<option value="">Toate circuitele</option>'+(R?R.circuits.map(c=>`<option value="${c.ci}"${String(c.ci)===v3.iso?' selected':''}>${c.id} · ${esc(c.name)}</option>`).join(''):'');
  applyIso3();applyWalls3();size3();ctl3(ren.domElement);sel3(v3.sel&&P.items.some(i=>i.id===v3.sel)?v3.sel:null);
}
const mv3=it=>!!it&&['priza','intr'].includes(T[it.type].g);
function wallSpan3(it){const r=P.rooms.find(z=>z.id===it.room);if(!r)return null;const[nx]=wallNormal(it);return nx?{ax:'y',lo:r.y+.05,hi:r.y+r.h-.05,a0:r.y}:{ax:'x',lo:r.x+.05,hi:r.x+r.w-.05,a0:r.x}}
function info3(it,h,t){const w=wallSpan3(it);return`<b>${esc(T[it.type].n)}</b><label>Înălțime <input id="v3dH" type="number" inputmode="numeric" min="10" max="${Math.round(P.H*100-10)}" step="5" value="${Math.round(h*100)}"> cm</label>${w?`<span class="muted">${f2(t-w.a0)} m de la colț</span>`:''}<button class="btn" type="button" id="v3dDone">Gata</button>`}
const f2=v=>(Math.round(v*100)/100).toFixed(2).replace('.',',');
function sel3(id){const T3=window.THREE;if(v3.hl){v3.scene.remove(v3.hl);v3.hl=null}v3.sel=id;const it=id&&P.items.find(i=>i.id===id),m=id&&v3.items.get(id),el=$('#v3dSel');
  if(!it||!m){el.hidden=true;$('#v3dHint').hidden=false;rend3();return}
  v3.hl=new T3.BoxHelper(m,0xF2A33A);v3.scene.add(v3.hl);const w=wallSpan3(it);el.innerHTML=info3(it,hOf(P,it),w?(w.ax==='x'?it.x:it.y):0);el.hidden=false;$('#v3dHint').hidden=true;rend3()}
function pick3(el,e){const T3=window.THREE,b=el.getBoundingClientRect(),rc=new T3.Raycaster();rc.setFromCamera(new T3.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),v3.cam);
  const L=[...v3.items.values()].filter(m=>mv3(P.items.find(i=>i.id===m.userData.item))),hit=rc.intersectObjects(L,true)[0];if(!hit)return null;let o=hit.object;while(o&&o.userData.item==null)o=o.parent;return o?{id:o.userData.item,rc}:null}
function ray3(el,e){const T3=window.THREE,b=el.getBoundingClientRect(),rc=new T3.Raycaster();rc.setFromCamera(new T3.Vector2((e.clientX-b.left)/b.width*2-1,-(e.clientY-b.top)/b.height*2+1),v3.cam);return rc.ray}
function roomBox3(id){const g=groupOf(id);if(!g.length)return null;return{x0:Math.min(...g.map(r=>r.x)),x1:Math.max(...g.map(r=>r.x+r.w)),y0:Math.min(...g.map(r=>r.y)),y1:Math.max(...g.map(r=>r.y+r.h))}}
function enterFp(){const r=P.rooms.find(z=>z.id===v3.room);if(!r){v3.fp=null;return}const T3=window.THREE;v3.fp=new T3.Vector3(r.x+r.w/2,1.6,r.y+r.h/2);v3.ph=Math.PI/2-.22;v3.th=r.w>=r.h?0:Math.PI/2;v3.fov=75;if(v3.cam){v3.cam.fov=v3.fov;v3.cam.updateProjectionMatrix()}}
function setRoom3(id){v3.room=id;v3.sel=null;build3D(false,id)}
function size3(){if(!v3.ren||$('#v3d').hidden)return;const b=$('#v3dBox').getBoundingClientRect();v3.ren.setSize(b.width,b.height);v3.cam.aspect=b.width/Math.max(1,b.height);v3.cam.updateProjectionMatrix();rend3()}
function rend3(){if(!v3.ren)return;const{cam,tg}=v3;if(v3.fp){const f=v3.fp;cam.position.copy(f);cam.lookAt(f.x-Math.sin(v3.ph)*Math.cos(v3.th),f.y-Math.cos(v3.ph),f.z-Math.sin(v3.ph)*Math.sin(v3.th))}else{cam.position.set(tg.x+v3.rad*Math.sin(v3.ph)*Math.cos(v3.th),tg.y+v3.rad*Math.cos(v3.ph),tg.z+v3.rad*Math.sin(v3.ph)*Math.sin(v3.th));cam.lookAt(tg)}v3.ren.render(v3.scene,cam)}
function applyIso3(){for(const m of v3.meshes){if(m.userData.ci==null)continue;const on=v3.iso===''||String(m.userData.ci)===v3.iso;m.material.opacity=on?1:.1;m.material.depthWrite=on}rend3()}
function applyWalls3(){for(const m of v3.walls)m.visible=v3.wallOn;$('#v3dWalls').setAttribute('aria-pressed',v3.wallOn);rend3()}
function ctl3(el){
  el.style.touchAction='none';const pts=new Map();let last=null,drag=null;
  const st=()=>{const a=[...pts.values()];if(a.length===1)return{x:a[0].x,y:a[0].y,d:0};const[p,q]=a;return{x:(p.x+q.x)/2,y:(p.y+q.y)/2,d:Math.hypot(p.x-q.x,p.y-q.y)}};
  el.addEventListener('pointerdown',e=>{el.setPointerCapture(e.pointerId);pts.set(e.pointerId,{x:e.clientX,y:e.clientY});last=st();if(pts.size===1)v3.dn={x:e.clientX,y:e.clientY};
    if(pts.size>1){if(drag){drag.m.position.copy(drag.p0);drag=null;rend3()}return}
    const pk=pick3(el,e);if(!pk){drag=null;v3.tap=true;return}v3.tap=false;const it=P.items.find(i=>i.id===pk.id),m=v3.items.get(pk.id),T3=window.THREE,[nx,nz]=wallNormal(it),w=wallSpan3(it);sel3(pk.id);if(!w)return;
    const pl=new T3.Plane().setFromNormalAndCoplanarPoint(new T3.Vector3(nx,0,nz),m.position),q=new T3.Vector3();if(!pk.rc.ray.intersectPlane(pl,q))return;
    drag={id:pk.id,it,m,pl,w,off:m.position.clone().sub(q),p0:m.position.clone(),x0:e.clientX,y0:e.clientY,moved:false,h:hOf(P,it),t:w.ax==='x'?it.x:it.y}});
  el.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(drag){if(!drag.moved&&Math.hypot(e.clientX-drag.x0,e.clientY-drag.y0)<6)return;drag.moved=true;const q=new window.THREE.Vector3();if(!ray3(el,e).intersectPlane(drag.pl,q))return;q.add(drag.off);
      const s5=v=>Math.round(v*20)/20,w=drag.w,t=clamp(s5(w.ax==='x'?q.x:q.z),w.lo,w.hi),h=clamp(s5(q.y),.1,P.H-.1);drag.t=t;drag.h=h;
      if(w.ax==='x')drag.m.position.x=t;else drag.m.position.z=t;drag.m.position.y=h;if(v3.hl)v3.hl.update();$('#v3dSel').innerHTML=info3(drag.it,h,t);rend3();return}
    const n=st();if(!last){last=n;return}
    if(v3.fp){if(pts.size===1){v3.th+=(n.x-last.x)*.005;v3.ph=clamp(v3.ph+(n.y-last.y)*.005,.3,2.85)}else{if(last.d){v3.fov=clamp(v3.fov*last.d/Math.max(1,n.d),30,100);v3.cam.fov=v3.fov;v3.cam.updateProjectionMatrix()}const k=.006,b=roomBox3(v3.room),lx=-Math.cos(v3.th),lz=-Math.sin(v3.th),rx=-lz,rz=lx,dx=n.x-last.x,dy=n.y-last.y;v3.fp.x+=-dx*k*rx-dy*k*lx;v3.fp.z+=-dx*k*rz-dy*k*lz;if(b){v3.fp.x=clamp(v3.fp.x,b.x0+.2,b.x1-.2);v3.fp.z=clamp(v3.fp.z,b.y0+.2,b.y1-.2)}}last=n;rend3();return}
    if(pts.size===1){v3.th+=(n.x-last.x)*.008;v3.ph=clamp(v3.ph-(n.y-last.y)*.008,.12,1.5)}
    else{if(last.d)v3.rad=clamp(v3.rad*last.d/Math.max(1,n.d),2,80);const T3=window.THREE,right=new T3.Vector3(Math.sin(v3.th),0,-Math.cos(v3.th)),fwd=new T3.Vector3(Math.cos(v3.th),0,Math.sin(v3.th)),k=v3.rad*.0016;v3.tg.add(right.multiplyScalar(-(n.x-last.x)*k)).add(fwd.multiplyScalar((n.y-last.y)*k))}
    last=n;rend3()});
  const up=e=>{if(pts.size===1&&e.type==='pointerup'&&v3.tap&&!drag){if(v3.dn&&Math.hypot(e.clientX-v3.dn.x,e.clientY-v3.dn.y)<6&&v3.sel)sel3(null)}pts.delete(e.pointerId);last=pts.size?st():null;
    if(drag&&!pts.size){const d=drag;drag=null;if(d.moved&&e.type==='pointerup'){snap();if(d.w.ax==='x')d.it.x=d.t;else d.it.y=d.t;d.it.h=d.h;changed(true);build3D(true)}else if(d.moved){d.m.position.copy(d.p0);rend3()}}};el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);
  el.addEventListener('wheel',e=>{e.preventDefault();if(v3.fp){v3.fov=clamp(v3.fov*(e.deltaY>0?1.08:.92),30,100);v3.cam.fov=v3.fov;v3.cam.updateProjectionMatrix()}else v3.rad=clamp(v3.rad*(e.deltaY>0?1.1:.9),2,80);rend3()},{passive:false});
}
$('#v3d').addEventListener('click',e=>{if(e.target.closest('[data-ov-x]'))closeOv();else if(e.target.id==='v3dWalls'){v3.wallOn=!v3.wallOn;applyWalls3()}else if(e.target.id==='v3dReset'){if(v3.room){enterFp()}else{v3.th=-.8;v3.ph=.95;v3.rad=v3.rad0||v3.rad}rend3()}});
$('#v3dIso').addEventListener('change',e=>{v3.iso=e.target.value;applyIso3()});
$('#v3dRoom').addEventListener('change',e=>setRoom3(e.target.value));
$('#v3dSel').addEventListener('change',e=>{if(e.target.id!=='v3dH')return;const it=P.items.find(i=>i.id===v3.sel);const v=+e.target.value;if(!it||!(v>0))return;snap();it.h=clamp(Math.round(v/5)*5/100,.1,P.H-.1);changed(true);build3D(true)});
$('#v3dSel').addEventListener('click',e=>{if(e.target.id==='v3dDone')sel3(null)});
addEventListener('resize',()=>{size3();if(!$('#elev').hidden)renderElev()});
function groupOf(id){return P.rooms.filter(z=>z.id===id||z.of===id)}
function fitRects(rs,pad){const x0=Math.min(...rs.map(r=>r.x)),y0=Math.min(...rs.map(r=>r.y)),x1=Math.max(...rs.map(r=>r.x+r.w)),y1=Math.max(...rs.map(r=>r.y+r.h));const side=inspOpen&&!view.rot&&W>760&&!matchMedia('(orientation:portrait) and (max-width:1100px)').matches,bot=inspOpen&&!view.rot&&!side;const AW=W-(side?(insp.offsetWidth||340)+30:0),AH=Hh-(bot?(insp.offsetHeight||Hh*.55)+20:0),sw=Math.abs(Math.sin(view.rot))>.7,FW=(sw?AH:AW)-pad*2,FH=(sw?AW:AH)-pad*2;view.auto=false;view.s=clamp(Math.min(FW/Math.max(.5,x1-x0),FH/Math.max(.5,y1-y0)),12,320);view.ox=AW/2-(x0+x1)/2*view.s;view.oy=AH/2-(y0+y1)/2*view.s}
function enterRoom(id){if(!P.rooms.some(z=>z.id===id))return;focusId=id;sel=null;isoId='';renderIso();setInsp(true);fitRects(groupOf(id),60);renderSelbar();draw()}
function exitRoom(){focusId=null;sel=null;setInsp(false);fit();renderInspector();draw()}
function wallOf(it){
  for(const r of groupOf(focusId||it.room)){for(const e of[{o:'h',c:r.y,a:r.x,b:r.x+r.w,n:'sus'},{o:'h',c:r.y+r.h,a:r.x,b:r.x+r.w,n:'jos'},{o:'v',c:r.x,a:r.y,b:r.y+r.h,n:'stânga'},{o:'v',c:r.x+r.w,a:r.y,b:r.y+r.h,n:'dreapta'}]){const c=e.o==='h'?it.y:it.x,t=e.o==='h'?it.x:it.y;if(Math.abs(c-e.c)<.02&&t>=e.a-.02&&t<=e.b+.02)return{...e,len:e.b-e.a,d:t-e.a}}}
  return null;
}
function roomPanel(id){
  const r=P.rooms.find(z=>z.id===id),grp=groupOf(id),area=grp.reduce((t,z)=>t+areaR(z),0),its=P.items.filter(i=>i.room===id),cis=[...new Set(its.map(i=>R.by[i.id]).filter(Boolean))];
  const walls=new Map();for(const it of its){const w=T[it.type].h==='ceil'?null:wallOf(it),k=w?`Peretele din ${w.n} · ${f(w.len,2)} m`:'Tavan / în cameră';if(!walls.has(k))walls.set(k,[]);walls.get(k).push({it,w})}
  const row=({it,w})=>{const c=R.by[it.id],col=c?C.circ[(R.circuits.find(q=>q.id===c)||{ci:0}).ci%8]:C.muted;return`<li><div class="bar" style="justify-content:space-between;flex-wrap:nowrap"><button class="btn" type="button" data-fsel="${it.id}" style="flex:1;justify-content:flex-start;min-width:0"><span style="color:${col};display:inline-flex">${svgSym(it.type)}</span><span class="trunc">${esc(T[it.type].n)}${it.label?' · '+esc(it.label):''}</span></button><span class="mono muted">${c||'—'}</span></div>
    <div class="fields">${w?`<label class="f">De la colț (cm)<input type="number" inputmode="decimal" step="1" data-ff="dist" data-iid="${it.id}" id="ff-d-${it.id}" value="${Math.round(w.d*100)}"></label>`:''}<label class="f">Înălțime (cm)<input type="number" inputmode="decimal" step="1" data-ff="h" data-iid="${it.id}" id="ff-h-${it.id}" value="${Math.round(hOf(P,it)*100)}"></label></div></li>`};
  return`<div class="ihead">${svgSym('room')}<div><h2>${esc(r.name)}</h2><p class="sub">${esc(RT[r.type]||'')} · ${f(area,1)} m² · ${its.length} ${its.length===1?'element':'elemente'} · ${cis.length} ${cis.length===1?'circuit':'circuite'}</p></div></div>
  <div class="bar"><button class="btn" type="button" data-fact="rename">Redenumește</button><button class="btn" type="button" data-fact="exit">Ieși din cameră</button></div>
  <p class="muted" style="margin:0;font-size:13px">Pune elemente din bara din stânga: se așază doar în această cameră. Pozițiile se măsoară de la colțul din stânga (pereții de sus și jos) sau de sus (pereții laterali), privind planul.</p>
  ${[...walls].map(([k,L])=>`<div><h4>${esc(k)}</h4><ul class="dchk">${L.sort((a,b)=>(a.w?a.w.d:0)-(b.w?b.w.d:0)).map(row).join('')}</ul></div>`).join('')||'<div class="empty">Camera nu are încă elemente. Alege o priză, o lumină sau un întrerupător din stânga și atinge peretele.</div>'}`;
}
insp.addEventListener('click',e=>{
  const s2=e.target.closest('[data-fsel]');if(s2){const it=P.items.find(i=>i.id===s2.dataset.fsel);if(it){sel={kind:'item',id:it.id};centerOn({x:it.x,y:it.y});renderInspector()}return}
  const a=e.target.closest('[data-fact]');if(!a)return;
  if(a.dataset.fact==='exit')exitRoom();
  else if(a.dataset.fact==='rename'){const r=P.rooms.find(z=>z.id===focusId);if(r)openNameEditor(r)}
});
insp.addEventListener('change',e=>{
  const k=e.target.dataset.ff;if(!k)return;const it=P.items.find(i=>i.id===e.target.dataset.iid);if(!it)return;const v=parseFloat(e.target.value);if(!isFinite(v))return;snap();
  if(k==='h')it.h=clamp(v/100,0,6);
  else{const w=wallOf(it);if(w){const t=clamp(w.a+v/100,w.a,w.b);if(w.o==='h')it.x=+t.toFixed(3);else it.y=+t.toFixed(3)}}
  changed(true);
});
function switchLevel(id){if(typeof closeOv==='function'&&!$('#elev').hidden)closeOv();
  if(id===P.lvCur||!P.levels.some(l=>l.id===id))return;
  const cur={};LVK.forEach(k=>cur[k]=P[k]);P.lvData[P.lvCur]=cur;
  const d=P.lvData[id]||{};LVK.forEach(k=>P[k]=d[k]||(k==='routes'||k==='boxes'?{}:[]));delete P.lvData[id];
  P.lvCur=id;sel=null;isoId='';focusId=null;R=computeLv();fit();changed(true);renderLevels();
}
function renderLevels(){const el=$('#lvSel');if(!el)return;el.innerHTML=lvSorted(P).map(l=>`<option value="${l.id}"${l.id===P.lvCur?' selected':''}>${esc(l.name)}</option>`).join('')+'<option value="__add">+ Nivel nou…</option>';}
function addLevel(){
  snap();const ls=lvSorted(P),top=ls[ls.length-1],n=P.levels.length;
  const l={id:uid(),name:n===1?'Etaj':'Etaj '+n,elev:+((+top.elev||0)+(+P.H||2.6)+.3).toFixed(2)};P.levels.push(l);P.lvData[l.id]={};
  switchLevel(l.id);toast(`Am adăugat ${l.name}. Conturul nivelului de jos apare punctat; îl poți copia din Proiect și circuite.`);
}
$('#lvSel').addEventListener('change',e=>{const v=e.target.value;if(v==='__add')addLevel();else switchLevel(v);renderLevels()});
insp.addEventListener('click',e=>{
  const b=e.target.closest('[data-lva]');if(!b)return;const a=b.dataset.lva,id=b.dataset.lid;
  if(a==='go')switchLevel(id);
  else if(a==='add')addLevel();
  else if(a==='copy'){const ls=lvSorted(P),ix=ls.findIndex(l=>l.id===P.lvCur);if(ix<1)return;snap();const src=lvGet(P,ls[ix-1].id),map={};
    for(const r of src.rooms){const nid=uid();map[r.id]=nid}
    P.rooms=src.rooms.map(r=>({...r,id:map[r.id],of:r.of?map[r.of]:undefined}));
    P.struct=src.struct.filter(g=>g.k==='gol'||g.k==='rez').map(g=>({...g,id:uid(),of:g.of?map[g.of]:undefined}));
    fit();changed(true);toast('Am copiat camerele. Redenumește-le și ajustează-le pentru acest nivel.')}
  else if(a==='del'){if(b.dataset.c!=='1'){b.dataset.c='1';b.textContent='Apasă din nou ca să ștergi';return}
    snap();if(id===P.lvCur){const o=lvSorted(P).find(l=>l.id!==id);switchLevel(o.id)}P.levels=P.levels.filter(l=>l.id!==id);delete P.lvData[id];changed(true);renderLevels()}
});
insp.addEventListener('change',e=>{
  const el=e.target,k=el.dataset.lvf;if(!k)return;const l=P.levels.find(q=>q.id===el.dataset.lid);if(!l)return;snap();
  if(k==='name'){l.name=el.value.trim()||l.name}else{const v=parseFloat(el.value);if(isFinite(v))l.elev=v}
  changed(true);renderLevels();
});
function renderProjSel(){$('#projSel').innerHTML=store.projects.map(p=>`<option value="${p.id}"${p.id===P.id?' selected':''}>${esc(p.name)}</option>`).join('');const lv=(P.levels||[]).find(l=>l.id===P.lvCur),sub=[P.adresa||P.client,lv&&P.levels.length>1?lv.name:''].filter(Boolean).join(' · ');$('#projName').textContent=P.name+' ▾';$('#projSub').textContent=sub||'Atinge pentru toate proiectele'}
function openProject(p){if(meas)endMeas(false);P=p;store.current=p.id;undoS=[];redoS=[];sel=null;focusId=null;editTask=null;renderProjSel();renderLevels();R=computeLv();fit();changed(true)}
$('#projBtn').onclick=()=>{introMenu=null;showIntro()};
$('#projSel').onchange=e=>{const p=store.projects.find(x=>x.id===e.target.value);if(p)openProject(p)};
$('#newProj').onclick=()=>{const p=norm(blank('Proiect '+(store.projects.length+1)));store.projects.push(p);openProject(p);showTab('plan');setTool('room');if(lsGet('electroplan.guide')!=='off')setTimeout(openGuide,300)};
function openGuide(){$('#guideOff').checked=lsGet('electroplan.guide')==='off';$('#guideDlg').showModal()}
$('#helpBtn').onclick=openGuide;
$('#guideOk').onclick=()=>{lsSet('electroplan.guide',$('#guideOff').checked?'off':'on');$('#guideDlg').close()};
$('#undoBtn').onclick=undo;$('#redoBtn').onclick=redo;

const dlg=$('#dlg');
$('#ioBtn').onclick=()=>{$('#ioText').value=JSON.stringify(P,null,1);$('#ioDel').textContent='Șterge proiectul curent';$('#ioDel').dataset.c='';dlg.showModal()};
$('#ioClose').onclick=()=>dlg.close();
$('#ioCopy').onclick=()=>copy($('#ioText').value,'Proiect copiat în clipboard.');
function importText(s){
  let q;try{q=JSON.parse(s)}catch(e){toast('Textul nu e un proiect valid. Verifică să fie copiat complet.');return}
  if(!q||!Array.isArray(q.rooms)||!Array.isArray(q.items)){toast('Textul nu conține camere și elemente ElectroPlan.');return}
  const p=norm(Object.assign(blank(),q,{id:uid()}));if(store.projects.some(x=>x.name===p.name))p.name+=' (importat)';
  store.projects.push(p);openProject(p);dlg.close();toast('Proiect importat.');
}
$('#ioImport').onclick=()=>importText($('#ioText').value);
$('#ioFile').onchange=e=>{const fl=e.target.files[0];if(!fl)return;const rd=new FileReader();rd.onload=()=>importText(String(rd.result));rd.readAsText(fl);e.target.value=''};
$('#ioDel').onclick=()=>{dlg.close();deleteProject(P.id)};
let introMenu=null;
function touchProj(p){p.updated=Date.now();cloud.last[p.id]=pbody(p);queuePush(p.id);persist();renderProjSel()}
function deleteProject(id){
  bgDropProject(id);
  const i=store.projects.findIndex(x=>x.id===id);if(i<0)return;const p=store.projects[i],wasCur=p===P;
  store.projects.splice(i,1);delete cloud.last[id];queuePush(id);if(!store.projects.length)store.projects.push(norm(blank('Proiect 1')));
  if(wasCur)openProject(store.projects[0]);else{persist();renderProjSel()}
  toastAct(`„${p.name}” a fost șters.`,'Anulează',()=>{if(store.projects.some(x=>x.id===id))return;store.projects.push(p);touchProj(p);if(wasCur)openProject(p);if(!$('#intro').hidden)showIntro();toast('Proiect recuperat.')});
}
function toastAct(m,lab,fn){const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.style.cssText='display:flex;gap:12px;align-items:center;z-index:60';t.innerHTML=`<span></span><button class="btn" type="button" style="padding:4px 10px">${esc(lab)}</button>`;t.firstChild.textContent=m;t.querySelector('button').onclick=()=>{t.remove();fn()};document.body.appendChild(t);setTimeout(()=>t.remove(),8000)}

function toast(m){const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function copy(s,msg){
  const fb=()=>{const a=$('#ioText');if(dlg.open&&a){a.focus();a.select();toast('Selectat. Apasă Copiază din meniul tastaturii.')}else{const ta=document.createElement('textarea');ta.value=s;document.body.appendChild(ta);ta.select();let ok=false;try{ok=document.execCommand('copy')}catch(e){}ta.remove();toast(ok?msg:'Copierea nu e permisă aici.')}};
  try{navigator.clipboard.writeText(s).then(()=>toast(msg),fb)}catch(e){fb()}
}

document.addEventListener('keydown',e=>{
  if(e.target.closest('input,select,textarea'))return;
  const m=e.ctrlKey||e.metaKey;
  if(m&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo()}
  else if(m&&e.key.toLowerCase()==='y'){e.preventDefault();redo()}
  else if((e.key==='Delete'||e.key==='Backspace')&&sel&&tab==='plan'){e.preventDefault();insp.querySelector('[data-act="del"]')?.click()}
  else if(e.key==='Escape'){setTool('select');sel=null;renderInspector();draw()}
});

const mq=matchMedia('(prefers-color-scheme: dark)');
const retheme=()=>{readColors();draw();renderDyn();if(tab!=='plan')renderTab()};
mq.addEventListener?.('change',retheme);
new MutationObserver(retheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
new ResizeObserver(()=>{if(tab==='plan')resize()}).observe(stage);

let deferredInstall=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;$('#installBtn').hidden=false});
$('#installBtn').onclick=async()=>{if(!deferredInstall)return;deferredInstall.prompt();try{await deferredInstall.userChoice}catch(e){}deferredInstall=null;$('#installBtn').hidden=true};
window.addEventListener('appinstalled',()=>{$('#installBtn').hidden=true;toast('Aplicația a fost instalată. O găsești pe ecranul de pornire.')});
if('serviceWorker' in navigator&&window.isSecureContext&&/^https?:$/.test(location.protocol)&&!window.claude)navigator.serviceWorker.register('sw.js').catch(()=>{});
const THEMES={dark:'Întunecată',light:'Luminoasă',auto:'Ca sistemul'};
const themeGet=()=>{const v=lsGet('electroplan.theme');return THEMES[v]?v:'dark'};
function applyTheme(v){const r=document.documentElement;if(v==='auto')r.removeAttribute('data-theme');else r.setAttribute('data-theme',v)}
applyTheme(themeGet());
insp.addEventListener('change',e=>{if(e.target.id!=='p-theme')return;lsSet('electroplan.theme',e.target.value);applyTheme(e.target.value)});
const BG_DB='electroplan-plans',PT_M=.000352778,MASK_M=.02;
function bgDb(){return bgDb.p||(bgDb.p=new Promise((res,rej)=>{try{const r=indexedDB.open(BG_DB,1);r.onupgradeneeded=()=>r.result.createObjectStore('bg');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)}catch(e){rej(e)}}))}
async function bgIdb(op,key,val){const db=await bgDb();return new Promise((res,rej)=>{const t=db.transaction('bg',op==='get'||op==='keys'?'readonly':'readwrite'),s=t.objectStore('bg'),r=op==='get'?s.get(key):op==='put'?s.put(val,key):op==='del'?s.delete(key):s.getAllKeys();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
const bgKey=(pid,lv)=>pid+':'+lv,bgMeta=()=>(P.bgs||{})[P.lvCur]||null,bgc={};
let bgMode=null,bgCal=[];
function bgEnsure(){const m=bgMeta();if(!m)return null;const k=bgKey(P.id,P.lvCur);if(bgc[k])return bgc[k];const c=bgc[k]={state:'loading'};
  bgIdb('get',k).then(async d=>{if(!d){c.state='missing';return}const img=new Image();img.src=URL.createObjectURL(d.img);await img.decode();Object.assign(c,{state:'ok',img,mask:d.mask,mw:d.mw,mh:d.mh,texts:d.texts||[],wins:d.wins||[],dia:d.dia||[]});draw()}).catch(()=>{c.state='missing'});return c}
function drawBg(){const m=bgMeta();if(!m||m.hide)return;const c=bgEnsure();if(!c||c.state!=='ok')return;
  if(!c.tc||c.tcol!==C.ink){const t=document.createElement('canvas');t.width=c.img.naturalWidth;t.height=c.img.naturalHeight;const x=t.getContext('2d');x.drawImage(c.img,0,0);x.globalCompositeOperation='source-in';x.fillStyle=C.ink;x.fillRect(0,0,t.width,t.height);c.tc=t;c.tcol=C.ink}
  ctx.save();ctx.globalAlpha=m.op??.5;ctx.drawImage(c.tc,sx(m.x),sy(m.y),m.w*m.mpp*view.s,m.h*m.mpp*view.s);ctx.restore();
  if(bgMode==='cal')for(const q of bgCal){ctx.save();ctx.strokeStyle=C.sel;ctx.lineWidth=2;const X=sx(q.x),Y=sy(q.y);ctx.beginPath();ctx.moveTo(X-9,Y);ctx.lineTo(X+9,Y);ctx.moveTo(X,Y-9);ctx.lineTo(X,Y+9);ctx.stroke();ctx.restore()}}
function loadPdfJs(){if(window.pdfjsLib)return Promise.resolve();return new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';sc.onload=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';res()};sc.onerror=()=>rej(new Error('Nu am putut încărca cititorul de PDF. Verifică conexiunea la internet.'));document.head.appendChild(sc)})}
const mmul=(m,n)=>[m[0]*n[0]+m[2]*n[1],m[1]*n[0]+m[3]*n[1],m[0]*n[2]+m[2]*n[3],m[1]*n[2]+m[3]*n[3],m[0]*n[4]+m[2]*n[5]+m[4],m[1]*n[4]+m[3]*n[5]+m[5]];
const mapp=(m,x,y)=>[m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]];
const rgbOf=a=>{if(!a)return[0,0,0];if(typeof a[0]==='string'){const h=a[0].replace('#','');return[parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]}return[a[0]|0,a[1]|0,a[2]|0]};
const lumOf=c=>(.2126*c[0]+.7152*c[1]+.0722*c[2])/255;
async function pdfVectors(page,vp){
  const ol=await page.getOperatorList(),O=pdfjsLib.OPS,segs=[],fills=[],st=[];let ctm=[1,0,0,1,0,0],sc=[0,0,0],fc=[0,0,0],lw=1,path=null;
  const S=new Set([O.stroke,O.closeStroke,O.fillStroke,O.eoFillStroke,O.closeFillStroke,O.closeEOFillStroke]),F=new Set([O.fill,O.eoFill,O.fillStroke,O.eoFillStroke,O.closeFillStroke,O.closeEOFillStroke]);
  for(let i=0;i<ol.fnArray.length;i++){const fn=ol.fnArray[i],a=ol.argsArray[i];
    if(fn===O.save)st.push([ctm,sc,fc,lw]);else if(fn===O.restore){const s=st.pop();if(s)[ctm,sc,fc,lw]=s}
    else if(fn===O.transform)ctm=mmul(ctm,a);
    else if(fn===O.paintFormXObjectBegin){st.push([ctm,sc,fc,lw]);if(a&&a[0]&&a[0].length===6)ctm=mmul(ctm,a[0])}else if(fn===O.paintFormXObjectEnd){const s=st.pop();if(s)[ctm,sc,fc,lw]=s}
    else if(fn===O.setLineWidth)lw=a[0];else if(fn===O.setStrokeRGBColor)sc=rgbOf(a);else if(fn===O.setFillRGBColor)fc=rgbOf(a);
    else if(fn===O.constructPath){const T=mmul(vp.transform,ctm),ops=a[0],cd=a[1],subs=[];let sub=null,j=0;const P2=(x,y,cv)=>{const p=mapp(T,x,y);return{x:p[0],y:p[1],cv}};
      for(const op of ops){if(op===O.moveTo){sub=[P2(cd[j],cd[j+1])];subs.push(sub);j+=2}else if(op===O.lineTo){if(sub)sub.push(P2(cd[j],cd[j+1]));j+=2}else if(op===O.curveTo){if(sub)sub.push(P2(cd[j+4],cd[j+5],1));j+=6}else if(op===O.curveTo2||op===O.curveTo3){if(sub)sub.push(P2(cd[j+2],cd[j+3],1));j+=4}else if(op===O.closePath){if(sub&&sub.length)sub.push({...sub[0]})}else if(op===O.rectangle){const x=cd[j],y=cd[j+1],w=cd[j+2],h=cd[j+3];sub=[P2(x,y),P2(x+w,y),P2(x+w,y+h),P2(x,y+h),P2(x,y)];subs.push(sub);sub=null;j+=4}}
      path={subs,k:Math.sqrt(Math.abs(T[0]*T[3]-T[1]*T[2]))}}
    else if(path&&(S.has(fn)||F.has(fn)||fn===O.endPath)){
      if(S.has(fn))for(const s of path.subs)for(let q=1;q<s.length;q++)segs.push({x1:s[q-1].x,y1:s[q-1].y,x2:s[q].x,y2:s[q].y,cv:!!s[q].cv,c:sc,lw:lw*path.k});
      if(F.has(fn))for(const s of path.subs)if(s.length>2)fills.push({pts:s,c:fc});
      path=null}}
  return{segs,fills}}
function pdfTexts(tc,vp){return tc.items.filter(it=>it.str&&it.str.trim()).map(it=>{const t=pdfjsLib.Util.transform(vp.transform,it.transform),sz=Math.hypot(t[0],t[1])||1,ux=t[0]/sz,uy=t[1]/sz,up=Math.hypot(t[2],t[3])||1,vx=t[2]/up,vy=t[3]/up,w=it.width||sz*it.str.length*.5;
  return{s:it.str.trim(),x:t[4]+ux*w/2+vx*sz*.35,y:t[5]+uy*w/2+vy*sz*.35,ux,uy,sz}})}
function pdfScale(segs,texts){
  const rs=[],L=segs.filter(s=>!s.cv&&Math.hypot(s.x2-s.x1,s.y2-s.y1)>=2);
  for(const t of texts){const m=t.s.match(/^(\d{1,4})(?:[.,](\d{1,2}))?$/);if(!m)continue;const v=parseFloat(t.s.replace(',','.'));if(v<5||v>3000)continue;
    const tw=t.sz*t.s.length*.6,cand=[];
    for(const s of L){let dx=s.x2-s.x1,dy=s.y2-s.y1;const l=Math.hypot(dx,dy);dx/=l;dy/=l;if(Math.abs(dx*t.uy-dy*t.ux)>.06)continue;const sg=dx*t.ux+dy*t.uy<0?-1:1;
      const a1=(s.x1-t.x)*t.ux+(s.y1-t.y)*t.uy,a2=(s.x2-t.x)*t.ux+(s.y2-t.y)*t.uy,pd=(s.x1-t.x)*-t.uy+(s.y1-t.y)*t.ux;if(Math.abs(pd)>t.sz*1.8+4)continue;
      cand.push({a:Math.min(a1,a2),b:Math.max(a1,a2),pd,c:s.c.join(',')})}
    const near=cand.filter(q=>q.a<=tw&&q.b>=-tw).sort((p,q)=>Math.abs(p.pd)-Math.abs(q.pd))[0];if(!near)continue;
    const line=cand.filter(q=>q.c===near.c&&Math.abs(q.pd-near.pd)<.6).sort((p,q)=>p.a-q.a);let a=near.a,b=near.b,ch=true;
    while(ch){ch=false;for(const q of line){if(q.b>b&&q.a<=b+tw+4){b=q.b;ch=true}if(q.a<a&&q.b>=a-tw-4){a=q.a;ch=true}}}
    if(b-a>=6)rs.push(v/(b-a))}
  if(rs.length<3)return null;rs.sort((a,b)=>a-b);let bi=0,bc=0;for(let i=0;i<rs.length;i++){let c=0;for(let j=i;j<rs.length&&rs[j]<=rs[i]*1.04;j++)c++;if(c>bc){bc=c;bi=i}}
  if(bc<3||bc<rs.length*.15)return null;const cl=rs.slice(bi,bi+bc),cmpt=cl[Math.floor(cl.length/2)];
  let n=cmpt/100/PT_M;const std=[10,20,25,50,75,100,150,200,250,500];const sn=std.find(q=>Math.abs(q-n)/q<.04);if(sn)n=sn;
  if(n<5||n>1000)return null;return{n:Math.round(n),mppt:(sn?sn*PT_M:cmpt/100),k:bc,of:rs.length}}
function morph(m,w,h,r,dil){const t=new Uint8Array(m.length),o=new Uint8Array(m.length);
  for(let y=0;y<h;y++){const b=y*w;for(let x=0;x<w;x++){let v=dil?0:1;for(let k=-r;k<=r;k++){const xx=x+k;const q=xx<0||xx>=w?(dil?0:1):m[b+xx];if(dil?q:!q){v=dil?1:0;break}}t[b+x]=v}}
  for(let x=0;x<w;x++)for(let y=0;y<h;y++){let v=dil?0:1;for(let k=-r;k<=r;k++){const yy=y+k;const q=yy<0||yy>=h?(dil?0:1):t[yy*w+x];if(dil?q:!q){v=dil?1:0;break}}o[y*w+x]=v}return o}
function pdfMask(geo,vp,mppt){
  const k=mppt/MASK_M,mw=Math.ceil(vp.width*k),mh=Math.ceil(vp.height*k),cv2=document.createElement('canvas');cv2.width=mw;cv2.height=mh;const x=cv2.getContext('2d');x.fillStyle='#000';x.fillRect(0,0,mw,mh);x.strokeStyle=x.fillStyle='#fff';x.lineCap='round';
  const hat=geo.segs.filter(s=>{if(s.cv)return false;const dx=Math.abs(s.x2-s.x1),dy=Math.abs(s.y2-s.y1),l=Math.hypot(dx,dy)*mppt;if(l<.02||l>.9)return false;const a=Math.atan2(dy,dx)*180/Math.PI;return a>15&&a<75});
  const ck=s=>s.c.join(','),cnt={};for(const s of hat)cnt[ck(s)]=(cnt[ck(s)]||0)+1;const top=Math.max(0,...Object.values(cnt));
  const G={},keep=hat.filter(s=>cnt[ck(s)]>=Math.max(15,top*.25)).map(s=>{const dx=s.x2-s.x1,dy=s.y2-s.y1,l=Math.hypot(dx,dy);let ex=dx/l,ey=dy/l;if(ex<0){ex=-ex;ey=-ey}const mx=(s.x1+s.x2)/2,my=(s.y1+s.y2)/2,key=ck(s)+'|'+Math.round(Math.atan2(ey,ex)*36/Math.PI)+'|'+Math.floor(mx*mppt/.4)+'|'+Math.floor(my*mppt/.4),o={s,mx,my,n:-ey*mx+ex*my,key};(G[key]||(G[key]=[])).push(o);return o});
  const g0=.008/mppt,g1=.2/mppt,g2=.5/mppt,isHatch=o=>{let c=0;for(const q of G[o.key]){if(q===o)continue;const dn=Math.abs(q.n-o.n);if(dn>g0&&dn<g1&&Math.abs(q.mx-o.mx)<g2&&Math.abs(q.my-o.my)<g2&&++c>=3)return true}return false};
  const hset=new Set();x.lineWidth=Math.max(2,.05/MASK_M);x.beginPath();for(const o of keep)if(isHatch(o)){hset.add(o.s);x.moveTo(o.s.x1*k,o.s.y1*k);x.lineTo(o.s.x2*k,o.s.y2*k)}x.stroke();
  for(const f of geo.fills){if(lumOf(f.c)>.93)continue;let a=0,xs=f.pts.map(p=>p.x),ys=f.pts.map(p=>p.y);for(let i=1;i<f.pts.length;i++)a+=f.pts[i-1].x*f.pts[i].y-f.pts[i].x*f.pts[i-1].y;a=Math.abs(a/2)*mppt*mppt;
    const bw=(Math.max(...xs)-Math.min(...xs))*mppt,bh=(Math.max(...ys)-Math.min(...ys))*mppt;if(a<.005||(!f.wall&&!f.band&&(a>6||Math.min(bw,bh)>1.2)))continue;x.beginPath();f.pts.forEach((p,i)=>i?x.lineTo(p.x*k,p.y*k):x.moveTo(p.x*k,p.y*k));x.fill()}
  x.beginPath();for(const s of geo.segs)if(!s.cv&&s.lw>=1&&lumOf(s.c)<.55&&Math.hypot(s.x2-s.x1,s.y2-s.y1)*mppt>.2&&(Math.abs(s.x2-s.x1)<.5||Math.abs(s.y2-s.y1)<.5)){x.lineWidth=Math.max(2,s.lw*k);x.moveTo(s.x1*k,s.y1*k);x.lineTo(s.x2*k,s.y2*k)}x.stroke();
  const d=x.getImageData(0,0,mw,mh).data;let m=new Uint8Array(mw*mh);for(let i=0;i<m.length;i++)m[i]=d[i*4]>127?1:0;
  {const r=Math.round(.36/MASK_M),blob=morph(morph(morph(m,mw,mh,r,false),mw,mh,r,true),mw,mh,3,true);for(let i=0;i<m.length;i++)if(blob[i])m[i]=0}
  m=despeck(morph(morph(m,mw,mh,2,true),mw,mh,2,false),mw,mh,Math.round(.04/MASK_M/MASK_M));
  const ax=geo.segs.filter(s=>!s.cv).map(s=>{const h=Math.abs(s.y2-s.y1)<.3,v=Math.abs(s.x2-s.x1)<.3;if(!h&&!v)return null;const a=h?Math.min(s.x1,s.x2):Math.min(s.y1,s.y2),b=h?Math.max(s.x1,s.x2):Math.max(s.y1,s.y2),c0=h?(s.y1+s.y2)/2:(s.x1+s.x2)/2;return(b-a)*mppt>=.5&&(b-a)*mppt<=6?{h,a,b,c:c0}:null}).filter(Boolean);
  const near=(X,Y)=>{const r=Math.round(.25/MASK_M),cx=Math.round(X*k),cy=Math.round(Y*k);for(let y=cy-r;y<=cy+r;y+=2)for(let x=cx-r;x<=cx+r;x+=2)if(x>=0&&y>=0&&x<mw&&y<mh&&m[y*mw+x])return true;return false};
  const nearAx=(X,Y,dx,dy)=>{const cx=X*k,cy=Y*k;for(let t=1;t<=Math.round(.2/MASK_M);t++)for(let l=-3;l<=3;l++){const x=Math.round(cx+dx*t-dy*l),y=Math.round(cy+dy*t+dx*l);if(x>=0&&y>=0&&x<mw&&y<mh&&m[y*mw+x])return true}return false};
  const win=[];for(let i=0;i<ax.length;i++){const p=ax[i];for(let j=i+1;j<ax.length;j++){const q=ax[j];if(p.h!==q.h)continue;const d=Math.abs(p.c-q.c)*mppt;if(d<.03||d>.35)continue;const ov=Math.min(p.b,q.b)-Math.max(p.a,q.a);if(ov<.7*Math.max(p.b-p.a,q.b-q.a))continue;
    const a0=Math.max(p.a,q.a),b0=Math.min(p.b,q.b),cm=(p.c+q.c)/2;const e1=p.h?nearAx(a0,cm,-1,0):nearAx(cm,a0,0,-1),e2=p.h?nearAx(b0,cm,1,0):nearAx(cm,b0,0,1);if(e1&&e2){const c1=Math.min(p.c,q.c),c2=Math.max(p.c,q.c),third=ax.some(r=>r!==p&&r!==q&&r.h===p.h&&r.c>c1-.02/mppt&&r.c<c2+.02/mppt&&Math.abs(r.c-p.c)>.008/mppt&&Math.abs(r.c-q.c)>.008/mppt&&Math.min(r.b,b0)-Math.max(r.a,a0)>.7*(b0-a0));win.push({h:p.h,a:a0,b:b0,c1,c2,w3:third})}}}
  for(const w of win){const a=Math.floor(w.a*k),b=Math.ceil(w.b*k),c1=Math.floor(w.c1*k),c2=Math.ceil(w.c2*k);for(let t=a;t<=b;t++)for(let u=c1;u<=c2;u++){const X=w.h?t:u,Y=w.h?u:t;if(X>=0&&Y>=0&&X<mw&&Y<mh)m[Y*mw+X]=1}}
  const dgl=geo.segs.filter(s=>!s.cv&&!hset.has(s)&&!(cnt[ck(s)]>=Math.max(15,top*.25)&&Math.hypot(s.x2-s.x1,s.y2-s.y1)*mppt<.9&&!s.wall)).map(s=>{const dx=s.x2-s.x1,dy=s.y2-s.y1,l=Math.hypot(dx,dy),A=Math.abs(Math.atan2(dy,dx)*180/Math.PI)%90;return l*mppt>=.25&&l*mppt<=4&&A>=20&&A<=70?{s,l,ux:dx/l,uy:dy/l}:null}).filter(Boolean),dia=[];
  const inQ=(Q,x,y)=>{let sg=0;for(let i=0;i<4;i++){const a=Q[i],b=Q[(i+1)%4],cr=(b.x-a.x)*(y-a.y)-(b.y-a.y)*(x-a.x);if(cr===0)continue;if(!sg)sg=Math.sign(cr);else if(Math.sign(cr)!==sg)return false}return true};
  for(let i=0;i<dgl.length;i++){const A=dgl[i];for(let j=i+1;j<dgl.length;j++){const B=dgl[j];if(Math.abs(A.ux*B.uy-A.uy*B.ux)>.03)continue;const nx=-A.uy,ny=A.ux,d=Math.abs((B.s.x1-A.s.x1)*nx+(B.s.y1-A.s.y1)*ny)*mppt;if(d<.05||d>.4)continue;
    const pr=(x,y)=>(x-A.s.x1)*A.ux+(y-A.s.y1)*A.uy,b0=Math.min(pr(B.s.x1,B.s.y1),pr(B.s.x2,B.s.y2)),b1=Math.max(pr(B.s.x1,B.s.y1),pr(B.s.x2,B.s.y2)),lo=Math.max(0,b0),hi=Math.min(A.l,b1);if(hi-lo<.6*Math.min(A.l,b1-b0))continue;
    const off=((B.s.x1-A.s.x1)*nx+(B.s.y1-A.s.y1)*ny),P0={x:A.s.x1+A.ux*lo,y:A.s.y1+A.uy*lo},P1={x:A.s.x1+A.ux*hi,y:A.s.y1+A.uy*hi},C0={x:P0.x+nx*off/2,y:P0.y+ny*off/2},C1={x:P1.x+nx*off/2,y:P1.y+ny*off/2};
    const ext=(Pt,sg)=>{for(let t=1;t<=Math.round(.25/MASK_M);t++)for(let l=-2;l<=2;l++){const x=Math.round(Pt.x*k+sg*A.ux*t-A.uy*l),y=Math.round(Pt.y*k+sg*A.uy*t+A.ux*l);if(x>=0&&y>=0&&x<mw&&y<mh&&m[y*mw+x])return true}return false};
    if(!ext(C0,-1)&&!ext(C1,1))continue;const Q=[P0,P1,{x:P1.x+nx*off,y:P1.y+ny*off},{x:P0.x+nx*off,y:P0.y+ny*off}].map(q=>({x:q.x*k,y:q.y*k}));
    const bx0=Math.floor(Math.min(...Q.map(q=>q.x))),bx1=Math.ceil(Math.max(...Q.map(q=>q.x))),by0=Math.floor(Math.min(...Q.map(q=>q.y))),by1=Math.ceil(Math.max(...Q.map(q=>q.y)));for(let y=by0;y<=by1;y++)for(let x=bx0;x<=bx1;x++)if(x>=0&&y>=0&&x<mw&&y<mh&&inQ(Q,x+.5,y+.5))m[y*mw+x]=1;
    dia.push({x1:C0.x*k,y1:C0.y*k,x2:C1.x*k,y2:C1.y*k,th:d})}}
  for(let ch=true;ch;){ch=false;for(let i=0;i<dia.length&&!ch;i++)for(let j=i+1;j<dia.length&&!ch;j++){const a=dia[i],b=dia[j],l=Math.hypot(a.x2-a.x1,a.y2-a.y1),ux=(a.x2-a.x1)/l,uy=(a.y2-a.y1)/l;
    if(Math.abs(ux*(b.y2-b.y1)-uy*(b.x2-b.x1))/Math.hypot(b.x2-b.x1,b.y2-b.y1)>.05)continue;if(Math.abs((b.x1-a.x1)*-uy+(b.y1-a.y1)*ux)*MASK_M>.06)continue;
    const ts=[0,l,(b.x1-a.x1)*ux+(b.y1-a.y1)*uy,(b.x2-a.x1)*ux+(b.y2-a.y1)*uy],bl=Math.min(ts[2],ts[3]),bh=Math.max(ts[2],ts[3]),gap=Math.max(bl-l,0-bh)*MASK_M;if(gap>1.3)continue;
    const t0=Math.min(...ts),t1=Math.max(...ts);dia[i]={x1:a.x1+ux*t0,y1:a.y1+uy*t0,x2:a.x1+ux*t1,y2:a.y1+uy*t1,th:a.th};dia.splice(j,1);ch=true}}
  return{mask:m,mw,mh,dia,win:win.filter(w=>w.w3).map(w=>({h:w.h,a:w.a*k,b:w.b*k,c:(w.c1+w.c2)/2*k}))}}
function mainBox(m,w,h,mm){const r=Math.max(2,Math.round(.05/mm)),o=despeck(morph(morph(m,w,h,r,false),w,h,r,true),w,h,Math.round(.06/mm/mm));let x0=w,y0=h,x1=0,y1=0;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(o[y*w+x]){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y}return x1<x0?{x0:0,y0:0,x1:w,y1:h}:{x0,y0,x1,y1}}
function despeck(m,w,h,min){const seen=new Uint8Array(m.length),st=[],comp=[];for(let i=0;i<m.length;i++){if(!m[i]||seen[i])continue;comp.length=0;st.push(i);seen[i]=1;while(st.length){const j=st.pop();comp.push(j);const x=j%w;for(const k of[j-w,j+w,x>0?j-1:-1,x<w-1?j+1:-1])if(k>=0&&k<m.length&&m[k]&&!seen[k]){seen[k]=1;st.push(k)}}if(comp.length<min)for(const j of comp)m[j]=0}return m}
function rasterMask(cvs,mpp){const k=mpp/MASK_M,mw=Math.ceil(cvs.width*k),mh=Math.ceil(cvs.height*k),c2=document.createElement('canvas');c2.width=mw;c2.height=mh;const x=c2.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,mw,mh);x.drawImage(cvs,0,0,mw,mh);
  const d=x.getImageData(0,0,mw,mh).data;let m=new Uint8Array(mw*mh);for(let i=0;i<m.length;i++)m[i]=(d[i*4]*.3+d[i*4+1]*.59+d[i*4+2]*.11)<110?1:0;
  m=morph(morph(m,mw,mh,2,true),mw,mh,2,false);m=morph(morph(m,mw,mh,2,false),mw,mh,2,true);return{mask:despeck(m,mw,mh,Math.round(.04/MASK_M/MASK_M)),mw,mh}}
function inkify(cvs){const x=cvs.getContext('2d'),im=x.getImageData(0,0,cvs.width,cvs.height),d=im.data;for(let i=0;i<d.length;i+=4){const l=(d[i]*.2126+d[i+1]*.7152+d[i+2]*.0722)/255,a=d[i+3]/255;d[i]=d[i+1]=d[i+2]=0;d[i+3]=Math.round(clamp((1-l)*1.5,0,1)*a*255)}x.putImageData(im,0,0);return cvs}
function fitBox(b){if(!b||W<10)return;const sw=Math.abs(Math.sin(view.rot))>.7,pad=Math.min(40,Math.max(16,Math.min(W,Hh)*.05)),hud=document.querySelector('.hud'),sbb=$('#selbar'),hb=(hud?hud.offsetHeight+10:0),tb=(sbb&&sbb.offsetHeight?sbb.offsetHeight+10:0),bar=Math.max(hb,tb);
  const FW=(sw?Hh-bar*2:W)-pad*2,FH=(sw?W:Hh-(view.rot?bar*2:hb+tb))-pad*2;view.auto=false;view.s=clamp(Math.min(FW/Math.max(1,b.x1-b.x0),FH/Math.max(1,b.y1-b.y0)),10,260);
  view.ox=(W-(b.x1-b.x0)*view.s)/2-b.x0*view.s;view.oy=(view.rot?(Hh-(b.y1-b.y0)*view.s)/2:tb+pad+(FH-(b.y1-b.y0)*view.s)/2)-b.y0*view.s}
const DXF_WALL=/(^|[^a-z])(wall|walls|a-wall|perete|pereti|zid|zidarie|zidărie|mur|murs|structura|structură|beton|caramida|cărămidă|bca|gips|compartiment)/i,DXF_SKIP=/(dim|cot[aăe]|cote|text|mobil|furn|axe|axis|grid|hatch-pat|title|cartus|cartuș|indicator|defpoints)/i;
async function dxfText(f){const buf=new Uint8Array(await f.arrayBuffer());let t=new TextDecoder('utf-8').decode(buf);if(/\uFFFD/.test(t.slice(0,200000)))t=new TextDecoder('windows-1250').decode(buf);return t}
function dxfParse(txt){
  const L=txt.split(/\r\n|\r|\n/),pr=[];for(let i=0;i+1<L.length;i+=2){const c=parseInt(L[i].trim(),10);if(isNaN(c)){i--;continue}pr.push([c,L[i+1].replace(/\s+$/,'')])}
  const ents=[],blocks={},layers={};let ins=1,sec='',cur=null,blk=null,list=ents,poly=null;
  const flush=()=>{if(!cur)return;if(cur.t==='VERTEX'&&poly){poly.v.push(cur);cur=null;return}if(cur.t==='SEQEND'){poly=null;cur=null;return}if(cur.t==='POLYLINE'){cur.v=[];poly=cur}list.push(cur);cur=null};
  for(let i=0;i<pr.length;i++){const[c,v]=pr[i];
    if(c===0){flush();if(v==='SECTION'){sec='';continue}if(v==='ENDSEC'){sec='';continue}if(v==='BLOCK'){blk={name:'',bx:0,by:0,ents:[]};list=blk.ents;cur=null;continue}if(v==='ENDBLK'){if(blk){blocks[blk.name]=blk}blk=null;list=ents;continue}
      if(sec==='ENTITIES'||sec==='BLOCKS')cur={t:v,g:[]};else if(sec==='TABLES'&&v==='LAYER')cur={t:'LAYER',g:[]};continue}
    if(c===2&&pr[i-1]&&pr[i-1][0]===0&&pr[i-1][1]==='SECTION'){sec=v;continue}
    if(sec==='HEADER'&&c===9&&v==='$INSUNITS'&&pr[i+1]){ins=parseInt(pr[i+1][1],10)||0;continue}
    if(blk&&!cur){if(c===2)blk.name=v;else if(c===10)blk.bx=+v;else if(c===20)blk.by=+v;continue}
    if(cur){cur.g.push([c,v]);if(cur.t==='LAYER'&&c===2)cur.name=v}}
  flush();
  for(const e of ents.filter(e=>e.t==='LAYER')){let col=0,fl=0;for(const[c,v]of e.g){if(c===62)col=+v;if(c===70)fl=+v}layers[e.name]={off:col<0||(fl&1)===1}}
  return{ents:ents.filter(e=>e.t!=='LAYER'),blocks,layers,ins}}
function dxfGeo(d){
  const segs=[],fills=[],texts=[],ACI={1:[255,0,0],2:[255,255,0],3:[0,255,0],4:[0,255,255],5:[0,0,255],6:[255,0,255],7:[0,0,0],8:[128,128,128],9:[192,192,192]};
  const get=(e,c)=>{const r=e.g.find(q=>q[0]===c);return r?r[1]:undefined},num=(e,c,dv=0)=>{const v=get(e,c);return v===undefined?dv:+v};
  const arcPts=(cx,cy,r,a0,a1)=>{let s=a0*Math.PI/180,e=a1*Math.PI/180;if(e<=s)e+=Math.PI*2;const n=Math.max(4,Math.ceil((e-s)/(Math.PI/12))),o=[];for(let i=0;i<=n;i++){const a=s+(e-s)*i/n;o.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}return o};
  const walk=(list,M,lay0,depth)=>{for(const e of list){let lay=get(e,8)||'0';if(lay==='0'&&lay0)lay=lay0;const ly=d.layers[lay];if(ly&&ly.off)continue;if(DXF_SKIP.test(lay)&&!DXF_WALL.test(lay)&&e.t!=='TEXT'&&e.t!=='MTEXT')continue;
    const wall=DXF_WALL.test(lay),ci=num(e,62,7),col=wall?[0,0,0]:(ACI[Math.abs(ci)]||[90,90,90]),T=(x,y)=>[M[0]*x+M[2]*y+M[4],M[1]*x+M[3]*y+M[5]];
    const line=(a,b,cv)=>{const p=T(a[0],a[1]),q=T(b[0],b[1]);segs.push({x1:p[0],y1:p[1],x2:q[0],y2:q[1],cv:!!cv,c:col,lw:wall?1.5:.1,wall})};
    const poly=(pts,closed,cv)=>{for(let i=1;i<pts.length;i++)line(pts[i-1],pts[i],cv);if(closed&&pts.length>2)line(pts[pts.length-1],pts[0],cv)};
    if(e.t==='LINE')line([num(e,10),num(e,20)],[num(e,11),num(e,21)]);
    else if(e.t==='LWPOLYLINE'){const pts=[];let bul=false;for(const[c,v]of e.g){if(c===10)pts.push([+v,0]);else if(c===20&&pts.length)pts[pts.length-1][1]=+v;else if(c===42&&+v!==0)bul=true}poly(pts,(num(e,70)&1)===1,bul)}
    else if(e.t==='POLYLINE'){const pts=(e.v||[]).map(q=>[num(q,10),num(q,20)]);poly(pts,(num(e,70)&1)===1,(e.v||[]).some(q=>num(q,42)!==0))}
    else if(e.t==='ARC')poly(arcPts(num(e,10),num(e,20),num(e,40),num(e,50),num(e,51)),false,true);
    else if(e.t==='CIRCLE')poly(arcPts(num(e,10),num(e,20),num(e,40),0,360),false,true);
    else if(e.t==='SOLID'){const p=[[num(e,10),num(e,20)],[num(e,11),num(e,21)],[num(e,13),num(e,23)],[num(e,12),num(e,22)]].map(q=>{const t=T(q[0],q[1]);return{x:t[0],y:t[1]}});fills.push({pts:[...p,p[0]],c:col})}
    else if(e.t==='HATCH'){const g=e.g;let i=g.findIndex(q=>q[0]===91);if(i<0)continue;const np=+g[i][1];i++;const paths=[];let bad=false;
      for(let p=0;p<np&&i<g.length&&!bad;p++){while(i<g.length&&g[i][0]!==92)i++;if(i>=g.length)break;const fl=+g[i][1];i++;const pts=[];
        if(fl&2){while(i<g.length&&g[i][0]!==93)i++;const nv=+g[i][1];i++;for(let k=0;k<nv&&i<g.length;){if(g[i][0]===10){pts.push([+g[i][1],+g[i+1][1]]);i+=2;k++}else i++}}
        else{while(i<g.length&&g[i][0]!==93)i++;const ne=+g[i][1];i++;for(let k=0;k<ne&&i<g.length;k++){while(i<g.length&&g[i][0]!==72)i++;const ty=+g[i][1];i++;
          if(ty===1){const a=[+g[i][1],+g[i+1][1]],b=[+g[i+2][1],+g[i+3][1]];if(!pts.length)pts.push(a);pts.push(b);i+=4}
          else if(ty===2){const cx=+g[i][1],cy=+g[i+1][1],r=+g[i+2][1],a0=+g[i+3][1],a1=+g[i+4][1];pts.push(...arcPts(cx,cy,r,a0,a1));i+=6}
          else{bad=true;break}}}
        if(pts.length>2)paths.push(pts)}
      for(const pts of paths)fills.push({pts:pts.map(q=>{const t=T(q[0],q[1]);return{x:t[0],y:t[1]}}),c:wall?[0,0,0]:[60,60,60],hatch:true,wall})}
    else if(e.t==='INSERT'&&depth<5){const b=d.blocks[get(e,2)];if(!b)continue;const sx_=num(e,41,1),sy_=num(e,42,1),r=num(e,50)*Math.PI/180,px=num(e,10),py=num(e,20),cs=Math.cos(r),sn=Math.sin(r);
      const Mi=mmul(M,[cs*sx_,sn*sx_,-sn*sy_,cs*sy_,px,py]),Mb=mmul(Mi,[1,0,0,1,-b.bx,-b.by]);walk(b.ents,Mb,lay,depth+1)}
    else if(e.t==='TEXT'||e.t==='MTEXT'){let s=(get(e,3)||'')+(get(e,1)||'');s=s.replace(/\\P/g,' ').replace(/\{\\[^;]*;|\}|\{/g,'').replace(/\\[A-Za-z][^;]*;/g,'').trim();if(!s)continue;const p=T(num(e,10),num(e,20));texts.push({s,x:p[0],y:p[1],ux:1,uy:0,sz:num(e,40,1)})}}};
  walk(d.ents,[1,0,0,1,0,0],null,0);return{segs,fills,texts}}
function dxfUnits(d,geo){const u={1:.0254,2:.3048,4:.001,5:.01,6:1}[d.ins];if(u)return u;const xs=geo.segs.flatMap(s=>[s.x1,s.x2]).sort((a,b)=>a-b),span=xs.length?xs[Math.floor(xs.length*.98)]-xs[Math.floor(xs.length*.02)]:0;return span>2000?.001:span>200?.01:1}
function dxfClusters(geo,u){const cell=1/u,occ=new Map(),key=(i,j)=>i+','+j;for(const s of geo.segs){if(s.cv)continue;const n=Math.max(1,Math.ceil(Math.hypot(s.x2-s.x1,s.y2-s.y1)/cell));for(let k=0;k<=n;k++){const x=s.x1+(s.x2-s.x1)*k/n,y=s.y1+(s.y2-s.y1)*k/n,i=Math.floor(x/cell),j=Math.floor(y/cell);occ.set(key(i,j),(occ.get(key(i,j))||0)+1)}}
  const seen=new Set(),cl=[];for(const k of occ.keys()){if(seen.has(k))continue;const st=[k];seen.add(k);let n=0,x0=1e18,y0=1e18,x1=-1e18,y1=-1e18;while(st.length){const q=st.pop(),[i,j]=q.split(',').map(Number);n+=occ.get(q);x0=Math.min(x0,i);x1=Math.max(x1,i);y0=Math.min(y0,j);y1=Math.max(y1,j);for(let a=-2;a<=2;a++)for(let b=-2;b<=2;b++){const kk=key(i+a,j+b);if(occ.has(kk)&&!seen.has(kk)){seen.add(kk);st.push(kk)}}}cl.push({n,x0:x0*cell,y0:y0*cell,x1:(x1+1)*cell,y1:(y1+1)*cell})}
  const big=cl.filter(c=>(c.x1-c.x0)*u>=4&&(c.y1-c.y0)*u>=4).sort((a,b)=>b.n-a.n);return big.length?big:cl.sort((a,b)=>b.n-a.n).slice(0,1)}
function dxfCrop(geo,b,pad){const X0=b.x0-pad,Y0=b.y0-pad,X1=b.x1+pad,Y1=b.y1+pad,inn=(x,y)=>x>=X0&&x<=X1&&y>=Y0&&y<=Y1,fy=y=>Y1-y;
  return{segs:geo.segs.filter(s=>inn(s.x1,s.y1)&&inn(s.x2,s.y2)).map(s=>({...s,x1:s.x1-X0,x2:s.x2-X0,y1:fy(s.y1),y2:fy(s.y2)})),fills:geo.fills.filter(f=>f.pts.every(p=>inn(p.x,p.y))).map(f=>({...f,pts:f.pts.map(p=>({x:p.x-X0,y:fy(p.y)}))})),texts:geo.texts.filter(t=>inn(t.x,t.y)).map(t=>({...t,x:t.x-X0,y:fy(t.y)})),w:X1-X0,h:Y1-Y0}}
function dxfWallBands(geo,u){const ax=geo.segs.filter(s=>s.wall&&!s.cv).map(s=>{const h=Math.abs(s.y2-s.y1)*u<.01,v=Math.abs(s.x2-s.x1)*u<.01;if(!h&&!v)return null;const a=h?Math.min(s.x1,s.x2):Math.min(s.y1,s.y2),b=h?Math.max(s.x1,s.x2):Math.max(s.y1,s.y2);return(b-a)*u>=.1?{h,a,b,c:h?(s.y1+s.y2)/2:(s.x1+s.x2)/2}:null}).filter(Boolean);
  const out=[];for(const p of ax){let best=null,bd=1e9;for(const q of ax){if(q===p||q.h!==p.h)continue;const dd=Math.abs(q.c-p.c)*u;if(dd<.05||dd>.6)continue;const lo=Math.max(p.a,q.a),hi=Math.min(p.b,q.b);if(hi-lo<.5*(p.b-p.a))continue;if(dd<bd){bd=dd;best={lo,hi,c1:Math.min(p.c,q.c),c2:Math.max(p.c,q.c)}}}
    if(best){const{lo,hi,c1,c2}=best,pts=p.h?[{x:lo,y:c1},{x:hi,y:c1},{x:hi,y:c2},{x:lo,y:c2},{x:lo,y:c1}]:[{x:c1,y:lo},{x:c2,y:lo},{x:c2,y:hi},{x:c1,y:hi},{x:c1,y:lo}];out.push({pts,c:[0,0,0],band:true})}}
  return out}
function dxfRender(geo,u){const s=Math.min(u/.01,4000/Math.max(geo.w,geo.h)),cv=document.createElement('canvas');cv.width=Math.ceil(geo.w*s);cv.height=Math.ceil(geo.h*s);const x=cv.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cv.width,cv.height);
  x.fillStyle='#777';for(const f of geo.fills){if(f.band)continue;x.beginPath();f.pts.forEach((p,i)=>i?x.lineTo(p.x*s,p.y*s):x.moveTo(p.x*s,p.y*s));x.fill()}
  x.lineCap='round';for(const sg of geo.segs){x.strokeStyle=sg.wall?'#000':'#555';x.lineWidth=sg.wall?1.6:1;x.beginPath();x.moveTo(sg.x1*s,sg.y1*s);x.lineTo(sg.x2*s,sg.y2*s);x.stroke()}
  x.fillStyle='#000';for(const t of geo.texts){const fs=Math.max(8,t.sz*s);x.font=fs+'px sans-serif';x.fillText(t.s,t.x*s,t.y*s)}return{cv,s}}
function dxfChoose(geo,cls){return new Promise(res=>{const dl=$('#bgDlg');dl.innerHTML=`<form class="dl" method="dialog"><div><h2>Alege planul</h2><p class="muted" style="margin:0">Desenul are ${cls.length} planuri. Atinge planul nivelului „${esc((P.levels.find(l=>l.id===P.lvCur)||{}).name||'')}”.</p></div><div class="bgpages" id="bgPages"></div><div class="bar" style="justify-content:flex-end"><button class="btn" type="button" data-bgp="0">Renunță</button></div></form>`;
  dl.onclick=e=>{const b=e.target.closest('[data-bgp]');if(!b)return;dl.close();res(+b.dataset.bgp)};if(!dl.open)dl.showModal();
  cls.slice(0,12).forEach((b,i)=>{const w=b.x1-b.x0,h=b.y1-b.y0,s=150/Math.max(w,h),c=document.createElement('canvas');c.width=Math.ceil(w*s);c.height=Math.ceil(h*s);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.strokeStyle='#000';x.lineWidth=1;x.beginPath();
    for(const sg of geo.segs){if(sg.x1<b.x0||sg.x1>b.x1||sg.y1<b.y0||sg.y1>b.y1)continue;x.moveTo((sg.x1-b.x0)*s,(b.y1-sg.y1)*s);x.lineTo((sg.x2-b.x0)*s,(b.y1-sg.y2)*s)}x.stroke();
    const bt=document.createElement('button');bt.type='button';bt.className='bgpage';bt.dataset.bgp=i+1;bt.append(c);const sp=document.createElement('span');sp.textContent='Planul '+(i+1);bt.append(sp);$('#bgPages').append(bt)})})}
async function dxfImport(f,busy){const d=dxfParse(await dxfText(f)),all=dxfGeo(d);if(!all.segs.length)throw new Error('Fișierul DXF nu conține linii. Dacă e DWG, salvează-l din AutoCAD ca DXF.');
  const u=dxfUnits(d,all),cls=dxfClusters(all,u);let n=1;if(cls.length>1){n=await dxfChoose(all,cls);if(!n)return null}
  busy.innerHTML='<div class="dl"><h2>Citesc planul…</h2><p class="muted" style="margin:0">Caut pereții, ușile și ferestrele.</p></div>';if(!busy.open)busy.showModal();await new Promise(r=>setTimeout(r,50));
  const geo=dxfCrop(all,cls[n-1],1/u);geo.fills.push(...dxfWallBands(geo,u));const vp={width:geo.w,height:geo.h},mk=pdfMask(geo,vp,u),r=dxfRender(geo,u);
  return{cvs:r.cv,mpp:u/r.s,mk,texts:geo.texts.filter(t=>/[a-zăâîșț]{3,}/i.test(t.s)).map(t=>({s:t.s,u:t.x*r.s,v:t.y*r.s})),info:{scale:null,cote:0,src:'dxf',unit:Math.round(u*1000)===1?'mm':Math.round(u*100)===1?'cm':u===1?'m':'in'}}}
function bgPick(){const i=document.createElement('input');i.type='file';i.accept='application/pdf,.pdf,.dxf,image/*';i.onchange=()=>{const f=i.files&&i.files[0];if(f)bgImport(f)};i.click()}
function bgChoosePage(doc){return new Promise(async res=>{const dl=$('#bgDlg');dl.innerHTML=`<form class="dl" method="dialog"><div><h2>Alege pagina</h2><p class="muted" style="margin:0">PDF-ul are ${doc.numPages} pagini. Atinge pagina cu planul nivelului „${esc((P.levels.find(l=>l.id===P.lvCur)||{}).name||'')}”.</p></div><div class="bgpages" id="bgPages"></div><div class="bar" style="justify-content:flex-end"><button class="btn" type="button" data-bgp="0">Renunță</button></div></form>`;
  dl.onclick=e=>{const b=e.target.closest('[data-bgp]');if(!b)return;dl.close();res(+b.dataset.bgp)};if(!dl.open)dl.showModal();
  for(let n=1;n<=Math.min(doc.numPages,12);n++){const pg=await doc.getPage(n),v=pg.getViewport({scale:1}),s=150/Math.max(v.width,v.height),c=document.createElement('canvas'),vv=pg.getViewport({scale:s});c.width=vv.width;c.height=vv.height;await pg.render({canvasContext:c.getContext('2d'),viewport:vv}).promise;
    const b=document.createElement('button');b.type='button';b.className='bgpage';b.dataset.bgp=n;b.append(c);const sp=document.createElement('span');sp.textContent='Pagina '+n;b.append(sp);const host=$('#bgPages');if(!host)return;host.append(b)}})}
async function bgImport(f){
  const busy=$('#bgDlg');try{
    let cvs,mpp,mk,texts=[],info={name:f.name};
    if(/\.dxf$/i.test(f.name)){toast('Citesc desenul DXF…');const r=await dxfImport(f,busy);if(!r){if(busy.open)busy.close();return}cvs=r.cvs;mpp=r.mpp;mk=r.mk;texts=r.texts;Object.assign(info,r.info)}
    else if(/pdf/i.test(f.type)||/\.pdf$/i.test(f.name)){
      toast('Citesc planul…');await loadPdfJs();const doc=await pdfjsLib.getDocument({data:new Uint8Array(await f.arrayBuffer())}).promise;
      const n=doc.numPages>1?await bgChoosePage(doc):1;if(!n)return;
      busy.innerHTML='<div class="dl"><h2>Citesc planul…</h2><p class="muted" style="margin:0">Caut pereții și scara din cote. Durează câteva secunde.</p></div>';if(!busy.open)busy.showModal();await new Promise(r=>setTimeout(r,50));
      const page=await doc.getPage(n),vp=page.getViewport({scale:1}),geo=await pdfVectors(page,vp),tx=pdfTexts(await page.getTextContent(),vp),sc=pdfScale(geo.segs,tx);
      const mppt=sc?sc.mppt:50*PT_M,pxpt=clamp(mppt/.01,1,3.5),v2=page.getViewport({scale:Math.min(pxpt,4000/Math.max(vp.width,vp.height))});
      cvs=document.createElement('canvas');cvs.width=Math.ceil(v2.width);cvs.height=Math.ceil(v2.height);await page.render({canvasContext:cvs.getContext('2d'),viewport:v2}).promise;
      mpp=mppt/v2.scale;mk=pdfMask(geo,vp,mppt);texts=tx.filter(t=>/[a-zăâîșț]{3,}/i.test(t.s)).map(t=>({s:t.s,u:t.x*v2.scale,v:t.y*v2.scale}));Object.assign(info,{page:n,scale:sc?sc.n:null,cote:sc?sc.k:0})}
    else{const img=new Image();img.src=URL.createObjectURL(f);await img.decode();const s=Math.min(1,4000/Math.max(img.naturalWidth,img.naturalHeight));cvs=document.createElement('canvas');cvs.width=Math.round(img.naturalWidth*s);cvs.height=Math.round(img.naturalHeight*s);const x=cvs.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,cvs.width,cvs.height);x.drawImage(img,0,0,cvs.width,cvs.height);
      mpp=15/cvs.width;mk=rasterMask(cvs,mpp);Object.assign(info,{scale:null,cote:0})}
    const blob=await new Promise(r=>inkify(cvs).toBlob(r,'image/png'));
    const prev=bgMeta(),m={x:prev?prev.x:0,y:prev?prev.y:0,mpp,mmpp:mpp*cvs.width/mk.mw,w:cvs.width,h:cvs.height,op:prev?prev.op:.55,...info};
    await bgIdb('put',bgKey(P.id,P.lvCur),{img:blob,mask:mk.mask,mw:mk.mw,mh:mk.mh,texts,wins:mk.win||[],dia:mk.dia||[]});
    if(!P.bgs)P.bgs={};P.bgs[P.lvCur]=m;delete bgc[bgKey(P.id,P.lvCur)];if(busy.open)busy.close();
    const c=bgEnsure();for(let i=0;i<40&&c.state==='loading';i++)await new Promise(r=>setTimeout(r,50));
    const fresh=!P.rooms.length;if(fresh&&c.state==='ok'){const bb=mainBox(c.mask,c.mw,c.mh,m.mmpp);fitBox({x0:m.x+bb.x0*m.mmpp,y0:m.y+bb.y0*m.mmpp,x1:m.x+bb.x1*m.mmpp,y1:m.y+bb.y1*m.mmpp})}changed();
    if(m.scale||m.src==='dxf'){if(fresh&&c.state==='ok')bgBuildPlan();else{setTool('room');renderBgDlg();toast(`Planul e importat la scara 1:${m.scale}, calculată din ${m.cote} cote.`)}}
    else{toast('Nu am găsit cote în plan. Calibrează scara: atinge capetele unei distanțe cunoscute.');bgStart('cal')}
  }catch(e){if(busy.open)busy.close();toast('Nu am putut citi fișierul. '+(e&&e.message||''))}}
function bgStart(mo){bgMode=mo;bgCal=[];renderSelbar();draw()}
function bgEnd(){bgMode=null;bgCal=[];renderSelbar();draw()}
function bgDown(x,y){if(!bgMode)return false;const m=bgMeta();if(!m){bgEnd();return false}
  if(bgMode==='move'){gest={k:'bgMove',x0:x,y0:y,mx:m.x,my:m.y,moved:false};return true}
  bgCal.push({x,y});draw();if(bgCal.length<2)return true;
  const d=Math.hypot(bgCal[1].x-bgCal[0].x,bgCal[1].y-bgCal[0].y);const v=prompt('Cât este distanța reală între cele două puncte? Scrie în centimetri.',Math.round(d*100));
  if(v!=null&&+String(v).replace(',','.')>0&&d>.01){const f=(+String(v).replace(',','.')/100)/d,ax=bgCal[0].x,ay=bgCal[0].y;m.x=ax-(ax-m.x)*f;m.y=ay-(ay-m.y)*f;m.mpp*=f;m.mmpp*=f;m.scale=null;changed();toast('Scara a fost calibrată.')}
  bgEnd();return true}
function bgMoveTo(g,x,y){const m=bgMeta();if(!m)return;g.moved=true;m.x=+(g.mx+x-g.x0).toFixed(3);m.y=+(g.my+y-g.y0).toFixed(3);draw()}
const ROOMW=/(living|sufragerie|camera de zi|dormitor|camera|bucatarie|baie|wc|toaleta|hol|holul|birou|debara|camara|dressing|terasa|patio|garaj|vestiar|scara|casa scarii|spalatorie|logie|balcon|centrala|tehnic|intrare|foaier|loc de joaca|studio|oficiu)/;
function bgOcc(c,m){const mw=c.mw,mh=c.mh,occ=new Uint8Array(mw*mh);for(const r of P.rooms){const a=Math.max(0,Math.round((r.x-m.x)/m.mmpp)+1),b=Math.min(mw-1,Math.round((r.x+r.w-m.x)/m.mmpp)-1),t=Math.max(0,Math.round((r.y-m.y)/m.mmpp)+1),u=Math.min(mh-1,Math.round((r.y+r.h-m.y)/m.mmpp)-1);for(let yy=t;yy<=u;yy++)if(b>=a)occ.fill(1,yy*mw+a,yy*mw+b+1)}return occ}
function bgRect(c,m,px,py,occ){const mw=c.mw,mh=c.mh,mk=c.mask;if(px<1||py<1||px>=mw-1||py>=mh-1)return{err:'out'};
  const fr=(X,Y)=>!mk[Y*mw+X]&&!occ[Y*mw+X];if(!fr(px,py))return{err:occ[py*mw+px]?'occ':'wall'};
  const lim=Math.round(14/m.mmpp),up=new Int32Array(mw).fill(-1),dn=new Int32Array(mw).fill(-1);
  const col=X=>{if(up[X]<0){let u=0;while(u<lim&&py-u-1>=0&&fr(X,py-u-1))u++;let d=0;while(d<lim&&py+d+1<mh&&fr(X,py+d+1))d++;up[X]=fr(X,py)?u:-2;dn[X]=d}return up[X]};
  const R0=Math.round(.3/m.mmpp),hitH=(Y,X,dir)=>{for(let k=1;k<=R0;k++){const yy=Y+dir*k;if(yy<0||yy>=mh)return false;if(mk[yy*mw+X]||occ[yy*mw+X])return true}return false},hitV=(X,Y,dir)=>{for(let k=1;k<=R0;k++){const xx=X+dir*k;if(xx<0||xx>=mw)return false;if(mk[Y*mw+xx]||occ[Y*mw+xx])return true}return false};
  const covH=(Y,a,b,dir)=>{let n=0,c=0;for(let X=a;X<=b;X+=2){c++;if(hitH(Y,X,dir))n++}return n/Math.max(1,c)},covV=(X,a,b,dir)=>{let n=0,c=0;for(let Y=a;Y<=b;Y+=2){c++;if(hitV(X,Y,dir))n++}return n/Math.max(1,c)};
  const score=(L,Rr,u,d)=>{const a=(Rr-L+1)*(u+d+1),t=py-u,b=py+d;const cv=Math.min(covH(t,L,Rr,-1),covH(b,L,Rr,1),covV(L,t,b,-1),covV(Rr,t,b,1));return cv>=.5?a:a*.02};
  let L=px,Rr=px,cu=col(px),cd=dn[px],best={a:score(px,px,cu,cd),L,Rr,u:cu,d:cd};
  while(true){const nl=L-1>=0&&Math.abs(L-1-px)<lim&&col(L-1)>=0?L-1:-1,nr=Rr+1<mw&&Math.abs(Rr+1-px)<lim&&col(Rr+1)>=0?Rr+1:-1;if(nl<0&&nr<0)break;
    const hl=nl<0?-1:Math.min(cu,up[nl])+Math.min(cd,dn[nl]),hr=nr<0?-1:Math.min(cu,up[nr])+Math.min(cd,dn[nr]);
    if(hl>=hr){L=nl;cu=Math.min(cu,up[nl]);cd=Math.min(cd,dn[nl])}else{Rr=nr;cu=Math.min(cu,up[nr]);cd=Math.min(cd,dn[nr])}
    const a=score(L,Rr,cu,cd);if(a>best.a)best={a,L,Rr,u:cu,d:cd};if(cu+cd<6)break}
  let x0=best.L,x1=best.Rr+1,y0=py-best.u,y1=py+best.d+1;if(!c.box)c.box=mainBox(mk,mw,mh,m.mmpp);
  x0=Math.max(x0,c.box.x0);x1=Math.min(x1,c.box.x1);y0=Math.max(y0,c.box.y0);y1=Math.min(y1,c.box.y1);if(x1-x0<2||y1-y0<2)return{err:'out'};
  const tt=py-best.u,bb=py+best.d,sides=[covH(tt,best.L,best.Rr,-1),covH(bb,best.L,best.Rr,1),covV(best.L,tt,bb,-1),covV(best.Rr,tt,bb,1)];
  return{x0,x1,y0,y1,good:best.a>=(best.Rr-best.L+1)*(best.u+best.d+1)*.5,s3:sides.filter(v=>v>=.5).length>=3}}
function bgRoomFrom(c,m,q,extra=[]){const mw=c.mw,mh=c.mh,mk=c.mask,{x0,x1,y0,y1}=q;
  const thick=(side)=>{const vals=[];for(const f of[.25,.5,.75]){let n=0;const maxn=Math.round(.7/m.mmpp);if(side==='l'||side==='r'){const Y=Math.round(y0+(y1-y0)*f),X0=side==='l'?x0-1:x1;for(let k=0;k<maxn;k++){const X=side==='l'?X0-k:X0+k;if(X<0||X>=mw||!mk[Y*mw+X])break;n++}}else{const X=Math.round(x0+(x1-x0)*f),Y0=side==='t'?y0-1:y1;for(let k=0;k<maxn;k++){const Y=side==='t'?Y0-k:Y0+k;if(Y<0||Y>=mh||!mk[Y*mw+X])break;n++}}vals.push(n)}vals.sort((a,b)=>a-b);const v=vals[1]*m.mmpp;return v>=.04&&v<.68?v/2:0};
  let rx0=m.x+x0*m.mmpp-thick('l'),rx1=m.x+x1*m.mmpp+thick('r'),ry0=m.y+y0*m.mmpp-thick('t'),ry1=m.y+y1*m.mmpp+thick('b');
  const ed=[];for(const r of[...P.rooms,...extra])ed.push(['x',r.x],['x',r.x+r.w],['y',r.y],['y',r.y+r.h]);const sn=(v,ax)=>{let b=v,bd=.12;for(const[a,e]of ed)if(a===ax&&Math.abs(e-v)<bd){bd=Math.abs(e-v);b=e}return+b.toFixed(2)};
  rx0=sn(rx0,'x');rx1=sn(rx1,'x');ry0=sn(ry0,'y');ry1=sn(ry1,'y');const w=+(rx1-rx0).toFixed(2),h=+(ry1-ry0).toFixed(2);
  if(w<.6||h<.6)return null;
  const norm2=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');let name=null;
  for(const t of c.texts){const tx=m.x+t.u*m.mpp,ty=m.y+t.v*m.mpp;if(tx>rx0&&tx<rx1&&ty>ry0&&ty<ry1&&ROOMW.test(norm2(t.s))){name=t.s.charAt(0)+t.s.slice(1).toLowerCase();break}}
  return{x:+rx0.toFixed(2),y:+ry0.toFixed(2),w,h,name,type:name?guessType(name):null}}
function bgAutoRoom(x,y){const m=bgMeta();if(!m||m.hide)return false;const c=bgEnsure();if(!c||c.state!=='ok')return false;
  const px=Math.round((x-m.x)/m.mmpp),py=Math.round((y-m.y)/m.mmpp),q=bgRect(c,m,px,py,bgOcc(c,m));
  if(q.err==='out'&&(px<1||py<1||px>=c.mw-1||py>=c.mh-1))return false;
  if(q.err){toast(q.err==='occ'?'Aici există deja o cameră.':q.err==='wall'?'Ai atins un perete. Atinge în interiorul camerei.':'Ai atins în afara casei. Atinge în interiorul unei camere.');return true}
  const g=bgRoomFrom(c,m,q);if(!g){toast('Spațiul e prea mic pentru o cameră. Atinge în mijlocul camerei.');return true}
  snap();const r={id:uid(),name:g.name||'Cameră '+(P.rooms.filter(z=>!z.of).length+1),type:g.type||'altul',x:g.x,y:g.y,w:g.w,h:g.h};P.rooms.push(r);sel={kind:'room',id:r.id};changed(true);
  toast(`Am adăugat ${r.name}: ${String(r.w).replace('.',',')} × ${String(r.h).replace('.',',')} m. Atinge următoarea cameră.`);return true}
function bgAutoAll(silent){const m=bgMeta(),c=bgEnsure();if(!m||!c||c.state!=='ok'){toast('Importă întâi planul pe acest dispozitiv.');return 0}
  if(!c.box)c.box=mainBox(c.mask,c.mw,c.mh,m.mmpp);const st=Math.max(4,Math.round(.5/m.mmpp)),min2=1.2/(m.mmpp*m.mmpp),minS=.8/m.mmpp,added=[];let first=true;
  for(let pass=0;pass<3;pass++){const occ=bgOcc(c,m);for(const a of added){const r=a;const ax=Math.max(0,Math.round((r.x-m.x)/m.mmpp)+1),bx=Math.min(c.mw-1,Math.round((r.x+r.w-m.x)/m.mmpp)-1),t=Math.max(0,Math.round((r.y-m.y)/m.mmpp)+1),u=Math.min(c.mh-1,Math.round((r.y+r.h-m.y)/m.mmpp)-1);for(let yy=t;yy<=u;yy++)if(bx>=ax)occ.fill(1,yy*c.mw+ax,yy*c.mw+bx+1)}
    const cand=[];for(let py=c.box.y0+st/2|0;py<c.box.y1;py+=st)for(let px=c.box.x0+st/2|0;px<c.box.x1;px+=st){if(c.mask[py*c.mw+px]||occ[py*c.mw+px])continue;if(cand.some(q=>px>=q.x0&&px<q.x1&&py>=q.y0&&py<q.y1))continue;const q=bgRect(c,m,px,py,occ);if(q.err)continue;if(!q.good||bgOut(c,m,q)){cand.push({...q,bad:1});continue}const w=q.x1-q.x0,h=q.y1-q.y0;if(w*h<min2||Math.min(w,h)<minS)continue;q.a=w*h;cand.push(q)}
    const cg=cand.filter(q=>!q.bad);cg.sort((p,q)=>q.a-p.a);const acc=[];for(const q of cg){if(acc.some(o=>q.x0<o.x1-1&&q.x1>o.x0+1&&q.y0<o.y1-1&&q.y1>o.y0+1))continue;acc.push(q)}
    if(!acc.length)break;for(const q of acc){const g=bgRoomFrom(c,m,q,added);if(!g)continue;if(first){snap();first=false}const r={id:uid(),name:g.name||'',type:g.type||'altul',x:g.x,y:g.y,w:g.w,h:g.h};added.push(r)}
    P.rooms.push(...added.filter(r=>!P.rooms.includes(r)))}
  {let n=P.rooms.filter(z=>!z.of&&!added.includes(z)).length;for(const r of added.slice().sort((p,q)=>p.y-q.y||p.x-q.x))if(!r.name)r.name='Cameră '+(++n)}
  if(silent)return added.length;sel=null;changed(true);
  toast(added.length?`Am găsit ${added.length} ${added.length===1?'cameră':'camere'}. Verifică-le: atinge o cameră ca s-o redenumești, trage de margini ca s-o ajustezi, iar pe cele în plus (terase, curte) le poți șterge.`:'Nu am găsit camere noi. Atinge camerele una câte una.')}
function bgOpenings(c,m){const mk=c.mask,mw=c.mw,mh=c.mh,mm=m.mmpp,L={},out={doors:[],wins:[],gols:[]};
  for(const r of P.rooms)for(const e of rEdges(r)){const k=e.o+Math.round(e.c*50);(L[k]||(L[k]=[])).push(e)}
  const half=Math.round(.15/mm),wallAt=(o,cc,t)=>{const X=Math.round(((o==='h'?t:cc)-m.x)/mm),Y=Math.round(((o==='h'?cc:t)-m.y)/mm);for(let k=-half;k<=half;k++){const x=o==='h'?X:X+k,y=o==='h'?Y+k:Y;if(x<0||y<0||x>=mw||y>=mh||mk[y*mw+x])return true}return false};
  for(const es of Object.values(L)){const o=es[0].o,cc=+(es.reduce((a,e)=>a+e.c,0)/es.length).toFixed(2),iv=es.map(e=>[e.lo,e.hi]).sort((a,b)=>a[0]-b[0]),sp=[];for(const v of iv){const l=sp[sp.length-1];if(l&&v[0]<=l[1]+.02)l[1]=Math.max(l[1],v[1]);else sp.push([...v])}
    for(const[a,b]of sp){let r0=null;for(let t=a+.12;t<=b-.12+1e-9;t+=mm){const open=!wallAt(o,cc,t);if(open&&r0==null)r0=t;if((!open||t+mm>b-.12)&&r0!=null){const r1=open?t:t-mm,len=r1-r0+mm,tm=(r0+r1)/2,sd=es.filter(e=>tm>=e.lo-.01&&tm<=e.hi+.01);
      const cx=o==='h'?tm:cc,cy=o==='h'?cc:tm,inC=P.rooms.some(r=>chOf(r)&&[[.06,0],[-.06,0],[0,.06],[0,-.06]].some(([dx,dy])=>inCut(r,cx+dx,cy+dy)));if(inC){r0=null;continue}
      if(len>=.55&&len<=1.35)out.doors.push({id:uid(),o,c:cc,t:+tm.toFixed(2),w:clamp(Math.round(len*20)/20,.6,1.2),hinge:0,s:sd[0]?sd[0].s:1,kind:sd.length>1?'int':'ext'});
      else if(len>1.35&&sd.length>1)out.gols.push({id:uid(),k:'gol',o,c:cc,a:+r0.toFixed(2),b:+(r1+mm).toFixed(2)});r0=null}}}}
  for(const w of c.wins||[]){const o=w.h?'h':'v',cc=(o==='h'?m.y:m.x)+w.c*mm,t0=(o==='h'?m.x:m.y)+w.a*mm,t1=(o==='h'?m.x:m.y)+w.b*mm,tm=(t0+t1)/2;let best=null,bd=.35;
    for(const es of Object.values(L))for(const e of es)if(e.o===o&&tm>=e.lo&&tm<=e.hi&&Math.abs(e.c-cc)<bd){bd=Math.abs(e.c-cc);best=e}
    if(best&&!out.wins.some(q=>q.o===o&&Math.abs(q.c-best.c)<.05&&Math.abs(q.t-tm)<.3))out.wins.push({id:uid(),o,c:best.c,t:+tm.toFixed(2),w:+Math.max(.4,t1-t0).toFixed(2),sill:.9,hg:1.2,kind:'geam'})}
  return out}
function bgExt(c,m){if(c.ext)return c.ext;const mw=c.mw,mh=c.mh,d=morph(c.mask,mw,mh,Math.round(.9/m.mmpp),true),ext=new Uint8Array(mw*mh),st=[];
  for(let x=0;x<mw;x++){st.push(x,(mh-1)*mw+x)}for(let y=0;y<mh;y++){st.push(y*mw,y*mw+mw-1)}
  while(st.length){const j=st.pop();if(ext[j]||d[j])continue;ext[j]=1;const x=j%mw;if(j>=mw)st.push(j-mw);if(j<mw*(mh-1))st.push(j+mw);if(x>0)st.push(j-1);if(x<mw-1)st.push(j+1)}
  return c.ext=ext}
const bgOut=(c,m,q)=>{const ext=bgExt(c,m);let n=0,k=0;for(let i=1;i<4;i++)for(let j=1;j<4;j++){const x=Math.round(q.x0+(q.x1-q.x0)*i/4),y=Math.round(q.y0+(q.y1-q.y0)*j/4);k++;if(ext[y*c.mw+x])n++}return n/k>=.3};
function bgShapes(c,m,base){const mk=c.mask,mw=c.mw,mh=c.mh,mm=m.mmpp,half=Math.round(.15/mm);
  const wallAt=(o,cc,t)=>{const X=Math.round(((o==='h'?t:cc)-m.x)/mm),Y=Math.round(((o==='h'?cc:t)-m.y)/mm);for(let k=-half;k<=half;k++){const x=o==='h'?X:X+k,y=o==='h'?Y+k:Y;if(x<0||y<0||x>=mw||y>=mh||mk[y*mw+x])return true}return false};
  const shared=(a,b)=>{const E=r=>[['h',r.y,r.x,r.x+r.w],['h',r.y+r.h,r.x,r.x+r.w],['v',r.x,r.y,r.y+r.h],['v',r.x+r.w,r.y,r.y+r.h]];for(const p of E(a))for(const q of E(b))if(p[0]===q[0]&&Math.abs(p[1]-q[1])<.03){const lo=Math.max(p[2],q[2]),hi=Math.min(p[3],q[3]);if(hi-lo>.3)return{o:p[0],c:(p[1]+q[1])/2,a:lo,b:hi}}return null};
  const openLen=g=>{let n=0,run=0,best=0;for(let t=g.a+mm/2;t<g.b;t+=mm){if(wallAt(g.o,g.c,t)){run=0}else{n++;run++;if(run>best)best=run}}return{frac:n*mm/(g.b-g.a),run:best*mm}};
  const pieces=[],own=new Map();for(const r of base)own.set(r,r);
  if(!c.box)c.box=mainBox(mk,mw,mh,mm);const st=Math.max(3,Math.round(.3/mm));
  for(let pass=0;pass<3;pass++){const occ=bgOcc(c,m),tried=new Uint8Array(mw*mh),cand=[];
    for(let py=c.box.y0+1;py<c.box.y1;py+=st)for(let px=c.box.x0+1;px<c.box.x1;px+=st){if(mk[py*mw+px]||occ[py*mw+px]||tried[py*mw+px])continue;const q=bgRect(c,m,px,py,occ);if(q.err)continue;for(let yy=q.y0;yy<q.y1;yy+=2)tried.fill(1,yy*mw+q.x0,yy*mw+q.x1);
      const w=(q.x1-q.x0)*mm,h=(q.y1-q.y0)*mm;if(!q.s3||w*h<3||Math.min(w,h)<1.2||bgOut(c,m,q))continue;cand.push({...q,a:w*h})}
    if(!cand.length)break;cand.sort((p,q)=>q.a-p.a);const q=cand[0],g=bgRoomFrom(c,m,q,[]);if(!g)break;const r={id:uid(),name:g.name||'',type:g.type||'altul',x:g.x,y:g.y,w:g.w,h:g.h};P.rooms.push(r);base.push(r);own.set(r,r)}
  for(let pass=0;pass<4;pass++){const occ=bgOcc(c,m),tried=new Uint8Array(mw*mh);let got=0;
    for(let py=c.box.y0+1;py<c.box.y1;py+=st)for(let px=c.box.x0+1;px<c.box.x1;px+=st){if(mk[py*mw+px]||occ[py*mw+px]||tried[py*mw+px])continue;const q=bgRect(c,m,px,py,occ);if(q.err)continue;for(let yy=q.y0;yy<q.y1;yy+=2)tried.fill(1,yy*mw+q.x0,yy*mw+q.x1);const w=q.x1-q.x0,h=q.y1-q.y0;if(w*h*mm*mm<.25||Math.min(w,h)*mm<.4||bgOut(c,m,q))continue;
      const g=bgRoomFrom(c,m,q,[]);if(!g)continue;let host=null,hl=0;for(const r of P.rooms){if(!own.has(r))continue;const sg=shared(g,r);if(!sg)continue;const ol=openLen(sg);if(ol.run>=1.25&&ol.frac>=.5&&sg.b-sg.a>hl){hl=sg.b-sg.a;host=r}}
      if(!host)continue;const r={id:uid(),name:'',type:'altul',x:g.x,y:g.y,w:g.w,h:g.h};P.rooms.push(r);own.set(r,own.get(host));pieces.push(r);got++;for(let yy=q.y0;yy<q.y1;yy++)occ.fill(1,yy*mw+q.x0,yy*mw+q.x1)}
    if(!got)break}
  const all=[...base,...pieces],par=new Map(all.map(r=>[r,own.get(r)||r])),find=r=>{while(par.get(r)!==r)r=par.get(r);return r};
  for(let i=0;i<all.length;i++)for(let j=i+1;j<all.length;j++){const sg=shared(all[i],all[j]);if(!sg)continue;const ol=openLen(sg);if(ol.run>=1.3&&ol.frac>=.6){const a=find(all[i]),b=find(all[j]);if(a!==b)par.set(b,a)}}
  const groups=new Map();for(const r of all){const k=find(r);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(r)}
  let shaped=0;for(const g of groups.values()){if(g.length<2)continue;g.sort((a,b)=>b.w*b.h-a.w*a.h);const root=g[0];if(!root.name)root.name=(g.find(r=>r.name)||{}).name||'';shaped++;
    for(const r of g.slice(1)){r.of=root.id;r.name=root.name;r.type=root.type;for(const y of g){if(y===r||(y!==root&&y.of!==root.id))continue;const sg=sharedSeg(r,y);if(sg)P.struct.push({id:uid(),k:'gol',auto:true,of:r.id,...sg})}}}
  let n=P.rooms.filter(z=>!z.of&&z.name&&!all.includes(z)).length;for(const r of all.filter(z=>!z.of).sort((p,q)=>p.y-q.y||p.x-q.x))if(!r.name)r.name='Cameră '+(++n);for(const r of all)if(r.of){const rt=all.find(z=>z.id===r.of);if(rt)r.name=rt.name}
  return{pieces:pieces.length,shaped}}
function bgBuildPlan(){const dl=$('#bgDlg');dl.onclick=null;dl.innerHTML='<div class="dl"><h2>Creez planul…</h2><p class="muted" style="margin:0">Caut camerele, ușile și ferestrele. Durează câteva secunde.</p></div>';if(!dl.open)dl.showModal();setTimeout(()=>{try{bgBuildPlan0()}finally{if(dl.open&&/Creez planul/.test(dl.textContent))dl.close()}},60)}
function bgChamfers(c,m,news){if(!c.dia||!c.dia.length)return 0;const mm=m.mmpp,D=c.dia.map(d=>({a:{x:m.x+d.x1*mm,y:m.y+d.y1*mm},b:{x:m.x+d.x2*mm,y:m.y+d.y2*mm}}));let n=0;
  const roots=news.filter(r=>!r.of&&P.rooms.includes(r));
  for(const root of roots){const grp=P.rooms.filter(z=>z.id===root.id||z.of===root.id),x0=Math.min(...grp.map(z=>z.x)),y0=Math.min(...grp.map(z=>z.y)),x1=Math.max(...grp.map(z=>z.x+z.w)),y1=Math.max(...grp.map(z=>z.y+z.h)),ar=grp.reduce((t,z)=>t+z.w*z.h,0);
    for(const d of D){let ph=null,pv=null;for(const p of[d.a,d.b]){const nh=[y0,y1].find(Y=>Math.abs(p.y-Y)<.6&&p.x>x0-.6&&p.x<x1+.6),nv=[x0,x1].find(X=>Math.abs(p.x-X)<.6&&p.y>y0-.6&&p.y<y1+.6);const dh=nh===undefined?9:Math.abs(p.y-nh),dv=nv===undefined?9:Math.abs(p.x-nv);if(dh<=dv&&nh!==undefined&&!ph)ph={x:p.x,y:nh,ry:p.y};else if(nv!==undefined&&!pv)pv={x:nv,y:p.y,rx:p.x};else if(nh!==undefined&&!ph)ph={x:p.x,y:nh,ry:p.y}}
      if(!ph||!pv)continue;const k=(ph.y===y0?'t':'b')+(pv.x===x0?'l':'r'),others=P.rooms.filter(z=>!grp.includes(z)),snp=(v,ax)=>{let b=v,bd=.2;for(const z of others)for(const e of ax==='x'?[z.x,z.x+z.w]:[z.y,z.y+z.h])if(Math.abs(e-v)<bd){bd=Math.abs(e-v);b=e}return b};
      let X0=x0,X1=x1,Y0=y0,Y1=y1;if(k[1]==='l')X0=snp(Math.min(x0,pv.rx),'x');else X1=snp(Math.max(x1,pv.rx),'x');if(k[0]==='t')Y0=snp(Math.min(y0,ph.ry),'y');else Y1=snp(Math.max(y1,ph.ry),'y');
      if(others.some(z=>{const ox=Math.min(z.x+z.w,X1)-Math.max(z.x,X0),oy=Math.min(z.y+z.h,Y1)-Math.max(z.y,Y0);return ox>.05&&oy>.05&&ox*oy>.15}))continue;
      const cx=k[1]==='l'?X0:X1,cy=k[0]==='t'?Y0:Y1,a=+clamp(Math.abs(ph.x-cx),0,X1-X0).toFixed(2),b=+clamp(Math.abs(pv.y-cy),0,Y1-Y0).toFixed(2);if(a<.25||b<.25||a>(X1-X0)-.3||b>(Y1-Y0)-.3)continue;
      const want=(X1-X0)*(Y1-Y0)-a*b/2;if(Math.abs(ar-want)>want*.45)continue;
      const kids=grp.filter(z=>z!==root),kid=new Set(kids.map(z=>z.id));P.rooms=P.rooms.filter(z=>!kid.has(z.id));P.struct=P.struct.filter(g=>!(g.k==='gol'&&g.auto&&kid.has(g.of)));
      Object.assign(root,{x:+X0.toFixed(2),y:+Y0.toFixed(2),w:+(X1-X0).toFixed(2),h:+(Y1-Y0).toFixed(2),ch:{k,a,b}});
      const g=diagOf(root),mk=c.mask;let run=0,best=0;for(let t=.05;t<g.len-.05;t+=mm){const X=Math.round((g.p.x+g.ux*t-m.x)/mm),Y=Math.round((g.p.y+g.uy*t-m.y)/mm);let wall=false;for(let l=-4;l<=4;l++){const xx=Math.round(X+g.nx*l),yy=Math.round(Y+g.ny*l);if(xx>=0&&yy>=0&&xx<c.mw&&yy<c.mh&&mk[yy*c.mw+xx]){wall=true;break}}if(wall)run=0;else{run++;best=Math.max(best,run)}}
      if(best*mm>=.55&&best*mm<=1.3)root.ch.door={w:+clamp(Math.round(best*mm*20)/20,.6,1.2).toFixed(2)};n++;bgTriangle(c,m,root);break}}
  return n}
function bgTriangle(c,m,room){const t=chPts(room);if(!t)return;const mk=c.mask,mm=m.mmpp,opp={tl:'br',tr:'bl',bl:'tr',br:'tl'}[room.ch.k];
  const fr={id:uid(),name:'',type:'altul',x:+Math.min(t.c.x,t.p.x).toFixed(2),y:+Math.min(t.c.y,t.q.y).toFixed(2),w:+t.a.toFixed(2),h:+t.b.toFixed(2),ch:{k:opp,a:+t.a.toFixed(2),b:+t.b.toFixed(2),fill:true}};
  const openOn=(o,cc,lo,hi)=>{let n=0,k=0;for(let v=lo+mm;v<hi-mm;v+=mm){k++;const X=Math.round(((o==='h'?v:cc)-m.x)/mm),Y=Math.round(((o==='h'?cc:v)-m.y)/mm);let w=false;for(let l=-6;l<=6;l++){const x=o==='h'?X:X+l,y=o==='h'?Y+l:Y;if(x>=0&&y>=0&&x<c.mw&&y<c.mh&&mk[y*c.mw+x]){w=true;break}}if(!w)n++}return k?n/k:0};
  const legs=[{o:'h',c:t.c.y,lo:Math.min(t.c.x,t.p.x),hi:Math.max(t.c.x,t.p.x)},{o:'v',c:t.c.x,lo:Math.min(t.c.y,t.q.y),hi:Math.max(t.c.y,t.q.y)}],nb=new Set();
  for(const L of legs){if(openOn(L.o,L.c,L.lo,L.hi)<.6)continue;for(const r of P.rooms){if(r===room||r.of===room.id)continue;const E=rEdges(r);for(const e of E)if(e.o===L.o&&Math.abs(e.c-L.c)<.08&&Math.min(e.hi,L.hi)-Math.max(e.lo,L.lo)>.1)nb.add(rootOf(P,r))}}
  if(!nb.size)return;const roots=[...nb].sort((a,b)=>groupOf(b.id).reduce((s2,z)=>s2+areaR(z),0)-groupOf(a.id).reduce((s2,z)=>s2+areaR(z),0)),root=roots[0];
  for(const o of roots.slice(1)){for(const z of P.rooms)if(z.id===o.id||z.of===o.id){z.of=root.id;z.name=root.name;z.type=root.type}}
  fr.of=root.id;fr.name=root.name;fr.type=root.type;P.rooms.push(fr);
  const grp=P.rooms.filter(z=>z.id===root.id||z.of===root.id);for(const z of grp){if(z===fr)continue;const sg=sharedSeg(fr,z);if(sg)P.struct.push({id:uid(),k:'gol',auto:true,of:fr.id,...sg});}
}
function bgBuildPlan0(){const m=bgMeta(),c=bgEnsure();if(!m||!c||c.state!=='ok'){toast('Importă întâi planul pe acest dispozitiv.');return}
  const pre=new Set(P.rooms),n=bgAutoAll(true);if(!n){setTool('room');renderBgDlg();toast('Nu am putut desluși camerele din acest plan. Atinge camerele una câte una cu unealta Cameră.');return}
  const sh=bgShapes(c,m,P.rooms.filter(r=>!pre.has(r)));const nch=bgChamfers(c,m,P.rooms.filter(r=>!pre.has(r)));const op=bgOpenings(c,m);op.gols=op.gols.filter(g=>!P.struct.some(q=>q.k==='gol'&&q.o===g.o&&Math.abs(q.c-g.c)<.05&&q.b>g.a&&q.a<g.b));P.doors.push(...op.doors.filter(d=>!P.doors.some(q=>q.o===d.o&&Math.abs(q.c-d.c)<.05&&Math.abs(q.t-d.t)<.3)));P.wins.push(...op.wins);P.struct.push(...op.gols);
  for(const d of op.doors){try{const q=doorRooms(P,d);d.kind=q.ot?'int':'ext'}catch(e){}}
  m.hide=true;sel=null;setTool('select');fit();changed(true);
  const nr=P.rooms.filter(r=>!r.of&&!pre.has(r)).length;toast(`Am creat planul ${m.src==='dxf'?'din DXF (unități: '+m.unit+')':'la scara 1:'+(m.scale||'calibrată')}: ${nr} camere${(()=>{const k=P.rooms.filter(r=>!r.of&&!pre.has(r)&&P.rooms.some(z=>z.of===r.id)).length;return k?' ('+k+' cu formă compusă)':''})()}${nch?', '+nch+' cu colț teșit':''}, ${op.doors.length} uși, ${op.wins.length} ferestre${op.gols.length?', '+op.gols.length+' goluri':''}. Verifică-l și ajustează ce e nevoie. Planul arhitectului îl vezi din Afișare → Plan arhitect.`)}
function renderBgDlg(){const dl=$('#bgDlg'),m=bgMeta(),c=m&&bgEnsure();
  dl.onclick=null;dl.innerHTML=`<form class="dl" method="dialog"><div><h2>Plan de la arhitect</h2><p class="muted" style="margin:0">${m?`${esc(m.name||'Plan')}${m.page?' · pagina '+m.page:''}${m.src==='dxf'?' · DXF, unități '+m.unit:m.scale?' · scara 1:'+m.scale:' · scară calibrată manual'}${c&&c.state==='missing'?'<br><b>Planul a fost importat pe alt dispozitiv. Importă-l din nou aici ca să-l vezi.</b>':''}`:'Importă planul în PDF sau DXF, exportat din AutoCAD sau ArchiCAD, ori o poză a planului. Scara se calculează din cote, iar apoi atingi fiecare cameră și aplicația o desenează singură.'}</p></div>
  ${m?`<label class="f">Vizibilitate<input type="range" id="bgOp" min=".1" max="1" step=".05" value="${m.op??.55}"></label>
  <label class="chk" style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="bgHide"${m.hide?'':' checked'}> Arată planul arhitectului sub desen, ca să compari</label>
  ${P.rooms.length?'':'<button class="btn pri" type="button" data-bg="auto" style="justify-content:center">Creează planul din PDF</button>'}
  <p class="muted" style="margin:0;font-size:12.5px">${P.rooms.length?'Ca să adaugi o cameră lipsă, alege unealta Cameră și atinge-o pe plan.':'Sau alege unealta Cameră și atinge camerele una câte una.'}</p>
  <div class="bar"><button class="btn" type="button" data-bg="cal">Calibrează scara</button><button class="btn" type="button" data-bg="move">Mută planul</button><button class="btn" type="button" data-bg="pick">Înlocuiește</button><button class="btn" type="button" data-bg="del" style="color:var(--bad)">Șterge planul</button></div>`:''}
  <p class="muted" style="margin:0;font-size:12px">Fișierul rămâne doar pe acest dispozitiv și nu se trimite nicăieri.</p>
  <div class="bar" style="justify-content:flex-end"><button class="btn" type="button" data-bg="x">Închide</button>${m?'':'<button class="btn pri" type="button" data-bg="pick">Alege fișierul</button>'}</div></form>`;
  if(!dl.open)dl.showModal()}
$('#bgDlg').addEventListener('click',e=>{const b=e.target.closest('[data-bg]');if(!b)return;const k=b.dataset.bg,dl=$('#bgDlg');
  if(k==='x'){dl.close();return}if(k==='pick'){dl.close();bgPick();return}
  if(k==='cal'){dl.close();bgStart('cal');toast('Atinge pe plan capetele unei cote cunoscute, de exemplu un perete cotat.');return}
  if(k==='move'){dl.close();bgStart('move');return}
  if(k==='auto'){dl.close();setTimeout(bgBuildPlan,30);return}
  if(k==='del'){if(!confirm('Ștergi planul importat de la acest nivel? Camerele desenate rămân.'))return;const key=bgKey(P.id,P.lvCur);bgIdb('del',key).catch(()=>{});delete bgc[key];delete P.bgs[P.lvCur];dl.close();changed();return}});
$('#bgDlg').addEventListener('input',e=>{const m=bgMeta();if(!m)return;if(e.target.id==='bgOp'){m.op=+e.target.value;draw()}if(e.target.id==='bgHide'){m.hide=!e.target.checked;draw()}});
$('#bgDlg').addEventListener('change',e=>{if(e.target.id==='bgOp'||e.target.id==='bgHide')save()});
async function bgDropProject(id){try{for(const k of await bgIdb('keys'))if(String(k).startsWith(id+':')){await bgIdb('del',k);delete bgc[k]}}catch(e){}}
readColors();renderTools();renderLayers();renderProjSel();renderLevels();
R=computeLv();renderIso();renderStat();
renderInspector();
const b=stage.getBoundingClientRect();W=b.width;Hh=b.height;fit();resize();
connectCloud();
{const mv=document.querySelector('meta[name="app-version"]'),APP_V=mv&&mv.content;
  if(APP_V&&/^https?:$/.test(location.protocol)){
    let snooze=0,last=0;
    const check=async()=>{if(Date.now()-last<60000||Date.now()<snooze)return;last=Date.now();try{const r=await fetch('version.json?t='+Date.now(),{cache:'no-store'});if(!r.ok)return;const j=await r.json();if(j.v&&j.v!==APP_V)$('#updBar').hidden=false}catch(e){}};
    $('#updGo').onclick=async()=>{const b=$('#updGo');b.disabled=true;b.textContent='Se salvează…';try{clearTimeout(save.t);const pb=pbody(P);if(cloud.last[P.id]!==pb){P.updated=Date.now();cloud.last[P.id]=pb;if(cloud.col)cloud.queue.add(P.id)}persist();if(cloud.col&&cloud.queue.size)await Promise.race([flush(),new Promise(r=>setTimeout(r,4000))])}catch(e){}location.reload()};
    $('#updX').onclick=()=>{$('#updBar').hidden=true;snooze=Date.now()+3600000};
    setTimeout(check,8000);setInterval(check,300000);
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')check()});
    window.addEventListener('online',check);
  }}
let authMode='in';
function setAuthMode(m){authMode=m;const T={in:['Intră în cont','Intră în cont','Creează cont nou','Proiectele tale sunt salvate în cont și le vezi doar tu, pe orice dispozitiv.'],up:['Cont nou','Creează contul','Am deja cont','Alege o parolă de cel puțin 6 caractere. Vei primi un e-mail de confirmare.'],reset:['Parolă nouă','Salvează parola',null,'Scrie parola nouă pentru contul tău.'],forgot:['Resetează parola','Trimite link de resetare','Înapoi la conectare','Îți trimitem pe e-mail un link prin care alegi o parolă nouă.'],verify:['Verifică-ți e-mailul','Am confirmat, intră în cont','Retrimite e-mailul','']}[m];
  $('#authT').textContent=T[0];$('#authGo').textContent=T[1];$('#authSw').hidden=!T[2];if(T[2])$('#authSw').textContent=T[2];$('#authH').textContent=T[3];$('#authMsg').textContent='';
  $('#authPL').hidden=m==='forgot'||m==='verify';$('#authP2L').hidden=!(m==='up'||m==='reset');$('#authE').closest('label').hidden=m==='reset'||m==='verify';$('#authE').required=m!=='reset'&&m!=='verify';
  if(m==='verify')$('#authH').innerHTML=`Ți-am trimis un link de confirmare pe <b style="color:#E8EEF3">${esc(pendEmail)}</b>.<br><br>1. Deschide e-mailul de confirmare. Dacă nu îl găsești în câteva minute, uită-te în Spam sau Promoții.<br>2. Apasă linkul de confirmare din e-mail.<br>3. Revino aici și intră în cont cu parola aleasă.`;$('#authForgot').hidden=m!=='in';
  $('#authP').autocomplete=m==='in'?'current-password':'new-password';}
const authErr=e=>{const m=(e&&e.message||'').toLowerCase();if(/invalid login/.test(m))return'E-mail sau parolă greșită.';if(/not confirmed/.test(m))return'Confirmă întâi adresa: deschide linkul din e-mailul primit la înregistrare.';if(/sending.*(confirmation|email)|not authorized|smtp/.test(m))return'Nu am putut trimite e-mailul de confirmare. Anunță administratorul aplicației.';if(/already registered|already been registered/.test(m))return'Există deja un cont cu acest e-mail. Intră în cont sau resetează parola.';if(/at least 6|password should/.test(m))return'Parola trebuie să aibă cel puțin 6 caractere.';if(/email rate limit|over_email_send_rate/.test(m+' '+(e&&e.code||'')))return'S-a atins limita de e-mailuri pe oră. Încearcă din nou peste o oră.';if(e&&e.status===429||/rate limit/.test(m))return'Prea multe încercări. Așteaptă câteva minute.';if(/fetch|network/.test(m))return'Nu există conexiune la internet.';return e&&e.message||'A apărut o eroare.'};
let pendEmail='',resendAt=0;
$('#authSw').onclick=async()=>{if(authMode!=='verify'){setAuthMode(authMode==='in'?'up':'in');return}
  const msg=$('#authMsg'),w=Math.ceil((resendAt-Date.now())/1000);if(w>0){msg.textContent=`Poți retrimite peste ${w} secunde.`;return}
  const b=$('#authSw');b.disabled=true;try{const{error}=await sb.auth.resend({type:'signup',email:pendEmail,options:{emailRedirectTo:location.origin+location.pathname}});
    if(error)msg.textContent=authErr(error);else{resendAt=Date.now()+60000;msg.textContent='Am retrimis e-mailul pe '+pendEmail+'. Verifică și Spam.'}}catch(x){msg.textContent=authErr(x)}finally{b.disabled=false}};
$('#authForgot').onclick=()=>setAuthMode('forgot');
$('#authBox').addEventListener('submit',async e=>{
  e.preventDefault();if(!sb)return;const em=$('#authE').value.trim(),pw=$('#authP').value,pw2=$('#authP2').value,msg=$('#authMsg'),go=$('#authGo');msg.textContent='';
  if(authMode==='verify'){setAuthMode('in');$('#authE').value=pendEmail;setTimeout(()=>$('#authP').focus(),30);return}
  if((authMode==='up'||authMode==='reset')&&pw!==pw2){msg.textContent='Parolele nu coincid.';return}
  go.disabled=true;try{
    if(authMode==='in'){claimNext=true;const{error}=await sb.auth.signInWithPassword({email:em,password:pw});if(error){claimNext=false;if(/not confirmed/i.test(error.message||'')){pendEmail=em;setAuthMode('verify');$('#authMsg').textContent='Contul nu e confirmat încă. Dacă nu găsești e-mailul, apasă „Retrimite e-mailul”.'}else msg.textContent=authErr(error)}}
    else if(authMode==='up'){claimNext=true;const{data,error}=await sb.auth.signUp({email:em,password:pw,options:{emailRedirectTo:location.origin+location.pathname}});if(error||!data.session)claimNext=false;if(error)msg.textContent=authErr(error);else if(data.user&&Array.isArray(data.user.identities)&&!data.user.identities.length){setAuthMode('in');$('#authE').value=em;$('#authMsg').textContent='Există deja un cont cu acest e-mail. Intră în cont sau apasă „Ai uitat parola?”.'}else if(!data.session){pendEmail=em;resendAt=Date.now()+60000;setAuthMode('verify')}}
    else if(authMode==='forgot'){const{error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname});if(error)msg.textContent=authErr(error);else{setAuthMode('in');$('#authMsg').textContent='Ți-am trimis linkul de resetare pe '+em+'.'}}
    else if(authMode==='reset'){const{error}=await sb.auth.updateUser({password:pw});if(error)msg.textContent=authErr(error);else{toast('Parola a fost schimbată.');setAuthMode('in');claimNext=true;urlLogin=false;await startUser('SIGNED_IN');hideIntro()}}
  }catch(x){msg.textContent=authErr(x)}finally{go.disabled=false}
});
function useStore(key,migrate){
  try{store.current=P.id;localStorage.setItem(KEY,JSON.stringify(store))}catch(e){}
  KEY=key;loadCfg();let s2=null;try{s2=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(migrate){let base=null;try{base=JSON.parse(localStorage.getItem(KEY0))}catch(e){}const own=base&&Array.isArray(base.projects)?base.projects.filter(x=>!x.sample):[];
    if(own.length){s2=s2&&Array.isArray(s2.projects)?s2:{projects:[],current:null};for(const x of own)if(!s2.projects.some(q=>q.id===x.id))s2.projects.push(x);setTimeout(()=>toast(`Am mutat în contul tău ${own.length} ${own.length===1?'proiect găsit':'proiecte găsite'} pe acest dispozitiv.`),600)}try{localStorage.removeItem(KEY0)}catch(e){}}
  if(!s2||!Array.isArray(s2.projects)||!s2.projects.length){const sm=sample();s2={projects:[sm],current:sm.id}}
  store=s2;store.projects.forEach(norm);cloud.last={};store.projects.forEach(markSaved);cloud.seen=false;
  openProject(store.projects.find(x=>x.id===store.current)||store.projects[0]);
}
let siteMode=!window.claude&&!!SB_KEY&&/^https?:$/.test(location.protocol);
const gated=()=>siteMode&&!sbUser;
function showIntro(){
  document.querySelectorAll('dialog[open]').forEach(d=>{try{d.close()}catch(e){}});
  const el=$('#intro'),ps=store.projects.slice().sort((a,b)=>(b.updated||0)-(a.updated||0)),last=ps.find(x=>!x.sample)||ps[0];
  const rel=t=>{if(!t)return'nesalvat încă';const d=(Date.now()-t)/1000;if(d<90)return'acum';if(d<3600)return Math.round(d/60)+' min în urmă';if(d<86400)return Math.round(d/3600)+' h în urmă';return new Date(t).toLocaleDateString('ro-RO')};
  $('#introActs').innerHTML=`${last?`<button class="ib pri" type="button" data-io="open" data-id="${last.id}">Continuă: ${esc(last.name.length>28?last.name.slice(0,27)+'…':last.name)}</button>`:''}<button class="ib${last?'':' pri'}" type="button" data-io="new">+ Proiect nou</button>${sb&&!sbUser?'<button class="ib" type="button" data-io="login">Conectează-te</button>':''}`;
  $('#introRecent').innerHTML=ps.map(x=>{const lv=Array.isArray(x.levels)?x.levels.length:1,rooms=(x.rooms||[]).filter(r=>!r.of).length+Object.values(x.lvData||{}).reduce((t,d)=>t+((d.rooms||[]).filter(r=>!r.of).length),0);return`<li class="pli"><button type="button" data-io="open" data-id="${x.id}"><b>${esc(x.name)}</b><span>${x.sample?'exemplu':rel(x.updated)}</span><small>${rooms} ${rooms===1?'cameră':'camere'} · ${lv} ${lv===1?'nivel':'niveluri'}${x.client&&!x.sample?' · '+esc(x.client):''}</small></button><button class="pmenu" type="button" data-io="menu" data-id="${x.id}" aria-label="Opțiuni pentru ${esc(x.name)}" aria-expanded="${introMenu===x.id}">⋯</button>${introMenu===x.id?`<div class="pmenu-list"><button type="button" data-io="ren" data-id="${x.id}">Redenumește</button><button type="button" data-io="dup" data-id="${x.id}">Duplică</button><button type="button" data-io="del" data-id="${x.id}" class="dng">Șterge</button></div>`:''}</li>`}).join('')||'<li style="color:#8FA6BA">Nu ai încă proiecte. Începe cu „Proiect nou”.</li>';
  try{$('#introSkip').checked=localStorage.getItem('electroplan.noIntro')==='1'}catch(e){}
  const g=gated();$('#authBox').hidden=!g;$('#introActs').hidden=g;$('.intro-card:not(#authBox)').hidden=g;$('#introSkip').closest('label').hidden=g;
  if(g&&authMode!=='reset')setAuthMode(authMode==='up'||authMode==='forgot'?authMode:'in');
  el.hidden=false;
}
function hideIntro(){if(gated())return;$('#intro').hidden=true;requestAnimationFrame(resize)}
$('#intro').addEventListener('click',e=>{
  const b=e.target.closest('[data-io]');if(!b)return;const k=b.dataset.io;
  if(k==='open'){const p2=store.projects.find(x=>x.id===b.dataset.id);introMenu=null;hideIntro();if(p2&&p2!==P)openProject(p2)}
  else if(k==='menu'){introMenu=introMenu===b.dataset.id?null:b.dataset.id;showIntro()}
  else if(k==='ren'){const p2=store.projects.find(x=>x.id===b.dataset.id);if(!p2)return;const nm=prompt('Numele proiectului',p2.name);if(nm&&nm.trim()){p2.name=nm.trim().slice(0,80);touchProj(p2)}introMenu=null;showIntro()}
  else if(k==='dup'){const p2=store.projects.find(x=>x.id===b.dataset.id);if(!p2)return;const c=norm(JSON.parse(JSON.stringify(p2)));c.id=uid();c.name=p2.name+' (copie)';c.sample=false;store.projects.push(c);touchProj(c);introMenu=null;showIntro();toast('Proiect duplicat.')}
  else if(k==='del'){introMenu=null;deleteProject(b.dataset.id);showIntro()}
  else if(k==='new'){hideIntro();$('#newProj').click();setTool('schita')}
  else if(k==='login'){hideIntro();$('#accBtn').click()}
});
$('#introSkip').addEventListener('change',e=>{try{localStorage.setItem('electroplan.noIntro',e.target.checked?'1':'0')}catch(x){}});
$('#brandBtn').addEventListener('click',showIntro);
$('#brandBtn').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showIntro()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#intro').hidden&&!gated())hideIntro()},true);
{let skip=false;try{skip=localStorage.getItem('electroplan.noIntro')==='1'}catch(e){}if(!skip&&!(location.hash||'').slice(1))showIntro()}
const h0=(location.hash||'').slice(1);if(['calcul','materiale','lucrari'].includes(h0))showTab(h0);
})();
