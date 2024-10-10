// --- commands ---

// git branch                                                  // kati ota branch xa tyo dinxa

// git branch features/navbar                                  // git branch le new branch banauxa features/navbar chai tyo branch ko name ho

// git switch features/navbar                                  // branch switch garna ko lahi git switch ani branch ko name

// git merge features/navbar                                   // yo cha8i branch lie merge garni, git merge ani branch ko name

// git merge --abort                                           // merge lie abort garni

// git branch -d features/navbar                               // delete the git branch kina ki yo feature ko kam sakkiyo aba branch rakhera k matalb

// --- commands end ---



// --------- git merge ---------

// aba merge garna ko lagi chai
// git merge branch/name command use garni


// --- types of merge ---

// will learn only 2 types

// type 1 : Three way merge
// branch 1 ma hamile main ko copy deko xa hai, ani aba branch 1 ma pani 3 commits garim
// ani main ma pani hamile next 2 commits garim

// aba three way metge ma k hunxa vani ni
// Main brach ko tyo copy kun branch 1 lie mileko thiyo, i.e single source of truth for branch 1 ra main branch kina ki baki ko commit ta tespaxi
// nai vko ho ni + branch 1 ko 3rd which last commit + main branch ko 2nd which is last commit
// yo 3 ta lie merge grera euta new commit banauxam, yehi ho 3 way merge

// three way merge = Main before creation of branch + branch last commmit + main last commit

// type 2 : Fast forward merge
// yesma chai hamile branch banayem hai ani tyo branch ma 3 commit garim
// aba hami directly head lie from main branch to branch 1 ko 3rd which is last commint of branch 1 tya shift garni
// so hamro aba head chai tyo shift vyo so tyo nai main branch jasto vyo
// yesma chai merge chai hudaina

// fast forward merge = shift head to branch 1 ko last commit


// --- types of merge end ---


// --------- git merge end ---------