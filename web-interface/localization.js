﻿var localization = {};
localization["en"] = {};
localization["it"] = {};
localization["pl"] = {};
localization["sk"] = {};
localization["cs"] = {};

localization.en["reboot"] = "Reboot";
localization.en["reboot_success"] = "Device was successfully rebooted";
localization.en["reload"] = "Reload";
localization.en["reload_success"] = "The application was successfully reloaded";
localization.en["rename"] = "Rename";
localization.en["new_name"] = "New name";
localization.en["save"] = "Save";
localization.en["delete_file"] = "Delete file";
localization.en["delete_file_now"] = "Delete file now";
localization.en["delete_file_confirm"] = "Do you want to delete file";
localization.en["drop_to_upload"] = "Drop files here to upload";
localization.en["invalid_file_type"] = "Unsupported file type";
localization.en["file_too_big"] = "File is too big ({{filesize}} MB), max size is {{maxFilesize}} MB";
localization.en["downloader_info"] = "Information about downloading";
localization.en["show_file"] = "Show file";
localization.en["create_folder"] = "Create new folder";
localization.en["folder_name"] = "Folder name";

localization.it["reboot"] = "Riavvio";
localization.it["reboot_success"] = "Il dispositivo è stato riavviato correttamente";
localization.it["reload"] = "Ricaricare";
localization.it["reload_success"] = "L'applicazione è stata ricaricata correttamente";
localization.it["rename"] = "Rinominare";
localization.it["new_name"] = "Nuovo nome";
localization.it["save"] = "Salvare";
localization.it["delete_file"] = "Elimina il file";
localization.it["delete_file_now"] = "Elimina il file ora";
localization.it["delete_file_confirm"] = "Vuoi eliminare il file";
localization.it["drop_to_upload"] = "Trascina i file qui per caricarli";
localization.it["invalid_file_type"] = "Tipo di file non supportato";
localization.it["file_too_big"] = "Il file è troppo grande ({{filesize}} MB), la dimensione massima è {{maxFilesize}} MB";
localization.it["downloader_info"] = "Informazioni sul download"
localization.it["show_file"] = "Mostra il file";
localization.it["create_folder"] = "Crea una nuova cartella";
localization.it["folder_name"] = "Nome della cartella";

localization.pl["reboot"] = "Restart";
localization.pl["reboot_success"] = "Urządzenie zostało pomyślnie zrestartowane";
localization.pl["reload"] = "Przeładuj aplikację";
localization.pl["reload_success"] = "Aplikacja została pomyślnie przeładowana";
localization.pl["rename"] = "Zmień nazwę";
localization.pl["new_name"] = "Nowa nazwa";
localization.pl["save"] = "Zapisz";
localization.pl["delete_file"] = "Usuń bieżący plik";
localization.pl["delete_file_now"] = "Usuń bieżący plik teraz";
localization.pl["delete_file_confirm"] = "Czy chcesz usunąć plik";
localization.pl["drop_to_upload"] = "Upuść pliki tutaj, aby załadować";
localization.pl["invalid_file_type"] = "Nieobsługiwany typ pliku";
localization.pl["file_too_big"] = "Plik jest za duży ({{filesize}} MB), maksymalny rozmiar to {{maxFilesize}} MB";
localization.pl["downloader_info"] = "Informacje o pobieraniu";
localization.pl["show_file"] = "Pokaż plik";
localization.pl["create_folder"] = "Utwórz nowy folder";
localization.pl["folder_name"] = "Folder nazwa";

localization.sk["reboot"] = "Reštartovanie zariadenia";
localization.sk["reboot_success"] = "Zariadenie bolo úspešne reštartované";
localization.sk["reload"] = "Reštartovanie aplikácie";
localization.sk["reload_success"] = "Aplikácia bola úspešne reštartovaná";
localization.sk["rename"] = "Premenovať";
localization.sk["new_name"] = "Nový názov";
localization.sk["save"] = "Uložiť";
localization.sk["delete_file"] = "Zmazať súbor";
localization.sk["delete_file_now"] = "Zmazať súbor teraz";
localization.sk["delete_file_confirm"] = "Naozaj chcete zmazat subor";
localization.sk["drop_to_upload"] = "Sem vložte nový súbor";
localization.sk["invalid_file_type"] = "Nepodporovaný typ súboru";
localization.sk["file_too_big"] = "Súbor je príliš veľký ({{filesize}} MB), maximálna veľkosť je {{maxFilesize}} MB";
localization.sk["downloader_info"] = "Informácie o sťahovaní";
localization.sk["show_file"] = "Zobraziť súbor";
localization.sk["create_folder"] = "Vytvoriť nový adresár";
localization.sk["folder_name"] = "Názov adresára";

localization.cs["reboot"] = "Restartování zařízení";
localization.cs["reboot_success"] = "Zařízení bylo úspěšně restartováno";
localization.cs["reload"] = "Restartování aplikace";
localization.cs["reload_success"] = "Aplikace byla úspěšně restartována";
localization.cs["rename"] = "Přejmenovat";
localization.cs["new_name"] = "Nový název";
localization.cs["save"] = "Uložit";
localization.cs["delete_file"] = "Smazat soubor";
localization.cs["delete_file_now"] = "Smazat soubor nyní";
localization.cs["delete_file_confirm"] = "Opravdu chcete smazat soubor";
localization.cs["drop_to_upload"] = "Sem vložte nový soubor";
localization.cs["invalid_file_type"] = "Nepodporovaný typ souboru";
localization.cs["file_too_big"] = "Soubor je příliš velký ({{filesize}} MB), maximální velikost je {{maxFilesize}} MB";
localization.cs["downloader_info"] = "Informace o stahování";
localization.cs["show_file"] = "Zobraziť soubor";
localization.cs["create_folder"] = "Vytvořit nový adresář";
localization.cs["folder_name"] = "Název adresáře";

function localizeString(key) {
	return localization[choosen_language][key];
}