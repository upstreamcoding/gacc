function campaignLoadEvents() {
  var searchObj = searchToObject();

  if (searchObj) {
    if (searchObj.campaign) {
      $('#modal--campaign--' + searchObj.campaign).modal('show');
    }
  }
}
