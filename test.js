var storyContent = ﻿{"inkVersion":20,"root":[["^你走在艾德格郡的街道上，陽光明媚、微風和徐。","\n","^這是你第一次來到這裡。雖然與上一個城鎮相當不同，但看起來這裡也是一個和平的地方呢。","\n","ev","str","^(瞇起眼睛享受陽光)","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^「天氣真好啊。」","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["\n",{"->":"SunLight"},{"->":"0.g-0"},{"#f":5}],"c-1":["\n",{"->":"say"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"SunLight":["^_","\n","^正當你享受燦爛的陽光，","\n",{"->":"chanya"},{"#f":1}],"say":["^正當你感慨這美好的天氣，","\n",{"->":"chanya"},{"#f":1}],"chanya":[["<>","^ 一旁突然衝出一位黑髮少年，差點撞上你。","\n","ev","str","^「唔啊!」","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^「有沒有看路啊!」","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"sorry.fine"},{"#f":5}],"c-1":["\n",{"->":"sorry.bad"},{"#f":5}]}],{"#f":1}],"sorry":[{"->":".^.fine"},{"fine":["^「啊啊啊抱歉抱歉！」少年慌張向你道歉。","\n",{"->":"HI.fine"},{"#f":1}],"bad":["ev",{"VAR?":"c_l"},10,"-","/ev",{"VAR=":"c_l","re":true},"^「好兇!」少年小聲抱怨了句。","\n",{"->":"HI"},{"#f":1}],"#f":1}],"HI":[{"->":"HI.fine"},{"fine":["^「抱歉嚇到你了，旅人。」","\n","^少年看起來有些不好意思的摸摸後腦。","\n",{"->":"shake_head"},{"#f":1}],"bad":[["^「剛剛抱歉差點撞到你，旅人。」","\n","^少年看起來有些不好意思的摸摸後腦。","\n","ev","str","^「沒有沒有，是我嘴快了，抱歉啊。」","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^「下次請好好看路。」","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"c_l"},10,"+","/ev",{"VAR=":"c_l","re":true},{"->":"shake_head"},{"#f":5}],"c-1":["\n",{"->":"shake_head"},{"#f":5}]}],{"#f":1}],"#f":1}],"shake_head":[["^_","\n","^「我下次會多注意一點的。」","\n","^少年站定，微笑著向你伸出手。","\n","ev","str","^(握手)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(只是看著)","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"c_l"},5,"+","/ev",{"VAR=":"c_l","re":true},"^你跟他握了握手。","\n",{"->":"Introduce_heself"},{"#f":5}],"c-1":["\n","^少年尷尬的收回手，把雙手抱在胸前。","\n",{"->":"Introduce_heself"},{"#f":5}]}],{"#f":1}],"Introduce_heself":["^「我叫做蛟，正在被咱家狄老爺追殺呢。」","\n",{"->":"Introduce_Ask"},{"#f":1}],"Introduce_Ask":[["ev","str","^「追殺？」","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(打量他)","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^「工作？你是械化者？」","/str",{"VAR?":"point_1"},1,"==",{"VAR?":"point_2"},1,">=","&&","/ev",{"*":".^.c-2","flg":21},"ev","choiceCnt",0,"==","/ev",{"*":".^.c-3","flg":25},{"c-0":["\n","^_","\n","^「是啊。」","\n","^少年瞇起眼睛。","\n","^「這不工作還沒做完，跑出來逛街被抓到了嘛。」","\n","^他看起來毫不在意的樣子。","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"->":"see_c"},{"#f":5}],"c-2":["\n","^_","\n","^「嗯哼。我是艾德格協會的。」少年很自豪的樣子。","\n",{"->":".^.^.^"},{"#f":5}],"c-3":[{"->":"c_Run"},"\n",{"#f":5}]}],{"#f":1}],"see_c":[["ev","str","^(看看臉)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(看看頭髮)","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^(看看身體)","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^(不看了)","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^_","\n","^少年暗紅色的雙眼直勾勾的盯著你。","\n",{"->":"see_c"},{"#f":5}],"c-1":["\n","^_","\n","^純黑色的頭髮披在肩上，他頭上似乎還有兩隻角？","\n","ev",{"VAR?":"point_2"},1,"+",{"VAR=":"point_2","re":true},"/ev",{"->":"see_c"},{"#f":5}],"c-2":["\n","^_","\n","^少年身後有條黑色細長的東西在擺來擺去。那是......尾巴嗎？","\n","ev",{"VAR?":"point_2"},1,"+",{"VAR=":"point_2","re":true},"/ev",{"->":"see_c"},{"#f":5}],"c-3":["\n",{"->":"Introduce_Ask"},{"#f":5}]}],{"#f":1}],"c_Run":[["ev",0,"/ev",{"VAR=":"point_1","re":true},"ev",0,"/ev",{"VAR=":"point_2","re":true},"^_","\n","^你們簡單的聊了一下。","\n","^「蛟！到底跑哪去了。」","\n","^你聽見後面不遠處好像有人在大喊。","\n","^「哎呀，看來我該走了。在這裡就被抓到可不好玩，我出來還不到一個小時呢。」","\n","^蛟甩了甩尾巴。","\n","^「至於要不要告訴老爺我的行蹤就看你意願啦，反正我都沒差，工作還是得做的嘛。更何況他也抓不到我。」","\n","^少年閃身進了左邊的小巷。","\n","ev","str","^(跟上)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(待在原地)","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Alley"},{"#f":5}],"c-1":["\n",{"->":"Dickens"},{"#f":5}]}],{"#f":1}],"Dickens":[[["ev",{"VAR?":"point_1"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^「這位旅人，抱歉打擾了。」","\n","^一名男子從不遠處跑來，最後停在了你面前。聽他的聲音，應該是剛剛在大喊的人。","\n","^「請問你有看到一個黑色頭髮、有角跟尾巴的小孩經過嗎 ？」","\n",{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"point_1"},1,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^男人歪著腦袋，等著你回應。","\n",{"->":".^.^.^.2"},null]}],"nop","\n","ev","str","^「他往左邊的巷子去了。」","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^「他往右邊的大街去了。」","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^「抱歉，我沒有注意到。」","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^(打量他)","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n",{"->":"D_Run.Left"},{"#f":5}],"c-1":["\n",{"->":"D_Run.Right"},{"#f":5}],"c-2":["\n",{"->":"D_Run.No"},{"#f":5}],"c-3":["\n",{"->":"see_d"},{"#f":5}]}],{"#f":1}],"see_d":[["ev",0,"/ev",{"temp=":"hair"},"ev",0,"/ev",{"temp=":"tail"},"ev","str","^(看看臉)","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^(看看頭髮)","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^(看看身體)","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^(不看了)","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^_","\n","^男人看起來閉著雙眼，但是你明白他是醒著的","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev",{"->":"see_d"},{"#f":5}],"c-1":["\n",["ev",{"VAR?":"tail"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^深藍色的長髮俐落的梳成馬尾，他的頭頂有著一對羽飾。","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev","ev",{"VAR?":"hair"},1,"+",{"temp=":"hair","re":true},"/ev",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"tail"},1,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^深藍色的長髮俐落的梳成馬尾，他的頭頂有著一對羽飾。蛇尾羽飾......你不禁開始思考他究竟是何種生物。","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev","ev",{"VAR?":"hair"},1,"+",{"temp=":"hair","re":true},"/ev",{"->":".^.^.^.3"},null]}],"nop","\n",{"->":"see_d"},{"#f":5}],"c-2":["\n",["ev",{"VAR?":"hair"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^男人身後細長的蛇尾微微翹起，剛好能不拖在地上。","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev","ev",{"VAR?":"tail"},1,"+",{"temp=":"tail","re":true},"/ev",{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"hair"},1,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^男人身後細長的蛇尾微微翹起，剛好能不拖在地上。蛇尾羽飾......你不禁開始思考他究竟是何種生物。","\n","ev",{"VAR?":"point_1"},1,"+",{"VAR=":"point_1","re":true},"/ev","ev",{"VAR?":"tail"},1,"+",{"temp=":"tail","re":true},"/ev",{"->":".^.^.^.3"},null]}],"nop","\n",{"->":"see_d"},{"#f":5}],"c-3":["\n",{"->":"Dickens"},{"#f":5}]}],{"#f":1}],"D_Run":[{"->":".^.Left"},{"Left":[["^_","\n","^「非常感謝。」","\n","^男人像一陣風一般竄進巷子裡。","\n","ev","str","^(追上他)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(還是算了)","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Alley"},{"#f":5}],"c-1":["\n",{"->":"Test"},{"#f":5}]}],{"#f":1}],"Right":["^_","\n","^「嗯......非常感謝。」","\n","^男人遲疑了一下，隨後不疑有他的往大街跑去","\n",{"->":"Test"},{"#f":1}],"No":[["^_","\n","^「好吧，但還是非常感謝您。」","\n","^男人睜開一直閉著的眼睛。你看見他深綠色的雙眼似乎是豎瞳？沒等你看清，男人就把眼睛閉上了。","\n","^「再次感謝您。」","\n","^男人像一陣風一般竄進巷子裡。","\n","ev","str","^(追上他)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(還是算了)","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Alley"},{"#f":5}],"c-1":["\n",{"->":"Test"},{"#f":5}]}],{"#f":1}],"#f":1}],"Alley":[["ev",0,"/ev",{"VAR=":"point_1","re":true},["ev",{"VAR?":"point_2"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^你跟著前面人的腳步進入小巷，但你什麼人都沒看到。","\n","ev",{"VAR?":"point_2"},1,"+",{"VAR=":"point_2","re":true},"/ev",{"->":".^.^.^.6"},null]}],["ev",{"VAR?":"point_2"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^_","\n","^你再次進入小巷，但你依然什麼人都沒看到。","\n","ev",{"VAR?":"point_2"},1,"+",{"VAR=":"point_2","re":true},"/ev",{"->":".^.^.^.6"},null]}],"nop","\n","ev","str","^(沿著巷子前進)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^(不追了，回去大路上)","/str",{"VAR?":"point_2"},1,"==","/ev",{"*":".^.c-1","flg":21},"ev","str","^(不追了，回去大路上)","/str",{"VAR?":"point_2"},1,">","/ev",{"*":".^.c-2","flg":21},{"c-0":["\n",{"->":"Test"},{"#f":5}],"c-1":["\n",{"->":"Dickens"},{"#f":5}],"c-2":["\n",{"->":"Test"},{"#f":5}]}],{"#f":1}],"Test":["^_","\n","^咪，窩暫時只有做到這裡，感謝測試。","\n","^或許別的選項還有別的事件?","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"c_l"},0,{"VAR=":"d_l"},0,{"VAR=":"point_1"},0,{"VAR=":"point_2"},0,{"VAR=":"point_3"},"/ev","end",null],"#f":1}],"listDefs":{}};