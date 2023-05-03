<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hackSandb0x Data Creator</title>

    <link rel="stylesheet" href="assets/normalize.css">
    <link rel="stylesheet" href="assets/create.css">
</head>

<body>
    <div class="navbar">
        <span class="title">hackSandb0x</span>
        <button id="copySandbox">Copy</button>
        <button id="openSandbox">Open</button>
        <button id="embedOpenSandbox">Embed</button>
        <!-- <button id="exportSandbox">Export</button> -->
        <div style="margin-left: 5px;">
            Image Converter:<input type="file" accept="image/*" id="imageConverter_file">
        </div>
    </div>
    <div class="wrapper">
        <div class="left">
            <div id="editor"></div>
        </div>
        <div class="right">
            <iframe src="" frameborder="0" id="iframe"></iframe>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ext-language_tools.js"></script>
    <script src="assets/script.js"></script>
</body>

</html>
