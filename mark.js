
const handleDateSelection = (url, imageSrc) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
            var firstDiv = document.getElementById('first');
            var divIds = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
            divIds.forEach(function (id) {
                var div = document.getElementById(id);
                if (div) {
                    div.querySelector('img').src = imageSrc;
                }
            });
        } else {
            console.log("Some error occurred while fetching data.");
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function () {
    var calendarInput = document.querySelector('.calendar-input input[type="date"]');
    var timeSelect = document.getElementById('time');

    calendarInput.addEventListener("change", function (event) {
        updateImage();
    });

    timeSelect.addEventListener("change", function (event) {
        updateImage();
    });

    function updateImage() {
        var selectedDate = calendarInput.value;
        var selectedTime = timeSelect.value;
        var url;
        var imageSrc;

        switch (selectedDate) {
            case "2024-02-10":
                url = 'https://jsonplaceholder.typicode.com/todos/1';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/x_5nT-fb3ujwECflHO1TARHd1iAWXHE2DvDaGMlMvWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9waWNz/dW0ucGhvdG9zLzY0/MC80ODAvP2ltYWdl/PTk' : 'https://imgs.search.brave.com/8eH3J9KcWyWekyYvq-diAiIig5VZUr9jcOP8OYf3A7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL3ZpZGVv/SW1hZ2UvdmFyaW91/cy1yYW5kb20taW1h/Z2VzLWluLWFsbC10/eXBlcy1mcm9tLWZv/dG9yLXJhbmRvbS1p/bWFnZS1nZW5lcmF0/b3IuanBn';
                break;
            case "2024-02-15":
                url = 'https://jsonplaceholder.typicode.com/todos/2';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/4MOIEhdU1sD-vJJGS_WtVETX-SAma44sw6icg_yWzHc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhL2Rl/LzI1LzJhZGUyNWYx/NjJkNmE0ZmQ3MjFj/OWMxMTczZGI2YmI0/LmpwZw' : 'https://imgs.search.brave.com/VH-SoidUc6vaPq0vjeSfOblvUk2Bukc5u7t4C13Hzuo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oYXRy/YWJiaXRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/MS90YWZlbC0xLmpw/Zw';
                break;
            case "2024-02-20":
                url = 'https://jsonplaceholder.typicode.com/todos/3';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/ByaHRVO_0A2BSYlarns5zLZ6eZuC2E9J_09ok0l13V0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cGhvbmUtdGFraW5n/LXBob3RvLW9mLW11/c2V1bS5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w' : 'https://imgs.search.brave.com/nhDizHNGc5q-bgrcxRQWu2cu8EIrEHKQxG9Bp6YLkGg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aWNlLWNyYWNrcy1v/bi1hLWZyb3plbi1z/ZWEuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA';
                break;
            case "2024-02-25":
                url = 'https://jsonplaceholder.typicode.com/todos/4';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/odUFKzQc0ft0zrOGXYRiFAeSLQiB3XAZH7B57p86NaI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YWJsb2cuY2RucGsu/bmV0L3NpdGVzLzkv/MjAyMi8wNi9Xb3Js/ZC1QcmVzcy1QaG90/by1Db3Zlci5wbmc' : 'https://imgs.search.brave.com/HnIZcKozk8lWhsnOsNS5fvool84oEMPLRIsGZyKrt1Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTk3/Nzk1OS9wZXhlbHMt/cGhvdG8tOTk3Nzk1/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA';
                break;
            case "2024-02-28":
                url = 'https://jsonplaceholder.typicode.com/todos/5';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/CD4NJU5iokO1UzgtKM0MjuKAZ8ZsWPCGBtRjmgujwfE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTQxNTEyMjgtMTRk/OWRlZjY1NmU0P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4T0h4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw.jpeg' : 'https://imgs.search.brave.com/9a_LWKy4goP-HtZqY3GhslMdxWhSh9LTQrl8KaUzFvw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aS13YWxrLWEtbG9u/ZWx5LXJvYWQuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA';
                break;
            case "2024-03-02":
                url = 'https://jsonplaceholder.typicode.com/todos/6';
                imageSrc = (selectedTime === 'AM') ? 'https://imgs.search.brave.com/jbSUu7m_V4R7GpK6bPM-KymDAvXOjM9dnIyqVPmVbB8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/ODg3NzUzNS9waG90/by9zbWlsaW5nLXdv/bWFuLXN0YW5kaW5n/LWluLWZyb250LW9m/LWJ1aWxkaW5nLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0z/ZTdCdWFUSFQ3Wi1J/V19TWE9xWEdCSWZ5/UUxCNHh4d3hGckw1/dWJsV2lrPQ' : 'https://imgs.search.brave.com/gP5N4wsl4QiUxxK6F6uw2QgSalkeM-D26gbLEjpV7Ys/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODI4ODM2OTM3NDIt/NWQyNWZiZWYyYzY1/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZI/Qm9iM1J2ZkdWdWZE/QjhmREI4Zkh3dw.jpeg';
                break;
            // Add cases for other dates as needed
            default:
                break;
        }

        handleDateSelection(url, imageSrc);

        var emptyDiv = document.querySelectorAll('.xyz');
        if (emptyDiv.length > 0) {
            emptyDiv.forEach((div) => {
                div.style.display = 'none';
            });
        }
    }
});

$(document).ready(function () {
    $('[data-toggle="datepicker"]').datepicker({
        format: 'mm-dd-yyyy'
    });
    // Available date placeholders:
    // Year: yyyy
    // Month: mm
    // Day: dd
    if (window.innerWidth < 768) {
        $('[data-toggle="datepicker"]').attr('readonly', 'readonly')
    }
});