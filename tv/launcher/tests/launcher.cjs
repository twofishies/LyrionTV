const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const code = fs.readFileSync(require('node:path').join(__dirname,'../app/launcher.js'),'utf8');
const root = 'http://lms.local:9000/plugins/LyrionJS/';
function launch(initial, options={}) {
  const elements = {}, handlers = {}, timers = new Map();
  const loc = {href:''};
  let counter = 0, saved = initial;
  const document = {
    getElementById(id) {
      if (!elements[id]) elements[id] = {
        hidden:true, focus(){document.activeElement=this;}, click(){if(this.onclick)this.onclick();},
        addEventListener(type,fn){this[type]=fn;}
      };
      return elements[id];
    },
    addEventListener(type,fn){handlers[type]=fn;}
  };
  const window = {
    location:loc, performance:{navigation:{type:options.back?2:0}},
    addEventListener(type,fn){handlers[type]=fn;}
  };
  vm.runInNewContext(code, {
    document,window,performance:window.performance,URL,
    localStorage:{getItem(k){assert.equal(k,'lyrionjs-url');return saved;},setItem(k,value){
      assert.equal(k,'lyrionjs-url');
      if(options.noStorage)throw Error('blocked');
      saved=value;
    }},
    setTimeout(fn){timers.set(++counter,fn);return counter;},
    clearTimeout(id){timers.delete(id);}
  });
  return {elements,handlers,loc,document,saved:()=>saved,
    fire(){for(const [id,fn] of timers){timers.delete(id);fn();}},
    key(keyCode){handlers.keydown({keyCode,preventDefault(){}});}
  };
}
let t=launch(null);
assert(!t.elements.setup.hidden && t.elements.startup.hidden);
t.elements.url.value=root;
t.elements.connect.click();
assert.equal(t.saved(),root);
let url=new URL(t.loc.href);
for(const k of ['tvnav','tvsingle','tvschedule','tvui'])assert.equal(url.searchParams.get(k),'1');
t=launch(root+'?tvsynclat=320&tvui=large&tvschedule=0#player');
assert(t.elements.setup.hidden && !t.elements.startup.hidden);
t.fire(); url=new URL(t.loc.href);
assert.equal(url.searchParams.get('tvsynclat'),'320');
assert.equal(url.searchParams.get('tvui'),'large');
assert.equal(url.searchParams.get('tvschedule'),'0');
assert.equal(url.searchParams.get('tvsingle'),'1');
assert.equal(url.hash,'#player');
for(const restore of [x=>x.key(406),x=>x.key(13),x=>x.handlers.pageshow({persisted:true})]){
  t=launch(root);restore(t);t.fire();assert.equal(t.loc.href,'');assert(!t.elements.setup.hidden);
}
t=launch(root,{back:true});t.fire();assert.equal(t.loc.href,'');assert(!t.elements.setup.hidden);
t=launch('javascript:alert(1)');t.fire();assert.equal(t.loc.href,'');assert(!t.elements.setup.hidden);
t=launch(null,{noStorage:true});t.elements.url.value=root;t.elements.connect.click();assert.equal(t.loc.href,'');t.elements.connect.click();assert(t.loc.href.startsWith(root));
console.log('PASS: one-time setup, saved URL auto-connect, defaults, flag preservation, recovery, invalid URL, storage fallback');
