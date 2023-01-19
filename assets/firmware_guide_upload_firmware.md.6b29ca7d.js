import{_ as n,a as s}from"./chunks/index.fa3d0401.js";import{_ as a,i as o}from"./chunks/index.73b5a638.js";import{o as l,c as u,a as e,w as d,u as t,h as r,g as i}from"./app.3869ad1c.js";const h=r('<h1 class="text-[#ab5ac7]" id="building-and-uploading-the-firmware-manually" tabindex="-1">Building and uploading the firmware manually <a class="header-anchor" href="#building-and-uploading-the-firmware-manually" aria-hidden="true">#</a></h1><p>Uploading your firmware must initially be done over cable. Once you have the tracker connected to your WiFi after your first firmware update, you can opt to use OTA in the future.</p><h2 id="_1-connect-your-tracker-to-your-pc-via-the-programmer" tabindex="-1">1. Connect your tracker to your PC via the programmer <a class="header-anchor" href="#_1-connect-your-tracker-to-your-pc-via-the-programmer" aria-hidden="true">#</a></h2><p>First, connect your ESP32-Cam to your programmer. In the case of the ESP32-Cam-MB board, it&#39;s as simple as sticking it into the socket the way it came in the package and then connecting it to your PC with a micro-USB cable. In some cases, there is a button labeled IOO on the programmer. If that button exists make sure to hold it in while you plug the programmer into your pc, once plugged in you can release the button.</p><p>In the case of an FTDI programmer, the steps aren&#39;t as easy, so grab <a href="https://randomnerdtutorials.com/program-upload-code-esp32-cam/" target="_blank" rel="noreferrer">this guide</a> for how to set it up.</p><h2 id="_2-build-your-firmware" tabindex="-1">2. Build your firmware <a class="header-anchor" href="#_2-build-your-firmware" aria-hidden="true">#</a></h2><ol><li>Press the build button at the bottom of Visual Studio Code.</li></ol><p>This builds the firmware, but does not send it to the ESP yet.</p><p><img src="https://i.imgur.com/EmSkhFp.png" alt="img"></p><h2 id="_3-upload-your-firmware" tabindex="-1">3. Upload your firmware <a class="header-anchor" href="#_3-upload-your-firmware" aria-hidden="true">#</a></h2><ul><li><p>If you are using the OTA method, first make sure the tracker you wish to flash is turned on.</p></li><li><p>Once the firmware has been built, press the upload button to upload the firmware.</p><p>This sends the firmware to the ESP. <img src="https://i.imgur.com/lI3PFVC.png" alt="img"></p></li></ul>',11),p=i("p",null," The MB board does the resetting for you. If you're using the FTDI programmer, follow the guide linked above (the one from randomnerdtutorials) ",-1),c=r(`<ul><li><p>If the upload is successful, you should get an output that looks like this:</p><p><img src="https://i.imgur.com/SDQcCr1.png" alt="img"></p></li></ul><p>Congratulations! You have now successfully uploaded the firmware to your EyeTrackVR Tracker!</p><p>If you have trouble with uploading your firmware over cable check the following:</p><ol><li>Make sure your USB cable from the tracker is plugged firmly into your PC.</li><li>Make sure that your USB cable is a data and charging cable (it is suggested you try other cables or devices with the cable).</li><li>Make sure that your drivers are up-to-date.</li><li>Some ports might not work, try other ones.</li></ol><p>Additionally, this can be caused by software hogging COM ports (<strong>VSCode and Cura can be the cause of this</strong>).</p><h2 id="uploading-via-ota" tabindex="-1">Uploading via OTA <a class="header-anchor" href="#uploading-via-ota" aria-hidden="true">#</a></h2><p>Once you have successfully connected your trackers to your WiFi, you can use OTA to handle all future firmware updates.</p><ol><li>Retrieve the IP of the tracker you wish to flash. The IP can be found through network monitoring applications, or by viewing tracker output in a serial monitor.</li><li>In <code>platformio.ini</code> file uncomment the following lines in Visual Studio Code by removing the <code>;</code>:</li></ol><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">;upload_protocol = espota</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">;upload_port = 192.168.1.49</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>Change the value of upload_port to the IP address retrieved during the first step.</li><li>Turn the tracker you wish to flash off and then on again.</li><li>Wait around 5 seconds.</li><li>Press the upload button to upload the firmware.<br><br><img src="https://i.imgur.com/lI3PFVC.png" alt="img"></li><li>Repeat for as many trackers as you need.</li></ol><h2 id="finding-the-ip-address-of-your-tracker" tabindex="-1">Finding the IP address of your tracker <a class="header-anchor" href="#finding-the-ip-address-of-your-tracker" aria-hidden="true">#</a></h2><p>Connect your tracker to your PC and then open a serial monitor in VSC by pressing the <code>plug</code> icon.</p>`,12),m=i("p",null,"Now, press the restart button on the esp itself. watch the monitor for output like this:",-1),g=r('<p>The text, highlighted in green for demonstration, is the stream address of the camera. Take note of this for input into the software.</p><p>Keep in mind while testing and getting set up, the ESP can only have one client, to use the camera in the app, make sure you close the browser tab you tested it in.</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><p>If you encountered an issue while following these steps check the <a href="/misc/faq.html">FAQ.</a></p><p>If you don&#39;t find an answer to your question there ask in <strong>#questions</strong> channel in <a href="https://discord.gg/kkXYbVykZX" target="_blank" rel="noreferrer">the discord</a>, we will be happy to help.</p><p><em>Adapted from the SlimeVR docs, Some Credit goes to the SlimeVR team <a href="https://docs.slimevr.dev/firmware/setup-and-install.html" target="_blank" rel="noreferrer">here</a></em></p>',6),T=JSON.parse('{"title":"Building and uploading the firmware manually","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Connect your tracker to your PC via the programmer","slug":"_1-connect-your-tracker-to-your-pc-via-the-programmer","link":"#_1-connect-your-tracker-to-your-pc-via-the-programmer","children":[]},{"level":2,"title":"2. Build your firmware","slug":"_2-build-your-firmware","link":"#_2-build-your-firmware","children":[]},{"level":2,"title":"3. Upload your firmware","slug":"_3-upload-your-firmware","link":"#_3-upload-your-firmware","children":[]},{"level":2,"title":"Uploading via OTA","slug":"uploading-via-ota","link":"#uploading-via-ota","children":[]},{"level":2,"title":"Finding the IP address of your tracker","slug":"finding-the-ip-address-of-your-tracker","link":"#finding-the-ip-address-of-your-tracker","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"relativePath":"firmware_guide/upload_firmware.md","lastUpdated":1674065121000}'),f={name:"firmware_guide/upload_firmware.md"},C=Object.assign(f,{setup(y){return(_,b)=>(l(),u("div",null,[h,e(n,{options:t(s).upload_firmware_one},{content:d(()=>[p]),_:1},8,["options"]),c,e(a,{options:t(o).upload_firmware_image_one},null,8,["options"]),m,e(a,{options:t(o).upload_firmware_image_two},null,8,["options"]),g]))}});export{T as __pageData,C as default};
