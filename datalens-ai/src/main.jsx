import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter,useNavigate} from "react-router-dom";
import {motion,useScroll,useTransform,useReducedMotion} from "framer-motion";
import {ArrowUpRight,Upload,Play,ChevronDown,Activity,Brain,Database,Search} from "lucide-react";
import "./styles.css";

const orbit=["CSV","EXCEL","ROWS","COLUMNS","PATTERNS","CORRELATION","INSIGHTS","ML","PREDICTION"];
const stars=Array.from({length:55},(_,i)=>({id:i,left:(i*37)%100,top:(i*67)%100,size:1+(i%3)}));

function Core({onLaunch}){
 const [active,setActive]=useState(null);
 return <div className="universe">
   <div className="grid"></div>
   {stars.map(s=><i key={s.id} className="particle" style={{left:s.left+"%",top:s.top+"%",width:s.size,height:s.size}}/>)}
   <div className="stream s1"/><div className="stream s2"/><div className="stream s3"/>
   <div className="orbit orbitA"/><div className="orbit orbitB"/>
   <motion.div className="core" whileHover={{scale:1.035}} onClick={onLaunch}>
      <div className="coreHalo"/><div className="coreInner">
       <span>DATA</span><strong>LENS</strong><em>AI</em>
      </div>
      <div className="corePulse"/>
   </motion.div>
   {orbit.map((x,i)=><motion.button key={x} className={"node n"+i}
      onMouseEnter={()=>setActive(x)} onMouseLeave={()=>setActive(null)}
      whileHover={{scale:1.12}}>{x}
      {active===x&&<span className="nodeTip">{x==="PATTERNS"?"Pattern map":x==="INSIGHTS"?"Insight detected":x==="ML"?"F1 0.91":x==="PREDICTION"?"Forecast +14.8%":"Data signal"}</span>}
   </motion.button>)}
 </div>
}

function Section({kicker,title,children,cls=""}){return <section className={"section "+cls}><div className="sectionHead"><span>{kicker}</span><h2>{title}</h2></div>{children}</section>}

function App(){
 const nav=useNavigate(); const reduce=useReducedMotion();
 const {scrollYProgress}=useScroll(); const heroY=useTransform(scrollYProgress,[0,.2],[0,-80]);
 const launch=()=>nav("/analyze");
 return <main>
  <header className="nav"><div className="brand">DataLens <b>AI</b></div><nav><a href="#intelligence">Explore</a><a href="#dna">Intelligence</a><a href="#journey">How It Works</a><a href="#ask">Experience</a></nav><button onClick={launch} className="navBtn">Launch DataLens <ArrowUpRight size={15}/></button></header>

  <section className="hero">
   <motion.div className="heroCopy" style={{y:heroY}}>
    <div className="eyebrow"><span/>DATA INTELLIGENCE ENGINE</div>
    <h1>YOUR DATA<br/><i>HAS A STORY.</i></h1>
    <p>DataLens AI helps you discover patterns, relationships, anomalies and predictions hidden inside your data.</p>
    <div className="actions"><button className="primary" onClick={launch}>ENTER DATA LENS <ArrowUpRight size={17}/></button><button className="ghost"><Play size={14}/> WATCH THE EXPERIENCE</button></div>
   </motion.div>
   <Core onLaunch={launch}/>
   <div className="scrollHint"><span/>SCROLL TO EXPLORE</div>
  </section>

  <Section kicker="01 / TRANSFORMATION" title={<>FROM CHAOS<br/><i>TO CLARITY.</i></>} cls="chaos" >
   <div className="chaosVisual"><div className="chaosPoints">{Array.from({length:150},(_,i)=><i key={i} style={{"--x":(i*29)%100+"%","--y":(i*53)%100+"%","--d":(i%20)/10+"s"}}/>)}</div><div className="clarityLine"><Database size={17}/> RAW DATA <b>→</b> INTELLIGENCE <Activity size={17}/></div></div>
  </Section>

  <Section kicker="02 / STRUCTURE" title="DATA DNA" cls="dna" >
   <div className="dnaVisual"><div className="dnaRing r1"/><div className="dnaRing r2"/>{["ROWS","RELATIONSHIPS","DISTRIBUTIONS","PATTERNS","COLUMNS"].map((x,i)=><motion.div className={"dnaNode d"+i} key={x} whileHover={{scale:1.1}}><span/>{x}</motion.div>)}</div>
   <p className="sectionText">See the hidden structure inside a dataset — relationships, distributions and signals forming a living map.</p>
  </Section>

  <section id="intelligence" className="layers"><div className="layerIntro"><span>03 / INTELLIGENCE</span><h2>ONE SYSTEM.<br/><i>FOUR LAYERS.</i></h2></div>
   <div className="layerStack">{["UNDERSTAND","EXPLORE","DISCOVER","PREDICT"].map((x,i)=><motion.div key={x} className="layer" style={{zIndex:i}} whileHover={{x:20}}><small>LAYER 0{i+1}</small><strong>{x}</strong><span>{["Structure the signal","Navigate the variables","Expose hidden patterns","Model what comes next"][i]}</span></motion.div>)}</div>
  </section>

  <Section kicker="04 / NATURAL LANGUAGE" title="ASK YOUR DATA." cls="ask" >
   <div className="terminal"><div className="terminalTop"><span><i/><i/><i/></span><small>DEMO PREVIEW / DATA QUERY ENGINE</small></div><div className="query"><span>›</span> Which factors influence student performance?</div><div className="analysis"><div className="scan"><div/><b>ANALYZING SIGNALS</b><span>Attendance · Study Hours · Assignment Score</span></div><div className="finding"><small>PATTERN DETECTED</small><strong>Attendance ↗</strong><div className="miniGraph"><i/><i/><i/><i/><i/><i/><i/></div><em>correlation +0.78</em></div></div></div>
  </Section>

  <Section kicker="05 / MACHINE LEARNING" title="LET THE DATA LEARN." cls="learn" >
   <div className="mlFlow">{["DATA","FEATURES","MODEL","PREDICTION"].map((x,i)=><React.Fragment key={x}><div className="mlNode"><span>0{i+1}</span><strong>{x}</strong><small>{["12.4K ROWS","38 SIGNALS","XGBOOST","NEXT VALUE"][i]}</small></div>{i<3&&<div className="arrow">→</div>}</React.Fragment>)}</div>
   <div className="metrics">{[["ACCURACY","94.2%"],["F1","0.91"],["R²","0.87"],["RMSE","0.183"]].map(x=><div key={x[0]}><small>{x[0]}</small><b>{x[1]}</b></div>)}</div>
  </Section>

  <section className="final"><div className="finalGlow"/><span>06 / THE NEXT QUESTION</span><h2>READY TO SEE<br/><i>WHAT YOUR DATA KNOWS?</i></h2><div className="finalCore"><div>DATA<br/><b>LENS</b><br/><small>AI</small></div></div><button className="primary" onClick={launch}>ENTER DATA LENS <ArrowUpRight size={17}/></button></section>
  <footer><span>DataLens AI</span><small>DATA INTELLIGENCE ENGINE · 2026</small></footer>
 </main>
}
createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);