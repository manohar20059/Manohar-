// script.js — updated handlers: stopPropagation for open buttons, FAB toggle, safer outside-click checks, removed JS hide of widgets
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    
    // Toggle sidebar
    if (hamburger && sidebar) {
      hamburger.addEventListener('click', function(e) {
          e.stopPropagation();
          sidebar.classList.add('active');
      });
    }
    
    // Close sidebar
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          sidebar.classList.remove('active');
      });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar && !sidebar.contains(event.target) && event.target !== hamburger) {
            sidebar.classList.remove('active');
        }
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-theme');
          
          // Toggle icon between moon and sun
          const icon = themeToggle.querySelector('i');
          if (document.body.classList.contains('dark-theme')) {
              icon.classList.remove('fa-moon');
              icon.classList.add('fa-sun');
          } else {
              icon.classList.remove('fa-sun');
              icon.classList.add('fa-moon');
          }
      });
    }
    
    // Close sidebar when a link is clicked (for mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (sidebar) sidebar.classList.remove('active');
        });
    });

    // Hook popup triggers (stopPropagation to avoid immediate outside-close)
    const s1 = document.getElementById('openChatbotFromSidebar');
    const s2 = document.getElementById('openChatbotFromService');
    const s3 = document.getElementById('openSocialFromSidebar');
    const fab = document.getElementById('chat-fab');

    const chatbotPopup = document.getElementById('chatbotPopup');
    const socialPopup = document.getElementById('socialChatbotPopup');

    function openCreativeServicePopup(e){
      if(e && e.stopPropagation) e.stopPropagation();
      if(chatbotPopup) chatbotPopup.classList.add('active');
    }
    function openSocialPopup(e){
      if(e && e.stopPropagation) e.stopPropagation();
      if(socialPopup) socialPopup.classList.add('active');
    }

    if (s1) s1.addEventListener('click', openCreativeServicePopup);
    if (s2) s2.addEventListener('click', openCreativeServicePopup);
    if (s3) s3.addEventListener('click', openSocialPopup);

    // FAB toggles chatbot popup
    if (fab) {
      fab.addEventListener('click', function(e){
        e.stopPropagation();
        if (chatbotPopup) chatbotPopup.classList.toggle('active');
      });
    }

    // Close handlers for popups
    const closeChat = document.getElementById('closeChatbot');
    if (closeChat && chatbotPopup) closeChat.addEventListener('click', function(e){ e.stopPropagation(); chatbotPopup.classList.remove('active'); });
    const closeSocial = document.getElementById('closeSocialChatbot');
    if (closeSocial && socialPopup) closeSocial.addEventListener('click', function(e){ e.stopPropagation(); socialPopup.classList.remove('active'); });

    // Prevent popups from closing when clicking inside them
    if (chatbotPopup) chatbotPopup.addEventListener('click', function(e){ e.stopPropagation(); });
    if (socialPopup) socialPopup.addEventListener('click', function(e){ e.stopPropagation(); });

    // Global outside-click: close popups only when click is outside popups and not on known triggers
    document.addEventListener('click', function(event){
      const target = event.target;
      const clickedOnTrigger = !!(target.closest('#openChatbotFromSidebar') || target.closest('#openChatbotFromService') || target.closest('#openSocialFromSidebar') || target.closest('#chat-fab'));
      if (chatbotPopup && !chatbotPopup.contains(target) && !clickedOnTrigger){
        chatbotPopup.classList.remove('active');
      }
      if (socialPopup && !socialPopup.contains(target) && !clickedOnTrigger){
        socialPopup.classList.remove('active');
      }
    });

});

// Theme Toggle persistent (outside DOMContentLoaded for initial load)
const _themeToggle = document.querySelector('.theme-toggle');
const _body = document.body;
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    _body.setAttribute('data-theme', currentTheme);
    (function updateThemeIcon(){
      const icon = _themeToggle && _themeToggle.querySelector('i');
      if (!icon) return;
      if (_body.getAttribute('data-theme') === 'dark') {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
    })();
}

if (_themeToggle) {
  _themeToggle.addEventListener('click', () => {
      if (_body.getAttribute('data-theme') === 'dark') {
          _body.setAttribute('data-theme', 'light');
      } else {
          _body.setAttribute('data-theme', 'dark');
      }
      localStorage.setItem('theme', _body.getAttribute('data-theme'));
      const icon = _themeToggle.querySelector('i');
      if (!_body) return;
      if (_body.getAttribute('data-theme') === 'dark') {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      }
  });
}

// Smooth scrolling for anchor links (generic)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
