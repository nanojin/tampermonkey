// ==UserScript==
// @name         Image Clicker Saver
// @namespace    http://nanosoft.net/
// @version      1.1.2
// @description  AI domination!
// @author       Nano
// @match        *://*/*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTBFMEQxO30NCgkuc3Qxe2ZpbGw6I0JBQjlBRTt9DQoJLnN0MntmaWxsOiNFMDk5NUU7fQ0KCS5zdDN7ZmlsbDojQkE4MTUyO30NCgkuc3Q0e2ZpbGw6I0M3NUM1Qzt9DQoJLnN0NXtmaWxsOiNGNUNGODc7fQ0KCS5zdDZ7ZmlsbDojNzZDMkFGO30NCgkuc3Q3e2ZpbGw6I0ZGRkZGRjt9DQoJLnN0OHtmaWxsOiM0RjVENzM7fQ0KPC9zdHlsZT4NCjxnIGlkPSJYTUxJRF8xXyI+DQoJPHBhdGggaWQ9IlhNTElEXzNfIiBjbGFzcz0ic3QwIiBkPSJNMjU2LDBjMTQxLDAsMjU2LDExNSwyNTYsMjU2UzM5Nyw1MTIsMjU2LDUxMlMwLDM5NywwLDI1NlMxMTUsMCwyNTYsMCIvPg0KCTxwYXRoIGlkPSJYTUxJRF83XyIgY2xhc3M9InN0MSIgZD0iTTE5My44LDMwNGMtMTcuMywwLTMyLjMsMTQuMi0zMi4zLDMyLjNjMCwzLjIsMCw1LjUsMC44LDcuOWMzLjktMTMuNCwxNS44LTIzLjYsMzAuNy0yMy42DQoJCWMxNSwwLDI3LjYsMTAuMiwzMC43LDIzLjZjMC44LTIuNCwwLjgtNS41LDAuOC03LjlDMjI1LjMsMzE4LjIsMjExLjEsMzA0LDE5My44LDMwNCBNNDMzLjIsMjYzLjljLTMuOSw5NC41LTc4LDE2My4xLTE3My4zLDE2OC42DQoJCWMtMi40LDAtMy45LDAtNi4zLDBjLTU4LjMsMC0xMjEuMy0zNy44LTEzMC02Ny43Yy0wLjgsMi40LTAuOCw0LjctMC44LDcuMUMxMTkuNyw0MDIuNSwxODksNDQ5LDI1NC40LDQ0OWMyLjQsMCwzLjksMCw2LjMsMA0KCQljOTguNS01LjUsMTczLjMtNzguOCwxNzMuMy0xNzYuNEM0MzMuMiwyNjkuNCw0MzMuMiwyNjcsNDMzLjIsMjYzLjkgTTg4LjIsMjI0LjVjLTkuNSwzOC42LDQyLjUsMjMuNiw0NS43LDcwLjljMCwxLjYsMCwzLjIsMCw0LjcNCgkJYzAtNi4zLDAtMTIuNiwwLTIwLjVDMTMwLjgsMjQwLjIsOTUuMywyNDMuNCw4OC4yLDIyNC41Ii8+DQoJPHBhdGggaWQ9IlhNTElEXzEwXyIgY2xhc3M9InN0MiIgZD0iTTI1Ny42LDgwLjNjLTY3LjcsMC0xNDQuMSw0My4zLTE2OC42LDEyNS4yYy0xMi42LDQxLjcsNDEuNywyNC40LDQ0LjksNzMuMw0KCQljMy4yLDM5LjQtOC43LDUyLjgtMTEsNzcuMmMtMy4yLDMyLjMsNzAuOSw4MC4zLDEzNy44LDc3LjJjOTguNS01LjUsMTczLjMtNzguOCwxNzMuMy0xNzYuNEM0MzMuMiwxNTcuNSwzNTYsODAuMywyNTcuNiw4MC4zDQoJCSBNMTkzLjgsMzY3LjljLTE3LjMsMC0zMi4zLTE0LjItMzIuMy0zMi4zYzAtMTcuMywxNC4yLTMyLjMsMzIuMy0zMi4zczMyLjMsMTQuMiwzMi4zLDMyLjNDMjI1LjMsMzUzLjcsMjExLjEsMzY3LjksMTkzLjgsMzY3LjkiDQoJCS8+DQoJPHBhdGggaWQ9IlhNTElEXzExXyIgY2xhc3M9InN0MyIgZD0iTTE2NywxNjcuOGMtMTcuMywwLTMyLjMsMTQuMi0zMi4zLDMyLjNzMTQuMiwzMi4zLDMyLjMsMzIuM2MxNy4zLDAsMzIuMy0xNC4yLDMyLjMtMzIuMw0KCQlTMTg1LjEsMTY3LjgsMTY3LDE2Ny44Ii8+DQoJPHBhdGggaWQ9IlhNTElEXzEyXyIgY2xhc3M9InN0MyIgZD0iTTI1Ny42LDEyNC41Yy0xNy4zLDAtMzIuMywxNC4yLTMyLjMsMzIuM2MwLDE3LjMsMTQuMiwzMi4zLDMyLjMsMzIuMw0KCQljMTcuMywwLDMyLjMtMTQuMiwzMi4zLTMyLjNDMjg5LjksMTM5LjQsMjc0LjksMTI0LjUsMjU3LjYsMTI0LjUiLz4NCgk8cGF0aCBpZD0iWE1MSURfMTNfIiBjbGFzcz0ic3QzIiBkPSJNMzQ3LjQsMTY1LjRjLTE3LjMsMC0zMi4zLDE0LjItMzIuMywzMi4zYzAsMTcuMywxNC4yLDMyLjMsMzIuMywzMi4zDQoJCWMxOC4xLDAsMzIuMy0xNC4yLDMyLjMtMzIuM0MzNzguOSwxNzkuNiwzNjQuNywxNjUuNCwzNDcuNCwxNjUuNCIvPg0KCTxwYXRoIGlkPSJYTUxJRF8xNF8iIGNsYXNzPSJzdDMiIGQ9Ik0zNzEsMjY2LjJjLTE3LjMsMC0zMi4zLDE0LjItMzIuMywzMi4zYzAsMTcuMywxNC4yLDMyLjMsMzIuMywzMi4zDQoJCWMxNy4zLDAsMzIuMy0xNC4yLDMyLjMtMzIuM1MzODkuMSwyNjYuMiwzNzEsMjY2LjIiLz4NCgk8cGF0aCBpZD0iWE1MSURfMTVfIiBjbGFzcz0ic3QzIiBkPSJNMjk4LjUsMzQ1Yy0xNy4zLDAtMzIuMywxNC4yLTMyLjMsMzIuM3MxNC4yLDMyLjMsMzIuMywzMi4zczMyLjMtMTQuMiwzMi4zLTMyLjMNCgkJUzMxNS45LDM0NSwyOTguNSwzNDUiLz4NCgk8Y2lyY2xlIGlkPSJYTUxJRF8xNl8iIGNsYXNzPSJzdDQiIGN4PSIxNjciIGN5PSIxODQuMyIgcj0iMzIuMyIvPg0KCTxjaXJjbGUgaWQ9IlhNTElEXzE3XyIgY2xhc3M9InN0NSIgY3g9IjI1Ny42IiBjeT0iMTQxIiByPSIzMi4zIi8+DQoJPGNpcmNsZSBpZD0iWE1MSURfMThfIiBjbGFzcz0ic3Q2IiBjeD0iMzQ3LjQiIGN5PSIxODIiIHI9IjMyLjMiLz4NCgk8Y2lyY2xlIGlkPSJYTUxJRF8xOV8iIGNsYXNzPSJzdDciIGN4PSIzNzEiIGN5PSIyODIuOCIgcj0iMzIuMyIvPg0KCTxjaXJjbGUgaWQ9IlhNTElEXzIwXyIgY2xhc3M9InN0OCIgY3g9IjI5OC41IiBjeT0iMzYwLjgiIHI9IjMyLjMiLz4NCjwvZz4NCjwvc3ZnPg0K
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const image_click = new AbortController()
    const clickReport = (event) => {
        //console.log(event.type)

        var a = document.createElement('a')
        Object.assign(a, {download: ''})
        //document.querySelectorAll(":hover img"
        //).forEach(
        //  (img, index) => {
        //  Object.assign(a, {href: img.src})
        //  console.log(a)
        //  a.click()
        //})
        Array.from(
            document.elementsFromPoint(
                event.clientX,
                event.clientY
            )
        ).filter(
            e => {return e.localName == 'img'}
        ).forEach(
            img => {
                Object.assign(a, {href: img.src})
                console.log(a)
                a.click()
            }
        )
    }

    document.addEventListener("click", function (event) { clickReport(event) }, true, { signal: image_click.signal })
})();