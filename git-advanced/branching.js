// --- branching commands ---

// git branch                                                  // kati ota branch xa tyo dinxa

// git branch features/navbar                                  // git branch le new branch banauxa features/navbar chai tyo branch ko name ho

// git switch features/navbar                                  // branch switch garna ko lahi git switch ani branch ko name

// git merge features/navbar                                   // yo cha8i branch lie merge garni, git merge ani branch ko name

// git merge --abort                                           // merge lie abort garni

// --- branching commands end ---


// branching vneko chai
// jun hmaro main brach xa ni hami tasko copy grera euta new branch developer lie dinxam so he can work on that feature
// ani tyo brach ma pai usle commit haru garna milxa jun chai main brach ma reflect hunnxa
// ani sab finish vyo ani sab thik xa vani usle balla merge request garxa, to merge in main branch
// like usle lekheko code main brach ma halni jasto, tyo accept grepaxi balla usle greko sab changes main brach ma auxa

// yesto kina greko vani ni, branch na banai kana hamile uslie main brach mai commit garna diyem vani khi issue haru ayo vani
// tyo ta main software mai ayo, main software stable vyena error haru ayo aba suppost user hau yo app use gari rako thiye
// ani unstable code commit vyo vani yo app ta crash vyo, bigriyo ani aba jaba samma yo fix hunxa teti khera samma app nai chalni vyena
// bussiness hamper vo, user ko experience hamper vo so main brach ma direct commit garna kunai pani developer lie dini haina

// branch ko name chai hami features/navbar features/hero yesari banauxam, yo good practice ho

// --- git conflict ---

// aba developer 1 le suppose frearues/navbar ma kam gari rako thiyo ani developer 2 le features/hero ma
// developer 1 ko kam ajai sakiyo ani usele main branch ma merge request diyo ani sab thik vyera main branch ma yo push vyo

// aba 3 days paxi developer 2 ko pani hero seacion sakiyo ani uslie pani aba merge garnu xa
// tesko lagi firest ma usle main bata pull garnu parxa kina ki developer 1 le already main ma push greko thiyo ani tespaxi main updated vyo
// so uslie first pull reqeust auxa from the git kina ki updated code pull nagari push garna mildaina

// so usle aba pull garxa ani tyo pull garda uslie git conflict auna sakxa if both user le same file ma changes greko xa

// so suppose developer 1 le nav bar banako xa from line 1 - 100 ani tyo main ma push garyo so main ma pani line 1 - 100 ko code xa ani yo chai nav bar co code ho

// developer 2 le hero banako xa from line 1 - 500 aba ajaba usle pull request garyo git confused vyo kina ki line 1 - 100 ta match vyena  both ko different xa
// so aba git k garxa vani hamilie 3 options dinxa
// option 1 - keep main changes (main ma jasto code xa from line 1-100 tyo rakhni ani 101-500 chai tmro rakhni)
// option 2 - keep your changes (main ko lie ignore garni ani tmro code jasto xa testai rakhni)
// option 3 - keep both changes (aba yesma chai dubai ko changes rakhni, main ko code first ma jasto xa testai rakhni, ani tespani tmro code below that rakhni)

// hamro yo situation ma chai option 3 better ho kina ko both were working on different section


// --- git conflict end ---


// --- git merge ---

// aba merge garna ko lagi chai
// git merge branch/name command use garni

// --- git merge end---