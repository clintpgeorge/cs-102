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
