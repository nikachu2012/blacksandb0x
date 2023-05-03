<?php
header('Content-Type: text/html; charset=UTF-8');

$version = "1.0";
if (isset($_GET['debug']) && $_GET['debug'] == "true") {
    $debug = true;
} else {
    $debug = false;
}

if (isset($_GET['data'])) {
    $data = base64_decode($_GET['data']);
}

if ($debug) {
    echo '<pre><code>';
    echo "hackSandb0x v{$version} debug_mode\n";
    echo 'load Date: ' . date('Y-m-d H:i:s') . "\n";
    echo 'input Data: ' . $_GET['data'] . "\n";
    echo 'convert Data: ' . htmlspecialchars($data) . "\n";
    echo '</pre></code>';
}
echo "$data";
?>

