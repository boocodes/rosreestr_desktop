#include <iostream>
#include <stdio.h>


using namespace std;

int main(int argc, char* argv[]){
	
	std::string exec_command = "php ./main.php";
	for(int i = 1; i<argc; i++){
		exec_command += " ";
       	exec_command += argv[i]; 
	}
	
 	char* char_string = const_cast<char*>(exec_command.c_str());
	system(char_string);
} 