// Apply function : attaching a list of args to this using apply
function format(event, type) {
    this.type = type;
    this.event = event;
}
function t20(result) {
    format.apply(this, ["WCT20", "T20", "XYZ"]);
    this.result = result;
    console.log("Match details are ", this);
}
function odi(result) {
    format.apply(this, new Array("WCODI","ODI"));
    this.result = result;
    console.log("Series details are ", this);
}
const matchApply = new t20("England Won");
const seriesApply = new odi("England drew with NZ");
