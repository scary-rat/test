// github vneko chai k ho ?

// github chai central codebase ho re, yo single source o truth pani ho re

// github is just like youtube

// ani git vneko chai just like a video

// so github chai k ho vaney ni euta platform ho ja hami hamro repositories haru maintain garna sakxam

// so easy way ko lagi github ra youtube like compare garda yesto hunxa
// github = youtube
// repository = video

// github chai kina chiyeko ?
// aba dherai developers haru eutai project ma kam gari rako axn but different functionality ma
// eg:
// aba developer 1 le navigation bar banayo
// developer 2 le hero section banayo
// developer 3 le about section banayo
// developer 4 le footer section banayo


// so aba eni haru sab afno code ra function haru ek arka sanga kasri share garxan ?
// discuwssion vyo ani they decided to share with whatsapp
// aba sab le k garye vani ek arka ko code whatsapp ma pathayera afno files ma haley

// teti samma ta thik xa
// afa feri new changes garey re, sab le ali ali
// so aba feri sab le feri ekarka lie sabai code pathaunu paryo ani sab le afno files ma pani changes garnu paryo

// ani sabai ekai choti pani ta kam gari rako hunna, suppose all developer are from different country ani euta kam gari rako bela
// arko suti rako hunxa

// so aba usle first ma uthera sab ko code afno file ma merge garyo ani balla afno kam start garna payo, yesmai kati dherai time gyo

// but yo ta very hectic vyo
// so tesko lagi github banako

// github chai single source of truth hunxa

// meaning 4 developers xan, aba github lie cbhai manager vanam
// sab le code lekhey ani ek arka ko satta manager lie pathaye
// suppose developer 1, developer 2, developer 3, developer 4 sab le afule bana ko banako manager lie pathaye ani manager le sab ko code merge garyo
// ani merge grera sab developers lie updated merged files pathayo
// ani aba feri khi changes xa vani dwevelopers harule tyo manager bata updated files receive greko xa ni tesma afno afno code update garxan
// ani feri sab le tyo manager lie pathauxan ani manager le new v2 vanera folder banauxa ani tesma sab ko new updated part copy paste grera haldinxa

// so single source of truth i.e fully updated files chai manager sanga hunxa always

// so manage chai single source of truth ho / central codebase ho

// yo manager nai github ho, yo manager ko kam automated greko nai github ho

// aba developer 1 developer 2, developer 3, developer 4 sab le afno code github ma haley
// jati bajey hale ni vyo like afno day of work sakye paxi github ma push grera work bata afno remain free times of day enjoy garna gyo
// ani tyo haley paxi github chai updated vyo with new files, so yo single source of truth vyo
// ani aba arko developer suppose developepr 4 kam garna thalyo re
// so usle first ma github bata pull garxa, jati pani developers harule afno updated push gre ka thiye
// developer 4 le pani sab updated files haru pauxa afno pc ma ani tesma kam garna thalxa, ani aja ko kam sakey paxi usle push gardinxa
// ani aru developer uthe paxi feri uni haru le pull grera afno kam garna thalxan

// main github ko concept chai yehi ho, collaboration

// git vneko chai afnai pc ma project lie mange garni ho re, like afnai pc ma project manage garni



// ----- git commands ----------

// local porject i.e just yo project ko lagi configuration
// git config --local user.email "verceldeploys@proton.me"    // yo chai tmro git ko email, jun account ma push garnu xa
// git config --local user.name "rocks"                       // yo chai name, like yo user le push greko vnera yo name show hunxa
// git config --local code.editor "code --wait"               // yo vneko chai khi push pull garda error ayo vani tyo file chai vs code ma open gara
// git config --local core.autocrlf "input"                   // yo chai line break re, like windows ra mac ma diffenert hunxa re, yesle chai convert garxa re
// git config --local -e                                      // yo command le chai we can check/edit hamro configuration ko value


// git config --global user.email "gesfkhdghkm@proton.me"
// git config --global code.editor "code --wait"
// git config --global user.name "rocks"
// git config --global core.autocrlf "input"
// git config --global -e


// git stages
// U - Untracked                   Git is not managing or tracking your file, git lie yo file xa vanni nai tha xaina, git doesnt care abot this file
// A - Added or staged             Git chai aware xa ki yesto pani file xa yo repository ma vnera
// C - Comitted                    Git is tracking, git lie tha xa yo file xa ani yo file ma khi pani chage vyo vani yo git le track gari rako hunxa




// hami jahile pani kunai new folder banauxam hai, tyo folder baneko xa vanera git lie tha hunnxa, tesma hamile jati pani file rakham
// tyo ni git lie tha hunnxa, tesaike hami git lie initialise garxam
// initialise grey paxi balla git lie tha hunxa ki yo folder xa, git lie permission milxa ki yo folder ma jati pani aru files ra folders haru hunxa
// tesma afko kam garna permission milxa, like tara just git lie tha hunxa ki yo folder xa ani yesma yesto yesto files ra folders haru xan vnera
// so git le tiniharu sab lie Untrack stage ma halxa
// kina ki Git lie tha matra xa ki yeto files xa, git lie yo file xa vnera tha pauni permission matra mileko xa
// git lie tyo sab lie track garni permission chai mileko xaina
// after initialising by default all files are untracked

// so when we do git add. we are giving git permission ki to sab files harulie track gara