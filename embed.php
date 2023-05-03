<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>codeSandb0x Embed</title>

    <link rel="stylesheet" href="assets/normalize.css">
    <link rel="stylesheet" href="assets/embed.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs2015.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
</head>

<body>
    <div class="code">
        <pre><code class="html"><?php
        if (isset($_GET['data'])) {
            $data = base64_decode($_GET['data']);
            echo htmlspecialchars($data);
        } else {
            echo "Data is none. Please check url.";
        }
        ?></code></pre>
    </div>
    <div class="title">
        <div class="left">hackSandb0x</div>
        <div class="right">
            <a target="_blank" class="btn"
                href="<?php echo "http://localhost/hacksandb0x/view.php?data=" . urlencode(base64_encode($data)) ?>">run</a>&nbsp;/&nbsp;<a
                target="_blank" class="btn"
                href="<?php echo "http://localhost/hacksandb0x/embed.php?data=" . urlencode(base64_encode($data)) ?>">code</a>
        </div>
    </div>

    <script>
        hljs.highlightAll();
        hljs.addPlugin({
            'aft er:highlightElement': ({ el, result }) => {
                el.innerHTML = result.value.replace(/^/gm, '<span class="row-number"></span>');
            }
        });
    </script>
</body>

</html>
