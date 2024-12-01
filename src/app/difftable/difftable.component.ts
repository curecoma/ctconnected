import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-difftable',
  templateUrl: './difftable.component.html',
  styleUrls: ['./difftable.component.scss']
})
export class DifftableComponent implements OnInit, OnDestroy {
  private headElement: HTMLMetaElement | null = null;

  ngOnInit() {
    this.addHead();
    this.initialize();
  }

  ngOnDestroy(): void {
    this.removeHead();
  }

  private addHead(): void {
    if (!this.headElement) {
      this.headElement = document.createElement('meta');
      this.headElement.name = 'bmstable';
      this.headElement.content = '/assets/JSON/header2.json';
      document.head.appendChild(this.headElement);
    }
  }

  private removeHead(): void {
    if (this.headElement && document.head.contains(this.headElement)) {
      document.head.removeChild(this.headElement);
      this.headElement = null;
    }
  }

  initialize() {
    const bmstableContent = $("meta[name=bmstable]").attr("content");
    if (typeof bmstableContent === "string") {
      $.getJSON(bmstableContent, function (header) {
        $.getJSON(header.data_url, function (information) {
          makeBMSTable(information, header.symbol);
        });
      });
    }
  }
}

function makeBMSTable(info: string | any[], mark: string) {
  console.log("is called2");
  var x = "";
  var ev = "";
  var count = 0;
  var obj = $("#table_int2");
  // Clear the table
  obj.html("");
  $("<tr height='20' style='color:white;background-color:#666666'><td align='center'>LV</td><td align='center'>曲名</td><td align='center'>差分DL</td><td align='center'>本体</td></tr>").appendTo(obj);
  var obj_sep = null;
  for (var i = 0; i < info.length; i++) {
    // Main content
    var str = $("<tr class='tr_normal'></tr>");
    if (info[i].state == 1) {
      str = $("<tr class='tr_new'></tr>");
    }
    if (info[i].state == 2) {
      str = $("<tr class='tr_update'></tr>");
    }
    // Level display
    $("<td style='background-color: #000000ee; z-index: 11;' width='5%' align='center'>" + info[i].level + "</td>").appendTo(str);

    // Title (IR)
    $("<td style='background-color: #000000ee; z-index: 11;' width='25%'>" + "<a href='http://www.dream-pro.info/~lavalse/LR2IR/search.cgi?mode=ranking&bmsmd5=" + info[i].md5 + "' target='_blank'>" + info[i].title + "</a></td>").appendTo(str);

    // Differences
    $("<td style='background-color: #000000ee; z-index: 11;' width='15%'><a href='" + info[i].url_diff + "'>" + info[i].sabun + "</a></td>").appendTo(str);

    // Main URL
    $("<td style='background-color: #000000ee; z-index: 11;' width='20%'>" + "<a href='" + info[i].url_orig + "'>" + info[i].artist + "</a>" + "</td>").appendTo(str);

    str.appendTo(obj);
    count++;
  }
}
