/*
Ace
//*/

const editor = ace.edit("editor");
editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Welcome to hackSandb0x!</h1>
  </body>
</html>`)
document.querySelector('#iframe').src = `data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgogIDxoZWFkPgogICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8aDE+V2VsY29tZSB0byBoYWNrU2FuZGIweCE8L2gxPgogIDwvYm9keT4KPC9odG1sPg==`
editor.setTheme("ace/theme/monokai");
editor.setFontSize(16);
editor.getSession().setMode("ace/mode/html");
editor.getSession().setUseWrapMode(true);
editor.getSession().setTabSize(2);
editor.$blockScrolling = Infinity;
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
editor.getSession().setMode("ace/mode/html");

editor.on('change', () => {
    const value = editor.getValue()
    if (value !== "") {
        document.querySelector('#iframe').src = `data:text/html;base64,${btoa(editor.getValue())}`
    }
    else {
        document.querySelector('#iframe').src = `data:text/html;base64,${btoa(editor.getValue())}`
    }
})


document.querySelector('#copySandbox').addEventListener('click', () => {
    const URL = window.location.href.replace(/create.php$/g, "view.php") + "?data=" + encodeURIComponent(btoa(editor.getValue()))

    navigator.clipboard.writeText(URL).then(
        () => {
            alert("Copied.")
        },
        () => {
            alert("Copy failed.")
        }
    );
})
document.querySelector('#openSandbox').addEventListener('click', () => {
    const URL = window.location.href.replace(/create.php$/g, "view.php") + "?data=" + encodeURIComponent(btoa(editor.getValue()))

    window.open(URL, '_blank')
})


document.querySelector('#imageConverter_file').addEventListener('change', (event) => {
    const uploadImage = document.querySelector('#imageConverter_file')
    const file = uploadImage.files[0]

    const reader = new FileReader()
    reader.onload = (event) => {
        const base64Text = event.currentTarget.result
        editor.insert(base64Text);
        uploadImage.value = "";
    }
    reader.readAsDataURL(file)
})

document.querySelector('#embedOpenSandbox').addEventListener('click', () => {
    const URL = window.location.href.replace(/create.php$/g, "embed.php") + "?data=" + encodeURIComponent(btoa(editor.getValue()))

    window.open(URL, '_blank')
})
