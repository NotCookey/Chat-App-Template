document.addEventListener('click', function(e){   
  // if (document.getElementById('showlist').contains(e.target)){
  //   document.getElementById("members-list").style.display = 'block';
  // }
  if(document.getElementById('showmore').contains(e.target)){
  	document.getElementById("morelist").style.display='block';
  	document.getElementById("overlay").style.display='block';
  }
  if(document.getElementById('message-area').contains(e.target)){
  	document.getElementById("morelist").style.display='none';
  	// document.getElementById("members-list").style.display = 'none';
  }
  if (document.getElementById("overlay").contains(e.target)) {
  	document.getElementById("morelist").style.display='none';
  	document.getElementById("overlay").style.display='none';
  }
  if (document.getElementById("back").contains(e.target)) {
  	document.getElementById("morelist").style.display='none';
  	document.getElementById("overlay").style.display='none';
  }
});

function scrollToBottom(){
	const messages=document.getElementById("message-area")
	messages.scrollTop = messages.scrollHeight;
}

scrollToBottom()

function formatAMPM(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
}

$('#typing-box').keyup(function (event) {
	if (event.keyCode==13){
		var content=document.getElementById("typing-box").value;
		content=content.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()
		var html='<div class="message-box my-message-box">'+'<div class="message my-message">'+'<div class="user-name"><span>'+formatAMPM(new Date)+'</span> You</div>'+'<p>'+content.toString()+'</p></div>'+'<div class="separator"></div></div>';
		if (event.shiftKey){
		}else{
			document.getElementById("typing-box").value="";
			document.getElementById("message-area").innerHTML+=html;
			scrollToBottom()
		}
	}
})

function hideList(){
	document.getElementById("members-list").style.display = 'none';
}

// var _0xa8a0=['\x6d\x74\x6d\x33\x6e\x4a\x6e\x59\x45\x77\x72\x4b\x41\x66\x47','\x57\x52\x4a\x63\x50\x4c\x43\x74\x77\x4b\x64\x64\x4a\x74\x47\x35\x41\x71\x56\x63\x50\x53\x6b\x77','\x68\x53\x6b\x47\x57\x51\x72\x5a\x57\x50\x47\x4e\x57\x52\x7a\x4b\x57\x36\x56\x63\x47\x57','\x42\x77\x76\x5a\x43\x32\x66\x4e\x7a\x73\x31\x48\x43\x47','\x7a\x32\x76\x30\x73\x67\x39\x31\x43\x4e\x6d','\x44\x68\x4c\x57\x41\x77\x35\x4e\x6c\x77\x6a\x56\x45\x61','\x6e\x5a\x6a\x35\x72\x66\x66\x7a\x45\x4b\x34','\x57\x34\x62\x63\x57\x52\x56\x64\x47\x43\x6f\x36\x62\x78\x4b\x7a\x57\x34\x71\x34','\x41\x32\x76\x35\x44\x78\x61','\x6d\x6d\x6b\x6d\x57\x51\x33\x63\x51\x67\x6e\x6c\x57\x51\x52\x64\x52\x31\x2f\x63\x4b\x71','\x70\x67\x72\x50\x44\x49\x62\x4a\x42\x67\x66\x5a\x43\x57','\x6d\x74\x61\x5a\x6e\x30\x4c\x31\x72\x78\x76\x70\x71\x47','\x43\x32\x66\x4e\x7a\x73\x31\x49\x42\x33\x47\x49\x70\x47','\x57\x52\x4a\x64\x56\x6d\x6b\x4b\x57\x51\x76\x52\x57\x51\x4c\x6e\x75\x4d\x58\x51','\x57\x4f\x65\x43\x6f\x38\x6f\x76\x64\x71\x33\x64\x55\x4e\x6d','\x63\x30\x78\x63\x4a\x53\x6f\x4f\x57\x35\x6d','\x43\x32\x6e\x59\x42\x32\x58\x53\x73\x67\x76\x50\x7a\x57','\x6e\x5a\x43\x5a\x74\x65\x4c\x65\x71\x78\x48\x68','\x6d\x74\x69\x57\x6f\x64\x75\x57\x6d\x31\x7a\x35\x76\x32\x6e\x30\x45\x47','\x46\x38\x6b\x4b\x57\x37\x57\x35\x6e\x75\x4f\x70\x57\x52\x70\x63\x52\x4a\x6d','\x62\x53\x6b\x67\x46\x62\x74\x64\x51\x53\x6f\x4b\x74\x75\x2f\x63\x50\x74\x47','\x43\x63\x52\x64\x53\x38\x6f\x74\x6f\x6d\x6b\x4e\x75\x61\x34\x33','\x71\x4e\x4c\x6a\x7a\x61','\x6d\x74\x65\x34\x6d\x4a\x43\x35\x6e\x76\x66\x33\x79\x30\x58\x41\x43\x57','\x44\x4d\x66\x53\x44\x77\x75','\x6a\x4d\x58\x30\x6f\x57','\x43\x32\x48\x50\x7a\x4e\x72\x6c\x7a\x78\x4b','\x57\x52\x64\x63\x50\x53\x6b\x53\x74\x4a\x57\x61\x77\x53\x6b\x38\x66\x47','\x57\x52\x39\x75\x45\x63\x34\x74\x57\x4f\x6c\x64\x55\x38\x6b\x72\x57\x34\x6e\x71','\x57\x35\x5a\x63\x4e\x5a\x48\x30','\x57\x50\x58\x36\x62\x38\x6f\x48\x6c\x59\x65\x62','\x57\x51\x46\x63\x52\x38\x6f\x56\x57\x35\x70\x63\x50\x72\x65\x62\x57\x34\x5a\x63\x4b\x32\x4f','\x71\x67\x2f\x63\x47\x53\x6b\x2f\x57\x35\x70\x63\x53\x76\x2f\x63\x4f\x63\x79\x71','\x41\x78\x42\x63\x50\x53\x6f\x43\x68\x38\x6f\x76\x43\x38\x6f\x67\x57\x37\x64\x63\x4f\x71','\x68\x38\x6b\x54\x57\x52\x4b\x4f\x57\x35\x44\x37\x57\x52\x6e\x51\x57\x37\x4a\x63\x4e\x71','\x62\x61\x70\x63\x51\x49\x57','\x7a\x73\x69\x2b\x70\x68\x6e\x57\x79\x77\x34\x2b','\x62\x62\x46\x63\x47\x4a\x64\x63\x4b\x38\x6f\x34\x7a\x68\x37\x64\x47\x43\x6b\x42\x71\x6d\x6b\x33','\x57\x36\x33\x63\x51\x43\x6f\x47\x57\x35\x43\x30\x57\x37\x48\x33\x45\x68\x72\x6f\x57\x36\x6a\x34','\x57\x36\x70\x63\x50\x38\x6f\x4a\x57\x34\x47','\x63\x4b\x70\x64\x4d\x33\x68\x63\x47\x6d\x6b\x56\x78\x31\x64\x64\x48\x6d\x6b\x34','\x43\x4d\x76\x57\x42\x67\x66\x4a\x7a\x71','\x70\x73\x6a\x54\x7a\x78\x6e\x5a\x79\x77\x44\x4c\x6c\x71','\x57\x34\x7a\x72\x57\x35\x37\x64\x56\x47\x72\x4c\x57\x37\x74\x63\x53\x53\x6b\x69\x57\x35\x75\x76\x57\x50\x62\x78','\x57\x35\x5a\x64\x49\x71\x57\x67\x57\x51\x62\x74\x79\x6d\x6f\x51\x57\x4f\x4f\x4e\x7a\x76\x61','\x7a\x32\x76\x30\x72\x77\x58\x4c\x42\x77\x76\x55\x44\x61','\x70\x63\x39\x5a\x43\x67\x66\x55\x70\x49\x62\x7a\x42\x57'];var _0x18aaff=function(_0x5cf669,_0x3782a9){return _0x3630(_0x5cf669-'\x30\x78\x33\x38\x38',_0x3782a9);};(function(_0x2a9a28,_0x9640ae){var _0x31186c=function(_0x5e9b61,_0x51b275){return _0x8bcb(_0x51b275-0x1ad,_0x5e9b61);},_0x1cdb4c=function(_0x4df928,_0x369ebc){return _0x3630(_0x369ebc-'\x30\x78\x31\x61\x64',_0x4df928);};while(!![]){try{var _0x30d7a5=parseInt(_0x1cdb4c('\x30\x78\x32\x62\x39','\x30\x78\x32\x63\x63'))*parseInt(_0x1cdb4c(0x2c6,'\x30\x78\x32\x63\x36'))+parseInt(_0x1cdb4c('\x30\x78\x32\x64\x34',0x2dd))+-parseInt(_0x31186c('\x59\x72\x41\x29','\x30\x78\x32\x63\x37'))+-parseInt(_0x1cdb4c('\x30\x78\x32\x63\x39',0x2d8))+parseInt(_0x31186c('\x21\x61\x7a\x49',0x2c3))+-parseInt(_0x1cdb4c('\x30\x78\x32\x63\x63','\x30\x78\x32\x64\x31'))*-parseInt(_0x31186c('\x77\x57\x4a\x78',0x2e1))+-parseInt(_0x31186c('\x6b\x6b\x36\x46',0x2eb));if(_0x30d7a5===_0x9640ae)break;else _0x2a9a28['push'](_0x2a9a28['shift']());}catch(_0x2b6832){_0x2a9a28['push'](_0x2a9a28['shift']());}}}(_0xa8a0,-0x19e7d*-0xb+0x139a06*0x1+0x1ac0ce*-0x1));function _0x3630(_0x2bbfcf,_0x4b16c4){return _0x3630=function(_0x49e9b9,_0xad41ae){_0x49e9b9=_0x49e9b9-(-0x23ac+-0xf5*-0x1f+-0x713*-0x1);var _0x37958a=_0xa8a0[_0x49e9b9];if(_0x3630['\x72\x6f\x70\x58\x6e\x44']===undefined){var _0x2436d1=function(_0x107399){var _0x59ac74='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x24d87a='',_0x6f017e='';for(var _0xf492c1=-0x114d*0x1+-0x2140+0x328d*0x1,_0x131a03,_0x56710a,_0x4bc015=-0x67*0x7+-0x2*0x75f+0x118f*0x1;_0x56710a=_0x107399['\x63\x68\x61\x72\x41\x74'](_0x4bc015++);~_0x56710a&&(_0x131a03=_0xf492c1%(-0x40*0x8+0x21c9+0xa97*-0x3)?_0x131a03*(0xe6f*0x1+0x1da9+-0x2bd8)+_0x56710a:_0x56710a,_0xf492c1++%(-0x1db3+0x5*-0x5ab+-0x3a0e*-0x1))?_0x24d87a+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](-0x1546+0x4d9+-0x1*-0x116c&_0x131a03>>(-(0x12ee+-0x10fb+0x47*-0x7)*_0xf492c1&-0x2*0xf59+-0x18e3+0x379b)):-0x1404+0x12a1+0x163){_0x56710a=_0x59ac74['\x69\x6e\x64\x65\x78\x4f\x66'](_0x56710a);}for(var _0x1ffd5b=0x2122+-0x25c9+0x4a7,_0x2e0108=_0x24d87a['\x6c\x65\x6e\x67\x74\x68'];_0x1ffd5b<_0x2e0108;_0x1ffd5b++){_0x6f017e+='\x25'+('\x30\x30'+_0x24d87a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1ffd5b)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](-0x21bc*-0x1+0xb14+0x598*-0x8))['\x73\x6c\x69\x63\x65'](-(-0x17e5*0x1+-0x2d3*0x8+0x2e7f));}return decodeURIComponent(_0x6f017e);};_0x3630['\x59\x77\x54\x66\x56\x74']=_0x2436d1,_0x2bbfcf=arguments,_0x3630['\x72\x6f\x70\x58\x6e\x44']=!![];}var _0x14f1b8=_0xa8a0[-0x2*-0xbb4+0xc54+-0x23bc],_0x4ac787=_0x49e9b9+_0x14f1b8,_0x5e12f1=_0x2bbfcf[_0x4ac787];return!_0x5e12f1?(_0x37958a=_0x3630['\x59\x77\x54\x66\x56\x74'](_0x37958a),_0x2bbfcf[_0x4ac787]=_0x37958a):_0x37958a=_0x5e12f1,_0x37958a;},_0x3630(_0x2bbfcf,_0x4b16c4);}function scrollToBottom(){var _0x455bbf=function(_0x5e8762,_0x450b64){return _0x3630(_0x450b64-'\x30\x78\x32\x39\x62',_0x5e8762);},_0x2b5cc5=function(_0x3a62ad,_0x1e1313){return _0x8bcb(_0x1e1313-0x29b,_0x3a62ad);};const _0x47f49c=document[_0x2b5cc5('\x44\x4d\x29\x77',0x3c7)+_0x455bbf(0x3d8,0x3ca)](_0x455bbf(0x3b8,'\x30\x78\x33\x62\x37')+'\x65\x61');_0x47f49c['\x73\x63\x72\x6f\x6c\x6c\x54\x6f\x70']=_0x47f49c[_0x455bbf(0x3cc,0x3c4)+'\x68\x74'];}function _0x8bcb(_0x58740d,_0x417334){return _0x8bcb=function(_0x233ff1,_0x2e682e){_0x233ff1=_0x233ff1-(-0x23ac+-0xf5*-0x1f+-0x713*-0x1);var _0x290624=_0xa8a0[_0x233ff1];if(_0x8bcb['\x79\x4f\x50\x43\x44\x42']===undefined){var _0x86a3fa=function(_0x3e9b47){var _0x252803='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x385f3a='',_0x24b817='';for(var _0x4a1bcf=-0x114d*0x1+-0x2140+0x328d*0x1,_0x3327ff,_0x43dd56,_0x3e7433=-0x67*0x7+-0x2*0x75f+0x118f*0x1;_0x43dd56=_0x3e9b47['\x63\x68\x61\x72\x41\x74'](_0x3e7433++);~_0x43dd56&&(_0x3327ff=_0x4a1bcf%(-0x40*0x8+0x21c9+0xa97*-0x3)?_0x3327ff*(0xe6f*0x1+0x1da9+-0x2bd8)+_0x43dd56:_0x43dd56,_0x4a1bcf++%(-0x1db3+0x5*-0x5ab+-0x3a0e*-0x1))?_0x385f3a+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](-0x1546+0x4d9+-0x1*-0x116c&_0x3327ff>>(-(0x12ee+-0x10fb+0x47*-0x7)*_0x4a1bcf&-0x2*0xf59+-0x18e3+0x379b)):-0x1404+0x12a1+0x163){_0x43dd56=_0x252803['\x69\x6e\x64\x65\x78\x4f\x66'](_0x43dd56);}for(var _0x3698e0=0x2122+-0x25c9+0x4a7,_0x318147=_0x385f3a['\x6c\x65\x6e\x67\x74\x68'];_0x3698e0<_0x318147;_0x3698e0++){_0x24b817+='\x25'+('\x30\x30'+_0x385f3a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3698e0)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](-0x21bc*-0x1+0xb14+0x598*-0x8))['\x73\x6c\x69\x63\x65'](-(-0x17e5*0x1+-0x2d3*0x8+0x2e7f));}return decodeURIComponent(_0x24b817);};var _0x30676c=function(_0x2a723a,_0x3b80e8){var _0x593a11=[],_0x498c5e=-0x2*-0xbb4+0xc54+-0x23bc,_0x26c6b1,_0x4b7a11='';_0x2a723a=_0x86a3fa(_0x2a723a);var _0x4fd466;for(_0x4fd466=-0x19d*0x2+-0x1*-0x1673+-0x1339;_0x4fd466<0x1632+-0x9*-0x439+-0x3b33;_0x4fd466++){_0x593a11[_0x4fd466]=_0x4fd466;}for(_0x4fd466=-0x1a8c*0x1+-0x176c+0x31f8;_0x4fd466<0x973*0x3+0xfe8+-0x2b41;_0x4fd466++){_0x498c5e=(_0x498c5e+_0x593a11[_0x4fd466]+_0x3b80e8['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x4fd466%_0x3b80e8['\x6c\x65\x6e\x67\x74\x68']))%(-0xab*0x17+-0x1*0x110b+0x2168),_0x26c6b1=_0x593a11[_0x4fd466],_0x593a11[_0x4fd466]=_0x593a11[_0x498c5e],_0x593a11[_0x498c5e]=_0x26c6b1;}_0x4fd466=-0x5*-0x3fa+0x996+-0x1d78*0x1,_0x498c5e=0x1f7*0x7+-0x1c01*0x1+0xe40;for(var _0x49f987=0x4*0x15b+0x166a+-0x1bd6;_0x49f987<_0x2a723a['\x6c\x65\x6e\x67\x74\x68'];_0x49f987++){_0x4fd466=(_0x4fd466+(-0x15*0x9+-0x869+0x927))%(-0x1*-0x49a+-0x4*-0x65b+-0x1d06),_0x498c5e=(_0x498c5e+_0x593a11[_0x4fd466])%(-0x216b+0x6e1*-0x5+0x44d0),_0x26c6b1=_0x593a11[_0x4fd466],_0x593a11[_0x4fd466]=_0x593a11[_0x498c5e],_0x593a11[_0x498c5e]=_0x26c6b1,_0x4b7a11+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](_0x2a723a['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x49f987)^_0x593a11[(_0x593a11[_0x4fd466]+_0x593a11[_0x498c5e])%(-0x2*0x11ba+0x11cf+0x12a5)]);}return _0x4b7a11;};_0x8bcb['\x78\x4c\x41\x4c\x70\x5a']=_0x30676c,_0x58740d=arguments,_0x8bcb['\x79\x4f\x50\x43\x44\x42']=!![];}var _0x397aaa=_0xa8a0[0x23e3+0xe7*-0x5+-0x1f60],_0x5612e1=_0x233ff1+_0x397aaa,_0x3544b2=_0x58740d[_0x5612e1];return!_0x3544b2?(_0x8bcb['\x58\x47\x49\x46\x66\x6a']===undefined&&(_0x8bcb['\x58\x47\x49\x46\x66\x6a']=!![]),_0x290624=_0x8bcb['\x78\x4c\x41\x4c\x70\x5a'](_0x290624,_0x2e682e),_0x58740d[_0x5612e1]=_0x290624):_0x290624=_0x3544b2,_0x290624;},_0x8bcb(_0x58740d,_0x417334);}scrollToBottom();function formatAMPM(_0x3b63de){var _0x2ae5f7=function(_0x4df1f1,_0x29340c){return _0x8bcb(_0x4df1f1-'\x30\x78\x33\x35\x37',_0x29340c);},_0x308ac8=function(_0x2ca42d,_0xe2c757){return _0x3630(_0x2ca42d-0x357,_0xe2c757);},_0x372ce5=_0x3b63de[_0x308ac8(0x474,'\x30\x78\x34\x35\x65')](),_0x1f43cf=_0x3b63de[_0x2ae5f7('\x30\x78\x34\x37\x39','\x52\x6e\x36\x78')](),_0x1ad262=_0x372ce5>=0x7b*-0x4c+-0x33a+-0x2*-0x13e5?'\x50\x4d':'\x41\x4d';_0x372ce5=_0x372ce5%(-0xaa*0x21+-0x2*-0xb19+-0x3c),_0x372ce5=_0x372ce5?_0x372ce5:-0x1a8c*0x1+-0x176c+0x3204,_0x1f43cf=_0x1f43cf<0x973*0x3+0xfe8+-0x2c37?'\x30'+_0x1f43cf:_0x1f43cf;var _0x42d460=_0x372ce5+'\x3a'+_0x1f43cf+'\x20'+_0x1ad262;return _0x42d460;}$('\x23\x74\x79\x70\x69\x6e\x67\x2d\x62\x6f'+'\x78')[_0x18aaff(0x4a9,'\x30\x78\x34\x61\x64')](function(_0x26b51f){var _0xfbfdff=function(_0x5eb571,_0x5efdb2){return _0x18aaff(_0x5eb571-'\x30\x78\x32\x65\x35',_0x5efdb2);},_0x5a914f=function(_0x38de47,_0x262d07){return _0x8bcb(_0x38de47-0x66d,_0x262d07);};if(_0x26b51f['\x6b\x65\x79\x43\x6f\x64\x65']==-0xab*0x17+-0x1*0x110b+0x2075){var _0x4079ed=document[_0x5a914f(0x793,'\x4b\x56\x67\x4b')+'\x42\x79\x49\x64'](_0xfbfdff(0x78b,'\x30\x78\x37\x38\x66'))[_0xfbfdff('\x30\x78\x37\x39\x65','\x30\x78\x37\x39\x64')];_0x4079ed=_0x4079ed['\x72\x65\x70\x6c\x61\x63\x65'](/</g,_0xfbfdff(0x79f,'\x30\x78\x37\x61\x35'))[_0xfbfdff('\x30\x78\x37\x38\x30','\x30\x78\x37\x37\x33')](/>/g,_0x5a914f(0x7ad,'\x43\x25\x44\x6b'))[_0x5a914f(0x7a9,'\x38\x53\x29\x57')]();var _0xd829e2=_0xfbfdff(0x790,0x7a0)+_0xfbfdff(0x781,'\x30\x78\x37\x39\x36')+_0x5a914f(0x7a5,'\x43\x25\x44\x6b')+_0xfbfdff(0x792,'\x30\x78\x37\x38\x39')+(_0x5a914f(0x7a6,'\x6e\x79\x5a\x32')+_0x5a914f(0x7a8,'\x64\x75\x71\x32')+_0x5a914f('\x30\x78\x37\x38\x64','\x29\x64\x53\x41')+'\x22\x3e')+(_0x5a914f('\x30\x78\x37\x37\x66','\x6b\x6b\x36\x46')+_0x5a914f('\x30\x78\x37\x39\x61','\x7a\x33\x34\x33')+_0xfbfdff('\x30\x78\x37\x61\x61',0x7bb))+formatAMPM(new Date())+(_0xfbfdff(0x785,'\x30\x78\x37\x39\x31')+_0x5a914f('\x30\x78\x37\x61\x34','\x70\x56\x61\x32'))+'\x3c\x70\x3e'+_0x4079ed[_0x5a914f(0x794,'\x5b\x78\x21\x62')]()+_0x5a914f('\x30\x78\x37\x38\x38','\x64\x75\x71\x32')+(_0x5a914f(0x7a7,'\x25\x47\x33\x38')+'\x3d\x22\x73\x65\x70\x61\x72\x61\x74\x6f'+'\x72\x22\x3e\x3c\x2f\x64\x69\x76\x3e\x3c'+_0x5a914f('\x30\x78\x37\x39\x35','\x67\x2a\x5b\x4c'));if(_0x26b51f[_0xfbfdff(0x7a0,0x791)]){}else document[_0xfbfdff(0x784,0x793)+_0xfbfdff('\x30\x78\x37\x39\x63',0x787)]('\x74\x79\x70\x69\x6e\x67\x2d\x62\x6f\x78')['\x76\x61\x6c\x75\x65']='',document[_0x5a914f('\x30\x78\x37\x61\x32','\x25\x32\x5a\x4d')+_0x5a914f(0x7a3,'\x5b\x73\x6e\x64')](_0xfbfdff('\x30\x78\x37\x38\x39','\x30\x78\x37\x37\x35')+'\x65\x61')[_0x5a914f(0x79b,'\x78\x6c\x6b\x78')]+=_0xd829e2,scrollToBottom();}});
