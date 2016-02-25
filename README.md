# Readme?

Marble database initiated on February 24, 2106 for
the Networks and Transactions course at the
Yale School of Art.

## To start meteor:

Open the terminal and type `meteor --port $IP:$PORT`.

## To create a new repository:

* Create a public repositoriy in GitHub. Don't initiate it with a readme.
* Create a new project in Cloud9. Give it the same name.
* In a Cloud9 `terminal`:


    git init
    git remote add origin https://github.com/chasebooker/marbles.git
    git add -A
    git commit -m "Initial commit"
    git push
    
Change the remote URL based on what it says in your GitHub repo. The first two
steps are only necessary when starting a new project.

Every time you make a change, use these four commands:

    git status
    git add -A
    git commit -m "Commit message"
    git push