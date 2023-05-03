#include <iostream>
#include <filesystem>
#include <Windows.h>
#include <fstream>
#include <cstdlib>
#include <string>

#define UNICODE

namespace fs = std::filesystem;


class Initialization
{
public:

	
	bool init(int argc, char* argv[]) {
		std::string root_directory = fs::current_path().generic_string();
		std::string cfm_directory_init = root_directory + "/.cfm";
		std::cout << cfm_directory_init + "\n";

		fs::create_directory(cfm_directory_init);

		return true;
	}
	

private:

};
