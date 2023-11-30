# More git and Github

# create repository

    clone from repo
    ⁃	git clone (link from ssh from github.com)
    ⁃	pastee into terrminal
    ⁃	cd (name of repository)
    ⁃	git:(main)

    ➜  coriander-web-dev git:(main) ✗ git remote -v
    origin	git@github.com:spiced-academy/coriander-web-dev.git (fetch)
    origin	git@github.com:spiced-academy/coriander-web-dev.git (push)
    ➜  coriander-web-dev git:(main) ✗

    ➜  coriander-web-dev git:(main) ✗ git remote -v
    origin	git@github.com:spiced-academy/coriander-web-dev.git (fetch)
    origin	git@github.com:spiced-academy/coriander-web-dev.git (push)
    ➜  coriander-web-dev git:(main) ✗ cd first-repo-coriander
    ➜  first-repo-coriander git:(main) touch learning.md
    ➜  first-repo-coriander git:(main) ✗

    yellow X shows there has been something changed and new
    -> We created a new file learning.md

# these are all the files that have the ending \*.md

    .gitignore file is for the changes between git
    .DS_Store is a mac owned file aand it always changes in the background when macbook is running.
    So that our repository doesnt include the .DS_Store file and then says something has changed even though it hasnt in our projects.

## adding the new file .gitignorere

    ➜  first-repo-coriander git:(main) ✗ git add .gitignore
    ➜  first-repo-coriander git:(main) ✗ git status
    On branch main
    Your branch is up to date with 'origin/main'.

    Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
        *new file:   .gitignore*

    Untracked files:
    (use "git add <file>..." to include in what will be committed)
        learning.md

# to commit changes only on green new file!

➜ first-repo-coriander git:(main) ✗ git commit -m "add gitignore file"
then
➜ first-repo-coriander git:(main) ✗ git push origin main

# overall process

    ## files
    ->
    ## staged (tracking)
    w/ command git add filename
    ->
    ## commit
    w/ command git commit -m "message for online changes"
    ->
    ## push (=release code)
    w/ command git push origin(=where on local laptop) main(=where in remote github)

Add
➜ first-repo-coriander git:(main) ✗ git add README.md learning.md
or quicker:
command git add .
command git log to see if branch main has commits

ALWAYS WORK LOCALLY!!

# Process from repo local to rep remote

1. git init
2. git remote add "link to remote"
3. sometimes
   git remote -v
   git remote (copy in here not every time!!)
   copy stuff from github online
   git remote add origin git@github.com:charis-amend/session-notebook.git
   git branch -M main
   git push -u origin main
4. git add .
5. git log
6. git commit -m "message wht ive done"
7. git push origin main

# Process from remote to local "downloading online changes to laptop"

1. git pull
2.
