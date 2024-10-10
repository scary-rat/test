
// ----- git commands ----------

// -- config commands --
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
// -- config commands  end --

// --- other commands ---

// git init                                                    // yo repo lie git le initialise greko

// git add .   or git add                                      // jati pani files xa tyo sab lie add gara to Added or staged

// git add -u                                                  // add just changed or modified or delted files to added or staged state

// git commit -m "Your commit message"                         // yo chai commit garni command re

// git log --oneline                                           // aba hamile total kati ota check point xa tyo hernu xa vni yo command use garni
//                                                             // yesle chai checkpoint ko unique id pani dinxa which helps to go back to that checkpoint

// git reset --hard HEAD~1                                     // garyo vani chai hami pervious wala commit ma janxam, like current HEAD position change garxa
//                                                             // HEAD~1 here, 1 vneko chai step ho, HEAD~2 garyo vani hami 2 step paxi janxam i.e 2 commit agadi janxam

// git status -s                                               // Sab files haru ko status dinxa like untracked xa, added xa, modified xa and so on
//                                                             // -s vneko chai just chiyeko cheeze deu, git status garyo vani full kati dherai details dinxa
//                                                             // -s garyo vani chai simple status dinxa

// git log --oneline --graph                                   // yo ni same ho --oneline garyo vani one line ma dinxa natra tannai information dinxa
//                                                             // --graph le chai branch ko diagram pani dinxa

// git branch                                                  // kati ota branch xa tyo dinxa

// git branch features/navbar                                  // git branch le new branch banauxa features/navbar chai tyo branch ko name ho

// git switch features/navbar                                  // branch switch garna ko lahi git switch ani branch ko name

// git merge features/navbar                                   // yo cha8i branch lie merge garni, git merge ani branch ko name

// git merge --abort                                           // merge lie abort garni

// git branch -d features/navbar                               // delete the git branch kina ki yo feature ko kam sakkiyo aba branch rakhera k matalb

// git branch -m main                                          // rename the git branch to the main

// git push -u origin main                                     // github ko main branch ma push garni current changes

// --- other commands end ---



// git stages
// U - Untracked                   Git is not managing or tracking your file, git lie yo file xa vanni nai tha xaina, git doesnt care abot this file
// A - Added or staged             Git chai aware xa ki yesto pani file xa yo repository ma vnera
// C - Comitted                    Git is tracking, git lie tha xa yo file xa ani yo file ma khi pani chage vyo vani yo git le track gari rako hunxa
// M - Modified                    Git le track gari rako file modified vko xa, aba feri eslie add gara jasto
// D - Deleted                     Git le track gari rako file delete vyo vani yo marked hunxa
// R - Renamed                     Git le track gari rako file renamed vyo ki ta new folder virtra gyo
// AM - Added and Modified         Git le track gari rako file added xa ani hamile teslie modifuy pani garyo vani git status ma AM auxa

// --- git commands end ---