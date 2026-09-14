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

فایل‌های APK و EXE در این مخزن کپی نشده‌اند. چهار لینک دانلود به `https://fiboxtv.top/downloads/` متصل‌اند تا انتشار نسخه‌های جدید روی سرور فعلی ادامه پیدا کند. پخش تلویزیون و اتصال دستگاه همچنان در سرویس اصلی انجام می‌شود. انتقال DNS دامنهٔ `fiboxtv.top` به Pages نیازمند انتقال جداگانهٔ این سرویس‌ها و فایل‌های دانلود است.

برای پیش‌نمایش محلی، از داخل مخزن یک HTTP server اجرا کنید؛ برای نمونه `python -m http.server 8080`.

## منبع

صفحهٔ `resources/views/index_fiboxtv.blade.php` و دارایی‌های عمومی وابسته در SuperApp، نسخهٔ `e434347d9975e376b8b2966952d8adf4c35392c2`، تاریخ استخراج ۲۰۲۶-۰۹-۱۴. سورس backend و اطلاعات خصوصی SuperApp منتقل نشده‌اند. مجوزهای همراه Bootstrap و Vazirmatn حفظ شده‌اند.
