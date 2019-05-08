import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(el, offset) {
    this.itemsToReveal = el;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();
  }
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
  // add points when scroll down use --is-visible on those
  createWayPoints() {
    let that = this;
    this.itemsToReveal.each(function () {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    })
  }
}

export default RevealOnScroll;