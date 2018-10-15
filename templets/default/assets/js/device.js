(function() {
    try {
        var browser = {
            versions: function() {
                var u = navigator.userAgent;
                return {
                    // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    // android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    // iPhone: u.indexOf('iPhone') > -1,
                    iPad: u.indexOf('iPad') > -1,
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/)
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
        function resize() {
            var w = window.screen.width || window.screen.availWidth || 750;
            var url = location.href, pathName = location.pathname;
            if (pathName.indexOf('/a/') !== -1 && pathName.indexOf('/a/n') === -1) {  // 编辑的新闻不作处理
                if(browser.versions.mobile || (browser.versions.iPad && w < 750)){  // ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/QQ/i) == "qq"
                    location.href = url.replace('/a/', '/mobile/');
                }
            }
        }
        resize();
    } catch (e) {}
})();
