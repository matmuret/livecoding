0) Fork fbw-28/exercises to your own repo
    => FORK is like a clone but in GitHub!

1) git remote -v (Check if your connected)
2) If fbw-28/exercises, cut the connection: 
    git remote remove origin

3) git remote -v (Check if your connected)
4) If not
    git remote add origin YOUR FORK!
    => adds two connections (fetch & push)

5) git remote -v (check if your connected)
6) If you are connected to your own exercises!
    git add -A (adds everything and also "adds" deletions, changes, additions) // git add . 
    git commit -am "first exercise ready" (-a ==> append to previous commits, nothing gets lost)
    git branch --set-upstream-to=origin/master master (once)
    git pull  (maybe merge with CTRL+X)
    git push --set-upstream origin master (once)

7) Check on the github if your file is there!!! 
    HOORAY

==== TO GET NEW EXERCISES ====

8) git remote -v (check if your connected to your own)
9) If thats the case, 
    git remote add upstream git@github.com:fbw-28/exercises.git

10) git remote -v (check if you have 4 connections, 2 own, 2 foreign)
    origin	git@github.com:<your-nick-here>/exercises.git (fetch)
    origin	git@github.com:<your-nick-here>/exercises.git (push)
    upstream	git@github.com:fbw-28/exercises.git (fetch)
    upstream	git@github.com:fbw-28/exercises.git (push)

11) If thats the case, 
    git pull upstream master (maybe merge with CTRL + X)

12) you should now see the new exercise => Proof, that it worked! 
    Check if you have a new folder "PB-operators-arithmetic-pt1" 

==== ALL NEXT STEPS AFTER THIS, COME AFTER YOU FINISHED THE EXERCISE ==== 

git add -A
git commit -am "hello"
git push

===== AFTER UPLOADING ===== 

make the pull request to fbw-28/exercises 