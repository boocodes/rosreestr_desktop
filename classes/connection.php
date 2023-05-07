<?php
include_once "http.php";

    class Connection{
        public function get_contain_connection(){
            $arrContextOptions=array(
                "ssl"=>array(
                    "verify_peer"=>false,
                    "verify_peer_name"=>false,
                ),
            );
            $url = "https://rosreestr/api/desktop_app/get_connection.php";


            $data = file_get_contents($url, false, stream_context_create($arrContextOptions));

            return $data;
        }
        public function httpPost($url, $data){
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($curl);
            curl_close($curl);
            return $response;
        }
        public function authinicate_user_data($login, $password){
            $url = "https://rosreestr/api/user/login.php?login=" .$login. "&password=" . $password;

            $result = json_decode(file_get_contents($url, false, stream_context_create(array(
                'http' => array(
                    'method'  => 'POST',
                    'header' => 'Content-type:application/x-www-form-urlencoded',

                ),
                "ssl" => array(
                    "verify_peer"=>false,
                    "verify_peer_name"=>false,
                )
            ))), true);
            if($result == null) return false;
            else{
                return true;
            }
        }
    }

?>