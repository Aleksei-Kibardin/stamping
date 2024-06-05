<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$phone = $data['number'];
$email = $data['email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kibardin2000@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'g1zE5mbRkH9C8vvDFSD1'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kibardin2000@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('spb9714664@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                   

$mail->Subject = 'Заявка с Первого завода';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if($mail->send()) {
    // Если письмо успешно отправлено, перенаправляем пользователя на предыдущую страницу
    header("Location: " . $_SERVER["HTTP_REFERER"]);
    exit;
} else {
    // Если произошла ошибка при отправке письма, выводим сообщение об ошибке
    echo 'Error';
    header("Location: " . $_SERVER["HTTP_REFERER"]);
    exit;
}
?>