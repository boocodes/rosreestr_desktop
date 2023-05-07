import Init from "./classes/init.js";


if(process.argv.length === 2){
    console.log("Далее представлены полезные команды для работы с контейнерным пакетным менеджером \n");
    console.log("Отдел инициализации:\n");
    console.log("    init      Используется для инициализации пустого рабочего пространства. Вызывается без обязательных аргументов.\n");
    console.log("Отдел отслеживания:\n");
    console.log("    add       Используется для добавления отслеживаемых файлов. Список аргументов: --all (добавление всех измененных файлов), --{current_file_name} (Добавление конкретного файла)\n");
    console.log("    commit    Создание комментария. Используется для добавления группы измененных файлов под видом именованной ветки. Список аргументов: -m (Принимает строку названия комментария)\n");
    console.log("    push      Отправляет изменения на ветку. Список аргументов: --{workspace_name} (имя рабочего пространства), --{branch_name} (имя ветки для вливания)\n");
    console.log("    branch    Используется для создания ветки. Список аргументов --{branch_name} (Список ветки для создания)\n");
    console.log("    checkout  Используется для переключения веток. Список аргументов --{branch_name} (Название ветки для переключения)\n");
    console.log("Отдел синхронизации:\n");
    console.log("    connect   Используется для подключения к удаленному серверу. Принимает строго следующие аргументы: --{имя пользователя} --{пароль}\n");
    console.log("    pull      Используется для принятия всех изменений в текущей ветке с удаленного сервера\n");
}

if(process.argv[2] === "init"){
    Init.initialization();
}