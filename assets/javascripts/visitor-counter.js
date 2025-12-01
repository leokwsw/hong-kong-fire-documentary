document.addEventListener("DOMContentLoaded", function() {
    // Load Busuanzi script
    var script = document.createElement("script");
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    script.async = true;
    document.body.appendChild(script);

    // Create counter element
    var headerInner = document.querySelector(".md-header__inner");
    if (headerInner) {
        var counter = document.createElement("div");
        counter.className = "md-header__option";
        counter.style.marginLeft = "10px";
        counter.style.marginRight = "10px";
        counter.style.fontSize = "0.7rem";
        counter.style.color = "inherit";
        counter.style.whiteSpace = "nowrap";
        
        // Use busuanzi container and value spans
        // Initially hidden, busuanzi will show it when loaded
        counter.innerHTML = '<span id="busuanzi_container_site_pv" style="display:none">Visitors: <span id="busuanzi_value_site_pv">--</span></span>';
        
        // Try to insert before the search box or repository link
        // The order in DOM is Title -> [Space] -> Search -> Source (Repo)
        // We want it likely before Search or Source.
        
        var search = document.querySelector(".md-search");
        var source = document.querySelector(".md-header__source");
        
        // Insert before search if exists, else before source, else append
        if (source) {
             headerInner.insertBefore(counter, source);
        } else if (search) {
             headerInner.insertBefore(counter, search);
        } else {
             headerInner.appendChild(counter);
        }
    }
});

