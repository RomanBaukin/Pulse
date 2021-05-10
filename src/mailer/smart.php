<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = false;
    $mail->SMTPDebug = 3;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.roman-baukin.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'admin@roman-baukin.ru'; // Логин на почте
    $mail->Password   = 'gggHHH70970588GGGhhh'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 25;
    $mail->setFrom('admin@roman-baukin.ru', 'Pulse'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('rbaukin@mail.ru');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = 'Данные';
    $mail->Body    = '
            Пользователь оставил данные <br> 
        Имя: ' . $name . ' <br>
        Номер телефона: ' . $phone . '<br>
        E-mail: ' . $email . '';   

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);