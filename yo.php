<?php
if (isset($_POST['text'])) {
    echo "Yo! " . $_POST['text'];
} else {
    http_response_code(400);
    echo 'expects a text parameter';
}