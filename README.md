# downloaderfiboxtv

نسخهٔ استاتیک صفحهٔ دانلود onFiBOX، استخراج‌شده از SuperApp با حفظ ظاهر، تصاویر، فونت و راهنمای اتصال تلویزیون.

## GitHub Pages

این مخزن بدون PHP، Laravel، Node.js یا مرحلهٔ build اجرا می‌شود. در **Settings → Pages**، گزینهٔ **Deploy from a branch** و سپس **main / (root)** را انتخاب کنید.

آدرس پیش‌فرض: https://saeeditbaz.github.io/downloaderfiboxtv/

مسیر تصاویر، فونت‌ها و CSS/JS نسبی است؛ بنابراین هم در مسیر پروژهٔ GitHub Pages و هم روی دامنهٔ اختصاصی کار می‌کند. فایل `.nojekyll` پردازش Jekyll را غیرفعال می‌کند.

## ویرایش

- محتوای صفحه و لینک‌های دانلود: `index.html`
- ظاهر و چیدمان واکنش‌گرا: `assets/css/onfibox-download.css`
- تصاویر: `images/onfibox/`
- فونت و مجوز آن: `assets/fonts/`
- سال کپی‌رایت به‌صورت خودکار با `assets/js/site.js` به‌روز می‌شود.
- انتخاب زبان در اولین ورود نمایش داده می‌شود و با کلید `onfibox.language` و مقدار `en` یا `fa` در `localStorage` ذخیره می‌شود. دکمهٔ بالای صفحه امکان تغییر زبان را فراهم می‌کند. اگر ذخیره‌سازی مرورگر غیرفعال باشد، انتخاب برای همان بازدید کار می‌کند.
- ترجمهٔ محتوا، راهنما و متن‌های دسترس‌پذیری: `assets/js/translations.js`. چیدمان انگلیسی LTR و فارسی RTL است. انتخاب زبان فقط نمایش صفحه را تغییر می‌دهد و کنترل دسترسی منطقه‌ای اپ را پیاده‌سازی نمی‌کند.

فایل‌های APK و EXE در GitHub Releases نگهداری می‌شوند. لینک‌های عمومی دانلود `https://fiboxtv.top/onfibox.apk`، `https://fiboxtv.top/onfiboxtv.apk` و `https://fiboxtv.top/onFiBOX_PC_Cast.exe` هستند. قوانین انتقال نشانی 302 در CDN آروان این سه مسیر را به فایل هم‌نام در `releases/latest/download/` هدایت می‌کنند. برای حفظ این لینک‌ها، نام فایل‌های Release ثابت بماند. سایت همچنان روی GitHub Pages است و سرویس ابری رکورد اصلی دامنه برای اجرای قوانین روشن است.

برای پیش‌نمایش محلی، از داخل مخزن یک HTTP server اجرا کنید؛ برای نمونه `python -m http.server 8080`.

## منبع

صفحهٔ `resources/views/index_fiboxtv.blade.php` و دارایی‌های عمومی وابسته در SuperApp، نسخهٔ `e434347d9975e376b8b2966952d8adf4c35392c2`، تاریخ استخراج ۲۰۲۶-۰۹-۱۴. سورس backend و اطلاعات خصوصی SuperApp منتقل نشده‌اند. مجوزهای همراه Bootstrap و Vazirmatn حفظ شده‌اند.
