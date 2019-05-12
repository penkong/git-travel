import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.refreshWaypoints();
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWayPoint();
    //  make link yellow
    this.pageSections = $(".page-section");
    // this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoint();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function () {
      Waypoint.refreshAll(); //it refresh all waypoints also
    })
  }

  createHeaderWayPoint() {
    let that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function (direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoint() {
    // let that = this;
    this.pageSections.each(function () {
      let currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function () {
          var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
          // this.headerLinks.removeClass("is-current-link");
          $("matchingHeaderLink").addClass("is-current-link");
        }
      });
    });
  }
}

export default StickyHeader;