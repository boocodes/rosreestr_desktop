<?php
    class Initiliazation{
        public function init(){
            if(mkdir("./.cfm")){
                //description file
                $description_file_text = "Это текст описания вашего контейнера, отредактируйте этот файл, чтобы дать пользовательское описание";
                $fp = fopen("./.cfm/description.txt", "w");
                fwrite($fp, $description_file_text);
                fclose($fp);
                //info dir
                mkdir("./.cfm/info");
                //logs dir
                mkdir("./.cfm/logs");
                //HEAD
                $fp = fopen("./.cfm/HEAD", "w");
                $HEAD_file_text = "ref: refs/heads/master";
                fwrite($fp, $HEAD_file_text);
                fclose($fp);

                return true;
            }
            else{
                return false;
            }
        }
    }
?>