## File and directory ownership and permissions 

Linux is a multi-user operating system. For appropriate access of files and directories, Linux sets authorization via  

- Ownership. Every file/directory is assigned to three different owner types: *user*, *group*, *others* 
  
- Permissions. Every file/directory has three permission levels: *read*, *write*, *execute* 

One can use `ls -l`: `ls` with a long-format display to see file/directory ownership and permissions. 

### Change file access permissions via `chmod`

    chmod [reference][operator][mode] file...

Examples

    chmod ugo+rwx cs102.txt
    chmod go-rwx names.tx
    chmod ugo+rwx names.txt

Note: sometimes, when you are not in a Linux file system, `chmod` may not give you the expected results. For example, see [wsl issues with chmod](https://superuser.com/questions/451475/chmod-doesnt-work)



`chmod` can also be used to set permissions using a [numerical representation](https://en.wikipedia.org/wiki/Chmod). 

For example, to set permissions of on file `cs102.txt` to `rwxr--r–-`, run:

    chmod 744 cs102.txt

For example, see Linux File/Directory Permissions [cheat sheet](https://www.thegeekdiary.com/linux-file-directory-permissions-cheat-sheet/) for the mapping of characters to numericals.


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


_A bit of history from Prof. Brian Kernighan [see](https://www.youtube.com/watch?v=NTfOnGZUZDk&ab_channel=Computerphile)_


### `find` 

Command `find` helps to find files based on various filters, some are given below. 
* `-type` use `f` for file and `d` for directory, e.g., `-type f`
* `-perm` filter for permission, e.g., `-perm 775`, `-perm 777`, etc. 
* `-user` filter for user name, e.g., `-user aman`
* `-mtime` filter for the number of days in terms of the last modified date of a file or a directory 

An example is given below. 

    find ./ -type f -perm 644 -user clint
    find ./ -type d -perm 755 -user clint

## Archive tools

### `tar`

This is a useful tool to archive a set of files or directories. 

Usage:

    tar [options] [archive file name] ... 

Options

- `-c` To create a new archive 
- `-t` To list elements in an archive 
- `-x` To extract files or directories from an archive 
- `-r` To add files or directories to an archive 
- `-v` To activate verbose mode
- `-f` To specify the archive file name
  
Examples:

    tar -cvf cs102.tar cs102/.
    tar -tvf cs102.tar 
    tar -xvf cs102.tar 
    tar -xvf cs102.tar -C cs102-extract/. 

### `gzip`, `gunzip`


`gzip` zips an archive file and `gunzip` unzips a ziped file. 


Examples:

    gzip cs102.tar 
    gunzip cs102.tar.gz 

## Secured Shell 

### `ssh` 

To etablish a secured shell connection to a remote machine on the netwwork, use the following command. 

    ssh username@<server ip>


### `scp` 

This command copies files securely. Examples are the following.  

    scp file_name.txt username@<server ip>:~/. 
    scp username@<server ip>:~/file_name.txt . 





## Shell scripting 

### Create and run a bash program 

You can execute a bash program (e.g. `first.sh`) by running (i)

    bash first.sh 

or (ii)

    chmod a+x first.sh 
    ./first.sh 

Example script: `first.sh`
    
    #!/bin/bash 
    echo "This is my first shell script."
    echo "Hello world!" 

To commenting a line, use character `# `. 

> Read on standard streams **stdin**, **stdout**, **stderr** [here](https://en.wikipedia.org/wiki/Standard_streams)
> ![Standard streams]([/assets/img/MarineGEO_logo.png](https://en.wikipedia.org/wiki/Standard_streams#/media/File:Stdstreams-notitle.svg) "Standard streams")



### echo

It prints the argument to standard output (stdout). For example, 

    echo "Hello world!"

`echo` command options 

* when no argument is passed or with no option --- a newline is inserted 
* `-n` option prints any text without a new line 
* `-e` option removes backslash characters from the output 
  
### `printf`

An alternative to  `echo` command is `printf` with some differences. 

    printf "Hello world"

More formatting options available with `printf`. 
* `%s` for strings 
* `%d` for integers 
* Doubles quotes required 
  
### Variables 

* A shell variable can start with letters or underscore, and can contain any number of letters, digits, and underscores
* Use quotes when assigning a literal that contains spaces

Some examples are the following. 

    my_var = this is a long string
    echo $my_var
    first = Clint 
    last = "P. George" 
    full_name = "Clint P. George"
    echo $full_name 
    oldName = full_name 
    full_name=”$first $last”



### Arithmetic operations 

    #!/bin/bash

    ((sum=2+5))
    echo $sum

