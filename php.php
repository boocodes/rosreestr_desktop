<?php
    echo "hello from php\n";
    echo var_dump($argv);

    if($argv[1] == "init"){
        mkdir("./.cfm");
        $description_file_text = "Это текст описания вашего контейнера, отредактируйте этот файл, чтобы дать пользовательское описание";
        $fp = fopen("./.cfm/description.txt", "w");
        fwrite($fp, $description_file_text);
        fclose($fp);
    }
?>