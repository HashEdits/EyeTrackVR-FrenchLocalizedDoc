import{_ as o,i as s}from"./chunks/index.76406e17.js";import{o as r,c as l,a as t,u as i,g as e,b as n,h as d}from"./app.932ffe6e.js";const p=e("h1",{class:"text-[#ab5ac7]",id:"fox-ir-v2-buil-dinstructions",tabindex:"-1"},[n("Fox IR V2 Buil dInstructions "),e("a",{class:"header-anchor",href:"#fox-ir-v2-buil-dinstructions","aria-hidden":"true"},"#")],-1),a=e("h2",{id:"step-15-prepare-to-solder-ir-led-pcb-v2s",tabindex:"-1"},[n("Step 15: Prepare to solder IR LED PCB V2s "),e("a",{class:"header-anchor",href:"#step-15-prepare-to-solder-ir-led-pcb-v2s","aria-hidden":"true"},"#")],-1),_=e("p",null,"Get your magnifying glass out, it's time to solder very smol things.",-1),c=e("p",null,"Gather 4 PCBs, 4 IR LEDs, and 2 ~700ohm resistors.",-1),h=e("p",null,"Here are the PCB pin-out labels:",-1),u=e("p",null,"LED labels:",-1),f=d('<p>If you have different LEDs, please consult their datasheet.</p><p>Some terminology related to them:</p><p><code>5V</code>: 5-volt power in.</p><p><code>GND</code>: Ground or power out.</p><p><code>AR</code>: After-Resistor this is to be used as the power in on the 2nd PCB in series as resistors are not needed on the 2nd PCB since they are on the 1st one.</p><p><code>SNG</code>: Single resistor, use this as 5V in if you are using <em><strong>only 1</strong></em> <code>~700ohm</code> resistor on V3 boards <em><strong>(not recommended)</strong></em>.</p><p><code>Negative</code>: This marks the negative side of the LED.</p><p><code>Positive</code>: This marks the positive side of the LED.</p><h2 id="step-17-solder-resistors-on-pcb-v2" tabindex="-1">Step 17: Solder resistors on PCB V2 <a class="header-anchor" href="#step-17-solder-resistors-on-pcb-v2" aria-hidden="true">#</a></h2><p>You only need 1 PCB to have a resistor per eye.</p>',10),b=e("p",null,"Tin the resistor pads.",-1),v=e("p",null,"Hold the resistor in place.",-1),m=e("p",null,"Solder one end.",-1),g=e("p",null,"Flip to the other side of the resistor and solder it.",-1),x=e("h2",{id:"solder-leds-on-pcb-v2",tabindex:"-1"},[n("Solder LEDs on PCB V2 "),e("a",{class:"header-anchor",href:"#solder-leds-on-pcb-v2","aria-hidden":"true"},"#")],-1),P=e("p",null,"Tin the pads",-1),B=e("p",null,"Place the resistor on the pads in the correct orientation.",-1),V=e("p",null,[n("Solder each side of the resistor. Be careful not to solder at too high of a temp, recommended soldering temp is "),e("code",null,"230C with a max of 245C"),n(".")],-1),C=e("h2",{id:"wire-up-the-pcbs-v2",tabindex:"-1"},[n("Wire up the PCBs V2 "),e("a",{class:"header-anchor",href:"#wire-up-the-pcbs-v2","aria-hidden":"true"},"#")],-1),S=e("p",null,"Basic full wiring diagram of IR PCBs V2.",-1),w=e("p",null,"The PCB that receives the 5V power is the one with the resistor. The second one, which gets its power from the ground pin of the first, does not have a resistor on it and its power input pin is the AR pin (After-Resistor). The 2nd PCBs ground pin goes to the ground of the system, in the diagram it is the ESPs ground pin.",-1),L=JSON.parse('{"title":"Fox IR V2 Buil dInstructions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Step 15: Prepare to solder IR LED PCB V2s","slug":"step-15-prepare-to-solder-ir-led-pcb-v2s","link":"#step-15-prepare-to-solder-ir-led-pcb-v2s","children":[]},{"level":2,"title":"Step 17: Solder resistors on PCB V2","slug":"step-17-solder-resistors-on-pcb-v2","link":"#step-17-solder-resistors-on-pcb-v2","children":[]},{"level":2,"title":"Solder LEDs on PCB V2","slug":"solder-leds-on-pcb-v2","link":"#solder-leds-on-pcb-v2","children":[]},{"level":2,"title":"Wire up the PCBs V2","slug":"wire-up-the-pcbs-v2","link":"#wire-up-the-pcbs-v2","children":[]}],"relativePath":"archive/fox_ir_v2_build_instructions.md","lastUpdated":1674160610000}'),T={name:"archive/fox_ir_v2_build_instructions.md"},N=Object.assign(T,{setup(D){return(E,y)=>(r(),l("div",null,[p,a,_,c,t(o,{options:i(s).fox_ir_build_instructions_one},null,8,["options"]),h,t(o,{options:i(s).fox_ir_build_instructions_two},null,8,["options"]),u,t(o,{options:i(s).fox_ir_build_instructions_three},null,8,["options"]),f,t(o,{options:i(s).fox_ir_build_instructions_four},null,8,["options"]),b,t(o,{options:i(s).fox_ir_build_instructions_five},null,8,["options"]),v,t(o,{options:i(s).fox_ir_build_instructions_six},null,8,["options"]),m,t(o,{options:i(s).fox_ir_build_instructions_seven},null,8,["options"]),g,t(o,{options:i(s).fox_ir_build_instructions_eight},null,8,["options"]),x,t(o,{options:i(s).fox_ir_build_instructions_nine},null,8,["options"]),P,t(o,{options:i(s).fox_ir_build_instructions_ten},null,8,["options"]),B,t(o,{options:i(s).fox_ir_build_instructions_eleven},null,8,["options"]),V,t(o,{options:i(s).fox_ir_build_instructions_twelve},null,8,["options"]),C,S,t(o,{options:i(s).fox_ir_build_instructions_thirteen},null,8,["options"]),w]))}});export{L as __pageData,N as default};
