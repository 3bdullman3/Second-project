
        // إنشاء كائن جديد من نوع XMLHttpRequest لإرسال طلبات HTTP وجلب البيانات.
        let request = new XMLHttpRequest();

        // تهيئة الطلب بتحديد نوع الطلب "GET" وعنوان URL الذي سيتم الطلب منه.
        request.open("GET", "https://jsonplaceholder.typicode.com/posts");

        // تحديد نوع الاستجابة المتوقعة من الخدمة، في هذه الحالة JSON.
        request.responseType = "json";

        // إرسال الطلب إلى عنوان URL المحدد وانتظار الحصول على استجابة.
        request.send();

        // يُعيّن دالة سيتم تنفيذها عند تغير حالة الطلب.
        request.onreadystatechange = function() {
            // التحقق من أن حالة الطلب مكتملة وأن الطلب ناجح.
            if (request.readyState === 4 && request.status === 200) {
                // يُخزّن الاستجابة التي ينبغي أن تكون JSON في متغير posts.
                let posts = request.response;

                // حلقة للتكرار عبر المصفوفة posts.
                for (let post of posts) {
                    // يبحث عن عنصر في HTML يحمل المعرف "content" ويضيف عنوان المشاركات داخله.
                    document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`;
                    console.log(post.title);
                }
            }
        };