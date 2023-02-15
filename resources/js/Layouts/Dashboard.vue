<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <Sidebar></Sidebar>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <Topbar></Topbar>
          <!-- End of Topbar -->

          <!-- Begin Page Content -->
          <div class="container-fluid">
            <slot></slot>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <Footer></Footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div
      class="modal fade"
      id="logoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            Select "Logout" below if you are ready to end your current session.
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <!-- <a class="btn btn-primary" href="login.html">Logout</a> -->
            <inertia-link
              href="/login"
              class="btn btn-primary"
              method="get"
              as="button"
              type="button"
              data-dismiss="modal"
              >Logout</inertia-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@Components/Footer.vue'
import Sidebar from '@Components/Sidebar.vue'
import Topbar from '@Components/Topbar.vue'
export default {
  components: {
    Footer,
    Sidebar,
    Topbar
  },
  mounted() {
    // Toggle the side navigation
    $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
      $('body').toggleClass('sidebar-toggled')
      $('.sidebar').toggleClass('toggled')
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide')
      }
    })

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide')
      }

      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
        $('body').addClass('sidebar-toggled')
        $('.sidebar').addClass('toggled')
        $('.sidebar .collapse').collapse('hide')
      }
    })

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail
        this.scrollTop += (delta < 0 ? 1 : -1) * 30
        e.preventDefault()
      }
    })

    // Scroll to top button appear
    $(document).on('scroll', function () {
      var scrollDistance = $(this).scrollTop()
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn()
      } else {
        $('.scroll-to-top').fadeOut()
      }
    })

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (e) {
      var $anchor = $(this)
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top,
          },
          1000,
          'easeInOutExpo'
        )
      e.preventDefault()
    })
  },
}
</script>