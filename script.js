
'use strict';const _0x25d2=['.score','.number-box','📉\x20Too\x20High!','random','trunc','querySelector','⛔️\x20No\x20Number','againbtn','📈\x20Too\x20Low!','width','addEventListener','checkbtn','block','15rem','none','#222','.main','1brvFgV','rgb(96\x20179\x2071)','33699fwHAvK','1BcLOfV','.highscore','19226vsVuvi','6367bVUQZX','log','color','.number','white','click','212827TQxmWD','1gQOIoQ','style','.guess','18sObEFT','105167DQlKEV','.message','backgroundColor','.check','#60b347','34SRALKk','#fff','getElementById','30rem','🤔\x20Start\x20guessing...','body','display','value','2371mJugMh','6TqdqlL','1aEZWYj','textContent'];const _0x3c9490=_0x2b2a;(function(_0x1fdcfb,_0x569583){const _0x425975=_0x2b2a;while(!![]){try{const _0x3a3069=parseInt(_0x425975(0x1e5))*parseInt(_0x425975(0x1f6))+-parseInt(_0x425975(0x1db))*-parseInt(_0x425975(0x1e9))+-parseInt(_0x425975(0x1da))*-parseInt(_0x425975(0x1f8))+-parseInt(_0x425975(0x1f7))*-parseInt(_0x425975(0x1e8))+parseInt(_0x425975(0x1ee))*parseInt(_0x425975(0x1de))+parseInt(_0x425975(0x1dd))*-parseInt(_0x425975(0x1d8))+-parseInt(_0x425975(0x1e4));if(_0x3a3069===_0x569583)break;else _0x1fdcfb['push'](_0x1fdcfb['shift']());}catch(_0x536fe1){_0x1fdcfb['push'](_0x1fdcfb['shift']());}}}(_0x25d2,0x1eb4a));let secretNumber=Math[_0x3c9490(0x1cb)](Math['random']()*0x14)+0x1;document[_0x3c9490(0x1f0)](_0x3c9490(0x1ce))['style'][_0x3c9490(0x1f4)]='none';let score=0x14,highscore=0x0;const displayMsg=function(_0x4fdc4c){const _0x445dc8=_0x3c9490;document['querySelector']('.message')['style'][_0x445dc8(0x1e0)]='#ffc800',document[_0x445dc8(0x1cc)](_0x445dc8(0x1ea))[_0x445dc8(0x1f9)]=_0x4fdc4c;};function _0x2b2a(_0x416999,_0x5da086){_0x416999=_0x416999-0x1c8;let _0x25d215=_0x25d2[_0x416999];return _0x25d215;}document[_0x3c9490(0x1cc)](_0x3c9490(0x1ec))[_0x3c9490(0x1d1)]('click',function(){const _0x463c3d=_0x3c9490,_0x1f4bde=Number(document[_0x463c3d(0x1cc)](_0x463c3d(0x1e7))['value']);console[_0x463c3d(0x1df)](_0x1f4bde,typeof _0x1f4bde);if(!_0x1f4bde)document[_0x463c3d(0x1cc)]('.message')[_0x463c3d(0x1f9)]=_0x463c3d(0x1cd);else{if(_0x1f4bde===secretNumber)displayMsg('🏆\x20Correct\x20Number!'),document[_0x463c3d(0x1cc)](_0x463c3d(0x1ea))[_0x463c3d(0x1e6)][_0x463c3d(0x1e0)]=_0x463c3d(0x1d9),document[_0x463c3d(0x1f0)](_0x463c3d(0x1ce))['style'][_0x463c3d(0x1f4)]=_0x463c3d(0x1d3),document[_0x463c3d(0x1f0)](_0x463c3d(0x1d2))[_0x463c3d(0x1e6)]['display']=_0x463c3d(0x1d5),document[_0x463c3d(0x1cc)]('.number-box')[_0x463c3d(0x1e6)][_0x463c3d(0x1eb)]=_0x463c3d(0x1ed),document[_0x463c3d(0x1cc)](_0x463c3d(0x1e1))[_0x463c3d(0x1f9)]=secretNumber,document['querySelector'](_0x463c3d(0x1f3))['style'][_0x463c3d(0x1eb)]=_0x463c3d(0x1ed),document['querySelector'](_0x463c3d(0x1e1))['style'][_0x463c3d(0x1d0)]=_0x463c3d(0x1f1),score>highscore&&(highscore=score,document[_0x463c3d(0x1cc)](_0x463c3d(0x1dc))[_0x463c3d(0x1f9)]=highscore);else _0x1f4bde!==secretNumber&&(score>0x1?(displayMsg(_0x1f4bde>secretNumber?_0x463c3d(0x1c9):_0x463c3d(0x1cf)),score--,document[_0x463c3d(0x1cc)]('.score')['textContent']=score):(displayMsg('😔\x20You\x20Lost\x20the\x20Game'),document['querySelector'](_0x463c3d(0x1fa))[_0x463c3d(0x1f9)]=0x0));}}),document[_0x3c9490(0x1cc)]('.again')['addEventListener'](_0x3c9490(0x1e3),function(){const _0x2e6244=_0x3c9490;score=0x14,secretNumber=Math[_0x2e6244(0x1cb)](Math[_0x2e6244(0x1ca)]()*0x14)+0x1,displayMsg(_0x2e6244(0x1f2)),document['querySelector'](_0x2e6244(0x1ea))[_0x2e6244(0x1e6)][_0x2e6244(0x1e0)]=_0x2e6244(0x1ef),document[_0x2e6244(0x1cc)](_0x2e6244(0x1fa))[_0x2e6244(0x1f9)]=score,document['querySelector'](_0x2e6244(0x1e1))[_0x2e6244(0x1f9)]='?',document[_0x2e6244(0x1cc)](_0x2e6244(0x1f3))[_0x2e6244(0x1e6)][_0x2e6244(0x1eb)]='#bfbfbf',document[_0x2e6244(0x1cc)](_0x2e6244(0x1e7))[_0x2e6244(0x1f5)]='',document[_0x2e6244(0x1cc)](_0x2e6244(0x1d7))[_0x2e6244(0x1e6)]['backgroundColor']=_0x2e6244(0x1d6),document[_0x2e6244(0x1cc)](_0x2e6244(0x1e1))[_0x2e6244(0x1e6)][_0x2e6244(0x1d0)]=_0x2e6244(0x1d4),document[_0x2e6244(0x1cc)](_0x2e6244(0x1c8))[_0x2e6244(0x1e6)][_0x2e6244(0x1eb)]=_0x2e6244(0x1e2),document[_0x2e6244(0x1f0)](_0x2e6244(0x1ce))[_0x2e6244(0x1e6)][_0x2e6244(0x1f4)]=_0x2e6244(0x1d5),document['getElementById'](_0x2e6244(0x1d2))['style'][_0x2e6244(0x1f4)]=_0x2e6244(0x1d3);});