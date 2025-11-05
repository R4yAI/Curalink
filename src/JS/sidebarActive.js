  document.addEventListener('DOMContentLoaded', function() {
          const hamburgerMenu = document.querySelector('.hamburger-menu');
          const sidebar = document.querySelector('.sidebar');
          const sidebarOverlay = document.querySelector('.sidebar-overlay');
          
          console.log('Elements trouvés:', {
              hamburgerMenu: !!hamburgerMenu,
              sidebar: !!sidebar,
              sidebarOverlay: !!sidebarOverlay
          });
          
          if (hamburgerMenu && sidebar && sidebarOverlay) {
              hamburgerMenu.addEventListener('click', function() {
                  console.log('Menu clicked! Sidebar should open.');
                  sidebar.classList.add('active');
                  sidebarOverlay.classList.add('active');
              });
              
              sidebarOverlay.addEventListener('click', function() {
                  console.log('Overlay clicked! Sidebar should close.');
                  sidebar.classList.remove('active');
                  sidebarOverlay.classList.remove('active');
              });
          } else {
              console.error('Elements manquants!');
          }
      });

