# GNU/Linux Commands, Shell Scripting
_Version 0.1_ 

- [GNU/Linux Commands, Shell Scripting](#gnulinux-commands-shell-scripting)
  - [Basic shell commands](#basic-shell-commands)
    - [`man`](#man)
    - [`pwd`](#pwd)
    - [`cd`](#cd)
    - [`ls`](#ls)
    - [`mkdir`](#mkdir)
    - [`touch`](#touch)
    - [`cp`](#cp)
    - [`mv`](#mv)
    - [`rm`](#rm)
    - [`cat`](#cat)
    - [`wc`](#wc)
    - [`less`](#less)
    - [Pipe (`|`)](#pipe-)
  - [Information on users/groups](#information-on-usersgroups)
  - [File and directory ownership and permissions](#file-and-directory-ownership-and-permissions)
    - [Change file access permissions via `chmod`](#change-file-access-permissions-via-chmod)
    - [Change user/group via `chown`](#change-usergroup-via-chown)
  - [Search tools](#search-tools)
    - [`grep`](#grep)
    - [`find`](#find)
  - [Acknowledgements](#acknowledgements)
  - [References](#references)

## Basic shell commands 

### `man` 

Usage: 

    man pwd 
    man ls 

Command `man` prints the command's manual page given as an argument. For example, `man ls` prints the manual of the `ls` command. 


### `pwd` 

Command `pwd` prints the current working directory in an absolute path format. 

### `cd` 

Command `cd` changes the current working directory to the given directory as an argument. If no argument is given, `cd` changes the current working directory to the logged-in user's home directory. 

### `ls` 

By default, the ls command shows the names of the files and directories (discards even hidden files). Some options of this command are pretty helpful; see below. 

* `-l` (case sensitive) argument (or option) tells ls to print files in the long-listing format. Option -l lists the following; see the `ls` command `man` page for more details. 

    - Type: d for directory, - for a regular file, see the man page for other types 
    - Permissions of a file or directory. Nine characters: the first three for the user, the next three for the group, and the last three for others. `r` for read access, `w` for write access, and `x` for execute access. 
    - Number of hard links to the file 
    - File/directory owner
    - File/directory group
    - File/directory size
    - Date and Time
    - File/directory name
* `-a` lists hidden files/directories 
* `-S` sort the files or directories based on size (not recursive)
* `-R` displays files and directories of the current and subdirectories recursively 



### `mkdir` 

This command creates a directory. 

### `touch` 

For more details, e.g., see how to use [touch](https://phoenixnap.com/kb/touch-command-in-linux).

### `cp` 

This command copies (analogous to Cntl + C and Cntl + V) directories or files from one directory to the other. 

### `mv` 

This command moves (analogous to Cntl + X and Cntl + V) directories or files from one directory to the other. 

### `rm` 

This command deletes a file or a directory. 

### `cat` 

This command displays the contents of a file. 

    cat cs102.txt 

Alternatively, it writes text lines into a file. 

    cat > cs102.txt 

### `wc` 

The `wc` command displays the number of lines/characters/words in a file.

If we use the  `wc` command with no options,  the output is the number of lines, number of words, and number of bytes of a file.  

Other options 
* `-l` prints the number of lines in a file 
* `-m` prints the number of characters in a file 
* `-c` prints the number of bytes in a file 
* `-w` prints the number of words in a file 

### `less`

One can consider this as a lightweight content viewer for the output stream or a large text file. 

* h - displays help 
* f or space bar - moves to the next frame or screen 
* g - goes to the top of the content 
* G - goes to the bottom of the content 
* / - search for a word towards the end of the content/file 
  * n - display the next occurrence 
  * q - quit the search instance 
* ? - search for a word towards the beginning of the content/file 
  * n - display the next occurrence 
  * q - quit the search instance
* j - goes down 
* k - goes up 

### Pipe (`|`)

A pipe `|` is a form of redirection to send the output of one command/program/process to another command/program/process as input for further processing. It is unidirectional, i.e., the data flow is from left to right. 

An example is below.  

    ls -alS | less 

The `less` command takes the output of `ls -alS` as its input. And, the output of `ls -alS` is displayed one frame at a time (you can apply the `less` command's options and interactive commands). 


Another example is that we can combine `wc` with other commands using the pipe `|` symbol. For example, to count the number of folders and files in a directory, we combine `ls` and `wc` as given below  

    ls -l | wc –l 

## Information on users/groups 

* `who`  
  
* `whoami` 
  
* `id`  
  
* `groups` shows all groups the user belongs to  
  
* `finger` shows currently logged in users' Login,    Name,                 TTY,  Idle,  Login  Time,   Office,  Phone
  
* `users` shows the names of all users logged into the system  
  
* `last` shows a list of the last logged in users on the system

Note: `finger`, `who`, and `user` are not working with WSL. We need to investigate further. 

## File and directory ownership and permissions 

Linux is a multi-user operating system. For appropriate access of files and directories, Linux sets authorization via  

* Ownership. Every file/directory is assigned to three different owner types: *user*, *group*, *others* 
  
* Permissions. Every file/directory has three permission levels: *read*, *write*, *execute* 

One can use `ls -l`: `ls` with a long-format display to see file/directory ownership and permissions. 

### Change file access permissions via `chmod`

    chmod [reference][operator][mode] file...

Examples 

    chmod ugo+rwx cs102.txt
    chmod go-rwx names.tx
    chmod ugo+rwx names.tx

Note: sometimes, when you are not in a Linux file system, `chmod` may not give you the expected results. For example, see [wsl issues with chmod](https://superuser.com/questions/451475/chmod-doesnt-work)

### Change user/group via `chown` 

    chown [user]:[group] [filename]

Examples 

    chown Arun cs102.txt  
    chown Arun:IITGoa cs102.txt 

## Search tools 

### `grep` 

Command `grep` helps to search for a given word. 

Usage: 

	grep -iw 'goa' goa-wiki.txt 
	grep -w 'Goa' goa-wiki.txt 

Options: 
* `-i` enables case insensitive search 
* `-w` searches for a given word 

### `find` 

Command `find` helps to find files based on various filters, some are given below. 
* `-type` use `f` for file and `d` for directory, e.g., `-type f`
* `-perm` filter for permission, e.g., `-perm 775`, `-perm 777`, etc. 
* `-user` filter for user name, e.g., `-user aman`
* `-mtime` filter for the number of days in terms of the last modified date of a file or a directory 

An example is given below. 


## Acknowledgements 

I thank the instructors of the previous offerings of courses CS102 and CS251, Dr. Amaldev Manuel and Dr. Sudakshina Dutta, for sharing the relevant resources.   

## References 

1. [30 Bash Script Examples](https://linuxhint.com/30_bash_script_examples)
