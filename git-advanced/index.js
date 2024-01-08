// ---- GIT ADVANCED CLASS ------

/**
git remote -v
-> check connection of git remote and git local

git push -u origin name-of-the-new-branch
-> can make this push the default for the next "git push" command, dont have to repeat myself
*/

// --- merging conflicts ---

// checking differences in terminal
// git diff main name-of-the-new-branch

/** how resolve conflicts:
    1. have to be inside the branch (main branch) which you want to keep
    git switch main 

    2. 
    then you can pull the changes from the other branch

    git merge new-branch 
    --> shows error <--
   
    3. open VS Code to check the differences and to accept incoming or current change
    (could also remove the added lines that git entered in vs code)

    4. git add. git commit -m"fixed conflict"

    5. git push origin new-branch
 */
