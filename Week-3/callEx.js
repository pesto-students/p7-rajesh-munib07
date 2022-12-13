// Call function : attaching values(fixed count) to this using call
function format(type, overs) {
    this.type = type;
    this.overs = overs;
}
function t20(seriesName) {
    format.call(this, "ChampionsTrophy", "WCT20");
    this.seriesName = seriesName;
    console.log("Series T20 details are ", this);
}
function odi(seriesName) {
    format.call(this, "WC", "AsiaCup");
    this.seriesName = seriesName;
    console.log("Series odi details are ", this);
}
const t20Call = new t20("England Won");
const odiCall = new odi("Englan Drew with NZ");
