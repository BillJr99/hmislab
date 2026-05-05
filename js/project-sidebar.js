(function () {
  "use strict";

  var overlay = document.querySelector(".project-sidebar-overlay");
  if (!overlay) return;

  function openSidebar(sidebar, trigger) {
    sidebar.classList.add("is-open");
    sidebar.removeAttribute("aria-hidden");
    overlay.classList.add("is-open");
    document.body.classList.add("sidebar-open");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    var closeBtn = sidebar.querySelector("[data-sidebar-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closeSidebar(sidebar, trigger) {
    sidebar.classList.remove("is-open");
    sidebar.setAttribute("aria-hidden", "true");
    overlay.classList.remove("is-open");
    document.body.classList.remove("sidebar-open");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  }

  function getOpenSidebar() {
    return document.querySelector(".project-sidebar.is-open");
  }

  function getTriggerForSidebar(sidebar) {
    // There may be two triggers per project (title + "See publications" CTA).
    // Return the first one that was clicked (aria-expanded="true").
    var id = sidebar.id;
    var expanded = document.querySelector(
      '.project-title-btn[aria-controls="' + id + '"][aria-expanded="true"]'
    );
    if (expanded) return expanded;
    return document.querySelector('.project-title-btn[aria-controls="' + id + '"]');
  }

  document.addEventListener("click", function (e) {
    // Open via any title trigger button.
    var trigger = e.target.closest(".project-title-btn");
    if (trigger) {
      var sidebarId = trigger.getAttribute("aria-controls");
      var sidebar = document.getElementById(sidebarId);
      if (sidebar) {
        // Close any already-open sidebar first.
        var current = getOpenSidebar();
        if (current && current !== sidebar) {
          closeSidebar(current, getTriggerForSidebar(current));
        }
        openSidebar(sidebar, trigger);
      }
      return;
    }

    // Close via the X button inside the sidebar.
    var closeBtn = e.target.closest("[data-sidebar-close]");
    if (closeBtn) {
      var sidebar = closeBtn.closest(".project-sidebar");
      if (sidebar) closeSidebar(sidebar, getTriggerForSidebar(sidebar));
      return;
    }

    // Close via overlay click.
    if (e.target === overlay) {
      var open = getOpenSidebar();
      if (open) closeSidebar(open, getTriggerForSidebar(open));
    }
  });

  var FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
    'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable(el) {
    return Array.prototype.slice.call(el.querySelectorAll(FOCUSABLE));
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var open = getOpenSidebar();
      if (open) closeSidebar(open, getTriggerForSidebar(open));
      return;
    }

    if (e.key !== "Tab") return;
    var open = getOpenSidebar();
    if (!open) return;

    var focusable = getFocusable(open);
    if (focusable.length === 0) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
