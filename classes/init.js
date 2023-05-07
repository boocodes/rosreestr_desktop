import fs from "fs";

const Init = {
    initialization(){
        if (!fs.existsSync('.cfm')) {
            fs.mkdir('.cfm', (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Файл успешно инициализирован');
                }
            });
            fs.mkdir('./.cfm/logs', (err)=>{
                if(err){
                    console.log(err);
                }
            })

            fs.mkdir('./.cfm/info', (err)=>{
                if(err){
                    console.log(err);
                }
            })

            fs.open('./.cfm/description.txt', 'w', (err)=>{
                if(err) throw err;
            })
            fs.appendFile('./.cfm/description.txt', 'Данный файл содержит текст описания контейнера, чтобы изменить данное свойство отредактируйте файл', (err)=>{
                if(err) throw err;
            })
            fs.open('./.cfm/HEAD', 'w', (err)=>{
                if(err) throw err;
            })
            fs.appendFile('./.cfm/HEAD', 'ref: refs/heads/master', (err)=>{
                if(err) throw err;
            })

        } else {
            console.log('В данной директории уже инициализирован контейнер');
        }
    },
}

export default Init;