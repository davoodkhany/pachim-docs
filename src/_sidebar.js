const navigation = [
    { name: 'آموزش ویدیویی', href: 'https://roocket.ir/series/server-managment-with-pachim' },
    {
        name: 'شروع مستندات',
        open : true,
        children: [
            { name: 'معرفی پَچیم', href: '/getting-started/introduction' },
        ],
    },
    {
        name: 'حساب کاربری',
        children: [
            { name: 'حساب کاربری شما', href: '/accounts/your-account' },
            { name: 'حلقه همکاران', href: '/accounts/circles' },
            { name: 'مدیریت مخزن‌ها', href: '/accounts/source-control' },
            { name: 'کلید‌های SSH', href: '/accounts/ssh' },
            { name: 'دستورالعمل‌های کمکی', href: '/accounts/help-instructions' },
            // { name: 'تگ‌ها', href: '#' },
        ],
    },
    {
        name: 'سرورها',
        children: [
            { name: 'تهیه سرور', href: '/servers/providers' },
            { name: 'انواع سرورها', href: '/servers/types' },
            { name: 'مدیریت', href: '/servers/managment' },
            { name : 'دستورالعمل‌ها' , href: '/servers/recipes'  } ,
            { name: 'دسترسی ROOT / امنیت', href: '/servers/root-access-and-security' },
            { name: 'کلید‌های SSH / دسترسی Git', href: '/servers/ssh' },
            { name: 'دیتابیس‌ها', href: '/servers/databases' },
            { name: 'پشتیبانی گیری دیتابیس', href: '/servers/backups' },
            { name: 'PHP', href: '/servers/php' },
            { name: 'پکیج‌های PHP', href: '/servers/php-packages' },
            { name: 'توزیع بار', href: '/servers/load-balancing' },
            { name: 'قالب Nginx', href: '/servers/nginx-templates' },
            { name: 'ماینتور سرور', href: '/servers/monitoring' },
            { name: 'سرپرست', href: '/servers/supervisor' },
            { name: 'کش‌ها', href: '/servers/caches' },
            { name: 'شبکه', href: '/servers/network' },
            { name: 'زمانبدی (Scheduler)', href: '/servers/scheduler' },
            { name: 'دستورالعمل‌های کمکی', href: '/servers/help-instructions' },
        ],
    },
    {
        name: 'سایت‌ها',
        children: [
            {
                name: 'راه اندازی سایت',
                children: [
                    { name : 'انواع برنامه‌ها' , href : '/sites/setup-site/project-types'},
                    { name: 'ایجاد سایت' , href : '/sites/setup-site/create-site'},
                    { name : 'اتصال دامنه به سایت' , href : '/sites/setup-site/connect-domain-to-site'},
                    { name : 'راه‌اندازی پروژه' , href : '/sites/setup-site/setup-application'},
                    { name : 'توضیحات تکمیلی' , href : '/sites/setup-site/tips'},
                ]
            },
            {
                name: 'برنامه‌های اصلی'
                , children: [
                    { name: 'PHP', href: '/sites/app-deploy/php' },
                    {
                        name: 'لاراول ',
                        children: [
                            { name : 'راه‌‌اندازی' , href : '#'},
                            { name: 'صف‌ها' , href : '/sites/app-deploy/laravel/queues'}
                        ]
                    },
                    { name: 'Node.js', href: '#' },
                    { name: 'Next.js', href: '#' },
                    { name: 'Nuxt.js', href: '#' },
                    { name: 'Vue', href: '#' },
                    { name: 'React', href: '#' },
                ],
            },
            {
                name: 'برنامه‌های آماده'
                , children: [
                    { name: 'وردپرس', href: '#' },
                    { name: 'phpMyAdmin', href: '#' },
                ],
            },
            { name: 'استقرارها', href: '/sites/deployments' },
            { name: 'اجرای کامند', href: '/sites/commands' },
            { name: 'پکیج‌های PHP', href: '/sites/php-packages' },
            { name: 'قوانین امنیتی', href: '/sites/security-rules' },
            { name: 'تغییر مسیرها', href: '/sites/redirects' },
            { name: 'گواهی SSL', href: '/sites/ssl' },
            { name: 'ایزوله سازی سایت', href: '/sites/user-isolation' },
            { name: 'لاگ سایت', href: '/sites/logs' },
            { name: 'دستورالعمل‌های کمکی', href: '/sites/help-instructions' },
        ],
    },
]

export default navigation;