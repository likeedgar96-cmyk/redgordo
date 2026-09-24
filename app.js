const DEFAULT_CARDS=[
 {id:'taught',term:'taught',meaning:'enseñó / enseñado',pronunciation:'tot',example:'My teacher taught me English.',translation:'Mi profesor me enseñó inglés.',remember:'Es el pasado y participio de teach.',cloze:'My teacher ___ me English.',distractors:['thought','told','talked']},
 {id:'throughout',term:'throughout',meaning:'durante todo / a lo largo de',pronunciation:'thru-áut',example:'It rained throughout the night.',translation:'Llovió durante toda la noche.',remember:'Indica que algo abarca todo un periodo o todo un lugar.',cloze:'It rained ___ the night.',distractors:['although','around','between']},
 {id:'where-were-we',term:'Where were we?',meaning:'¿Dónde estábamos? / ¿En qué nos quedamos?',pronunciation:'uér-wer-uí',example:'Okay, where were we?',translation:'Bueno, ¿en qué nos quedamos?',remember:'Where es dónde; were es el pasado de are; we significa nosotros.',cloze:'Where ___ we?',distractors:['are','was','did']},
 {id:'check-this-out',term:'Check this out!',meaning:'¡Mira esto! / ¡Checa esto!',pronunciation:'chek-dis-áut',example:'Hey, check this out!',translation:'Oye, ¡mira esto!',remember:'Se usa informalmente para llamar la atención sobre algo.',cloze:'Check this ___!',distractors:['in','on','over']},
 {id:'wanna-go',term:'You wanna go with me?',meaning:'¿Quieres ir conmigo?',pronunciation:'yu-uána-gou-with-mi',example:'You wanna go with me?',translation:'¿Quieres ir conmigo?',remember:'Wanna es la forma informal hablada de want to. La forma completa es Do you want to...?',cloze:'You ___ go with me?',distractors:['gonna','want','will']},
 {id:'spell-last-name',term:'How do you spell your last name?',meaning:'¿Cómo deletreas tu apellido?',pronunciation:'jáu-du-yu-spel-yor-last-neim',example:'How do you spell your last name?',translation:'¿Cómo deletreas tu apellido?',remember:'You significa tú; your significa tu.',cloze:'How do you spell ___ last name?',distractors:['you','yours','you’re']},
 {id:'so-far',term:'So far, so good.',meaning:'Hasta ahora, todo bien.',pronunciation:'sou-far-sou-gud',example:'The new job is difficult, but so far, so good.',translation:'El nuevo trabajo es difícil, pero hasta ahora todo bien.',remember:'So far funciona como una expresión: hasta ahora.',cloze:'So far, so ___.',distractors:['well','fine','better']},
 {id:'serious',term:'Are you serious?',meaning:'¿Hablas en serio? / ¿Neta?',pronunciation:'ar-yu-síriəs',example:'You deleted the project? Are you serious?',translation:'¿Borraste el proyecto? ¿Hablas en serio?',remember:'Se usa para expresar sorpresa, incredulidad o molestia.',cloze:'Are you ___?',distractors:['seeing','sure','certain']},
 {id:'this-pen',term:'This is my pen.',meaning:'Esta es mi pluma.',pronunciation:'dis-is-mai-pen',example:'This is my pen, and these are my pencils.',translation:'Esta es mi pluma y estos son mis lápices.',remember:'This is se usa con una cosa; these are con varias.',cloze:'___ is my pen.',distractors:['These','Those','They']},
 {id:'public-safety',term:'public safety',meaning:'seguridad pública',pronunciation:'páblik-séifti',example:'This is important for public safety.',translation:'Esto es importante para la seguridad pública.',remember:'Safety significa seguridad o ausencia de peligro.',cloze:'This is important for public ___.',distractors:['safe','secure','health']}
  ,{id:'class',term:'class',meaning:'clase',pronunciation:'klás',example:'We were in the same class at school.',translation:'Estábamos en la misma clase en la escuela.',remember:'A group of students who are taught together: un grupo de estudiantes que reciben clase juntos.',cloze:'We were in the same ___ at school.',distractors:['course','school','group']}
  ,{id:'english',term:'English',meaning:'inglés',pronunciation:'ínglish',example:'She speaks good English.',translation:'Ella habla bien inglés.',remember:'The language originally from England and now used for international communication.',cloze:'She speaks good ___.',distractors:['England','British','language']}
  ,{id:'book',term:'book',meaning:'libro',pronunciation:'buk',example:'I have a pile of books to read.',translation:'Tengo una pila de libros para leer.',remember:'A set of printed pages fastened inside a cover.',cloze:'I have a ___ to read.',distractors:['page','notebook','paper']}
  ,{id:'pen',term:'pen',meaning:'bolígrafo',pronunciation:'pen',example:'I need a pen to write this down.',translation:'Necesito un bolígrafo para escribir esto.',remember:'An instrument made of plastic or metal used for writing with ink.',cloze:'I need a ___ to write this down.',distractors:['pencil','paper','marker']}
  ,{id:'pencil',term:'pencil',meaning:'lápiz',pronunciation:'pén-sol',example:'She made a pencil drawing.',translation:'Ella hizo un dibujo a lápiz.',remember:'A narrow object containing a black or coloured substance, used for drawing or writing.',cloze:'She made a ___ drawing.',distractors:['pen','paper','brush']}
  ,{id:'online',term:'online',meaning:'en línea / conectado a Internet',pronunciation:'on-láin',example:'Online shopping is both cheap and convenient.',translation:'Comprar en línea es barato y conveniente.',remember:'Controlled by or connected to a computer or to the Internet.',cloze:'___ shopping is convenient.',distractors:['Offline','Digital','Internet']}
  ,{id:'notebook',term:'notebook',meaning:'cuaderno',pronunciation:'nóut-buk',example:'I write new words in my notebook.',translation:'Escribo palabras nuevas en mi cuaderno.',remember:'A small book of paper used for writing notes.',cloze:'I write new words in my ___.',distractors:['book','folder','textbook']}
  ,{id:'student',term:'student',meaning:'estudiante',pronunciation:'stiú-dent',example:'She is a science student.',translation:'Ella es estudiante de ciencias.',remember:'A person who is studying at a school, university or college.',cloze:'She is a science ___.',distractors:['teacher','class','study']}
  ,{id:'teacher',term:'teacher',meaning:'profesor/a, maestro/a',pronunciation:'tí-cher',example:'He is a history teacher.',translation:'Él es profesor de historia.',remember:'A person whose job is teaching, especially in a school.',cloze:'He is a history ___.',distractors:['student','professor','classmate']}
  ,{id:'school',term:'school',meaning:'colegio / escuela',pronunciation:'skul',example:'My brother and I went to the same school.',translation:'Mi hermano y yo fuimos a la misma escuela.',remember:'A place where people, often children, go to be educated.',cloze:'We went to the same ___.',distractors:['class','college','course']}
  ,{id:'et-cetera',term:'et cetera',meaning:'etcétera / y demás (abreviatura: etc.)',pronunciation:'et-sé-ter-a',example:'Bring a notebook, a pen, a pencil, etc.',translation:'Trae un cuaderno, un bolígrafo, un lápiz, etcétera.',remember:'Et cetera significa “y las demás cosas similares”. Se escribe abreviado como etc., pero al hablar normalmente se dice et cetera.',cloze:'Bring a notebook, a pen, a pencil, ___.',distractors:['also','more','extra']}
];

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const SAVED_CARDS=JSON.parse(localStorage.getItem('rg_cards')||'null');
let cards=SAVED_CARDS?[...SAVED_CARDS,...DEFAULT_CARDS.filter(card=>!SAVED_CARDS.some(saved=>saved.id===card.id))]:DEFAULT_CARDS;
let stats=JSON.parse(localStorage.getItem('rg_stats')||'null')||{best:0,answered:0,correct:0,errors:[]};
let session={mode:'mix',items:[],index:0,score:0,streak:0,correct:0,answered:false};
let deckOrder=[];

function save(){localStorage.setItem('rg_cards',JSON.stringify(cards));localStorage.setItem('rg_stats',JSON.stringify(stats));}
function show(id){$$('.screen').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});if(id==='home')renderHome();if(id==='manage')renderLibrary();if(id==='flashcards')renderFlashcards();}
function renderHome(){
 $('#totalCards').textContent=cards.length;$('#bestStreak').textContent=stats.best;
 $('#mastery').textContent=stats.answered?Math.round(stats.correct/stats.answered*100)+'%':'0%';
 $('#errorCount').textContent=`${stats.errors.length} ${stats.errors.length===1?'tarjeta pendiente':'tarjetas pendientes'}.`;
}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function start(mode='mix'){
 let pool=mode==='errors'?cards.filter(c=>stats.errors.includes(c.id)):cards;
 if(!pool.length){alert(mode==='errors'?'No tienes errores pendientes. Primero completa una práctica.':'Agrega al menos una tarjeta.');return;}
 session={mode,items:shuffle(pool).slice(0,10),index:0,score:0,streak:0,correct:0,answered:false};show('quiz');renderQuestion();
}
function speech(text){if(!('speechSynthesis' in window))return alert('Tu navegador no permite reproducción de voz.');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.78;speechSynthesis.speak(u)}
function getMode(card){if(session.mode==='mix'||session.mode==='errors')return shuffle(['meaning','listening','complete'])[0];return session.mode}
function meaningOptions(card){const other=shuffle(cards.filter(c=>c.id!==card.id).map(c=>c.meaning)).slice(0,3);return shuffle([card.meaning,...other])}
function renderQuestion(){
 const card=session.items[session.index],mode=getMode(card);session.currentMode=mode;session.answered=false;
 $('#progressText').textContent=`${session.index+1} / ${session.items.length}`;$('#progressBar').style.width=`${(session.index+1)/session.items.length*100}%`;$('#score').textContent=session.score;$('#streak').textContent=session.streak;$('#feedback').classList.add('hidden');$('#listenBtn').classList.toggle('hidden',mode!=='listening');
 let prompt='',hint='',options=[];
 if(mode==='meaning'){prompt=card.term;hint=card.pronunciation?`Pronunciación: ${card.pronunciation}`:'';options=meaningOptions(card);$('#questionType').textContent='Elige el significado';}
 if(mode==='listening'){prompt='¿Qué escuchaste?';hint='Puedes reproducir el audio las veces que necesites.';options=shuffle([card.term,...shuffle(cards.filter(c=>c.id!==card.id).map(c=>c.term)).slice(0,3)]);$('#questionType').textContent='Entrena tu oído';setTimeout(()=>speech(card.term),350);}
 if(mode==='complete'){prompt=card.cloze||card.example.replace(new RegExp(card.term,'i'),'___');hint=card.translation||'';options=shuffle([card.term.split(' ').find(w=>prompt.includes('___'))?card.term:card.term,...(card.distractors||[])]).slice(0,4);const blankAnswer=deriveBlank(card);options=shuffle([blankAnswer,...(card.distractors||[]).filter(x=>x!==blankAnswer).slice(0,3)]);session.blankAnswer=blankAnswer;$('#questionType').textContent='Completa la frase';}
 $('#questionText').textContent=prompt;$('#questionHint').textContent=hint;$('#options').innerHTML='';
 options.forEach(o=>{const b=document.createElement('button');b.className='option';b.textContent=o;b.onclick=()=>answer(o,card,mode,b);$('#options').appendChild(b)});
 $('#listenBtn').onclick=()=>speech(card.term);
}
function deriveBlank(card){
 if(card.id==='et-cetera')return'etc.';if(card.id==='where-were-we')return'were';if(card.id==='check-this-out')return'out';if(card.id==='wanna-go')return'wanna';if(card.id==='spell-last-name')return'your';if(card.id==='so-far')return'good';if(card.id==='serious')return'serious';if(card.id==='this-pen')return'This';if(card.id==='public-safety')return'safety';if(card.id==='throughout')return'throughout';if(card.id==='taught')return'taught';return card.term;
}
function answer(value,card,mode,button){
 if(session.answered)return;session.answered=true;const correctValue=mode==='meaning'?card.meaning:mode==='complete'?session.blankAnswer:card.term;const ok=value===correctValue;
 $$('.option').forEach(b=>{b.disabled=true;if(b.textContent===correctValue)b.classList.add('correct')});if(!ok)button.classList.add('wrong');
 stats.answered++;if(ok){session.correct++;session.score+=10+session.streak*2;session.streak++;stats.correct++;stats.errors=stats.errors.filter(x=>x!==card.id)}else{session.streak=0;if(!stats.errors.includes(card.id))stats.errors.push(card.id)}stats.best=Math.max(stats.best,session.streak);save();
 $('#score').textContent=session.score;$('#streak').textContent=session.streak;$('#feedbackTitle').textContent=ok?'✓ Correcto':'✕ Casi. La respuesta es: '+correctValue;$('#feedbackTitle').style.color=ok?'var(--good)':'var(--bad)';$('#feedbackText').textContent=card.remember||`Recuerda: ${card.term} significa ${card.meaning}.`;$('#exampleText').textContent=card.example?`${card.example} — ${card.translation||''}`:'';$('#feedback').classList.remove('hidden');
}
function next(){if(!session.answered)return;if(++session.index>=session.items.length)return finish();renderQuestion()}
function finish(){show('results');$('#finalScore').textContent=session.score;const pct=Math.round(session.correct/session.items.length*100);$('#resultTitle').textContent=pct>=80?'Excelente ronda':pct>=60?'Vas por buen camino':'Esta ronda ya nos dijo qué repasar';$('#resultSummary').textContent=`Acertaste ${session.correct} de ${session.items.length} (${pct}%). ${stats.errors.length?'Tus errores quedaron guardados para repasarlos.':'No quedaron errores pendientes.'}`;}
function renderFlashcards(){
 const query=($('#deckSearch')?.value||'').trim().toLowerCase(),direction=$('#deckDirection')?.value||'english';
 if(!deckOrder.length||deckOrder.some(id=>!cards.find(c=>c.id===id)))deckOrder=cards.map(c=>c.id);
 const ordered=deckOrder.map(id=>cards.find(c=>c.id===id)).filter(Boolean);
 const visible=ordered.filter(c=>!query||[c.term,c.meaning,c.example,c.translation].some(v=>(v||'').toLowerCase().includes(query)));
 const deck=$('#flashcardDeck');deck.innerHTML='';$('#emptyDeck').classList.toggle('hidden',visible.length>0);
 visible.forEach(c=>{
  const first=direction==='english'?c.term:c.meaning,second=direction==='english'?c.meaning:c.term;
  const article=document.createElement('article');article.className='study-card';article.tabIndex=0;article.setAttribute('aria-label','Voltear tarjeta: '+c.term);
  article.innerHTML=`<div class="study-card-inner">
   <div class="study-card-face front"><div class="card-actions"><button class="card-action speak-card" title="Escuchar inglés" aria-label="Escuchar">🔊</button><span>↻</span></div><h2 class="study-card-word">${escapeHtml(first)}</h2>${direction==='english'&&c.pronunciation?`<p class="study-pronunciation">${escapeHtml(c.pronunciation)}</p>`:''}<span class="flip-note">Toca para voltear</span></div>
   <div class="study-card-face back"><div class="card-actions"><button class="card-action speak-card" title="Escuchar inglés" aria-label="Escuchar">🔊</button><span>↻</span></div><h3 class="study-card-meaning">${escapeHtml(second)}</h3>${direction==='spanish'&&c.pronunciation?`<p class="study-pronunciation">${escapeHtml(c.pronunciation)}</p>`:''}${c.remember?`<p class="study-remember">${escapeHtml(c.remember)}</p>`:''}${c.example?`<p class="study-example">${escapeHtml(c.example)}</p>`:''}${c.translation?`<p class="study-translation">${escapeHtml(c.translation)}</p>`:''}<span class="flip-note">Toca para regresar</span></div>
  </div>`;
  article.onclick=()=>article.classList.toggle('flipped');article.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();article.classList.toggle('flipped')}};
  article.querySelectorAll('.speak-card').forEach(b=>b.onclick=e=>{e.stopPropagation();speech(c.term)});
  deck.appendChild(article);
 });
}
function renderLibrary(){
 $('#libraryCount').textContent=`${cards.length} tarjetas`;$('#cardLibrary').innerHTML='';cards.forEach(c=>{const el=document.createElement('article');el.className='library-card';el.innerHTML=`<button class="delete-card" title="Eliminar">×</button><h3>${escapeHtml(c.term)}</h3><p><b>${escapeHtml(c.meaning)}</b></p><p>${escapeHtml(c.example||'')}</p>`;el.querySelector('button').onclick=()=>{if(confirm(`¿Eliminar “${c.term}”?`)){cards=cards.filter(x=>x.id!==c.id);stats.errors=stats.errors.filter(x=>x!==c.id);save();renderLibrary()}};$('#cardLibrary').appendChild(el)});
}
function escapeHtml(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function slug(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-'+Date.now()}
function addCard(data){cards.push({id:slug(data.term),cloze:data.cloze||'',distractors:data.distractors||[],translation:'',remember:`Recuerda: ${data.term} significa ${data.meaning}.`,...data})}

$$('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));$$('[data-mode]').forEach(b=>b.onclick=()=>start(b.dataset.mode));$('#flashcardsBtn').onclick=()=>show('flashcards');$('#startMixBtn').onclick=()=>start('mix');$('#manageBtn').onclick=()=>show('manage');$('#nextBtn').onclick=next;$('#retryBtn').onclick=()=>start(session.mode);
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('rg_dark',document.body.classList.contains('dark'));$('#themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'};
if(localStorage.getItem('rg_dark')==='true'){$('body').classList.add('dark');$('#themeBtn').textContent='☀'}
$('#cardForm').onsubmit=e=>{e.preventDefault();addCard({term:$('#termInput').value.trim(),meaning:$('#meaningInput').value.trim(),pronunciation:$('#pronunciationInput').value.trim(),example:$('#exampleInput').value.trim(),translation:$('#translationInput').value.trim(),remember:$('#rememberInput').value.trim()});save();e.target.reset();renderLibrary()};
$('#importBtn').onclick=()=>{const lines=$('#importInput').value.split('\n').map(x=>x.trim()).filter(Boolean);let n=0;lines.forEach(line=>{const [term,meaning,pronunciation='',example='']=line.split('|').map(x=>x.trim());if(term&&meaning){addCard({term,meaning,pronunciation,example});n++}});save();$('#importMessage').textContent=n?`${n} ${n===1?'tarjeta importada':'tarjetas importadas'} correctamente.`:'No encontré líneas con el formato esperado.';if(n)$('#importInput').value='';renderLibrary()};
$('#deckSearch').oninput=renderFlashcards;$('#deckDirection').onchange=renderFlashcards;$('#shuffleDeckBtn').onclick=()=>{deckOrder=shuffle(cards.map(c=>c.id));renderFlashcards()};
$('#resetProgressBtn').onclick=()=>{if(confirm('¿Reiniciar puntos, rachas y errores? Tus tarjetas se conservarán.')){stats={best:0,answered:0,correct:0,errors:[]};save();alert('Progreso reiniciado.')}};
renderHome();
