import fs from 'node:fs';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import * as babel from '../node_modules/@babel/core/lib/index.js';
import presetEnv from '../node_modules/@babel/preset-env/lib/index.js';
const dir=fileURLToPath(new URL('..', import.meta.url));

const manifest={lyrionVersion:'0.2.34',target:'Chrome 53',babel:babel.version,scripts:{}};
for(const id of ['lj-worklet','lj-lib','lj-app']) {
 const source=fs.readFileSync(dir+'/compat/original/'+id+'.js','utf8');
 const adjusted = id === 'lj-app' ? source.replace("const period = () => {", "const period = () => { if (!Intl.DateTimeFormat.prototype.formatToParts) return h < 12 ? 'AM' : 'PM';") : source;
 const out='/* LyrionJS 0.2.34; modified 2 November 2026 for Chrome 53. GPL-2.0-or-later; see licenses and compat/original. */\n'+babel.transformSync(adjusted,{filename:id+'.js',presets:[[presetEnv,{targets:{chrome:'53'},modules:false,useBuiltIns:false}]],sourceType:'script',babelrc:false,configFile:false,comments:true,compact:false}).code;
 fs.writeFileSync(dir+'/compat/'+id+'.js',out);
 fs.mkdirSync(dir+'/compat/original',{recursive:true}); fs.writeFileSync(dir+'/compat/original/'+id+'.js',source);
 manifest.scripts[id]={sourceSha256:crypto.createHash('sha256').update(source).digest('hex'),outputSha256:crypto.createHash('sha256').update(out).digest('hex')};
}
let libs='';
for(const [pkg,file,license] of [['core-js-bundle','minified.js','LICENSE'],['abortcontroller-polyfill','dist/polyfill-patch-fetch.js','LICENSE'],['intersection-observer','intersection-observer.js',null]]) {
 const base=dir+'/node_modules/'+pkg+'/';
 libs+='\n/* '+pkg+' */\n'+fs.readFileSync(base+file,'utf8')+'\n';
 if (license) fs.copyFileSync(base+license,dir+'/licenses/'+pkg+'.txt'); else fs.writeFileSync(dir+'/licenses/'+pkg+'.txt',fs.readFileSync(base+file,'utf8').split('*/')[0]+'*/\n');
}
const modules = ['factory.js','plural-rules.js','polyfill.js'].map(f => JSON.stringify('./'+f)+':function(module,exports,require){\n'+fs.readFileSync(dir+'/node_modules/intl-pluralrules/'+f,'utf8')+'\n}').join(',\n');
 libs += '\n(function(){var cache={}, modules={'+modules+'};function require(id){if(cache[id])return cache[id].exports;var module={exports:{}};cache[id]=module;modules[id](module,module.exports,require);return module.exports;}require("./polyfill.js");}());\n';
 fs.copyFileSync(dir+'/node_modules/intl-pluralrules/LICENSE',dir+'/licenses/intl-pluralrules.txt');
 libs += fs.readFileSync(dir+'/server/dom-polyfills.js','utf8');
 fs.writeFileSync(dir+'/compat/polyfills.js',libs);
fs.writeFileSync(dir+'/compat/manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log('Built compatible scripts:',manifest.babel);
