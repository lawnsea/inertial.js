<!DOCTYPE HTML>
<html i18n-values="dir:textdirection;">
<head>
<meta charset="utf-8">
<title i18n-content="title"></title>
<link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiklEQVQ4y0WSzYtVRxDFf/357n3PmQxRM8ZAEDdCiCuzlok7xT8gkBAM7hWX2bhIcOHGL+JOURxmEwNK/FYMJkIgKhLEbRaKGmcwGAdH39zbVeXivudAN1UHuqpOnzpu/edfbe8Npn5MKW/xIeIdGGBm0B3AVrAZKnKvbZa+f3z/9G+xN/jwVN3vT1d1TcoJ5wI2LsBADR03MjBTROSLdrk/a2YbYkxpuurX9AerSCmDM0wVEUGldBMNwOO9x5xDVfEhrgM2xhA8KWViysScMRP2fLOVHTObUTNUjXPX/uLIyevga7yPOB+JyQAm/OiTONdFKYXtM5sRVUSUIsKOL7ewtDhPM3xNKe1YGAAXx4KZdtOkFEQUUe3wKB++fkmIfVyscD6ipgBEUMwMUcXahmb5DUUEEUNV3zNp3i6S6ylcqjECItI1MAU1Y/VUn7nDu1E1SlkplBGL29fnUFV27TvK4pshpo6maZw3A1Nj4cX//HL5Di/+e0URoRShiI5ih2/dvsvzZ//SNkNECwDeTDEDEeP47A3uP/yHtujojouVi1dusv/AcYpot52RkL4zjXbuI/DD4Z85f+n3FRZFOTN3loOHThDygJBqnE84c+ScrdNADXB43yNWE/x05gaPnizw3dc7OXTsJBeu/kFetYbcX02sJvEhI8W6NaopZh2tEDwu1KTK+PXmA279+YD5+QWqyWlib5LUm8DHHjiP0QIMook+FdVPRBVEcc4TYkWsHIvNkN7kOpwL+NDDhYzhMTGqKr4C1vqPP/pgj1N52Q6XaZuGZrmhLQUxwGV8qMFXqHlEhLZtyZmlvd9uuwJEZ2abgM+AT4EacGOfisj7PIQwNnAcvVkA/n4HBTCjwpUJ2VAAAAAASUVORK5CYII=">
<style>
body {
  background-color: white;
  color: black;
  margin: 10px;
}

.header {
  overflow: auto;
  clear: both;
}

.header .logo {
  float: left;
}

.header .form {
  float: left;
  margin-top: 22px;
  -webkit-margin-start: 12px;
}

html[dir=rtl] .logo, html[dir=rtl] .form {
  float: right;
}

#downloads-summary {
  margin-top: 12px;
  border-top: 1px solid #9cc2ef;
  background-color: #ebeff9;
  padding: 3px;
  margin-bottom: 6px;
}

#downloads-summary-text {
  font-weight: bold;
}

#downloads-summary > a {
  float: right;
}

html[dir=rtl] #downloads-summary > a {
  float: left;
}

#downloads-display {
  max-width: 740px;
}

.download {
  position: relative;
  margin-top: 6px;
  -webkit-margin-start: 114px;
  -webkit-padding-start: 56px;
  margin-bottom: 15px;
}

.date-container {
  position: absolute;
  left: -110px;
  width: 110px;
}

html[dir=rtl] .date-container {
  left: auto;
  right: -110px;
}

.date-container .since {
  color: black;
}

.date-container .date {
  color: #666;
}

.download .icon {
  position: absolute;
  top: 2px;
  left: 9px;
  width: 32px;
  height: 32px;
}

html[dir=rtl] .icon {
  left: auto;
  right: 9px;
}

.download.otr > .safe,
.download.otr > .show-dangerous {
  background: url("data:image/png;base64,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") no-repeat 100% 100%;
  opacity: .66;
  -webkit-transition: opacity .15s;
}

html[dir=rtl] .download.otr > .safe,
html[dir=rtl] .download.otr > .show-dangerous {
  background-position: 0% 100%;
}

.download.otr > .safe:hover,
.download.otr > .show-dangerous:hover {
  opacity: 1;
}

.progress {
  position: absolute;
  top: -6px;
  left: 0px;
  width: 48px;
  height: 48px;
}

html[dir=rtl] .progress {
  left: auto;
  right: 0px;
}

.progress.background {
  background: url("data:image/png;base64,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");
}

.progress.foreground {
  background: url("data:image/png;base64,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");
}

.name {
  display: none;
  -webkit-padding-end: 16px;
  max-width: 450px;
  word-break: break-all;
}

.download .status {
  display: inline;
  color: #999;
  white-space: nowrap;
}

.download .url {
  color: #080;
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.controls a {
  color: #777;
  margin-right: 16px;
}

#downloads-pagination {
  padding-top: 24px;
  margin-left: 18px;
}

.page-navigation {
  padding: 8px;
  background-color: #ebeff9;
  margin-right: 4px;
}

.footer {
  height: 24px;
}

</style>
<script>// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// TODO(arv): Namespace

/**
 * The local strings get injected into the page usig a variable named
 * {@code templateData}. This class provides a simpler interface to access those
 * strings.
 * @constructor
 */
function LocalStrings() {
}

// Start of anonymous namespace.
(function() {

/**
 * Returns a formatted string where $1 to $9 are replaced by the second to the
 * tenth argument.
 * @param {string} s The format string.
 * @param {...string} The extra values to include in the formatted output.
 * @return {string} The string after format substitution.
 */
function replaceArgs(s, args) {
  return s.replace(/\$[$1-9]/g, function(m) {
    return (m == '$$') ? '$' : args[m[1]];
  });
}

/**
 * Returns a string after removing Windows-style accelerators.
 * @param {string} s The input string that may contain accelerators.
 * @return {string} The resulting string with accelerators removed.
 */
function trimAccelerators(s) {
  return s.replace(/&{1,2}/g, function(m) {
    return (m == '&&') ? '&' : '';
  });
}

LocalStrings.prototype = {
  /**
   * The template data object.
   * @type {Object}
   */
  templateData: null,

  /**
   * Gets a localized string by its id.
   * @param {string} s The ID of the string we want.
   * @return {string} The localized string.
   */
  getString: function(id) {
    // TODO(arv): We should not rely on a global variable here.
    return (this.templateData || window.templateData)[id] || '';
  },

  /**
   * Returns a formatted localized string where $1 to $9 are replaced by the
   * second to the tenth argument.
   * @param {string} id The ID of the string we want.
   * @param {...string} The extra values to include in the formatted output.
   * @return {string} The formatted string.
   */
  getStringF: function(id, var_args) {
    return replaceArgs(this.getString(id), arguments);
  },

  /**
   * Gets a localized string (stripped of Windows-style accelerators) by its id.
   * @param {string} s The ID of the string we want.
   * @return {string} The localized string.
   */
  getStringWithoutAccelerator: function(id) {
    return trimAccelerators(this.getString(id));
  },

  /**
   * Returns a formatted localized string (stripped of Windows-style
   * accelerators) where $1 to $9 are replaced by the second to the tenth
   * argument.
   * @param {string} id The ID of the string we want.
   * @param {...string} The extra values to include in the formatted output.
   * @return {string} The formatted string.
   */
  getStringWithoutAcceleratorF: function(id, var_args) {
    return replaceArgs(this.getStringWithoutAccelerator(id), arguments);
  }
};

// End of anonymous namespace.
})();
</script>
<script>

///////////////////////////////////////////////////////////////////////////////
// Helper functions
function $(o) {return document.getElementById(o);}

/**
 * Sets the display style of a node.
 */
function showInline(node, isShow) {
  node.style.display = isShow ? 'inline' : 'none';
}

function showInlineBlock(node, isShow) {
  node.style.display = isShow ? 'inline-block' : 'none';
}

/**
 * Creates an element of a specified type with a specified class name.
 * @param {String} type The node type.
 * @param {String} className The class name to use.
 */
function createElementWithClassName(type, className) {
  var elm = document.createElement(type);
  elm.className = className;
  return elm;
}

/**
 * Creates a link with a specified onclick handler and content
 * @param {String} onclick The onclick handler
 * @param {String} value The link text
 */
function createLink(onclick, value) {
  var link = document.createElement('a');
  link.onclick = onclick;
  link.href = '#';
  link.innerHTML = value;
  return link;
}

/**
 * Creates a button with a specified onclick handler and content
 * @param {String} onclick The onclick handler
 * @param {String} value The button text
 */
function createButton(onclick, value) {
  var button = document.createElement('input');
  button.type = 'button';
  button.value = value;
  button.onclick = onclick;
  return button;
}

///////////////////////////////////////////////////////////////////////////////
// Downloads
/**
 * Class to hold all the information about the visible downloads.
 */
function Downloads() {
  this.downloads_ = {};
  this.node_ = $('downloads-display');
  this.summary_ = $('downloads-summary-text');
  this.searchText_ = '';

  // Keep track of the dates of the newest and oldest downloads so that we
  // know where to insert them.
  this.newestTime_ = -1;
}

/**
 * Called when a download has been updated or added.
 * @param {Object} download A backend download object (see downloads_ui.cc)
 */
Downloads.prototype.updated = function(download) {
  var id = download.id;
  if (!!this.downloads_[id]) {
    this.downloads_[id].update(download);
  } else {
    this.downloads_[id] = new Download(download);
    // We get downloads in display order, so we don't have to worry about
    // maintaining correct order - we can assume that any downloads not in
    // display order are new ones and so we can add them to the top of the
    // list.
    if (download.started > this.newestTime_) {
      this.node_.insertBefore(this.downloads_[id].node, this.node_.firstChild);
      this.newestTime_ = download.started;
    } else {
      this.node_.appendChild(this.downloads_[id].node);
    }
    this.updateDateDisplay_();
  }
}

/**
 * Set our display search text.
 * @param {String} searchText The string we're searching for.
 */
Downloads.prototype.setSearchText = function(searchText) {
  this.searchText_ = searchText;
}

/**
 * Update the summary block above the results
 */
Downloads.prototype.updateSummary = function() {
  if (this.searchText_) {
    this.summary_.textContent = localStrings.getStringF('searchresultsfor',
                                                        this.searchText_);
  } else {
    this.summary_.innerHTML = localStrings.getString('downloads');
  }

  var hasDownloads = false;
  for (var i in this.downloads_) {
    hasDownloads = true;
    break;
  }

  if (!hasDownloads) {
    this.node_.innerHTML = localStrings.getString('noresults');
  }
}

/**
 * Update the date visibility in our nodes so that no date is
 * repeated.
 */
Downloads.prototype.updateDateDisplay_ = function() {
  var dateContainers = document.getElementsByClassName('date-container');
  var displayed = {};
  for (var i = 0, container; container = dateContainers[i]; i++) {
    var dateString = container.getElementsByClassName('date')[0].innerHTML;
    if (!!displayed[dateString]) {
      container.style.display = 'none';
    } else {
      displayed[dateString] = true;
      container.style.display = 'block';
    }
  }
}

/**
 * Remove a download.
 * @param {Number} id The id of the download to remove.
 */
Downloads.prototype.remove = function(id) {
  this.node_.removeChild(this.downloads_[id].node);
  delete this.downloads_[id];
  this.updateDateDisplay_();
}

/**
 * Clear all downloads and reset us back to a null state.
 */
Downloads.prototype.clear = function() {
  for (var id in this.downloads_) {
    this.downloads_[id].clear();
    this.remove(id);
  }
}

///////////////////////////////////////////////////////////////////////////////
// Download
/**
 * A download and the DOM representation for that download.
 * @param {Object} download A backend download object (see downloads_ui.cc)
 */
function Download(download) {
  // Create DOM
  this.node = createElementWithClassName('div','download' +
                                         (download.otr ? ' otr' : ''));

  // Dates
  this.dateContainer_ = createElementWithClassName('div', 'date-container');
  this.node.appendChild(this.dateContainer_);

  this.nodeSince_ = createElementWithClassName('div', 'since');
  this.nodeDate_ = createElementWithClassName('div', 'date');
  this.dateContainer_.appendChild(this.nodeSince_);
  this.dateContainer_.appendChild(this.nodeDate_);

  // Container for all 'safe download' UI.
  this.safe_ = createElementWithClassName('div', 'safe');
  this.safe_.ondragstart = this.drag_.bind(this);
  this.node.appendChild(this.safe_);

  if (download.state != Download.States.COMPLETE) {
    this.nodeProgressBackground_ =
        createElementWithClassName('div', 'progress background');
    this.safe_.appendChild(this.nodeProgressBackground_);

    this.canvasProgress_ =
        document.getCSSCanvasContext('2d', 'canvas_' + download.id,
            Download.Progress.width,
            Download.Progress.height);

    this.nodeProgressForeground_ =
        createElementWithClassName('div', 'progress foreground');
    this.nodeProgressForeground_.style.webkitMask =
        '-webkit-canvas(canvas_'+download.id+')';
    this.safe_.appendChild(this.nodeProgressForeground_);
  }

  this.nodeImg_ = createElementWithClassName('img', 'icon');
  this.safe_.appendChild(this.nodeImg_);

  // FileLink is used for completed downloads, otherwise we show FileName.
  this.nodeTitleArea_ = createElementWithClassName('div', 'title-area');
  this.safe_.appendChild(this.nodeTitleArea_);

  this.nodeFileLink_ = createLink(this.openFile_.bind(this), '');
  this.nodeFileLink_.className = 'name';
  this.nodeFileLink_.style.display = 'none';
  this.nodeTitleArea_.appendChild(this.nodeFileLink_);

  this.nodeFileName_ = createElementWithClassName('span', 'name');
  this.nodeFileName_.style.display = 'none';
  this.nodeTitleArea_.appendChild(this.nodeFileName_);

  this.nodeStatus_ = createElementWithClassName('span', 'status');
  this.nodeTitleArea_.appendChild(this.nodeStatus_);

  this.nodeURL_ = createElementWithClassName('div', 'url');
  this.safe_.appendChild(this.nodeURL_);

  // Controls.
  this.nodeControls_ = createElementWithClassName('div', 'controls');
  this.safe_.appendChild(this.nodeControls_);

  // We don't need "show in folder" in chromium os. See download_ui.cc and
  // http://code.google.com/p/chromium-os/issues/detail?id=916.
  var showinfolder = localStrings.getString('control_showinfolder');
  if (showinfolder) {
    this.controlShow_ = createLink(this.show_.bind(this), showinfolder);
    this.nodeControls_.appendChild(this.controlShow_);
  } else {
    this.controlShow_ = null;
  }

  this.controlRetry_ = document.createElement('a');
  this.controlRetry_.textContent = localStrings.getString('control_retry');
  this.nodeControls_.appendChild(this.controlRetry_);

  // Pause/Resume are a toggle.
  this.controlPause_ = createLink(this.togglePause_.bind(this),
      localStrings.getString('control_pause'));
  this.nodeControls_.appendChild(this.controlPause_);

  this.controlResume_ = createLink(this.togglePause_.bind(this),
      localStrings.getString('control_resume'));
  this.nodeControls_.appendChild(this.controlResume_);

  this.controlRemove_ = createLink(this.remove_.bind(this),
      localStrings.getString('control_removefromlist'));
  this.nodeControls_.appendChild(this.controlRemove_);

  this.controlCancel_ = createLink(this.cancel_.bind(this),
      localStrings.getString('control_cancel'));
  this.nodeControls_.appendChild(this.controlCancel_);

  // Container for 'unsafe download' UI.
  this.danger_ = createElementWithClassName('div', 'show-dangerous');
  this.node.appendChild(this.danger_);

  this.dangerDesc_ = document.createElement('div');
  this.danger_.appendChild(this.dangerDesc_);

  this.dangerSave_ = createButton(this.saveDangerous_.bind(this),
      localStrings.getString('danger_save'));
  this.danger_.appendChild(this.dangerSave_);

  this.dangerDiscard_ = createButton(this.discardDangerous_.bind(this),
      localStrings.getString('danger_discard'));
  this.danger_.appendChild(this.dangerDiscard_);

  // Update member vars.
  this.update(download);
}

/**
 * The states a download can be in. These correspond to states defined in
 * DownloadsDOMHandler::CreateDownloadItemValue
 */
Download.States = {
  IN_PROGRESS : "IN_PROGRESS",
  CANCELLED : "CANCELLED",
  COMPLETE : "COMPLETE",
  PAUSED : "PAUSED",
  DANGEROUS : "DANGEROUS",
}

/**
 * Constants for the progress meter.
 */
Download.Progress = {
  width : 48,
  height : 48,
  radius : 24,
  centerX : 24,
  centerY : 24,
  base : -0.5 * Math.PI,
  dir : false,
}

/**
 * Updates the download to reflect new data.
 * @param {Object} download A backend download object (see downloads_ui.cc)
 */
Download.prototype.update = function(download) {
  this.id_ = download.id;
  this.filePath_ = download.file_path;
  this.fileName_ = download.file_name;
  this.url_ = download.url;
  this.state_ = download.state;

  this.since_ = download.since_string;
  this.date_ = download.date_string;

  // See DownloadItem::PercentComplete
  this.percent_ = Math.max(download.percent, 0);
  this.progressStatusText_ = download.progress_status_text;
  this.received_ = download.received;

  if (this.state_ == Download.States.DANGEROUS) {
    this.dangerDesc_.innerHTML = localStrings.getStringF('danger_desc',
                                                         this.fileName_);
    this.danger_.style.display = 'block';
    this.safe_.style.display = 'none';
  } else {
    this.nodeImg_.src = 'chrome://fileicon/' + this.filePath_;

    if (this.state_ == Download.States.COMPLETE) {
      this.nodeFileLink_.innerHTML = this.fileName_;
      this.nodeFileLink_.href = this.filePath_;
    } else {
      this.nodeFileName_.innerHTML = this.fileName_;
    }

    showInline(this.nodeFileLink_, this.state_ == Download.States.COMPLETE);
    // nodeFileName_ has to be inline-block to avoid the 'interaction' with
    // nodeStatus_. If both are inline, it appears that their text contents
    // are merged before the bidi algorithm is applied leading to an
    // undesirable reordering. http://crbug.com/13216
    showInlineBlock(this.nodeFileName_, this.state_ != Download.States.COMPLETE);

    if (this.state_ == Download.States.IN_PROGRESS) {
      this.nodeProgressForeground_.style.display = 'block';
      this.nodeProgressBackground_.style.display = 'block';

      // Draw a pie-slice for the progress.
      this.canvasProgress_.clearRect(0, 0,
                                     Download.Progress.width,
                                     Download.Progress.height);
      this.canvasProgress_.beginPath();
      this.canvasProgress_.moveTo(Download.Progress.centerX,
                                  Download.Progress.centerY);

      // Draw an arc CW for both RTL and LTR. http://crbug.com/13215
      this.canvasProgress_.arc(Download.Progress.centerX,
                               Download.Progress.centerY,
                               Download.Progress.radius,
                               Download.Progress.base,
                               Download.Progress.base + Math.PI * 0.02 *
                               Number(this.percent_),
                               false);

      this.canvasProgress_.lineTo(Download.Progress.centerX,
                                  Download.Progress.centerY);
      this.canvasProgress_.fill();
      this.canvasProgress_.closePath();
    } else if (this.nodeProgressBackground_) {
      this.nodeProgressForeground_.style.display = 'none';
      this.nodeProgressBackground_.style.display = 'none';
    }

    if (this.controlShow_) {
      showInline(this.controlShow_, this.state_ == Download.States.COMPLETE);
    }
    showInline(this.controlRetry_, this.state_ == Download.States.CANCELLED);
    this.controlRetry_.href = this.url_;
    showInline(this.controlPause_, this.state_ == Download.States.IN_PROGRESS);
    showInline(this.controlResume_, this.state_ == Download.States.PAUSED);
    var showCancel = this.state_ == Download.States.IN_PROGRESS ||
                     this.state_ == Download.States.PAUSED;
    showInline(this.controlCancel_, showCancel);
    showInline(this.controlRemove_, !showCancel);

    this.nodeSince_.innerHTML = this.since_;
    this.nodeDate_.innerHTML = this.date_;
    // Don't unnecessarily update the url, as doing so will remove any
    // text selection the user has started (http://crbug.com/44982).
    if (this.nodeURL_.textContent != this.url_)
      this.nodeURL_.textContent = this.url_;
    this.nodeStatus_.innerHTML = this.getStatusText_();

    this.danger_.style.display = 'none';
    this.safe_.style.display = 'block';
  }
}

/**
 * Removes applicable bits from the DOM in preparation for deletion.
 */
Download.prototype.clear = function() {
  this.safe_.ondragstart = null;
  this.nodeFileLink_.onclick = null;
  if (this.controlShow_) {
    this.controlShow_.onclick = null;
  }
  this.controlCancel_.onclick = null;
  this.controlPause_.onclick = null;
  this.controlResume_.onclick = null;
  this.dangerDiscard_.onclick = null;

  this.node.innerHTML = '';
}

/**
 * @return {String} User-visible status update text.
 */
Download.prototype.getStatusText_ = function() {
  switch (this.state_) {
    case Download.States.IN_PROGRESS:
      return this.progressStatusText_;
    case Download.States.CANCELLED:
      return localStrings.getString('status_cancelled');
    case Download.States.PAUSED:
      return localStrings.getString('status_paused');
    case Download.States.DANGEROUS:
      return localStrings.getString('danger_desc');
    case Download.States.COMPLETE:
      return '';
  }
}

/**
 * Tells the backend to initiate a drag, allowing users to drag
 * files from the download page and have them appear as native file
 * drags.
 */
Download.prototype.drag_ = function() {
  chrome.send('drag', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend to open this file.
 */
Download.prototype.openFile_ = function() {
  chrome.send('openFile', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend that the user chose to save a dangerous file.
 */
Download.prototype.saveDangerous_ = function() {
  chrome.send('saveDangerous', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend that the user chose to discard a dangerous file.
 */
Download.prototype.discardDangerous_ = function() {
  chrome.send('discardDangerous', [this.id_.toString()]);
  downloads.remove(this.id_);
  return false;
}

/**
 * Tells the backend to show the file in explorer.
 */
Download.prototype.show_ = function() {
  chrome.send('show', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend to pause this download.
 */
Download.prototype.togglePause_ = function() {
  chrome.send('togglepause', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend to remove this download from history and download shelf.
 */
 Download.prototype.remove_ = function() {
  chrome.send('remove', [this.id_.toString()]);
  return false;
}

/**
 * Tells the backend to cancel this download.
 */
Download.prototype.cancel_ = function() {
  chrome.send('cancel', [this.id_.toString()]);
  return false;
}

///////////////////////////////////////////////////////////////////////////////
// Page:
var downloads, localStrings, resultsTimeout;

function load() {
  localStrings = new LocalStrings();
  downloads = new Downloads();
  $('term').focus();
  setSearch('');
}

function setSearch(searchText) {
  downloads.clear();
  downloads.setSearchText(searchText);
  chrome.send('getDownloads', [searchText.toString()]);
}

function clearAll() {
  downloads.clear();
  downloads.setSearchText('');
  chrome.send('clearAll', []);
  return false;
}

///////////////////////////////////////////////////////////////////////////////
// Chrome callbacks:
/**
 * Our history system calls this function with results from searches or when
 * downloads are added or removed.
 */
function downloadsList(results) {
  if (resultsTimeout)
    clearTimeout(resultsTimeout);
  window.console.log('results');
  downloads.clear();
  downloadUpdated(results);
  downloads.updateSummary();
}

/**
 * When a download is updated (progress, state change), this is called.
 */
function downloadUpdated(results) {
  // Sometimes this can get called too early.
  if (!downloads)
    return;

  var start = Date.now();
  for (var i = 0; i < results.length; i++) {
    downloads.updated(results[i]);
    // Do as much as we can in 50ms.
    if (Date.now() - start > 50) {
      clearTimeout(resultsTimeout);
      resultsTimeout = setTimeout(downloadUpdated, 5, results.slice(i + 1));
      break;
    }
  }
}

</script>
</head>
<body onload="load();" i18n-values=".style.fontFamily:fontfamily;.style.fontSize:fontsize">
<div class="header">
  <a href="" onclick="setSearch(''); return false;">
    <img src="data:image/png;base64,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"
         width="67" height="67" class="logo" border="0" /></a>
  <form method="post" action=""
      onsubmit="setSearch(this.term.value); return false;"
      class="form">
    <input type="text" name="term" id="term" />
    <input type="submit" name="submit" i18n-values="value:searchbutton" />
  </form>
</div>
<div class="main">
  <div id="downloads-summary">
    <span id="downloads-summary-text" i18n-content="downloads">Downloads</span>
    <a id="clear-all" href="" onclick="clearAll();" i18n-content="clear_all">Clear All</a>
  </div>
  <div id="downloads-display"></div>
</div>
<div class="footer">
</div>
</body>
</html>
<script>var templateData = {"clear_all":"Clear all","control_cancel":"Cancel","control_pause":"Pause","control_removefromlist":"Remove from list","control_resume":"Resume","control_retry":"Retry download","control_showinfolder":"Show in Finder","danger_desc":"This type of file can harm your computer. Are you sure you want to download $1?","danger_discard":"Discard","danger_save":"Save","downloads":"Downloads","fontfamily":"Helvetica, sans-serif","fontsize":"84%","no_results":"Search downloads","searchbutton":"Search downloads","searchresultsfor":"Search results for '$1'","status_cancelled":"Canceled","status_paused":"Paused","textdirection":"ltr","title":"Downloads"};</script><script>// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview This is a simple template engine inspired by JsTemplates
 * optimized for i18n.
 *
 * It currently supports two handlers:
 *
 *   * i18n-content which sets the textContent of the element
 *
 *     <span i18n-content="myContent"></span>
 *     i18nTemplate.process(element, {'myContent': 'Content'});
 *
 *   * i18n-values is a list of attribute-value or property-value pairs.
 *     Properties are prefixed with a '.' and can contain nested properties.
 *
 *     <span i18n-values="title:myTitle;.style.fontSize:fontSize"></span>
 *     i18nTemplate.process(element, {
 *       'myTitle': 'Title',
 *       'fontSize': '13px'
 *     });
 */

var i18nTemplate = (function() {
  /**
   * This provides the handlers for the templating engine. The key is used as
   * the attribute name and the value is the function that gets called for every
   * single node that has this attribute.
   * @type {Object}
   */
  var handlers = {
    /**
     * This handler sets the textContent of the element.
     */
    'i18n-content': function(element, attributeValue, obj) {
      element.textContent = obj[attributeValue];
    },

    /**
     * This handler adds options to a select element.
     */
    'i18n-options': function(element, attributeValue, obj) {
      var options = obj[attributeValue];
      options.forEach(function(values) {
        var option = typeof values == 'string' ? new Option(values) :
            new Option(values[1], values[0]);
        element.appendChild(option);
      });
    },

    /**
     * This is used to set HTML attributes and DOM properties,. The syntax is:
     *   attributename:key;
     *   .domProperty:key;
     *   .nested.dom.property:key
     */
    'i18n-values': function(element, attributeValue, obj) {
      var parts = attributeValue.replace(/\s/g, '').split(/;/);
      for (var j = 0; j < parts.length; j++) {
        var a = parts[j].match(/^([^:]+):(.+)$/);
        if (a) {
          var propName = a[1];
          var propExpr = a[2];

          // Ignore missing properties
          if (propExpr in obj) {
            var value = obj[propExpr];
            if (propName.charAt(0) == '.') {
              var path = propName.slice(1).split('.');
              var object = element;
              while (object && path.length > 1) {
                object = object[path.shift()];
              }
              if (object) {
                object[path] = value;
                // In case we set innerHTML (ignoring others) we need to
                // recursively check the content
                if (path == 'innerHTML') {
                  process(element, obj);
                }
              }
            } else {
              element.setAttribute(propName, value);
            }
          } else {
            console.warn('i18n-values: Missing value for "' + propExpr + '"');
          }
        }
      }
    }
  };

  var attributeNames = [];
  for (var key in handlers) {
    attributeNames.push(key);
  }
  var selector = '[' + attributeNames.join('],[') + ']';

  /**
   * Processes a DOM tree with the {@code obj} map.
   */
  function process(node, obj) {
    var elements = node.querySelectorAll(selector);
    for (var element, i = 0; element = elements[i]; i++) {
      for (var j = 0; j < attributeNames.length; j++) {
        var name = attributeNames[j];
        var att = element.getAttribute(name);
        if (att != null) {
          handlers[name](element, att, obj);
        }
      }
    }
  }

  return {
    process: process
  };
})();
</script><script>i18nTemplate.process(document, templateData);</script>